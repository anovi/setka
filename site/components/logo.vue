<template>
    <div class="setka" :class="{__double: double}">
        <div class="row no-gutters">
            <div v-for="(letter, i) in setka" class="col setka-letter mr-01" :key="i">
                <div v-for="(row, i) in letter" :class="{outline}" class="row no-gutters setka-letter-row" :key="i">
                    <div v-for="(color, i) in row" class="col setka-letter-pixel" :class="{__color: color, __double: double}" :key="i"></div>
                </div>
            </div>
        </div>
    </div>    
</template>

<style lang="stylus">
.setka
    width: gu(26)
    height: gu(7)
    +media-up('lg')
      height: gu(14)
      width: gu(52)
.setka-letter-pixel
    height: gu(1)
    +media-up('lg')
        height: gu(2)
    &.__color
        background-color: var(--color-logo)

.outline .setka-letter-pixel
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
        animation: Number
    },
    data(vm) {
        return {
            outline: vm.animation === 2,
            setka: vm.animation === 2 ? cloneDeep(EMPTY) : FULL
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
                            }, (r * (time/7)) + (l * (time/7/5)) + (i * 20))
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
