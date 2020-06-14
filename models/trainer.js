const { Model } = require("objection");

const Trainer_packages = require("./trainer_packages.js");
const Trainer_customers = require("./trainer_customers.js");

class Trainer extends Model {
  static tableName = "trainer";

  static relationMappings = {
    trainer_packages: {
      relation: Model.HasManyRelation,
      modelClass: Trainer_packages,
      join: {
        from: "trainer.id",
        to: "trainer_packages.trainerId",
      },
    },
  };
}

module.exports = Trainer;
