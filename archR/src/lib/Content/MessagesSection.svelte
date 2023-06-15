<script>
import MessageBox from "./MessageBox.svelte";
import MessagesCloseButton from "./MessagesCloseButton.svelte";
import SectionHeader from "./SectionHeader.svelte";
</script>

<div class="messages-section">
    <MessagesCloseButton />
    <SectionHeader sectionName="Messages" />

    <div class="messages">
        <MessageBox imgURL="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            from="Stephanie"
            message="I got your first assignment. It was quite good. 🥳 We can continue with the next assignment."
            time="Dec, 12" />

        <MessageBox imgURL="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            from="Mark"
            message="I got your first assignment. It was quite good. 🥳 We can continue with the next assignment."
            time="Dec, 12" />

        <MessageBox imgURL="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            from="Jessica"
            message="I am really impressed! Can't wait to see the final result."
            time="Dec, 11" />
    </div>
</div>
