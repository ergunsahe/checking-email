const email = document.querySelector("#email");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result")

const invalid_letters=["!","#","$","%","&","/","+", "<",">","%", ")", "(", "€", "{", "}", "*", "^", "~","£", "=", "?", ",", " ", "ö", "ü", "ğ", "ş", "\'"]
const letters = /^[0-9a-zA-Z,'@','.']+$/;
const check_email= () => {
    const split_email=[]
    for (i=0;i<email.value.length;i++){
        split_email.push(email.value[i])
    }
     const n = split_email.filter(item => {
         return invalid_letters.includes(item)
     })
    if (n.length>0){
        result.innerText="invalid entry 1"
        email.focus()
        email.value=""
        
    }else if (!isNaN(split_email[0])){
        result.innerText="invalid entry 1-1"
        email.focus()
        email.value=""
    }else if(!(split_email.includes("@"))){
        result.innerText="invalid entry 1-2"
        email.focus()
        email.value=""
        
    }else if (email.value.split("@").length> 2 ){
        result.innerText="invalid entry 2"
        email.focus()
        email.value=""
        
    }else if (!(email.value.split("@")[1].includes("."))){
        result.innerText="invalid entry 3"
        email.focus()
        email.value=""
        
    } else if (email.value.split("@")[1].split(".").length>3){
        result.innerText="invalid entry 4"
        email.focus()
        email.value=""
        
        
    }else if (!email.value.match(letters)){
        result.innerText="invalid entry 6"
        email.focus()
        email.value=""
    }else if (email.value.split("@")[1].split(".")){
        const m =email.value.split("@")[1].split(".").length
        const k = email.value.split("@")[1].split(".")[m-1];
        if (k.length>3 || k.length<2){
            result.innerText="invalid entry 7"
            email.focus()
            email.value=""
            
        }else if (email) {
            result.innerText="valid entry"
            email.focus()
            email.value=""
            
        }
    }

}
btn.addEventListener("click", check_email)

