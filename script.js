document.getElementById("quest12").onclick = function () {
    var chiller = document.getElementById("chiller");
    var chiller_1 = document.getElementById("chiller_1");
    var quest12 = document.getElementById("quest12");
    var blockVRV = document.getElementById("blockVRV");
    

    if(chiller.style.display === "none"){
        chiller_1.style.display="inline";
        blockVRV.style.display="inline";
        quest12.innerHTML=" ";
        chiller.style.display="none";

    }  else  {
        chiller_1.style.display="none";
        quest12.innerHTML="X";
        chiller.style.display="inline";
        blockVRV.style.display="inline";

    } 
    
}
 