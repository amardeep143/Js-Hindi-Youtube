//const MyNums=[1,2,3]

// const MyTotal=MyNums.reduce(function (acc,currValue){
//     console.log(`acc:${acc} and currValue ${currValue}`)
//     return acc+currValue
// },0)
//const MyTotal=MyNums.reduce((acc,currValue)=>acc+currValue,0)


//console.log(MyTotal)

const shopingKart=[
    {
        itemName:"Js cource",
        price:2999
    },
    {
        itemName:"Python cource",
        price:3999
    },
    {
        itemName:"Android cource",
        price:4999
    },
    {
        itemName:"DataScience cource",
        price:12999
    },
]

const priceToPay =shopingKart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);