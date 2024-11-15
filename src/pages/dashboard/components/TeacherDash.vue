<template>
	<div>
		<USelectMenu
			v-model="selectedStudents"
			:options="students"
			label="Select Student"
			item-text="name"
			item-value="id"
			option-attribute="name"
			multiple
			class="w-60 mb-10"
			@change="updateCharts"
		/>
		<div class="flex gap-8">
			<UCard class="cardStyle">
				<LineChart :chart-series="lineChartSeries" />
			</Ucard>
			<UCard class="cardStyle">
				<BarChart :chart-series="chartSeries" />
			</Ucard>
		</div>
	</div>
</template>

<script setup>
import BarChart from "~/components/charts/BarChart.vue";
import LineChart from "~/components/charts/LineChart.vue";

const students = [
  { id: 1, name: "Alice", incidents: [ 3, 8, 5, 7, 6, 4 ], performance: [ 70, 75, 80, 85, 83, 90 ] },
  { id: 2, name: "Bob", incidents: [ 2, 5, 3, 6, 4, 7 ], performance: [ 65, 68, 70, 78, 80, 85 ] },
  { id: 3, name: "Charlie", incidents: [ 4, 6, 7, 5, 8, 9 ], performance: [ 72, 74, 78, 80, 85, 88 ] },
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

<style scoped>
.cardStyle {
  background-color: transparent;
  flex: 1;
}
</style>