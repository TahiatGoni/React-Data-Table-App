import React, { Component, useContext,  } from 'react';
import "../css/intersearch_bar.css"
import {RuleFilterContext} from "../../context_providers/RuleFilterContext"

function RuleElement(props) {
  return (
    <div className='filter-button'
     
    >
      <p className="inline rule-text">{props.name}</p>
      <button className="inline sub-cross" onClick={()=>{props.remove(props.value)}}>x</button>
    </div>
  );
}


export function InterSearchBar(props) {
  const ruleList = useContext(RuleFilterContext)["ruleList"];

  let renderred = []

  if(ruleList.size === 0){
    
  }


  for(let element of ruleList) {
    renderred.push(<RuleElement value={element} name={element['type'] + '_' + String(element['id'])} remove={props.remove}/>)
  }

   return (
      <div className = "intersearch">
        <div className="rule-container">
          {renderred}
        </div>
        <div
          style={
            {
              textAlign: "right",
              display: "inline-grid",
              width: "50px",
              float: "right",
              marginTop: "1px",
              marginBottom: "1px",
              height: "100%",
              
            }
          }
        >
           <button className="main-cross" onClick={props.clear}>x</button>
        </div>
      </div>
    );

}



// export class InterSearchBar extends Component {
    
//   static contextType = RuleFilterContext;

//   render() {

//   	const ruleList = this.context;
//   	let renderred = []


//   	for(let element of ruleList) {
//   		renderred.push(<RuleElement value={element} name={element['type'] + '_' + String(element['id'])} remove={this.props.remove}/>)
//   	}

//     return (
//       <div className = "intersearch">
//         <div className="rule-container">
//           {renderred}
//         </div>
//         <div
//           style={
//             {
//               textAlign: "right",
//               display: "inline-grid",
//               width: "50px",
//               float: "right",
//               marginTop: "1px",
//               marginBottom: "1px",
//               height: "100%",
              
//             }
//           }
//         >
//            <button className="main-cross" onClick={this.props.clear}>x</button>
//         </div>
//       </div>
//     );
//   }
// }