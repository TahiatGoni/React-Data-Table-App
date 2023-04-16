import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/utilbar_style.css';

function ActionTiles(props) {
	return(
			<button style={props.style} onClick={props.onClick} type="button" id={props.id} className={props.className} value={props.id} name={props.id} disabled={props.disabled}>
				<img className="btn-icon" src={props.src}/><br/>
				{props.name}
			</button>
	)

}

export function UtilBar(props) {


	const renderTiles = []

	for(let element of props.content) {
		renderTiles.push(<ActionTiles disabled={element["disabled"]} className={element["className"]} id={element["id"]} name={element["name"]} src={element["src"]} onClick={element["onClick"]}/>)
	}	

	return(
		<div className="table-toolbar" style={{float: 'left'}} id={props.id}>
			{renderTiles}
		</div>
	)
}