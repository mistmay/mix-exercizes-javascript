function initials(string) {
    const arrayFromString = string.split(' ');
    let result = '';
    arrayFromString.forEach(word => {
        result += word.charAt(0).toUpperCase() + '.';
    });
    return result;
}

function collatz(number) {
    const result = [];
    if (number < 1) {
        return 'Error';
    } else if (number === 1) {
        return [1];
    } else {
        while (number !== 1) {
            result.push(number);
            if (number % 2 === 0) {
                number = number / 2;
            } else {
                number = (number * 3) + 1;
            }
        }
        result.push(1);
        return result;
    }
}

function sumNumbersInString(string) {
    let sum = 0;
    string.split('').forEach(character => {
        if (!isNaN(Number(character))) {
            sum += Number(character);
        }
    });
    return sum;
}

function filterBiggerInArray(array, number) {
    return array.filter(item => item > number);
}

function arrayToObject(array) {
    const obj = {};
    array.forEach(item => {
        obj[item[0]] = item[1];
    });
    return obj;
}

function frequencyObject(string) {
    const obj = {};
    const arrayFromString = string.split(' ');
    for (let i = 0; i < arrayFromString.length; i++) {
        let counter = 0;
        for (let k = 0; k < arrayFromString.length; k++) {
            if (arrayFromString[i] === arrayFromString[k]) {
                counter++;
            }
        }
        obj[arrayFromString[i]] = counter;
    }
    return obj;
}

function capitalizeFirstCharacters(string) {
    let arrayCharacters = [];
    const arrayWords = [];
    string.split(' ').forEach(word => {
        arrayCharacters.push(word.split(''));
    });
    for (let i = 0; i < arrayCharacters.length; i++) {
        arrayCharacters[i][0] = arrayCharacters[i][0].toUpperCase();
        arrayWords.push(arrayCharacters[i].join(''));
    }
    return arrayWords.join(' ');
}

function numberVowels(string) {
    let counter = 0;
    string.toLowerCase().split('').forEach(character => {
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
            counter++;
        }
    });
    return counter;
}

function slugString(string) {
    return string.toLowerCase().split(' ').join('-');
}

function longestWord(string) {
    let counter = 0;
    let result = '';
    string.split(' ').forEach(word => {
        if (word.length > counter) {
            counter = word.length;
            result = word;
        }
    });
    return result;
}

function sumOddEven(array) {
    if (array.reduce((sum, current) => sum + current, 0) % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

function isX_SumEqualY_Sum(string) {
    let counterX = 0;
    let counterY = 0;
    string.split('').forEach(item => {
        item === 'x' ? counterX++ : counterY++;
    });
    if (counterX === counterY) {
        return true;
    } else {
        return false;
    }
}

function changeVowels(string, character) {
    let arrayFromString = string.split('');
    for (let i = 0; i < arrayFromString.length; i++) {
        if (arrayFromString[i] === 'a' || arrayFromString[i] === 'e' || arrayFromString[i] === 'i' || arrayFromString[i] === 'o' || arrayFromString[i] === 'u') {
            arrayFromString[i] = character;
        }
    }
    return arrayFromString.join('');
}

function filterNumbers(array) {
    return array.filter(item => typeof (item) === 'number');
}

function isPalindrome(string) {
    if (string.split('').reverse().join('') === string) {
        return [string.split('').reverse().join(''), true];
    } else {
        return [string.split('').reverse().join(''), false];
    }
}

function sumOrAverage(array) {
    const sum = array.reduce((sum, current) => sum + current, 0);
    if (sum % 2 === 0) {
        return sum
    } else {
        return sum / array.length;
    }
}

function sumFrom1(number) {
    if (number <= 0) {
        return 'Error';
    } else if (number === 1) {
        return 1;
    } else {
        return number + sumFrom1(number - 1);
    }
}

function filterWordsOfLength(array, target) {
    if (typeof (target) === 'undefined') {
        target = 5;
    }
    return array.sort().filter(item => item.length === target);
}

function passwordValidator(string) {
    let checkRepetions = false;
    let checkNumber = false;
    const arrayFromString = string.split('');
    for (let i = 0; i < arrayFromString.length; i++) {
        let counter = 0;
        if (!isNaN(Number(arrayFromString[i]))) {
            checkNumber = true;
        }
        for (let k = 0; k < arrayFromString.length; k++) {
            if (arrayFromString[i] === arrayFromString[k]) {
                counter++;
            }
        }
        if (counter !== 1) {
            checkRepetions = true;
        }
    }
    if (checkNumber && !checkRepetions && string.length >= 6) {
        return true;
    } else {
        return false;
    }
}

function numberFormedByPowers(number) {
    return Number(String(number).split('').reduce((result, current) => result + Math.pow(Number(current), 2), ''));
}

function arrayMerge(arr1, arr2) {
    const concArray = arr1.concat(arr2);
    const obj = {};
    const result = [];
    concArray.forEach(item => {
        obj[String(item)] = '';
    });
    Object.keys(obj).forEach(item => {
        result.push(Number(item));
    })
    return result.sort((a, b) => b - a);
}

function stringNumberOrder(string) {
    const arrayFromString = string.split(' ');
    let result = [];
    for (let i = 0; i < arrayFromString.length; i++) {
        result.push('');
    }
    arrayFromString.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            if (!isNaN(Number(word.charAt(i)))) {
                result[Number(word.charAt(i)) - 1] = word;
            }
        }
    });
    return result;
}

function isIsogram(string) {
    let check = false;
    const arrayFromString = string.toLowerCase().split('');
    for (let i = 0; i < arrayFromString.length; i++) {
        let counter = 0;
        for (let k = 0; k < arrayFromString.length; k++) {
            if (arrayFromString[i] === arrayFromString[k]) {
                counter++;
            }
        }
        if (counter !== 1) {
            check = true;
        }
    }
    if (!check) {
        return true;
    } else {
        return false;
    }
}

function arrayDifference(arr1, arr2) {
    return arr1.filter(item => {
        let check = false;
        for (let i = 0; i < arr2.length; i++) {
            if (item === arr2[i]) {
                check = true;
            }
        }
        if (!check) {
            return item;
        }
    });
}

function daysTillXmas() {
    const today = new Date();
    let xmas;
    if (today.getMonth() === 11 && today.getDate() >= 25) {
        xmas = new Date(today.getFullYear() + 1, 11, 25);
    } else {
        xmas = new Date(today.getFullYear(), 11, 25);
    }
    return Math.ceil((xmas.getTime() - today.getTime()) / 86400000);
}

function arrayToTelephoneNumber(array) {
    const firstPart = array.slice(0, 3);
    const secondPart = array.slice(3, 6);
    const thirdPart = array.slice(6);
    return `(${firstPart.join('')}) ${secondPart.join('')}-${thirdPart.join('')}`;
}

function findIntruder(array) {
    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let k = 0; k < array.length; k++) {
            if (array[i] !== array[k]) {
                counter++;
            }
        }
        if (counter > 3) {
            return array[i];
        }
    }
}

function friday17InYear(year) {
    const fridayContainer = [];
    for (let i = 0; i <= 11; i++) {
        const date = new Date(year, i, 17);
        if (date.getDay() === 5) {
            fridayContainer.push(date);
        }
    }
    return fridayContainer;
}

function mostUnluckyYear(year) {
    const thisYear = new Date().getFullYear();
    let max = 0;
    let result = 0;
    for (let i = year; i <= thisYear; i++) {
        let fridayYearContainer = friday17InYear(i);
        if (fridayYearContainer.length > max) {
            max = fridayYearContainer.length;
            result = i;
        }
    }
    return result;
}

function failOrPass(obj) {
    const result = {};
    let averageGrade = Object.entries(obj).reduce((sum, current) => sum + current[1], 0) / Object.entries(obj).length;
    averageGrade = Math.floor(averageGrade + (averageGrade / 10));
    for (property in obj) {
        if (obj[property] >= averageGrade) {
            result[property] = `Pass with ${obj[property]}`;
        } else {
            result[property] = `Fail with ${obj[property]}`;
        }
    }
    console.log(`Average Grade: ${averageGrade}`);
    return result;
}
console.log(initials("Tizio Caio"));
console.log(collatz(10));
console.log(sumNumbersInString('Sono 1 stringa di 6 parole'));
console.log(filterBiggerInArray([1, 2, 3, 4], 3));
console.log(arrayToObject([
    ["nome", "mario"],
    ["cognome", "rossi"],
    ["anni", 32]
]));
console.log(frequencyObject("Quella cosa affianco alla cosa sulla cosa"));
console.log(capitalizeFirstCharacters("Quella cosa affianco alla cosa sulla cosa"));
console.log(numberVowels('Tizio Caio'));
console.log(slugString('Sono una stringa'));
console.log(longestWord('Sono una stringa'));
console.log(sumOddEven([1, 2, 3, 4]));
console.log(isX_SumEqualY_Sum("xxyxxyyy"));
console.log(changeVowels("Ciao a tutti", 'o'));
console.log(filterNumbers([1, 2, "a", 4]));
console.log(isPalindrome('prova'));
console.log(isPalindrome('osso'));
console.log(sumOrAverage([1, 2, 3, 4]));
console.log(sumFrom1(4));
console.log(filterWordsOfLength(["Gigi", "Tizio", "Caio", "Piero"], 4));
console.log(filterWordsOfLength(["Gigi", "Tizio", "Caio", "Piero"]));
console.log(passwordValidator('password'));
console.log(passwordValidator('12ciao3456'));
console.log(numberFormedByPowers(372));
console.log(arrayMerge([2, 1], [1, 2, 3]));
console.log(stringNumberOrder("is2 Thi1s T4est 3a"));
console.log(isIsogram("ciao"));
console.log(isIsogram("barca"));
console.log(arrayDifference([1, 2, 3], [2, 1]));
console.log(daysTillXmas());
console.log(arrayToTelephoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(findIntruder([3, 3, 2, 3, 3, 3, 3, 3]));
console.log(friday17InYear(2020));
console.log(mostUnluckyYear(1990));
console.log(failOrPass({
    "Tizio": 5,
    "Caio": 3,
    "Sempronio": 7
}));