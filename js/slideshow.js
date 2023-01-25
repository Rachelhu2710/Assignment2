// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides1 = document.getElementsByClassName("mySlides");
  let slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides1.length) {slideIndex = 1}    
  if (slideIndex > slides2.length) {slideIndex = 1}
  slides1[slideIndex-1].style.display = "block"; 
  slides2[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}