<script lang="ts">
  export let text: string
</script>

<div class="absolute text-xl bottom-3 left-0 right-0 group flex justify-center">
  <button on:click class="group flex justify-center items-center relative bg-blue-800 shadow-2xl rounded-full">
    <div class="icon rounded-full bg-white/30 group-hover:bg-white/40">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 1 26 30">
        <path
          d="M 15 4 v 22 l-10 -10 l10 10 l10 -10"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    </div>
    <div class="text">{text}</div>
  </button>
</div>

<style>
  .icon {
    --size: max(5vw, 2rem);
    width: var(--size);
    height: var(--size);
    padding: clamp(0.2em, 1vw, 1rem);
  }
  .text {
    font-size: clamp(1rem, 1.4vw, 3rem);
  }
  button {
    padding: min(0.75rem, 1vw);
    padding-right: 1.25rem;
    gap: min(1rem, 1.4vw);
  }
</style>