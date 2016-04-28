$(function () {
  let month = 0;

  function makeGaugeParams(title,unit,stats) {
    var range = stats.max - stats.min;
    return {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      },

      title: {
        text: title
      },

      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
          // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

      // the value axis
      yAxis: {
        min: stats.min,
        max: stats.max,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: unit
        },
        plotBands: [{
          from: stats.min,
          to: stats.min + (range/3),
          color: '#55BF3B' // green
        }, {
          from: stats.min+(range/3),
          to: stats.min+(range*(2/3)),
          color: '#DDDF0D' // yellow
        }, {
          from: stats.min+(range*(2/3)),
          to: stats.max,
          color: '#DF5353' // red
        }]
      },

      series: [{
        name: 'title',
        data: [Math.round(stats.avg)],
        tooltip: {
          valueSuffix: ' ' + unit
        }
      }]

    };
  }
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'Roboto, sans-serif'
      }
    }
  });
  $('#energy-gauge').highcharts(makeGaugeParams("Energy", "kWH", statsFor(window.data, "energy_consumption")));
  $('#water-gauge').highcharts(makeGaugeParams("Water", "liters", statsFor(window.data, "feed_water_flow")));
  $('#coal-gauge').highcharts(makeGaugeParams("Coal", "tons", statsFor(window.data, "coal_consumption_boiler")));
});
