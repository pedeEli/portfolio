<script lang="ts">
  import '../app.css'
</script>


<main class="h-screen grid place-items-center">
  <div class="overflow-hidden w-vw h-vw relative">
    <slot/>
    <div class="absolute text-xl bottom-3 left-0 right-0 flex justify-center items-center gap-4">
      <button class="w-16 h-16 rounded-full bg-white/30 hover:bg-white/40 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="2 1 26 30">
          <path
            d="M 15 4 v 22 l-10 -10 l10 10 l10 -10"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
      </button>
      <div class="">Navigation</div>
    </div>
  </div>
</main>