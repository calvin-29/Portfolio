
for(let i = 0; i < document.querySelectorAll("legend").length; i++){
    let obj = document.querySelectorAll("legend")[i]
    obj.addEventListener("click",()=>{
        if(obj.innerText.toLowerCase() === "skills"){
            document.getElementById("skills").style = "display: block;"
            document.getElementById("experience").style = "display: none;"
            document.getElementById("education").style = "display: none;"
        }
        if(obj.innerText.toLowerCase() === "experience"){
            document.getElementById("skills").style = "display: none;"
            document.getElementById("experience").style = "display: block;"
            document.getElementById("education").style = "display: none;"
        }
        if(obj.innerText.toLowerCase() === "education"){
            document.getElementById("skills").style = "display: none;"
            document.getElementById("experience").style = "display: none;"
            document.getElementById("education").style = "display: block;"
        }
    })
}
