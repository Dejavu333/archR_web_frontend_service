<script>
    export let imgURL = '';
    export let from = '';
    export let message = '';
    export let time = '';
</script>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
<div class="message-box">

    <img src={imgURL} alt="Profile picture" class="profile-picture">

    <div class="message-content">
        <div class="message-header">
            <div class="name">
                {from}
            </div>

            <div class="star-checkbox">
                <input type="checkbox" id="star-1">
                <label for="star-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </label>
            </div>

        </div>
        <p class="message-line">
            {message}
        </p>
        <p class="message-line time">
            {time}
        </p>
    </div>
</div>
<!-------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------->
