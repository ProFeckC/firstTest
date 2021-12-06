const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testfer');
const schema={
    name:String,
    age:Number,
    health:String
    hobby:String

}
const Cat = mongoose.model('Cat1', schema);

// const kitty = new Cat({ name: 'testZildjian2' });
// kitty.save().then(() => console.log('testmeow'));
// const kitty1= new Cat({name : "wu34",age:1,health:"good"});
// kitty1.save().then(() => console.log('buw'));
Cat.find({name:"wu34"},(err,data)=>{console.log(data)})