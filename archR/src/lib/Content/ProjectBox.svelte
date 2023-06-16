<script lang="ts">
    export let projectTitle = '';
    export let projectPhase = '';
    export let progressPercentage:number = 0;
    export let participants = [];
    export let daysCountTillDeadline:number = 0;
    export let date = '';

</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<div class="project-box-wrapper">
    <div class="project-box" style="background-color: #e9e7fd;">
        <div class="project-box-header">
            <span>{date}</span>
            <div class="more-wrapper">
                <button class="project-btn-more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-more-vertical">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="project-box-content-header">
            <p class="box-content-header">{projectTitle}</p>
            <p class="box-content-subheader">{projectPhase}</p>
        </div>
        <div class="box-progress-wrapper">
            <p class="box-progress-header">Progress</p>
            <div class="box-progress-bar">
                <span class="box-progress" style="width: {progressPercentage}%; background-color: #4f3ff0"></span>
            </div>
            <p class="box-progress-percentage">{progressPercentage}%</p>
        </div>
        <div class="project-box-footer">
            <div class="participants">
                <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                    alt="participant">
                <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                    alt="participant">
                <button class="add-participant" style="color: #4f3ff0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                        stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </button>
            </div>
            <div class="days-left" style="color: #4f3ff0;">
                {daysCountTillDeadline} Days Left
            </div>
        </div>
    </div>
</div>