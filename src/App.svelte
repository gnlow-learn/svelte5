<script lang="ts">
    let count = $state(0)
    
    const incr = () => {
        console.log(count++)
    }
</script>

<button onclick={incr}>
    Clicked {count} times
</button>
