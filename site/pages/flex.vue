<template>
    <main class="container">

        <h1>Flex</h1>

        <div class="row">
            <div class="col-12">
                <h3>For flex container</h3>
            </div>

            <div class="col-auto">
                Direction
                <format-table :items="flexOrder" />
            </div>

            <div class="col-auto">
                Wrap
                <format-table :items="flexWrap" />
            </div>

            <div class="col-auto">
                Justify content
                <format-table :items="flexJustify" />
            </div>

            <div class="col-auto">
                Align items
                <format-table :items="flexAlign" />
            </div>

            <div class="col-auto">
                Align content
                <format-table :items="flexAlignContent" />
            </div>

            <div class="col-12">
                <h3>For items in flex container</h3>
            </div>

            <div class="col-auto">
                Fill
                <format-table :items="flexFill" />
            </div>

            <div class="col-auto">
                Grow and shrink
                <format-table :items="flexGrow" />
            </div>

            <div class="col-auto">
                Align self
                <format-table :items="flexAlignSelf" />
            </div>
            
        </div>


    </main>
</template>


<script>
export default {
    data() {
        return {
            flexOrder: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['row','column','row-reverse','column-reverse'] }
            ],
            flexWrap: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['wrap','nowrap','wrap-reverse'] }
            ],
            flexFill: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['fill'] }
            ],
            flexGrow: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['grow-0', 'grow-1', 'shrink-0', 'shrink-1'] }
            ],
            flexJustify: [
                { items: ['.justify-content-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: [ 'start','end','center','between','around'] }
            ],
            flexAlign: [
                { items: ['.align-items-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['start','end','center','baseline','stretch'] }
            ],
            flexAlignContent: [
                { items: ['.align-content-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['start','end','center','between','around','stretch'] }
            ],
            flexAlignSelf: [
                { items: ['.align-self-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['auto','start','end','center','baseline','stretch'] }
            ]
        }
    }
}
</script>
