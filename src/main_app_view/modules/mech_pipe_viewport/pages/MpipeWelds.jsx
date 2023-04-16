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


export default class MpipeWelds extends Component {

	constructor(props) {
		super(props)
		this.data = this.props.masterdata["welds_table"]
	
		this.fields = [/*"Widedate", 'Wtype',*/'Wno', 'Wsize', 'Wtm', 'Wpro', 'Wtrades', 'Wlotno', 'Wrepno']
		this.checkedIDretriver = checkedIDretriver.bind(this)
		this.filterGenerator = this.filterGenerator.bind(this)
		this.dataFilter = this.dataFilter.bind(this)
		this.headings = [
			// headingObjectFactory("Date", 0),
			// headingObjectFactory("Weld Type", 1), 
			headingObjectFactory("Weld No.", 2), 
			headingObjectFactory("Weld Size", 3), 
			headingObjectFactory("Weld Tm.", 5),
			headingObjectFactory("Wps No.", 6), 
			headingObjectFactory("Welder(s)", 7), 
			headingObjectFactory("Lot No.", 8), 
			headingObjectFactory("Repair No.", 9),
		]

		this.tableId = "mpipe-welds-table"
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

		filteredData.forEach(element => element['type'] = 'mpipe_welds')

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
				case "mpipe_welds":
					addData = connected_filter(data, element, 'id', 'id')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_linelist":
					for(let connectedElement of connected_filter(this.props.masterdata["dwg_table"], element, "LNEidno", "LNEno")) {
						addData = connected_filter(data, connectedElement, 'DWGidno', 'id')
						filteredData = [...filteredData, ...addData]
					}
					break;
				case "mpipe_bonds":
					addData = connected_filter(data, element, 'DWGidno', 'DWGidno')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_fuses":
					addData = connected_filter(data, element, 'DWGidno', 'DWGidno')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_bolts":
					addData = connected_filter(data, element, 'DWGidno', 'DWGidno')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_ndes":
					addData = connected_filter(data, element, 'id', 'NDEWid')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_vts":
					addData = connected_filter(data, element, "RVTidno", "id")
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_ht":
					addData = connected_filter(data, element, 'id', 'Widno')
					filteredData = [...filteredData, ...addData]
					break;
				case "mpipe_insulation":
					for(let connectedElement of connected_filter(this.props.masterdata['line_list_table'], element, "INRidno", "id")) {
						for(let nextConnectedElement of connected_filter(this.props.masterdata['dwg_table'], connectedElement, "LNEidno", 'LNEno')) {
							addData = connected_filter(data, nextConnectedElement, 'DWGidno', 'id')
							filteredData = [...filteredData, ...addData]
						} 
					}
					break;
				case "mpipe_boltup":
					addData = connected_filter(data, element, 'DWGidno', 'DWGidno')
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
							
							// {
							// 	"disabled": false,
							// 	"className": "btn btn-dark",
							// 	"id": "del_test",
							// 	"name": "Delete",
							// 	"src": "assets/util_toolbar/trash.svg",
							// 	"onClick": ()=>{console.log("Deleted!")},
							// },
							{
								"disabled": false,
								"className": "btn btn-dark",
								"id": "filter_test",
								"name": "Filter",
								"src": "assets/util_toolbar/filter.svg",
								//"onClick": ()=>{this.props.ruleFilter(new Set(["mpipe_drawings_1", "mpipe_drawings_2", "mpipe_drawings_3", "mpipe_drawings_4", "mpipe_drawings_5", "mpipe_drawings_6",]))},
								"onClick": this.filterGenerator,
							},
							// {
							// 	"disabled": false,
							// 	"className": "btn btn-dark",
							// 	"id": "add_test",
							// 	"name": "Add",
							// 	"src": "assets/util_toolbar/add.svg",
							// 	"onClick": ()=>{console.log("Added!")},
							// },
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
								<SearchableTable type={"mpipe_welds"} id={this.tableId} data={this.data} dataFilter={this.dataFilter} fields={this.fields} headings={this.headings}/>
							</Col>
						</Container>
					</Row>
					
				</Container>
			</Suspense>
		)
	}
}