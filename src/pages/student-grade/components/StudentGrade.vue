<template>
	<div>
		<ScheduleXCalendar :calendar-app="calendarApp" />
	</div>
</template>

<script setup>
import "@schedule-x/theme-default/dist/index.css";
import {
  createCalendar,
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
} from "@schedule-x/calendar";
import { gradeEvents } from "../mock";
import { ScheduleXCalendar } from "@schedule-x/vue";

const today = new Date();
 
const calendarApp = createCalendar({
  selectedDate: today.toISOString().split("T")[0],
  views:        [ viewMonthGrid, viewMonthAgenda, viewDay ],
  defaultView:  viewMonthAgenda.name,
  events:       gradeEvents,
});
</script>

<style>
:root {
--sx-color-primary: #4ADE80;
--sx-color-on-primary: #000;
--sx-color-primary-container: #4ADE80;
--sx-color-on-primary-container: #000;
--sx-color-surface-tint: #4ADE80;
}
</style>