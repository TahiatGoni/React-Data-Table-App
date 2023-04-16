import React, { Suspense } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import NavTile from './NavTile';
import {GiStraightPipe, GiElectricalResistance, GiMechanicalArm, GiClawHammer} from 'react-icons/gi'



const ArchSubNav = React.lazy(() => import('../../modules/architectural_viewport/ArchSubNav'))
const CivilSubNav = React.lazy(() => import('../../modules/civil_viewport/CivilSubNav'))
const CompSubNav = React.lazy(() => import('../../modules/compliance_viewport/CompSubNav'))
const ElectricSubNav = React.lazy(() => import('../../modules/electrical_viewport/ElectricSubNav'))
const MEquipSubNav =  React.lazy(() => import('../../modules/mech_equip_viewport/MEquipSubNav'))
const MHvacSubNav = React.lazy(() => import('../../modules/mech_hvac_viewport/MHvacSubNav'))
const MPipeSubNav = React.lazy(() => import('../../modules/mech_pipe_viewport/MPipeSubNav'))
const StructSubNav = React.lazy(() => import('../../modules/structural_viewport/StructSubNav'))
const MainSubNav = React.lazy(() => import('../../modules/main_viewport/MainSubNav'))

export function NavFactory(props) {

	const default_render = (
		<Accordion.Item className="item-padding" eventKey="8">
			<Accordion.Header></Accordion.Header>
			<Accordion.Body>	
			</Accordion.Body>
		</Accordion.Item>
	)


	switch(props.name) {
		case "MAIN":
			return(
			 	<Accordion.Item className="item-padding" eventKey="0">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/MaIN b.svg' tile_name="MAIN"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<MainSubNav stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			 )
		case "CIVIL":
			return(
				<Accordion.Item className="item-padding" eventKey="1">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/civil b.svg' tile_name="CIVIL"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<CivilSubNav  stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			)
		case "ARCHITECTURAL":
			return(
				<Accordion.Item className="item-padding" eventKey="2">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/ARCHITECTural b.svg' tile_name="ARCHITECTURAL"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<ArchSubNav stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			)
		case "STRUCTURAL":
			return(
				<Accordion.Item className="item-padding" eventKey="3">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/STRUCTURAL b.svg' tile_name="STRUCTURAL"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<StructSubNav stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			)
		case "MEQUIP":
			return(
				<Accordion.Item className="item-padding" eventKey="4">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/Equip b.svg' tile_name="MECH. (EQUIP)"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<MEquipSubNav stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			)
		case "MHVAC":
			return(
				<Accordion.Item className="item-padding" eventKey="5">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/hvac b.svg' tile_name="MECH. (HVAC)"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<MHvacSubNav stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			)
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
		case "ELECTRICAL":
			return(
				<Accordion.Item className="item-padding" eventKey="7">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/electrical b.svg' tile_name="ELECTRICAL"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<ElectricSubNav stateConnector={props.stateConnector}/>
						</Suspense>
					</Accordion.Body>
				</Accordion.Item>
			)
		case "COMPLIANCE":
			return(
				<Accordion.Item className="item-padding" eventKey="8">
					<Accordion.Header>
						<NavTile icon='/assets/icons/navbar/compliance b.svg' tile_name="COMPLIANCE"/>
					</Accordion.Header>
					<Accordion.Body>
						<Suspense fallback={default_render}>
							<CompSubNav stateConnector={props.stateConnector}/>
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