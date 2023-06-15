<script lang="ts">
import {
    Svelvet,
    Node,
    ThemeToggle,
    Controls

} from 'svelvet';
import MyNode from './MyNode.svelte';

const width = 500;
const height = 500;
export let theme = "light"
function geci() {
	console.log("fasz")
}
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<Svelvet width="{width}" height="{height}" theme={theme} on:message={geci}>
    <!-- <ThemeToggle slot="toggle" main="light" alt="dark" /> -->
    <Node id="alpha" bgColor="red" label="Default Node"/>
    <MyNode />

        <!-- <Node --anchor-color="green" --anchor-width="20px" --anchor-radius="2px" />

		<Node --node-color="red" --node-border-radius="40px"/>
        <Node --node-border-color="black" /> -->
        <!-- <ThemeToggle slot="toggle" main="light" alt="custom-theme" /> -->
</Svelvet>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<style>
/* :root[svelvet-theme='custom-theme'] {

--node-color: hsl(225, 30%, 50%);

--node-border-color: hsl(225, 20%, 40%);

--node-selection-color: hsl(45, 90%, 60%);

--text-color: hsl(0, 0%, 100%);

--background-color: hsl(225, 20%, 27%);

--dot-color: hsl(225, 10%, 50%);

--accent-color: hsl(45, 90%, 60%);

--primary-color: hsl(225, 30%, 66%);

--edge-color: hsl(0, 0%, 100%);

--target-edge-color: hsl(225, 20%, 40%);

--anchor-color: hsl(45, 90%, 67%);

--anchor-border-color: hsl(45, 90%, 87%);

--anchor-connected: hsl(45, 90%, 100%);

--anchor-connected-border: hsl(225, 20%, 20%);

--anchor-connecting: hsl(225, 30%, 40%);

--anchor-connecting-border: hsl(0, 0%, 100%);

--anchor-hovering: hsl(225, 20%, 46%);

--anchor-hovering-border: hsl(0, 0%, 0%);

--minimap-background-color: hsl(225, 20%, 27%);

--minimap-node-color: hsl(225, 30%, 20%);

--controls-background-color: hsl(225, 20%, 27%);

--controls-text-color: hsl(0, 0%, 100%);

--theme-toggle-text-color: hsl(0, 0%, 100%);

--theme-toggle-color: hsl(225, 20%, 27%);
	} */
</style>
