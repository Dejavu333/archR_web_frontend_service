<script>
import ArchRLogo from '../../../public/ArchRLogo.svelte';
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<div class="logo">
    <div class="app-icon">
        <ArchRLogo />
    </div>
    <p class="app-name">archR</p>
</div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap');

.logo {
    display: flex;
    align-items: center;
    color: var(--main-color);
}

.app-icon {
    width: 40px;
    height: 40px;
}

.app-name {
    margin: 0;
    font-size: 20px;
    /* font-family: 'Berkshire Swash', cursive; */
    font-family: 'Comfortaa', cursive;
    margin: 0 5px;
}
</style>
