

const debounce = (func,wait)=>{
    let debounceTimer;

    return function(){
        clearTimeout(debounceTimer); // Clear the previous timer
        debounceTimer = setTimeout(() => {
            func()
        }, wait);
    }
}



