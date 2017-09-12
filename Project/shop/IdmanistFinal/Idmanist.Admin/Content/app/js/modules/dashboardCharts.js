/*
 * Chart Demos for the dashboard views
 */
var createGraph = (selector, data1, data2, labels, colors, borderColor, bgColor) => {
    $("<div id='tooltip'></div>").css({
        position: "absolute",
        display: "none",
        border: "1px solid #fdd",
        padding: "2px",
        "background-color": "#fee",
        opacity: 0.80
    }).appendTo("body");
    $.plot($(selector), [{
        data: data1,
        label: labels[0],
        color: colors[0],
    }, {
        data: data2,
        label: labels[1],
        color: colors[1]
    }], {
        series: {
            lines: {
                show: true,
                fill: true,
                lineWidth: 1,
                fillColor: {
                    colors: [{
                        opacity: 0.2
                    }, {
                        opacity: 0.9
                    }]
                }
            },
            points: {
                show: true
            },
            shadowSize: 0
        },
        legend: {
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#fff',
            borderWidth: 0,
            labelMargin: 10,
            backgroundColor: '#fff'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: 'rgba(0,0,0,0)'
        },
        xaxis: {
            color: 'rgba(0,0,0,0)'
        },
        tooltip: true,
        tooltipOpts: {
            content: '%s: Value of %x is %y',
            shifts: {
                x: -60,
                y: 25
            },
            defaultTheme: false
        }
    });
};
var dashboardWebStats = () => {
    var uploads = [];
    for (var i = 0; i <= 10; i += 1) {
        uploads.push([i,Math.random() * 13]);
    }
    var downloads = [];
    for (var i = 0; i <= 10; i += 1) {
        downloads.push([i,Math.random() * 13]);
    }
    var plabels = ["Referral", "Direct"];
    var pcolors = ['#28bebd', '#1C86BF'];
    var borderColor = '#fff';
    var bgColor = '#fff';
    if ($('#website-stats').length > 0) {
        createGraph("#website-stats", uploads, downloads, plabels, pcolors, borderColor, bgColor);
    }
}
//
// Sparkline demo
//
var sparklineDashboard = () => {
    $('#sparkline1').sparkline([5, 7, 4, 8, 6, 9, 4, 7, 6, 5, 9, 5], {
        type: 'bar',
        height: '100',
        barWidth: '10',
        resize: true,
        barSpacing: '5',
        barColor: '#28bebd'
    });
    $('#sparkline2').sparkline([6, 4, 5, 3, 8, 5, 6, 4, 8, 6, 9, 5], {
        type: 'bar',
        height: '100',
        barWidth: '10',
        resize: true,
        barSpacing: '5',
        barColor: '#1c86bf'
    });
    $('#sparkline3').sparkline([4, 3, 6, 2, 7, 4, 8, 4, 9, 4, 6, 3], {
        type: 'bar',
        height: '100',
        barWidth: '10',
        resize: true,
        barSpacing: '5',
        barColor: '#5867c3'
    });
    $('#sparkline4').sparkline([4, 6, 4, 8, 5, 1, 5, 9, 5, 3, 5, 6], {
        type: 'bar',
        height: '100',
        barWidth: '10',
        resize: true,
        barSpacing: '5',
        barColor: '#fcc04d'
    });
}
//
// Chartist
//
const chartistPathAnimationDashboard = () => {
    if ($('#ct-PathAnimation1 ').length > 0) {
        var chart = new Chartist.Line('#ct-PathAnimation1 .ct-chart', {
            labels: ['Jan', 'Feb', 'March '],
            series: [
                [1, 5, 2],
                [2, 3, 4],
                [5, 4, 3]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
        });
        chart.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
    }
    if ($('#ct-PathAnimation2 ').length > 0) {
        var chart = new Chartist.Line('#ct-PathAnimation2 .ct-chart', {
            labels: ['April', 'May', 'June'],
            series: [
                [3, 2, 2],
                [2, 3, 4],
                [1, 4, 0.5]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
        });
        chart.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
    }
    if ($('#ct-PathAnimation3 ').length > 0) {
        var chart = new Chartist.Line('#ct-PathAnimation3 .ct-chart', {
            labels: ['July', 'Aug', 'Sept'],
            series: [
                [2, 4, 3],
                [1, 5, 0.5],
                [2, 3, 2]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
        });
        chart.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
    }
    if ($('#ct-PathAnimation4').length > 0) {
        var chart = new Chartist.Line('#ct-PathAnimation4 .ct-chart', {
            labels: ['Oct', 'Nov', 'Dec'],
            series: [
                [0.5, 5,2],
                [6, 3, 4],
                [5, 8, 6]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
        });
        chart.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
    }
}
const chartistLineDashboard = () => {
    if ($('#ct-LineChart1').length > 0) {
        new Chartist.Line('#ct-LineChart1 .ct-chart', {
            labels: [10, 20, 30, 40, 50, 60],
            series: [
                    [5, 3, 7, 5, 2, 7, 9]
            ]
        }, {
            low: 0,
            showArea: true
        });
    }
    if ($('#ct-LineChart2').length > 0) {
        new Chartist.Line('#ct-LineChart2 .ct-chart', {
            labels: [10, 20, 30, 40, 50, 60],
            series: [
                    [2, 3, 6, 8, 7, 5, 2]
            ]
        }, {
            low: 0,
            showArea: true
        });
    }
    if ($('#ct-LineChart3').length > 0) {
        new Chartist.Line('#ct-LineChart3 .ct-chart', {
            labels: [10, 20, 30, 40, 50, 60],
            series: [
                    [5, 3, 7, 5, 2, 4, 9]
            ]
        }, {
            low: 0,
            showArea: true
        });
    }
    if ($('#ct-LineChart4').length > 0) {
        new Chartist.Line('#ct-LineChart4 .ct-chart', {
            labels: [10, 20, 30, 40, 50, 60],
            series: [
                    [3, 4, 7, 8, 5, 3, 5]
            ]
        }, {
            low: 0,
            showArea: true
        });
    }
}
const chartistBarsDashboard = () => {
    if ($('#ct-BarChart1').length > 0) {
        new Chartist.Bar('#ct-BarChart1 .ct-chart', {
            labels: ['JAN', 'FEB', 'MARCH', 'APRIL'],
            series: [
                [800000, 1200000, 1400000, 1300000],
                [200000, 400000, 500000, 300000],
                [100000, 200000, 400000, 600000]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    }
    if ($('#ct-BarChart2').length > 0) {
        new Chartist.Bar('#ct-BarChart2 .ct-chart', {
            labels: ['MAY', 'JUNE', 'JULY', 'AUG'],
            series: [
                [200000, 800000, 900000, 1300000],
                [205000, 505000, 305000, 805000],
                [505000, 700000, 1000000, 1100000]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    }
    if ($('#ct-BarChart3').length > 0) {
        new Chartist.Bar('#ct-BarChart3 .ct-chart', {
            labels: ['Sept', 'OCT', 'NOV', 'DEC'],
            series: [
                [1000000, 1200000, 1400000, 1800000],
                [600000, 700000, 1000000, 1200000],
                [110000, 140000, 1600000, 1800000]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    }
    if ($('#ct-BarChart4').length > 0) {
        new Chartist.Bar('#ct-BarChart4 .ct-chart', {
            series: [
                [100000, 1200000, 1700000, 2000000],
                [200000, 500000, 900000, 3000000],
                [130000, 1600000, 1800000, 2000000]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    }
}
const chartistBiPolarChartDashboard = () => {
    if ($('#ct-BiPolarChart1').length > 0) {
        new Chartist.Line('#ct-BiPolarChart1 .ct-chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, 3, 1, -2, 0, 1, 0],
                [-2, -1, -2, -1, -2.5, -1, -2, -1],
                [0, 0, 0, 1, 2, 2.5, 2, 1],
                [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
        }, {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });
    }
    if ($('#ct-BiPolarChart2').length > 0) {
        new Chartist.Line('#ct-BiPolarChart2 .ct-chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5],
                [1, 2, 3, -1, -2, 0, 1, 4],
                [-2, 1, -2, -1, -2.5, -1.5, -2, -1],
                [0, 3, 0, 1, 2, 2.5, 2, 1]
            ]
        }, {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });
    }
    if ($('#ct-BiPolarChart3').length > 0) {
        new Chartist.Line('#ct-BiPolarChart3 .ct-chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, 1, 1, -2, 0.5, 1, 0],
                [-2, -1, -2, -1, 2.5, -1, -2, -1],
                [0, 0, 0, 1.5, 2, 2.5, 2, 1],
                [2.5, 2, 1.5, 0.5, 1, 5, -1, 2.5]
            ]
        }, {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });
    }
    if ($('#ct-BiPolarChart4').length > 0) {
        new Chartist.Line('#ct-BiPolarChart4 .ct-chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, -3, 1, 2, 0, 1, 0],
                [-2, -1, -2, 4, -2.5, -1, 2, -1],
                [3, 0, 0, 1, 2.5, 2.5, 2, 1],
                [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
        }, {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });
    }
}
const drawSparkline = () => {
       var linePoints = [0, 1, 3, 2, 1, 1, 4, 1, 2, 0, 3, 1, 3, 4, 1, 0, 2, 3, 6, 3, 4, 2, 7, 5, 2, 4, 1, 2, 6, 13, 4, 2];
       $('#sparkline-line').sparkline(linePoints, {
           type: 'line',
           width: 'calc(100% + 4px)',
           height: '45',
           chartRangeMax: 13,
           lineColor: 'rgba(30, 145, 191,0.5)',
           fillColor: 'rgba(30, 145, 191,0.4)',
           highlightLineColor: 'rgba(0,0,0,0)',
           highlightSpotColor: 'rgba(0,0,0,.2)',
           tooltip: false
       });
       var barParent = $('#sparkline-bar').parents('.card');
       var barPoints = [0, 1, 3, 2, 1, 1, 4, 1, 2, 0, 3, 1, 3, 4, 1, 0, 2, 3, 6, 3, 4, 2, 7, 5, 2, 4, 1, 2, 6, 13, 4, 2];
       var barWidth = 6;
       $('#sparkline-bar').sparkline(barPoints, {
           type: 'bar',
           height: $('#sparkline-bar').height() + 'px',
           width: '100%',
           barWidth: barWidth,
           barSpacing: (barParent.width() - (barPoints.length * barWidth)) / barPoints.length,
           barColor: 'rgba(30, 145, 191,.6)',
           tooltipFormat: ' <span style="color: #ccc">&#9679;</span> {{value}}</span>'
       });
   };
export {
    dashboardWebStats,
    sparklineDashboard,
    chartistLineDashboard,
    chartistBarsDashboard,
    chartistBiPolarChartDashboard,
    chartistPathAnimationDashboard,
    drawSparkline
}
