let belance = 5000;
var  withDraw = 6000;

if (withDraw < 500){
    console.log('Please enter correct amount Minimam withdraw is 500')
}
else if (withDraw > belance){
    console.log(' You are running low Belance:', +belance )
}
else {
    amodraw = belance - withDraw;
    console.log(' You have sucessfully with draw the ammount:', +withDraw)
    console.log(' You remaninf belance is:', +amodraw)
}