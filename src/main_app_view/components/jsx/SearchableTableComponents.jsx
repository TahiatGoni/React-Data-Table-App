import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/general_styles.css';
import React, { useContext, useState } from 'react';
import {RuleFilterContext} from "../../context_providers/RuleFilterContext"
import {SidePanelContext} from "../../context_providers/SidePanelContext"

function TableHeadingItem(props) {
	
	const [sortArrow, setSortArrow] = useState("-")

	const sortClick = () => {
		console.log("span")
		switch (sortArrow) {
			case "-": 
				setSortArrow("v")
				break;
			case "^":
				setSortArrow("v")
				break;
			case "v":
				setSortArrow("^")
				break;
			default:
				setSortArrow("-")
				break;
		}
		props.sortShowData(props.field, sortArrow)
	}

	return(
		<th span={props.span} style={props.style} className={props.className + " interact-th"} id={props.id} onClick={sortClick}>
			{props.name}
			<span>{sortArrow}</span>
		</th>
	)
}

function HeadingCheckbox(props) {

	const toggleAll = (event) => {
		let heading_chbx = event.target	
		let selections = document.getElementsByClassName(props.selectorClass)

		for(let element of selections) {
			element.checked = heading_chbx.checked
		}
	}

	return(
		<th span="1" style={{width: "3%"}}>
			<input type="checkbox" onClick={toggleAll} className="checkbox-lg" id={props.id}/>
		</th>
	)

}

export function TableHeading(props) {
	
	let headings = [<HeadingCheckbox id={props.id} selectorClass={props.selectorClass}/>,]

	let count = 0
	for(let data of props.values) {
		headings.push(<TableHeadingItem field={props.fields[count]} sortShowData={props.sortShowData} span={data['span']} style={data['style']} id={data['id']} name={data['name']} className={data['className']}/>)
		count++;
	}

	return(
		<>
		<thead className="table-dark">
			<tr>
				{headings}
			</tr>
		</thead>
		</>
	)
}



function RowCheckbox(props) {
	return(
		<input type="checkbox" className={"checkbox-lg " + props.className}/>
	)
}


function TableRowItem(props) {

	return(
		<td id={props.id} style={props.style} className={props.className}>
			{props.content}
		</td>
	)
}


export function TableSearchRow(props) {
	let contents = [<TableRowItem content=""/>,]

	for(let field of props.fields) {
		let search_content = (<input type="search" id={field+"-search"} onChange={props.handleChange}/>)

		contents.push(<TableRowItem content={search_content} style={{'text-align': 'left',}}/>)
	}

	return(
			<tr>
				{contents}
			</tr>
	)
}


export function TableRow(props) {

	const context = useContext(RuleFilterContext)
	const sidePanel = useContext(SidePanelContext)
	const setSelectRow = context["updateSelect"];
	const setSidePanel = sidePanel['updateShow'];
	const setShowData = sidePanel['updateShowData']	

	const clickHandler = (event)=>{
		let data = props.data
		data["type"] = props.type
		setSelectRow(new Set([data]))

		if(event.detail === 2) {
			setSidePanel(true)
			setShowData(props.data)
		}
	}

	let rowContent = [<TableRowItem content={<RowCheckbox className={props.selectorClass}/>}/>,]


	for(let field of props.fields) {

		if(props.data[field]){
			rowContent.push(<TableRowItem content={props.data[field]} style={{'text-align': 'left',}}/>)
		}
		else {
			rowContent.push(<TableRowItem content={""} style={{'text-align': 'left',}}/>)
		}
	}

	return(
		<tr className={props.className} id={props.data["id"]} style={props.style} onClick={clickHandler}>
			{rowContent}
		</tr>
	)
}