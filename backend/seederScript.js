require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data Import Was Successful!");

    process.exit();
  } catch (error) {
    console.error("Error With Data Import!");
    process.exit(1);
  }
};

importData();
