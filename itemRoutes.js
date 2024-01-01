"use strict";

const express = require("express");

const db = require("./fakeDb");
const router = new express.Router();

const { items } = require("./fakeDb.js");

/** Return list of shopping items */

router.get("/", function(req, res){
  return res.json({"items": items});
});


/** Accept JSON body, add item, and return it */

router.post("/", function(req, res){
  const newItem = req.body.item;
  items.push(newItem);
  return newItem;
});


/** Return single item from URL parameter */

router.get("/:name", function(req, res){

});


/** Accept JSON body, modify item, return it  */

router.patch("/:name", function(req, res){

});


/** Delete item given in URL parameter */

router.delete("/:name", function(req, res){

});

module.exports = router;