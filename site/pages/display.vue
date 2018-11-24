<template>
    <main class="">
        <h1 id="content">Display property</h1>

        <format-table :items="display" :initial="[0,0,1]" :example="displayExample" @value="(val) => displayValue = val">
          <h3 class="my-01"><code>{{`.${displayValue}`}}</code></h3>
          <div class="d-inline-block example p-01">Item</div>
          <div class="example p-01" :class="displayValue">{{`.${displayValue}`}}</div>
          <div class="d-inline-block example p-01">Item</div>
        </format-table>

        <p class="bd-lead">Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>
    
        <Header :level="2" name="how-it-works">How it works</Header>

<p>Change the value of the <code>display</code> property with our responsive display utility classes. We purposely support only a subset of all possible values for <code>display</code>. Classes can be combined for various effects as you need.</p>

<Header :level="2" name="notation">Notation</Header>

<p>Display utility classes that apply to all <nuxt-link to="/container">breakpoints</nuxt-link>, from <code>xs</code> to <code>xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0;</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>

<p>As such, the classes are named using the format:</p>

<ul>
  <li><code>.d-{value}</code> for <code>xs</code></li>
  <li><code>.d-{breakpoint}-{value}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</li>
</ul>

<p>Where <em>value</em> is one of:</p>

<ul>
  <li><code>none</code></li>
  <li><code>inline</code></li>
  <li><code>inline-block</code></li>
  <li><code>block</code></li>
  <li><code>table</code></li>
  <li><code>table-cell</code></li>
  <li><code>table-row</code></li>
  <li><code>flex</code></li>
  <li><code>inline-flex</code></li>
</ul>

<p>The media queries effect screen widths with the given breakpoint <em>or larger</em>. For example, <code>.d-lg-none</code> sets <code>display: none;</code> on both <code>lg</code> and <code>xl</code> screens.</p>

<Header :level="2" name="examples">Examples</Header>

<div class="bd-example">
<div class="d-inline px-01 example">d-inline</div>
<div class="d-inline px-01 example">d-inline</div>
</div>
<source-code :height="2"><code class="html">&lt;div class="<em>d-inline</em> example"&gt;d-inline&lt;/div&gt;
&lt;div class="<em>d-inline</em> examples"&gt;d-inline&lt;/div&gt;</code></source-code>

<div>
  <span class="d-block px-01 example">d-block</span>
  <span class="d-block px-01 example">d-block</span>
</div>
<source-code :height="2"><code class="html">&lt;span class="<em>d-block</em> example"&gt;d-block&lt;/span&gt;
&lt;span class="<em>d-block</em> example"&gt;d-block&lt;/span&gt;</code></source-code>

<Header :level="2" name="hiding-elements">Hiding elements</Header>

<p>For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size.</p>

<p>To hide elements simply use the <code>.d-none</code> class or one of the <code>.d-{sm,md,lg,xl}-none</code> classes for any responsive screen variation.</p>

<p>To show an element only on a given interval of screen sizes you can combine one <code>.d-*-none</code> class with a <code>.d-*-*</code> class, for example <code>.d-none .d-md-block .d-xl-none</code> will hide the element for all screen sizes except on medium and large devices.</p>

<table class="">
  <thead>
    <tr>
      <th>Screen Size</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hidden on all</td>
      <td><code>.d-none</code></td>
    </tr>
    <tr>
      <td>Hidden only on xs</td>
      <td><code>.d-none .d-sm-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on sm</td>
      <td><code>.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on md</td>
      <td><code>.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on lg</td>
      <td><code>.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on xl</td>
      <td><code>.d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible on all</td>
      <td><code>.d-block</code></td>
    </tr>
    <tr>
      <td>Visible only on xs</td>
      <td><code>.d-block .d-sm-none</code></td>
    </tr>
    <tr>
      <td>Visible only on sm</td>
      <td><code>.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
      <td>Visible only on md</td>
      <td><code>.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
      <td>Visible only on lg</td>
      <td><code>.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible only on xl</td>
      <td><code>.d-none .d-xl-block</code></td>
    </tr>
  </tbody>
</table>

<div>
  <div class="d-lg-none px-1 example">hide on screens wider than lg</div>
  <div class="d-none d-lg-block px-1 example bg-2">hide on screens smaller than lg</div>
</div>

<source-code :height="2"><code class="html" data-lang="html">&lt;div class="<em>d-lg-none</em> px-1 example"&gt;hide on screens wider than lg&lt;/div&gt;
&lt;div class="<em>d-none d-lg-block</em> px-1 example bg-2"&gt;hide on screens smaller than lg&lt;/div&gt;</code></source-code>

<!-- <h2 id="display-in-print">Display in print</h2>

<p>Change the <code>display</code> value of elements when printing with our print display utility classes. Includes support for the same <code>display</code> values as our responsive <code>.d-*</code> utilities.</p>

<ul>
  <li><code>.d-print-none</code></li>
  <li><code>.d-print-inline</code></li>
  <li><code>.d-print-inline-block</code></li>
  <li><code>.d-print-block</code></li>
  <li><code>.d-print-table</code></li>
  <li><code>.d-print-table-row</code></li>
  <li><code>.d-print-table-cell</code></li>
  <li><code>.d-print-flex</code></li>
  <li><code>.d-print-inline-flex</code></li>
</ul>

<p>The print and display classes can be combined.</p>

<div class="bd-example">
<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
</div>
<source-code><code class="html" data-lang="html">&lt;div class="d-print-none"&gt;Screen Only (Hide on print only)&lt;/div&gt;
&lt;div class="d-none d-print-block"&gt;Print Only (Hide on screen only)&lt;/div&gt;
&lt;div class="d-none d-lg-block d-print-block"&gt;Hide up to large on screen, but always show on print&lt;/div&gt;</code></source-code> -->


    </main>
</template>


<script>
export default {

  mounted() {
    this.buildTOC()
  },

  data() {
    return { 
      display: [
        {items: ['.d-'], align: 'right'},
        {items: [null, 'sm-','md-','lg-','xl-']},
        {items: ['none','inline','inline-block','block','table','table-cell','table-row','flex','inline-flex']}
      ],
      displayValue: 'd-inline-block',
      displayExample: [
        {class: 'd-inline-block example p-01', text: 'Item'},
        {class: 'example p-01', value: true},
        {class: 'd-inline-block example p-01', text: 'Item'}
      ]}
  }

}
</script>
