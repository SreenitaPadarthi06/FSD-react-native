// let h=document.createElement('h3');
// h.innerText="Data";
// console.log(h)

// function fun(){
//     let h= document.createElement("h3");
//     let data=document.getElementsByTagName('input')[0].value;
//     h.innerText=data;
//     document.body.append(h);
//     let p=document.createElement("p");
//     let d=document.getElementsByTagName('input')[1].value;
//     p.innerText=d;
//     document.body.append(p);
// }

function create(){
    var table=document.createElement('table');
   var r=document.getElementsByTagName('input')[0].value;
   var c=document.getElementsByTagName('input')[1].value;
     
for(let i=0;i<r;i++)
{   let tr=document.createElement('tr');
    
    for(let j=0;j<c;j++)
    {
 let td= document.createElement('td');
 tr.appendChild(td);
    }

table.appendChild(tr);
}
console.log("Hi");
document.body.appendChild(table);
}
