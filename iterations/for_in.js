const MyObject={
    js:"JavaScript",
    py:"Python",
    jv:"Java",
    nd:"Node"
}

for(const val in MyObject){
    console.log(`${val} is full form of ${MyObject[val]}`)
}