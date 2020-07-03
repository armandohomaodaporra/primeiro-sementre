function recarregar() {

     document.getElementById("a").style.display = "none";
     document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
     document.getElementById("d").style.display = "none";

}
  

	function a() {
document.getElementById("responder").value = "a";

 document.getElementById("b").style.display="none";;
  document.getElementById("c").style.display="none";;
   document.getElementById("d").style.display="none";;

displai = document.getElementById("a").style.display;

if (displai=="none") {document.getElementById("a").style.display="inline-block";
} else{
  document.getElementById("a").style.display="none";;
}
}


	function b() {
document.getElementById("responder").value = "b";

 document.getElementById("a").style.display="none";;
  document.getElementById("c").style.display="none";;
   document.getElementById("d").style.display="none";;

displai = document.getElementById("b").style.display;

if (displai=="none") {document.getElementById("b").style.display="inline-block";
} else{
  document.getElementById("b").style.display="none";;
}
}

function c() {
document.getElementById("responder").value = "c";

 document.getElementById("a").style.display="none";;
  document.getElementById("b").style.display="none";;
   document.getElementById("d").style.display="none";;

displai = document.getElementById("c").style.display;

if (displai=="none") {document.getElementById("c").style.display="inline-block";
} else{
  document.getElementById("c").style.display="none";;
}
}


function d() {
document.getElementById("responder").value = "d";

 document.getElementById("a").style.display="none";;
  document.getElementById("b").style.display="none";;
   document.getElementById("c").style.display="none";;

displai = document.getElementById("d").style.display;

if (displai=="none") {document.getElementById("d").style.display="inline-block";
} else{
  document.getElementById("d").style.display="none";;
}
}



var obj= {
"acertos":"1",



};

function questao2() {
alter = document.getElementById("responder").value;
if (alter =="b") {

 window.location.href = "questao2.html";
}
}


function questao3() {
alter = document.getElementById("responder").value;
if (alter =="b") {


   window.location.href = "questao3.html";
}
}

function questao4() {
alter = document.getElementById("responder").value;
if (alter =="b") {
 
     window.location.href = "questao4.html";

   
}
}

function questao5() {
alter = document.getElementById("responder").value;
if (alter =="b") {

     window.location.href = "questao5.html";

  

}
}
