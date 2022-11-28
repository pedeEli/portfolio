<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Navigation from './Navigation.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colors} from '$lib/colors'

  const color = colors.navigation
</script>

<Faces classes="{color.bg} {color.txt}">
  <Navigation/>
</Faces>
<Arrow bgColor={color.btn} side={0} text="aboutThisPage" href="/about-this-page"/>
<Arrow bgColor={color.btn} side={1} text="aboutMe" href="/about-me"/>
<Arrow bgColor={color.btn} side={2} text="welcome" href="/"/>
<Arrow bgColor={color.btn} side={3} text="projects" href="/projects"/>