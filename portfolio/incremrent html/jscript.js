var counTEl=document.getElementById('count-el');
var count = 0;
var sv;
let pre=document.getElementById('pre');
function inc()
{
    count++;
    counTEl.textContent=count;
}
function save()
{
    sv=count;

    pre.textContent+=sv + " - " ;
    count=0;
    counTEl.textContent=count;

}
function reset()
{
    count=0;
    counTEl.textContent=count;
}
function del()
{
    count=0;
    counTEl.textContent=count;
    pre.textContent="";
}