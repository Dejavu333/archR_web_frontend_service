<script>
export let inProductionCount = 0;
export let underDevelopmentCount = 0;
export let totalProjectsCount = 0;
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->

<div class="projects-status">
    <div class="item-status">
        <span class="status-number">{inProductionCount}</span>
        <span class="status-type">In Production</span>
    </div>
    <div class="item-status">
        <span class="status-number">{underDevelopmentCount}</span>
        <span class="status-type">In Development</span>
    </div>
    <div class="item-status">
        <span class="status-number">{totalProjectsCount}</span>
        <span class="status-type">Total Projects</span>
    </div>
</div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
