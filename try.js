var a=document.querySelector(".apps");
var c=document.querySelector(".close");
var b=document.querySelector(".nav-bar");
var e=document.querySelector(".X");
var x=document.querySelector(".fir-col");
var y=document.querySelector(".sec-col");
var bt=document.querySelector(".fin");
function nav_click()
{
    a.classList.add("move");
    c.classList.add("small-screen");
    e.classList.add("bye");
    bt.classList.add("move");
}

function nav_close()
{
    a.classList.remove("move");
    c.classList.remove("small-screen");
    e.classList.remove("bye");
    a.classList.add("bye");
    bt.classList.remove("move");
}

function h()
{ 
    x.style.display="block";
    y.classList.add("move");
}

function h1()
{
    x.style.display="none";
    y.classList.remove("move");
}

