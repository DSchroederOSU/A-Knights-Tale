<template>
    <div class="header">
        <div class="row">
            <div class="col-md-3">
                <p>Enemy Health:{{getEnemyHealth}}</p>
                <div class="progress w-100">
                    <div id="enemyhealth" class="progress-bar bg-success" role="progressbar"
                         :style="{ width: enemyHealthWidth}" :aria-valuenow="getEnemyHealth" aria-valuemin="0" aria-valuemax="100"></div>
                    <div id="enemydamage" class="progress-bar bg-danger" role="progressbar"
                         :style="{ width: enemyDamageWidth}" :aria-valuenow="enemyDamageValue" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-danger" v-on:click="melee(10)">Melee</button>
                <button type="button" class="btn btn-success">Ranged</button>
                <button type="button" class="btn btn-primary" v-on:click="magic({damage: 15, cost: 10})">Magic</button>
            </div>
            <div class="col-md-3">
                <p>Player Health:{{getPlayerHealth}}</p>
                <p>Player Mana:{{getPlayerMana}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        name: 'ControlPanel',
        computed: {
            enemyHealthWidth(){
                return this.getEnemyHealth+'%';
            },
            enemyDamageValue() {
                let difference = parseInt(100-this.getEnemyHealth);
                return (difference <= 100) ?  difference : 100;
            },
            enemyDamageWidth(){
                let difference = parseInt(100-this.getEnemyHealth);
                return (difference <= 100) ?  difference+'%' : 100+'%';
            },
            ...mapGetters([
                'getEnemyHealth',
                'getPlayerHealth',
                'getPlayerMana'
            ])
        },
        methods: {
            ...mapMutations([
                'DAMAGE_ENEMY'
            ]),
            ...mapActions([
                'enemyDamage',
                'castMagic'
            ]),
            melee: function(amount) {
                this.enemyDamage(amount);
            },
            magic: function(data) {
                this.castMagic(data);
            }
        }
    }
</script>
<style scoped>
    .header{
        display: block;
        text-align: center;
    }
    h1 {
        margin: 0;
        padding: 20px;

    }
</style>
