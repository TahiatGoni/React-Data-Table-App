import '../css/header.css';

export function HeaderMain(props) {
	return(
		<div id="main-header">
			
			<text id="qnex-text" className="header-text">QNEX</text>
			<text id="prj-text" className="header-text">{props.prj_num}</text>
		</div>
	)
}

