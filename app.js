// var firstNames = [1, 2, 3, 4, 5];

// var lastNames = [7, 8, 9, 0];

// var fullNames = [];

// console.log(fullNames)

// for (var i = 0; i < firstNames.length; i++) {

//     for (var j = 0; j < lastNames.length; j++) {
//         console.log(firstNames[i], lastNames[j])
//     }
// }

// console.log(fullNames)

// var text = prompt("Enter your name")

// console.log(text)

// var newText = text.toLowerCase()


// console.log(newText)



// var students=["haSsaN","Fazal","AhMed","MoIZ"]
// var newStd=[]
// console.log(students)

// for(var i=0; i<students.length; i++){
//     newStd.push(students[i].toUpperCase());
// }

// console.log(newStd);



// var text = "Kariz"


// console.log(text)

// if (text.length > 4) {
//     var newText = text.slice(0, 2)
//     console.log(newText)
// }


// var str = "my name is kariz.";


// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i,i+6)=="kariz.") {
//         console.log(i,"-",i+6);
//     }
// }

// var arr=["ahmed","sajjad","kariz",4,5];

// var str = "my name is kariz.";

// var a= str.indexOf("kariz.");



// console.log(a)



// var num = [5, 5, 20, 6, 5,7,5];

// var a=num.lastIndexOf(5)

// console.log(a)


// var firstNames = prompt("Enter email");
// var matched=0

// for (let i = 0; i < firstNames.length; i++) {
//     if(firstNames.charAt(i) =="@"){
//         console.log("Email is correct")
//         matched=1
//     }

// }

// if(matched==0){
//     console.log("Email is incorrect")
// }




// var firstNames = "My name is kariz. kariz is study in university"
// console.log(firstNames)


// var a = firstNames.replaceAll("kariz",   "sajjad");

// console.log(firstNames)
// console.log(a)

// var  num=Math.random();
// var integer=Math.floor((num*9)+1);
// console.log(integer);


// var age = 9.348238478

// console.log(age)

// var a = age.toFixed(3)

// var b= parseFloat(a)+1

// console.log(b)

// var fullDate = new Date();
// console.log(fullDate)

// var time = fullDate.getTime();

// console.log(time/(1000*60*60*24*365))

// var name=prompt("Enter your name");
// var name = "Kariz";

// function sum(a, b, d) {
//     var c = a + b + d;
//     console.log(name);
//     return c
// }

// var add = sum(1, 2, 3);

// console.log(name);













// Question Number 01

// var a = prompt("Enter Your Name")

// var name = "Rizwan Jamal";
// console.log(name.toLowerCase());

// // Question Number 02

// var colors = ["orange", "black", "blue", "red", "yellow"];
// console.log(colors);

// colors.unshift("pink");
// console.log(colors);

// // Question Number 03

// var names = ["mahammad", "Ali", "fatima", "hasan", "hussain"];
// console.log(names);

// names.push("zainulabideen");
// console.log(names);

// // Question Number 04


// var colors = ["orange", "black", "blue", "red", "yellow"];
// console.log(colors);

// colors.unshift("white", "grey");
// console.log(colors);

// // Question Number 05


// var colors = ["orange", "black", "blue", "red", "yellow"];
// console.log(colors);

// colors.shift();
// console.log(colors);

// // Question Number 06


// var colors = ["orange", "black", "blue", "red", "yellow"];
// console.log(colors);

// colors.pop();
// console.log(colors);


// // Question Number 07

// var colors = ["orange", "black", "blue", "red", "yellow"];
// console.log(colors);

// colors.splice(2, 1, "white");
// console.log(colors);

// Question Number 08


// var colors = ["orange", "black", "blue", "red", "yellow"];
// console.log(colors);

// colors.splice(3);
// console.log(colors);


// Question Number 09

// var string = "Hyderabad";
// console.log(string);

// var newstring = string.replace('Hyder', 'Islam');
// console.log(newstring);

// var c = "Islamabad";
// console.log(c);

// var a = prompt("Enter dimensions for Identify matrix")

// for (var i = 1; i <= a; i++) {

//     for (var j = 1; j <= a; j++) {
//         if (i === j) {
//             document.write(1);
//         } else {
//             document.write(0);
//         }
//     }

//     document.write("<br>");
// }

// var dayOfWk=2

// switch (dayOfWk) {
//     case 2:
//         alert("Whoopee");
//         break;
//     case 3:
//         alert("Whoopee");
//         break;
//     case 4:
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }

// var StdName=""
// for(StdName!="Kariz";){

//     StdName=prompt("Enter Your Name")
// }


// var i=6;

// while (i<=5) {
//     console.log("While ",i);
//     i++
// }


// var i=6;
// do{
//     console.log("DO While ",i);
//     i++
// }while(i<=5)


// function popup(greet)
// {
//     console.log(greet)
// }


// document.getElementById("btn").addEventListener("click",submit)
// document.getElementById("onsubmitted").addEventListener("click", function(e){
//     var value1 = document.getElementById("value1").value;
//     var value2 = document.getElementById("value2").value;

//    e.preventDefault();
//  }
// )

// function submit(e){
//     var name=document.getElementsByTagName("input");
//     var p=document.getElementsByTagName("p");

//     if(name[0].value===""){
//         p[0].innerHTML="Name Cannot be null"
//         p[0].className="error"
//     }else if(name[0].value.length<3 || name[0].value.length>50){
//         p[0].innerHTML="Name should be atleast 3 letter and less 50"
//         p[0].className="error"
//     }else{
//         p[0].className=""
//     }

//     if(name[1].value===""){
//         p[1].innerHTML="Password Cannot be null"
//         p[1].className="error"
//     }else if(name[1].value.length<8){
//         p[1].innerHTML="Name should be atleast 8 letter"
//         p[1].className="error"
//     }else if(name[1].value){
//         p[1].innerHTML="Password should be atleast 8 letter"
//         p[1].className=""
//     }
//     console.log(name[0].value)
//     e.preventDefault();
// }
// document.getElementById("btn").addEventListener("click",submit)

// var div = document.getElementById("para");
// var p=document.createElement("p").append("A paragraph")

// var deleteBTN = document.getElementById("delete").addEventListener("click",function(){
//     var middle= div.childNodes[0]
//     div.insertBefore(p,middle.nextSibling);
// });


// var a = document.createElement("a");
// a.innerHTML="Youtube"
// a.setAttribute("href","")
// div.appendChild(a)


var imgArray=["js.jpg","spongebob.jpg","wallpaper1.jpg","wallpaper2.jpg"]

var Previous = document.getElementById("Previous");
var Next = document.getElementById("Next");
var img = document.getElementById("img");

var count=0;


Next.addEventListener("click",function (){
    if(count==3){
        count=-1;
    }
    count++;
    img.setAttribute("src","./img/"+imgArray[count])
}
)

Previous.addEventListener("click",function (){
    if(count==0){
        count=imgArray.length;
    }
    count--;
    img.setAttribute("src","./img/"+imgArray[count])
}
)





var number = document.getElementsByClassName("number")
var inp = document.getElementById("inp")

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        console.log(e.target.innerHTML)
        inp.value += e.target.innerHTML;


        if (e.target.innerHTML >= 0 || e.target.innerHTML <= 9) {
            console.log("Number")
        }
        
    })
}

console.log(number);





















