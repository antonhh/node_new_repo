exports.seed = function (knex) {
  return knex("trainer").insert([
    // password
    {
      email: "alper@gmail.com",
      password: "test1234",
      first_name: "Alper",
      last_name: "Altay",
      day_of_birth: "911",
      address: "Lygten 37",
      zip_code: "4400",
    },
  ]);
};
