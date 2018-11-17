<template>
    <div class="layout__wrapper" :class="{ 'show-grid': grid, __grid: grid}">
        <nuxt v-if="!$slots.default" />
        <slot></slot>
        <div class="layout__grid"><div class="layout__grid-button" :class="{ __active: grid }" v-on:click="$store.commit('toggleGrid')" /><br><span class="layout__grid-title">Grid</span></div>
    </div>
</template>


<script>
import FormatTable from '~/components/format-table'
export default {
    computed: {
        grid() {
            return this.$store.state.grid
        }
    }
}
</script>


<style lang="stylus">
.logo
    height: gu(5)
    margin-top: gu(1)
    margin-bottom: gu(2)
    display: block

.layout__wrapper
    min-height: 100vh
    max-width: 100vw
    &.__grid
        h1, h2, h3, h4, h5, h6
        p, ul, ol, table
            background-color: rgba(176, 113, 255, 0.15)

// Grid thumbler
.layout__grid
    position fixed
    top: gu(1)
    right: gu(1)
    font-family: var(--header-font)
    // color: gray
    font-size: 12px
    line-height: gu(1)
    text-align: center
    z-index: 99999999999999
    &:hover
        .layout__grid-title
            opacity: 1
.layout__grid-title
    position: relative
    top: 5px
    opacity: 0
    transition: opacity 0.4s ease
.layout__grid-button
    width: 44px
    height: 24px
    border-radius: 15px
    background: #444
    display: inline-block
    position: relative
    vertical-align: bottom
    margin-left: 2px
    &:after
        content: ''
        display: block
        width: 18px
        height: 18px
        border-radius: 10px
        background: #eee
        position: absolute
        left: 3px
        top: 3px
        z-index: 1
    &.__active
        background: blue
        background: #7313ff
        background: var(--color-link)
        &:after
            left: 22px

</style>