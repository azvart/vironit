let str = "Каждый охотник желает знать, где сидит фазан."; 

 const firstIndexString=(string)=>{
     const firstSymbol = (value,index,arr) =>{
        if(index == 0){
          return true;
        }else{
          return arr[index-1] === ' ';
        }
     }

     return string.split('').filter(firstSymbol);
};


console.log(firstIndexString(str));