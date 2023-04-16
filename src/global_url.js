import './App.css';

export let GLOBAL_URL = "https://qnexng-api.azurewebsites.net"
// export let GLOBAL_URL = "http://localhost:8000"

export function createLoader(message, render_base=document) {
	
  if(render_base.getElementsByClassName("mymodal").length === 0){
    const loader_container = render_base.createElement("div")
    loader_container.classList.add("mymodal")
    const modal_content = render_base.createElement("div")
    modal_content.classList.add("mymodal-content")
    const loading_text = render_base.createElement("p")
    loading_text.classList.add("mymodal-display")
    loading_text.innerText = message
    const spinner = render_base.createElement("div")
    spinner.classList.add("spinloader")
    spinner.classList.add("mymodal-display")

    modal_content.appendChild(loading_text)
    loading_text.appendChild(spinner)
    loader_container.appendChild(modal_content)
    render_base.body.appendChild(loader_container)
  }  
}

export function loaderMessageUpdate(message, render_base=document) {
	const spinner = render_base.getElementsByTagName("p")[0]
	spinner.innerHTML = message
}


export function createCSS(render_base=document) {
	var link = render_base.createElement( "link" );
	link.href = "https://qnexng-api.azurewebsites.net/dld.css"
	link.type = "text/css";
	link.rel = "stylesheet";
	link.media = "screen,print"

	render_base.getElementsByTagName("head")[0].appendChild(link);
}

