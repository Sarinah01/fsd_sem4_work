let fs = require('fs')
fs.writeFileSync("Hello.txt","How am I????")
var data = fs.readFileSync("Hello.txt")
console.log(data)
// hex dara
console.log(data.toString())

fs.mkdirSync('saru')
fs.writeFileSync("saru//part2.txt","I'm innnnnn!")
var data2 = fs.readFileSync("saru//part2.txt","utf-8")
console.log(data2)

fs.renameSync("saru//part2.txt","saru//part2-0.txt")
fs.unlinkSync("saru/part2-0.txt")
fs.rmdirSync("saru")

fs.writeFile("data.txt","Asyncoperation" ,
function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("File operation completed!")
    }
})

fs.readFileSync("data.txt","utf-8",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
console.log("Program ended!")


