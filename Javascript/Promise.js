// const res= new Promise(function(resolved,rejected){
//     var x=1;
//     if(x>=10){
//         resolved();
//     }
//     else{
//         rejected("Lessthan 10");
//     }
// })
// console.log(res);

function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },1000);
    })
}
   
function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },1000);
    })
}
function fun3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },1000);
    })
}

fun1().then(function(){
    console.log("Fun-1 completed");
    fun2().then(function(){
        console.log("Fun-2 completed");
        fun3().then(function(){
            console.log("Fun-3 completed");
        })
    })
})

