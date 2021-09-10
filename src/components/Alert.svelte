<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { sineIn, sineOut } from "svelte/easing";

	let visible = false;
	export let message: string;
	export let status: StatusEnum;

	enum StatusEnum {
		SUCCESS,
		FAILED,
		WARNING
	}

	onMount(() => {
		visible = true;

		return () => {
			visible = false;
		};
	});
</script>

{#if visible}
	<div
		class="fixed z-10 bottom-0 left-0 right-0 my-4"
		in:fly={{
			y: 100,
			easing: sineIn,
			duration: 250
		}}
		out:fly={{
			y: 100,
			easing: sineOut,
			duration: 250
		}}
	>
		<div
			class="rounded max-w-max mx-4 text-white px-3 py-2"
			class:bg-teal-600={status === StatusEnum.SUCCESS}
			class:bg-red-600={status === StatusEnum.FAILED}
			class:bg-amber-500={status === StatusEnum.WARNING}
		>
			<div class="flex flex-row justify-between items-center space-x-2">
				<h3 class="text-lg">{message}</h3>
				<div class="rounded-full p-0.5 bg-white cursor-pointer" on:click={() => (visible = false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-3 w-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="black"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
{/if}
