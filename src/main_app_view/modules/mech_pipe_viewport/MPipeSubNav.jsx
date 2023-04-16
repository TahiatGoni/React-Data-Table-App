import { SubNavElement, DrawingSubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';


export default function MPipeSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_line_list"))}} name="LINE LIST"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_drawings"))}} name="DRAWINGS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_bonds"))}} name="BONDs"/>
			</Row>
		</Container>
	)
}