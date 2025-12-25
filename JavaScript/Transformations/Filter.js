const students = [
  { name: "Rohit", scores: [85, 92, 78] },
  { name: "Aman", scores: [40, 55, 60] },
  { name: "Sagar", scores: [90, 88, 95] },
  { name: "Neha", scores: [30, 45, 50] }
];


const calAvg = (scores) => {
    let ans = 0;
    for(let i = 0;i<scores.length;i++){
        ans += scores[i];
    }
    const finalAns = ans / scores.length;

    return finalAns;
}


const aboveAVG = () => {
    return students.filter(x => calAvg(x.scores ) > 80)
}

console.log(aboveAVG())
