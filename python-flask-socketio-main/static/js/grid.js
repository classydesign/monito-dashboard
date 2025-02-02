var itemss = [
  { content: "my first widget" },
  { w: 2, content: "another longer widget!" },
  { h: 0, w: 3, content: "another widget!" },
];
var grid = GridStack.init();
//grid.load(items);

function addItem() {
  // $("#myModal").modal("show");
}

function uuidv4() {
  /* return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );*/
  return Math.random()
    .toString(36)
    .replace("0.", "view1" || "");
}
var widgetCount = 1;

function createWidget() {
  var newItem = { content: "New Widget" };

  var newItem = [
    {
      x: 0,
      y: 0,
      w: 5,
      h: 5,
      content: "hhh",
    },
  ];

  var widgetID = "chart" + widgetCount; //uuidv4();
  grid.addWidget(
    '<div class="grid-stack-item"><div class="grid-stack-item-content"><div id="' +
      widgetID +
      '"></div></div></div>',
    { w: 3, h: 3 }
  );
  if ($(".widgetSelection").val() == "radialbar") {
    radialchart(widgetID);
    $(".widgetSelection").val("select");
  }
  widgetCount++;
}

function radialchart(widgetID) {
  console.log(widgetID);

  var optionsRadial = {
    series: [75],
    chart: {
      id: widgetID,
      height: 350,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  };

  chart1 = new ApexCharts(
    document.querySelector("#" + widgetID),
    optionsRadial
  );
  chart1.render();
}
var chart1 = "";

/*
window.setInterval(function () {
  iteration++;

  
}, 3000);*/
