const form = document.querySelector("form").value;
const email = document.querySelector("email").value;
const password = document.querySelector("password").value;
const btn = document.querySelector("btn-1").value;

form.addEventListener("submit",(e) =>{
    e.preventDafault();
    Enviar();
})

btn.addEventListener("click",() =>{
    if(email === "hassainmiguel1@gmail.com" && password === "H983824@#"){
        alert("sucesso")
    }else{
        alert("preencha os espaços vazios")
    }
})


