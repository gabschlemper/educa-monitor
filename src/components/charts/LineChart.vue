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
  xaxis: {
    categories: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun" ],
    title:      {
      text: "Meses",
    },
  },
  yaxis: {
    title: {
      text: "Métricas de performance (%)",
    },
  },
  title: {
    text:  "Métricas de Performance do Estudante",
    align: "center",
  },
};
</script>

<style scoped>
</style>
