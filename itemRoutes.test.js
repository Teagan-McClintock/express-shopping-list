"use strict";

const request = require("supertest");

const app = require('./app');
const db = require("./fakeDb");
// const { default: test, describe, it } = require("node:test");

let pickles = { name: "Pickles", price: 3.99 };

beforeEach(function() {
  db.items.push(pickles);
});

afterEach(function() {
  db.items = [];
});

describe("get /items/ tests", function() {
  it("should return the correct items", async function(){
    const resp = await request(app).get(`/items/`);
    debugger;
    expect(resp.body).toEqual({
      items: [{ name: "Pickles", price: 3.99 }]
    });
  });

});

describe("POST /items/ tests", function(){
  it("should return the correct JSON", async function(){
    const resp = await request(app)
      .post(`/items/`)
      .send({item: {
        name: "popsicle",
        price: 1.45
      }});
    expect(resp.body).toEqual({added: {name: "popsicle", price: 1.45}});
  });

  // it("should return an error if body is empty", async function(){
  //   //this isn't written yet
  // });

  it("should add the item to the db", async function(){
    const resp = await request(app)
      .post(`/items/`)
      .send({item: {
        name: "popsicle",
        price: 1.45
      }});
    expect(db.items.length).toEqual(2);
  });
});