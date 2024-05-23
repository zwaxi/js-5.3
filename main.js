let person = {
    nme: "Jonh" ,
    age: 30,
    school: "mars it",
}


for (let key in person) {
    console.log(key + ":" + person[key]);
}