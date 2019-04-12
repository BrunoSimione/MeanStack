const express = require("express");

const Document = require("../models/eletronic");
const router = express.Router();

router.get("/eletronics/all", (req, res, next) => {
  req.app.locals.db
    .collection("eletronics")
    .find({})
    .toArray((err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      if (result === undefined || result.length === 0) {
        res.status(400).send({ error: "No documents in database" });
      } else {
        res.status(200).send(result);
      }
    });
});

router.get("/eletronics/:id", (req, res, next) => {
  req.app.locals.db.collection("eletronics").findOne(
    {
      _id: req.params.id
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      if (result === undefined) {
        res
          .status(400)
          .send({ error: "No document matching that id was found" });
      } else {
        res.status(200).send(result);
      }
    }
  );
});

router.post("/eletronics/new", (req, res, next) => {
  const newDocument = new Document(
    req.body.brand,
    req.body.price,
    req.body.model
  );
  req.app.locals.db.collection("eletronics").insertOne(
    {
      newDocument
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).send(result);
    }
  );
});

router.delete("/eletronics/delete/:id", (req, res, next) => {
  req.app.locals.db.collection("eletronics").deleteOne(
    {
      _id: req.params.id
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).send(result);
    }
  );
});

router.patch("/eletronics/edit/:id", (req, res, next) => {
  req.app.locals.db.collection("eletronics").updateOne(
    {
      _id: req.params.id
    },
    {
      $set: {
        brand: req.body.brand,
        price: req.body.price,
        model: req.body.model
      }
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).send(result);
    }
  );
});

module.exports = router;