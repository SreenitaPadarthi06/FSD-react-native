var x=600;
 var a=setInterval(function(){
    x=x-1
    // console.log(parseInt(x/600),":",(x%600));
    document.getElementsByClassName('minutes')[0].innerText=parseInt(x/60)
    document.getElementsByClassName('seconds')[0].innerText=parseInt(x%60)
},1000)

function stop(){
    
}