import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';

export  default function CivilSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("civil_drawings"))}} name="DRAWINGS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("civil_earthworks"))}} name="EARTHWORKS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("civil_piling"))}} name="PILING"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("civil_foundations"))}} name="FOUNDATIONS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("civil_concrete"))}} name="CONCRETE"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("civil_pavement"))}} name="PAVEMENT"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("civil_reports"))}} name="REPORTS"/>
			</Row>
		</Container>
	)
}