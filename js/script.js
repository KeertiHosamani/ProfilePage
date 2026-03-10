// Typing effect for hero section
const text = "MCA Student | Aspiring Web Developer";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message submitted successfully!");
});