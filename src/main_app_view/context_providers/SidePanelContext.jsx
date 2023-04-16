import React, {createContext, useState} from "react";


export const SidePanelContext = createContext();



export function SidePanelProvider({children}) {

	const [show, setShow] = useState(false);
	const [showData, setShowData] = useState({});
	const [showWidth, setShowWidth] = useState(30)

	const updateShow = (newShow) => {
		setShow(newShow);
	}

	const updateShowData = (newValue) => {
		setShowData(newValue);
	}

	const updateShowWidth = (newWidth) => {
		setShowWidth(newWidth);
	}

	return(
		<SidePanelContext.Provider value={{show, updateShow, updateShowData, showData, showWidth, updateShowWidth}}>
			{children}
		</SidePanelContext.Provider>

	)

}
