export const getItems = (state) => {
  // deep clone object
  // -  keep in mind that using JSON.parse(JSON.stringify(obj)) on Date Objects 
  // -  will also convert the date back to UTC in the string representation in the ISO8601 format
  // https://stackoverflow.com/a/5344074/1438393
  console.log('JSON.parse(JSON.stringify(state.items)): ', JSON.parse(JSON.stringify(state.items)))
  return JSON.parse(JSON.stringify(state.items))
}