import { SubNavElement } from '../../components/jsx/SubNavElement'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { startTransition } from 'react';


export default function MHvacSubNav(props) {
	return(
		<Container fluid>
			<Row>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mhvac_drawings"))}} name="DRAWINGS"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mhvac_equip_list"))}} name="EQUIPMENT LIST"/>
				<SubNavElement onClick={()=>{startTransition(()=>props.stateConnector("mhvac_reports"))}} name="REPORTS"/>
			</Row>
		</Container>
	)
}