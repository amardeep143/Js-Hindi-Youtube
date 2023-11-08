const coding=["Js","Java","Python","C++","C"]

// coding.forEach((item)=>{
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }


// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{

//     console.log(item,index,arr)

// })

const myCoding=[
    {
        languageName:"Java",
        languageFilename:"jv"

    },
    {
        languageName:"Python",
        languageFilename:"py"

    },
    {
        languageName:"JavaScript",
        languageFilename:"js"

    },
    {
        languageName:"rb",
        languageFilename:"ruby"

    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})