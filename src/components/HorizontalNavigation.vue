<template>
	<UHorizontalNavigation :links="links">
		<template #default="{ link }">
			<span v-if="link.label === 'EducaMonitor'" class="no-hover-text">
				<img src="../assets/images/logo.svg">
			</span>
			<span v-else class="">{{ link.label }}</span>
		</template>
	</UHorizontalNavigation>
	<UDivider />
</template>
  
<script setup>
const links = [
	[
		{
			label: "EducaMonitor",
		},
	],
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
	} ], [
		{
			label: "Logout",
			icon:  "i-heroicons-outline-arrow-right-on-rectangle",
		},
	] ];
</script>
