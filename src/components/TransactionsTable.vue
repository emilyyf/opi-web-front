<script setup lang="ts">
import { useFetch } from '../lib/api-utils';
import { toValue } from 'vue';
import { Transaction } from '../lib/types';

let items: Transaction;
let headers;
const { data, erro } = await useFetch('http://localhost:4000/api/transactions');
if (!erro.value) {
	items = data.value.data;
	headers = [
		{ title: 'Description', value: 'description' },
		{ title: 'Value', value: 'value' },
		{ title: 'Date', value: 'date' },
		{ title: 'Type', value: 'type_id' },
	];
}
</script>

<template>
	<div v-if="data">
		<v-data-table :items="items" :headers="headers"></v-data-table>
	</div>
	<div v-else>
		<pre>{{ erro }}</pre>
	</div>
</template>

<style scoped></style>
