const { Model } = require("objection");

const Trainer = require("./trainer.js");

class trainer_customers extends Model {
  static tableName = "trainer_customers";

  static relationMappings = {
    trainer: {
      relation: Model.BelongsToOneRelation,
      modelClass: Trainer,
      join: {
        from: "trainer_customers.id",
        to: "trainer.id",
      },
    },
  };
}

module.exports = trainer_customers;
