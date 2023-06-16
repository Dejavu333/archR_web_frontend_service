<script>
import {S} from '../../utility.js';

document.addEventListener('DOMContentLoaded', function() {
    S('.messages-close').addEventListener('click', function() {
        S('.messages-section').add('show');
    });

    S('.messages-close').addEventListener('click', function() {
        S('.messages-section').classList.remove('show');
    });
});
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->

<button class="messages-close">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-x-circle">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
</button>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
