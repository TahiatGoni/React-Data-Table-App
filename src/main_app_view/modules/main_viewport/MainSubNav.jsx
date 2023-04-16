import { startTransition } from 'react';
import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function MainSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement dragData="main_general" onClick={()=>{startTransition(()=>props.stateConnector("main_general"))}} name="GENERAL"/>
				<SubNavElement dragData="main_drawings" onClick={()=>{startTransition(()=>props.stateConnector("main_drawings"))}} name="DRAWINGS"/>
				<SubNavElement dragData="main_certs" onClick={()=>{startTransition(()=>props.stateConnector("main_certs"))}} name="TRADE CERTs"/>
				<SubNavElement dragData="main_materials" onClick={()=>{startTransition(()=>props.stateConnector("main_materials"))}} name="MATERIALS"/>
				<SubNavElement dragData="main_cal_equip" onClick={()=>{startTransition(()=>props.stateConnector("main_cal_equip"))}} name="CAL. EQUIP."/>
				<SubNavElement dragData="main_ewp_cwp" onClick={()=>{startTransition(()=>props.stateConnector("main_ewp_cwp"))}} name="EWP / CWPs"/>
				<SubNavElement dragData="main_fiwp" onClick={()=>{startTransition(()=>props.stateConnector("main_fiwp"))}} name="FIWPs"/>
				<SubNavElement dragData="main_itr" onClick={()=>{startTransition(()=>props.stateConnector("main_itr"))}} name="ITRs"/>
			</Row>
		</Container>
	)
}