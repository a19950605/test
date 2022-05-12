import express from "express";
import Category from "../models/Category.js";
import Item from "../models/item.js";

const router = express.Router();

router.get("/category", async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

router.post("/category", async (req, res) => {
  const category = new Category({
    title: req.body.title,
  });
  await category.save();
  res.send(category);

  res.send({ test: "test" });
});

router.get("/items", async (req, res) => {
  console.log("item by id");
  const cat = await Category.findOne({ title: req.body.category });

  if (cat == "" || cat == undefined) {
    res.send({ error: "id not found" });
  }
  const item = await Item.find({ category: cat._id });
  res.send(item);
});

router.get("/item", async (req, res) => {
  console.log("all item");

  const item = await Item.find();
  res.send(item);
});

router.get("/item/:id", async (req, res) => {
  console.log("item by id");
  const item = await Item.findOne({ _id: req.params.id });
  res.send(item);
});

router.post("/item", async (req, res) => {
  const cat = await Category.findOne({ title: req.body.category });

  if (cat == "" || cat == undefined) {
    res.send({ error: "id not found" });
  }
  const item = new Item({
    title: req.body.title,
    category: cat._id,
    price: req.body.price,
    image: req.body.image,
  });
  await item.save();
  res.send(item);
});

export default router;
