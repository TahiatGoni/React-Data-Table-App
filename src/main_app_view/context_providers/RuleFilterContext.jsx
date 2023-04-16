import React, {createContext, useState} from "react";


export const RuleFilterContext = createContext(new Set());


export function RuleFilterProvider({children}) {

	const [ruleList, setRuleFilter] = useState(new Set());
	const [selectRow, setSelectRow] = useState(new Set());

	const updateState = (newValue) => {
		setRuleFilter(newValue);
	}

	const updateSelect = (newValue) => {
		setSelectRow(newValue);
	}

	return(
		<RuleFilterContext.Provider value={{ruleList, updateState, updateSelect, selectRow}}>
			{children}
		</RuleFilterContext.Provider>

	)

}
