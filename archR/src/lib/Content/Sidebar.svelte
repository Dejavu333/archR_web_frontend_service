<script>
import HomeIcon from "../../../public/HomeIcon.svelte";
import VotingIcon from "../../../public/VotingIcon.svelte";
import SettingsIcon from "../../../public/SettingsIcon.svelte";
import MsgIcon from "../../../public/MsgIcon.svelte";

let active = "active";
let inactive = "";
let homePath = "/home";
let votingPath = "/voting";
let settingsPath = "/settings";
let msgPath = "/msg";

</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->

<div class="app-sidebar">
    <a href={homePath} class="app-sidebar-link {active}">
        <HomeIcon/>
    </a>

    <a href={votingPath} class="app-sidebar-link {inactive}">
        <VotingIcon/>
    </a>

    <a href={settingsPath} class="app-sidebar-link {inactive}">
        <SettingsIcon/>
    </a>

    <a href={msgPath} class="app-sidebar-link {inactive}">
        <MsgIcon/>
    </a>
</div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->

<style>
.app-sidebar {
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.app-sidebar-link {
    color: var(--link-color);
    margin: 16px 0;
    transition: 0.2s;
    border-radius: 50%;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.app-sidebar-link:hover {
    background-color: var(--link-color-hover);
    color: var(--link-color-active);
}

.app-sidebar-link.active {
    background-color: var(--link-color-active-bg);
    color: var(--link-color-active);
}
</style>
