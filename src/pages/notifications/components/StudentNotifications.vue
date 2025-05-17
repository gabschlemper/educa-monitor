<template>
	<div>
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
</template>

<script setup>
import { notificationTableColumns, studentNotifications } from "../mock";
import { ref } from "vue";

const q = ref("");
const page = ref(1);
const rowsPerPage = 10;

const newNotification = ref({
  studentName: "",
  description: "",
  date:        "",
  type:        "",
});

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

const badgeColorMapping = {
  Aviso:   "yellow",
  Info:    "blue",
  Urgente: "red",
};

</script>
