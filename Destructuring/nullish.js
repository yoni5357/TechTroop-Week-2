let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

let missingDataNames = employeesArr
  .filter(emp => ((emp.id ?? null) === null) || ((emp.age ?? null) === null))
  .map(emp => emp.name)

console.log(missingDataNames)