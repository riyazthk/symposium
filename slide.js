//var slideIndex = 1;
//showSlides(slideIndex);

//function plusSlides(n) {
  //showSlides(slideIndex += n);
//}

//function currentSlide(n) {
  //showSlides(slideIndex = n);
//}

//function showSlides(n) {
  //var i;
//  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}
  //for (i = 0; i < slides.length; i++) {
    //  slides[i].style.display = "none";  
  //}
  //for (i = 0; i < dots.length; i++) {
    //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  //slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
//}
// Get the modal
//var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
  // btn.onclick=function() {
  //modal.style.display = "block";
///}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //if (event.target == modal) {
    //modal.style.display = "none";
  //}
function checkOnSubmit(){
	
var username =document.register.username.value;
var email =document.register.email.value;
var phone =document.register.phonenumber.value;
var college =document.register.CollegeName.value;

var validItem="Please enter list of item\n";
if(username=="")
 {
 validItem=validItem+"-->Name\n";
 }
 if(email=="")
 {
 validItem=validItem+"-->E-Mail\n";
 }
 if(phone=="")
 {
 validItem=validItem+"-->Phone Number\n";
 }
 if(college=="")
 {
 validItem=validItem+"-->College Name";
 }
 if(username=="" || email ==""|| phone ==""|| college==""){
	 alert(validItem);
	return false; 
  }
  document.register.value;

}
