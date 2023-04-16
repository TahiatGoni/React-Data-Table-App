import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';


export default function StructSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("struct_drawings"))}} name="DRAWINGS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("struct_erection"))}} name="ERECTION"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("struct_vts"))}} name="VTs"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("struct_nde"))}} name="NDE/T"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("struct_bolting"))}} name="BOLTING"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("struct_reports"))}} name="REPORTS"/>
			</Row>
		</Container>
	)
}