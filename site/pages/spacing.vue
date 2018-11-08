<template>
    <div class="container">
        <h1>Spacing</h1>

        <div class="row">
            <div class="col-auto">
                Margins
                <table class="format">
                    <tbody>
                        <tr>
                            <td class="text-right">
                                <div><code>.mt-</code></div>
                                <div><code>.mb-</code></div>
                                <div><code>.ml-</code></div>
                                <div><code>.mr-</code></div>
                                <div><code>.mx-</code></div>
                                <div><code>.my-</code></div>
                                
                            </td>
                            <td class="text-center">
                                <div><code class="empty"></code></div>
                                <div><code>sm-</code></div>
                                <div><code>md-</code></div>
                                <div><code>lg-</code></div>
                                <div><code>xl-</code></div>
                            </td>
                            <td>
                                <div><code>0</code></div>
                                <div><code>01</code></div>
                                <div><code>1</code></div>
                                <div><code>2</code></div>
                                <div><code>3</code></div>
                                <div><code>4</code></div>
                                <div><code>auto</code></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-auto">
                Paddings
                <table class="format">
                    <tbody>
                        <tr>
                            <td class="text-right">
                                <div><code>.pt-</code></div>
                                <div><code>.pb-</code></div>
                                <div><code>.pl-</code></div>
                                <div><code>.pr-</code></div>
                                <div><code>.px-</code></div>
                                <div><code>.py-</code></div>
                                
                            </td>
                            <td class="text-center">
                                <div><code class="empty"></code></div>
                                <div><code>sm-</code></div>
                                <div><code>md-</code></div>
                                <div><code>lg-</code></div>
                                <div><code>xl-</code></div>
                            </td>
                            <td>
                                <div><code>0</code></div>
                                <div><code>01</code></div>
                                <div><code>1</code></div>
                                <div><code>2</code></div>
                                <div><code>3</code></div>
                                <div><code>4</code></div>
                                <div><code>auto</code></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <p>The classes are named using the format <code>{property}{sides}-{size}</code> for <code>xs</code> and <code>{property}{sides}-{breakpoint}-{size}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>
        <p>Where sides is one of:</p>
        <p>
        <code>mt</code>, <code>pt</code> - for classes that set margin-top or padding-top<br>
        <code>mb</code>, <code>pb</code> - for classes that set margin-bottom or padding-bottom<br>
        <code>ml</code>, <code>pl</code> - for classes that set margin-left or padding-left<br>
        <code>mr</code>, <code>pr</code> - for classes that set margin-right or padding-right<br>
        <code>mx</code>, <code>px</code> - for classes that set both *-left and *-right<br>
        <code>my</code>, <code>py</code> - for classes that set both *-top and *-bottom
        </p>
        <p>
        <code>0</code> - for classes that eliminate the margin or padding by setting it to 0<br>
        <code>01</code> - (by default) for classes that set the margin or padding to 1 grid unit<br>
        <code>1</code> - (by default) for classes that set the margin or padding to 1 line-height<br>
        <code>2</code> - (by default) for classes that set the margin or padding to 2 line-height<br>
        <code>3</code> - (by default) for classes that set the margin or padding to 3 line-height<br>
        <code>4</code> - (by default) for classes that set the margin or padding to 4 line-height<br>
        <code>auto</code> - for classes that set the margin to auto
        </p>
    </div>
</template>
