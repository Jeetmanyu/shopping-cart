var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

var products = [

    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath:'https://m.media-amazon.com/images/M/MV5BZmQ1MmYyMjktMjdiNS00YWRlLWFiMGMtODI5NWZmNWNhMjQwXkEyXkFqcGdeQXVyMjQ5OTgzMDE@._V1_UY268_CR3,0,182,268_AL__QL50.jpg',
        title:'World of warcraft video game',
        description: 'Also Awesome Game!!!!',
        price: 30
    }),
    new Product({
        imagePath:'https://i.ytimg.com/vi/VRVwQKnKy7M/maxresdefault.jpg',
        title:'call of duty video game',
        description: 'Also Awesome Game!!!!',
        price: 50
    }),
    new Product({
        imagePath:'https://i.ytimg.com/vi/TpMjio287VE/maxresdefault.jpg',
        title:'Minecraft video game',
        description: 'Also Awesome Game!!!!',
        price: 40
    }),
    new Product({
        imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/374320/header.jpg?t=1538593076',
        title:' Dark soul 3 video game',
        description: 'Also Awesome Game!!!!',
        price: 40
    }),
    ];
var done = 0;
for(var i=0; i < products.length; i++){
products[i].save(function(err,result) {
    done++;
    if (done === products.length){
        exit();
    }
});
}

function exit() {
    mongoose.disconnect();
}