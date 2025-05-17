<template>
	<div>
		<USelectMenu
			v-model="selectedStudents"
			:options="studentsChartsMock"
			label="Select Student"
			item-text="name"
			item-value="id"
			option-attribute="name"
			multiple
			class="w-60 mb-10"
			@change="updateCharts"
		/>
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
import { studentsChartsMock } from "../mock";

const selectedStudents = ref([ studentsChartsMock[0] ]);

const lineChartSeries = ref([
  { name: studentsChartsMock[0].name, data: studentsChartsMock[0].performance },
]);

const chartSeries = ref([
  {
    name: studentsChartsMock[0].name,
    data: studentsChartsMock[0].notifications,
  },
]);

const updateCharts = () =>
{
  chartSeries.value = selectedStudents.value.map(student => ({
    name: student.name,
    data: student.notifications,
  }));

  lineChartSeries.value = selectedStudents.value.map(student => ({
    name: student.name,
    data: student.performance,
  }));
};

updateCharts();
</script>
