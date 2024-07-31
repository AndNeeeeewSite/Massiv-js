//     1.
console.log("")
num3 = [1,2,3]
num3[1] = 10
console.log('1. '+num3)
//     2. 
console.log("")
text3 = ['1','2','3']
text3[3] = '4'
console.log('2. '+ text3)
//         3.
console.log("")
num5 = [3,2,1]
totalnum = 0
for(const numcheck of num5){
    totalnum = totalnum + numcheck
} 
console.log('3. '+totalnum)
//          4.
console.log("")
num4 = [1,2,3,1.23,123]

for(const numcheck of num4){
    console.log('4. '+numcheck)
}  
//         5.
console.log("")
line5 = ['1','12','123','1234','12345','123456','1234567']

for(const linecheck of line5){
    if(linecheck.length > 5){
        console.log('5. '+linecheck)
    }
}  
//            6.
console.log("")
backnum = 0
num6 = [1,2,3,4,5,6,7,8,9,10,11]
for(const numcheck of num6){
    if (backnum < numcheck){
        backnum = numcheck
    }
}  
console.log('6. '+backnum)
//             7.
console.log("")
parnum = 0
num8 = [1,2,3,4,5,6,7,8,9,10]
for(const numcheck of num8){
    if (numcheck % 2 === 1){
        continue
    }
    console.log('7. '+numcheck)
}  

  
