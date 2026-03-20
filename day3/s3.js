var u = require('url')
// let addr = "http://localhost:8000/default.html?year=20268&moth=March#wasupdate"
// process.noDeprecation = true
// var q = u.parse(addr)
// console.log(q)
// console.log(q.port)
// console.log(q.query)
// console.log(q.search)

// let addr1 = "http://localhost:8000/default.html?year=2026&moth=March#wasupdate"
// var q1 = u.parse(addr1,true)
// console.log(q1)
// let data = q1.query
// console.log(data)
// console.log(data.year)

let d1 = "http://localhost:8000/test?T1=25&T2=24&T3=25#ABC"
var q1 = u.parse(d1,true)
console.log(q1)
avg = 0
for (const key in q1.query) {
    console.log(q1.query[key]);
    avg +=parseInt(q1.query[key])
}
avg = avg/3
console.log("Avg marks will be", avg , " of " , q1.hash)