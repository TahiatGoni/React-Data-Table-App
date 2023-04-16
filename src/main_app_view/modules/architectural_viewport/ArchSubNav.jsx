import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';

export default function ArchSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("arch_drawings"))}} name="DRAWINGS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("arch_finishes"))}} name="FINISHES"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("arch_reports"))}} name="REPORTS"/>
			</Row>
		</Container>
	)
}