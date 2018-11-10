<template>
    <table class="format">
        <tbody>
            <tr>
                <td v-for="(item, i) in items" :key="i" :class="{'text-right': item.align === 'right'}">
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
    td
        vertical-align: top
        padding gu(1) 10px 
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
            &:after
                display: inline-block
                content: 'none'
                font-size: 0.8em
                padding: 0 3px
</style>
