

let count = 0;
function checkout() {
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            console.log("Checking Out...");
            count++;
            resolve();
        }, 1000)
    });
    return prom;
};

function paid() {
    const prom = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(count !== 1){
                console.log("Money paid");
                resolve();
            }else reject("Payment Failed");
        }, 3000)
    });
    return prom;
};

function invoice() {
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            console.log("Invoice generated");
            resolve();
        }, 2000)
    });
    return prom;
};

async function main() {
    try{
        await checkout();
        await paid();
        await invoice();
    }
    catch(err){
        console.log(err)
    }
}

main();
