var mongoose = require("mongoose");
var db = require("../models/transaction");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

var transactionSeed = [
    {
        name: "Vudu.com",
        value: 21,
        date: {
          type: Date,
          default: Date.now
        },
        name: "Los Betos",
        value: 32,
        date: {
          type: Date,
          default: Date.now
        },
        name: "U of A Bootcamp",
        value: 12500,
        date: {
          type: Date,
          default: Date.now
        }
      }
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  