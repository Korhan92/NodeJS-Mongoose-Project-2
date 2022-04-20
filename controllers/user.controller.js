const express = require('express');

module.exports = (Collection) => {

  // ======
  // Create
  // ======
   create = (req, res) => {
    const newEntry = req.body;
    Collection.create(newEntry, (e,newEntry) => {
      if(e) {
        console.log(e);
        res.sendStatus(500);
      } else {
        res.send(newEntry);
      }
    });
  };
  
  // =========
  // Read many
  // =========
  findAll = (req, res) => {
    let query = res.locals.query || {};
  
    Collection.find(query, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.send(result);
      }
    });
  };

  // ========
  // Read one
  // ========
  findOne = (req, res) => {
    const { _id } = req.params;
  
    Collection.findById(_id, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.send(result);
      }
    });
  };
  
  // ======
  // Update
  // ======
  update = (req, res) => {
    const changedEntry = req.body;
    Collection.update({ _id: req.params._id }, { $set: changedEntry }, (e) => {
      if (e)
        res.sendStatus(500);
      else
        res.sendStatus(200);
    });
  };
  
  // ======
  // Remove
  // ======
  remove = (req, res) => {
    Collection.remove({ _id: req.params._id }, (e) => {
      if (e)
      res.status(500).send(e);
      else
        res.sendStatus(200);
    });
  };


}