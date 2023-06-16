<script>
import { S } from '../../utility.js';

function switchToGridView() {
    S('.grid-view').classList.add('active');
    S('.list-view').classList.remove('active');
    S('.project-boxes').classList.remove('jsListView');
    S('.project-boxes').add('jsGridView');
}

function switchToListView() {
    S('.grid-view').classList.remove('active');
    S('.list-view').classList.add('active');
    S('.project-boxes').classList.remove('jsGridView');
    S('.project-boxes').classList.add('jsListView');
}

</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<div class="view-actions">
    <button class="view-btn list-view" title="List View" on:click={switchToListView}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-list">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    </button>

    <button class="view-btn grid-view active" title="Grid View" on:click={switchToGridView}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-grid">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
        </svg>
    </button>
</div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->