<script lang="ts">
	import i18n from '$i18n/utils.svelte'
</script>

<div class="flex flex-col w-full h-full items-center">
	<div class="p-[2vw]" />
	<h1 class="font-bold grid place-items-center">
		<span class="text-[5vw] opacity-60 tracking-widest">
			{i18n.LL.welcomeGreeting}
		</span>
		<span class="">Elias Gerster</span>
	</h1>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="flex-1 stroke-zinc-200 opacity-60"
		viewBox="-5 25 40 80"
	>
		<path
			d="M15 30 V 90 l-15 -15 l15 15 l 15 -15"
			stroke-width="6"
			stroke-linecap="round"
			stroke-linejoin="round"
			fill="none"
		/>
	</svg>
	<p class="max-w-2xl mx-4 text-center text-[max(1rem,2vw)]">
		{i18n.LL.welcomeInstruction}
	</p>
	<div class="p-[6vw]" />
</div>
