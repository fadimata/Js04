function checkNumber(x){
    x <= 10;
    if ( x < 5 ){
        return 'Faible'
    }
    else if ( x === 5||x===6)
    {
return 'Moyen'
    }
}
console.log( checkNumber(3));
console.log(checkNumber(5));
console.log( checkNumber(6));