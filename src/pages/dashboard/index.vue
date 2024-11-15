<template>
	<div>
		<StudentDash v-if="userStore.userRole === 'Aluno'" />
		<TeacherDash v-if="userStore.userRole === 'Professor'" />
	</div>
</template>

<script setup>
import StudentDash from "./components/StudentDash.vue";
import TeacherDash from "./components/TeacherDash.vue";

import { useUserStore } from "~/store/userStore";
const userStore = useUserStore();
</script>
