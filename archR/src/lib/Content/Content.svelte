<script>
import AppSidebar from './Sidebar.svelte';
import ProjectsSection from './ProjectsSection.svelte';
import MessagesSection from './MessagesSection.svelte';
function handleMessage(event) {
  setTimeout(() => {
    
		alert(event.detail.text);
  }, 100);
	}
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->

  <div class="app-content">
    <AppSidebar on:message={handleMessage}/>
    <ProjectsSection />
    <MessagesSection />
  </div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
