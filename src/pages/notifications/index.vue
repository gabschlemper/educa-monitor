<template>
	<div>
		<div>
			<div class="flex justify-end gap-6 mb-10">
				<UInput v-model="q" placeholder="Filtrar..." />
				<UButton @click="openDialog">
					Add Notification
				</UButton>
			</div>
			<UTable :sort="sort" :rows="filteredRows" :columns="tableColumns">
				<template #item-type="{ row }">
					<UBadge :label="row.type" />
				</template>
			</UTable>
		</div>

		<UModal v-model="isModalOpen">
			<UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
				<template #header>
					<span class="text-h3">
						Nova notificação
					</span>
				</template>

				<div class="flex flex-col gap-3">
					<UInput id="studentName" v-model="newNotification.studentName" type="text" required />
					<UTextarea id="description" v-model="newNotification.description" required />
					<UInput id="date" v-model="newNotification.date" type="date" required />
				</div>
				<template #footer>
					<div class="flex justify-end gap-4">
						<UButton variant="outline" @click="closeDialog">
							Cancel
						</UButton>
						<UButton @click="saveNotification">
							Save
						</UButton>
					</div>
				</template>
			</UCard>
		</UModal>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { studentNotifications } from "./mock";

const q = ref("");

const filteredRows = computed(() =>
{
  if (!q.value)
  {
    return studentNotifications;
  }

  return studentNotifications.filter((person) =>
  {
    return Object.values(person).some((value) =>
    {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});

const sort = ref({
  column:    "name",
  direction: "desc",
}, {
  column:    "date",
  direction: "desc",
});

const tableColumns = [ {
  key:   "id",
  label: "Matricula",
}, {
  key:      "name",
  label:    "Nome do Aluno",
  sortable: true,
}, {
  key:   "description",
  label: "Descrição",
}, {
  key:      "date",
  label:    "Data",
  sortable: true,
}, {
  key:   "type",
  label: "Tipo",
} ];
const isModalOpen = ref(false);
const newNotification = ref({
  studentName: "",
  description: "",
  date:        "",
});

// Open the dialog
const openDialog = () =>
{
  isModalOpen.value = true;
};

const closeDialog = () =>
{
  isModalOpen.value = false;
  resetNewNotification();
};

const saveNotification = () =>
{
  if (newNotification.value.studentName && newNotification.value.description && newNotification.value.date)
  {
    notifications.value.push({ ...newNotification.value });
    closeDialog();
  }
};

const resetNewNotification = () =>
{
  newNotification.value = { studentName: "", description: "", date: "" };
};

const formatDate = (date) =>
{
  return new Date(date).toLocaleDateString();
};
</script>

<style scoped>
.notifications-container {
  padding: 20px;
}

.add-notification-btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
}

.notifications-table table {
  width: 100%;
  border-collapse: collapse;
}

.notifications-table th, .notifications-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.notifications-table th {
  background-color: #f4f4f4;
}

.notification-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dialog-content h2 {
  margin-bottom: 20px;
}

.dialog-content label {
  display: block;
  margin-bottom: 8px;
}

.dialog-content input, .dialog-content textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dialog-content button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.dialog-content button:hover {
  background-color: #0056b3;
}

.dialog-content button:last-child {
  background-color: #f44336;
}

.dialog-content button:last-child:hover {
  background-color: #d32f2f;
}
</style>
