<template>
    <main>

        <h1>All available classes</h1>
        
        <div class="row mt-1" v-for="(section, i) in classes" :key="i" style="box-shadow: 0 -1px 0 0 #E0E0E0">
            <div class="col-12 col-lg-3 col-xl-2">
                <h3 class="mb-0">{{section.title}}</h3>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-auto" v-for="(table, t) in section" :key="t" :class="{'d-none': t === 'title'}">
                        <format-table v-if="t !== 'title'" :items="table" class="mb-0" />
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
import { classes } from '~/assets/data'

export default {

    head: {
        title: 'All'
    },
    
    data() {
        return {
            classes: classes
        }
    }

}
</script>
