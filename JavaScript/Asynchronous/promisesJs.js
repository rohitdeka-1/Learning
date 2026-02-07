
function checkout() {
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            console.log("Checking Out...");
            resolve();
        }, 1000)
    });
    return prom;
};

function paid() {
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            console.log("Money paid");
            resolve();
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

function main() {
    checkout().then(paid).then(invoice);
}

main();
//This is called callbackHell