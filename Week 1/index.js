console.log("Hello World")

function add(a,b){
    return a+b
}

console.log(add)

const result = add(10,20)
console.log(result)
console.log(typeof(add))

obj = null
console.log(typeof(obj))
console.log(typeof(z))


var person = {
    name: "Fantaser",
    age: 30,
    address: {
        city: "Rawalpindi",
        state: "Punjab"
    },
    sayHello: function(){
        console.log("Hello, Fantaser")
        console.log(`Hello, ${this.name}`)
    }
}

