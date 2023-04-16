import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';


export default function MEquipSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mequip_drawings"))}} name="DRAWINGS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mequip_equip_list"))}} name="EQUIPMENT LIST"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mequip_reports"))}} name="REPORTS"/>
			</Row>
		</Container>
	)
}