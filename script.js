

/*Ajax call to an API */

let studentList = document.querySelector(".students");

//we want to make an Ajax call and "Ajax call" can be made in 3 steps:
// 1. create an XMLHttpRequest Object...
let request = new XMLHttpRequest()

//2. create the request itself. To create this we need to use the "open() (method of the) xMLHttpRequest()" 
request.open("GET", "http://localhost:37282/api/controllers/get-all-students");
//now we have created the request. Next we need to send the request..

//3. Send the request using the "send() (method of the xML )".
request.send();

//when we send the request, the server will send back the response with the data which we've requested for.
//the data might take time loading.

// Next thing want to do is addig an EventListener(). this will listen for the incoming "load" event
// and this load EventListener will happen when the data which we have requested is completely loaded in the webPage.
// //then we execute a callBack 'function()'; using "anomynous" function().
request.addEventListener("load", function(){
//     //and when the data is loaded, the first thing which we want to do is to log the data in
    // a 'developer console'(on the browser) to see if we actually received the data and from there we get the data from 'developer console'
  /*2*/  let data = JSON.parse(request.responseText) //this will covert the data received from "json object" to "JS object". 
    /*3*/console.log(data) //after this, it will change to an Array on the D.Console.
   /*1*/ console.log(request.responseText/*this will display the received data in the developer console*/);
   /*if we are requesting for only one data, it will come in [{...}], we'd need to restructure the 'data' in our code to [data] (and this will give
    us the actual data received in JS format) */

    //create a template variable to hold our data in the webpage
    const html = `<article class = "students">
    <div class = "student_data">
       <h3 class="student_name"> ${data.student}</h3>
       <h4 class="student_surname"> ${data.surname}</h4>
       <p1 class="student_row">${data.sex}</p1>
       <p2 class="student_row">${data.age}</p2>
       <p3 class="student_row">${data.studentNo3}</p>
       <p4 class="student_row">${data.classArmId}</p4>
       <p5 class="student_row">${data.country}</p5>
       <p6 class="student_row">${data.id}</p6>
   </div>
 </article>`; 

  studentList.insertAdjacentHTML('beforeend', html);
 })



//   let postObj = { 
//     // id: Math.random(), 
//     Username: document.querySelector('#userName').value, 
//     Password: document.querySelector('#password').value
// }

//   let studentLogin = document.querySelector(".loginUser");
//   let req = new XMLHttpRequest()
//   req.dispatchEvent("POST", "http://localhost:37282/api/Authenticate/loginUser");
//   request.send(document);

 
// // [...]
// req.onload = function () {
//     if(req.status === 201) {
//         let AlertDiv = document.querySelector('#loginUser')
//         AlertDiv.innerHTML =  req.response.message
  //  }
// }
// function FormData(){
//   if ( !jQuery('#login #userName').val() ) {
//     alert('Please input userName.');
//     jQuery('#log #userName').focus();
//     return false;
//     }
//     if ( !jQuery('#login #password').val() ) {
//     alert('Please input your Password.');
//     jQuery('#login #password').focus();
//     return false;}
//     }
// }
// let studentLogin = user.querySelector();
// let req = new XMLHttpRequest()
// req.open("POST", "http://localhost:37282/api/Authenticate/loginUser");
// request.send(document);

//the following are for login page...
// function Login(form){
//   var ra = form.UserName.value;
//   var reg = form.Password.value;
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function(){
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
//       loginResults(form);
//     }
//   }
// }

// window.addEventListener(window, "load", function(){
//   var loginForm = document.getElementById("LoginForm");
//   window.addEventListener(loginForm, "log", function(){
//     Login(loginForm);
//   });
// });


// function loginResults(){
//   var loggedIn =document.getElementById("LoggedIn");
//   var badLogin =document.getElementById("badLogin");
//   if(xmlhttp.responseText.indexOf("failed") == -1 ){
//     loggedIn.innerHTML = "Logged in as " + xmlhttp.responseText;
//     loggedIn.style.display = "block";
//     Form.style.display = "none";
//   }else{
//     badLogin.style.display = "block";
//     form.Username.select();
//     form.Username.className ="Highlisted";
//     setTimeout(function(){
//       badLogin.style.display ="none";
//     },3000);
//   }

// }
