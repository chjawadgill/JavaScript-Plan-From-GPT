for ( x = 1; x <= 9; x++){
    if (x <  8){
            continue;
        }
    for ( y = 1; y <= 2 ; y++){
        //console.log( `${x} * ${y} = `, x*y)
        
    }
//console.log( `You X is: ${x}`)
}

//console.log ('Sum of Number')
sum = 0
for (x = 0; x <= 3; x++){
    sum = sum+x
}
//console.log(sum)

//console.log ('Star Prints')
// for ( i = 1; i < 6; i++){
//     sat = " "
//     for (j = 1; j < 5; j++){
//         sat = sat + '*'
//     }
// console.log(sat)

// }
for (let i = 1; i < 5; i++) {
  let stars = "";

  for (let j = 1; j < i; j++) {
    stars = stars + "*";
  }

 // console.log(stars);
}
console.log ('Number Prints like a YAML')
for (i=1; i<=3; i++){
    num ="";
    for(j=1; j<=i; j++){
        num = num + j
    }
    //console.log(num)
}

for (i=10; i>0; i--){
    pat = ''
    for (j=1; j<i; j++){
    pat = pat + "*"
   }
    console.log(pat)
}