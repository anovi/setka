<template>
    <component :is="tag" :id="name"><slot></slot><a v-if="name" :href="'#' + name"></a></component>
</template>

<script>
export default {
    props: {
        level: {
            type: Number,
            required: true
        },
        name: String
    },
    computed: {
        tag() {
            return `h${this.level}`
        }
    }
}
</script>
