(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8852:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return d}});var t=s(9197),i=s.n(t),n=s(5893),c=function(e){var r=e.data,s=e.timeframes;return(0,n.jsx)(n.Fragment,{children:r.map((function(e,r){return(0,n.jsxs)("div",{className:i().card,style:{backgroundColor:"".concat(e.color)},children:[(0,n.jsx)("img",{src:e.image,className:i().pattern,alt:"pattern"}),(0,n.jsxs)("div",{className:i().card_content,children:[(0,n.jsxs)("div",{className:i().card_title,children:[(0,n.jsxs)("h3",{children:[" ",e.title]}),(0,n.jsx)("img",{src:"icon-ellipsis.svg",alt:""})]}),"daily"===s&&(0,n.jsxs)("div",{className:i().card_text,children:[(0,n.jsxs)("h1",{children:[" ",e.timeframes.daily.current,"hrs"]})," ",(0,n.jsxs)("p",{children:[" Last day - ",e.timeframes.daily.previous]})," "]}),"weekly"===s&&(0,n.jsxs)("div",{className:i().card_text,children:[" ",(0,n.jsxs)("h1",{children:[" ",e.timeframes.weekly.current,"hrs"]})," ",(0,n.jsxs)("p",{children:[" Last week - ",e.timeframes.weekly.previous]})," "]}),"monthly"===s&&(0,n.jsxs)("div",{className:i().card_text,children:[(0,n.jsxs)("h1",{children:[" ",e.timeframes.monthly.current,"hrs"]})," ",(0,n.jsxs)("p",{children:[" Last month - ",e.timeframes.monthly.previous]})]})]})]},r)}))})},a=function(e){var r=e.data,s=e.filterfunc,t=e.timeframes;return(0,n.jsxs)("div",{className:i().grid,children:[(0,n.jsxs)("div",{className:i().person_card,children:[(0,n.jsxs)("div",{className:i().person_section,children:[(0,n.jsx)("img",{src:"image-jeremy.png",alt:""}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:" Report for "}),(0,n.jsx)("h1",{children:" Jeremy Jobson"})]})]}),(0,n.jsxs)("div",{className:i().person_buttons,children:[(0,n.jsx)("button",{onClick:function(){return s("daily")},children:" Daily "}),(0,n.jsx)("button",{onClick:function(){return s("weekly")},children:" Weekly "}),(0,n.jsx)("button",{onClick:function(){return s("monthly")},children:" Monthly "})]})]}),(0,n.jsx)(c,{data:r,timeframes:t})]})},l=s(7294),o=JSON.parse('[{"title":"Work","image":"icon-work.svg","color":"hsl(15, 100%, 70%)","timeframes":{"daily":{"current":5,"previous":7},"weekly":{"current":32,"previous":36},"monthly":{"current":103,"previous":128}}},{"title":"Play","image":"icon-play.svg","color":"hsl(195, 74%, 62%)","timeframes":{"daily":{"current":1,"previous":2},"weekly":{"current":10,"previous":8},"monthly":{"current":23,"previous":29}}},{"title":"Study","image":"icon-study.svg","color":"hsl(348, 100%, 68%)","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":4,"previous":7},"monthly":{"current":13,"previous":19}}},{"title":"Exercise","image":"icon-exercise.svg","color":"hsl(145, 58%, 55%)","timeframes":{"daily":{"current":1,"previous":1},"weekly":{"current":4,"previous":5},"monthly":{"current":11,"previous":18}}},{"title":"Social","image":"icon-social.svg","color":"hsl(264, 64%, 52%)","timeframes":{"daily":{"current":1,"previous":3},"weekly":{"current":5,"previous":10},"monthly":{"current":21,"previous":23}}},{"title":"Self Care","image":"icon-self-care.svg","color":"hsl(43, 84%, 65%)","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":2,"previous":2},"monthly":{"current":7,"previous":11}}}]');function d(){var e=(0,l.useState)("weekly"),r=e[0],s=e[1];return(0,n.jsx)(a,{data:o,filterfunc:function(e){s(e)},timeframes:r})}},8581:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8852)}])},9197:function(e){e.exports={grid:"Card_grid__8KHSM",person_card:"Card_person_card__1H6Zf",person_section:"Card_person_section__3wLJI",person_buttons:"Card_person_buttons__398lU",card:"Card_card__2cXDm",card_content:"Card_card_content__1cYDA",pattern:"Card_pattern__juvHO",card_title:"Card_card_title__1Md6R",card_text:"Card_card_text__iSccM"}}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);