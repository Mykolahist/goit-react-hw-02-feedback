(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){e.exports={font:"'Mukta', sans-serif",message:"Notification_message__2HA0v"}},21:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(9),i=a.n(c),r=a(10),o=a(11),b=a(12),l=a(15),j=a(14),u=a(6),d=a.n(u),m=a(1),O=function(e){var t=e.onLeaveFeedback,a=e.options;return Object(m.jsx)("div",{className:d.a.container,children:a.map((function(e){return Object(m.jsx)("button",{type:"button",className:d.a.button,onClick:t,value:e,children:e},e)}))})},f=a(3),h=a(7),x=Object.freeze({sm:16,md:20}),v=a(4),p=a.n(v),g=function(e){var t=e.good,a=e.neutral,s=e.bad,n=e.total,c=e.positivePercentage;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{className:p.a.title,children:["Statistics ",Object(m.jsx)(f.b,{size:x.sm})]}),Object(m.jsxs)("p",{className:p.a.item,children:[Object(m.jsx)(f.a,{size:x.sm})," Good: ",t]}),Object(m.jsxs)("p",{className:p.a.item,children:[Object(m.jsx)(f.d,{size:x.sm})," Neutral: ",a]}),Object(m.jsxs)("p",{className:p.a.item,children:[Object(m.jsx)(f.c,{size:x.sm})," Bad: ",s]}),Object(m.jsxs)("p",{className:p.a.item,children:[Object(m.jsx)(h.b,{size:x.sm})," Total: ",n]}),Object(m.jsxs)("p",{className:p.a.item,children:[Object(m.jsx)(h.a,{})," Positive feedback: ",c,"%"]})]})},k=a(8),_=a.n(k),N=function(e){var t=e.title,a=e.children;return Object(m.jsxs)("div",{className:_.a.container,children:[Object(m.jsxs)("h1",{className:_.a.title,children:[Object(m.jsx)(f.e,{size:x.md})," ",t," ",Object(m.jsx)(f.e,{size:x.md})]}),a]})};N.defaultProps={title:""};var F=N,P=a(13),z=a.n(P),S=function(e){var t=e.message;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{className:z.a.message,children:t})})};S.defaultProps={message:""};var y=S,M=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){var a=t.currentTarget.value;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,a=t.good,s=t.neutral,n=t.bad;return a+s+n===0?0:Math.round(a/(a+s+n)*100)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,s=e.bad,n=Object.keys(this.state),c=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(m.jsxs)(F,{title:"Please leave feedback",children:[Object(m.jsx)(O,{onLeaveFeedback:this.leaveFeedback,options:n}),t+a+s===0&&Object(m.jsx)(y,{message:"No feedback given"}),t+a+s>0&&Object(m.jsx)(g,{good:t,neutral:a,bad:s,total:c,positivePercentage:i})]})}}]),a}(s.Component);i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={font:"'Mukta', sans-serif",title:"Statistics_title__OSGgk",item:"Statistics_item__1tx5c"}},6:function(e,t,a){e.exports={font:"'Mukta', sans-serif",container:"FeedbackOptions_container__1VuCZ",button:"FeedbackOptions_button__2m2j1"}},8:function(e,t,a){e.exports={font:"'Mukta', sans-serif",container:"Section_container__2gZzh",title:"Section_title__109au"}}},[[21,1,2]]]);
//# sourceMappingURL=main.4d132f37.chunk.js.map