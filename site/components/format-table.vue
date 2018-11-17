<template>
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
                <td v-for="(item, i) in items" :key="i" :class="{'text-right': item.align === 'right'}">
                    <div v-if="item.text" class="format-text">{{item.text}}</div>
                    <div v-for="(rule, i) in item.items" :key="i">
                        <code :class="{empty: rule === null}">{{rule}}</code>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>


<script>
export default {
    props: {
        items: Array
    }
}
</script>


<style lang="stylus">
@import '~~@@/lib/@anovi/invisible/index.styl'

.format
    border-spacing: 0
    border-radius: 4px
    box-shadow: inset 0 0 0 1px #aaa
    margin-top: 0
    th
        font-size: 12px
        color: #888
        font-weight: normal
        font-family: var(--header-font)
        padding 0 6px 
        // background: rgba(#e3ccff, 0.3)
        border-right: 1px solid #E2CDFE
        &:last-child
            border none
    td
        vertical-align: top
        padding 0 6px gu(1) 6px
        border-right: 1px solid #E2CDFE
        &:first-child
            padding-left: 10px
        &:last-child
            border none
            padding-right: 10px
    code
        color: #444
        &.empty
            background: #e3ccff
            vertical-align: bottom
            border-radius: 4px
            display: inline-block
            &:after
                display: inline-block
                content: 'none'
                padding: 0 3px

.format-text
    font-size: 0.8em
    color: #888
</style>