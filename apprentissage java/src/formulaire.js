






/*document.getElementById("inscription").addEventListener("submit", function(e){
   
   

   var erreur;

   var inputs=document.getElementById("inscription").getElementsByTagName("input");     // reflchis bien

   for(var i=0;i<inputs.length;i++)
     if(!inputs[i].value){
         erreur="veuillez renseigner tous les champs"
   }
   if(erreur){
    e.preventDefault();
    document.getElementById("erreur").innerHTML=erreur;
}else{
    alert("formulaire envoyé")
}




  /* var pseudo=document.getElementById("pseudo");
   var email=document.getElementById("email");
   var email2=document.getElementById("email2");
   var mdp =document.getElementById("mdp");

if (!mdp.value) {
    erreur="veuillez renseigner un mot de passe" 
}
   if (!email.value) {
    erreur="veuillez renseigner un email"
}
   if (!pseudo.value) {               // pas de valeur dans le placeholder
       erreur="veuillez renseigner un pseudo" 
}


if(erreur){
    e.preventDefault();
    document.getElementById("erreur").innerHTML=erreur;
}else{
    alert("formulaire envoyé")
}

    

    
})  */