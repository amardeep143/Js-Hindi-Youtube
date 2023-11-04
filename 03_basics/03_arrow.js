const user={

    username:"amardeep",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`)
        // console.log(this)

    }

}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()
//console.log(this)
// function chai(){
//     console.log(this)

// }

// chai()

// const chai=function (){
//        console.log(this)
    
//      }

const chai = ()=>{
        let username="amardeep"
         console.log(this)
    
     }

 //chai()
//  const addTwo=(num1,num2)=>
//  {
//     return num1+num2

//  }
//  const addTwo=(num1,num2)=> num1+num2
//  const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"AmarDeep"})


console.log(addTwo(5,6))