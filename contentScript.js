// Select all headlines
let headlines = document.getElementsByTagName('p');


// Loop through the headlines
for (let i = 0; i < headlines.length; i++) {
  // Change the headline text
  const originalText = headlines[i].innerText;
  generateRhyme(originalText);
}


async function generateRhyme(text) {
  // rhyming word
  let response = await fetch("http://localhost:3501/rhyme",{
    method:"GET",
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