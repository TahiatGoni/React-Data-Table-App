import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import '../css/nav_styles.css';
import {NavFactory} from './NavFactory';

export function MainNav(props){
	
	let items = []
	let key = 0
	for (let element of props.tabs) {

		items.push(<NavFactory key={key} stateConnector={props.stateConnector} name={element}/>)
		key += 1
	}


	return(
		
			<Col className="nav-col">
				<Accordion className="main-accordion">	
					{items}
				</Accordion>
			</Col>
		
	)
}