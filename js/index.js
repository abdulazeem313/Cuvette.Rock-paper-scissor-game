let con = document.querySelectorAll(".con");
let computer= document.querySelectorAll(".computer");
let random = Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle")
let user= document.querySelector(".user");
let machine= document.querySelector(".machine");
let winmodel=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");
let play= document.querySelector(".play");
let rulebtn=document.querySelector(".btn-rule");
let btnnext=document.querySelector(".btn-next");
let rulemodel=document.querySelector(".rmodel");
let inrule=document.querySelector("inrule");
// to show your score
let score=JSON.parse(localStorage.getItem("score"));
let scoreElem=document.getElementById("score");
if(score){
    scoreElem.innerText=score;
}
let count=0;
// to show computer score
let cscore=JSON.parse(localStorage.getItem("cscore"));
let cscoreElem=document.getElementById("cscore");
if(cscore){
    cscoreElem.innerText=cscore;
}
let ccount=0;
con.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        con.forEach(item =>{
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=>{
            machine.style.opacity="1";
            setTimeout(()=>{
                computer[random].style.display="block";
                computer[random].classList.add("right");
            },1000);
        },500);
        setTimeout(()=>{
             
            if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                const shouldshowbutton = true;
                if(shouldshowbutton){
                    document.getElementById("mybutton").style.display="block";
                }
                winmodel.style.display="grid";
                winner.innerText="YOU WIN";
                count=score;
                count++;
                // count=0;
                scoreElem.innerText=count;
                localStorage.setItem("score",JSON.stringify(count));
            }else if(random==index){
                winmodel.style.display="grid";
                winner.innerText="TIE UP";
            }else{
                winmodel.style.display="grid";
                winner.innerText="YOU LOST";
                ccount=cscore;
                ccount++;
                // ccount=0;
                cscoreElem.innerText=ccount;
                localStorage.setItem("cscore",JSON.stringify(ccount));
            }

        },1500)
    });
});
play.addEventListener("click",()=>{
    window.location.reload();
});
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

function redirectTopage(){
    window.location.href="congrats.html"
}