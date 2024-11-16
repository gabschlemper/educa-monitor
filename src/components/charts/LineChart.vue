<template>
	<VueApexCharts
		type="line"
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
      text:  "Métricas de performance (%)",
      style: {
        color: "#fdfdfd",
      },
    },
  },
  title: {
    text:  "Performance do Estudante",
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

<style scoped>
</style>
