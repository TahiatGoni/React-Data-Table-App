import React, { Component, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProjectInfoCard } from '../../../components/jsx/ProjectInfoCard'
import { AddrInfoCard } from '../../../components/jsx/AddrInfoCard'
import {Fallback} from '../../../components/jsx/Fallback'
import '../../../components/css/general_styles.css'

export default class MainGeneral extends Component {

	render() {
		return(
			<Suspense fallback={<Fallback/>}>
				<Container className="container-general">
					<ProjectInfoCard readonly={true} prj_base_data={this.props.prj_base_data}/>
					<AddrInfoCard readonly={true} prj_base_data={this.props.prj_base_data}/>
				</Container>
			</Suspense>
		)
	}
}