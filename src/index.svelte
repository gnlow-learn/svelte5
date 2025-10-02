<script lang="ts">
    let count = $state(0)
    
    const incr = () => {
        console.log(count++)
    }
</script>

<button class="p(10) m(10) r(10) bg(#ccc)" onclick={incr}>
    Clicked {count} times
</button>
