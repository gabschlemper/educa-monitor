<template>
	<div>
		<p class="mb-6">
			Olá, {{ selectedStudents[0].name }}!
			Esses gráficos mostram o seu desempenho e incidentes ao longo dos meses.
		</p>
		<UCard class="mb-8">
			<LineChart :chart-series="lineChartSeries" />
		</Ucard>
		<UCard>
			<BarChart :chart-series="chartSeries" />
		</Ucard>
	</div>
</template>

<script setup>
import BarChart from "~/components/charts/BarChart.vue";
import LineChart from "~/components/charts/LineChart.vue";

const students = [
  { id: 1, name: "Alice", incidents: [ 3, 8, 5, 7, 6, 4 ], performance: [ 70, 75, 80, 85, 83, 90 ] },
];

const selectedStudents = ref([ students[0] ]);

const lineChartSeries = ref([
  { name: students[0].name, data: students[0].performance },
]);

const chartSeries = ref([
  {
    name: students[0].name,
    data: students[0].incidents,
  },
]);

const updateCharts = () =>
{
  chartSeries.value = selectedStudents.value.map(student => ({
    name: student.name,
    data: student.incidents,
  }));

  lineChartSeries.value = selectedStudents.value.map(student => ({
    name: student.name,
    data: student.performance,
  }));
};

updateCharts();
</script>
