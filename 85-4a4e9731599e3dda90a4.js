(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{636:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return N});var t=s(580),p=s.n(t),o=s(23),e=s.n(o),c=s(24),u=s.n(c),l=s(25),i=s.n(l),k=s(26),r=s.n(k),d=s(32),g=s.n(d),h=s(27),m=s.n(h),v=s(28),f=s.n(v),y=s(0),w=s.n(y),C=s(111),b=s(82),x=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(g()(s),"state",{text:"",suggestions:[]}),f()(g()(s),"onValueChange",function(n){s.setState({text:n})}),f()(g()(s),"onSearchChange",function(n){var a=[];if(n)for(var t=n,p=0;p<4;p++)a.push({content:t,value:p}),t+=n;s.setState({suggestions:a})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){return w.a.createElement(b.Y,{value:this.state.text,onChange:this.onValueChange,onSearchChange:this.onSearchChange,suggestions:this.state.suggestions})}}]),a}(w.a.Component);return w.a.createElement(n,null)},E=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(g()(s),"state",{text:"",suggestions:[{content:"Item 1",value:100},{content:"Item 2",value:200},{content:"Item 3",value:300},{content:"Item 4",value:400},{content:"Item 5",value:500}]}),f()(g()(s),"onValueChange",function(n){s.setState({text:n})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){return w.a.createElement(b.Y,{value:this.state.text,onChange:this.onValueChange,suggestions:this.state.suggestions,multiLine:!0})}}]),a}(w.a.Component);return w.a.createElement(n,null)},S=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(g()(s),"state",{text:"",suggestions:[{content:"Item 1",value:100},{content:"Item 2",value:200},{content:"Item 3",value:300},{content:"Item 4",value:400},{content:"Item 5",value:500}]}),f()(g()(s),"onValueChange",function(n){s.setState({text:n})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){return w.a.createElement(b.Y,{value:this.state.text,onChange:this.onValueChange,suggestions:this.state.suggestions,position:"top"})}}]),a}(w.a.Component);return w.a.createElement(n,null)},I=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(g()(s),"state",{text:"",suggestions:[]}),f()(g()(s),"onValueChange",function(n){s.setState({text:n})}),f()(g()(s),"onSearchChange",function(n){var a=[];if(n)for(var t=n,p=0;p<4;p++)a.push({content:t,value:p}),t+=n;s.setState({suggestions:a})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){return w.a.createElement(b.Y,{value:this.state.text,onChange:this.onValueChange,onSearchChange:this.onSearchChange,suggestions:this.state.suggestions,addonBefore:"Buy",addonAfter:"Apple"})}}]),a}(w.a.Component);return w.a.createElement(n,null)};function M(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return w.a.createElement(M,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return w.a.createElement(M,{tag:"style",html:n.style})}var D=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(g()(s),"state",{showCode:!1}),f()(g()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(M,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),N=function(n){function a(){return e()(this,a),i()(this,r()(a).apply(this,arguments))}return m()(a,n),u()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(C.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(z,{style:""}),w.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#mention-ti-ji">¶</a><a href="javascript:void(0)" id="mention-ti-ji" class="anchor-point"></a>Mention 提及</h2>\n<p>用于自动补全提及的内容，例如常见的 @某人。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),w.a.createElement(D,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Mention <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> val <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token punctuation">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onSearchChange</span> <span class="token operator">=</span> search <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>search<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> v <span class="token operator">=</span> search<span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        suggestions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          content<span class="token punctuation">:</span> v<span class="token punctuation">,</span>\n          value<span class="token punctuation">:</span> i<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v <span class="token operator">=</span> v <span class="token operator">+</span> search<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onSearchChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSearchChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>suggestions<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MentionDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(x)),w.a.createElement(D,{title:"多行模式",id:"Demomultiline",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Mention <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 1\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 2\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 3\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 4\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 5\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> val <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token punctuation">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>suggestions<span class="token punctuation">}</span></span>\n        <span class="token attr-name">multiLine</span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MentionDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(E)),w.a.createElement(D,{title:"弹层位置",id:"Demoposition",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Mention <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 1\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 2\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 3\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 4\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'Item 5\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> val <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token punctuation">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>suggestions<span class="token punctuation">}</span></span>\n        <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MentionDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(S)),w.a.createElement(D,{title:"Input 有 Prefix 和 Suffix",id:"Demowithinputprefix",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Mention <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> val <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token punctuation">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onSearchChange</span> <span class="token operator">=</span> search <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>search<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> v <span class="token operator">=</span> search<span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        suggestions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          content<span class="token punctuation">:</span> v<span class="token punctuation">,</span>\n          value<span class="token punctuation">:</span> i<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v <span class="token operator">=</span> v <span class="token operator">+</span> search<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onSearchChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSearchChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>suggestions<span class="token punctuation">}</span></span>\n        <span class="token attr-name">addonBefore</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Buy<span class="token punctuation">"</span></span> <span class="token attr-name">addonAfter</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Apple<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MentionDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(I)),w.a.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>输入框的内容</td>\n<td><code>string</code></td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>输入框内容变化时的回调函数</td>\n<td><code>(val: string): void</code></td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onSearchChange</td>\n<td>触发提及的搜索文字变化时的回调函数</td>\n<td><code>(search: string): void</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>multiLine</td>\n<td>输入框是否是多行模式</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>弹层相对文字的位置</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>bottom</code></td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>suggestions</td>\n<td>提及的提示内容</td>\n<td><code>array</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>suggestionNotFoundContent</td>\n<td>提及的提示为空时的提示内容</td>\n<td><code>node</code></td>\n<td><code>\'无匹配结果，轻敲空格完成输入\'</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>triggerText</td>\n<td>提及的触发前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'@\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义类名前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p><code>Mention</code> 支持 <code>Input</code> 的 props，例如 <code>placeholder</code> 等。</p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#zhi-chi-de-suggestions-shu-zu-xing-shi">¶</a><a href="javascript:void(0)" id="zhi-chi-de-suggestions-shu-zu-xing-shi" class="anchor-point"></a>支持的 <code>suggestions</code> 数组形式</h4>\n<p><code>suggestions</code> 数组中每一项可以是以下任意一种：</p>\n<ul>\n<li>字符串</li>\n<li>数字</li>\n<li>对象</li>\n</ul>\n<p>对象形式支持的字段如下:</p>\n<table class="table">\n<thead>\n<tr>\n<th>字段</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>选中时对应的值</td>\n<td><code>string</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>content</td>\n<td>选项的描述，不填默认使用 \n<code>value</code></td>\n<td><code>node</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标类型</td>\n<td><code>string</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>选项是否禁用</td>\n<td><code>bool</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>isGroup</td>\n<td>是否是分组标题</td>\n<td><code>bool</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>isDivider</td>\n<td>是否是分割线</td>\n<td><code>bool</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(y.Component)}}]);