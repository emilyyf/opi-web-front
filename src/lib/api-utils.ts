import { ref } from 'vue';

export async function useFetch(url: string) {
	const data = ref(null);
	const erro = ref(null);

	await fetch(url)
		.then((res) => res.json())
		.then((json) => data.value = json)
		.catch((err) => erro.value = err);

	return { data, erro };
}
