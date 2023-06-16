<script lang="ts">
    import ProjectBox from "./ProjectBox.svelte";
    type Project = {
        date: string;
        projectTitle: string;
        projectPhase: string;
        progressPercentage: number;
        daysCountTillDeadline: number;
        participants: string[];
    }

    let projects:Array<Project> 
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<div class="project-boxes jsGridView">
    {#each projects as p}
         <ProjectBox  date = {p.date} projectTitle = {p.projectTitle} projectPhase = {p.projectPhase} progressPercentage = {p.progressPercentage} daysCountTillDeadline = {p.daysCountTillDeadline} participants = {p.participants} />
    {/each}
   
</div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
