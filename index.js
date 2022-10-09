//1
const foods=["pizza","burger","fingerChips","donuts","springRoll"];
const food=foods.slice(1,4);
console.log("#1 Array Slice")
console.log(food)

//2
foods.splice(2,0,"noodles","icecream");
console.log("#2 Array Splice");
console.log(foods)

//3
const numberArray=[12,324,213,4,2,3,45,4234];
function findPrime(item){
    for(let x=2;item>x;x++){
        if(item%x==0){
            return false;
        }
    }
    return item>1;
}
console.log("#3 Array Filter")
console.log(numberArray.filter(findPrime));

//4
let arr2 = [12,324,213,4,2,3,45,4234]

function isNotEven(data){
    let count = 0
    for(let i=2;i<data;i++){
        if(data%i==0){
            return true
        }
    }
    return false
}

let notprime = arr2.filter(isNotEven)
console.log("#4 Array Reject")
console.log(notprime)

//5
const myArray=[11, 34, 20, 5, 53, 16].map(value=>Math.pow(value,2));
console.log("#5 Map")
console.log(myArray)

//6
const arr=[2,3,5,10]
const pro=arr.reduce((a,b)=>a*b,1)
console.log("#6 Reduce")
console.log(pro)
