export function setSessionData(data) {
  sessionStorage.setItem('data', JSON.stringify(data))
}


export function getData() {
  const dataStr = sessionStorage.getItem('data');
  const userData = JSON.parse(dataStr)
  return userData
}


export function scopes_check(has_scopes) {
  const data = getData()
  const scopeList = data['scope'].split(" ")
  const access = has_scopes.every(element => scopeList.includes(element))
  return access
}


export function headingObjectFactory(name, id, className="", style={}) {
  return {
    name: name,
    id: id,
    className: className,
    style: style,
  }
}