(this.webpackJsonpfoodieclub=this.webpackJsonpfoodieclub||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(4),r=t.n(a),o=(t(10),t(3)),s=t(0);function d(e){var n=e.item;return Object(s.jsxs)("div",{className:"product",children:[Object(s.jsx)("h5",{children:n.name}),Object(s.jsx)("p",{children:n.price})]})}var h=i.a.memo(d);function l(e){var n=e.data,t=e.inStockCheck,i=n.items,a=Object(c.useMemo)((function(){return i.filter((function(e){return!0===e.inStock}))}),[i]);return Object(s.jsxs)("div",{className:"departments",children:[Object(s.jsx)("h3",{children:n.category}),t?a.map((function(e,n){return Object(s.jsx)(h,{item:e},n)})):i.map((function(e,n){return Object(s.jsx)(h,{item:e},n)}))]})}var u=i.a.memo(l);var b=function(e){var n=e.data,t=Object(c.useRef)(),i=Object(c.useState)("All"),a=Object(o.a)(i,2),r=a[0],d=a[1],h=Object(c.useState)(!1),l=Object(o.a)(h,2),b=l[0],p=l[1],m=Object(c.useMemo)((function(){return n.filter((function(e){return e.category===r}))}),[r,n]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("select",{className:"categorySelect",ref:t,onChange:function(e){var n=t.current.value;""!==n&&d(n)},children:[Object(s.jsx)("option",{value:"All",children:"Select"}),n.map((function(e,n){var t=e.category;return Object(s.jsx)("option",{value:t,children:t},n)}))]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{display:"inline"},children:[Object(s.jsx)("input",{type:"checkbox",className:"toggleCheckbox",value:b,onClick:function(){return p((function(e){return!e}))}}),Object(s.jsx)("label",{children:"Show items in Stock only"})]}),Object(s.jsx)("div",{children:"All"!==r?m.map((function(e,n){return Object(s.jsx)(u,{inStockCheck:b,data:e},n)})):n.map((function(e,n){return Object(s.jsx)(u,{inStockCheck:b,data:e},n)}))})]})},p=t(5);var m=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h3",{children:"Welcome to Foodie Club"}),Object(s.jsx)(b,{data:p})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),j()},5:function(e){e.exports=JSON.parse('[{"category":"veg-sandwich","items":[{"name":"Mushroom Cheese Sandwich","description":"Grilled Sandwich made of white or brown bread, cheese  & mushroom","price":"375rs","inStock":false},{"name":"Corn Spinach Sandwich","description":"Sandwich made with brown bread and corn spinach filling.","price":"240rs","inStock":true},{"name":"Jalapeno Cheese Sandwich","description":"Grilled Sandwich made of white or brown bread, cheese  & jalapeno","price":"350rs","inStock":true},{"name":"Salad Sandwich","description":"Sandwich made of whole grain bread, Tomato, cucumber, lettuce","price":"150rs","inStock":true}]},{"category":"non-veg-sandwich","items":[{"name":"Egg Salad Sandwich","description":"White bread sandwich with chopped hard boiledeggs, green onion, celery","price":"200rs","inStock":true},{"name":"Chicken Club Sandwich","description":"White bread club sandwich filled with chicken and bacon","price":"380rs","inStock":true},{"name":"Chicken Tandoori Sandwich","description":"wich filled with grilled tandoori chicken pieces with lettuce and mayonnaise","price":"400rs","inStock":false},{"name":"Chicken Salad Sandwich","description":"White bread sandwich filled with chicken breast, garden salad, mayonnaise, and herbs.","price":"390rs","inStock":true}]},{"category":"Milk-Shake","items":[{"name":"Chocolatier","description":"chocolate shake with brownies, hot fudge, and chocolate chips","price":"275rs","inStock":false},{"name":"Bananas Foster","description":"vanilla shake with caramel, banana, toffee syrup, banana syrup, and cinnamon","price":"250rs","inStock":true},{"name":"Caramel Macchiato","description":"coffee shake made with cold brew coffee and caramel, topped with whipped cream","price":"350rs","inStock":true},{"name":"Peanut Butter Brownie","description":"peanut butter shake with brownies and hot fudge","price":"325rs","inStock":true}]}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.ed933840.chunk.js.map