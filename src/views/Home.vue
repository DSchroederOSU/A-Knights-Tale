<template>
  <div class="home">
    <Header />  <!-- Add this -->
    <ControlPanel />  <!-- Add this -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import ControlPanel from '@/components/ControlPanel.vue'

export default {
    name: 'Home',
    data() {
        return {
            newLink: ''
        }
    },
    components: {
        ControlPanel,
        Header
    },
    computed: {
        ...mapState([
            'title',
            'links'
        ]),
        // Other properties
    },
    methods: {
        ...mapMutations([
            'ADD_LINK'
        ]),
        ...mapActions([
            'removeLink'
        ]),
        addLink: function() {
            this.ADD_LINK(this.newLink)
            this.newLink = '';
        },
        removeLinks: function(link) {    // Add this
            this.removeLink(link)
        }
    }
}
</script>
