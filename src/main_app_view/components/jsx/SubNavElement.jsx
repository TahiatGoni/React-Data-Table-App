import '../css/subnav_styles.css';
import { Draggable } from 'react-drag-and-drop';
import { startTransition } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';

export function SubNavElement(props) {
	let className;
	const set_selected = (event) => {

		let added;
		
		if((event.target.tagName === 'SPAN') || (event.target.tagName === 'SPAN')){

			

			if(event.target.classList.contains('subnav-selected')) {
				event.target.classList.remove('subnav-selected');
			}
			else{
				
				if(added){
					event.target.classList.add('subnav-selected');
				}
				
			}
			added = props.onClick();
			console.log(added);
		}
		else {
			if(event.target.parent.classList.contains('subnav-selected')){
				event.target.parent.classList.remove('subnav-selected');
			}
			else{
				
				if(added){
					event.target.parent.classList.add('subnav-selected');
				}
			}
			added = props.onClick();
			console.log(added);
		}
		
	}

	if(props.className) {
		className = "subnav-span" + "-" + props.className
	}
	else {
		className = "subnav-span"
	}

	return(	
		<span onClick={set_selected} className={className}>
			{props.name}
		</span>
	)
}



export function DrawingSubNavElement(props) {

	const set_selected = (event) => {

		let added;
		if((event.target.tagName === 'SPAN') || (event.target.tagName === 'SPAN')){

			

			if(event.target.classList.contains('subnav-selected')) {
				event.target.classList.remove('subnav-selected');
			}
			else{
				
				if(added){
					event.target.classList.add('subnav-selected');
				}
				
			}
			added = props.onClick();
			console.log(added);
		}
		else {
			if(event.target.parent.classList.contains('subnav-selected')){
				event.target.parent.classList.remove('subnav-selected');
			}
			else{
				
				if(added){
					event.target.parent.classList.add('subnav-selected');
				}
			}
			added = props.onClick();
			console.log(added);
		}
		
	}

	return(	
		<>
		<span onClick={set_selected} className="subnav-span">
			{props.name}
		</span>
			<Accordion className="sub-accordion">	
				<Accordion.Item className="item-padding" eventKey="1000">
					<Accordion.Header>
					</Accordion.Header>
					<Accordion.Body>
						<Row>
							<SubNavElement className="alternate" onClick={()=>{startTransition(()=>props.stateConnector("mpipe_welds"))}} name="WELDs"/>
							<SubNavElement className="alternate" onClick={()=>{startTransition(()=>props.stateConnector("mpipe_bonds"))}} name="BONDs"/>
							<SubNavElement className="alternate" onClick={()=>{startTransition(()=>props.stateConnector("mpipe_fuses"))}} name="FUSEs"/>
							<SubNavElement className="alternate" onClick={()=>{startTransition(()=>props.stateConnector("mpipe_bolts"))}} name="BOLTs"/>
						</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}


