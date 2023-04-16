import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import { HeaderMain } from './components/jsx/HeaderMain';
import { MainNav } from './components/jsx/MainNav'
import './components/css/mainstyle.css';
import $ from "jquery"
import { getData } from '../sessionUtils'
import { ViewportFactory } from './components/jsx/ViewportFactory';
import { Droppable } from 'react-drag-and-drop';
import { Responsive, WidthProvider } from "react-grid-layout";
import { Resizable } from 're-resizable';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { UtilBar } from './components/jsx/UtilBar'
import { SidePanel } from './components/jsx/SidePanel'
import { GridItem } from './components/jsx/GridItem'
import { InterSearchBar } from './components/jsx/InterSearchBar'
import { masterdata } from './masterdata'
import { RuleFilterContext } from './context_providers/RuleFilterContext.jsx'
import { SidePanelContext } from './context_providers/SidePanelContext.jsx'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css';
const ResponsiveGridLayout = WidthProvider(Responsive);


export function MainAppRoute(props) {

	return(
		<MainApp id={1} prj_num={"EKOPC123"}/> 
	)

}


class MainApp extends Component {

	static contextType = RuleFilterContext;

	constructor(props) {
		super(props)

		this.state = {
			"prj_base_data": null,
			"data": getData(),
			"viewState": "initial",
			"viewLists": new Set(),
			"layout": [
						{ i: "row1-col1", x: 0, y: 0, w: 1, h: 1,},
						{ i: "row1-col2", x: 1, y: 0, w: 1, h: 1,},
						{ i: "row1-col3", x: 2, y: 0, w: 1, h: 1,},
						{ i: "row1-col4", x: 3, y: 0, w: 1, h: 1,},
						{ i: "row2-col1", x: 0, y: 1, w: 1, h: 1 },
						{ i: "row2-col2", x: 1, y: 1, w: 1, h: 1 },
						{ i: "row2-col3", x: 2, y: 1, w: 1, h: 1 },
						{ i: "row2-col4", x: 3, y: 1, w: 1, h: 1 },
					  ],
			"gridState": [],
		}

		this.addToViewList = this.addToViewList.bind(this)
		this.removeFromViewList = this.removeFromViewList.bind(this)
		this.clearRuleList = this.clearRuleList.bind(this)
		this.removeFromRuleList = this.removeFromRuleList.bind(this)
		this.createRuleList = this.createRuleList.bind(this)
		this.onBreakpointChange = this.onBreakpointChange.bind(this);
		this.onLayoutChange = this.onLayoutChange.bind(this)
	}

	addToViewList(value) {
		if(this.state.viewLists.has(value)) {
			let newList = new Set(Array.from(this.state.viewLists))
			newList.delete(value)
			this.setState({viewLists: newList})
			return true
		}
		else{
			let newList = new Set(Array.from(this.state.viewLists)).add(value)

			let spaceAvailable = true;
			let availList = new Set([0, 1 ,2, 3, 4, 5, 6, 7]);
			for(let element of this.state.gridState) {
				for( let i = element.x; i < (element.x + element.w); i++){
					let currentOccupied = (element.y * 4) + i;
					availList.delete(currentOccupied);
					if(element.h > 1) {
						availList.delete((1 * 4) + i)
					}
				}
			}

			if(availList.size > 0){
				this.setState({viewLists: newList})
				return true;
			}
			return false;
		}

		
	}

	clearRuleList() {
		const updateState = this.context["updateState"]
		updateState(new Set())
	}

	removeFromRuleList(value) {

		const updateState = this.context["updateState"]

		let currentCopy = this.context["ruleList"]
		currentCopy.forEach(entry => {
			if(entry['id'] === value['id']) {
				currentCopy.delete(entry)
			}
		})
		let newRuleList = new Set(Array.from(currentCopy))
		updateState(newRuleList)
	}

	createRuleList(values) {
		const updateState = this.context["updateState"]
		updateState(values)
	}

	removeFromViewList(value) {
		let newList = this.state.viewLists

		if(newList.delete(value)){
			this.setState({viewLists: newList})
		}		
	}

	componentDidMount() {
		//in the actual application, data is fetched here.
		this.setState({"prj_base_data": 
						{
							"active": true,
							"busunit": "Tahiat_Goni",
							"contract_no": "28469",
							"contractor": "Tahiat",
							"division": "skill showcase",
							"id": 1,
							"location": 2,
							"project_name": "react_datatables",
							"project_no": "343 guilty spark",
							"tabs_list": "MPIPE",
						}
		,})	
	}

	onBreakpointChange(breakpoint, cols) {
		this.setState({
		  breakpoint: breakpoint,
		  cols: cols
		});
	}

	onLayoutChange(layout) {
		console.log(layout)
		this.setState({'gridState': layout});	
	}



	render() {
		let tabs;
		try{
			tabs = this.state.prj_base_data['tabs_list']
			tabs = tabs.split(" ")
		}
		catch(err) {
			tabs = []
		}
		
		let renderredView = []



		let keys = ["row2-col4", "row2-col3", "row2-col2", "row2-col1", "row1-col4", "row1-col3", "row1-col2", "row1-col1",]

		for(let item of this.state.viewLists){
			const currentKey = keys.pop()
			const key_data = this.state.layout.filter(entry => entry["i"] === currentKey)[0]
			const data_grid = {x: key_data['x'], y: key_data['y'], w: key_data['w'], h: key_data['h'], maxH: 2, maxW: 4}
			renderredView.push(<div key={currentKey} className="grid-item" data-grid={data_grid}>
									<GridItem ruleFilter={this.createRuleList} removeFromViewList={this.removeFromViewList} item={item} prj_base_data={this.state.prj_base_data} masterdata={masterdata}/>
								</div>)
		}


		return(
			<>
				
				<Container id="main-container" className="" fluid>
					<MainNav tabs={tabs} stateConnector={this.addToViewList}/>
						<Row className="sub-row">
							<InterSearchBar clear={this.clearRuleList} remove={this.removeFromRuleList}/>
						</Row>
						<Row className="main-row">			
							<ResponsiveGridLayout 
								layouts={{ lg: this.state.layout, md: this.state.layout, sm: this.state.layout, xs: this.state.layout, xxs: this.state.layout}}
								breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
								cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
								rowHeight={442}
								width={990}
								draggableHandle=".drag-handle"
								measureBeforeMount={true}
								isResizable={true}
								className="layout"
								compact={true}
								compactType="horizontal"
          						onBreakpointChange={this.onBreakpointChange}
          						onLayoutChange={this.onLayoutChange}
							>
								{renderredView}
							</ResponsiveGridLayout>
						</Row>
					<SidePanelContext.Consumer>
						{
							(value)=>{
								return(<SlidingPanel
									type={'right'}
									isOpen={value['show']}
									size={value['showWidth']}
									noBackdrop={true}
									backdropClicked={() => value['updateShow'](false)}
								>
									
									<SidePanel value={value}/>

								</SlidingPanel>);
							}
						}
					</SidePanelContext.Consumer>
				</Container>
			</>

		)
	}
}