const obj = require('./p.json')
console.log(obj)
console.log(obj.name)

//SOMETHING NNEWW!
a = {"book":
    [
        {"id":'1',
            "name":"pqr",
            "version":"1st",
            "authoer" : " ['shsdjh','skhk']"
        },
        {"id":"2",
            "name":"dfg",
            "version":"2nd",
            "authoer" : ['ddf','d43']
        }
    ]
}

console.log(a.book[0].id)
console.log(a.book[0].name)
console.log(a.book[1].id)
console.log(a.book[1].version , a.book[1].authoer[1])

let p1 ={"name":"djs","age":"30"}
p1.age ="20"
console.log(p1)

let key="age"
p1[key]=45
console.log(p1)

//try 1 json tree with 8 proerty in ddmy format and print date in indian standard time
function show(){
    const da = JSON.parse('{"n" :"s","dob":"2026-01-01"}')
console.log(da.dob)
a2 = new Date(da.dob)
document.writeln(a2)
}

for (const key in a) {
   console.log( key ,  " = ", a[key]);    
}

for(const key of a.book){
    console.log(key)
}

x2= [
    {"dsjhj":20},
    {
        'pqr':78
    }
    ,{
        'xyz':23
    }
]