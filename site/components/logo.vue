<template>
    <div class="setka" :class="{__double: double}">
        <div class="row no-gutters">
            <div v-for="(letter, i) in setka" class="col setka-letter mr-01" :key="i">
                <div v-for="(row, i) in letter" class="row no-gutters setka-letter-row" :key="i">
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
</style>

<script>
import cloneDeep from 'lodash/cloneDeep'

export default {
    props: {
        double: Boolean
    },
    data() {
        return {
            setka: [[
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
        }
    },
    mounted() {
        this.animate()
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    },
    methods: {
        animate() {
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
                                }, (1000 / fps))
                            }
                        });
                    });
                });
                this.setka = [].concat(this.setka)
            }, (1000 / fps));
            setTimeout(() => {
                if (this.timer) {
                    clearInterval(this.timer)
                }
                this.setka = initial
            }, 2000)
        }
    }
}
</script>
