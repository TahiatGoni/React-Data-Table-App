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
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_welds"))}} name="WELDs"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_bonds"))}} name="BONDs"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_fuses"))}} name="FUSEs"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_bolts"))}} name="BOLTs"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_vts"))}} name="VTs"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_nde"))}} name="NDE/T"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_heat"))}} name="HEAT TREATMENT"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_boltup"))}} name="BOLT UPs"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_insulation"))}} name="INSULATION"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mpipe_reports"))}} name="REPORTS"/>
			</Row>
		</Container>
	)
}