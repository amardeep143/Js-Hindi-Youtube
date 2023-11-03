function sayMyName(){
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("R")
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
}

//sayMyName()

// function addTwoNumbers(num1,num2){

//     console.log(num1+num2)

// }

function addTwoNumbers(num1,num2){

    // let result=num1+num2;
    // console.log("Amar")
    return num1+num2
    
}


const result=addTwoNumbers(3,4)

// console.log(result)
// console.log("Result:",result)


function loginUserMessage(username="Deep"){

    if(!username){
        console.log("Please Enter A username")
        return
    }

    return `${username} just Logged in!`

}

//console.log(loginUserMessage("Manju"))

function calculateCartPrice(val1,val2, ...num1){
    return num1

}
//console.log(calculateCartPrice(2,5,6,6))

const user={
    userName:"Amar Deep",
    price:"665"
}

function handleObject(anyobject){
    console.log(`userName is ${anyobject.userName } and price is ${ anyobject.price}`)

}

// handleObject(user)
// handleObject({
    // userName:"Sam",
    // price:255
// })

const myNewArray=[2000,666,555,800]


function returnSecondValue(getArray){

    return getArray[1]

}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,50,42,59]))