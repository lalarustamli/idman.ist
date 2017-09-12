//C3 Chart Demos
const c3_gauges = () => {
  if ($('#c3_gauge').length) {
    var chart = c3.generate({
      bindto: '#c3_gauge',
      data: {
        columns: [
          ['data', 91.4]
        ],
        type: 'gauge',
        onclick: function(d, i) {
          //console.log("onclick", d, i);
        },
        onmouseover: function(d, i) {
          //console.log("onmouseover", d, i);
        },
        onmouseout: function(d, i) {
          //console.log("onmouseout", d, i);
        }
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.success, MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.warning, MaterialWrap.APP_COLORS.primary], // the three color levels for the percentage values.
        threshold: {
          //            unit: 'value', // percentage is default
          //            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });
    setTimeout(function() {
      chart.load({
        columns: [
          ['data', 10]
        ]
      });
    }, 1000);
    setTimeout(function() {
      chart.load({
        columns: [
          ['data', 50]
        ]
      });
    }, 2000);
    setTimeout(function() {
      chart.load({
        columns: [
          ['data', 70]
        ]
      });
    }, 3000);
    setTimeout(function() {
      chart.load({
        columns: [
          ['data', 0]
        ]
      });
    }, 4000);
    setTimeout(function() {
      chart.load({
        columns: [
          ['data', 100]
        ]
      });
    }, 5000);
  }
};
const c3_pie = () => {
  if ($('#c3_pie').length) {
    var chart = c3.generate({
      bindto: '#c3_pie',
      data: {
        // iris data from R
        columns: [
          ['data1', 30],
          ['data2', 120],
        ],
        type: 'pie',
        onclick: function(d, i) {
          //  console.log("onclick", d, i);
        },
        onmouseover: function(d, i) {
          //  console.log("onmouseover", d, i);
        },
        onmouseout: function(d, i) {
          //  console.log("onmouseout", d, i);
        }
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.success, MaterialWrap.APP_COLORS.primary, MaterialWrap.APP_COLORS.mw_purple, MaterialWrap.APP_COLORS.success]
      }
    });
    setTimeout(function() {
      chart.load({
        columns: [
          ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
      });
    }, 1500);
    setTimeout(function() {
      chart.unload({
        ids: 'data1'
      });
      chart.unload({
        ids: 'data2'
      });
    }, 2500);
  }
}
const c3_scatter = () => {
  if ($('#c3_scatter').length) {
    var chart = c3.generate({
      bindto: '#c3_scatter',
      data: {
        xs: {
          setosa: 'setosa_x',
          versicolor: 'versicolor_x',
        },
        // iris data from R
        columns: [
          ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
          ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
          ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ],
        type: 'scatter'
      },
      axis: {
        x: {
          label: 'Sepal.Width',
          tick: {
            fit: false
          }
        },
        y: {
          label: 'Petal.Width'
        }
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.success, MaterialWrap.APP_COLORS.primary]
      }
    });
    setTimeout(function() {
      chart.load({
        xs: {
          virginica: 'virginica_x'
        },
        columns: [
          ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
          ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
      });
    }, 1000);
    setTimeout(function() {
      chart.unload({
        ids: 'setosa'
      });
    }, 2000);
    setTimeout(function() {
      chart.load({
        columns: [
          ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        ]
      });
    }, 3000);
  }
}
const c3_donut = () => {
  if ($('#c3_donut').length) {
    var chart = c3.generate({
      bindto: '#c3_donut',
      data: {
        columns: [
          ['data1', 30],
          ['data2', 120],
        ],
        type: 'donut',
        onclick: function(d, i) {
          //console.log("onclick", d, i);
        },
        onmouseover: function(d, i) {
          //console.log("onmouseover", d, i);
        },
        onmouseout: function(d, i) {
          //console.log("onmouseout", d, i);
        }
      },
      donut: {
        title: "Iris Petal Width"
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.success, MaterialWrap.APP_COLORS.primary, MaterialWrap.APP_COLORS.mw_purple, MaterialWrap.APP_COLORS.success]
      }
    });
    setTimeout(function() {
      chart.load({
        columns: [
          ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
      });
    }, 1500);
    setTimeout(function() {
      chart.unload({
        ids: 'data1'
      });
      chart.unload({
        ids: 'data2'
      });
    }, 2500);
  }
}
const c3_areaChart = () => {
  if ($('#c3_area-chart').length) {
    var chart = c3.generate({
      bindto: '#c3_area-chart',
      data: {
        columns: [
          ['data1', 300, 350, 300, 0, 0, 0],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
          data1: 'area',
          data2: 'area-spline'
        }
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.primary]
      }
    });
  }
};
const c3_areaSpline = () => {
  if ($('#c3_spline-chart').length) {
    var chart = c3.generate({
      bindto: '#c3_spline-chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'spline'
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.primary]
      }
    });
  }
};
const c3_combination = () => {
  if ($('#c3_combination-chart').length) {
    var chart = c3.generate({
      bindto: '#c3_combination-chart',
      data: {
        columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
          ['data4', 200, 130, 90, 240, 130, 220],
          ['data5', 130, 120, 150, 140, 160, 150],
          ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
          data3: 'spline',
          data4: 'line',
          data6: 'area',
        },
        groups: [
          ['data1', 'data2']
        ]
      },
      axis: {
        x: {
          type: 'categorized'
        }
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.success, MaterialWrap.APP_COLORS.primary, MaterialWrap.APP_COLORS.warning, MaterialWrap.APP_COLORS.mw_purple, MaterialWrap.APP_COLORS.mw_peach]
      }
    });
  }
};
const c3_zoom = () => {
  if ($('#c3_zoom').length) {
    var chart = c3.generate({
      bindto: '#c3_zoom',
      data: {
        columns: [
          ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
        ]
      },
      zoom: {
        enabled: true
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.success, MaterialWrap.APP_COLORS.primary, MaterialWrap.APP_COLORS.warning, MaterialWrap.APP_COLORS.mw_purple, MaterialWrap.APP_COLORS.mw_peach]
      }
    });
  }
};
const c3_stacked_bars_chart = () => {
  if ($('#c3_stacked-bars-chart').length) {
    var chart = c3.generate({
      bindto: '#c3_stacked-bars-chart',
      data: {
        columns: [
          ['data1', -30, 200, 200, 400, -150, 250],
          ['data2', 130, 100, -100, 200, -150, 50],
          ['data3', -230, 200, 200, -300, 250, 250]
        ],
        type: 'bar',
        groups: [
          ['data1', 'data2']
        ]
      },
      grid: {
        y: {
          lines: [{
            value: 0
          }]
        }
      },
      color: {
        pattern: [MaterialWrap.APP_COLORS.info, MaterialWrap.APP_COLORS.success, MaterialWrap.APP_COLORS.primary, MaterialWrap.APP_COLORS.mw_purple, MaterialWrap.APP_COLORS.mw_peach]
      }
    });
    setTimeout(function() {
      chart.groups([
        ['data1', 'data2', 'data3']
      ])
    }, 1000);
    setTimeout(function() {
      chart.load({
        columns: [
          ['data4', 100, -50, 150, 200, -300, -100]
        ]
      });
    }, 1500);
    setTimeout(function() {
      chart.groups([
        ['data1', 'data2', 'data3', 'data4']
      ])
    }, 2000);
  }
}
export {
  c3_gauges,
  c3_pie,
  c3_donut,
  c3_areaChart,
  c3_combination,
  c3_zoom,
  c3_stacked_bars_chart,
  c3_areaSpline,
  c3_scatter
}
