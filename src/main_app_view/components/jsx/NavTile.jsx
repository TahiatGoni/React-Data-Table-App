import { Row, Col } from 'react-bootstrap';
import '../css/icons.css';

function NavTile({ icon, tile_name }) {
    return (
        <>
            <div>
               <img className="icons-nav" src={icon}/>
            </div>
            <div className="bar-h" >
                {tile_name}
            </div>
        </>

    )
}

export default NavTile;