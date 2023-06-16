<script>
import Editor from './lib/Editor/Editor.svelte'
import Content from './lib/Content/Content.svelte';
import Header from './lib/Header/Header.svelte';
import Router from 'svelte-spa-router'
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->

<main class="app-container">

  <Header/>
  <Router routes={{
      '/board'  : Content,
      '/'       : Editor,
      '/editor' : Editor}} 
  />

</main>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->

<style>

</style>
