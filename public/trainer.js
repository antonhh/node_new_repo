$(document).ready(() => {
 
  $.get("/currentTrainer", (trainerFullName) => {
    console.log(trainerFullName);
    $("#loggedIn-trainer").text("Velkommen " + trainerFullName);
  });

  $

  //AJAX GET request for all the trainer packages in the url /trainerPackages

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/trainerPackages",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    cache: false,
    success: function (data) {
      for (let i = 0; i < data.response.length; i++) {
        $("#trainer-display-packages tbody").append(
          "<tr>" +
            "<td>" +
            data.response[i].name +
            "</td>" +
            "<td>" +
            data.response[i].price +
            "</td>" +
            "</tr>"
        );
      }
    },
    error: function (msg) {
      alert(msg.responseText);
    },
  });
});
