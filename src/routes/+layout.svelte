<script lang="ts">
  import {goto} from '$app/navigation'

  import '../app.css'
  import Arrow from './Arrow.svelte'
</script>


<main class="h-screen grid place-items-center">
  <div class="overflow-hidden w-vw h-vw relative">
    <slot/>
    <div class="absolute text-xl bottom-3 left-0 right-0 group flex justify-center">
      <div class="flex justify-center items-center gap-4 relative bg-blue-800 shadow-2xl rounded-full p-3 pr-5">
        <Arrow on:click={() => goto('/navigation')}/>
        <div>Navigation</div>
      </div>
    </div>
  </div>
</main>