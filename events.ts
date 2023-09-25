import EventEmitter from "events";

const myEmitter = new EventEmitter();

myEmitter.on("newSale",()=>{
    console.log("THere was a new Sale!")
})

myEmitter.on("newSale",()=>{
    console.log("Customer name: Ashutosh")
})

myEmitter.on("newSale",stock=>{
    console.log(`There are now ${stock} items left in the stock`)
})
myEmitter.emit("newSale",9)