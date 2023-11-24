const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: [1, 'Nuksan hojaega soch lo'],
    },
    isOnSale: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ['vegetable', 'fruit', 'dairy'],
    }
}); 

const Product = mongoose.model('Product', shopSchema);

module.exports = { Product };

//   title: {
//     type: String,
//     required: true,
//     }, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });

// blogSchema.methods.greet = function() { //don't use arrow function for instance method reason: 'this'
//     return console.log('hello from ', this.author);
// };

// const myblog = new Blog({
//     title: 'Palestine',
//     author: 'AMC',
//     body: 'Stop Genocide',
//     comments: [{ body: 'rokna hoga khud nhi rukega', date: new Date() }],
//     // date: new Date().now ,
//     hidden: false,
//     meta: {
//       votes: 10,
//       favs: 10,
//     }
//   })
// const product = new Blog({
//     title: 'Palestine',
//     author: 'Salman',
//     body: 'Stop Genocide',
//     comments: [{ body: 'rokna hoga khud nhi rukega', date: new Date() }],
//     // date: new Date().now ,
//     hidden: false,
//     meta: {
//       votes: 10,
//       favs: 10,
//     }
//   })
  
  
// myblog.save()