// Función para obtener los colores del gráfico
function getChartColorsArray(chartId) {
  if (document.getElementById(chartId) !== null) {
    var colors = document.getElementById(chartId).getAttribute("data-colors");
    if (colors) {
      colors = JSON.parse(colors);
      return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
          var color = getComputedStyle(
            document.documentElement
          ).getPropertyValue(newValue);
          if (color) return color;
          else return newValue;
        } else {
          var val = value.split(",");
          if (val.length == 2) {
            var rgbaColor = getComputedStyle(
              document.documentElement
            ).getPropertyValue(val[0]);
            rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
            return rgbaColor;
          } else {
            return newValue;
          }
        }
      });
    } else {
      console.warn("data-colors Attribute not found on:", chartId);
    }
  }
}

// Función para actualizar los colores
function ChartColorChange(chartupdate, chartId) {
  document.querySelectorAll(".theme-color").forEach(function (item) {
    item.addEventListener("click", function (event) {
      setTimeout(function () {
        var updatechartColors = getChartColorsArray(chartId);
        if (chartupdate.options) {
          if (chartupdate.options["colors"]) {
            chartupdate.options["colors"] = updatechartColors;
          } else if (chartupdate.options["lineColors"]) {
            chartupdate.options["lineColors"] = updatechartColors;
          } else if (chartupdate.options["barColors"]) {
            chartupdate.options["barColors"] = updatechartColors;
          }
          chartupdate.redraw();
        }
      }, 0);
    });
  });
}

// Dashboard Constructor
var Dashboard = function () {};

// Función para limpiar el contenedor del gráfico antes de redibujar
Dashboard.prototype.clearChart = function (elementId) {
  document.getElementById(elementId).innerHTML = "";
};

// Función para crear el gráfico de barras con paginación
Dashboard.prototype.createBarChart = function (
  element,
  data,
  xkey,
  ykeys,
  labels,
  lineColors
) {
  var itemsPerPage = 6;
  var currentPage = 0;

  // Función para obtener los datos paginados
  function getPaginatedData(page) {
    var start = page * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }

  // Crear el gráfico de barras
  function createChart(page) {
    Dashboard.prototype.clearChart(element); // Limpiar antes de redibujar
    var paginatedData = getPaginatedData(page);
    Morris.Bar({
      element: element,
      data: paginatedData,
      xkey: xkey,
      ykeys: ykeys,
      labels: labels,
      gridLineColor: "rgba(108, 120, 151, 0.1)",
      gridTextColor: "#98a6ad",
      barSizeRatio: 0.6,
      resize: true,
      hideHover: "auto",
      barColors: lineColors,
    });
  }

  // Inicialización
  createChart(currentPage);

  // Funciones de paginación
  document
    .getElementById("btn-previous")
    .addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        createChart(currentPage);
      }
    });

  document.getElementById("btn-next").addEventListener("click", function () {
    if ((currentPage + 1) * itemsPerPage < data.length) {
      currentPage++;
      createChart(currentPage);
    }
  });
};

// Función para crear gráfico de área
Dashboard.prototype.createAreaChart = function (
  element,
  pointSize,
  lineWidth,
  data,
  xkey,
  ykeys,
  labels,
  lineColors
) {
  Dashboard.prototype.clearChart(element); // Limpiar antes de redibujar
  var areaChart = Morris.Area({
    element: element,
    pointSize: pointSize,
    lineWidth: lineWidth,
    data: data,
    xkey: xkey,
    ykeys: ykeys,
    labels: labels,
    resize: true,
    gridLineColor: "rgba(108, 120, 151, 0.1)",
    hideHover: "auto",
    lineColors: lineColors,
    fillOpacity: 0.6,
    behaveLikeLine: true,
  });
  ChartColorChange(areaChart, element);
};

// Función para crear gráfico de donut
Dashboard.prototype.createDonutChart = function (element, data, colors) {
  Dashboard.prototype.clearChart(element); // Limpiar antes de redibujar
  var donutChart = Morris.Donut({
    element: element,
    data: data,
    resize: true,
    colors: colors,
  });
  ChartColorChange(donutChart, element);
};

// Inicializar Dashboard
Dashboard.prototype.init = function () {
  // Gráfico de barras
  var barChartColors = getChartColorsArray("morris-bar-example");
  if (barChartColors) {
    var $barData = [
      {
        y: "2006",
        Llamadas: 100,
        SMS: 90,
        Whatsapp: 75,
        Llamadas_efectivas: 50,
        Whatsapp_Respondidos: 75,
      },
      {
        y: "2007",
        Llamadas: 120,
        SMS: 100,
        Whatsapp: 80,
        Llamadas_efectivas: 60,
        Whatsapp_Respondidos: 80,
      },
      {
        y: "2008",
        Llamadas: 150,
        SMS: 110,
        Whatsapp: 85,
        Llamadas_efectivas: 70,
        Whatsapp_Respondidos: 85,
      },
      {
        y: "2009",
        Llamadas: 180,
        SMS: 120,
        Whatsapp: 90,
        Llamadas_efectivas: 80,
        Whatsapp_Respondidos: 90,
      },
      {
        y: "2010",
        Llamadas: 200,
        SMS: 130,
        Whatsapp: 95,
        Llamadas_efectivas: 90,
        Whatsapp_Respondidos: 95,
      },
      {
        y: "2011",
        Llamadas: 220,
        SMS: 140,
        Whatsapp: 100,
        Llamadas_efectivas: 100,
        Whatsapp_Respondidos: 100,
      },
      {
        y: "2012",
        Llamadas: 240,
        SMS: 150,
        Whatsapp: 105,
        Llamadas_efectivas: 110,
        Whatsapp_Respondidos: 105,
      },
      {
        y: "2013",
        Llamadas: 260,
        SMS: 160,
        Whatsapp: 110,
        Llamadas_efectivas: 120,
        Whatsapp_Respondidos: 110,
      },
      {
        y: "2014",
        Llamadas: 280,
        SMS: 170,
        Whatsapp: 115,
        Llamadas_efectivas: 130,
        Whatsapp_Respondidos: 115,
      },
      {
        y: "2015",
        Llamadas: 300,
        SMS: 180,
        Whatsapp: 120,
        Llamadas_efectivas: 140,
        Whatsapp_Respondidos: 120,
      },
      {
        y: "2016",
        Llamadas: 320,
        SMS: 190,
        Whatsapp: 125,
        Llamadas_efectivas: 150,
        Whatsapp_Respondidos: 125,
      },
      {
        y: "2017",
        Llamadas: 340,
        SMS: 200,
        Whatsapp: 130,
        Llamadas_efectivas: 160,
        Whatsapp_Respondidos: 130,
      },
      {
        y: "2018",
        Llamadas: 360,
        SMS: 210,
        Whatsapp: 135,
        Llamadas_efectivas: 170,
        Whatsapp_Respondidos: 135,
      },
    ];
    this.createBarChart(
      "morris-bar-example",
      $barData,
      "y",
      [
        "Llamadas",
        "SMS",
        "Whatsapp",
        "Llamadas_efectivas",
        "Whatsapp_Respondidos",
      ],
      [
        "Llamadas",
        "SMS",
        "Whatsapp",
        "Llamadas efectivas",
        "Whatsapp Respondidos",
      ],
      barChartColors
    );
  }

  // Gráfico de área
  var areaChartColors = getChartColorsArray("morris-area-example");
  if (areaChartColors) {
    var $areaData = [
      { y: "2007", a: 0, b: 0, c: 0 },
      { y: "2008", a: 150, b: 45, c: 15 },
      { y: "2009", a: 60, b: 150, c: 195 },
      { y: "2010", a: 180, b: 36, c: 21 },
      { y: "2011", a: 90, b: 60, c: 360 },
      { y: "2012", a: 75, b: 240, c: 120 },
      { y: "2013", a: 30, b: 30, c: 30 },
    ];
    this.createAreaChart(
      "morris-area-example",
      0,
      0,
      $areaData,
      "y",
      ["a", "b", "c"],
      ["Series A", "Series B", "Series C"],
      areaChartColors
    );
  }

  // Gráfico de donut
  var donutChartColors = getChartColorsArray("morris-donut-example");
  if (donutChartColors) {
    var $donutData = [
      { label: "Marketing", value: 12 },
      { label: "Online", value: 42 },
      { label: "Offline", value: 20 },
    ];
    this.createDonutChart("morris-donut-example", $donutData, donutChartColors);
    this.createDonutChart(
      "morris-donut-example2",
      $donutData,
      donutChartColors
    );
  }
};

// Inicializando el dashboard
(function ($) {
  "use strict";
  $.Dashboard = new Dashboard();
  $.Dashboard.init();
})(window.jQuery);
