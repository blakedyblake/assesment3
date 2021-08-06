document.getElementById("RanDo").addEventListener("click",()=>{
    let result = Math.floor(Math.random()* 3 + 1);
    if(result===3) alert("Go to zaxbys")
    if(result  === 2) alert ("Go to ChickfilA")
    if(result === 1) alert("Go to wifesavers");
})