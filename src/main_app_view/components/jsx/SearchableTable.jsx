import {TableRow, TableHeading, TableSearchRow} from './SearchableTableComponents'
// import { headingObjectFactory } from '../../../sessionUtils'
import React, { useState, useEffect, startTransition, useContext } from 'react';
import merge from 'lodash.merge'
import {RuleFilterContext} from "../../context_providers/RuleFilterContext"
import '../css/table_styles.css';
import { sortBy } from "../../../general_utils"

export function SearchableTable(props) {

	//Need to standardize searching
	const context = useContext(RuleFilterContext)
	const ruleList = context["ruleList"];
	const selectRow = context["selectRow"];

	const [showData, setShowData] = useState(props.dataFilter(props.data, ruleList))

	const [highlightData, setHighlightData] = useState(props.dataFilter(props.data, selectRow, "select"))

	useEffect(() => {
		setShowData(props.dataFilter(props.data, ruleList))
	}, [ruleList]);

	useEffect(() => {
		setHighlightData(props.dataFilter(props.data, selectRow, "select"));
	}, [selectRow]);

	const [searchParams, setSearch] = useState({})

	useEffect(()=>{
		let paramsDict = {}

		for(let field of props.fields) {
			paramsDict[field] = ""
		}	
		setSearch(paramsDict)
	}
	, [])


	const clearCheckbox = () => {

		const tableInstance = document.getElementById(props.id)

		for(let element of tableInstance.querySelectorAll('input[type=checkbox]')) {
			element.checked = false;
		}
	}

	const filterShowData = () => {

		//start with all data and filter it one by one
		let filteredData = props.dataFilter(props.data, ruleList)

		for(let field of props.fields) {
			if(searchParams[field] !== "") {
				filteredData = filteredData.filter(entry=>{
															try{
																return (String(entry[field])).includes(String(searchParams[field]));
															}
															catch(e){
																return false;
															}
															
														})		
			}

		}

		console.log(filteredData)

		startTransition(()=>{
			setShowData(filteredData);
			clearCheckbox()
		})

	}



	const sortShowData = (field, direction) => {
		showData.sort(sortBy(field))
		if(direction === "v") {
			showData.reverse()
		}

		let new_showData = new Array(showData)
		setShowData(new_showData)
		filterShowData()
		
	}

	const handleChange = (event) => {
		//detect which field changed and correspondingly adjust state and data
		let filterParam = event.target.id.split("-")[0]
		let filterParamValue = event.target.value

		
		startTransition(()=>setSearch(merge(searchParams, {[filterParam]: filterParamValue,})))

		filterShowData()	
	}

	let rows = []
	console.log(showData)
	for(let entry of showData) {
		if(highlightData.includes(Number(entry.id))) {
			rows.push(<TableRow type={props.type} data={entry} className="selected_table_row" tableId={props.id} fields={props.fields} selectorClass="row-chbox"/>)
		}
		else {
			rows.push(<TableRow type={props.type} data={entry} tableId={props.id} fields={props.fields} selectorClass="row-chbox"/>)
		}
		
	}

	console.log(rows)

	return(
		<table className="table-generic" id={props.id}>
			<thead className="theadSticky"><TableSearchRow fields={props.fields} handleChange={handleChange}/></thead>
			<TableHeading fields={props.fields} sortShowData={sortShowData} values={props.headings} selectorClass="row-chbox"/>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}