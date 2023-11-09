// const coding=["Js","Java","Python","C++","C"]

// const values=coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })

// console.log(values)

const MyNums=[1,2,3,4,5,6,7,8,9,10]

//const NewNums=MyNums.filter((num)=>{return num>6})

// const NewNums=[]

// MyNums.forEach((num)=>{
//     if(num>6){
//         NewNums.push(num)
//     }
// })

// console.log(NewNums);


const books=[
    {title:"Book One",genre:"Fiction",publish:1987,
    edition:2004},
    {title:"Book Second",genre:"Non-Fiction",publish:1998,
    edition:2008},
    {title:"Book Third",genre:"History",publish:1986,
    edition:2014},
    {title:"Book Fourth",genre:"Fiction",publish:1982,
    edition:2018},
    {title:"Book Five",genre:"Non-Fiction",publish:1990,
    edition:2009},
    {title:"Book Six",genre:"Math",publish:2000,
    edition:2016},
    {title:"Book Seven",genre:"Hindi",publish:1995,
    edition:2010},
    {title:"Book Eight",genre:"History",publish:1985,
    edition:2012},
    {title:"Book Nine",genre:"Hindi",publish:2009,
    edition:2020},
    {title:"Book Ten",genre:"History",publish:2015,
    edition:2022},
]

const userBooks=books.filter((bk)=>{return bk.publish>=2000 && bk.genre==="History"})

console.log(userBooks)