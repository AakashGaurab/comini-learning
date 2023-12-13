// Select all headlines

let headlines = document.getElementsByTagName('h1');



async function generateRhyme(text,i) {
  // rhyming word
  let response = await fetch("http://localhost:3501/rhyme",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({"text":text})
  }) 

  let data = await response.json();
  if (data.word.length>=1){
    headlines[i].innerText = data.word[0].word;
  }
}





let articleLink;
let otp;
const baseServerURL = "http://localhost:3501"
document.addEventListener('DOMContentLoaded', function () {
  let loader = document.getElementById("loader");
  let placeholderHeadline = document.getElementById("placeholder-headline")
  let placeholderBias = document.getElementById("placeholder-bias")
  placeholderBias.style.display = 'none'
  placeholderHeadline.style.display = 'none'
  let headline = document.getElementById("headline")
  let bias = document.getElementById("bias")
  loader.style.display = 'none';
  const getDataBtn = document.getElementById("getData");
  getDataBtn.addEventListener("click",()=>{
  for (let i = 0; i < headlines.length; i++) {
    // Change the headline text
    const originalText = headlines[i].innerText;
    generateRhyme(originalText,i);
  }
  
   });

  
document.getElementById("validateEmail").addEventListener("click",()=>{
    validateEmail();
})


document.getElementById("verifyOTP").addEventListener("click",()=>{
    verifyOTP();
})
});

async function validateEmail() {
  const email = document.getElementById('email').value;
  let loader = document.getElementById("loader");
  loader.style.display = "block"
  otp = Math.floor(1000 + Math.random() * 9000);
  try {
    const response = await fetch(`${baseServerURL}/validate-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email":email,"otp":otp }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
  loader.style.display = "none"
      // Show OTP input container
      document.getElementById('emailInputContainer').style.display = 'none';
      document.getElementById('otpInputContainer').style.display = 'block';
    } else {
      alert(data.error || 'Validation failed');
  loader.style.display = "none"
    }
  } catch (error) {
    alert('An error occurred during email validation');
  loader.style.display = "none"
  }
}
  
function verifyOTP() {
  let loader = document.getElementById("loader");
  const email = document.getElementById('email').value;
  const otp1 = document.getElementById('otp').value;
  loader.style.display = 'block'
  if (otp1==otp){
    alert("OTP Validatd");
    loader.style.display = 'none'
    // Show article container
    document.getElementById('otpInputContainer').style.display = 'none';
    document.getElementById('articleContainer').style.display = 'block';
  }
  else {
  alert('An error occurred during OTP verification');
  loader.style.display = 'none'
  }
}

