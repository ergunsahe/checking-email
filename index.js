const email = document.querySelector("#email");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result")

const invalid_letters=["!","#","$","%","&","/","+", "<",">","%", ")", "(", "€", "{", "}", "*", "^", "~","£", "=", "?", ","]
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
        console.log("invalid entry 1")
    }else if(!(split_email.includes("@"))){
        result.innerText="invalid entry 1-1"
        console.log("invalid entry 1-1")
    }else if (email.value.split("@").length> 2 ){
        result.innerText="invalid entry 2"
        console.log("invalid entry 2")
    }else if (!(email.value.split("@")[1].includes("."))){
        result.innerText="invalid entry 3"
        console.log("invalid entry 3")
    } else if (email.value.split("@")[1].split(".").length>3){
        result.innerText="invalid entry 4"
        console.log("invalid entry 4")
        
    }else if (email.value.split("@")[1].split(".")){
        const m =email.value.split("@")[1].split(".").length
        const k = email.value.split("@")[1].split(".")[m-1];
        if (k.length>3 || k.length<2){
            result.innerText="invalid entry 5"
            console.log("invalid entry 5")
        }else if (email) {
            result.innerText="valid entry"
        console.log("valid entry")
        }
    }

}
btn.addEventListener("click", check_email)

