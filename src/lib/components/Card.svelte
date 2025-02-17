<script lang="ts">
	type Todo = {
		done: boolean;
		text: string;
	};

	let { todo, changeStatus }: { todo: Todo; changeStatus: () => void } = $props();
</script>

<div>
	<div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <p class="text-lg">{todo.text}</p>
            <p class="text-lg">{!todo.done ? '❌' : '✅'}</p>
        </div>
		<input
			type="checkbox"
			bind:checked={todo.done}
			onclick={() => {
				changeStatus();
			}}
		/>
	</div>
</div>
