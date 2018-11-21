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
@import '~~@@/lib/setka/index.styl'

.format
    border-spacing: 0
    border-radius: 4px
    box-shadow: inset 0 0 0 1px #e0e0e0
    margin-top: 0
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
        padding 0 6px gu(1) 6px
        border-right: 1px solid #e2e2e2
        &:first-child
            padding-left: 10px
        &:last-child
            border none
            padding-right: 10px
    code
        color: var(--color-text)
        &.empty
            background: rgba(0,0,0,0.08)
            vertical-align: bottom
            border-radius: 4px
            padding: 0 0.15em
            display: inline-block
            &:after
                display: inline-block
                content: 'none'
                padding: 0 3px
                color: #444

.format-text
    font-size: 0.8em
    color: #888
</style>
