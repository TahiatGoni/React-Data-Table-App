import React from 'react'
import "./assets/about.css"

export function About(props) {

	return(
		<div className="about-div">
			<p className="white-color">
				This is a demo showcasing some examples of work I did as part of my Co-op work experience.<br/>
				This is part of an application that has many data tables which are interconnected.<br/>
				If the user highlights a certain row, other table rows that are interconnected are highlighted. The data can also be filtered.<br/>
				To make the code modular and easy to extend following DRY principles, general components are defined that can be used for all cases.<br/>
				For detailed account of the implementations, check out the GitHub <a href="">repo</a>.<br/><br/>

				The work here is a derivation from the original ideas that I have come up with at work with dummy data for showcasing.<br/>
				There is nothing in the data for this work that is relevant to, or in any way representative of the employers.
			</p>
			
			<div className="link-buttons">
				<a href="https://github.com/TahiatGoni" target="_blank"><span><img className="square-img-button" src="/icons8-github.svg"/></span></a>
				<a href="https://www.linkedin.com/in/tahiat-goni" target="_blank"><span><img className="square-img-button" src="/icons8-linkedin-2.svg"/></span></a>
			</div>
		</div>
	)
}