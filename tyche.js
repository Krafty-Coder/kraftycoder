// no JS
 function printf() {
    name = prompt("Input your name please");
 	if (name == null || name === "") {
	   alert("Hello there!");
    } else {
        alert("Hello " + name + "!");
    }
    let subscribe = confirm("Would you like to subscibe to our services?");
     if (subscribe) {
         let email = prompt("Awesome, Input your email");
         if (email) {
             console.log(email);
             alert("Thanks");
         } else {
             alert("You are always welcome another time.")
         }
     } else {
         alert("Thank you for staying with us :)")
     }
};



