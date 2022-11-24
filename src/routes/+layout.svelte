<script lang="ts">
  import Transition from '$lib/Transition.svelte'
  import '../app.css'

  import type {LayoutData} from './$types'

  export let data: LayoutData
</script>

<main class="h-screen grid place-items-center">
  <div class="relative w-vw h-vw overflow-hidden">
    <Transition pathname={data.pathname}>
      <div class="w-full h-full">
        <slot/>
      </div>
    </Transition>
  </div>
</main>