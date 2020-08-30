/*
    Task
    Complete the function in the editor. 
    It has one parameter: an array, nums. 
    It must iterate through the array performing one of the following actions on each element:
    If the element is even, multiply the element by 2.
    If the element is odd, multiply the element by 3.
    The function must then return the modified array.
*/

const nums = [1,2,3,4,5];

const modifyArray = (nums) => {
    const modifiedArray = [];
    nums.forEach(number => 
        (number % 2 == 0) ? 
            modifiedArray.push(number * 2) : 
            modifiedArray.push(number * 3)
            );

    return modifiedArray
}

console.log(modifyArray(nums));
