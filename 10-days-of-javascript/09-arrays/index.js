/*
    Task
    Complete the getSecondLargest function in the editor below.
    It has one parameter: an array, nums, of n numbers. 
    The function must find and return the second largest number in nums.
*/

const nums = [2,3,6,6,5];

function getSecondLargest(nums) {
    const sortedFilteredNums = nums
                .sort((x, y) => y - x)
                .filter((value, index) => nums.indexOf(value) === index);

    return sortedFilteredNums[1];    
}

console.log(getSecondLargest(nums));

