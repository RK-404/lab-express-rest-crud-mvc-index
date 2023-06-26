const express = require("express");
const plans = express();
const plansArray = require("../models/plan.model");

plans.get("/", (req, res) => {
    res.json(plansArray);
});

module.exports = plans;
