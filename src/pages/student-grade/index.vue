<template>
	<div>
		<StudentGrade v-if="userStore.userRole === 'Aluno'" />
		<TeacherGrade v-if="userStore.userRole === 'Professor'" />
	</div>
</template>

<script setup>
import StudentGrade from "./components/StudentGrade.vue";
import TeacherGrade from "./components/TeacherGrade.vue";

import { useUserStore } from "~/store/userStore";
const userStore = useUserStore();
</script>
