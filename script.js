const limit=230;
const name = document.getElementById("Name");
const txtComment = document.getElementById("enviar");
const Comment = document.getElementById("Comment");
const counterr = document.getElementById("counter");
const mayuscula=document.getElementById("btn_mayuscula");
const minuscula=document.getElementById("btn_minusculas");
const resultComment = document.getElementById("Result_Comment");

enviar.onclick = function (e){
  e.preventDefault();

  txtname.textContent = name.value;
  profile.textContent = name.value.trim().charAt(0);
  resultComment.textContent = `Your comment is: ${Comment.value}`;
};

Comment.addEventListener("keyup",(event)=>{
  let counter=280;
  if(event.code === "Enter"){
    let worth = counterr.textContent = counter - Comment.value.length;
    resultComment.innerHTML = Comment.value;
    if(worth<50){
      counterr.style.color = "red"
    }else{
      counterr.style.color = "while"
    }
  }
});



mayuscula.addEventListener("click",()=>{
  resultComment.textContent=Comment.value.toUpperCase();
});

minuscula.addEventListener("click",()=>{
  resultComment.textContent=Comment.value.toLowerCase();
});

