let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

 const currentSums = (arr)=>{
    let result = [];
    const reducer=(acc,cur)=> {result.push(`${acc}`); return `${acc} + ${cur}`};
     arr.reduce(reducer);
    return result;
}


console.log(currentSums(numbers));