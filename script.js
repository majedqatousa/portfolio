const numbers = [2,5,6,7,11,15];
const target = 11;
const result = findIndices(numbers, target);

if (result) {
    console.log(`[${result[0]},${result[1]}]`);
} else {
    console.log(`No result foud for (${target})`);
}
function findIndices (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; 
            }
        }
    }
    return null; 
}
