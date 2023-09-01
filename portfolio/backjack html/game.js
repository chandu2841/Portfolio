var crd=[];
var itl =document.getElementById('italic');
var crDLk = document.getElementById('cards');
var rndmnumber;
var summ=0;
var suMDp = document.getElementById('sum-html');
var alertt = document.getElementById('alert');
var hd = document.getElementById('hd');
var snm=0;
function startgame()
{   viewcards();
    sum();

    if(crd[0]==null)
    {
        alertt.textContent="You need to draw a New card first!";
    }
    else 
    {
        alertt.textContent="";
    }
      if(summ<21 && crd[0]!=null)
    {
        itl.textContent="Do you want to Draw a New Card?";
        alertt.textContent="Draw a New Card";
        alertt.style.color="white";
    }
    else if(summ==21)
    {
        itl.textContent="Hurray! You got BlackJack!";
        hd.textContent="YOU WON!"
    }
    else if(summ>21)
    {
        itl.textContent="Oops! You are Eliminated from the Game!";
        hd.textContent="YOU LOST!"
    }
}
function random()
{
    rndmnumber =Math.floor( Math.random()*13)+1;
    
    if (rndmnumber==1)
    {   
        
        rndmnumber=11;
        crd.push(rndmnumber);
    }
    else if(rndmnumber==11)
    {
    
        rndmnumber=10;
        crd.push(rndmnumber);
    }
    else if(rndmnumber==12)
    {
        
        rndmnumber=10;
        crd.push(rndmnumber);
    
    }
    else if(rndmnumber==13)
    {
        
        rndmnumber=10;
        crd.push(rndmnumber);
    }
    else{
        crd.push(rndmnumber);
    }
}
function viewcards()
{  let temp;
    crDLk.textContent="Cards:";
    for(var i=0;i<crd.length;i++)
    {
        temp =crd[i]+" ";
        crDLk.textContent+=temp;
    }
}

function sum()
    {   var temp2;
        summ=0;
        for(var i=0;i<crd.length;i++)
        {
              temp2=crd[i];
              summ=temp2+summ;
            
        }
    
        suMDp.textContent="Sum:"+summ;
    }
    
    function newcard()
    {   summ=snm;
        if(summ>=21)
        {
            alertt.textContent="You Can't Draw the Card,Please Restart the game!";
            alertt.style.color="red";
        
        }
        else{
        random();
        viewcards();
        alertt.textContent="Press on Start Game";
        alertt.style.color="white";
        }
    }
    function restart()
{
    crd=[];
    summ=0;
    snm=0;
    viewcards();
    sum();
    alertt.textContent="";
    hd.textContent="";
    itl.textContent="Do you want to Draw a New Card?";
}
function newcardr()
{   glitch();
    if(summ==snm)
    {   
        newcard();
    }
    else{
        alertt.textContent="Press on Start Game";
    }
}
function glitch()
{
    for(j=0;j<crd.length;j++)
    {
        var temp3;
        snm=0;
        for(var j=0;j<crd.length;j++)
        {
              temp3=crd[j];
              snm=temp3+snm;
            
        }
    }

}