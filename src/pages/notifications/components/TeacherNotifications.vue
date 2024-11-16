<template>
	<div>
		<div>
			<div class="flex justify-end gap-6 mb-10">
				<UInput v-model="q" placeholder="Filtrar..." />
				<UButton @click="openDialog">
					Nova Notificação
				</UButton>
			</div>
			<UTable :sort="sort" :rows="paginatedRows" :columns="notificationTableColumns">
				<template #type-data="{ row }">
					<UBadge
						:ui="{ rounded: 'rounded-full' }"
						:label="row.type"
						:color="badgeColorMapping[row.type]"
					/>
				</template>
			</UTable>
			<div class="flex justify-end px-3 py-3.5 border-t border-gray-200">
				<UPagination v-model="page" :page-count="pageCount" :total="3" />
			</div>
		</div>

		<UModal v-model="isModalOpen">
			<UCard :ui="{ divide: 'divide-y divide-gray-100' }">
				<template #header>
					<span class="text-h3">
						Nova notificação
					</span>
				</template>

				<UForm class="flex flex-col gap-3" :state="newNotification">
					<UInput
						id="studentName"
						v-model="newNotification.studentName"
						placeholder="Nome do Estudante"
						type="text"
						required
					/>
					<UTextarea
						id="description"
						v-model="newNotification.description"
						placeholder="Descrição da notificação"
						required
					/>
					<UInput
						id="date"
						v-model="newNotification.date"
						type="date"
						required
					/>
					<!-- <USelect id="date" v-model="newNotification.type" :options=["warning", "info", ""] required /> -->
				</UForm>
				<template #footer>
					<div class="flex justify-end gap-4">
						<UButton variant="outline" @click="closeDialog">
							Cancelar
						</UButton>
						<UButton @click="saveNotification">
							Salvar
						</UButton>
					</div>
				</template>
			</UCard>
		</UModal>
	</div>
</template>

<script setup>
import { notificationTableColumns, studentsNotifications } from "../mock";
import { ref } from "vue";

const isModalOpen = ref(false);
const q = ref("");
const page = ref(1);
const rowsPerPage = 10;
const today = new Date();

const newNotification = ref({
  studentName: "",
  description: "",
  date:        today.toISOString().split("T")[0],
  type:        "",
});

const filteredRows = computed(() =>
{
  if (!q.value)
  {
    return studentsNotifications;
  }

  return studentsNotifications.filter((person) =>
  {
    return Object.values(person).some((value) =>
    {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});

const paginatedRows = computed(() =>
{
  const start = (page.value - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  return filteredRows.value.slice(start, end);
});

const pageCount = computed(() =>
{
  return filteredRows.value.length / rowsPerPage + 1;
});

const sort = ref({
  column:    "name",
  direction: "desc",
}, {
  column:    "date",
  direction: "desc",
}, {
  column:    "type",
  direction: "desc",
});

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
    const newNotificationModel = {
      id:          studentsNotifications.length + 1,
      studentName: newNotification.value.studentName,
      description: newNotification.value.description,
      date:        newNotification.value.date,
      type:        newNotification.value.type,
    };
    studentsNotifications.push(newNotificationModel);
    closeDialog();
  }
};

const resetNewNotification = () =>
{
  newNotification.value = {
    studentName: "",
    description: "",
    date:        "",
    type:        "",
  };
};

const badgeColorMapping = {
  Aviso:   "yellow",
  Info:    "blue",
  Urgente: "red",
};

</script>
