

//can plug this function in with any selector to get IDs
export function checkedIDretriver(selector) {
	let idList = []

	const tableInstance = document.getElementById(selector)

	for(let element of tableInstance.querySelectorAll('input[type=checkbox]')) {
		if(element.checked) {
			idList.push(element.parentElement.parentElement.id)
		}
	}

	return idList.filter(x => x !== '')
}

export function connected_filter(filterList, filterElement, filterListEntry, filterElementEntry) {
  return(  
    filterList.filter(entry=>{
      try{
        return (entry[filterListEntry] === filterElement[filterElementEntry]);
      }
      catch(e){
        return false;
      }
      
    })
  )
}


export function sortBy(field) {
   return function(a, b) {
      return (a[field] > b[field]) - (a[field] < b[field])
   };
}