const express = require("express");
const locations = express();
const locationsArray = require("../models/location.model");

locations.get("/", (req, res) => {
    res.json(locationsArray);
});

module.exports = locations;
