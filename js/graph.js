$(document).ready(function() {
	$(chart_id).highcharts({
		tooltip: {crosshairs: true},
		chart: chart,
		title: title,
		xAxis: xAxis,
		yAxis: yAxis,
                
		colors: colors,
		series: series,
		credits: credits,
	});
});