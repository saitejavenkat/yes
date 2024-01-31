var a=document.querySelector(".apps");
var c=document.querySelector(".close");
var b=document.querySelector(".nav-bar");
var e=document.querySelector(".X");
var x=document.querySelector(".adver");
var y=document.querySelector(".adver");
var bt=document.querySelector(".fin");
var adver1=document.querySelector(".fir");
var adver2=document.querySelector(".second");
var count=0;
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
    if(count%2==0){
    x.style = `
    background: url("calc.png") ;
    background-position: center;
    background-repeat: no-repeat;
    transition:2s;
    background-size: cover;
    adver1.style.width="2px"
    adver2.style.width="8px";
`;
    }
    else{
        y.style=`
        background: url(""https://3.bp.blogspot.com/-i6GzrUTQXaA/W1tT_huT5FI/AAAAAAAAXpM/tZhkEYIfiB0AnEmLVSN5PfmQ1EgYuF5QwCLcBGAs/s1600/prabha.jpg") ;
        background-position: center;
        background-repeat: no-repeat;
        transition:2s;
        background-size: cover;
    `; 
    adver1.style.width="8px"
    adver2.style.width="2px";
    }
    count++;

}

function h1()
{
    if(count%2!=0){
    y.style=`
    background: url("https://3.bp.blogspot.com/-i6GzrUTQXaA/W1tT_huT5FI/AAAAAAAAXpM/tZhkEYIfiB0AnEmLVSN5PfmQ1EgYuF5QwCLcBGAs/s1600/prabha.jpg");
    background-position: center;
    background-repeat: no-repeat;
    transition:3s;
    background-size: cover;

`;
adver1.style.width="8px"
    adver2.style.width="2px";}
else{
    x.style = `
    background: url("calc.png") ;
    background-position: center;
    background-repeat: no-repeat;
    transition:4s;
    background-size: cover;
    }
`;
adver1.style.width="2px"
    adver2.style.width="8px";
}
count++;
    }
    function startIntervals() {

        if (count % 2 === 0) {
          setInterval(h1, 5000);
        } else {
          setInterval(h, 5000);
          console.log("hii");
        }

        count++;
      }
      
      // Call startIntervals function, or use it within a loop or other logic as needed
      startIntervals();
