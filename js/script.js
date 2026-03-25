function sumEvenNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum = sum + arr[i];
      }
    }
  
    return sum;
  }
  
  function calculateSum() {
    let numbers = [1, 2, 3, 4, 5, 6];
    let result = sumEvenNumbers(numbers);
  
    document.getElementById("result").innerText = "Sum is: " + result;
  
    console.log("Sum is: " + result);
  }
