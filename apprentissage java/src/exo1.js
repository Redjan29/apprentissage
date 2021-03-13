document.addEventListener("DOMContentLoaded", () => {
console.log("test")

let button , a , paragraphe;
button=document.getElementById("button")
paragraphe=document.getElementById("paragraphe")


button.addEventListener("click",() => {

a=prompt("avez vous des enfants? ")
if(a=="oui"){
paragraphe.innerHTML="vous avez des enfants bravo ! "
}else if (a=="non"){
paragraphe.innerHTML="eh bien alors vous n avez pas d enfant "
}else{
alert("je n'ai pas bien saisis recommencer!")
}
})


})

