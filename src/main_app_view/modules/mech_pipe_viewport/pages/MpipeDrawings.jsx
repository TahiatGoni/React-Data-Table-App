import { SearchableTable } from '../../../components/jsx/SearchableTable'
import Container from 'react-bootstrap/Container';
import { headingObjectFactory } from '../../../../sessionUtils'
import React, { Component, Suspense } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Fallback} from '../../../components/jsx/Fallback'
import '../../../components/css/general_styles.css';
import "../../../components/css/table_styles.css"
import {checkedIDretriver, connected_filter} from "../../../../general_utils"


export default class MpipeDrawings extends Component {

	constructor(props) {
		super(props)
		this.data = this.props.masterdata["dwg_table"]
		
		this.fields = [/*"DWGiddate", 'DWGtype',*/'DWGno', 'DWGshtno', 'DWGrev', 'DWGsplno', 'LNEidno', 'FIWP', 'WBS']
		this.checkedIDretriver = checkedIDretriver.bind(this)
		this.filterGenerator = this.filterGenerator.bind(this)
		this.dataFilter = this.dataFilter.bind(this)

		this.headings = [
			// headingObjectFactory("Date", 0),
			// headingObjectFactory("Drawing Type", 1), 
			headingObjectFactory("Drawing No.", 2), 
			headingObjectFactory("Sheet No.", 3),
			headingObjectFactory("Rev No.", 5), 
			headingObjectFactory("Spool No.", 6), 
			headingObjectFactory("Line No.", 7), 
			headingObjectFactory("FIWP No.", 8),
			headingObjectFactory("WBS No.", 9),
		]

		this.tableId = "mpipe-drawing-table"
	}

	filterGenerator() {
		let filterIds = this.checkedIDretriver(this.tableId)
		let filteredData = this.data

		filteredData = filteredData.filter(entry=>{
															try{
																return (filterIds.includes(String(entry['id'])));
															}
															catch(e){
																return false;
															}
															
														})

		filteredData.forEach(element => element['type'] = 'mpipe_dwg')
		this.props.ruleFilter(new Set(filteredData))
		
	}


	dataFilter(data, ruleList, type="rule") {

		let filteredData = []
		let addData = []
		if(ruleList.size === 0) {
			if(type === "rule"){
				return data
			}
			else if(type === "select") {
				return []
			}
		}

		for(let element of ruleList) {
			switch(element['type']) {
				case "mpipe_dwg":
					addData = connected_filter(data, element, 'id', 'id')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_linelist":
					addData = connected_filter(data, element, 'LNEidno', 'LNEno')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_bonds":
					addData = connected_filter(data, element, 'id', 'DWGidno')
					filteredData = [...filteredData, ...addData]
					break;
				default:
					break;

			}
		}
		
		if(type==="select") {
			let filterIds = []
			for( let element of filteredData) {
				filterIds.push(element.id)
			}
			return filterIds
		}

		return filteredData
	}

	render() {
		
		const renderTools = [
							
							{
								"disabled": false,
								"className": "btn btn-dark",
								"id": "filter_test",
								"name": "Filter",
								"src": "assets/util_toolbar/filter.svg",
								"onClick": this.filterGenerator,
							},

						]

		if(this.props.content.length === 0) {
			this.props.contentSetter(renderTools)
		}
		
		return(
			<Suspense fallback={<Fallback/>}>
				<Container fluid>
					<Row>
						<Container className="floating-container" fluid>
							<Col>
								<SearchableTable type={"mpipe_dwg"} id={this.tableId} data={this.data} dataFilter={this.dataFilter} fields={this.fields} headings={this.headings}/>
							</Col>
						</Container>
					</Row>
					
				</Container>
			</Suspense>
		)
	}
}