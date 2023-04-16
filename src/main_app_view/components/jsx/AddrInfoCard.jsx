import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/addr_info_card.css';
import { getData } from '../../../sessionUtils'
import {GLOBAL_URL} from '../../../global_url';
import $ from "jquery"
import '../css/general_styles.css';

export function AddrInfoCard(props) {

	
	const [project_addr, setProject_addr] = useState(null)
	const [project_city, setProject_city] = useState(null)
	const [project_prov, setProject_prov] = useState(null)
	const [project_zip, setProject_zip] = useState(null)
	const [project_lsd_lld, setProject_lsd_lld] = useState(null)

	useEffect(()=>{
		const auth = getData()["access_token"]
		const url = GLOBAL_URL + "/address/" + props.prj_base_data['location']

		$.ajax({
		  crossDomain: true,
		//   'Access-Control-Allow-Origin': true,
		  url: url,
		  type: "GET",
		  beforeSend: function(xhr){xhr.setRequestHeader("Authorization", auth);},
		  success: response => {
		  		setProject_addr(response['address'])
		  		setProject_city(response['city'])
		  		setProject_prov(response['province'])
		  		setProject_zip(response['zip_code'])
		  		setProject_lsd_lld(response['lsd_lld'])
			},
		  error: e => console.log(e),
		});
	},
	[])

	return (
		<Container className="card-floating-container">
			<Row className="row_margin">
				<Col className="d-inline">
					<label htmlFor="address" className="width_label">Address:</label>
					<input type="text" id="address" placeholder="Enter Address" readOnly={props.readonly} value={project_addr || ''} onChange={(event)=>setProject_addr(event.target.value)}/>
				</Col>
			</Row>
			
			<Row className="row_margin">
				<Col className="d-inline">
					<label htmlFor="city" className="width_label">City or Town:</label>
					<input type="text" id="city" placeholder="Enter City/Town Name" readOnly={props.readonly} value={project_city || ''} onChange={(event)=>setProject_city(event.target.value)}/>	
				</Col>
			</Row>

			<Row className="row_margin">
				<Col className="d-inline">
					<label htmlFor="province" className="width_label">Prov. or State:</label>
					<input type="text" id="province" placeholder="Enter Province or State" readOnly={props.readonly} value={project_prov || ''} onChange={(event)=>setProject_prov(event.target.value)}/>	
				</Col>
				<Col className="d-inline">
					<label htmlFor="zip" className="width_label">Zip Code:</label>
					<input type="text" id="zip" placeholder="Zip Code" readOnly={props.readonly} value={project_zip || ''} onChange={(event)=>setProject_zip(event.target.value)}/>	
				</Col>
			</Row>

			<Row className="row_margin">
				<Col className="d-inline">
					<label htmlFor="lsd_lld" className="width_label_small">LSD/LLD:</label>
					<input type="text" id="lsd_lld" placeholder="Enter LSD/LLD" readOnly={props.readonly} value={project_lsd_lld || ''} onChange={(event)=>setProject_lsd_lld(event.target.value)}/>	
				</Col>
			</Row>

		</Container>
	)

}