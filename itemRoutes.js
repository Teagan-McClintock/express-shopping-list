"use strict";

const express = require("express");

const db = require("./fakeDb");
const router = new express.Router();

const { items } = require("./fakeDb.js");

/** GET /items:  Return list of shopping items */

router.get("/", function (req, res) {
  return res.json({ items });
});

//TODO: item class?

/** POST /items: Accept JSON body, add item, and return it */

router.post("/", function (req, res) {
  const newItem = req.body.item;
  //debugger;
  items.push(newItem);
  return res.send({ added: newItem });
});


/** GET /items/:name: Return single item from URL parameter */

router.get("/:name", function (req, res) {
  //look through our items array for an item with name :name
  // return that item
 // const name = req.params
  for(item of items){
    if(item.name)
  }

});


/** Accept JSON body, modify item, return it  */

router.patch("/:name", function (req, res) {

});


/** Delete item given in URL parameter */

router.delete("/:name", function (req, res) {

});

module.exports = router;