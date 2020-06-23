(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{305:function(e,t,n){"use strict";n.r(t);var d={head:{title:"Overview"},mounted:function(){this.buildTOC()}},r=n(7),component=Object(r.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{},[n("h1",{staticClass:"mb-01",attrs:{id:"content"}},[e._v("Overview")]),e._v(" "),n("p",{staticClass:"subheader mt-0"},[e._v("Options for laying out your Setka project, including wrapping containers, a powerful grid system, and responsive utility classes.")]),e._v(" "),n("Header",{attrs:{level:2,name:"containers"}},[e._v("Containers")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("source-code",{attrs:{height:3}},[n("code",{staticClass:"html"},[e._v('<div class="container">\n    \x3c!-- Content here --\x3e\n</div>')])]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("source-code",{attrs:{height:3}},[n("code",{staticClass:"html"},[e._v('<div class="container-fluid">\n    ...\n</div>')])]),e._v(" "),n("Header",{attrs:{level:2,name:"responsive-breakpoints"}},[e._v("Responsive breakpoints")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("Setka primarily uses the following media query ranges—or breakpoints—in our source Stylus files for grid system and utilities.")]),e._v(" "),n("source-code",{attrs:{height:14}},[n("code",{staticClass:"css"},[e._v("/* Extra small devices (portrait phones, less than 576px) */\n/* No media query since this is the default in Setka */\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) { ... }\n\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) { ... }\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) { ... }\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) { ... }")]),e._v(" "),n("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-up('xs') { ... }\n+media-up('sm') { ... }\n+media-up('md') { ... }\n+media-up('lg') { ... }\n+media-up('xl') { ... }\n\n// Example usage:\n+media-up('sm')\n    .some-class\n        display: block\n\n")])]),e._v(" "),e._m(6),e._v(" "),n("source-code",{attrs:{height:14}},[n("code",{staticClass:"css"},[e._v("/* Extra small devices (portrait phones, less than 576px) */\n@media (max-width: 575.98px) { ... }\n\n/* Small devices (landscape phones, less than 768px) */\n@media (max-width: 767.98px) { ... }\n\n/* Medium devices (tablets, less than 992px) */\n@media (max-width: 991.98px) { ... }\n\n/* Large devices (desktops, less than 1200px) */\n@media (max-width: 1199.98px) { ... }\n\n/* Extra large devices (large desktops) */\n/* No media query since the extra-large breakpoint has no upper bound on its width */")]),e._v(" "),n("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-down('xs') { ... }\n+media-down('sm') { ... }\n+media-down('md') { ... }\n+media-down('lg') { ... }")])]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.")]),e._v(" "),n("source-code",{attrs:{height:14}},[n("code",{staticClass:"css"},[e._v("/* Extra small devices (portrait phones, less than 576px) */\n@media (max-width: 575.98px) { ... }\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) and (max-width: 767.98px) { ... }\n\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991.98px) { ... }\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) and (max-width: 1199.98px) { ... }\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) { ... }")]),e._v(" "),n("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-only('xs') { ... }\n+media-only('sm') { ... }\n+media-only('md') { ... }\n+media-only('lg') { ... }\n+media-only('xl') { ... }")])]),e._v(" "),n("p",[e._v("Similarly, media queries may span multiple breakpoint widths:")]),e._v(" "),n("source-code",{attrs:{height:3}},[n("code",{staticClass:"css"},[e._v("/* Example */\n/* Apply styles starting from medium devices and up to extra large devices */\n@media (min-width: 768px) and (max-width: 1199.98px) { ... }")]),e._v(" "),n("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-between('md', 'xl') { ... }")])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Containers provide a means to center and horizontally pad your site’s contents. It's not required when using grid system. Use "),t("code",{},[this._v(".container")]),this._v(" for a responsive, fixed-width container (meaning its "),t("code",[this._v("max-width")]),this._v(" changes at each breakpoint).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bd-example"},[t("div",{staticClass:"container w-75 example"},[this._v("\n                Container\n            ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use "),t("code",[this._v(".container-fluid")]),this._v(" for a full width container, spanning 100% width across all viewport and device sizes.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bd-example"},[t("div",{staticClass:"container-fluid example"},[this._v("\n                Fluid container\n            ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"table-bordered table-content"},[n("thead",[n("tr",[n("th",[e._v("Breakpoint")]),e._v(" "),n("th",[e._v("xs")]),e._v(" "),n("th",[e._v("sm")]),e._v(" "),n("th",[e._v("md")]),e._v(" "),n("th",[e._v("lg")]),e._v(" "),n("th",[e._v("xl")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Viewport size")]),e._v(" "),n("td",[e._v("all sizes")]),e._v(" "),n("td",[e._v("\n                        ≥ 576px\n                    ")]),e._v(" "),n("td",[e._v("\n                        ≥ 768px\n                    ")]),e._v(" "),n("td",[e._v("\n                        ≥ 992px\n                    ")]),e._v(" "),n("td",[e._v("\n                        ≥ 1200px\n                    ")])]),e._v(" "),n("tr",[n("td",[e._v("Classname")]),e._v(" "),n("td",[e._v("–")]),e._v(" "),n("td",[n("code",[e._v(".*-sm-*")])]),e._v(" "),n("td",[n("code",[e._v(".*-md-*")])]),e._v(" "),n("td",[n("code",[e._v(".*-lg-*")])]),e._v(" "),n("td",[n("code",[e._v(".*-xl-*")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Since Setka is mobile first, it uses "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"}},[this._v("media queries")]),this._v(" to create sensible breakpoints for our layouts. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We occasionally use media queries that go in the other direction (the given screen size "),t("em",[this._v("or smaller")]),this._v("):")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bd-callout bd-callout-info"},[n("p",[e._v("\n                Note that since browsers do not currently support "),n("a",{attrs:{href:"https://www.w3.org/TR/mediaqueries-4/#range-context"}},[e._v("range context queries")]),e._v(", we work around the limitations of "),n("a",{attrs:{href:"https://www.w3.org/TR/mediaqueries-4/#mq-min-max"}},[n("code",[e._v("min-")]),e._v(" and "),n("code",[e._v("max-")]),e._v(" prefixes")]),e._v(" and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision for these comparisons.\n            ")])])}],!1,null,null,null);t.default=component.exports}}]);