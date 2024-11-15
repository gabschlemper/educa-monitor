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
  xaxis: {
    categories: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun" ],
    title:      {
      text: "Meses",
    },
  },
  yaxis: {
    title: {
      text: "Número de Incidentes",
    },
  },
  title: {
    text:  "Visão Geral de Incidentes",
    align: "center",
  },
  color: "#f00",
};
</script>

<style scoped>
</style>
