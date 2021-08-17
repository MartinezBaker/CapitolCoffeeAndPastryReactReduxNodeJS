const express = require("express");
const router = express.Router();

const {
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
} = require("../controller/productControllers");

router.get("/", getAllProducts);

router.post("/", postProduct);

router.put("/", putAllProducts);

router.delete("/", deleteAllProducts);

router.get("/:productId", getProductById);

router.post("/:productId", postProductById);

router.put("/:productId", putProductById);

router.delete("/:productId", deleteProductById);

router.get("/:productId/items", getAllItems);

router.post("/:productId/items", postItem);

router.put("/:productId/items", putAllItems);

router.delete("/:productId/items", deleteAllItems);

router.get("/:productId/items/:itemId", getItemById);

router.post("/:productId/items/:itemId", postItemById);

router.put("/:productId/items/:itemId", putItemById);

router.delete("/:productId/items/:itemId", deleteItemById);

module.exports = router;
