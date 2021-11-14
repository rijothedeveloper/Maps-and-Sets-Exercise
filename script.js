// What does the following code return?

new Set([1,1,2,2,3,4]) //A set with elements 1,2,3,4


//What does the following code return?

//[...new Set("referee")].join("") A new string ref


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// looks like
// [[Entries]]
// 0: {Array(3) => true}
// 1: {Array(3) => false}
// size: 2
// [[Prototype]]: Map


const hasDuplicate = function(arr){
 const m = new Set(arr);
 return m.size === arr.length ? false : true;
}

function vowelCount(str) {
    const vowelMap = new Map();
    const vowelSet = new Set(['a','i','e','o','u']);
    for(ch of str) {
        if(vowelSet.has(ch)) {
            if (vowelMap.has(ch)) {
                vowelMap.set(ch, vowelMap.get(ch) + 1 );
            } else {
                vowelMap.set(ch, 1);
            }
        }
        
    }
    return vowelMap;
}