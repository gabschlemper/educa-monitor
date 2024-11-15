<template>
	<UContainer class="flex justify-between items-center">
		<div>
			<img src="../assets/images/logo.svg">
		</div>
		<UHorizontalNavigation :links="navItems" class="flex justify-center" />
		<UToggle v-model="selectedToggle" color="primary" />
		<UBadge :label="userStore.userRole" variant="outline" class="mx-4 flex justify-center w-24" />
		<UDropdown
			:items="dropdownItems"
			mode="hover"
			:popper="{ placement: 'bottom-start' }"
		>
			<UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
		</UDropdown>
	</UContainer>
	<UDivider />
</template>
  
<script setup>
import { useUserStore } from "~/store/userStore";

const userStore = useUserStore();
const selectedToggle = ref(true);

watch(selectedToggle, (newValue) =>
{
  userStore.setUserRole(newValue ? "Professor" : "Aluno");
});

const dropdownItems = [
  [ {
    label: "Settings",
    icon:  "i-heroicons-cog-8-tooth",
  } ], [ {
    label: "Sair",
    icon:  "i-heroicons-outline-arrow-right-on-rectangle",
  } ],
];
const navItems = [
  [ {
    label: "Dashboard",
    icon:  "i-heroicons-chart-bar",
    to:    "/dashboard",
  }, {
    label: "Notifications",
    icon:  "i-heroicons-outline-bell-alert",
    to:    "/notifications",
  }, {
    label: "Comportamento do Estudante",
    icon:  "i-heroicons-outline-document-text",
    to:    "/student-behavior",
  } ] ];
</script>
