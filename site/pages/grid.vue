<template>
  <main>

    <Header :level="1" class="mb-1">Grid</Header>

    <p class="mt-0">Available classes:</p>
    <div class="d-flex flex-wrap">
        <div class="mr-1">
            <format-table :items="$store.state.classes.grid.container" class="mt-0" />
        </div>
        <div class="mr-1">
            <format-table :items="$store.state.classes.grid.row" class="mt-0" />
        </div>
        <div class="mr-1">
            <format-table :items="$store.state.classes.grid.cols" class="mt-0" />
        </div>
        <div class="mr-1">
            <format-table :items="$store.state.classes.grid.start" class="mt-0" />
        </div>
        <div class="mr-1">
            <format-table :items="$store.state.classes.grid.end" class="mt-0" />
        </div>
    </div>


    <Header :level="2" name="how-it-works">How it works</Header>
    <p>The grid system is built with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout" target="_blank">grid layout</a> and is fully responsive. It's better if you understand how grid layout works. To learn about grids, <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">read this CSS Tricks grid guide</a>.

    <figure class="text-center m-0 grid-image">
        <img src="/grid-how.png" alt="" class="d-block mx-auto">
    </figure>

    <h3>Grid classes</h3>

    <format-table :items="$store.state.classes.grid.row" :initial="[0,0,3]" :example="gridRowExample" :wrapper="{value: true}" interactive />

    <p>Grid classes are wrappers for columns. Immediate children of grids became columns. There are 11 grid classes by default. From <code>.grid-2</code> to <code>.grid-12</code>. Use <code>.container</code> as a wrapper if you want your content to have max-width and be aligned to the center.</p>

    <div class="mb-01">
      <!-- <div class="gu1 view-padding-1"></div> <small>padding</small> -->
      <div class="gu1 colored-row2"></div> <small>grid</small>
    </div>
    <div class="container example">
        <p class="mt-0 mb-01">Content outside collumns can be placed here!</p>
        <div class="grid-12 example colored-row2">
        </div>
    </div>

    <source-code :height="4"><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;p&gt;Content outside collumns can be placed here!&lt;/p&gt;
  &lt;div class=&quot;grid-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <h3>Columns</h3>
    <p>Columns are containers for content or are content blocks themselves. All immediate children of grid container are columns. Span of columns</p>

    <format-table :items="$store.state.classes.grid.cols" :initial="[0,0,3]" :example="gridColsExample" :wrapper="{class: 'grid-12'}" interactive />

    <p>How this works:</p>
    <ul>
        <li>All direct descendants of <code>.grid-12</code> are columns even without special classes. Their width is one track by default. This is how the grid layout behaves.</li>
        <li>Column classes indicate the number of tracks you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across <code>.grid-12</code>, you can use <code class="">.col-4</code>.</li>

        <li>There is a default gap of 30px between columns. You can remove it for a grid container with <code>.grid-gap-0</code> on it.</li>
        <li>To make the grid responsive, there are five grid breakpoints, one for each <nuxt-link to="/overview#responsive-breakpoints">responsive breakpoint</nuxt-link>: all breakpoints (extra small), small, medium, large, and extra large.</li>
        <li>Grid breakpoints are based on minimum width media queries, meaning <strong>they apply to that one breakpoint and all those above it</strong> (e.g., <code class="">.col-sm-4</code> applies to small, medium, large, and extra large devices, but not the first <code class="">xs</code> breakpoint).</li>
    </ul>






    <Header :level="2" name="grid-options">Grid options</Header>

    <p>This is default options for grids:</p>

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
                <td colspan="5">from 2 to 12</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">Gap width</th>
                <td colspan="5">30px</td>
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





    <Header :level="2" name="responsive-classes">Responsive classes</Header>

    <p>Setka’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>

    <Header :level="3" name="all-breakpoints">All breakpoints</Header>

    <p>For grids that are the same from the smallest of devices to the largest, use the <code class="highlighter-rouge">.col</code> and <code class="highlighter-rouge">.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code class="highlighter-rouge">.col</code>.</p>

    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-sm-3 example">.col-sm-3</div>
            <div class="col-sm-3 example">.col-sm-3</div>
            <div class="col-sm-3 example">.col-sm-3</div>
            <div class="col-sm-3 example">.col-sm-3</div>
            <div class="col-sm-8 example">.col-sm-8</div>
            <div class="col-sm-4 example">.col-sm-4</div>
        </div>
    </div>
    
    <source-code :height="8"><code class="html">&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-sm-3&quot;&gt;.col-sm-3&lt;/div&gt;
  &lt;div class=&quot;col-sm-3&quot;&gt;.col-sm-3&lt;/div&gt;
  &lt;div class=&quot;col-sm-3&quot;&gt;.col-sm-3&lt;/div&gt;
  &lt;div class=&quot;col-sm-3&quot;&gt;.col-sm-3&lt;/div&gt;
  &lt;div class=&quot;col-sm-8&quot;&gt;.col-sm-8&lt;/div&gt;
  &lt;div class=&quot;col-sm-4&quot;&gt;.col-sm-4&lt;/div&gt;
&lt;/div&gt;</code></source-code>

    
    <Header :level="3" name="mix-and-match">Mix and match</Header>
    <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
    <div class="container-fluid">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="grid-12">
            <div class="col-12 col-md-8 example">.col-12 .col-md-8</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
        </div>
    
        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <div class="grid-12">
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
        </div>
    
        <!-- Columns are always 50% wide, on mobile and desktop -->
        <div class="grid-12">
            <div class="col-6 example">.col-6</div>
            <div class="col-6 example">.col-6</div>
        </div>
    </div>

    <source-code :height="18"><code class="html" data-lang="html">&lt;!-- Stack the columns on mobile by making one full-width and the other half-width --&gt;
&lt;div class="grid-12"&gt;
  &lt;div class="col-12 col-md-8"&gt;.col-12 .col-md-8&lt;/div&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --&gt;
&lt;div class="grid-12"&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
  &lt;div class="col-6 col-md-4"&gt;.col-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Columns are always 50% wide, on mobile and desktop --&gt;
&lt;div class="grid-12"&gt;
  &lt;div class="col-6"&gt;.col-6&lt;/div&gt;
  &lt;div class="col-6"&gt;.col-6&lt;/div&gt;
&lt;/div&gt;</code></source-code>

    <p>It works for all grid classes.</p>





    <Header :level="2" name="grid-in-depth">Grid in-depth</Header>

    <Header :level="3" name="col-start">Column start</Header>

    <p>The <code>.col-start-*</code> classes specify a column start position by applying <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start" target="_blank">grid-column-start</a> CSS property. In which <code>*</code> is a grid's track number.</p>
    
    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-md-4 example">.col-md-4</div>
            <div class="col-md-4 col-start-md-9 example">.col-md-4 .col-start-md-9</div>
        </div>
        <div class="grid-12">
            <div class="col-md-3 col-start-md-4 example">.col-md-3 .col-start-md-4</div>
            <div class="col-md-3 col-start-md-10 example">.col-md-3 .col-start-md-10</div>
        </div>
        <div class="grid-12">
            <div class="col-md-6 col-start-md-4 example">.col-md-6 .col-start-md-4</div>
        </div>
    </div>

    <source-code :height="11"><code class="html" data-lang="html">&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-md-4&quot;&gt;.col-md-4&lt;/div&gt;
  &lt;div class=&quot;col-md-4 col-start-md-9&quot;&gt;.col-md-4 .col-start-md-9&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-md-3 col-start-md-4&quot;&gt;.col-md-3 .col-start-md-4&lt;/div&gt;
  &lt;div class=&quot;col-md-3 col-start-md-10&quot;&gt;.col-md-3 .col-start-md-10&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-md-6 col-start-md-4&quot;&gt;.col-md-6 .col-start-md-4&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <p>Column start may force a column to wrap if the specified track is already occupied by another column.</p>

    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-8 example">.col-md-4</div>
            <div class="col-3 col-start-8 example"><code>.col-start-8</code> is forced to wrap because track 8 is occupied</div>
        </div>
    </div>


    <Header :level="3" name="col-end">Column end</Header>

    <p>The <code>.col-end-*</code> classes specify a column end position by applying <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end" target="_blank">grid-column-end</a> CSS property. In which <code>*</code> is a grid's track number.</p>


    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-4 example">.col-4</div>
            <div class="col-4 col-end example">.col-4 .col-end</div>
        </div>
        <div class="grid-12">
            <div class="col-3 col-end-5 example">.col-3 .col-end-5</div>
            <div class="col-3 col-end-10 example">.col-3 .col-end-10</div>
        </div>
        <div class="grid-12">
            <div class="col-6 col-end-12 example">.col-6 .col-end-12</div>
        </div>
    </div>

    <source-code :height="11"><code class="html">&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-4&quot;&gt;.col-4&lt;/div&gt;
  &lt;div class=&quot;col-4 col-end&quot;&gt;.col-4 .col-end&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-3 col-end-5&quot;&gt;.col-3 .col-end-5&lt;/div&gt;
  &lt;div class=&quot;col-3 col-end-10&quot;&gt;.col-3 .col-end-10&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-6 col-end-12&quot;&gt;.col-6 .col-end-12&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <p>As you see <code>.col-end</code> class set ending position on the last track no matter how many columns are in a grid.</p>

    <p>And you can mix <code>.col-end-*</code> and <code>.col-start-*</code> classes.</p>

    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-4 col-start example">.col-4 .col-start</div>
            <div class="col-4 col-end example">.col-4 .col-end</div>
            <div class="col-end col-start example">.col-start .col-end</div>
            <div class="col-start-2 col-end-5 example">.col-start-2 .col-end-5</div>
            <div class="col-start-6 col-end-9 example">.col-start-6 .col-end-9</div>
            <div class="col-start-10 col-end example">.col-start-10 .col-end</div>
        </div>
    </div>

    <source-code :height="8"><code class="html">&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-4 col-start&quot;&gt;.col-4 .col-start&lt;/div&gt;
  &lt;div class=&quot;col-4 col-end&quot;&gt;.col-4 .col-end&lt;/div&gt;
  &lt;div class=&quot;col-end col-start&quot;&gt;.col-start .col-end&lt;/div&gt;
  &lt;div class=&quot;col-start-2 col-end-5&quot;&gt;.col-start-2 .col-end-5&lt;/div&gt;
  &lt;div class=&quot;col-start-6 col-end-9&quot;&gt;.col-start-6 .col-end-9&lt;/div&gt;
  &lt;div class=&quot;col-start-10 col-end&quot;&gt;.col-start-10 .col-end&lt;/div&gt;
&lt;/div&gt;
</code></source-code>


    <Header :level="3" name="full-width">Full-width column</Header>
    <p>For full-width columns use <code>.col</code> class and it's responsive variations:</p>

    <div class="container-fluid example">
        <div class="grid-12 example colored-row2">
            <div class="col py-01 bg-yellow">
                Full-width column
            </div>
            <div class="col py-01 bg-yellow">
                Full-width column
            </div>
        </div>
    </div>
    <source-code :height="10"><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;grid-12&quot;&gt;
    &lt;div class=&quot;col&quot;&gt;
      Full-width column
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      Full-width column
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>

    <p>An empty full-width column can be used as a rows break:</p>
    <div class="container-fluid example">
        <div class="grid-12 example colored-row2">
            <div class="col-4 py-01 bg-yellow">
                col-4
            </div>
            <div class="col-6 py-01 bg-yellow">
                col-5
            </div>
            <div class="col"></div><!-- Empty column -->
            <div class="col-4 py-01 bg-yellow">
                col-4
            </div>
            <div class="col-4 py-01 bg-yellow">
                col-4
            </div>
        </div>
    </div>
    <source-code :height="17"><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;grid-12&quot;&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      col-4
    &lt;/div&gt;
    &lt;div class=&quot;col-6&quot;&gt;
      col-5
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;&lt;/div&gt;&lt;!-- Empty column --&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      col-4
    &lt;/div&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      col-4
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>



    
    <Header :level="3" name="column-wrapping">Column wrapping</Header>
    <p>
        If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
    </p>
    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-9 example">.col-9</div>
            <div class="col-4 example">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
            <div class="col-6 example">.col-6<br>Subsequent columns continue along the new line.</div>
        </div>
    </div>
    <source-code :height="5"><code class="html" data-lang="html">&lt;div class="grid-12"&gt;
  &lt;div class="col-9"&gt;.col-9&lt;/div&gt;
  &lt;div class="col-4"&gt;.col-4&lt;br&gt;Since 9 + 4 = 13 &amp;gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.&lt;/div&gt;
  &lt;div class="col-6"&gt;.col-6&lt;br&gt;Subsequent columns continue along the new line.&lt;/div&gt;
&lt;/div&gt;</code></source-code>
    
    
    <Header :level="3" name="column-breaks">Column breaks</Header>
    <p>If you want to break columns inside a single grid container, use empty <code>.col</code> for that. It's a full-width column and it is not dependant on the number of tracks inside the grid.</p>
    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
    
            <!-- Force next columns to break to new line -->
            <div class="col"></div>
    
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
        </div>
    </div>
    <source-code :height="10"><code class="html" data-lang="html">&lt;div class="grid-12"&gt;
  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;
  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;

  &lt;!-- Force next columns to break to new line --&gt;
  <em>&lt;div class="col"&gt;&lt;/div&gt;</em>

  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;
  &lt;div class="col-6 col-sm-3"&gt;.col-6 .col-sm-3&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <Header :level="3" name="grid-gap-0">No gaps</Header>
    <p>The gups between columns can be removed with <code class="highlighter-rouge">.grid-gap-0</code>.</p>

    <div class="container-fluid">
        <div class="grid-12 grid-gap-0">
            <div class="col-12 col-sm-6 col-md-8 example">.col-12 .col-sm-6 .col-md-8</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
        </div>
    </div>

    <source-code :height="4"><code class="html">&lt;div class=&quot;row grid-gap-0&quot;&gt;
  &lt;div class=&quot;col-12 col-sm-6 col-md-8&quot;&gt;.col-12 .col-sm-6 .col-md-8&lt;/div&gt;
  &lt;div class=&quot;col-6 col-md-4&quot;&gt;.col-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <Header :level="3" name="vertical-alignment">Vertical alignment</Header>
    <p>Use <nuxt-link to="/flex#align-items">flexbox alignment utilities</nuxt-link> to vertically align columns.</p>
    <div class="container-fluid">
        <div class="grid-12 align-items-start colored-row">
            <div class="col-4 example">
            One of three columns
            </div>
            <div class="col-4 example">
            One of three columns
            </div>
            <div class="col-4 example">
            One of three columns
            </div>
        </div>
        <div class="grid-12 align-items-center colored-row">
            <div class="col-4 example">
            One of three columns
            </div>
            <div class="col-4 example">
            One of three columns
            </div>
            <div class="col-4 example">
            One of three columns
            </div>
        </div>
        <div class="grid-12 align-items-end colored-row">
            <div class="col-4 example">
            One of three columns
            </div>
            <div class="col-4 example">
            One of three columns
            </div>
            <div class="col-4 example">
            One of three columns
            </div>
        </div>
    </div>

    <source-code :height="35"><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;grid-12 align-items-start&quot;&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;grid-12 align-items-center&quot;&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;grid-12 align-items-end&quot;&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>

    <p>Use <nuxt-link to="/flex#align-self">flexbox self aligment</nuxt-link> utilities to individually align columns.</p>
    
    <div class="container-fluid">
        <div class="grid-12 colored-row">
            <div class="col-4 align-self-start example">
            One of three columns
            </div>
            <div class="col-4 align-self-center example">
            One of three columns
            </div>
            <div class="col-4 align-self-end example">
            One of three columns
            </div>
        </div>
    </div>

    <source-code :height="13"><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;grid-12&quot;&gt;
    &lt;div class=&quot;col-4 align-self-start&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4 align-self-center&quot;&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class=&quot;col-4 align-self-end&quot;&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>


    
    <Header :level="3" name="order-classes">Reordering</Header>
    <p>Use <code class="highlighter-rouge">.order-</code> classes for controlling the <strong>visual order</strong> of your content. These classes are responsive, so you can set the <code class="highlighter-rouge">order</code> by breakpoint (e.g., <code class="highlighter-rouge">.order-1.order-md-2</code>). Includes support for <code class="highlighter-rouge">1</code> through <code class="highlighter-rouge">12</code> across all five grid tiers.</p>
    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-4 example">
            First, but unordered
            </div>
            <div class="col-4 order-12 example">
            Second, but last
            </div>
            <div class="col-4 order-1 example">
            Third, but first
            </div>
        </div>
    </div>
    <source-code :height="13"><code class="html" data-lang="html">&lt;div class="container"&gt;
  &lt;div class="grid-12"&gt;
    &lt;div class="col-4"&gt;
      First, but unordered
    &lt;/div&gt;
    &lt;div class="col-4 order-12"&gt;
      Second, but last
    &lt;/div&gt;
    &lt;div class="col-4 order-1"&gt;
      Third, but first
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <!-- <Header :level="3" name="offsetting-columns">Offsetting columns</Header>
    <p>There are no offsetting columns like in flexbox grids. Instead, you can tell column at which track number it starts with <code>.col-start-*</code> classes.</p> -->
    

    
    
    <Header :level="2" name="nesting">Nesting</Header>
    <p>To nest your content with the default grid, add a new <code>.grid-*</code> within an existing <code>.col-sm-*</code> column. Use any grid from <code>.grid-2</code> to <code>.grid-12</code>.
</p>
    <div class="container-fluid">
        <div class="grid-12">
            <div class="col-sm-9 example">
            Level 1: .col-sm-9
            <div class="grid-12">
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
    <source-code :height="13"><code class="html">&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-sm-9&quot;&gt;
    Level 1: .col-sm-9
    &lt;div class=&quot;grid-12&quot;&gt;
      &lt;div class=&quot;col-8 col-sm-6&quot;&gt;
        Level 2: .col-8 .col-sm-6
      &lt;/div&gt;
      &lt;div class=&quot;col-4 col-sm-6&quot;&gt;
        Level 2: .col-4 .col-sm-6
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <Header :level="3" name="subgrids">Subgrids</Header>
    <p>At the moment in CSS you can't tell subgrids to inherit the layout of the parent grid.</p>
    <p>But with Setka <code>.grid-*</code> classes you can imitate this behavior. For example, in <code>.col-7</code> you can use <code>.grid-7</code>. In the example below all tracks from nested grids coincide with the root grid.</p>

    <div class="container-fluid" style="font-size: 0.8em">
        <div class="grid-12">
            <div class="col-7 example">
                <div class="d-none d-xl-inline">
                    .col-7
                </div>
                <div class="grid-7">
                    <div class="col-4 example">
                        <div class="d-none d-xl-inline">
                            .col-4
                        </div>
                        <div class="grid-4 mt-01">
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                        </div>
                    </div>
                    <div class="col-3 example">
                        <div class="d-none d-xl-inline">
                            .col-3
                        </div>
                        <div class="grid-3 mt-01">
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-5 example">
                <div class="d-none d-xl-inline">
                    .col-5
                </div>
                <div class="grid-5">
                    <div class="col-2 example">
                        <div class="d-none d-xl-inline">
                            .col-2
                        </div>
                        <div class="grid-2 mt-01">
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                        </div>
                    </div>
                    <div class="col-3 example">
                        <div class="d-none d-xl-inline">
                            .col-3
                        </div>
                        <div class="grid-3 mt-01">
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                            <div class="col-1 example"><span class="d-none d-xl-inline">.col-1</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <source-code :height="24"><code class="html">&lt;div class=&quot;grid-12&quot;&gt;
  &lt;div class=&quot;col-7&quot;&gt;
    .col-7
    &lt;div class=&quot;grid-7&quot;&gt;
      &lt;!-- Level 2 grid --&gt;
      &lt;div class=&quot;col-4&quot;&gt;
        .col-4
        &lt;div class=&quot;grid-4&quot;&gt;
          &lt;!-- Level 3 grid --&gt;
          &lt;div class=&quot;col-1&quot;&gt;.col-1&lt;/div&gt;
          &lt;div class=&quot;col-1&quot;&gt;.col-1&lt;/div&gt;
          &lt;div class=&quot;col-1&quot;&gt;.col-1&lt;/div&gt;
          &lt;div class=&quot;col-1&quot;&gt;.col-1&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col-3&quot;&gt;
        &lt;!-- .grid-3 and cols --&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col-5&quot;&gt;
    &lt;!-- .grid-5 and so on --&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></source-code>


    <Header :level="2" name="custom-grids">Custom grids</Header>
    <p>Apply Setka grid tools to your custom grid templates.</p>

    <div class="my-custom-grid">
        <div class="example">.col-1</div>
        <div class="example">.col-1</div>
        <div class="example">.col-1</div>
        <div class="example">.col-1</div>
        <div class="example">.col-1</div>
        <div class="col-2 example">.col-2</div>
        <div class="col-3 example">.col-3</div>
        <div class="col-3 col-end example">.col-3 .col-end</div>
        <div class="col-2 example">.col-2</div>
        <div class="col-1 col-start-4 example">.col-1 .col-start-4</div>
    </div>

    <source-code :height="20"><code>&lt;style&gt;
  .my-custom-grid {
    display: grid;
    grid-template-columns: 10% 15% auto 15% 10%;
    gap: 20px;
  }
&lt;/style&gt;

&lt;div class=&quot;my-custom-grid&quot;&gt;
  &lt;div&gt;.col-1&lt;/div&gt;
  &lt;div&gt;.col-1&lt;/div&gt;
  &lt;div&gt;.col-1&lt;/div&gt;
  &lt;div&gt;.col-1&lt;/div&gt;
  &lt;div&gt;.col-1&lt;/div&gt;
  &lt;div class=&quot;col-2&quot;&gt;.col-2&lt;/div&gt;
  &lt;div class=&quot;col-3&quot;&gt;.col-3&lt;/div&gt;
  &lt;div class=&quot;col-3 col-end&quot;&gt;.col-3 .col-end&lt;/div&gt;
  &lt;div class=&quot;col-2&quot;&gt;.col-2&lt;/div&gt;
  &lt;div class=&quot;col-1 col-start-4&quot;&gt;.col-1 .col-start-4&lt;/div&gt;
&lt;/div&gt;</code></source-code>



  </main>
</template>


<style lang="stylus">
    .my-custom-grid
        display: grid
        grid-template-columns: 10% 15% auto 15% 10%
        gap: 20px

    .grid-image
        height: gu(50)
        +media-up('sm')
            height: gu(60)
        +media-up('xl')
            height: gu(70)

        img
            max-width: 100%
            max-height: 100%
            height: auto
</style>


<script>
export default {
    head: {
      title: 'Grid'
    },
    data() {
        return {
            gridRowExample: [
                { class: "example p-01", text: '1' },
                { class: "example p-01", text: '2' },
                { class: "example p-01", text: '3' },
                { class: "example p-01", text: '4' },
                { class: "example p-01", text: '5' },
                { class: "example p-01", text: '6' },
                { class: "example p-01", text: '7' },
                { class: "example p-01", text: '8' },
                { class: "example p-01", text: '9' },
                { class: "example p-01", text: '10' },
                { class: "example p-01", text: '11' },
                { class: "example p-01", text: '12' },
            ],
            gridColsExample: [
                { class: "example", value: true },
                { class: "example", text: '2' },
                { class: "example", text: '3' },
                { class: "example", text: '4' },
                { class: "example", text: '5' },
                { class: "example", text: '6' },
                { class: "example", text: '7' },
                { class: "example", text: '8' },
                { class: "example", text: '9' },
                { class: "example", text: '10' },
                { class: "example", text: '11' },
                { class: "example", text: '12' },
            ],
        }
    },
    mounted() {
        this.buildTOC()
    }
    
}
</script>
