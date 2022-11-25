<div class="w-full h-full flex flex-col items-center">
  <div class="p-[5vw]"/>
  <h1 class="text-[15vw]">Navigation</h1>
  <div class="p-[3vw]"/>
  <div class="mini-map grid w-[60vw]">
    <div class="face" style="grid-area: title">Minimap</div>
    <div class="face bg-blue-600"                   style="grid-area: blue">Landing Page</div>
    <div class="face bg-yellow-400 text-zinc-900" style="grid-area: yellow">About Me</div>
    <div class="face"                                 style="grid-area: orange">Navigation</div>
    <div class="face bg-zinc-200 text-zinc-900"   style="grid-area: white">Projects</div>
    <div class="face bg-red-600"                    style="grid-area: red">Temp</div>
    <div class="face bg-green-600"                  style="grid-area: green">About This Page</div>
  </div>
</div>

<style>
  .mini-map {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "title  blue   .     ."
      "yellow orange white red"
      ".      green  .     .";
  }
  .face {
    @apply aspect-square grid place-items-center text-center text-[2.75vw];
  }
</style>