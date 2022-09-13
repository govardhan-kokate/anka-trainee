var arraySort = [2,3,4,5,6,8,9];

function getSort(arraySort,value){
    var firstIndex = 0,
        lastIndex = arraySort.length-1,
        midIndex = (firstIndex+lastIndex)/2;

        while(arraySort[midIndex] != value && firstIndex < lastIndex){
            if(value > midIndex){
                firstIndex = midIndex + 1;
            } else if(value < midIndex){
                lastIndex = midIndex - 1;
            }
            midIndex = (lastIndex + firstIndex)/2;
        }
        return (arraySort[midIndex] != value) ? "is not present" :midIndex;
}
console.log(getSort(arraySort,5));