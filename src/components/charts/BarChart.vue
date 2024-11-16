<template>
	<VueApexCharts
		type="bar"
		:options="chartOptions"
		:series="chartSeries"
		height="400"
	/>
</template>

<script setup>
import { defineProps } from "vue";
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  chartSeries: {
    type:     Array,
    required: true,
  },
});

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
  grid: {
    borderColor: "#373D3F",
  },
  xaxis: {
    categories: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun" ],
    title:      {
      text:  "Meses",
      style: {
        color: "#fdfdfd",
      },
    },
  },
  yaxis: {
    title: {
      text:  "Número de Incidentes",
      style: {
        color: "#fdfdfd",
      },
    },
  },
  title: {
    text:  "Visão Geral de Incidentes",
    align: "center",
    style: {
      color: "#fdfdfd",
    },
  },
  tooltip: {
    theme: true,
    fixed: true,
  },
  fill: {
    opacity: 0.4,
  },
  legend: {
    labels: {
      colors: [ "#cdcdcd", "#cdcdcd", "#cdcdcd", "#cdcdcd", "#cdcdcd" ],
    },
  },
};
</script>
