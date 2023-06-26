const express = require("express");
const machines = express();
const machinesArray = require("../models/machine.model");

machines.get("/", (req, res) => {
    res.json(machinesArray);
});

module.exports = machines;
