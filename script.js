//iteration for in loop in json
var student = {
    "name" : "Dharshan",
    "age" : "22",
    "mail":"dharshan@gmail.com"
}
for ( var i in student){
console.log(i,student[i])}

// iteration for loop in json
var student = [{
    "name" : "Dharshan",
    "age" : "22",
},
{
    "name" : "Balu",
    "age" : "45",
}];
for ( var i=0;i<student.length;i++){
console.log(student[i].name,student[i].age)}

//create resume using json

var student = {
    "name" : "Dharshan Paneerselvam",
    "age" : "22",
    "gender" : "male",
    "education" : "B.Tech",
    "cgpa" : "7.5",
    "skill set" : "html,css,javascript",
    "mail":"dharshan@gmail.com"
}
for ( var i in student){
console.log(i,student[i])}