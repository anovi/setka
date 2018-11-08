<template>
  <div>

    <div class="container">
        <h1>Grid</h1>

        <div class="row">
            <div class="col-auto">
                <table class="format mt-0">
                    <tr>
                        <td>
                            <div><code>.container</code></div>
                            <div><code>.container-fluid</code></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-auto">
                <table class="format mt-0">
                    <tr>
                        <td>
                            <div><code>.row</code></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col">
                <table class="format mt-0">
                    <tbody>
                        <tr>
                            <td class="text-right">
                                <div><code>.col-</code></div>
                            </td>
                            <td class="text-left">
                                <div><code class="empty"></code></div>
                                <div><code>sm-</code></div>
                                <div><code>md-</code></div>
                                <div><code>lg-</code></div>
                                <div><code>xl-</code></div>
                            </td>
                            <td>
                                <div><code>1</code></div>
                                <div><code>2</code></div>
                                <div><code>3</code></div>
                                <div><code>4</code></div>
                                <div><code>5</code></div>
                                <div><code>6</code></div>
                                <div><code>7</code></div>
                                <div><code>8</code></div>
                                <div><code>9</code></div>
                                <div><code>10</code></div>
                                <div><code>11</code></div>
                                <div><code>12</code></div>
                            </td>
                            <td class="format-additional">
                                <div>Additional:</div>
                                <div><code>.no-gutters</code></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <h2>Equal-width</h2>

        <div class="row">
            <div class="col">
            <p class="mt-0">For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
            </div>
        </div>
      
    
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

    <div class="container">
        <p>Equal-width columns can be broken into multiple lines, but there was a Safari flexbox bug that prevented this from working without an explicit flex-basis or border. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.</p>
        <div class="row">
            <div class="col example">Column</div>
            <div class="col example">Column</div>
            <div class="w-100"></div>
            <div class="col example">Column</div>
            <div class="col example">Column</div>
        </div>
    </div>

    <div class="container">
        <h2>Setting one column width</h2>
        <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
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

    

    <div class="container">
        <h2>Variable width content</h2>
        <p>Use col-{breakpoint}-auto classes to size columns based on the natural width of their content.</p>
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

    
    <div class="container">
        <h2>Mix and match</h2>
        <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
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



    <div class="container">
        <h2>Aligment</h2>
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

    <div class="container">
        <h2>Horizontal alignment</h2>
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

    
    
    <div class="container">
        <h2>No gutters</h2>
        <div class="row no-gutters">
            <div class="col-12 col-sm-6 col-md-8 example">.col-12 .col-sm-6 .col-md-8</div>
            <div class="col-6 col-md-4 example">.col-6 .col-md-4</div>
        </div>
    </div>

    
    <div class="container">
        <h2>Column breaks</h2>
        <p>Breaking columns to a new line in flexbox requires a small hack: add an element with width: 100% wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple .rows, but not every implementation method can account for this.</p>
        <div class="row">
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>

            <!-- Force next columns to break to new line -->
            <div class="w-100"></div>

            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3 example">.col-6 .col-sm-3</div>
        </div>
    </div>


    

    <div class="container">
        <h2>Order classes</h2>
        <p>Use .order- classes for controlling the visual order of your content. These classes are responsive, so you can set the order by breakpoint (e.g., .order-1.order-md-2). Includes support for 1 through 12 across all five grid tiers.</p>
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


    
    <div class="container">
        <h2>Offset classes</h2>
        <p>Move columns to the right using .offset-md-* classes. These classes increase the left margin of a column by * columns. For example, .offset-md-4 moves .col-md-4 over four columns.</p>
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

    
    <div class="container">
        <h2>Nesting</h2>
        <p>To nest your content with the default grid, add a new .row and set of .col-sm-* columns within an existing .col-sm-* column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
        <div class="row">
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




  </div>
</template>


<style lang="stylus">
@import '~~@@/lib/@anovi/invisible/index.styl'

.example.col, .example[class^=col-] {
  padding-top: gu(1);
  padding-bottom: gu(1);
  background-color: rgba(86,61,124,.15);
  box-shadow: inset 0 0 0 1px rgba(86,61,124,.2);
}
.colored-row {
  margin-top: gu(2)
  height: gu(12)
  background: rgba(255,0,0,0.1)
}
</style>

