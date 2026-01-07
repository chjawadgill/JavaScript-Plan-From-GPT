let car = {
    maker: 'Honda',
    model: 2018,
    colore: 'silver',
    start: function() {
        console.log('car started');
    } ,
    stop: function() {
        console.log('car stopped');
    },
    owner:{
        name: "Ali",
        city: "Karachi"
    }
};

//console.log(car.start());
console.log(car.owner.city);
