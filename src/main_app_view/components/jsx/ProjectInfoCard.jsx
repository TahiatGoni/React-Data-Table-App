import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select'
import '../css/prj_info_card.css';
import '../css/general_styles.css';


export function ProjectInfoCard(props) {
	
	const retrieve_or_null = (obj, key) => {
		try {
			return obj[key]
		}
		catch (err) {
			return null
		}
	}

	const options_retrieve = (values, key) => {
		return values.find((entry)=>{return entry['value'] === key})
	}

	const [project_num, setProject_num] = useState(retrieve_or_null(props.prj_base_data, 'project_no'))
	const [project_name, setProject_name] = useState(retrieve_or_null(props.prj_base_data, 'project_name'))
	const [contract_num, setContract_num] = useState(retrieve_or_null(props.prj_base_data, 'contract_no'))
	const [contractor, set_contractor] = useState(retrieve_or_null(props.prj_base_data, 'contractor'))
	const [division, set_division] = useState(retrieve_or_null(props.prj_base_data, 'division'))
	const [bussunit, set_bussunit] = useState(retrieve_or_null(props.prj_base_data, 'busunit'))

	const division_values = [
		{value: "Industrial", label: "IND"}, 
		{value: "Building", label: "BLD"},
		{value: "Infrastructure", label: "INF"},
		{value: "Maintenance", label: "MNT"},
	]

	const bussunit_values = [
		{value: "Mining and Energy", label: "M&E: Mining and Energy"}, 
		{value: "Maintenance and Turnaround", label: "MROTA: Maintenance and Turnaround"},
		{value: "Oil and Gas", label: "O&G: Oil and Gas"},
		{value: "Energy and Environmental", label: "E&E: Energy and Environment"}, 
	]

	return(
		<Container className="card-floating-container">
			<Row>
				<Col className="d-inline">
					<label htmlFor="prj_num">Project No.:</label>
					<input type="text" id="prj_num" placeholder="Enter Project Number" readOnly={props.readonly} value={project_num || ''} onChange={(event)=>setProject_num(event.target.value)}/>
				</Col>

				<Col className="d-inline">
					<label htmlFor="prj_name">Project Name:</label>
					<input type="text" id="prj_name" placeholder="Enter Project Name" readOnly={props.readonly} value={project_name || ''} onChange={(event)=>setProject_name(event.target.value)}/>
				</Col>
			</Row>

			<Row>
				<Col className="d-inline">
					<label htmlFor="cntrct_num">Contract No.:</label>
					<input type="text" id="cntrct_num" placeholder="Enter Contract Number" readOnly={props.readonly} value={contract_num || ''} onChange={(event)=>setContract_num(event.target.value)}/>
				</Col>

				<Col className="d-inline">
					<label htmlFor="cntrct_name">Contractor Name:</label>
					<input type="text" id="cntrct_name" placeholder="Enter Contractor Name" readOnly={props.readonly} value={contractor || ''} onChange={(event)=>set_contractor(event.target.value)}/>
				</Col>
			</Row>

			<Row>
				<Col className="d-inline">
					<label htmlFor="division_select">Div.:</label>
					<Select
						id="division_select"
						options={division_values}
						className="small-select"
						isDisabled={props.readonly}
						value={options_retrieve(division_values, division) || {value: '', label: ''}}
						onChange={(event)=>set_division(event.value)}
					/>
				</Col>

				<Col className="d-inline">
					<label htmlFor="bu_select">BU.:</label>
					<Select
						id="bu_select"
						options={bussunit_values}
						className="medium-select"
						isDisabled={props.readonly}
						value={options_retrieve(bussunit_values, bussunit) || {value: '', label: ''}}
						onChange={(event)=>set_bussunit(event.value)}
					/>
				</Col>
			</Row>

			
			<Row>
				<Col className="d-inline">
				</Col>

				<Col className="d-inline">
				</Col>
			</Row>
		</Container>
	)
}