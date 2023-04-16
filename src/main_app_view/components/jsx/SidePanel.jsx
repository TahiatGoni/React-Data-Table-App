import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/side_panel.css";
import { side_panel_data } from "../../side_panel_data";

export function SidePanel(props) {

	let entries = []

	const type = props.value['showData']['type']
	let [title, subtitle] = side_panel_data[type]['title'].split("_");
	const fields = side_panel_data[type]["fields"]

	console.log(props.value['showData'])

	for (let element of Object.entries(props.value['showData'])) {

		let name = element[0]
		let value = element[1]

		if (name !== "id" && name !== "type") {
			entries.push(<KeyValueEntry name={name} data={fields[name]} value={value} />)
		}

	}

	return (
		<Container id="side-panel" className="" fluid>
			<Row>
				{/*<Col>
					 <button className={"side-panel-close-btn"} onClick={()=>{props.value['updateShow'](false)}}>
						❌
					</button> 
					
				</Col>*/}
				
			</Row>
			<Row className="full-row side-title">
				<Col sm={2}>
					<button className={"side-panel-close-btn"} onClick={()=>{props.value['updateShow'](false)}}>
						❌
					</button> 
				</Col>
				<Col sm={2}>
					<button className={"side-panel-resize-btn"} onClick={()=>{props.value['updateShowWidth']((30 * (props.value["showWidth"] === 67)) + (67 * (props.value["showWidth"] === 30)))}}>
						{"<>"}
					</button>
				</Col>
				<Col sm={8}>
					<img  className="main-img" src="./assets/icons/navbar/pipe b.svg"></img>
					{subtitle}
									
				</Col>
			</Row>

			<Row>
				<Col className="data-panel">
					{entries}
				</Col>
			</Row>
		</Container >
	)

}


function KeyValueEntry(props) {

	const [value, setValue] = useState(props.value)

	useEffect(() => {
		if (value !== props.value) {
			setValue(props.value)
		}
	}
		, [props.value,])

	const handleChange = (event) => {
		if (event.target.type === "checkbox") {
			setValue(event.target.checked)
		}
		else {
			setValue(event.target.value)
		}

	}

	let input_render;


	try {
		if (props.data['type'] === "select") {
			let options = []
			for (let item of props.data['options']) {
				options.push(<option value={item}>{item}</option>)
			}
			input_render = <select className="side-input" defaultValue={value} onChange={handleChange}>{options}</select>
		}
		else if (props.data['type'] === "date") {
			let updateValue = value.split("/")
			input_render = <input className="side-input" type={props.data['type']} value={`${updateValue[2]}-${updateValue[0]}-${updateValue[1]}`} onChange={handleChange} />
		}
		else if (props.data['type'] === "checkbox") {
			input_render = <input className="side-input" type={props.data['type']} checked={value} onChange={handleChange} />
		}
		else {
			input_render = <input className="side-input" type={props.data['type']} value={value} onChange={handleChange} />
		}
	}
	catch (err) {

		return (
			<Row>
				<label>
					<p className="side-label">{props.name}:</p>
					<input className="side-input" type={"text"} value={value} onChange={handleChange} />
				</label>
			</Row>
		)
	}

	return (
		<Row>
			<label>
				<p className="side-label">{props.data['label']}:</p>
				{input_render}
			</label>
		</Row>
	)

}