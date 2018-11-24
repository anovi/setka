import Vue from 'vue'

Vue.mixin({
	methods: {
	    buildTOC () {
            var headers = this.$el.querySelectorAll('h2, h3')
            var items = Array.prototype.slice.call(headers)
                .filter((elem) => elem.getAttribute('id'))
                .map((elem) => {
                return {
                    level: Number.parseInt(elem.tagName.slice(1)),
                    text: elem.textContent,
                    link: elem.getAttribute('id')
                }
            })
            this.$store.commit('buildTOC', items)
        }
	}
})