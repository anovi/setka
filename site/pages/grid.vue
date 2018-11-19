<template>
  <main>

    <Header :level="1">Grid</Header>

    <div class="row">
        <div class="col-auto">
            <format-table :items="container" />
        </div>
        <div class="col-auto">
            <format-table :items="row" />
        </div>
        <div class="col">
            <format-table :items="cols" />
        </div>
    </div>


    <Header :level="2" name="how-it-works">How it works</Header>
    <p>Grid system uses a series of containers, rows, and columns to layout and align content. It’s built with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a> and is fully responsive. If you want to learn about flexbox, <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">read this CSS Tricks flexbox guide</a>. Below is an example of how all of this work together.</p>

    <div class="container">
        <div class="row">
            <div class="col-sm example">
            One of three columns
            </div>
            <div class="col-sm example">
            One of three columns
            </div>
            <div class="col-sm example">
            One of three columns
            </div>
        </div>
    </div>

    <source-code><code>&lt;div class=&quot;<em>container</em>&quot;&gt;
  &lt;div class=&quot;<em>row</em>&quot;&gt;
    &lt;div class=&quot;<em>col-sm</em>&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;<em>col-sm</em>&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;<em>col-sm</em>&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>

    <p>The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <code class="">.container</code>.</p>
    <p>Breaking it down, here’s how it works:</p>

    <ul>
        <li>Containers provide a means to center and horizontally pad your site’s contents. Use <code class="">.container</code> for a responsive pixel width or <code class="">.container-fluid</code> for <code class="">width: 100%</code> across all viewport and device sizes.</li>
        <li>Rows are wrappers for columns. Each column has horizontal <code class="">padding</code> (called a gutter) for controlling the space between them. This <code class="">padding</code> is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</li>
        <li>In a grid layout, content must be placed within columns and only columns may be immediate children of rows.</li>
        <li>Thanks to flexbox, grid columns without a specified <code class="">width</code> will automatically layout as equal width columns. For example, four instances of <code class="">.col-sm</code> will each automatically be 25% wide from the small breakpoint and up. See the <nuxt-link to="#auto-layout-columns">auto-layout columns</nuxt-link> section for more examples.</li>
        <li>Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use <code class="">.col-4</code>.</li>
        <li>Column <code class="">width</code>s are set in percentages, so they’re always fluid and sized relative to their parent element.</li>
        <li>Columns have horizontal <code class="">padding</code> to create the gutters between individual columns, however, you can remove the <code class="">margin</code> from rows and <code class="">padding</code> from columns with <code class="">.no-gutters</code> on the <code class="">.row</code>.</li>
        <li>To make the grid responsive, there are five grid breakpoints, one for each <nuxt-link to="/container#responsive-breakpoints">responsive breakpoint</nuxt-link>: all breakpoints (extra small), small, medium, large, and extra large.</li>
        <li>Grid breakpoints are based on minimum width media queries, meaning <strong>they apply to that one breakpoint and all those above it</strong> (e.g., <code class="">.col-sm-4</code> applies to small, medium, large, and extra large devices, but not the first <code class="">xs</code> breakpoint).</li>
    </ul>


    <Header :level="2" name="grid-options">Grid options</Header>

    <table class="table table-bordered table-content">
        <thead>
            <tr>
            <th></th>
            <th class="text-center">
                Extra small<br>
                <small>&lt;576px</small>
            </th>
            <th class="text-center">
                Small<br>
                <small>≥576px</small>
            </th>
            <th class="text-center">
                Medium<br>
                <small>≥768px</small>
            </th>
            <th class="text-center">
                Large<br>
                <small>≥992px</small>
            </th>
            <th class="text-center">
                Extra large<br>
                <small>≥1200px</small>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th class="text-nowrap" scope="row">Max <code>.container</code> width</th>
            <td>None (auto)</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Class prefix</th>
            <td><code>.col-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            <td><code>.col-xl-</code></td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row"># of columns</th>
            <td colspan="5">12</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Gutter width</th>
            <td colspan="5">30px (15px on each side of a column)</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Nestable</th>
            <td colspan="5">Yes</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Column ordering</th>
            <td colspan="5">Yes</td>
            </tr>
        </tbody>
    </table>



    <Header :level="2" name="auto-layout-columns">Auto-layout columns</Header>
    <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code class="highlighter-rouge">.col-sm-6</code>.</p>

    <Header :level="3" name="equal-width">Equal-width</Header>

    <div class="row">
        <div class="col">
        <p class="mt-0">For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
        </div>
    </div>
  

    <div class="container">
        <div class="row">
            <div class="col example">
            1 of 2
            </div>  
            <div class="col example">
            2 of 2
            </div>
        </div>
        <div class="row">
            <div class="col example">
            1 of 3
            </div>
            <div class="col example">
            2 of 3
            </div>
            <div class="col pb-normal example">
            3 of 3
            </div>
        </div>
    </div>


    
    <p>Equal-width columns can be broken into multiple lines, but there was a Safari flexbox bug that prevented this from working without an explicit flex-basis or border. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.</p>
    <div class="container">
        <div class="row">
            <div class="col example">Column</div>
            <div class="col example">Column</div>
            <div class="w-100"></div>
            <div class="col example">Column</div>
            <div class="col example">Column</div>
        </div>
    </div>


    
    <Header :level="3" name="setting-one-column-width">Setting one column width</Header>
    <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
    <div class="container">
        <div class="row">
            <div class="col example">
            1 of 3
            </div>
            <div class="col-6 example">
            2 of 3 (wider)
            </div>
            <div class="col example">
            3 of 3
            </div>
        </div>
        <div class="row">
            <div class="col example">
            1 of 3
            </div>
            <div class="col-5 example">
            2 of 3 (wider)
            </div>
            <div class="col example">
            3 of 3
            </div>
        </div>
    </div>


    

    
    <Header :level="3" name="variable-width-content">Variable width content</Header>
    <p>Use col-{breakpoint}-auto classes to size columns based on the natural width of their content.</p>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-lg-2 example">
            1 of 3
            </div>
            <div class="col-md-auto example">
            Variable width content
            </div>
            <div class="col col-lg-2 example">
            3 of 3
            </div>
        </div>
        <div class="row">
            <div class="col example">
            1 of 3
            </div>
            <div class="col-md-auto example">
            Variable width content
            </div>
            <div class="col col-lg-2 example">
            3 of 3
            </div>
        </div>
    </div>


    <Header :level="3" name="equal-width-multi-row">Equal-width multi-row</Header>
    <p>Create equal-width columns that span multiple rows by inserting a <code class="highlighter-rouge">.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code class="highlighter-rouge">.w-100</code> with some <nuxt-link to="/display">responsive display utilities</nuxt-link>.</p>

    <div class="container">
        <div class="row">
            <div class="col example">col</div>
            <div class="col example">col</div>
            <div class="w-100"></div>
            <div class="col example">col</div>
            <div class="col example">col</div>
        </div>
    </div>

    <source-code :height="7"><code>&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col&quot;&gt;col&lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;col&lt;/div&gt;
  &lt;div class=&quot;w-100&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;col&lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;col&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <Header :level="2" name="responsive-classes">Responsive classes</Header>

    <p>Invisible’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>

    <Header :level="3" name="all-breakpoints">All breakpoints</Header>

    <p>For grids that are the same from the smallest of devices to the largest, use the <code class="highlighter-rouge">.col</code> and <code class="highlighter-rouge">.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code class="highlighter-rouge">.col</code>.</p>

    <div class="container">
        <div class="row">
        <div class="col example">col</div>
        <div class="col example">col</div>
        <div class="col example">col</div>
        <div class="col example">col</div>
        </div>
        <div class="row">
        <div class="col-8 example">col-8</div>
        <div class="col-4 example">col-4</div>
        </div>
    </div>
    
    <source-code :height="7"><code>&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-sm-8&quot;&gt;col-sm-8&lt;/div&gt;
  &lt;div class=&quot;col-sm-4&quot;&gt;col-sm-4&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-sm&quot;&gt;col-sm&lt;/div&gt;
  &lt;div class=&quot;col-sm&quot;&gt;col-sm&lt;/div&gt;
  &lt;div class=&quot;col-sm&quot;&gt;col-sm&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    
    <Header :level="3" name="mix-and-match">Mix and match</Header>
    <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
    <div class="container">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="row">
            <div class="col-12 col-md-8 example">.col-12 .col-md-8</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
        </div>
    
        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <div class="row">
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
        </div>
    
        <!-- Columns are always 50% wide, on mobile and desktop -->
        <div class="row">
            <div class="col-6 example">.col-6</div>
            <div class="col-6 example">.col-6</div>
        </div>
    </div>

    <source-code :height="18"><code class="language-html" data-lang="html">&lt;!-- Stack the columns on mobile by making one full-width and the other half-width --&gt;
&lt;div class="row"&gt;
  &lt;div class="col-12 col-md-8"&gt;.col-12 .col-md-8&lt;/div&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --&gt;
&lt;div class="row"&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Columns are always 50% wide, on mobile and desktop --&gt;
&lt;div class="row"&gt;
  &lt;div class="col-6"&gt;.col-6&lt;/div&gt;
  &lt;div class="col-6"&gt;.col-6&lt;/div&gt;
&lt;/div&gt;</code></source-code>




    
    <Header :level="2" name="aligment">Aligment</Header>
    <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>

    <Header :level="3" name="vertical-alignment">Vertical alignment</Header>
    <div class="container">
        <div class="row align-items-start colored-row">
            <div class="col example">
            One of three columns
            </div>
            <div class="col example">
            One of three columns
            </div>
            <div class="col example">
            One of three columns
            </div>
        </div>
        <div class="row align-items-center colored-row">
            <div class="col example">
            One of three columns
            </div>
            <div class="col example">
            One of three columns
            </div>
            <div class="col example">
            One of three columns
            </div>
        </div>
        <div class="row align-items-end colored-row">
            <div class="col example">
            One of three columns
            </div>
            <div class="col example">
            One of three columns
            </div>
            <div class="col example">
            One of three columns
            </div>
        </div>
    </div>

    <source-code :height="35"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row align-items-start&quot;&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row align-items-center&quot;&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row align-items-end&quot;&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>
    
    <div class="container">
        <div class="row colored-row">
            <div class="col align-self-start example">
            One of three columns
            </div>
            <div class="col align-self-center example">
            One of three columns
            </div>
            <div class="col align-self-end example">
            One of three columns
            </div>
        </div>
    </div>

    <source-code :height="13"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col align-self-start&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col align-self-center&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col align-self-end&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>


    
    <Header :level="3" name="horizontal-alignment">Horizontal alignment</Header>
    <div class="container">
        <div class="row justify-content-start">
            <div class="col-4 example">
            One of two columns
            </div>
            <div class="col-4 example">
            One of two columns
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4 example">
            One of two columns
            </div>
            <div class="col-4 example">
            One of two columns
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-4 example">
            One of two columns
            </div>
            <div class="col-4 example">
            One of two columns
            </div>
        </div>
        <div class="row justify-content-around">
            <div class="col-4 example">
            One of two columns
            </div>
            <div class="col-4 example">
            One of two columns
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-4 example">
            One of two columns
            </div>
            <div class="col-4 example">
            One of two columns
            </div>
        </div>
    </div>

    <source-code :height="42"><code class="language-html" data-lang="html">&lt;div class="container"&gt;
  &lt;div class="row justify-content-start"&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row justify-content-center"&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row justify-content-end"&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row justify-content-around"&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row justify-content-between"&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
    &lt;div class="col-4"&gt;
      One of two columns
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>


    
    
    
    <Header :level="3" name="no-gutters">No gutters</Header>
    <p>The gutters between columns in our predefined grid classes can be removed with <code class="highlighter-rouge">.no-gutters</code>. This removes the negative <code class="highlighter-rouge">margin</code>s from <code class="highlighter-rouge">.row</code> and the horizontal <code class="highlighter-rouge">padding</code> from all immediate children columns.</p>

    <div class="container">
        <div class="row no-gutters">
            <div class="col-12 col-sm-6 col-md-8 example">.col-12 .col-sm-6 .col-md-8</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
        </div>
    </div>

    <source-code :height="4"><code>&lt;div class=&quot;row no-gutters&quot;&gt;
  &lt;div class=&quot;col-12 col-sm-6 col-md-8&quot;&gt;.col-12 .col-sm-6 .col-md-8&lt;/div&gt;
  &lt;div class=&quot;col-6 col-md-4&quot;&gt;.col-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;</code></source-code>

    
    <Header :level="3" name="column-wrapping">Column wrapping</Header>
    <p>
        If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
    </p>
    <div class="container">
        <div class="row">
            <div class="col-9 example">.col-9</div>
            <div class="col-4 example">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
            <div class="col-6 example">.col-6<br>Subsequent columns continue along the new line.</div>
        </div>
    </div>
    <source-code :height="5"><code class="language-html" data-lang="html">&lt;div class="row"&gt;
  &lt;div class="col-9"&gt;.col-9&lt;/div&gt;
  &lt;div class="col-4"&gt;.col-4&lt;br&gt;Since 9 + 4 = 13 &amp;gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.&lt;/div&gt;
  &lt;div class="col-6"&gt;.col-6&lt;br&gt;Subsequent columns continue along the new line.&lt;/div&gt;
&lt;/div&gt;</code></source-code>



    
    
    <Header :level="3" name="column-breaks">Column breaks</Header>
    <p>Breaking columns to a new line in flexbox requires a small hack: add an element with width: 100% wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple .rows, but not every implementation method can account for this.</p>
    <div class="container">
        <div class="row">
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
    
            <!-- Force next columns to break to new line -->
            <div class="w-100"></div>
    
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
        </div>
    </div>
    <source-code :height="10"><code class="language-html" data-lang="html">&lt;div class="row"&gt;
  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;
  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;

  &lt;!-- Force next columns to break to new line --&gt;
  <em>&lt;div class="w-100"&gt;&lt;/div&gt;</em>

  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;
  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;
&lt;/div&gt;</code></source-code>



    <Header :level="2" name="reordering">Reordering</Header>

    
    <Header :level="3" name="order-classes">Order classes</Header>
    <p>Use <code class="highlighter-rouge">.order-</code> classes for controlling the <strong>visual order</strong> of your content. These classes are responsive, so you can set the <code class="highlighter-rouge">order</code> by breakpoint (e.g., <code class="highlighter-rouge">.order-1.order-md-2</code>). Includes support for <code class="highlighter-rouge">1</code> through <code class="highlighter-rouge">12</code> across all five grid tiers.</p>
    <div class="container">
        <div class="row">
            <div class="col example">
            First, but unordered
            </div>
            <div class="col order-12 example">
            Second, but last
            </div>
            <div class="col order-1 example">
            Third, but first
            </div>
        </div>
    </div>
    <source-code :height="13"><code class="language-html" data-lang="html">&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col"&gt;
      First, but unordered
    &lt;/div&gt;
    &lt;div class="col order-12"&gt;
      Second, but last
    &lt;/div&gt;
    &lt;div class="col order-1"&gt;
      Third, but first
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>



    
    
    <Header :level="3" name="offsetting-columns">Offsetting columns</Header>
    <p>You can offset grid columns in two ways: our responsive <code class="highlighter-rouge">.offset-</code> grid classes and our <nuxt-link to="/spacing">margin utilities</nuxt-link>. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>
    
    <Header :level="4" name="offset-classes">Offset classes</Header>
    <p>Move columns to the right using <code class="highlighter-rouge">.offset-md-*</code> classes. These classes increase the left margin of a column by <code class="highlighter-rouge">*</code> columns. For example, <code class="highlighter-rouge">.offset-md-4</code> moves <code class="highlighter-rouge">.col-md-4</code> over four columns.</p>
    
    <div class="container">
        <div class="row">
            <div class="col-md-4 example">.col-md-4</div>
            <div class="col-md-4 offset-md-4 example">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
            <div class="col-md-3 offset-md-3 example">.col-md-3 .offset-md-3</div>
            <div class="col-md-3 offset-md-3 example">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3 example">.col-md-6 .offset-md-3</div>
        </div>
    </div>

    <source-code :height="11"><code class="language-html" data-lang="html">&lt;div class="row"&gt;
  &lt;div class="col-md-4"&gt;.col-md-4&lt;/div&gt;
  &lt;div class="col-md-4 offset-md-4"&gt;.col-md-4 .offset-md-4&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col-md-3 offset-md-3"&gt;.col-md-3 .offset-md-3&lt;/div&gt;
  &lt;div class="col-md-3 offset-md-3"&gt;.col-md-3 .offset-md-3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col-md-6 offset-md-3"&gt;.col-md-6 .offset-md-3&lt;/div&gt;
&lt;/div&gt;</code></source-code>

    <p>In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in the grid example.</p>


    
    <div class="container">
        <div class="row">
            <div class="col-sm-5 col-md-6 example">.col-sm-5 .col-md-6</div>
            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 example">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
        </div>
    
        <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-6 example">.col-sm-6 .col-md-5 .col-lg-6</div>
            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 example">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
        </div>
    </div>

    <source-code :height="9"><code class="language-html" data-lang="html">&lt;div class="row"&gt;
  &lt;div class="col-sm-5 col-md-6"&gt;.col-sm-5 .col-md-6&lt;/div&gt;
  &lt;div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"&gt;.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0&lt;/div&gt;
&lt;/div&gt;

&lt;div class="row"&gt;
  &lt;div class="col-sm-6 col-md-5 col-lg-6"&gt;.col-sm-6 .col-md-5 .col-lg-6&lt;/div&gt;
  &lt;div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"&gt;.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <Header :level="4" name="margin-utilities">Margin utilities</Header>
    <p>With the move to flexbox in v4, you can use margin utilities like <code class="highlighter-rouge">.mr-auto</code> to force sibling columns away from one another.</p>

    <div class="container">
        <div class="row">
            <div class="col-md-4 example">.col-md-4</div>
            <div class="col-md-4 ml-auto example">.col-md-4 .ml-auto</div>
        </div>
        <div class="row">
            <div class="col-md-3 ml-md-auto example">.col-md-3 .ml-md-auto</div>
            <div class="col-md-3 ml-md-auto example">.col-md-3 .ml-md-auto</div>
        </div>
        <div class="row">
            <div class="col-auto mr-auto example">.col-auto .mr-auto</div>
            <div class="col-auto example">.col-auto</div>
        </div>
    </div>

    <source-code :height="12"><code class="language-html" data-lang="html">&lt;div class="row"&gt;
  &lt;div class="col-md-4"&gt;.col-md-4&lt;/div&gt;
  &lt;div class="col-md-4 ml-auto"&gt;.col-md-4 .ml-auto&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col-md-3 ml-md-auto"&gt;.col-md-3 .ml-md-auto&lt;/div&gt;
  &lt;div class="col-md-3 ml-md-auto"&gt;.col-md-3 .ml-md-auto&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col-auto mr-auto"&gt;.col-auto .mr-auto&lt;/div&gt;
  &lt;div class="col-auto"&gt;.col-auto&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    
    
    <Header :level="2" name="nesting">Nesting</Header>
    <p>To nest your content with the default grid, add a new <code class="highlighter-rouge">.row</code> and set of <code class="highlighter-rouge">.col-sm-*</code> columns within an existing <code class="highlighter-rouge">.col-sm-*</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
    <div class="container">
        <div class="row mb-4">
            <div class="col-sm-9 example">
            Level 1: .col-sm-9
            <div class="row">
                <div class="col-8 col-sm-6 example">
                Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6 example">
                Level 2: .col-4 .col-sm-6
                </div>
            </div>
            </div>
        </div>
    </div>





  </main>
</template>


<script>
export default {
    mounted() {
        this.buildTOC()
    },
    data() {
        return {
            container: [
                {items: ['.container','.container-fluid']}
            ],
            row: [
                {items: ['.row']}
            ],
            cols: [
                {items: ['.col-']},
                {items: [null,'sm-','md-','lg-','xl-']},
                {items: ['1','2','3','4','5','6','7','8','9','10','11','12']},
                {items: ['.no-gutters']}
            ]
        }
    }
}
</script>
