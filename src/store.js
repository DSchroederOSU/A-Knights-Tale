import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerTitle: `Welcome to A Knight's Tale`,
        enemyHealth: 100,
        playerHealth: 100,
        playerMana: 100,
        links: [
            'http://google.com',
            'http://coursetro.com',
            'http://youtube.com'
        ]
    },
    getters: {
        getEnemyHealth: state => {
            return state.enemyHealth
        },
        getPlayerHealth: state => {
            return state.playerHealth
        },
        getPlayerMana: state => {
            return state.playerMana
        }
    },
    mutations: {
        DAMAGE_ENEMY: (state, damage) => {
            state.enemyHealth -= damage;
        },
        REDUCE_PLAYER_MANA: (state, cost) => {
            state.playerMana -= cost;
        }
    },
    actions: {
        enemyDamage ({ commit }, amount) {
            commit('DAMAGE_ENEMY', amount)
        },
        castMagic({ commit }, data) {
            console.log(data);

            commit('DAMAGE_ENEMY', data.damage);
            commit('REDUCE_PLAYER_MANA', data.cost);
        },
    }
})
