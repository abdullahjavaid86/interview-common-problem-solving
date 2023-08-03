const findSecondLargestNumber = (array) => {
    let largest = array[0];
    let secondLargest = -Infinity;

    array.filter(item => item !== largest).forEach(item => {
        if (item > largest) {
            secondLargest = largest;
            largest = item;
        } else if (item !== largest && item > secondLargest) {
            secondLargest = item
        }
    })

    console.log(secondLargest === -Infinity ? "Second Largest does not exists" : secondLargest)
    return secondLargest === -Infinity ? "Second Largest does not exists" : secondLargest
}


findSecondLargestNumber([12, 35, 1, 10, 34, 1])
findSecondLargestNumber([10, 10, 10])
findSecondLargestNumber([10, 5, 10])