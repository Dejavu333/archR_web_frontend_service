<script lang="ts">
import ProfileButton from './ProfileButton.svelte';
import DarkModeToggle from './DarkModeToggle.svelte';
import NotificationButton from './NotificationButton.svelte';
import SearchInput from './SearchInput.svelte';
import MessagesButton from './MessagesButton.svelte';
import Logo from './Logo.svelte';
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<div class="app-header">

    <div class="app-header-left">
        <Logo/>
        <SearchInput placeholder="Search" />
    </div>

    <div class="app-header-right">
        <DarkModeToggle/>
        <NotificationButton />
        <ProfileButton />
        <MessagesButton />
    </div>

</div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
