const router = require("express").Router();

const Client = require("../models/client.js");
const Trainer_Packages = require("../models/trainer_packages.js");
const Trainer_Customers = require("../models/trainer_customers.js");
const Client_Bought_Packages = require("../models/client_bought_packages.js");

router.get("/currentClient", (req, res) => {
  const client = req.session.clientFullName;
  return res.send(client);
});

module.exports = router;
