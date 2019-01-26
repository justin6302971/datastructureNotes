
function selectionSort(input,order){
    var inputArr=input.slice(0);//copy input array
    var result=[];
    var idx=inputArr.length-1;
    if(order===1){
      //max to min
        while(idx>=0){
            var min=Math.min(...inputArr);//get max element from input array
            var minElemIdx=inputArr.indexOf(min);
            result.push(min);//push that value to new array
            inputArr.splice(minElemIdx,1)//remove it from input array
            idx--
        }
    }else if(order ===-1){
    while(idx>=0){
        //min to max
            var max=Math.max(...inputArr);
            var maxElemIdx=inputArr.indexOf(max);
            result.push(max);
            inputArr.splice(maxElemIdx,1)
            idx--
        }
    }

    return result;
​
}
