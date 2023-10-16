let rulebtn=document.querySelector(".btn-rule");
let rulemodel=document.querySelector(".rmodel");
rulebtn.addEventListener("click",()=>{
    rulemodel.style.display="flex"
    setTimeout(()=>{
    },500);

});
let btnclose = document.querySelector(".close");
btnclose.addEventListener("click",()=>{
    rulemodel.style.display="none"
    setTimeout(()=>{
    },500);
});
function redirectTohomepage(){
    window.location.href="index.html"
}