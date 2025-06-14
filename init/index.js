const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68359515a3bd24dc8dd9c19f",
  }));
  await Listing.insertMany(initData.data);
  console.log("data initialized");
};

initDB();
