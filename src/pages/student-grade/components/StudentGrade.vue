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
  --sx-color-surface: #fff;
  --sx-color-surface-dim: #1d1d1d;
  --sx-color-surface-bright: #616161;
  --sx-color-surface-container: #232323;
  --sx-color-surface-container-low: #2c2c2c;
  --sx-color-surface-container-high: #292929;
  --sx-color-background: #121212;
  --sx-color-on-background: #e5e5e5;
  --sx-color-outline-variant: #3a3a3a;
  --sx-color-surface-tint: #4ADE80;
  --sx-color-neutral: #3a3a3a;
  --sx-color-neutral-variant: #616161;
  --sx-internal-color-light-gray: #2c2c2c;
  --sx-internal-color-text: #e5e5e5;
}
</style>