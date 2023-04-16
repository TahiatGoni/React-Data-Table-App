import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';


export default function CompSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("comp_deficiency"))}} name="DEFICIENCY"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("comp_reporting"))}} name="REPORTING"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("comp_audit"))}} name="AUDITING"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("comp_reports"))}} name="REPORTs"/>
			</Row>
		</Container>
	)
}