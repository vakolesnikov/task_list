<template>
    <div class="title">{{title}}</div>
</template>

<script>
    export default {
        name: 'Title',

        props: {
            title: String,
        }
    }
</script>

<style>
    .title {
        margin-bottom: 25px;
        font-size: 28px;
        font-weight: 700;
    }
</style>