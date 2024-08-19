//programs using anonymous function
//print odd numbers in a array


function odd(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);

        }

    }
    return temp;
}
console.log(odd([2, 5, 1, 8, 9]));



//IIFE:

var temp = [];
(function (arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);

        }

    }
    console.log(temp);
})

    ([2, 5, 1, 8, 9]);
//Arrow function:
var odd = (arr) => {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);

        }

    }
    return temp;
}
console.log(odd([2, 5, 1, 8, 9]));

//2.convert all the strings to title caps in a string array
function titleCaps(str) {
    str = str.split(" ");

    for (i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    str = str.join(" ");
    return str;
}
console.log(titleCaps("this is sujitha"));
//IIFE:
var str = [];
(function (str) {
    str = str.split(" ");

    for (i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    str = str.join(" ");
    console.log(str);
})
    (("this is sujitha"));
//arrow function:

var titleCaps = (str) => {
    str = str.split(" ");

    for (i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    str = str.join(" ");
    return str;
}
console.log(titleCaps("this is sujitha"));

//3.sum of all numbers in a array:

function sumofArr(str) {
    var sum = 0;
    for (i = 0; i < str.length; i++) {
        sum = sum + (+str[i]);
    }
    return sum;
}
console.log(sumofArr(['23', '12', '8', '34']));
//IIFE:
var sum = 0;
(function (str) {

    for (i = 0; i < str.length; i++) {
        sum = sum + (+str[i]);
    }
    console.log(sum);
})
    (['23', '12', '8', '34']);
//arrow function:
var sum = 0;
var sumofArr = (str) => {

    for (i = 0; i < str.length; i++) {
        sum = sum + (+str[i]);
    }
    return sum;
}
console.log(sumofArr(['23', '12', '8', '34']));

//4. return all the prime numbers in a array:

var till = 50;
var result = [];
var checkPrime = function () {
    for (var i = 2; i <= till; i++) {
        var prime = true;

        for (var j = 2; j < i; j++) {
            if (i % j === 0 && j !== i) {
                prime = false;
            }
        }
        if (prime == true) {
            result.push(i);

        }

    }
    console.log(result);
};
checkPrime();
//IIFE:
var till = 50;
var result = [];
(function () {
    for (var i = 2; i <= till; i++) {
        var prime = true;

        for (var j = 2; j < i; j++) {
            if (i % j === 0 && j !== i) {
                prime = false;
            }
        }
        if (prime == true) {
            result.push(i);

        }

    }
    console.log(result);
})
    ();
//Arrow function:

var untill = 50;
var result = [];
var checkPrime = () => {
    for (var i = 2; i <= untill; i++) {
        var prime = true;

        for (var j = 2; j < i; j++) {
            if (i % j === 0 && j !== i) {
                prime = false;
            }
        }
        if (prime == true) {
            result.push(i);

        }

    }
    console.log(result);
};
checkPrime();

// return all the palindrome in an array
var res = [];
function isPalindrome(arr) {
    for (var i = 0; i < arr.length; i++) {
        var data = arr[i].split("").reverse().join("");
        if (data === arr[i])
            res.push(arr[i]);
    } return (res);
}

console.log(isPalindrome(["amma", "mom", "suji"]));

//IIFE:
var res = [];
(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var data = arr[i].split("").reverse().join("");
        if (data === arr[i])
            res.push(arr[i]);

    } console.log(res);
}
)
    (["amma", "mom", "suji"]);

//Arrow:
var res = [];
var isPalindrome = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        var data = arr[i].split("").reverse().join("");
        if (data === arr[i])
            res.push(arr[i]);
    } return (res);
}

console.log(isPalindrome(["amma", "mom", "suji"]));


//Print duplicates from array
//annonymous function


function removeDuplicates(arr) {
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (tempArr.indexOf(arr[i]) === -1) {
            tempArr.push(arr[i]);
        }
    }
    return (tempArr);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 1, 5, 6, 7, 7, 8]));

//IIFE:
(function (arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (tempArr.indexOf(arr[i]) === -1) {
            tempArr.push(arr[i]);
        }
    }
    console.log(tempArr);
})([1, 2, 2, 3, 4, 1, 5, 6, 7, 7, 8]);


//Rotate an array by k items
function rotateArray(arr, k) {
    if (arr.length === k || k === 0) {
        return arr;
    }
    k = k % arr.length;
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 3));

//IIFE:

(function (arr, k) {
    if (arr.length === k || k === 0) {
        return arr;
    }
    k = k % arr.length;
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
})
    ([1, 2, 3, 4, 5], 2);

//Return median of two sorted arrays of the same size

let arr1 = [12, 34, 36, 41, 56];
let arr2 = [11, 18, 21, 32, 45];

function getMedian(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3.sort((a, b) => a - b);
    let n = arr3.length;
    let median1 = Math.floor(n / 2);
    let median2 = median1 - 1;
    return (arr3[median1] + arr3[median2]) / 2;
}
console.log(getMedian(arr1, arr2));

//IIFE:


(function (arr1, arr2) {
    arr1 = [12, 34, 36, 41, 56];
    arr2 = [11, 18, 21, 32, 45];
    let arr3 = arr1.concat(arr2);
    arr3.sort((a, b) => a - b);
    let n = arr3.length;
    let median1 = Math.floor(n / 2);
    let median2 = median1 - 1;
    console.log((arr3[median1] + arr3[median2]) / 2);
})
    ();