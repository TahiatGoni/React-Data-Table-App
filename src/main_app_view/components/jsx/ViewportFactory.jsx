import React, { Suspense } from 'react'
import Col from 'react-bootstrap/Col';
import {Fallback} from './Fallback';
import '../css/main_viewport.css';

const MainGeneral = React.lazy(()=>import('../../modules/main_viewport/pages/MainGeneral'))
const MpipeLineList = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeLineList'))
const MpipeDrawings = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeDrawings'))
const MpipeWelds = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeWelds'))
const MpipeBonds = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeBonds'))
const MpipeFuses = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeFuses'))
const MpipeBolts = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeBolts'))
const MpipeNde = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeNde'))
const MpipeVT = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeVT'))
const MpipeHT = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeHT'))
const MpipeInsulation = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeInsulation'))
const MpipeBoltUp = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeBoltUp'))


export function ViewportFactory(props) {

	const default_render = (
		<Col className="viewport-col">
			<h1>{props.viewState}</h1>
		</Col>
	)

	switch(props.viewState) {
		case "main_general":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MainGeneral masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter} content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_line_list":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeLineList masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_drawings":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeDrawings masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_welds":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeWelds masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_bonds":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeBonds masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_fuses":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeFuses masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_bolts":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeBolts masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_nde":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeNde masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_vts":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeVT masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_heat":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeHT masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_insulation":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeInsulation masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		case "mpipe_boltup":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeBoltUp masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		default:
			return default_render
	}

}