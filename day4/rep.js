add = (x,y)=>{
    add = x+y;
    return add
}

sub = (x,y)=>
    {
    if (y==0) {
        return "No can not be devided by 0"}
    if (y > x){
        return "Devider must be less then number"}
    sub = x/y
    return sub
    }

function atm(x){
   belance  = 30000;
   cashdraw = x;
   if (cashdraw <= 4999 || belance < cashdraw) {
    console.log('Please enter the correct amount not less then 5000 and not greater then Belance')}
    cashdraw = belance-cashdraw;
    return belance
}
atm(5000)