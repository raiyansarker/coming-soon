<script lang="ts" context="module">
	type ErrorProps = {
		status: number;
		error: {
			message: string;
		};
	};

	export function load({ error, status }: ErrorProps): { props: ErrorProps } {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script lang="ts">
	export let status: number;
	export let error: ErrorProps["error"];

	const statusMessage = error.message.split(":")[0];
</script>

<svelte:head>
	<title>{statusMessage}</title>
</svelte:head>
<div class="flex justify-center items-center w-screen h-screen">
	<div class="flex text-coolGray-700 flex-row items-center">
		<h1 class="border-r-2 text-2xl pr-4 border-coolGray-700 py-2">{status}</h1>
		<h1 class="pl-4 py-2 text-sm">{statusMessage}</h1>
	</div>
</div>
