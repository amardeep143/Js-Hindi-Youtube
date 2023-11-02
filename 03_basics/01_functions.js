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

console.log(loginUserMessage("Manju"))