(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{286:function(n,e,s){"use strict";s.r(e);var t=s(4),a=Object(t.a)({},function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("main",{},[s("h1",{staticClass:"mb-0"},[n._v("Stylus variables")]),n._v(" "),s("p",{staticClass:"subheader"},[n._v("With stylus you can change number of grid columns, breapoints ans other utilities.")]),n._v(" "),s("p",[n._v("These are all available Stylus variables.")]),n._v(" "),s("source-code",{attrs:{height:40}},[s("code",{staticClass:"stylus"},[n._v("// Amount of columns in grid \n// Example: if you set it to 16, than classes like .col-16 .col-sm-16 will be available\n$grid-columns = 12\n\n// Amount of columns in grid.\n$grid-breakpoints = {\n    xs: 0,     // Extra small screen / phone\n    sm: 576px, // Small screen / phone\n    md: 768px, // Medium screen / tablet\n    lg: 992px, // Large screen / desktop\n    xl: 1200px // Extra large screen / wide desktop\n}\n\n$container-max-widths = {\n    sm: 540px,\n    md: 720px,\n    lg: 960px,\n    xl: 1140px\n}\n\n// Sized for width (.w-50) and height (.h-100) utilities\n$sizes = {\n    '25': 25%,\n    '50': 50%,\n    '75': 75%,\n    '100': 100%,\n    auto: auto\n}\n\n// Settings for spacing utilities\n$spacers = {\n    '0':    0,\n    '01':   gu(1),\n    '1':    var(--space-1),\n    '2':    var(--space-2),\n    '3':    var(--space-3),\n    '4':    var(--space-4),\n    '5':    var(--space-5)\n    'auto': s('auto')\n}")])]),n._v(" "),s("p",[n._v("To generate styles with you settings:")]),n._v(" "),s("source-code",{attrs:{height:15}},[s("code",{staticClass:"stylus"},[n._v("// Import library\n"),s("em",[n._v("@import 'setka'")]),n._v("\n\n// Set variables\n"),s("em",[n._v("$grid-breakpoints")]),n._v(" = {\n    xs: 0, \n    sm: 400px, \n    md: 600px,\n    lg: 800px,\n    xl: 1050px,\n    hd: 1800px\n}\n\n// Then generate Setka's styles\n"),s("em",[n._v("setka()")])])])],1)},[],!1,null,null,null);a.options.__file="vars.vue";e.default=a.exports}}]);