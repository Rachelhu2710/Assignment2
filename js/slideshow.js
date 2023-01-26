// var slideIndex = 0;
// showSlides();

// function showSlides() {
// var i;
// var slides = document.getElementsByClassName("mySlides");
// for (i = 0; i < slides.length; i++) {
// slides.style.display = "none";
// }
// slideIndex++;
// if (slideIndex > slides.length) {
// slideIndex = 1
// }
// slides[slideIndex - 1].style.display = "block";
// setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// let slideIndex = 0;
// showSlides();

// let slideIndex = [1,1];
// let slideId = ["mySlides", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
//   setTimeout(showSlides, 2000);
// }
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
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   // let slides2 = document.getElementsByClassName("mySlides2");
//   // let slides3 = document.getElementsByClassName("mySlides3");
//   // let slides4 = document.getElementsByClassName("mySlides4");
//   for (i = 0; i < slides1.length; i++) {
//     slides1[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides1.length) {slideIndex = 1}  
//   slides1[slideIndex-1].style.display = "block";   
//   if (slides2.length >0)
//   {
//     for (i = 0; i < slides2.length; i++) {
//       slides2[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides2.length) {slideIndex = 1}
//     slides2[slideIndex-1].style.display = "block"; 
//   }
//   if (slides3.length >0)
//   {
//     for (i = 0; i < slides3.length; i++) {
//       slides3[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides3.length) {slideIndex = 1}
//     slides3[slideIndex-1].style.display = "block"; 
//   }
//   if (slides4.length >0)
//   {
//     for (i = 0; i < slides4.length; i++) {
//       slides4[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides4.length) {slideIndex = 1}
//     slides4[slideIndex-1].style.display = "block"; 
//   }
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }