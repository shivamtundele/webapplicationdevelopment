/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function show(idone,idtwo,idthree,idfour,idfive)
                    {
                       
                       document.getElementById(idone).style.display = "block";
                       document.getElementById(idtwo).style.display = "none";
                       document.getElementById(idthree).style.display = "none";
                       document.getElementById(idfour).style.display = "none";
                       document.getElementById(idfive).style.display = "none";
                       
                    }
                    $(document).ready(function(){
    $("#toggle-first").click(function(){
        $("#toggle-first span").toggleClass("glyphicon glyphicon-plus glyphicon glyphicon-minus");
         $("#toggle-div-first").slideToggle(800);
    });   
    $("#toggle-second").click(function(){
        $("#toggle-second span").toggleClass("glyphicon glyphicon-plus glyphicon glyphicon-minus");
         $("#toggle-div-second").slideToggle(800);
    });  
    });