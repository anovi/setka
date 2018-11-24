<template>
    <main class="">

        <h1>Flex</h1>

        <Header :level=2 name="flex-container" class="mt-0">Flex container's classes</Header>
        
        <div class="row">
            <div class="col-12 mt-3">
                <Header :level=3 name="direction" class="mt-0">
                    Direction
                </Header>
                <format-table :items="flexOrder" :wrapper="{class: 'd-flex', value: true}" :example="flexOrderExample" selectable />
            </div>

            <div class="col-12 mt-3">
                <Header :level=3 name="wrap" class="mt-0">
                    Wrap
                </Header>
                <format-table :items="flexWrap" :example="flexWrapExample" :wrapper="{class: 'd-flex', value: true}" selectable />
            </div>

            <div class="col-12 mt-3">
                <Header :level=3 name="justify-content" class="mt-0">
                    Justify content
                </Header>
                <format-table :items="flexJustify" :example="flexJustifyExample" :wrapper="{class: 'd-flex', value: true}" selectable />
            </div>

            <div class="col-12 mt-3">
                <Header :level=3 name="align-items" class="mt-0">
                    Align items
                </Header>
                <format-table :items="flexAlign" :example="flexAlignExample" :wrapper="{class: 'd-flex colored-row', value: true}" selectable />
            </div>

            <div class="col-12 mt-3">
                <Header :level=3 name="align-content" class="mt-0">
                    Align content
                </Header>
                <format-table :items="flexAlignContent" :example="flexAlignContentExample" :wrapper="{class: 'd-flex colored-row flex-wrap', value: true}" selectable />
            </div>

            <div class="col-12">
                <Header :level=2 name="flex-items">Children's classes</Header>
            </div>

            <div class="col-12 mt-3">
                <Header :level=3 name="fill" class="mt-0">
                    Fill
                </Header>
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5">
                        <format-table :items="flexFill" />
                    </div>
                    <div class="col-12 col-lg-6 col-xl-7 mt-01 mt-lg-0">
                        <p class="mt-0">Use the <code>.flex-fill</code> class on a series of sibling elements to force them into equal widths while taking up all available horizontal space.</p>
                        <div class="d-flex">
                            <div class="p-01 example">No fill</div>
                            <div class="p-01 flex-fill example">Equal</div>
                            <div class="p-01 flex-fill example">Equal</div>
                        </div>
                        <source-code><code class="html">&lt;div class="d-flex"&gt;
  &lt;div class="p-2 example"&gt;No fill&lt;/div&gt;
  &lt;div class="p-2 flex-fill example"&gt;Equal&lt;/div&gt;
  &lt;div class="p-2 flex-fill example"&gt;Equal&lt;/div&gt;
&lt;/div&gt;</code></source-code>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-3">
                <Header :level=3 name="grow-and-shrink" class="mt-0">
                    Grow and shrink
                </Header>
                <format-table :items="flexGrow" :example="flexGrowExample" :wrapper="{class: 'd-flex'}" selectable/>

                <format-table class="mt-1" :items="flexShrink" :example="flexShrinkExample" :wrapper="{class: 'd-flex'}" selectable/>
            </div>

            <div class="col-12 mt-3">
                <Header :level=3 name="align-self" class="mt-0">
                    Align self
                </Header>
                <format-table :items="flexAlignSelf" :example="flexAlignSelfExample" :wrapper="{class: 'd-flex colored-row'}" selectable/>
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
            flexOrderExample: [
                {class: 'd-inline-block example p-01', text: 'Item 1'},
                {class: 'd-inline-block example p-01', text: 'Item 2'},
                {class: 'd-inline-block example p-01', text: 'Item 3'},
                {class: 'd-inline-block example p-01', text: 'Item 4'}
            ],

            flexWrap: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['wrap','nowrap','wrap-reverse'] }
            ],
            flexWrapExample: [
                { class: "example w-25 p-01", text: 'Item 1' },
                { class: "example w-25 p-01", text: 'Item 2' },
                { class: "example w-25 p-01", text: 'Item 3' },
                { class: "example w-25 p-01", text: 'Item 4' },
                { class: "example w-25 p-01", text: 'Item 5' },
                { class: "example w-25 p-01", text: 'Item 6' },
                { class: "example w-25 p-01", text: 'Item 7' },
            ],

            flexFill: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['fill'] }
            ],
            flexFillExample: [
                { class: "example p-01", text: '1', value: true },
                { class: "example p-01", text: '2', value: true },
                { class: "example p-01", text: '3', value: true },
            ],

            flexGrow: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['grow-0', 'grow-1'] }
            ],
            flexGrowExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", value: true },
                { class: "example p-01", text: 'Lorem' },
            ],

            flexShrink: [
                { items: ['.flex-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['shrink-0', 'shrink-1'] }
            ],
            flexShrinkExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", text: 'Lorem ipsum, dolor sit amet', value: true },
                { class: "example p-01", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab ipsam sapiente ut, voluptas possimus perferendis ea nesciunt rerum quasi.' },
            ],

            flexJustify: [
                { items: ['.justify-content-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: [ 'start','end','center','between','around'] }
            ],
            flexJustifyExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", text: '2' },
                { class: "example p-01", text: '3' },
            ],

            flexAlign: [
                { items: ['.align-items-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['start','end','center','baseline','stretch'] }
            ],
            flexAlignExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", text: '2' },
                { class: "example p-01", text: '3' },
            ],

            
            flexAlignContent: [
                { items: ['.align-content-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['start','end','center','between','around','stretch'] }
            ],
            flexAlignContentExample: [
                { class: "example w-25 p-01", text: 'Item 1' },
                { class: "example w-25 p-01", text: 'Item 2' },
                { class: "example w-25 p-01", text: 'Item 3' },
                { class: "example w-25 p-01", text: 'Item 4' },
                { class: "example w-25 p-01", text: 'Item 5' },
                { class: "example w-25 p-01", text: 'Item 6' },
                { class: "example w-25 p-01", text: 'Item 7' },
            ],

            flexAlignSelf: [
                { items: ['.align-self-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['auto','start','end','center','baseline','stretch'] }
            ],
            flexAlignSelfExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", value: true },
                { class: "example p-01", text: '3' },
            ],
        }
    },

    mounted() {
        this.buildTOC()
    }
}
</script>
