
// PRomise gives a new Object 

const promiseOne = new Promise(( resolve,reject )=> {
    //Do Async Tasks,
    // DO calls, 
    setTimeout(()=>{
        console.log("hi");
        resolve();  // can also pass data like object or anything (functions..);    
    },2000)
} );



promiseOne.then(()=>{
    console.log("Promise Consumed");
})