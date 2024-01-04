"use strict";

const express = require("express");

const router = new express.Router();
const db = require("./fakeDb");

const { NotFoundError } = require('./expressError');

/** GET /items:  Return list of shopping items */

router.get("/", function (req, res) {
  return res.json(db);
});

//TODO: item class?

/** POST /items: Accept JSON body, add item, and return it */

router.post("/", function (req, res) {
  const newItem = req.body.item;

  db.items.push(newItem);
  return res.send({ added: newItem });
});


/** GET /items/:name: Return single item from URL parameter */

router.get("/:name", function (req, res) {
  const name = req.params.name;

  for (let item of db.items) {
    if (item.name === name) {
      return res.send(item);
    }
  }

  throw new NotFoundError("Item not found");

});


/** Accept JSON body, modify item, return it  */

router.patch("/:name", function (req, res) {
  const name = req.params.name;
  const passedItem = req.body;

  for (let item of db.items) {
    if (item.name === name) {
      for (let key of Object.keys(item)) {
        if (key in passedItem)
        {
          item[key] = passedItem[key];
        }
      }
      return res.send({"updated": item});
    }
  }

  throw new NotFoundError("Item not found");

});


/** Delete item given in URL parameter */

router.delete("/:name", function (req, res) {
  const name = req.params.name;

  for (let item of db.items) {
    if (item.name === name) {
      db.items.splice(db.items.indexOf(item), 1);
      return res.send({"message": "Deleted"});
    }
  }

  throw new NotFoundError("Item not found");

});

module.exports = router;