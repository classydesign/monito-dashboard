$(document).ready(function () {
  /* const ctx = document.getElementById("myChart").getContext("2d");

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [{ label: "Temperature" }],
    },
    options: {
      borderWidth: 3,
      borderColor: ["rgba(255, 99, 132, 1)"],
    },
  });*/

  function addData(label, data) {
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    myChart.update();
  }

  function removeFirstData() {
    myChart.data.labels.splice(0, 1);
    myChart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  const MAX_DATA_COUNT = 10;
  //connect to the socket server.
  //   var socket = io.connect("http://" + document.domain + ":" + location.port);
  var socket = io.connect();

  //receive details from server
  socket.on("updateSensorData", function (msg) {
    console.log(msg);
    //console.log("Received sensorData :: " + msg.date + " :: " + msg.value);
    for (var i = 0; i < msg.length; i++) {
      console.log(msg[i].chartid);
      var ws = msg[i].chartid;

      ApexCharts.exec(ws, "updateSeries", [msg[i].value]);
      /* chart1.updateSeries([
        msg[i].value,
        msg[i].value * 0.5,
        //({ min: 10, max: 100 }),
        //getRangeRandom({ min: 10, max: 100 }),
      ]);*/
    }

    /*
    // Show only MAX_DATA_COUNT data
    if (myChart.data.labels.length > MAX_DATA_COUNT) {
      removeFirstData();
    }
    addData(msg.date, msg.value);*/
  });
});
