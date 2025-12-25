
const nums = [1, 2, 3, 4, 5];


const ans = () => {

    return nums.reduce((acc, current) => {
        return acc + current
    }, 0);
}

// console.log(ans());

const students = [
    { name: "Rohit", scores: [85, 92, 78] },
    { name: "Aman", scores: [40, 55, 60] },
    { name: "Sagar", scores: [90, 88, 95] },
    { name: "Neha", scores: [30, 45, 50] }
];


const average = (scores) => {

    const sum = scores.reduce((acc, current) => {
        return acc + current;
    }, 0);

    return sum / scores.length;
}

const result = () => {
    return students.reduce((acc, current) => {
        acc[current.name] = Math.floor(average(current.scores));
        return acc;
    }, {});
}

// console.log(result());

const grades = () => {
    return students.reduce((acc, current) => {
        let avg = average(current.scores);
        if(avg > 60){s
            acc.pass.push(current.name);
        } else{
            acc.fail.push(current.name);
        };

        return acc;

    },{
        pass: [],
        fail: []
    })
}

console.log(grades());


