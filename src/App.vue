<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import TransactionsTable from './components/TransactionsTable.vue';
</script>

<template>
	<v-layout class="rounded rounded-md">
		<SideBar />
		<v-main class="d-flex align-center justify-center" style="min-height: 300px;">
			<TransactionsTable />
		</v-main>
	</v-layout>
</template>

<style scoped></style>
