<template>
    <div class="headertitle">
        <h1>{{headerTitle}}</h1>
    </div>
</template>

<script>

    import { mapState, mapMutations, mapActions } from 'vuex';

    export default {
        name: 'Header',
        computed: {
            ...mapState([
                'headerTitle'
            ]),
        },
        methods: {

        }
    }
</script>
<style scoped>
    .headertitle{
        display: block;
        background-color: #747d8c;
        text-align: center;
    },
    h1 {
        margin: 0px;
        padding: 20px;

    }
</style>
