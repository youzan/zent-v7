(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{647:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return S});var t=s(580),p=s.n(t),e=s(23),o=s.n(e),c=s(24),l=s.n(c),u=s(25),k=s.n(u),i=s(26),r=s.n(i),d=s(32),m=s.n(d),g=s(27),h=s.n(g),v=s(28),f=s.n(v),b=s(0),w=s.n(b),y=s(111),E=s(82),z=function(){return w.a.createElement(E.e,{count:5},w.a.createElement(E.O,{type:"bell-o",className:"demo-cont"}))},N=function(){return w.a.createElement("div",null,w.a.createElement(E.e,{count:99},w.a.createElement(E.O,{type:"bell-o",className:"demo-cont"})),w.a.createElement(E.e,{count:120},w.a.createElement(E.O,{type:"bell-o",className:"demo-cont"})),w.a.createElement(E.e,{count:120,maxCount:10},w.a.createElement(E.O,{type:"bell-o",className:"demo-cont"})),w.a.createElement(E.e,{count:1200,maxCount:999},w.a.createElement(E.O,{type:"bell-o",className:"demo-cont"})))},C=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(m()(s),"state",{showZero:!0}),f()(m()(s),"handleChange",function(n){s.setState({showZero:n})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showZero;return w.a.createElement("div",null,w.a.createElement(E.e,{count:0,showZero:n},w.a.createElement(E.O,{type:"bell-o",className:"demo-cont"})),w.a.createElement(E.xb,{size:"small",checked:n,onChange:this.handleChange}))}}]),a}(w.a.Component);return w.a.createElement(n,null)},B=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(m()(s),"state",{showDot:!0}),f()(m()(s),"handleChange",function(n){s.setState({showDot:n})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showDot;return w.a.createElement("div",null,w.a.createElement(E.e,{dot:n},w.a.createElement(E.O,{type:"bell-o",className:"demo-cont"})),w.a.createElement(E.xb,{size:"small",checked:n,onChange:this.handleChange}))}}]),a}(w.a.Component);return w.a.createElement(n,null)},D=function(){return w.a.createElement("div",null,w.a.createElement("div",{className:"zent-badge-demo-wrapper"},w.a.createElement("span",null,"店铺消息"),w.a.createElement(E.e,{count:100})),w.a.createElement("div",{className:"zent-badge-demo-wrapper"},w.a.createElement("span",null,"店铺消息"),w.a.createElement(E.e,{count:100,dot:!0})))},j=function(){return w.a.createElement("div",null,w.a.createElement(E.e,{count:5,offset:[-8,-6]},w.a.createElement("div",{className:"zent-badge-demo-square"})),w.a.createElement(E.e,{dot:!0,offset:[-2,-2]},w.a.createElement("div",{className:"zent-badge-demo-square"})))};function x(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function _(n){return w.a.createElement(x,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function O(n){return w.a.createElement(x,{tag:"style",html:n.style})}var I=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(m()(s),"state",{showCode:!1}),f()(m()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(x,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),S=function(n){function a(){return o()(this,a),k()(this,r()(a).apply(this,arguments))}return h()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(y.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(O,{style:".zent-badge .demo-cont {\n\twidth: 40px;\n\theight: 40px;\n\tline-height: 40px;\n\tborder-radius: 20px;\n\tbackground: #38f;\n\tcolor: #fff;\n\tfont-size: 20px;\n}\n.zent-badge {\n\tmargin-right: 30px;\n}\n\n.zent-badge-demo-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.zent-badge-demo-square {\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 4px;\n\tbackground: #eee;\n}"}),w.a.createElement(_,{html:'<h2 class="anchor-heading"><a href="#badge-hui-biao-shu">¶</a><a href="javascript:void(0)" id="badge-hui-biao-shu" class="anchor-point"></a>Badge 徽标数</h2>\n<p>徽标数，一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>用于提示新的消息，放在文字或者图标右上角或右侧。</li>\n<li>可以显示具体消息的条数。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),w.a.createElement(I,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(I,{title:"设置最大显示信息数",id:"Demomaxnum",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span>Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1200</span><span class="token punctuation">}</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">999</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(N)),w.a.createElement(I,{title:"设置是否显示消息数0",id:"Demoshowzero",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span>Icon<span class="token punctuation">,</span>Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>showZero<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>showZero<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showZero <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> showZero <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">showZero</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showZero<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showZero<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(C)),w.a.createElement(I,{title:"小红点，不需要指定具体的count",id:"Demodot",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span>Icon<span class="token punctuation">,</span>Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>showDot<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>showDot<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showDot <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> showDot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showDot<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showDot<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(B)),w.a.createElement(I,{title:"独立徽标",id:"Demosinglebadge",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>店铺消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>/ <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>店铺消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>Badge count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span> dot<span class="token operator">/</span> <span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(D)),w.a.createElement(I,{title:"自定义偏移量",id:"Demooffset",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(j)),w.a.createElement(_,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>消息条数</td>\n<td><code>number</code></td>\n<td>否</td>\n<td><code>0</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maxCount</td>\n<td>最大完全显示消息条数</td>\n<td><code>number</code></td>\n<td>否</td>\n<td><code>99</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>是否显示为小红点</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code>\n,\n<code>false</code></td>\n</tr>\n<tr>\n<td>showZero</td>\n<td>消息数为0时是否显示</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code>\n,\n<code>false</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>偏移量，格式为 \n<code>[x, y]</code></td>\n<td><code>array</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(b.Component)}}]);