<script>
import Editor from './lib/Editor/Editor.svelte'
import Content from './lib/Content/Content.svelte';
import Header from './lib/Header/Header.svelte';
import Router from 'svelte-spa-router'
function geci(event) {
  alert("fasz")
}
function handleMessage(event) {
  setTimeout((event) => {
    console.log(event)
    console.log("fasdfsgsdfg")
		alert(event.detail.text);
  }, 0);
	}
</script>
<main class="app-container">

  <Header on:message={handleMessage}/>
  <Router routes={{
      '/d': Content,
      '/': Editor,
      '/foo': Editor}} 
  />

</main>

<style>

</style>
