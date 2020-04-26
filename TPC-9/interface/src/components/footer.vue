<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return{
            copyright: 'PRC-Enterprises'
        }
    }
};
</script>

<style scoped>

footer{
    background: black;
    padding: 6px;
    background-size: cover;
}
p{
    color: lightyellow;
    text-align: center;
}

</style>