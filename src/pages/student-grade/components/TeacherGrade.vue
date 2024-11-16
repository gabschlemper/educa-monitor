<template>
	<div>
		<div class="flex justify-end mb-8">
			<UButton @click="dialog = true">
				Novo Evento
			</UButton>
		</div>
		<ScheduleXCalendar :calendar-app="calendarApp" />
    
		<UModal v-model="dialog">
			<UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
				<template #header>
					<span class="text-h3">
						Novo Evento
					</span>
				</template>

				<UForm class="flex flex-col gap-3" :state="newNotification">
					<UInput
						v-model="newEvent.title"
						placeholder="Titulo do Evento"
						outlined
					/>
					<UInput
						v-model="newEvent.description"
						placeholder="Descrição do Evento"
						outlined
					/>
					<UInput
						id="date"
						v-model="newEvent.date"
						type="date"
						required
					/>
				</UForm>
				<template #footer>
					<div class="flex justify-end gap-4">
						<UButton variant="outline" @click="dialog = false">
							Cancelar
						</UButton>
						<UButton @click="addEvent">
							Salvar
						</UButton>
					</div>
				</template>
			</UCard>
		</UModal>
	</div>
</template>

<script setup>
import { createCalendar, viewDay, viewMonthAgenda, viewMonthGrid } from "@schedule-x/calendar";
import { gradeEvents } from "../mock"; // Mock data from /mock.js
import { ref } from "vue";
import { ScheduleXCalendar } from "@schedule-x/vue";

const today = new Date();

const calendarApp = createCalendar({
  selectedDate: today.toISOString().split("T")[0],
  views:        [ viewMonthGrid, viewMonthAgenda, viewDay ],
  defaultView:  viewMonthAgenda.name,
  events:       gradeEvents,
});

const dialog = ref(false);
const newEvent = ref({
  title:       "",
  description: "",
  date:        today.toISOString().split("T")[0],
  time:        "",
});

const addEvent = () =>
{
  if (!newEvent.value.title || !newEvent.value.date || !newEvent.value.time)
  {
    alert("Please fill in all fields.");
    return;
  }

  const newEventObject = {
    title:       newEvent.value.title,
    description: newEvent.value.description,
    date:        newEvent.value.date,
    time:        newEvent.value.time,
  };

  gradeEvents.push(newEventObject);
  calendarApp.addEvent(newEventObject);

  dialog.value = false;
  newEvent.value = {
    title:       "",
    description: "",
    date:        today.toISOString().split("T")[0],
    time:        "",
  };
};
</script>

<style scoped>
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
