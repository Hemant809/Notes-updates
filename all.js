let home=document.querySelector(".home");

let notes=document.querySelector(".notes");

home.addEventListener("click",(home)=>{
    window.location.href="index.html";
    console.log("Print")
})
notes.addEventListener("click",()=>{
    window.location.href="Notes-all.html";
})  
let pyqs=document.querySelector(".pyqs");
pyqs.addEventListener("click",()=>{
    window.location.href="Pyqs.html";
})

// -------Started page of notes-------- 

//  CS
let CS=document.querySelector(".CS");

CS.addEventListener("click",()=>{
    window.location.href="Cs.html";
    console.log("Print")
})

// IT
let IT=document.querySelector(".IT");

IT.addEventListener("click",()=>{
    window.location.href="It.html";
    console.log("Print")
})

// EC
let EC=document.querySelector(".EC");

EC.addEventListener("click",()=>{
    window.location.href="Ec.html";
    console.log("Print")
})

// ME
let ME=document.querySelector(".ME");

ME.addEventListener("click",()=>{
    window.location.href="Me.html";
    console.log("Print")
})

// CIVIL
let CIVIL=document.querySelector(".CIVIL");

CIVIL.addEventListener("click",()=>{
    window.location.href="civil.html";
    console.log("Print")
})

// EL
let EL=document.querySelector(".EL");

EL.addEventListener("click",()=>{
    window.location.href="El.html";
    console.log("Print")
})

// AIML
let AIML=document.querySelector(".AIML");

AIML.addEventListener("click",()=>{
    window.location.href="Aiml.html";
    console.log("Print")
})

// IOT
let IOT=document.querySelector(".IOT");

IOT.addEventListener("click",()=>{
    window.location.href="Iot.html";
    console.log("Print")
})

// MC
let MC=document.querySelector(".MC");

MC.addEventListener("click",()=>{
    window.location.href="Mc.html";
    console.log("Print")
})

// CBMS
let CBMS=document.querySelector(".CBMS");

CBMS.addEventListener("click",()=>{
    window.location.href="cbms.html";
    console.log("Print")
})

// CHE 
let CHE=document.querySelector(".CHE");

CHE.addEventListener("click",()=>{
    window.location.href="che.html";
    console.log("Print")
})

// ARCHI    
let ARCHI=document.querySelector(".ARCHI");

ARCHI.addEventListener("click",()=>{
    window.location.href="Archi.html";
    console.log("Print")
})


// ------------------started page of subjects--------

table.style.display = "none";

function filterTable() {
    var select = document.getElementById("year-select");
    var filter = select.value;
    var table = document.getElementById("notes-table");
    var tr = table.getElementsByTagName("tr");
    
    table.style.display = "none"; // Hide the table by default
    
    if (filter !== "none") {
        table.style.display = ""; // Show the table
        for (var i = 1; i < tr.length; i++) {
            var rowClass = tr[i].className;
            tr[i].style.display = (filter === "all" || rowClass === filter) ? "" : "none";
        }
    }
}







        // let y1=document.querySelector(".y1");
        // let y2=document.querySelector(".y2");
        // let y3=document.querySelector(".y3");
        // let y4=document.querySelector(".y4");
        // let msg=document.querySelector(".sem");
        // let box=document.querySelector(".box");
        
        
        
        // let year1=document.querySelector(".year1")
        // let year2=document.querySelector(".year2")
        // let year3=document.querySelector(".year3")
        // let year4=document.querySelector(".year4")
        
        
        // let x1=true;
        // let x2=true;
        // let x3=true;
        // let x4=true;
        
        
        // y1.addEventListener("click",()=>{
        //     console.log("print 1");
        //     if(x1){
        //         box.classList.add("art")
        //         year1.classList.remove("hide1");
        //         year2.classList.add("hide2");
        //         year3.classList.add("hide3");
        //         year4.classList.add("hide4");
        //         x1=false;
        //         x2=true;
        //         x3=true;
        //         x4=true;
        //     }
        //     else{
        //         box.classList.remove("art");
        //         year1.classList.add("hide1");
        //         x1=true;
        //     }
        // })
        
        // y2.addEventListener("click",()=>{
        //     if(x2){
        //         box.classList.add("art")
        //         year2.classList.remove("hide2");
        //         year1.classList.add("hide1");
        //         year3.classList.add("hide3");
        //         year4.classList.add("hide4");
        //         x2=false;
        //         x1=true;
        //         x3=true;
        //         x4=true;
        //     }
        //     else{
        //         box.classList.remove("art");
        //         year2.classList.add("hide2");
        //         x2=true;
        //     }
        // })
        
        // y3.addEventListener("click",()=>{
        //     if(x3){
        //         box.classList.add("art")
        //         year3.classList.remove("hide3");
        //         year4.classList.add("hide4");
        //         year2.classList.add("hide2");
        //         year1.classList.add("hide1");
        //         x3=false;
        //         x1=true;
        //         x2=true;
        //         x4=true;
        //     }
        //     else{
        //         box.classList.remove("art");
        //         year3.classList.add("hide3");
        //         x3=true;
        //     }
        // })
        
        // y4.addEventListener("click",()=>{
        //     if(x4){
        //         box.classList.add("art")
        //         year4.classList.remove("hide4");
        //         year3.classList.add("hide3");
        //         year2.classList.add("hide2");
        //         year1.classList.add("hide1");
        //         x4=false;
        //         x1=true;
        //         x2=true;
        //         x3=true;
        //     }
        //     else{
        //         box.classList.remove("art");
        //         year4.classList.add("hide4");
        //         x4=true;
        //     }
        // })