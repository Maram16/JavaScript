// //displaying text on screen

// let element = document.getElementById("x");
// element.innerHTML += "Maram";




// let word=document.getElementById("m2")
// let text = "<h2>dont sleep</h2>"
// word.innerHTML=text
// word.innerHTML+= "work hard";
// console.log(word);


// let sentence = document.getElementById("m4")
// sentence.innerHTML = "life is wonderfull <br/>"
// sentence.innerHTML += "its just the beginning <br/>"
// sentence.innerHTML+= "you can do it" 
// //----------------------------------------------------------------------------------------------------------
// //adding two number together and getting the output

// let btn = document.getElementById("btn")

// btn.addEventListener("click",function(){
//     let num1 = document.getElementById("num1")
//     let num2 = document.getElementById("num2")
//     let text = document.getElementById("result")
//     let answer = parseInt(num1.value) + parseInt(num2.value)
//     text.innerHTML=answer

// })

// //knowing what type of datatype 
// let v = "5";
// console.log(typeof(v));


//Event -> Add Event Listener ->click, dbclick, mouse, keyboered 

// let btn1 = document.getElementById("btn1")
// btn1.addEventListener("click", function(){
//    let box = document.getElementsByClassName("box")[0]
//     // box.style.backgroundColor = 'green' //we put the green in a string so we dont consider it as a variable
//     // box.style.transition = '1s'
//     // box.style.width='600px' 
//     box.classList.add('x')   //classList (erase class, add class....) -> indirect with the css

// })


// let btn1 = document.getElementById("btn1")
// btn1.addEventListener("click", function(){
//     let box = document.getElementsByClassName("box")[0]
//     box.classList.remove("hide") //it removes or delete the class that is called hide

// })


// let btn1 = document.getElementById("btn1")
// btn1.addEventListener("click", function(){
//     let box = document.getElementsByClassName("box")[0]
//     box.classList.toggle("hide") //it removes the hide if its there and it return the class hide if its not there

// })


// let box = document.getElementsByClassName('box')[0]
// let text = document.getElementById('text')
// box.addEventListener("mouseenter" , function(){
//     // console.log("Welcome");
//     text.innerHTML = "Welcome"
// })
// box.addEventListener('mouseleave', function(){
//     text.innerHTML = "Bye"
// })
// box.addEventListener('mousedown' , function(){
//     text.innerHTML = "Clicked"
//     console.log('clicked');
// })
// box.addEventListener('mouseup' , function(){
//     text.innerHTML = "Up"
// })
// box.addEventListener('mousemove' , function(){
//     console.log("Mouse Moved");
// })

// console.log(window);

// window.addEventListener('keydown' , function(letter){
//     console.log(letter);
//     // if(letter.code === "KeyX")
//     // {
//     //     // console.log(letter.code);
//     //     document.body.style.background = "red"
//     // }
// })
// window.addEventListener("keyup", function (letter) {
//   // console.log(letter.code);
//   if (letter.code === "KeyX") {
//     // console.log(letter.code);
//     document.body.style.background = "green";
//   }
// });

//  let box = document.getElementsByClassName("box")[0];

// setTimeout(function(){
//     console.log("Welcome");
// } , 3000)
