//1
let numbers1 = [1,2,3,4,5,6,7,8,9]

//a
let result1 = 0
for(let i=0; i < numbers1.length; i++){
    result1 += numbers1[i]
}
console.log(result1);

//b
let result2 = 1
for(let i=0; i < numbers1.length; i++){
    result2 =  result2 * numbers1[i]
}
console.log(result2);

//c
let result3 = 0
for(let i=0; i < numbers1.length; i++){
    result3 = result3 + numbers1[i]
    avj = result3 / numbers1.length
}
console.log(avj);

//d
let numbers2 = numbers1.slice(); //שמתי את זה במערך נוסף כדי שאני אוכל אחר כך להמשיך עם המערך הקודם אבל זה לא הכרחי
let firs = numbers2.shift()
numbers2.unshift( numbers2.pop())
numbers2.push(firs)
console.log(numbers2);

//e
execoriz = numbers1.slice();
console.log(execoriz);

//f
// let numbers3 = numbers1.slice();
// for(let i=0; i <= numbers3.length / 2; i++){
//     let a = numbers3[i] 
//     numbers3[i] =  numbers3[numbers3.length - i]
//     numbers3[numbers3.length - i] = a
// }
// console.log(numbers3);

//g
numbers4 = numbers1.slice();
let hige = 0
for(let i=0; i < numbers4.length; i++){
    
   if(numbers4[i] > hige){
    hige = numbers4[i]
   }
}
console.log(hige);

//h
numbers5 = numbers1.slice();
let zugi = []
for(let i=0; i < numbers5.length; i++){
    if(numbers5[i] % 2 == 0){
        zugi.push(numbers5[i])
    } 
}
console.log(zugi);

//2
strings1 = ["ari", "gotlib", "maor", "gabay"]

//a
for(let i=0; i < strings1.length; i++){
 str1 = str1 + strings1[i] + " "
}
console.log(str1);

//b
for(let i=0; i < strings1.length; i++){
    str2 = str12 + strings1[i] + ","
   }
console.log(str2);

//c
aivarim = 0
for(let i=0; i < strings1.length; i++){
 aivarim += strings1[i].length
}
console.log(aivarim);

