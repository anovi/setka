<template>
    <main class="">

        <h1 class="mb-01">Flex</h1>
        <p class="subheader mt-0">Quickly manage the layout, alignment, and sizing of grid columns and other elements. For more complex implementations, custom CSS may be necessary. To learn flexbox read a <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background" target="_blank">flexbox guide</a>.</p>
        <p>To enable flexbox layout use <nuxt-link to="/display">display utilities</nuxt-link> like <code>.d-flex</code>, <code>.d-inline-flex</code> and their responsive variations.</p>

        <source-code><code class="html">&lt;div class="d-flex"&gt;
    I'm a flexbox container!
    All children inside me will behave in according to flexbox.
&lt;/div&gt;</code></source-code>

        <Header :level=2 name="flex-container" class="">Flex container's classes</Header>
        
        <Header :level=3 name="direction" class="">Direction</Header>
        <p>Set the direction of flex items in a flex container. In most cases you can omit the horizontal class here as the browser default is <code>row</code>. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).</p>
        <format-table :items="$store.state.classes.flex.flexOrder" :example="flexOrderExample" :wrapper="{class: 'd-flex', value: true}" interactive />
    

        <Header :level=3 name="wrap" class="">Wrap</Header>
        <format-table :items="$store.state.classes.flex.flexWrap" :example="flexWrapExample" :wrapper="{class: 'd-flex', value: true}" interactive />


        <Header :level=3 name="justify-content" class="">Justify content</Header>
        <format-table :items="$store.state.classes.flex.flexJustify" :example="flexJustifyExample" :wrapper="{class: 'd-flex', value: true}" interactive />


        <Header :level=3 name="align-items" class="">Align items</Header>
        <format-table :items="$store.state.classes.flex.flexAlign" :example="flexAlignExample" :wrapper="{class: 'd-flex hi-row', value: true}" interactive />
    
        
        <Header :level=3 name="align-content" class="">Align content</Header>
        <!-- <p>
            Use align-content utilities on flexbox containers to align flex items together on the cross axis. Choose from start (browser default), end, center, between, around, or stretch. 
        </p> -->
        <p>
            This property has <strong>no effect on single rows</strong> of flex items. To demonstrate these utilities, we’ve enforced <code>flex-wrap: wrap</code> and increased the number of flex items.
        </p>


        <format-table :items="$store.state.classes.flex.flexAlignContent" :example="flexAlignContentExample" :wrapper="{class: 'd-flex hi-row flex-wrap', value: true}" interactive />
    

        <Header :level=2 name="flex-items">Children's classes</Header>
    

        <Header :level=3 name="fill" class="">Fill</Header>
        <div class="row">
            <div class="col-auto">
                <format-table :items="$store.state.classes.flex.flexFill" class="mt-0" />
            </div>
        </div>
        
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


        <Header :level=3 name="grow-and-shrink" class="">
            Grow and shrink
        </Header>
        <p>Use <code>.flex-grow-*</code> utilities to toggle a flex item’s ability to grow to fill available space.</p>
        <format-table :items="$store.state.classes.flex.flexGrow" :example="flexGrowExample" :wrapper="{class: 'd-flex'}" interactive/>

        <p>Use <code>.flex-shrink-*</code> utilities to toggle a flex item’s ability to shrink if necessary.</p>

        <format-table class="mt-1" :items="$store.state.classes.flex.flexShrink" :example="flexShrinkExample" :wrapper="{class: 'd-flex'}" interactive/>
    

        <Header :level=3 name="align-self" class="">
            Align self
        </Header>
        <format-table :items="$store.state.classes.flex.flexAlignSelf" :example="flexAlignSelfExample" :wrapper="{class: 'd-flex hi-row'}" interactive/>
    

        <Header :level=3 name="order" class="">Order</Header>
        <p>Change the visual order of specific flex items with order utilities. With this classes you can also <nuxt-link to="/grid#order-classes">change order of grid columns</nuxt-link> since Setka's grid build with flexbox layout.</p>
        <format-table :items="$store.state.classes.flex.order" :example="orderExample" :wrapper="{class: 'd-flex flex-wrap'}" interactive/>
    

    </main>
</template>


<script>
export default {

    head: {
        title: 'Flex'
    },
    
    data() {
        return {
            flexOrderExample: [
                {class: 'example p-01', text: 'Item 1'},
                {class: 'example p-01', text: 'Item 2'},
                {class: 'example p-01', text: 'Item 3'},
                {class: 'example p-01', text: 'Item 4'}
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
            flexFillExample: [
                { class: "example p-01", text: '1', value: true },
                { class: "example p-01", text: '2', value: true },
                { class: "example p-01", text: '3', value: true },
            ],
            flexGrowExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", value: true },
                { class: "example p-01", text: 'Lorem' },
            ],
            flexShrinkExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", text: 'Lorem ipsum, dolor sit amet', value: true },
                { class: "example p-01", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab ipsam sapiente ut, voluptas possimus perferendis ea nesciunt rerum quasi.' },
            ],
            flexJustifyExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", text: '2' },
                { class: "example p-01", text: '3' },
            ],
            flexAlignExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", text: '2' },
                { class: "example p-01", text: '3' },
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
            flexAlignSelfExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", value: true },
                { class: "example p-01", text: '3' },
            ],
            orderExample: [
                { class: "example p-01 order-1", text: '1' },
                { class: "example p-01", value: true },
                { class: "example p-01 order-2", text: '2' },
                { class: "example p-01 order-3", text: '3' },
                { class: "example p-01 order-4", text: '4' },
                { class: "example p-01 order-5", text: '5' },
                { class: "example p-01 order-6", text: '6' },
                { class: "example p-01 order-7", text: '7' },
                { class: "example p-01 order-8", text: '8' },
                { class: "example p-01 order-9", text: '9' },
                { class: "example p-01 order-10", text: '10' },
                { class: "example p-01 order-11", text: '11' },
            ],
        }
    },

    mounted() {
        this.buildTOC()
    }
}
</script>
