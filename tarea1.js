
//1
function matrixElementsSum() {
var matrix = [[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]];
    var sum = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (matrix[i][j] != 0) {
                if (i == 0)
                    sum += matrix[i][j];
                else {
                    if (matrix[i - 1][j] != 0)
                        sum += matrix[i][j]
                }
            }
        }
    }
    return sum;
}
//2
   
 
function siglo(año)
{
   var año=año;
   if(año<=0)
   {
   	console.log("0 no es un año para calcular siglos");
   }
   else if(año<=100){
   	console.log("Siglo 1");
   }
   else if(año%100==0){
   	console.log(a/100 + " siglos");
   }
   else{
   	console.log( ((año/100)+1)+" siglos");
   }

}

console.log(siglo(2000));

//3
var con=0;
function tres(cad){
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else{
        res+=c;
      }
      con++;
    }
    return res;
}
const add=(cad)=>{
    //console.log("cadena recursiva "+cad);
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else if(c==')'){
        res=volteo(res);
        return res;
      }else{
        res+=c;
      }
      con++;
    }
    return res;

}
function volteo(cad){
  let sum='';
  for(let i=cad.length-1;i>=0;i--){
    let c=cad.charAt(i);
    sum+=c;
  }
  return sum;
}
//5

function exerciseElaboration(p, n) {
    n += 1;
    var sum = p;
    while (n-- != 0) {
        sum *= 10;
    }
    sum += p;
    sum = Math.pow(sum, 2);
    p = 0;
    while (sum > 0) {
        p += sum % 10;
        sum = parseInt(sum /= 10);
    }
    return p;
}

