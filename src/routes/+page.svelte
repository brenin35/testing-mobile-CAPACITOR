<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->
<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	let todo = $state('');

	type Todo = {
		done: boolean;
		text: string;
	};

	let todos: Todo[] = $state([]);

	function addTodo() {
		todos.push({ done: false, text: todo });
		todo = '';
	}
	function changeStatus(todo: Todo) {
		todo.done = !todo.done;
	}
</script>

<div class="container mx-auto mt-10">
	<div class="flex justify-center gap-3">
		<input
			type="text"
			bind:value={todo}
			class="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
			placeholder="Add todo"
		/>
		<button
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			onclick={addTodo}
		>
			Add todo
		</button>
	</div>
	<div class="m-4 flex gap-1">
		<div class="h-[85vh] w-full rounded-md border bg-gray-100">
			<div class="m-3">
				{#each todos.filter((item) => item.done === false) as item}
					<Card todo={item} changeStatus={() => changeStatus(item)} />
				{/each}
			</div>
		</div>

		<div class="h-[85vh] w-full rounded-md border bg-gray-100">
			<div class="m-5">
				{#each todos.filter((item) => item.done === true) as item}
					<Card todo={item} changeStatus={() => changeStatus(item)} />
				{/each}
			</div>
		</div>
	</div>
</div>


<a href="/geolocation">GEO</a>
<!-- <pre>
    {JSON.stringify(todos)}
</pre> -->
