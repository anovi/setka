<template>
    <div class="setka" :class="{__double: double, __letter: letter}">
        <div class="grid-5 setka__letters grid-gap-0">
            <div v-for="(symbol, l) in setka" class="setka__letter" :class="{ col: letter }" :key="l">
                <div v-for="(row, r) in symbol" :class="{outline}" class="grid-gap-0 setka__letter-row" :key="r">
                    <div v-for="(color, i) in row" class="setka__letter-pixel" :class="{__color: color}" :key="i"></div>
                    <div v-if="l !== setka.length - 1" class="setka__letter-pixel" />
                </div>
            </div>
        </div>
    </div>    
</template>


<style lang="stylus">
.setka
    max-width: gu(26)
    height: gu(7)
    &.__letter
        max-width: gu(4.3)
    &.__double
        +media-up('lg')
            height: gu(14)
            max-width: gu(52)
            &.__letter
                max-width: gu(8.32)
.setka__letters
    height: 100%

.setka__letter-row
    height: (100 / 7)%
    display: grid
    grid-template-columns: repeat(5, 1fr)

    .setka.__letter &
        grid-template-columns: repeat(4, 1fr)

.setka__letter-pixel
    height: 100%
    &.__color
        background-color: var(--color-logo)

.outline .setka__letter-pixel
    outline: 2px solid var(--color-code)
    outline-offset: -1px
</style>


<script>
import cloneDeep from 'lodash/cloneDeep'
const EMPTY = [[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
], [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
], [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
], [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
], [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]]
const FULL = [[
    [0,1,1,1],
    [1,0,0,0],
    [1,0,0,0],
    [0,1,1,0],
    [0,0,0,1],
    [0,0,0,1],
    [1,1,1,0]
], [
    [0,0,0,0],
    [0,0,0,0],
    [0,1,1,0],
    [1,0,0,1],
    [1,1,1,1],
    [1,0,0,0],
    [0,1,1,1]
], [
    [0,1,0,0],
    [0,1,0,0],
    [1,1,1,1],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,0,1,1]
], [
    [1,0,0,0],
    [1,0,0,0],
    [1,0,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,1,0],
    [1,0,0,1]
], [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [1,0,0,1,0],
    [1,0,0,1,0],
    [1,0,0,1,0],
    [0,1,1,1,1]
]]

export default {
    props: {
        double: Boolean,
        letter: Boolean,
        animation: Number
    },
    data(vm) {
        let content = vm.animation === 2 ? EMPTY : FULL
        if (vm.letter) content = [content[0]]
        return {
            outline: vm.animation === 2,
            setka: cloneDeep(content)
        }
    },
    mounted() {
        if (this.animation) this['animate' + this.animation]()
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    },
    methods: {
        animate1() {
            const initial = cloneDeep(this.setka)
            const prob = 0.01
            const fps = 12
            this.timer = setInterval(() => {
                this.setka.forEach((letter, l) => {
                    letter.forEach((row, r) => {
                        row.forEach((color, i)=> {
                            if (Math.random() <= prob) {
                                var initialColor = initial[l][r][i]
                                row[i] = color === 1 ? 0 : 1
                                setTimeout(() => {
                                    row[i] = initialColor
                                    this.setka = [].concat(this.setka)
                                }, 200)
                            }
                        });
                    });
                });
                this.setka = [].concat(this.setka)
            }, (1000 / fps));
            setTimeout(() => {
                this.outline = false
                if (this.timer) {
                    clearInterval(this.timer)
                }
            }, 2000)
        },
        animate2() {
            const time = 1200
            for (let r = 0; r < 7; r++) {
                this.setka.forEach((letter, l) => {
                    const row = letter[r]
                    row.forEach((color, i)=> {
                        var initialColor = FULL[l][r][i]
                        if (initialColor === 1) {
                            setTimeout(() => {
                                row[i] = initialColor
                                this.setka = [].concat(this.setka)
                            }, (r * (time/7)) + (l * (time/7/5)) + (i * (time/7/5/5)))
                        }
                    });

                });
            }
            setTimeout(() => {
                this.outline = false
            }, (time) + 400)
        }
    }
}
</script>
