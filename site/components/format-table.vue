<template>
<div>
    <div class="row">
        <div class="col-12 col-lg-6 col-xl-5">
            <table class="format">
                <thead>
                    <tr>
                        <th>property</th>
                        <th v-if="items.length > 1">breakpoint</th>
                        <th v-if="items.length > 2">value</th>
                        <th v-if="items.length > 3">additional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for="(item, x) in items" :key="x" :class="{'text-right': item.align === 'right'}">
                            <div v-if="item.text" class="format__text">{{item.text}}</div>
                            <div
                                v-for="(rule, y) in item.items"
                                :key="y"
                                @click="setValue(x, y)"
                                class="format__item"
                                :class="{__selected: resValue && item.items.length > 1 && resValue[x] === y, __selectable: item.items.length > 1 }"
                            >
                                <code :class="{empty: rule === null, __selected: resValue && item.items.length > 1 && resValue[x] === y }">{{rule}}</code>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12 col-lg-6 col-xl-7" v-if="$slots.default && selectable">
            <!-- <h3 class="my-01"><code>{{getValue('.')}}</code></h3> -->
            <!-- <div v-for="(item, i) in example" :key="i" :class="item.class + (item.value ? getValue(' ') : '')" >{{ item.value ? getValue('.') : item.text }}</div> -->
            <div class="format__example">
                <slot></slot>
            </div>
        </div>
    </div>
    <!-- <pre v-if="this.example"><code>{{source}}</code></pre> -->
</div>
</template>


<script>
export default {
    props: {
        items: Array,
        selectable: Boolean,
        initial: Array,
    },
    data(vm) {
        return {
            value: vm.initial ? vm.initial : new Array(vm.items.length).fill(0)
        }
    },
    watch: {
        stringValue(val) {
            this.$emit('value', val)
        }
    },
    computed: {
        resValue() {
            if (!this.selectable) return null
            return (this.value == null) ? new Array(this.items.length).fill(0) : this.value
        },
        source() {
            return this.example.map((item, i) => {
                var text = item.value ? this.getValue('.') : item.text
                var className = item.class + (item.value ? this.getValue(' ') : '')
                return `<div class="${className}">${text}</div>\n`
            }).join('')
        },
        stringValue() {
            return this.value.map((val, i) => this.items[i].items[val]).join('').slice(1)
        }
    },
    methods: {
        setValue(x, y) {
            this.value[x] = y
            this.value = [].concat(this.value)
        },
        getValue(pre) {
            var res = pre + this.value.map((val, i) => this.items[i].items[val]).join('').slice(1)
            return res
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
    th
        font-size: 12px
        color: #888
        font-weight: normal
        font-family: var(--header-font)
        padding 0 6px 
        border-right: 1px solid #e2e2e2
        &:last-child
            border none
    td
        vertical-align: top
        padding 0 0 gu(1) 0
        border-right: 1px solid #e2e2e2
        // &:first-child
            // padding-left: 10px
        &:last-child
            border none
            // padding-right: 10px
    code
        color: var(--color-text)
        display: inline-block
        padding 0 6px 0 6px
        &.empty
            // background: rgba(0,0,0,0.08)
            vertical-align: baseline
            border-radius: 4px
            // padding: 0 0.15em
            display: inline-block
            line-height: 1.2em
            &:after
                display: inline-block
                content: 'none'
                color: white
                padding: 0 0.35em
                margin-left: -0.1em
                // color: rgba(0,0,0,0.6)
                background: rgba(0,0,0,0.6)
                border-radius: 40px
                -webkit-font-smoothing: antialiased
        // &.__selected
        //     color: black
        //     &:after
        //         color: black

.format__item
    &.__selectable
        cursor: pointer
    &.__selected
        background rgba(#fd3700, 0.1)
        box-shadow: 0 0 0 1px rgba(#fd3700, 0.52)
        // var(--color-code)

.format__example
    border-radius: 4px
    box-shadow: 0 0 0 1px #e0e0e0
    overflow auto
    padding: gu(1)
    // margin-right: calc(var(--grid-gutter-width) / 2)

.format__text
    font-size: 0.8em
    color: #888

</style>
