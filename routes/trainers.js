const $ = require("jquery");

const router = require("express").Router();

const Trainer = require("../models/trainer.js");
const Trainer_Packages = require("../models/trainer_packages.js");
const Trainer_Customers = require("../models/trainer_customers.js");
const { response } = require("express");

router.get("/trainerPackages", async (req, res) => {
  id = req.session.trainerId;
  //console.log(req.session.trainerId + " TRAINERS")
  const allCurrentTrainerPackages = await Trainer_Packages.query()
    .where("trainer_id", id)
    .select("name", "price");
  return res.send({ response: allCurrentTrainerPackages });
});

router.get("/trainers", async (req, res) => {
  const allTrainers = await Trainer.query()
    .select("*")
    .withGraphFetched("trainer_packages");

  return res.send({ response: allTrainers });
});

router.get("/API/trainers/profile/:id", async (req, res) => {
  id = req.params.id;
  const specficTrainer = await Trainer.query()
    .select("*")
    .where("id", id)
    .withGraphFetched("trainer_packages");
  return res.send({ response: specficTrainer });
});

router.post("/newTrainerPackage", async (req, res) => {
  await Trainer_Packages.query().insert({
    name: req.body.name,
    price: req.body.price,
    trainer_id: req.session.trainerId,
  });
  return res.redirect("/trainerDashboard");
});

router.get("/currentTrainer", (req, res) => {
  const trainer = req.session.trainerFullName;
  return res.send(trainer);
});

module.exports = router;
