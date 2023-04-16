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


export default class MpipeBonds extends Component {

	constructor(props) {
		super(props)
		this.data = this.props.masterdata["bonds_table"]
		
		this.fields = [/*"Bidedate", 'Btype',*/'Bno', 'Bmat', 'Bsize', 'Btm', 'Btrade', 'Blotno', 'Brepno']
		this.checkedIDretriver = checkedIDretriver.bind(this)
		this.filterGenerator = this.filterGenerator.bind(this)
		this.dataFilter = this.dataFilter.bind(this)

		this.headings = [
			// headingObjectFactory("Date", 0),
			// headingObjectFactory("Bond Type", 1), 
			headingObjectFactory("Bond No.", 2), 
			headingObjectFactory("Material", 3),
			headingObjectFactory("Bond Size", 5), 
			headingObjectFactory("Bond Tm", 6), 
			headingObjectFactory("Bonder(s)", 8),
			headingObjectFactory("Lot No.", 9),
			headingObjectFactory("Repair No.", 10),
		]

		this.tableId = "mpipe-bonds-table"
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

		filteredData.forEach(element => element['type'] = 'mpipe_bonds')
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
					addData = connected_filter(data, element, 'DWGidno', 'id')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_linelist":

					for(let connectedElement of connected_filter(this.props.masterdata['dwg_table'], element, 'LNEidno', 'LNEno')) {
						addData = connected_filter(data, connectedElement, "DWGidno", "id")
						filteredData = [...filteredData, ...addData]
					} 
					break;
				case "mpipe_bonds":
					addData = connected_filter(data, element, 'id', 'id')
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
								<SearchableTable type={"mpipe_bonds"} id={this.tableId} data={this.data} dataFilter={this.dataFilter} fields={this.fields} headings={this.headings}/>
							</Col>
						</Container>
					</Row>
					
				</Container>
			</Suspense>
		)
	}
}