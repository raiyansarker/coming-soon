<script lang="ts">
	enum StatusEnum {
		SUCCESS,
		FAILED,
		WARNING
	}

	import Form from "../components/Form.svelte";
</script>

<img
	class="w-screen h-screen absolute z-[-10] filter brightness-75 rotate-180"
	src="/bg.webp"
	alt="Background"
/>
<div class="overflow-hidden w-screen h-screen">
	<div class="flex w-full h-full flex-row justify-between">
		<div class="w-4/12 hidden md:block">
			<div class="h-full flex items-center">
				<img alt="Charecter" src="/charecter.webp" />
			</div>
		</div>
		<div class="w-full md:w-8/12 md:rounded-l-2xl bg-white">
			<div class="flex flex-row h-full transform w-11/12 md:w-9/12 mx-auto items-center">
				<Form />
			</div>
		</div>
	</div>
</div>
