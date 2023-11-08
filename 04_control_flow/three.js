const arr=[1,6,5,8,9,40]

// for(const num of arr){
//     console.log(num)
// }
const map= new Map()
map.set("In","India")
map.set("USA","United State Of America")
map.set("Fr","France")
///map.set("In","India")

//console.log(map)

for(const [key,value] of map){
    console.log(key,":-",value)
}