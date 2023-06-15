<script>
import { get_current_component } from 'svelte/internal';
import MoonIcon from '../../../public/MoonIcon.svelte';
import SunIcon from '../../../public/SunIcon.svelte';
import {S} from '../../utility.js';
import { createEventDispatcher } from 'svelte';

let mode = 'light';
const dispatch = createEventDispatcher();

function switchTheme() {
    // // dispatch('message');
    // // dispatchEvent(new CustomEvent('message'));
    document.documentElement.classList.toggle('dark');
    S('.mode-switch').classList.toggle('active');
    mode = (mode === 'light') ? 'dark' : 'light';
    // S('html').setAttribute('svelvet-theme', mode);
}

    let comp = get_current_component();
    function sayHello() {
        dispatch('message', {
            text: 'fsz!'
		});
        console.log('log hello!')
        dispatchEvent(new CustomEvent('message'));
	}
</script>

<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<button class="mode-switch" title="Switch Theme" on:click={switchTheme} on:click={sayHello}>
    {#if mode==='light'}
    <MoonIcon />
    {:else if mode==='dark'}
    <SunIcon />
    {/if}
</button>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->