function checkout(callback){
    setTimeout(()=>{
        console.log("Checking Out...");
        callback();
    },1000)
};

function paid(callback){
    setTimeout(()=>{
        console.log("Money paid");
        callback();
    },3000)
};

function invoice(callback){
    setTimeout(()=>{
        console.log("Invoice generated");
        callback();
    },2000)
};

function main(){
    checkout(()=>{
        paid(()=>{
            invoice(()=>{
                console.log("Completed")
            })
        })
    })
}

main();
//This is called callbackHell