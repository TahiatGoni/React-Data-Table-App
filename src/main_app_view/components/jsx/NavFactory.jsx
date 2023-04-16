import React, { Suspense } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import NavTile from './NavTile';
import {GiStraightPipe, GiElectricalResistance, GiMechanicalArm, GiClawHammer} from 'react-icons/gi'


const MPipeSubNav = React.lazy(() => import('../../modules/mech_pipe_viewport/MPipeSubNav'))


export function NavFactory(props) {

	const default_render = (
		<Accordion.Item className="item-padding" eventKey="8">
			<Accordion.Header></Accordion.Header>
			<Accordion.Body>	
			</Accordion.Body>
		</Accordion.Item>
	)


	switch(props.name) {
		case "MPIPE":
			return(
				<Accordion.Item className="item-padding" eventKey="6">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/pipe b.svg' tile_name="MECH. (PIPE)"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<MPipeSubNav stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			)
		default:
			return (
				{default_render}
			)

	}

}