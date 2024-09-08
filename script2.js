//1
function direction(num, bool){
    let a = "-"
    b = a.repeat(num)
    if(bool){
        b += ">"
    }
    else b = "<" + b
    console.log(b);
}
direction(20,false)

//2
list = [] 
function findZiro (num){
   if(num != 0){
    list.push(num)
   }
   else{
    let maxNum = 0
    let add = 0
    list.forEach(element => {
        if(element > maxNum){
            maxNum =element
        }
        add += element

    });
    let length = list.length
    let avg = add / length
    console.log(maxNum);
    console.log(add);
    console.log(length);
    console.log(avg);
    console.log();
    if(length < 4){
        console.log(list[length - 1]);
    }
    else{console.log(list[3]);
    }
   }
}
findZiro(5)
findZiro(6)
findZiro(9)
findZiro(22)
findZiro(4)
findZiro(1)
findZiro(9)
findZiro(0)

//3
function pyrimade(num){
    for(i = 1; i <= num; i++){
      console.log("*".repeat(i));     
    }
}

pyrimade(5)

//4
function pyrimadeRevers(num){
    for(i = num; i > 0 ; i--){
        console.log("*".repeat(i));     
      }
}
pyrimadeRevers(4)

//5
function multyTable(num){
    for(ix = 1; ix <= num; ix++){
        let row = "";
        for(iz = 1; iz <= num; iz++){
            row += (iz * ix) + "\t";
        }
        console.log(row);
      }
}

multyTable(10)

//6
function reversNumber(num){
   let strNum = num.toString();
   let row = "";
    for(i = strNum.length; i > 0 ; i-- ){
        row += (i) + "\t";
    }
    console.log(row);
}

reversNumber(123456789)


function string7(string){
    if(string.length == 0 ){
        return "";
    }
    else{
       string.forEach(element =>{
        if(element != " "){
           return string// צריך לסיים
        }
        else{
          return " "
        }
       })
    }
}

string7("")