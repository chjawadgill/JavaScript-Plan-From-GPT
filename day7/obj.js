let car = {
    maker: 'Honda',
    model: 2018,
    colore: 'silver',
    start: function() {
        console.log('car started');
        return;
    } ,
    stop: function() {
        console.log('car stopped');
        return;
    },
    owner:{
        name: "Ali",
        city: "Karachi"
    }
};

console.log(car.start());
//console.log(car.owner.city);
