import client from "./client.js";


async function init() {
    const result = await client.get("user:2");
    console.log("Result -> ",result);
}

init();
