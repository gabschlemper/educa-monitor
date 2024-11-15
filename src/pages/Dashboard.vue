<template>
	<div class="flex gap-8">
		<UCard
			style="background-color: transparent;"
			class="flex-1"
		>
			<VueApexCharts
				type="line"
				:options="lineChartOptions"
				:series="lineChartSeries"
				height="400"
			/>
		</Ucard>
		<UCard class="flex-1" style="background-color: transparent;">
			<VueApexCharts
				type="bar"
				:options="chartOptions"
				:series="chartSeries"
				height="400"
			/>
		</Ucard>
	</div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";

const chartOptions = {
	chart: {
		type:    "bar",
		height:  350,
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal:  false,
			columnWidth: "60%",
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show:   true,
		width:  2,
		colors: [ "transparent" ],
	},
	xaxis: {
		categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun" ],
		title:      {
			text: "Months",
		},
	},
	yaxis: {
		title: {
			text: "Number of Incidents",
		},
	},
	title: {
		text:  "Incidents Overview",
		align: "center",
	},
};

const chartSeries = [
	{
		name: "Incidents",
		data: [ 5, 12, 8, 15, 7, 10 ],
	},
];

const lineChartOptions = {
	chart: {
		type:    "line",
		height:  350,
		toolbar: {
			show: false,
		},
	},
	stroke: {
		curve: "smooth",
		width: 3,
	},
	markers: {
		size: 5,
	},
	xaxis: {
		categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun" ],
		title:      {
			text: "Months",
		},
	},
	yaxis: {
		title: {
			text: "Performance Metrics (%)",
		},
	},
	title: {
		text:  "Student Performance Metrics",
		align: "center",
	},
	colors: [ "#00D1B2" ],
};

const lineChartSeries = [
	{
		name: "Performance",
		data: [ 75, 80, 85, 90, 88, 92 ],
	},
];

</script>
