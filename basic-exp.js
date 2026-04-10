var exp =  require('express')
var app = exp()

// app.post('/',(req,res)=>{
//     res.set('content-type','text/html')
//     res.send('<h1>Hello from Sarinah</h1>')
// })
// app.listen(5006,sarinah, ()=>{
//     console.log('Server connected')
// })


//response methoods:
//if using get and doing write as well as send than will give me error!
// set, write, end, send , json [json + connection close], sendFile, redirect, render , 
// data={ame :'Sarinahhh', h : 1234}
// app.get('/',(req,res)=>{
//     res.write(JSON.stringify(data))
//     res.send()
// })
// app.listen(5006, ()=>{
//     console.log('Server connected')
// })

// data={ame :'Sarinahhh', h : 1234}
// app.get('/',(req,res)=>{
//     res.send("hytft")//will give oin the form of object orig
//     // res.json(data)// same dobj will be displayed!
  
// })
// app.get('/',(req,res)=>{
//     res.send("hii")//will give oin the form of object orig
//     // res.json(data)// same dobj will be displayed!
  
// })


// app.get('/about',(req,res)=>{
//     res.write('About page!!')
//     res.send()
// })

// app.get('/about',(req,res)=>{
//     res.write('About page 3!!')
//     res.send()
// })
// app.listen(5016, ()=>{
//     console.log('Server connected')
// })

//  Write an express js script to define one JSON array of 3 objects having 
// properties name and age. Short these objects according to age.
//  If user request sorted names in url then all names along with 
// age should be printed according to descending order of age.
//  Also, display these sorted values on “Sort page” and display JSON object 
// on “Home page”.

obj = [
    {n:'s', age:1},
    {n:'y', age:2},
    {n:'h', age:3}
]

// obj.sort((a,b)=>b.age-a.age)
// app.get('/sort',(req,res)=>{
   
//     for (const key in obj) {       
//         const element = obj[key]; 
//         res.write(JSON.stringify(element) + " dgdf"  + "2 ")
               
//     }
//     res.send()
// })

// app.get('/',(req,res)=>{
//     res.json(obj)
// })

// app.get('/:id',(req, res)=>{
//     res.send(req.params)
// })

// app.get('/login/:name',(req, res)=>{
//     res.send(req.params)
// })

app.get('/',(req,res)=>{
    res.set('content-type','text/html')
    res.write("<table>")
    for (const element of obj) {
        res.write(`<tr>
            <td>${obj[element.name]}</td>
            </tr>`)
    }
    res.send()
})
app.listen(5006,()=>{
    console.log("Server connected!")
})

