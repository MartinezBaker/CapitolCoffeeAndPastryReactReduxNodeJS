const products = require("../data/products");
const Product = require("../models/product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const postProduct = async (req, res, next) => {
  try {
    const product = await Product.create({});
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const putAllProducts = async (req, res) => {
  res.status(403);
  res.end("PUT operation not supported on /products!");
};

const deleteAllProducts = async (req, res, next) => {
  try {
    const response = await Product.deleteMany({});
    res.status(200);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const postProductById = async (req, res) => {
  res.status(403);
  res.end(`POST operation not supported on /products/${req.params.productId}!`);
};

const putProductById = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId);
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const deleteProductById = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getAllItems = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      res.statusCode = 200;
      res.json(product.items);
    } else {
      err = new Error(`Product ${req.params.productId} not found`);
      err.status = 404;
      return next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const postItem = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      product.items.push(req.body);
      await product.save();
      res.status(200);
      res.json(product);
    } else {
      err = new Error(`Product ${req.params.productId} not found`);
      err.status = 404;
      return next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const putAllItems = async (req, res) => {
  res.status(403);
  res.end(
    `PUT operation not supported on /products/${req.params.productId}/items`
  );
};

const deleteAllItems = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      for (let i = product.items.length - 1; i >= 0; i--) {
        product.items.id(product.items[i]._id).remove();
      }
      await product.save();
      res.status(200);
      res.json(product);
    } else {
      err = new Error(`Campsite ${req.params.campsiteId} not found`);
      err.status = 404;
      return next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getItemById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product && product.items.id(req.params.productId)) {
      res.status(200);
      res.json(product.items.id(req.params.productId));
    } else if (!product) {
      err = new Error(`Product ${req.params.productId} not found`);
      err.status = 404;
      return next(err);
    } else {
      err = new Error(`Product ${req.params.productId} not found`);
      err.status = 404;
      return next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const postItemById = async (req, res) => {
  res.status(403);
  res.end(
    `POST operation not supported on /products/${req.params.productId}/items/${req.params.itemId}`
  );
};

const putItemById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product && product.items.id(req.params.itemId)) {
      if (req.body.image) {
        product.items.id(req.params.itemId).image = req.body.image;
      }
      if (req.body.name) {
        product.items.id(req.params.itemId).name = req.body.name;
      }
      if (req.body.price) {
        product.items.id(req.params.itemId).price = req.body.price;
      }
      await product.save();
      res.status(200);
      res.json(product);
    } else if (!product) {
      err = new Error(`Product ${req.params.productId} not found`);
      err.status = 404;
      return next(err);
    } else {
      err = new Error(`Item ${req.params.itemId} not found`);
      err.status = 404;
      return next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const deleteItemById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product && product.items.id(req.params.itemId)) {
      product.items.id(req.params.itemId).remove();
      await product.save();
      res.status(200);
      res.json(product);
    } else if (!product) {
      err = new Error(`Product ${req.params.productId} not found`);
      err.status = 404;
      return next(err);
    } else {
      err = new Error(`Item ${req.params.itemId} not found`);
      err.status = 404;
      return next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

module.exports = {
  getAllProducts,
  postProduct,
  putAllProducts,
  deleteAllProducts,
  getProductById,
  postProductById,
  putProductById,
  deleteProductById,
  getAllItems,
  postItem,
  putAllItems,
  deleteAllItems,
  getItemById,
  postItemById,
  putItemById,
  deleteItemById,
};
