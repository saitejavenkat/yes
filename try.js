var a=document.querySelector(".apps");
var c=document.querySelector(".close");
var b=document.querySelector(".nav-bar");
var e=document.querySelector(".X");
var x=document.querySelector(".adver");
var y=document.querySelector(".adver");
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
    x.style = `
    background: url("home.jpg") ;
    background-position: center;
    background-repeat: no-repeat;
    transition:2s;
    background-size: cover;
`;


}

function h1()
{
    
    y.style=`
    background: url("rb_hacker_logo.png") ;
    background-position: center;
    background-repeat: no-repeat;
    transition:2s;
    background-size: cover;
`;
}

