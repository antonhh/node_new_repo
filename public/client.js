$(document).ready(() => {
  $.get("/currentClient", (clientFullName) => {
    console.log(clientFullName);
    $("#loggedIn-client").text("Velkommen " + clientFullName);
  });

  // Getting the current URL, and splitting to isolate the ID
  // which is used in the api call in the ajax
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf("/") + 1);
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/API/trainers/profile/" + id,
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    cache: false,
    success: function (data, req, res) {
      $("#personal-trainer-welcome").text(
        "Træners navn: " +
          data.response[0].firstName +
          " " +
          data.response[0].lastName
      );
    },
    error: function (msg) {
      alert(msg.responseText);
    },
  });

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/trainers",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    cache: false,
    success: function (data, req, res) {
      for (let i = 0; i < data.response.length; i++) {
        var id = data.response[i].id;
        $("#display-all-trainers-table tbody").append(
          "<tr><td>" +
            data.response[i].firstName +
            " " +
            data.response[i].lastName +
            "</td><td>" +
            data.response[i].email +
            "</td><td>" +
            data.response[i].zipCode +
            "</td><td><a a href = '/trainers/profile/" +
            id +
            "'>Se pakker</a></td></tr>"
        );
      }
    },
    error: function (msg) {
      alert(msg.responseText);
    },
  });

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/trainers",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    cache: false,
    success: function (data, req, res) {
      for (let i = 0; i < data.response.length; i++) {
        date = data.response[i].createdAt;
        splittedDate = date.split("T");

        dob = new Date(data.response[i].dayOfBirth);
        var today = new Date();
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
        console.log(age);
        $("#display-all-trainers-frontpage-table tbody").append(
          "<tr><td>" +
            data.response[i].firstName +
            "</td><td> " +
            data.response[i].lastName +
            "</td><td>" +
            data.response[i].email +
            "</td><td>" +
            age +
            " år" +
            "</td><td>" +
            data.response[i].zipCode +
            "</td><td>" +
            splittedDate[0] +
            "</td></tr>"
        );
      }
    },
    error: function (msg) {
      alert(msg.responseText);
    },
  });

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/API/trainers/profile/" + id,
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    cache: false,
    success: function (data, req, res) {
      for (let i = 0; i < data.response.length; i++) {
        $("#trainer-display-profile tbody").append(
          "<tr><td>" +
            data.response[i].firstName +
            " " +
            data.response[i].lastName +
            "</td><td>" +
            data.response[i].email +
            "</td><td>" +
            data.response[i].zipCode +
            "</td><td>" +
            data.response[i].trainerBio +
            "</td ></tr > "
        );
      }
    },
    error: function (msg) {
      alert(msg.responseText);
    },
  });

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/API/trainers/profile/" + id,
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    cache: false,
    success: function (data, req, res) {
      for (let i = 0; i < data.response[0].trainer_packages.length; i++) {
        $("#trainer-display-packages tbody").append(
          "<tr>" +
            "<td>" +
            data.response[0].trainer_packages[i].name +
            "</td><td> " +
            data.response[0].trainer_packages[i].price +
            "</td></tr>"
        );
      }
    },
    error: function (msg) {
      alert(msg.responseText);
    },
  });
});
