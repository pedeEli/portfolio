<script lang="ts">
  import '../app.css'
</script>


<main class="h-screen grid place-items-center">
  <div class="overflow-hidden w-vw h-vw relative">
    <slot/>
    <div class="absolute text-xl bottom-2 left-0 right-0 grid place-items-center gap-2">
      <div class="">Navigation</div>
      <button></button>
    </div>
  </div>
</main>