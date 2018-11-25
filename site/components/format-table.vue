<template>
<div class="my-1">

    <div class="format d-flex flex-wrap flex-lg-nowrap">
        <div class="d-flex format__rules flex-grow-1" :class="{ 'flex-lg-grow-0': example }">
            <div
                v-for="(item, x) in items"
                :key="x"
                :class="{
                    'text-right': item.align === 'right',
                    '__final': x === items.length-1
                }"
                class="format__cell text-nowrap flex-shrink-0"
            >
                <div class="format__header" v-if="x === 0">prop</div>
                <div class="format__header" v-if="x === 1">breakpoint</div>
                <div class="format__header" v-if="x === 2">value</div>
                <div class="format__header" v-if="x === 3">additional</div>
                <div v-if="item.text" class="format__text">{{item.text}}</div>
                <div
                    v-for="(rule, y) in item.items"
                    :key="y"
                    @click="interactive ? setValue(x, y) : null"
                    class="format__item"
                    :class="{__selected: value && value[x] === y, __selectable: interactive }"
                >
                    <code :class="{empty: rule === null, __selected: value && item.items.length > 1 && value[x] === y }">{{rule}}</code>
                </div>
            </div>
        </div>
        <div v-if="interactive && example" class="format__cell __result flex-grow-1">
            <div class="format__header __result">result</div>
            <div class="format__example">
                <div class="mt-0 mb-01"><strong><code class="p-0">{{getValue('.')}}</code></strong></div>
                <div :class="wrapper.class + (wrapper.value ? getValue(' ') : '')" >
                    <div v-for="(item, i) in example" :key="i" :class="item.class + (item.value ? getValue(' ') : '')" >
                        {{ item.value ? getValue('.') : null }}
                        <br v-if="item.value && item.text" />
                        {{item.text}}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-01" v-if="interactive && example">
        <source-code v-if="example" class="m-0" :height="source.split('\n').length" :source="source"><code class="html"></code></source-code>
    </div>

</div>
</template>


<script>
export default {
    props: {
        items: Array,
        interactive: Boolean,
        wrapper: {
            type: Object,
            default: () => {
                return {class: ''}
            }
        },
        initial: Array,
        example: Array
    },
    data(vm) {
        return {
            value: vm.initial ? vm.initial : new Array(vm.items.length).fill(0)
        }
    },
    computed: {
        stringValue() {
            return this.value.map((val, i) => this.items[i].items[val]).join('').slice(1)
        },
        source() {
            if (!this.interactive) return null;
            var wrapperClass = this.wrapper.class + (this.wrapper.value ? this.getValue(' ') : '')
            var open = wrapperClass ? `<div class="${wrapperClass}">\n` : ''
            var close = wrapperClass ? `</div>` : ''
            var tab = wrapperClass ? '    ' : ''
            
            return open + this.example.map((item, i) => {
                let text = item.value ? this.getValue('.') : ''
                if (item.text) {
                    if (item.value) text += '<br>'
                    text += item.text
                }
                let className = item.class + (item.value ? this.getValue(' ') : '')
                return `${tab}<div class="${className}">${text}</div>`
            }).join('\n') + close
        }
    },
    methods: {
        setValue(x, y) {
            this.value[x] = y
            this.value = [].concat(this.value)
        },
        getValue(pre) {
            return pre + this.stringValue
        }
    }
}
</script>


<style lang="stylus">
@import '~~@@/lib/setka/index.styl'

.format
    border-spacing: 0
    border-radius: 4px
    box-shadow: 0 0 0 1px #e0e0e0
    margin-top: 0
    margin-bottom: 0

    code
        color: var(--color-text)
        display: inline-block
        padding 0 6px 0 6px
        &.empty
            vertical-align: baseline
            border-radius: 4px
            display: inline-block
            line-height: 1.2em
            &:after
                display: inline-block
                content: '[all]'
                margin-left: -0.1em

.format__cell
    vertical-align: top
    padding 0 0 gu(1) 0
    border-right: 1px solid #e2e2e2
    &:last-child
        border none
    &.__final
        flex-grow: 1
    &.__result
        background: rgba(0,0,0,0.02)
        box-shadow: inset 1px 0 0 0 #e2e2e2
        +media-down('md')
            width: 100%
            box-shadow: inset 0 1px 0 0 #e2e2e2

.format__rules
    +media-up('lg')
        flex-basis: 350px

.format__header
    font-size: 12px
    color: #888
    font-weight: normal
    font-family: var(--header-font)
    padding 0 6px 
    &:last-child
        border none
    &.__result
        padding-left: gu(1)

.format__item
    position relative
    &.__selectable
        cursor: pointer
        &:hover
            code
                color: var(--color-link)
        &.__selected
            box-shadow: 0 1px 0 0 var(--color-link), 0 -1px 0 0 var(--color-link)
            code
                color: var(--color-link)
            .format__cell:first-child > &
                box-shadow: 0 1px 0 0 var(--color-link), 0 -1px 0 0 var(--color-link), -1px 0 0 0 var(--color-link)
            .format__cell:last-child > &
                box-shadow: 0 1px 0 0 var(--color-link), 0 -1px 0 0 var(--color-link), 1px 0 0 0 var(--color-link)

.format__example
    padding: 0 gu(1) 0 gu(1)

.format__text
    font-size: 0.8em
    color: #888

</style>
