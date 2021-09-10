<script lang="ts">
	let email: string;
	let submittable = false;

	const handleSubmit = (): void => {
		console.log({ email });
	};

	$: email ? (submittable = true) : (submittable = false);
</script>

<div class="flex flex-col justify-center space-y-5">
	<h1 class="text-2xl md:text-3xl tracking-wide text-coolGray-800 font-bold">
		{import.meta.env.VITE_TITLE}
	</h1>
	<p class="text-coolGray-800 text-sm">
		Our website is currently undergoing development phase. We Should be back shortly. Thank you for
		your patience.
	</p>
	<div class="flex flex-col justify-center items-start space-y-2">
		<form on:submit|preventDefault={handleSubmit} class="flex flex-row items-center w-full">
			<input
				class="bg-[#f6f6f6] rounded-l-md outline-none border-t-2 border-l-2 border-b-2 border-transparent focus:border-t-2 focus:border-l-2 focus:border-b-2 focus:border-blue-700 hover:border-t-2 hover:border-l-2 hover:border-b-2 hover:border-blue-700 focus:outline-none px-3 py-2 placeholder-coolGray-500 w-7/12 md:w-7/12"
				type="email"
				placeholder="Enter your email address"
				bind:value={email}
			/>
			<button
				type="submit"
				class:cursor-not-allowed={!submittable}
				disabled={!submittable}
				class="px-4 py-2 bg-blue-700 border-blue-700 border-2 hover:border-blue-600 hover:bg-blue-600 rounded-r-md text-white"
				>NOTIFY ME</button
			>
		</form>
		<div class="text-xs text-coolGray-600">
			Sign up now to get early notification of our lauch date!
		</div>
	</div>
</div>
