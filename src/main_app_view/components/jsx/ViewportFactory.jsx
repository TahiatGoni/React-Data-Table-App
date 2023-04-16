import React, { Suspense } from 'react'
import Col from 'react-bootstrap/Col';
import {Fallback} from './Fallback';
import '../css/main_viewport.css';

const MpipeLineList = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeLineList'))
const MpipeDrawings = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeDrawings'))
const MpipeBonds = React.lazy(()=>import('../../modules/mech_pipe_viewport/pages/MpipeBonds'))

export function ViewportFactory(props) {

	const default_render = (
		<Col className="viewport-col">
			<h1>{props.viewState}</h1>
		</Col>
	)

	switch(props.viewState) {
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
		case "mpipe_bonds":
			return(
				<Col className="viewport-col">
					<Suspense fallback={<Fallback/>}>
						<MpipeBonds masterdata={props.masterdata} prj_base_data={props.prj_base_data} contentSetter={props.contentSetter}  content={props.content} ruleFilter={props.ruleFilter}/>
					</Suspense>
				</Col>
			)
		default:
			return default_render
	}

}