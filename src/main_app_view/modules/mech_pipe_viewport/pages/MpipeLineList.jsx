import React, { Component, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {checkedIDretriver, connected_filter} from "../../../../general_utils"
import {Fallback} from '../../../components/jsx/Fallback'
import { headingObjectFactory } from '../../../../sessionUtils'
import { SearchableTable } from '../../../components/jsx/SearchableTable'

export default class MpipeLineList extends Component {

	constructor(props) {
		super(props)

		this.data = this.props.masterdata["line_list_table"]
		this.fields = [/*"LNEidedate",*/ 'LNEno', 'LNEsysdes', 'LNEsyssub', 'LNEsyscode', 'LNEspec', 'LNE_CWP', 'LNEtesttype']
		this.checkedIDretriver = checkedIDretriver.bind(this)
		this.filterGenerator = this.filterGenerator.bind(this)
		this.dataFilter = this.dataFilter.bind(this)

		this.headings = [
			headingObjectFactory("Line No.", 1), 
			headingObjectFactory("System", 2),
			headingObjectFactory("Sub-System", 3), 
			headingObjectFactory("Code", 4), 
			headingObjectFactory("Spec.", 5), 
			headingObjectFactory("CWP No.", 6), 
			headingObjectFactory("Test No.", 7)
		]

		this.tableId = "mpipe-line-list-table"
	}


	filterGenerator() {
		let filterIds = this.checkedIDretriver(this.tableId)
		let filteredData = this.data
		console.log(filterIds)
		filteredData = filteredData.filter(entry=>{
															try{
																return (filterIds.includes(String(entry['id'])));
															}
															catch(e){
																return false;
															}
															
														})

		filteredData.forEach(element => element['type'] = 'mpipe_linelist')

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

		let dwgList = this.props.masterdata["dwg_table"]
		for(let element of ruleList) {
			switch(element['type']) {
				case "mpipe_dwg":
					addData = connected_filter(data, element, "LNEno", "LNEidno")
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_linelist":
					addData = connected_filter(data, element, "id", "id")
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_bonds":
					for(let connectedElement of connected_filter(dwgList, element, 'id', 'DWGidno')) {
						addData = connected_filter(data, connectedElement, "LNEno", "LNEidno")
						filteredData = [...filteredData, ...addData]
					}
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
								<SearchableTable type={"mpipe_linelist"} id={this.tableId} data={this.data} dataFilter={this.dataFilter} fields={this.fields} headings={this.headings}/>
							</Col>
						</Container>
					</Row>
				</Container>
			</Suspense>
		)
	}
}