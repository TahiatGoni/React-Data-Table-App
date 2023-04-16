import React, { Component } from 'react';
import { UtilBar } from './UtilBar';
import { ViewportFactory } from './ViewportFactory';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/grid_resize_style.css'

export class GridItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			"content": [],
		}
		this.setContent = this.setContent.bind(this)
	}

	setContent(value) {
		this.setState({"content": value,})
	}

	render() {
		return (
			<>
				<Container className="task-bar-containter" fluid>
					<Row>
						<Col  className="collapse-col">
							<UtilBar content={this.state.content}/>
						</Col>

						<Col xs="auto">
					
							<div className="task-title">
							
								<div className="main-text">{this.props.item.split("_")[1]}</div>
								{/* <div className="main-text">Mech Pipe</div> */}
							 {/* <div className="sub-text">{this.props.item.split("_")[0]}</div>  */}
								{/* <img className="main-img" src="./assets/icons/navbar/pipe b.svg"/>  */}
								
							</div>
						
								
						
						
							
						</Col>

						<Col className="taskbar-control collapse-col">
							<div>
								<button className="close-btn" onClick={()=>{this.props.removeFromViewList(this.props.item)}}><img className="close-btn-img" src="./assets/icons/closebutton.svg"/></button>
								<button className="drag-handle drag-btn"><img src="./assets/icons/hand-rock.svg"/></button>
							</div>
						</Col>
					</Row>
				</Container> 
				<ViewportFactory masterdata={this.props.masterdata} ruleFilter={this.props.ruleFilter} content={this.state.content} prj_base_data={this.props.prj_base_data} viewState={this.props.item} contentSetter={this.setContent}/>
			</>
		)
	}

}