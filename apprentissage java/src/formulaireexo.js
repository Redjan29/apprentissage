document.addEventListener("DOMContentLoaded",()=>{
    console.log(200)
    //le nom de la class
let nom, prenom, target, footer, submit
submit = document.getElementsByTagName("input")[2]
target = document.querySelector("ul")
footer = document.querySelector("footer p")
    
class User{
    
        //constructeur
        constructor(nom, prenom){
            this.nom = document.getElementsByTagName("input")[0].value;
            this.prenom = document.getElementsByTagName("input")[1].value;
        }
        //getter
        getOut(){
            
            return `${ this.nom} : ${ this.prenom}`
        }
        //setter
        verif(){
            if(this.nom && this.prenom){
                
                target.innerHTML+=`<li>${ this.nom} : ${ this.prenom}</li>`
                localStorage.setItem("user",this.nom)
                return this.getOut()
            }
            else{
                alert("Remplir les champs")
               
            }
        }
        static phrase(){ //la propriété static ne permet pas de passer par l'objet mais par la classe
            footer.innerText += " Le monde est à vous"
            console.log("Le monde est à vous")
        }
    }
    //instances
   
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        let createUser = new User(nom, prenom)
        createUser.verif()
        let phrase = User.phrase()
        let printOut = createUser.getOut()
        console.log(printOut)
        

    })
   
        
       
    
    
})