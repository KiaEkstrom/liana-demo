/* Function for the 'scroll to the top' button to appear and to work */

window.onscroll = function() {btnAppears()};

function btnAppears() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  document.getElementById("topbtn").style.display = "block";
	} else {
		document.getElementById("topbtn").style.display = "none";
	}
}

function toTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0; 
} 



/* Functions for the number counters */

function countClients() {
	var counts = setInterval(counter, 1);
	var upto=0;

	function counter(){
		var count= document.getElementById("counter_1");
		count.innerHTML=++upto;
		if(upto===3000)
		{
			clearInterval(counts);
		}
	}
}

function countEmployees() {
	var counts = setInterval(counter);
	var upto=0;

	function counter(){
		var count= document.getElementById("counter_2");
		count.innerHTML=++upto;
		if(upto===180)
		{
			clearInterval(counts);
		}
	}
}

function countUsers() {
	var counts = setInterval(counter);
	var upto=0;

	function counter(){
		var count= document.getElementById("counter_3");
		count.innerHTML=++upto;
		if(upto===10000)
		{
			clearInterval(counts);
		}
	}
}



/* Function for the newsletter subscription */

function validateEmail() {
	var x = document.forms["emailForm"]["email"].value;
	if (x == null || x == "" || x.length < 6) {
		alert("Please check that your email address is correct!");
		return false;
		
	} else {
		alert("Thank you for subscribing to our newsletter!");
		x = "";
		return true;
	}
}


