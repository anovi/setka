<template>
<div class="source">
    <div class="source__tabs" v-if="$slots.stylus">
        <a class="source__tab" :class="{ __active: tab === 0 }" v-on:click="tab = 0">CSS</a>
        <a class="source__tab" :class="{ __active: tab === 1 }" v-on:click="tab = 1">Stylus</a>
    </div>
    <button class="source__copy" type="button" @click="doCopy">Copy</button>
<pre v-highlightjs="source" :style="{ height: `calc(var(--grid-unit) * ${height} * var(--grid-steps))` }"><div :class="{'deactive-code':tab === 1}"><slot></slot></div><div :class="{'deactive-code':tab === 0}"><slot name="stylus"></slot></div></pre>
</div>
</template>


<script>
'use strict';
import Vue from 'vue'
var hljs = require('highlight.js/lib/highlight.js');
hljs.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

// vue-highlightjs
var vueHighlightJS = {};
vueHighlightJS.install = function install(Vue) {
    Vue.directive('highlightjs', {
        deep: true,
        bind: function bind(el, binding) {
            // on first bind, highlight all targets
            var targets = el.querySelectorAll('code');
            var target;
            var i;

            for (i = 0; i < targets.length; i += 1) {
                target = targets[i];

                if (typeof binding.value === 'string') {
                    // if a value is directly assigned to the directive, use this
                    // instead of the element content.
                    target.textContent = binding.value;
                }

                hljs.highlightBlock(target);
            }
        },
        componentUpdated: function componentUpdated(el, binding) {
            // after an update, re-fill the content and then highlight
            var targets = el.querySelectorAll('code');
            var target;
            var i;

            for (i = 0; i < targets.length; i += 1) {
                target = targets[i];
                if (typeof binding.value === 'string') {
                    target.textContent = binding.value;
                    hljs.highlightBlock(target);
                }
            }
        },
    });
};

Vue.use(vueHighlightJS);

export default {
    data() {
        return {
            tab: 0
        }
    },
    props: {
        height: Number,
        source: String
    },
    methods: {
        doCopy() {
            var text = this.$slots[this.tab === 1 ? 'stylus' : 'default'][0].elm.textContent;
            this.$copyText(text);
        }
    }
}
</script>


<style lang="stylus">
@import '~~@@/lib/setka/index.styl'

.source
    margin-top: gu(2)
    margin-bottom: gu(2)
    background: rgba(0,0,0,0.02)
    box-shadow: 0 0 0 1px #ededed
    border-radius: 4px
    position: relative
    pre
        // clearfix()
        box-sizing: content-box
        background: none
        box-shadow: none
        margin-top: 0
        margin-bottom: 0
        display: flex
        overflow-x: auto
        overflow-y: hidden
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
    overflow: hidden
    width: 0
.source__copy
    position: absolute
    right: 5px
    top: 5px
    outline: none
    border: none
    background: rgba(0,0,0,0)
    border-radius: 3px
    line-height: gu(2)
    font-size: 14px
    cursor: pointer
    transition: all 0.1s ease
    +media-down('xs')
        display: none
    &:hover
        background: var(--color-link)
        color: white
    &:active
        opacity: 0.4
</style>