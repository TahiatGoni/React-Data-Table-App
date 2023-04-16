import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, } from '@fortawesome/free-solid-svg-icons'
import "../css/fallback_loader.css";

export function Fallback() {
		return(
			<div className="spinner large">
				<FontAwesomeIcon style={{color: "white", width: "100%", height: "20%", marginTop: "20rem"}} icon={faSpinner} spin/>
			</div>

		)
}

