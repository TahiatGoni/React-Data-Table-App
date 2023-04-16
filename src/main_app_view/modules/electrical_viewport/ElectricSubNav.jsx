import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';


export default function ElectricSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_drawings"))}} name="DRAWINGS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_raceway"))}} name="RACEWAY"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_cables"))}} name="CABLES"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_equipment"))}} name="EQUIPMENT"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_instruments"))}} name="INTSTRUMENTS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_testing"))}} name="TESTING"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_bolt"))}} name="BOLT TORQUE"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("elect_reports"))}} name="REPORTS"/>
			</Row>
		</Container>
	)
}