<script lang="ts">
	import i18n from '$i18n/utils.svelte'
	type Props = {
		class?: string
	}
	let { class: class_ = '' }: Props = $props()
</script>

<div class="p-[1vw]" />
<div class="grid justify-center {class_}">
	<h1 class="text-[15vw]">{i18n.LL.orange}</h1>
</div>
