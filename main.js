/////////////////////EX1////////////////////
// //1//////
function printing () {
    for (let i = 1; i <= 10; i++) {
    console.log(i);
    }
}
printing()

//2//////
function printingEven () {
for (let i = 2; i <= 10; i+=2) {
    console.log(i);

}
}
printingEven()

//3//////
function including (n) {
    for (let i=2; i<=n; i+=2) {
        console.log(i);  
    }
}
including(10)

//4//////
function four () {
    for (let i=1 ; i<=20 ; i++) {
        if (i === 13) {
            continue
        }
        else {
            console.log(i);
        }
    }
}
four()

// //5//////
function printingA () {
    for (let i = 10; i >= 1; i--) {
    console.log(i);
    }
}
printingA()

//6
function six () {
    for (let i = 1; i <= 10; i+=2) {
        console.log(i);
        if (i===7) {
            break;
        }
    }
}
six()

//7//////
function seven (Array) {
    for (i=0 ; i< Array.length; i++) {
      console.log(Array[i]);  
    }
}

let Array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]
seven(Array)

//8//////
function eight (Array) {
    for (i=0; i< Array.length; i++) {
        if (Array[i]%2===0) {
            console.log(Array[i]);  
        }
    }
}
eight([1,2,3,4,5])

//9//////
function nine (Array) {
    let sum = 0
    for (i=0; i < Array.length; i++) {
        // console.log(sum += Array[i]);
        sum += Array[i]
    }
    console.log(sum); 
}


nine ([1,2,3,4])

//10//////
function ten(word) {
    let countLetters = 0
    for (i=0; i < word.length; i++) {
        countLetters +=1
    }
    console.log(countLetters);
}
ten ('loveandlove')

////////11//////
function eleven (Array) {
    let even = []
    let odd = []
    for  (i=0; i < Array.length; i++) {
        if (Array[i]%2===0) {
            even.push(Array[i])
        }
        if (Array[i]%2 !== 0) {
            odd.push(Array[i]) 
        }
    }
    console.log("even : ", even);
    console.log("odd: " , odd);
}
eleven([2, 3, 13, 18, -5, 38, -10, 11, 0, 104])

////////12//////
function twelef(word) {
    if (word.includes('y')) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}
twelef('yellow')

//////13//////
function threeteen(Array) {
    console.log(Math.max(...Array));
}
threeteen([1,2,3,4,55,8])

///////////////////////EX2////////////////////////
let LaunchCode = 0
let startingFuelLevel = 0
let numOfAstronauts = 0
////1//////
let count = 1
while (count < 11) {
    console.log(count);
    count +=1;
}

//2//////
let countOne = 2
while (countOne < 11) {
    if (countOne%2===0) {
        console.log(countOne);
    }
countOne +=1;
}

// //3//////
let countTwo = 1
while (countTwo < 11) {
    if (countTwo%2!==0) {
        console.log(countTwo);
    }
countTwo +=1;
}

//4//////
let countThere = 10
while (countThere > 0) {
    console.log(countThere);
    countThere -=1;
}

//5//////
function putAnum (x) {
    let count = 0
    while (count <= x) {
        console.log(count);
        count += 1
    }
}
putAnum(10)

// //6//////
function sum(n) {
    let count = 0
    let sum = 0
    while (count <= n) {
        sum += count
        // console.log("count: ", count);
        // console.log("sum: " , sum);
        count += 1
    }
console.log(sum);
return sum

}
sum(4)

//7//////
function sumOne(n) {
    let count = 1
    let sumOne = 1
    while (count <= n) {
        sumOne *= count
        // console.log("count: ", count);
        // console.log("sum: " , sum);
        count += 1
    }
console.log(sumOne);
return sumOne
}
sumOne(3)

////8//////
// function a (){ 
//     let a = prompt("what is the fule?");

//     while(a<5000 || a>30000) {
//         a = prompt("please input again");
//     }
// }
// a()

// /////////////////////EX3////////////////////////
//1
//one loop
function pattern() {
    let a = ""
    for (let i = 0; i < 6; i++) {
        a += "*"
        console.log(a);
            }

}
pattern()

//two loops
function patternTwo() {
    let a = ""
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j<1; j++) {
            a += "*"
        }
        console.log(a);
        }

}
patternTwo()

//2//////
function multiplation() {
    let z = []
    for (let i = 1; i < 2; i++) {
        for (let j = 1; j<11; j++) {
            // z.push = z*j
            console.log(`i = ${i}, j = ${j}, their multiplation`, i*j);
        }
    }

}
multiplation()