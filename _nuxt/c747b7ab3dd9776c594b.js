/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{332:function(t,e,r){var content=r(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("790a7675",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";var n=r(332);r.n(n).a},336:function(t,e,r){(e=r(11)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},340:function(t,e,r){"use strict";var n=r(0).default.extend({props:{icon:{type:String}}}),o=(r(335),r(9)),d=r(45),c=r.n(d),f=r(297),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;c()(component,{VIcon:f.a})},391:function(t,e,r){var content=r(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("2110844c",content,!0,{sourceMap:!1})},392:function(t,e,r){var content=r(539);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("3aef1753",content,!0,{sourceMap:!1})},534:function(t,e,r){t.exports=function(){"use strict";var t,e,r="undefined"!=typeof console;t=function(t,o,d){void 0===d&&(d="error"),r&&console[d]("[vue-paginate]: "+t+" "+(o?n(e(o)):""))},e=function(t){if(t.$root===t)return"root instance";var e=t._isVue?t.$options.name||t.$options._componentTag:t.name;return(e?"component <"+e+">":"anonymous component")+(t._isVue&&t.$options.__file?" at "+t.$options.__file:"")};var n=function(t){return"anonymous component"===t&&(t+=' - use the "name" option for better debugging messages.'),"\n(found in "+t+")"},o={name:"paginate",props:{name:{type:String,required:!0},list:{type:Array,required:!0},per:{type:Number,default:3,validator:function(t){return t>0}},tag:{type:String,default:"ul"},container:{type:Object,default:null}},data:function(){return{initialListSize:this.list.length}},computed:{parent:function(){return this.container?this.container:this.$parent},currentPage:{get:function(){if(this.parent.paginate[this.name])return this.parent.paginate[this.name].page},set:function(t){this.parent.paginate[this.name].page=t}},pageItemsCount:function(){var t=this.list.length;return this.currentPage*this.per+1+"-"+Math.min(this.currentPage*this.per+this.per,t)+" of "+t},lastPage:function(){return Math.ceil(this.list.length/this.per)}},mounted:function(){this.per<=0&&t('<paginate name="'+this.name+"\"> 'per' prop can't be 0 or less.",this.parent),this.parent.paginate[this.name]?this.paginateList():t("'"+this.name+"' is not registered in 'paginate' array.",this.parent)},watch:{currentPage:function(){this.paginateList()},list:function(){this.currentPage>=this.lastPage&&(this.currentPage=this.lastPage-1),this.paginateList()},per:function(){this.currentPage=0,this.paginateList()}},methods:{paginateList:function(){var t=this.currentPage*this.per,e=this.list.slice(t,t+this.per);this.parent.paginate[this.name].list=e},goToPage:function(e){var r=Math.ceil(this.list.length/this.per);e>r?t("You cannot go to page "+e+". The last page is "+r+".",this.parent):this.currentPage=e-1}},render:function(t){return t(this.tag,{},this.$slots.default)}},d=function(t,e,r){this.listOfPages=t,this.lastPage=t.length-1,this.currentPage=e===this.lastPage?this.lastPage-1:e,this.limit=r};d.prototype.generate=function(){var t=this._buildFirstHalf(),e=this._buildSecondHalf();return t.concat(e)},d.prototype._buildFirstHalf=function(){var t=this._allPagesButLast().slice(this._currentChunkIndex(),this._currentChunkIndex()+this.limit);return this.currentPage>=this.limit&&(t.unshift("…"),t.unshift(0)),this.lastPage-this.limit>this._currentChunkIndex()&&t.push("…"),t},d.prototype._buildSecondHalf=function(){return[this.lastPage]},d.prototype._currentChunkIndex=function(){return Math.floor(this.currentPage/this.limit)*this.limit},d.prototype._allPagesButLast=function(){var t=this;return this.listOfPages.filter((function(e){return e!==t.lastPage}))};var c={name:"paginate-links",props:{for:{type:String,required:!0},limit:{type:Number,default:0},simple:{type:Object,default:null,validator:function(t){return t.prev&&t.next}},stepLinks:{type:Object,default:function(){return{prev:"«",next:"»"}},validator:function(t){return t.prev&&t.next}},showStepLinks:{type:Boolean},hideSinglePage:{type:Boolean},classes:{type:Object,default:null},async:{type:Boolean,default:!1},container:{type:Object,default:null}},data:function(){return{listOfPages:[],numberOfPages:0,target:null}},computed:{parent:function(){return this.container?this.container.el:this.$parent},state:function(){return this.container?this.container.state:this.$parent.paginate[this.for]},currentPage:{get:function(){if(this.state)return this.state.page},set:function(t){this.state.page=t}}},mounted:function(){var e=this;this.simple&&this.limit&&t('<paginate-links for="'+this.for+"\"> 'simple' and 'limit' props can't be used at the same time. In this case, 'simple' will take precedence, and 'limit' will be ignored.",this.parent,"warn"),this.simple&&!this.simple.next&&t('<paginate-links for="'+this.for+"\"> 'simple' prop doesn't contain 'next' value.",this.parent),this.simple&&!this.simple.prev&&t('<paginate-links for="'+this.for+"\"> 'simple' prop doesn't contain 'prev' value.",this.parent),this.stepLinks&&!this.stepLinks.next&&t('<paginate-links for="'+this.for+"\"> 'step-links' prop doesn't contain 'next' value.",this.parent),this.stepLinks&&!this.stepLinks.prev&&t('<paginate-links for="'+this.for+"\"> 'step-links' prop doesn't contain 'prev' value.",this.parent),this.$nextTick((function(){e.updateListOfPages()}))},watch:{state:{handler:function(){this.updateListOfPages()},deep:!0},currentPage:function(t,e){this.$emit("change",t+1,e+1)}},methods:{updateListOfPages:function(){var e,r,n;if(this.target=(e=this.parent.$children,r=this.for,e.filter((function(t){return"paginate"===t.$vnode.componentOptions.tag})).find((function(t){return t.name===r}))),!this.target){if(this.async)return;return t('<paginate-links for="'+this.for+'"> can\'t be used without its companion <paginate name="'+this.for+'">',this.parent),void t('To fix that issue you may need to use :async="true" on <paginate-links> component to allow for asyncronous rendering',this.parent,"warn")}this.numberOfPages=Math.ceil(this.target.list.length/this.target.per),this.listOfPages=(n=this.numberOfPages,Array.apply(null,{length:n}).map((function(t,e){return e})))}},render:function(t){var e=this;if(!this.target&&this.async)return null;var r=this.simple?function(t,e){var r=t.listOfPages.length-1,n={on:{click:function(e){e.preventDefault(),t.currentPage>0&&(t.currentPage-=1)}}},o={on:{click:function(e){e.preventDefault(),t.currentPage<r&&(t.currentPage+=1)}}},d={class:["next",t.currentPage>=r?"disabled":""]},c={class:["prev",t.currentPage<=0?"disabled":""]},f=e("li",c,[e("a",n,t.simple.prev)]),l=e("li",d,[e("a",o,t.simple.next)]);return[f,l]}(this,t):this.limit>1?function(t,e){var r=new d(t.listOfPages,t.currentPage,t.limit,t.stepLinks).generate(),n=function(t){return t.map((function(link,e){return"…"===link&&0===t[e-1]?"left-ellipses":"…"===link&&0!==t[e-1]?"right-ellipses":link}))}(r=t.showStepLinks?[t.stepLinks.prev].concat(r,[t.stepLinks.next]):r);return r.map((function(link,r){var data={on:{click:function(e){e.preventDefault(),t.currentPage=l(link,t.limit,t.currentPage,t.listOfPages,t.stepLinks,n[r])}}},o=f(link,t.currentPage,t.listOfPages.length-1,t.stepLinks),text=link===parseInt(link,10)?link+1:link;return e("li",{class:o},[e("a",data,text)])}))}(this,t):function(t,e){return(t.showStepLinks?[t.stepLinks.prev].concat(t.listOfPages,[t.stepLinks.next]):t.listOfPages).map((function(link){var data={on:{click:function(e){e.preventDefault(),t.currentPage=l(link,t.limit,t.currentPage,t.listOfPages,t.stepLinks)}}},r=f(link,t.currentPage,t.listOfPages.length-1,t.stepLinks),n=link===t.stepLinks.next||link===t.stepLinks.prev?link:link+1;return e("li",{class:r},[e("a",data,n)])}))}(this,t);if(this.hideSinglePage&&this.numberOfPages<=1)return null;var n=t("ul",{class:["paginate-links",this.for]},r);return this.classes&&this.$nextTick((function(){var t,r;t=n.elm,r=e.classes,Object.keys(r).forEach((function(e){if("ul"===e){var n=r.ul;Array.isArray(n)?n.forEach((function(e){return t.classList.add(e)})):t.classList.add(n)}t.querySelectorAll(e).forEach((function(t){var n=r[e];Array.isArray(n)?n.forEach((function(e){return t.classList.add(e)})):t.classList.add(n)}))}))})),n}};function f(link,t,e,r){var n=r.prev,o=r.next,d=[];return link===n?d.push("left-arrow"):link===o?d.push("right-arrow"):"…"===link?d.push("ellipses"):d.push("number"),link===t&&d.push("active"),(link===n&&t<=0||link===o&&t>=e)&&d.push("disabled"),d}function l(link,t,e,r,n,o){var d=n.prev,c=n.next;void 0===o&&(o=null);var f=Math.floor(e/t);if(link===d)return e-1<0?0:e-1;if(link===c)return e+1>r.length-1?r.length-1:e+1;if(o&&"right-ellipses"===o)return(f+1)*t;if(o&&"left-ellipses"===o){var l=r.slice(f*t,f*t+t);return e===r.length-1&&1===l.length&&f--,(f-1)*t+t-1}return link}var h={install:function(e){e.mixin({created:function(){var t;"undefined"!==this.paginate&&this.paginate instanceof Array&&(this.paginate=(void 0===(t=this.paginate)&&(t=[]),t.reduce((function(t,e){return t[e]={list:[],page:0},t}),{})))},methods:{paginated:function(e){if(this.paginate&&this.paginate[e])return this.paginate[e].list;t("'"+e+"' is not registered in 'paginate' array.",this)}}}),e.component("paginate",o),e.component("paginate-links",c)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(h),h}()},535:function(t,e,r){"use strict";var n=r(391);r.n(n).a},536:function(t,e,r){(e=r(11)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}.pagination{padding-right:24px;margin-right:10px;display:flex;list-style-type:none;justify-content:center}.pagination li{margin-left:10px;font-size:1.2em}",""]),t.exports=e},537:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/12/31","text":"12月31日、本県383～387例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/30","text":"12月30日、本県379～382例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/29","text":"12月29日、本県370～378例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/28","text":"12月28日、本県367～369例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/27","text":"12月27日、本県362～366例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/26","text":"12月26日、本県356～361例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/25","text":"12月25日、本県346～355例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/24","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月24日、本県335～345例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/23","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月23日、本県331～334例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/22","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月22日、本県325～330例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/21","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月21日、本県315～324例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/20","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月20日、本県310～314例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/19","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月19日、本県303～309例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/18","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月18日、本県297～302例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/17","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月17日、本県291～296例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/16","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月16日、本県282～290例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/15","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月15日、本県266～281例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/14","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月14日、本県254～265例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/13","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月13日、本県241～253例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/12","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月12日、本県219～240例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/11","url":"https://www.pref.yamagata.jp/090001/bosai/kochibou/kikikanri/covid19/shingata_corona3.html","text":"12月11日、本県212～218例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/10","url":"https://www.pref.yamagata.jp/documents/18653/corona-press208_211.pdf","text":"12月10日、本県208～211例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/10","url":"https://www.pref.yamagata.jp/documents/18653/corona-press207.pdf","text":"12月10日、本県207例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/10","url":"https://www.pref.yamagata.jp/documents/18653/corona-press201-206.pdf","text":"12月10日、本県201～206例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/10","url":"https://www.pref.yamagata.jp/documents/18653/corona-press200.pdf","text":"12月10日、本県200例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/10","url":"https://www.pref.yamagata.jp/documents/18653/corona-press199.pdf","text":"12月10日、本県199例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/10","url":"https://www.pref.yamagata.jp/documents/18653/corona-press198.pdf","text":"12月10日、本県198例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/10","url":"https://www.pref.yamagata.jp/documents/18653/corona-press197.pdf","text":"12月10日、本県197例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/9","url":"https://www.pref.yamagata.jp/documents/18653/corona-press196.pdf","text":"12月9日、本県196例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/9","url":"https://www.pref.yamagata.jp/documents/18653/corona-press191_195.pdf","text":"12月9日、本県191～195例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/9","url":"https://www.pref.yamagata.jp/documents/18653/corona-press190.pdf","text":"12月9日、本県190例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/9","url":"https://www.pref.yamagata.jp/documents/18653/corona-press187-189.pdf","text":"12月9日、本県187～189例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/8","url":"https://www.pref.yamagata.jp/documents/18653/corona-press186.pdf","text":"12月8日、本県186例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/8","url":"https://www.pref.yamagata.jp/documents/18653/corona-press180_185.pdf","text":"12月8日、本県180～185例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/8","url":"https://www.pref.yamagata.jp/documents/18653/corona-press179.pdf","text":"12月8日、本県179例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/8","url":"https://www.pref.yamagata.jp/documents/18653/corona-press178.pdf","text":"12月8日、本県178例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/7","url":"https://www.pref.yamagata.jp/documents/18653/corona-press177.pdf","text":"12月7日、本県177例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/7","url":"https://www.pref.yamagata.jp/documents/18653/corona-press176.pdf","text":"12月7日、本県176例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/7","url":"https://www.pref.yamagata.jp/documents/18653/corona-press175.pdf","text":"12月7日、本県175例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/7","url":"https://www.pref.yamagata.jp/documents/18653/corona-press174.pdf","text":"12月7日、本県174例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/6","url":"https://www.pref.yamagata.jp/documents/18653/corona-press172_173.pdf","text":"12月6日、本県172～173例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/6","url":"https://www.pref.yamagata.jp/documents/18653/corona-press160_171.pdf","text":"12月6日、本県160～171例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/6","url":"https://www.pref.yamagata.jp/documents/18653/corona-press159.pdf","text":"12月6日、本県159例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/5","url":"https://www.pref.yamagata.jp/documents/18653/154-158_1.pdf","text":"12月5日、本県154～158例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/5","url":"https://www.pref.yamagata.jp/documents/18653/153.pdf","text":"12月5日、本県153例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/4","url":"https://www.pref.yamagata.jp/documents/18653/corona-press152.pdf","text":"12月4日、本県152例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/4","url":"https://www.pref.yamagata.jp/documents/18653/corona-press151.pdf","text":"12月4日、本県151例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/4","url":"https://www.pref.yamagata.jp/documents/18653/corona-press150.pdf","text":"12月4日、本県150例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/3","url":"https://www.pref.yamagata.jp/documents/18653/corona-press149.pdf","text":"12月3日、本県149例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/3","url":"https://www.pref.yamagata.jp/documents/18653/corona-press146_147_148.pdf","text":"12月3日、本県146～148例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/3","url":"https://www.pref.yamagata.jp/documents/18653/corona-press145.pdf","text":"12月3日、本県145例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/3","url":"https://www.pref.yamagata.jp/documents/18653/corona-press144.pdf","text":"12月3日、本県144例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/3","url":"https://www.pref.yamagata.jp/documents/18653/corona-press143.pdf","text":"12月3日、本県143例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/2","url":"https://www.pref.yamagata.jp/documents/18653/corona-press141_142.pdf","text":"12月2日、本県141～142例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/2","url":"https://www.pref.yamagata.jp/documents/18653/corona-press140.pdf","text":"12月2日、本県140例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/2","url":"https://www.pref.yamagata.jp/documents/18653/corona-press139.pdf","text":"12月2日、本県139例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/1","url":"https://www.pref.yamagata.jp/documents/18653/corona-press138.pdf","text":"12月1日、本県138例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/1","url":"https://www.pref.yamagata.jp/documents/18653/corona-press137.pdf","text":"12月1日、本県137例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/12/1","url":"https://www.pref.yamagata.jp/documents/18653/corona-press136.pdf","text":"12月1日、本県136例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/30","url":"https://www.pref.yamagata.jp/documents/18477/corona-press135.pdf","text":"11月30日、本県135例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/30","url":"https://www.pref.yamagata.jp/documents/18477/corona-press134.pdf","text":"11月30日、本県134例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press133.pdf","text":"11月29日、本県133例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press132.pdf","text":"11月29日、本県132例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press131.pdf","text":"11月29日、本県131例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press130.pdf","text":"11月29日、本県130例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press129.pdf","text":"11月29日、本県129例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press128.pdf","text":"11月29日、本県128例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press127.pdf","text":"11月29日、本県127例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press126.pdf","text":"11月29日、本県126例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/29","url":"https://www.pref.yamagata.jp/documents/18477/corona-press123_124_125.pdf","text":"11月29日、本県123～125例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/28","url":"https://www.pref.yamagata.jp/documents/18477/corona-press122.pdf","text":"11月28日、本県122例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/28","url":"https://www.pref.yamagata.jp/documents/18477/corona-press121.pdf","text":"11月28日、本県121例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/28","url":"https://www.pref.yamagata.jp/documents/18477/corona-press120.pdf","text":"11月28日、本県120例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/28","url":"https://www.pref.yamagata.jp/documents/18477/corona-press119.pdf","text":"11月28日、本県119例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/28","url":"https://www.pref.yamagata.jp/documents/18477/corona-press118.pdf","text":"11月28日、本県118例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/28","url":"https://www.pref.yamagata.jp/documents/18477/corona-press117.pdf","text":"11月28日、本県117例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/27","url":"https://www.pref.yamagata.jp/documents/18477/corona-press116.pdf","text":"11月27日、本県116例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/27","url":"https://www.pref.yamagata.jp/documents/18477/corona-press115.pdf","text":"11月27日、本県115例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/27","url":"https://www.pref.yamagata.jp/documents/18477/corona-press114.pdf","text":"11月27日、本県114例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/27","url":"https://www.pref.yamagata.jp/documents/18477/corona-press113.pdf","text":"11月27日、本県113例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/27","url":"https://www.pref.yamagata.jp/documents/18477/corona-press112.pdf","text":"11月27日、本県112例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/26","url":"https://www.pref.yamagata.jp/documents/18477/corona-press111.pdf","text":"11月26日、本県111例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/25","url":"https://www.pref.yamagata.jp/documents/18477/corona-press110.pdf","text":"11月25日、本県110例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/22","url":"https://www.pref.yamagata.jp/documents/18477/corona-press109.pdf","text":"11月22日、本県109例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/22","url":"https://www.pref.yamagata.jp/documents/18477/corona-press108.pdf","text":"11月22日、本県108例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/20","url":"https://www.pref.yamagata.jp/documents/18477/corona-press107.pdf","text":"11月20日、本県107例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/20","url":"https://www.pref.yamagata.jp/documents/18477/corona-press106.pdf","text":"11月20日、本県106例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/19","url":"https://www.pref.yamagata.jp/documents/18477/corona-press104_105.pdf","text":"11月19日、本県104～105例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/19","url":"https://www.pref.yamagata.jp/documents/18477/corona-press103.pdf","text":"11月19日、本県103例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/19","url":"https://www.pref.yamagata.jp/documents/18477/corona-press102.pdf","text":"11月19日、本県102例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/19","url":"https://www.pref.yamagata.jp/documents/18477/corona-press101.pdf","text":"11月19日、本県101例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/18","url":"https://www.pref.yamagata.jp/documents/18477/corona-press100.pdf","text":"11月18日、本県100例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/18","url":"https://www.pref.yamagata.jp/documents/18477/corona-press99.pdf","text":"11月18日、本県99例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/16","url":"https://www.pref.yamagata.jp/documents/18477/corona-press98.pdf","text":"11月16日、本県98例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/15","url":"https://www.pref.yamagata.jp/documents/18477/corona-press97.pdf","text":"11月15日、本県97例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/14","url":"https://www.pref.yamagata.jp/documents/18477/z22ahd.pdf","text":"11月14日、本県96例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/14","url":"https://www.pref.yamagata.jp/documents/18477/95.pdf","text":"11月14日、本県95例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/12","url":"https://www.pref.yamagata.jp/documents/18477/corona-press94.pdf","text":"11月12日、本県94例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/12","url":"https://www.pref.yamagata.jp/documents/18477/corona-press93.pdf","text":"11月12日、本県93例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/11","url":"https://www.pref.yamagata.jp/documents/18477/corona-press90_91_92.pdf","text":"11月11日、本県90～93例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/10","url":"https://www.pref.yamagata.jp/documents/18477/corona-press89.pdf","text":"11月10日、本県89例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/09","url":"https://www.city.yamagata-yamagata.lg.jp/kakuka/kenkoiryo/kenkozoshin/sogo/kansensyou/pf0607101142/5mkrgc.pdf","text":"11月9日、本県88例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/11/08","url":"https://www.city.yamagata-yamagata.lg.jp/kakuka/kenkoiryo/kenkozoshin/sogo/kansensyou/pf0607101142/9vq50e.pdf","text":"11月8日、本県87例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/26","url":"https://www.pref.yamagata.jp/documents/18477/corona-press86.pdf","text":"10月26日、本県86例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/26","url":"https://www.pref.yamagata.jp/documents/18477/corona-press85.pdf","text":"10月26日、本県85例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/22","url":"https://www.pref.yamagata.jp/documents/18477/corona-press84.pdf","text":"10月22日、本県84例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/22","url":"https://www.pref.yamagata.jp/documents/18477/corona-press83.pdf","text":"10月22日、本県83例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/21","url":"https://www.pref.yamagata.jp/documents/18477/corona-press82.pdf","text":"10月21日、本県82例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/09","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press81.pdf","text":"10月9日、本県81例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/09","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press80.pdf","text":"10月9日、本県80例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/10/08","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press79.pdf","text":"10月8日、本県79例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/08/30","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press78.pdf","text":"8月30日、本県78例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/08/20","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press77.pdf","text":"8月20日、本県77例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/31","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press76.pdf","text":"7月31日、本県76例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/16","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press75.pdf","text":"7月16日、本県75例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/15","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press74.pdf","text":"7月15日、本県74例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/13","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press73.pdf","text":"7月13日、本県73例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/13","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press72.pdf","text":"7月13日、本県72例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/06","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press71.pdf","text":"7月6日、本県71例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/04","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press70.pdf","text":"7月4日、本県70例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/05/26","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html#sochi","text":"新型コロナウイルス感染防止の取組みのお願い （全国における緊急事態宣言解除に伴い更新）"},{"date":"2020/05/14","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html","text":"新型コロナウイルス感染防止の取組みのお願い （緊急事態宣言対象地域除外に伴い更新）"},{"date":"2020/05/11","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/eventpolicy.pdf","text":"県主催イベント等の開催に関する対応方針"},{"date":"2020/05/08","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html","text":"新型コロナウイルス感染拡大防止のための「山形県緊急事態措置等」について ５月１１日（月）以降の緊急事態措置等"},{"date":"2020/05/04","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/chijimessage020504.pdf","text":"5月4日、新型インフルエンザ等対策特別措置法に基づく緊急事態宣言の期間延長に係る吉村知事のコメント"},{"date":"2020/05/04","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/69reime.pdf","text":"5月4日、本県69例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/29","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/68reime.pdf","text":"4月29日、本県68例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/28","url":"https://www.city.yamagata-yamagata.lg.jp/kakuka/kenkoiryo/kenkozoshin/sogo/kansensyou/pf0607101142/xtoin1.pdf","text":"山形市における新型コロナウイルス感染症の確認事例について（山形市内7例目、県内67例目）"},{"date":"2020/04/26","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/shoutengaitou_yousei","text":"商店街やスーパーマーケット等における新型コロナウイルス感染症の感染拡大への協力要請"},{"date":"2020/04/26","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/iryou_sabetsuboushi","text":"感染症や医療従事者等に対する偏見や差別防止の協力要請"},{"date":"2020/04/24","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/66reime.pdf","text":"4月24日、本県66例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/22","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus-kinnkyuu.html","text":"新型コロナウイルス感染症の拡大防止に向け、県民の皆様に緊急の要請等を行います。"},{"date":"2020/04/22","url":"https://www.city.yamagata-yamagata.lg.jp/kakuka/kenkoiryo/kenkozoshin/sogo/kansensyou/pf0607101142/eotkrk.pdf","text":"山形市における新型コロナウイルス感染症の確認事例について（山形市内6例目、県内65例目）"},{"date":"2020/04/21","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/chijimessage020421.pdf","text":"4月21日、新型コロナウイルスの感染拡大を防止するため、吉村知事から県民の皆様へメッセージを送りました。"},{"date":"2020/04/20","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/62-64reime.pdf","text":"4月20日、本県62～64例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/19","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/61reime.pdf","text":"4月19日、本県61例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/18","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/59-60reime.pdf","text":"4月18日、本県59～60例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/17","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/55-58reime.pdf","text":"4月17日、本県55～58例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/16","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/50-54reime.pdf","text":"4月16日、本県50～54例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/15","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/44-49reime.pdf","text":"4月15日、本県44～49例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/14","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/40-43reime.pdf","text":"4月14日、本県40～43例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/13","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/39reime.pdf","text":"4月13日、本県39例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/12","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/34-38reime.pdf","text":"4月12日、本県34～38例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/11","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/020411chijimessage.pdf","text":"4月11日、新型コロナウイルスの感染拡大を防止するため、吉村知事から県民の皆様へメッセージを送りました。"},{"date":"2020/04/11","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/33reime.pdf","text":"4月11日、本県33例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/10","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/28-32reime.pdf","text":"4月10日、本県28～32例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/09","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/flyer.pdf","text":"「新型コロナウイルス感染症の感染拡大を防止するための緊急のお願い」が発表されました"},{"date":"2020/04/09","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/23-27reime.pdf","text":"本県23～27例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/08","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/20-22reime.pdf","text":"本県20～22例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/06","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/14-19reime.pdf","text":"本県14～19例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/05","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/11-13reime.pdf","text":"本県11～13例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/04","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/9-10reime.pdf","text":"本県9～10例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/03","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/4-8reime.pdf","text":"本県4～8例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/02","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/3reime.pdf","text":"本県3例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/01","url":"https://www.pref.yamagata.jp/ou/kyoiku/700001/somuka-top-kikakuyosan/kyuukoutaiou/yamagata202002.html","text":"学校臨時休業等に係る本県の対応について"},{"date":"2020/04/01","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/2reimesahikae.pdf","text":"本県2例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/03/31","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/shingatacoronakikitaisakuhonbu5.html","text":"山形県新型コロナウイルス感染症に係る危機対策本部　第5回本部員会議を開催しました"},{"date":"2020/03/31","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/1reime.pdf","text":"本県1例目となる新型コロナウイルスの感染者が確認されました"}]}')},538:function(t,e,r){"use strict";var n=r(392);r.n(n).a},539:function(t,e,r){(e=r(11)(!1)).push([t.i,".MainPage .Header[data-v-f33f760e]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-f33f760e]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-f33f760e]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-f33f760e]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-f33f760e]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-f33f760e]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-f33f760e]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-f33f760e]{padding:4px 8px}}",""]),t.exports=e},548:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(340),d=r(378),c=r(534);n.default.use(c);var f=n.default.extend({props:{items:{type:Array,required:!0}},data:function(){return{paginate:["paginate-items"]}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(d.a)(t)}}}),l=(r(535),r(9)),h=r(45),w=r.n(h),m=r(297),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"WhatsNew"},[r("h3",{staticClass:"WhatsNew-heading"},[r("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("お知らせ"))+"\n  ")],1),t._v(" "),r("ul",{staticClass:"WhatsNew-list"},[r("paginate",{staticClass:"WhatsNew-list",attrs:{name:"paginate-items",list:t.items,per:4}},t._l(t.paginated("paginate-items"),(function(e,i){return r("li",{key:i,staticClass:"WhatsNew-list-item"},[r("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[r("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n            "+t._s(e.date)+"\n          ")]),t._v(" "),r("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n            "+t._s(e.text)+"\n            "),t.isInternalLink(e.url)?t._e():r("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n              mdi-open-in-new\n            ")])],1)])])})),0)],1),t._v(" "),r("paginate-links",{staticClass:"pagination",attrs:{for:"paginate-items",limit:5,"show-step-links":!0}})],1)}),[],!1,null,null,null),x=component.exports;w()(component,{VIcon:m.a});var k=r(334),y=r(537),v=r(401),j=r(404),_=r(402),P=r(405),C=n.default.extend({components:{PageHeader:o.a,WhatsNew:x,ConfirmedCasesDetailsCard:v.a,ConfirmedCasesNumberCard:j.a,ConfirmedCasesAttributesCard:_.a,InspectionPersonsNumberCard:P.a},data:function(){var data={Data:k,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:y.newsItems};return data},computed:{updatedAt:function(){return Object(d.b)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("県内の最新感染動向")}}}),L=(r(538),r(398)),N=r(307),O=Object(l.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"MainPage"},[r("div",{staticClass:"Header mb-3"},[r("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"UpdatedAt"},[r("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),r("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[r("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),r("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),r("v-row",{staticClass:"DataBlock"},[r("confirmed-cases-details-card"),t._v(" "),r("confirmed-cases-attributes-card"),t._v(" "),r("confirmed-cases-number-card"),t._v(" "),r("inspection-persons-number-card")],1),t._v(" "),r("v-divider")],1)}),[],!1,null,"f33f760e",null);e.default=O.exports;w()(O,{VDivider:L.a,VRow:N.a})}}]);