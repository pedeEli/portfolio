<script lang="ts">
  import '../app.css'
  import Arrow from './Arrow.svelte'
</script>


<main class="h-screen grid place-items-center">
  <div class="overflow-hidden w-vw h-vw relative">
    <slot/>
    <div class="absolute text-xl bottom-3 left-0 right-0 flex justify-center items-center gap-4">
      <Arrow/>
      <div class="">Navigation</div>
    </div>
  </div>
</main>