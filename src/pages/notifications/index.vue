<template>
	<div>
		<StudentNotifications v-if="userStore.userRole === 'Aluno'" />
		<TeacherNotifications v-if="userStore.userRole === 'Professor'" />
	</div>
</template>

<script setup>
import StudentNotifications from "./components/StudentNotifications.vue";
import TeacherNotifications from "./components/TeacherNotifications.vue";

import { useUserStore } from "~/store/userStore";
const userStore = useUserStore();
</script>
