//  For toggling the signIN and signUP pages

let click = document.getElementById("clickMe");

click.addEventListener("click", function () {
  let myForm = document.getElementById("myForm");
  let nextItem = document.getElementById("next");
  myForm.style.display = "none";
  nextItem.style.display = "block";
});

let backPage = document.getElementById("toReturn");

backPage.addEventListener("click", function () {
  let myForm = document.getElementById("myForm");
  let nextItem = document.getElementById("next");
  myForm.style.display = "block";
  nextItem.style.display = "none";
});

//when forgotPass is being clicked on
let forgotPass = document.getElementById("forgotPass");
forgotPass.addEventListener("click", function () {
  var msg = prompt("Please enter your email address");
  if (msg === null || msg == "") {
    alert(`You didn't input your email address...`);
  } else if (msg !== "") {
    alert(
      `We will send a 4-digit code to
${msg} in order for you to reset your password. Please check your inbox`
    );
  }
});
// Displaying a welcome page after clicking on the signIn and signUp buttons

let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");

signIn.addEventListener("click", function () {
  let nameValue = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  if (nameValue !== "" && password !== "") {
    document.write(
      `<h1 style = "text-align:center"> Welcome back!, ${nameValue}... </h1>`
    );
  } else {
    alert("Please fill in your details completely.");
  }
});

signUp.addEventListener("click", function () {
  let nameValue2 = document.getElementById("name2").value;
  let password2 = document.getElementById("password2").value;
  let email2 = document.getElementById("email2").value;
  if (nameValue2 !== "" && password2 !== "" && email2 !== "") {
    document.write(
      `<h1 style = 'text-align:center'> Your account has been successfully created, ${nameValue2}! </h1>`
    );
  } else {
    alert("Please fill in your details completely.");
  }
});
