<template>
    <main class="">
        <h1>Spacing</h1>
        
        <h2 class="mt-0">
            Margins
        </h2>
        <format-table :items="margins" :example="marginsExample" :initial="[0,0,1]" interactive />
    
        
        <h2 class="">
            Paddings
        </h2>
        <format-table :items="paddings" :example="paddingsExample" :initial="[0,0,2]" interactive />
    

        <p>The classes are named using the format <code>{property}{sides}-{size}</code> for <code>xs</code> and <code>{property}{sides}-{breakpoint}-{size}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>
        <p>Where sides is one of:</p>
        <p>
        <code>mt</code>, <code>pt</code> — for classes that set <code>margin-top</code> or <code>padding-top</code><br>
        <code>mb</code>, <code>pb</code> — for classes that set <code>margin-bottom</code> or <code>padding-bottom</code><br>
        <code>ml</code>, <code>pl</code> — for classes that set <code>margin-left</code> or <code>padding-left</code><br>
        <code>mr</code>, <code>pr</code> — for classes that set <code>margin-right</code> or <code>padding-right</code><br>
        <code>mx</code>, <code>px</code> — for classes that set both <code>*-left</code> and <code>*-right</code><br>
        <code>my</code>, <code>py</code> — for classes that set both <code>*-top</code> and <code>*-bottom</code>
        </p>
        <p>
        <code>0</code> — for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to 0<br>
        <code>01</code> — (by default) for classes that set the <code>margin</code> or <code>padding</code> to 1 grid unit<br>
        <code>1</code> — (by default) for classes that set the <code>margin</code> or <code>padding</code> to 1 line-height<br>
        <code>2</code> — (by default) for classes that set the <code>margin</code> or <code>padding</code> to 2 line-height<br>
        <code>3</code> — (by default) for classes that set the <code>margin</code> or <code>padding</code> to 3 line-height<br>
        <code>4</code> — (by default) for classes that set the <code>margin</code> or <code>padding</code> to 4 line-height<br>
        <code>auto</code> — for classes that set the <code>margin</code> to <code>auto</code>
        </p>
    </main>
</template>


<script>
export default {
    data() {
        return {
            margins: [
                {items: ['.m-', '.mt-','.mb-','.ml-','.mr-','.mx-','.my-']},
                {items: [null,'sm-','md-','lg-','xl-']},
                {items: ['0','01','1','2','3','4','auto']}
            ],
            marginsExample: [
                {class: 'example p-01', text: 'Item'},
                {class: 'example p-01', value: true},
                {class: 'example p-01', text: 'Item'}
            ],

            paddings: [
                {items: ['.p-', '.pt-','.pb-','.pl-','.pr-','.px-','.py-']},
                {items: [null,'sm-','md-','lg-','xl-']},
                {items: ['0','01','1','2','3','4']}
            ],
            paddingsExample: [
                {class: 'example d-inline-block p-01', text: 'Item'},
                {class: 'example d-inline-block', value: true},
                {class: 'example d-inline-block p-01', text: 'Item'}
            ],
        }
    }
}
</script>
