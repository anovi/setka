<template>
    <main class="">

        <h1>Flex</h1>

        <h2 class="mt-0">For flex container</h2>
        
        <div class="row">
            <div class="col-12 mt-3">
                <h3 class="mt-0">
                    Direction
                </h3>
                <format-table :items="flexOrder" @value="(val) => flexOrderValue = val" selectable>
                    <h4 class="mt-0 mb-01"><code>{{`.${flexOrderValue}`}}</code></h4>
                    <div class="d-flex" :class="flexOrderValue">
                        <div class="d-inline-block example p-01">Item 1</div>
                        <div class="d-inline-block example p-01">Item 2</div>
                        <div class="d-inline-block example p-01">Item 3</div>
                        <div class="d-inline-block example p-01">Item 4</div>
                    </div>
                </format-table>

                <pre v-highlightjs="sourcecode"><code class="html"></code></pre>
            </div>

            <div class="col-12 mt-3">
                <h3 class="mt-0">
                    Wrap
                </h3>
                <format-table :items="flexWrap" @value="(val) => flexWrapValue = val" selectable>
                    <h4 class="mt-0 mb-01"><code>{{`.${flexWrapValue}`}}</code></h4>
                    <div class="d-flex" :class="flexWrapValue">
                        <div class="example w-25 p-01">Item 1</div>
                        <div class="example w-25 p-01">Item 2</div>
                        <div class="example w-25 p-01">Item 3</div>
                        <div class="example w-25 p-01">Item 4</div>
                        <div class="example w-25 p-01">Item 5</div>
                        <div class="example w-25 p-01">Item 6</div>
                        <div class="example w-25 p-01">Item 7</div>
                    </div>
                </format-table>
            </div>

            <div class="col-12 mt-3">
                <h3 class="mt-0">
                    Justify content
                </h3>
                <format-table :items="flexJustify" @value="(val) => flexJustifyValue = val" selectable>
                    <h4 class="mt-0 mb-01"><code>{{`.${flexJustifyValue}`}}</code></h4>
                    <div class="d-flex" :class="flexJustifyValue">
                        <div class="example p-01">Item 1</div>
                        <div class="example p-01">Item 2</div>
                        <div class="example p-01">Item 3</div>
                        <!-- <div class="example w-25 p-01">Item 4</div>
                        <div class="example w-25 p-01">Item 5</div>
                        <div class="example w-25 p-01">Item 6</div>
                        <div class="example w-25 p-01">Item 7</div> -->
                    </div>
                </format-table>
            </div>

            <div class="col-auto">
                <p class="mt-0">
                    Align items
                </p>
                <format-table :items="flexAlign" />
            </div>

            <div class="col-auto">
                <p class="mt-0">
                    Align content
                </p>
                <format-table :items="flexAlignContent" />
            </div>

            <div class="col-12">
                <h3>For items in flex container</h3>
            </div>

            <div class="col-auto">
                <p class="mt-0">
                    Fill
                </p>
                <format-table :items="flexFill" />
            </div>

            <div class="col-auto">
                <p class="mt-0">
                    Grow and shrink
                </p>
                <format-table :items="flexGrow" />
            </div>

            <div class="col-auto">
                <p class="mt-0">
                    Align self
                </p>
                <format-table :items="flexAlignSelf" />
            </div>
            
        </div>


    </main>
</template>


<script>
export default {
    data() {
        return {
            sourcecode: `<div class="d-flex ${this.flexOrderValue}">
    <div class="d-inline-block example p-01">Item 1</div>
    <div class="d-inline-block example p-01">Item 2</div>
    <div class="d-inline-block example p-01">Item 3</div>
    <div class="d-inline-block example p-01">Item 4</div>
</div>`,
            flexOrder: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['row','column','row-reverse','column-reverse'] }
            ],
            flexOrderExample: [
                {class: 'd-inline-block example p-01', text: 'Item 1'},
                {class: 'd-inline-block example p-01', text: 'Item 2'},
                {class: 'd-inline-block example p-01', text: 'Item 3'},
                {class: 'd-inline-block example p-01', text: 'Item 4'}
            ],
            flexOrderValue: 'flex-row',
            flexWrap: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['wrap','nowrap','wrap-reverse'] }
            ],
            flexWrapValue: 'flex-wrap',
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
            flexJustifyValue: 'justify-content-start',
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
