document.addEventListener("DOMContentLoaded", () => {
    console.log("test")
    
    let button , a , b,c,paragraphe;
    button=document.getElementById("button")
    paragraphe=document.getElementById("paragraphe")
    
    
    button.addEventListener("click",() => {
    
    a=prompt("avez vous 0 enfant? ")
    if(a=="oui"){
    paragraphe.innerHTML="Eh bien alors vous n avez pas denfant ! "

     } else if (a=="non"){
    b=prompt("avez vous 1 enfant? ")

             if(b=="oui"){
                paragraphe.innerHTML="alors c est quand le deuxieme ? "
             } else if(b=="non") {
                c =prompt("avez vous 2 enfants? ")

                           if(c=="oui"){
                             paragraphe.innerHTML="quels beaux enfants vous avez la   "
                           }else if(c=="non"){
                           paragraphe.innerHTML="cest bon faut arreter avec les gosses!  "
                          }

            }    

            else {
                alert("je n'ai pas bien saisis recommencer!")
            }
    
    }

    
    })
    
    
    })