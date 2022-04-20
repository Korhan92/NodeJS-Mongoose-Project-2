//const db = require("../db");
const db = require('../db')
const schema = new db.Schema(
  {
    content: String,
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = db.model("Users", schema);