<template>
<div class="source">
    <div class="source__tabs" v-if="$slots.stylus">
        <a class="source__tab" :class="{ __active: tab === 0 }" v-on:click="tab = 0">CSS</a>
        <a class="source__tab" :class="{ __active: tab === 1 }" v-on:click="tab = 1">Stylus</a>
    </div>
<pre><div :class="{'deactive-code':tab === 1}"><slot></slot></div><div :class="{'deactive-code':tab === 0}"><slot name="stylus"></slot></div></pre>
</div>
</template>


<script>
export default {
    data() {
        return {
            tab: 0
        }
    }
}
</script>

<style lang="stylus">
@import '~~@@/lib/@anovi/invisible/index.styl'

.source
    margin-top: gu(2)
    background: rgba(0,0,0,0.03)
    box-shadow: inset 0 0 0 1px #eeeeee
    border-radius: 4px
    pre
        // clearfix()
        background: none
        box-shadow: none
        margin-top: 0
        display: flex
.source__tabs
    padding: gu(1)
.source__tab
    cursor: pointer
    display: inline-block
    margin-right: 5px
    text-transform: uppercase
    font-size: 0.8em
    vertical-align: bottom
    &.__active
        // font-weight: bold
        color: black
        box-shadow: inset 0 -2px 0 0 black
.deactive-code
    visibility: hidden
    width: 0
</style>