let array = [ 11, 22, 35, 48, 58,66,77,88 ];

  const changeArray =(arr) =>{
    
   if(arr.length % 2 == 0){
    
   const left = arr.splice(0, arr.length /2);
   return [...arr, ...left];
     
   }else{
     const right = arr.reverse().splice(0,arr.length / 2).reverse();
     return [...right, ...arr];
   }
    

};


console.log(changeArray(array));