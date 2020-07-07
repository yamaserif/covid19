/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{260:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},263:function(t,e,n){"use strict";var r=n(260);n.n(r).a},264:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},267:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),o=(n(263),n(5)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},310:function(t,e,n){var content=n(407);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("f0fcac38",content,!1,{sourceMap:!1})},311:function(t,e,n){var content=n(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("020e8b89",content,!1,{sourceMap:!1})},405:function(t,e,n){t.exports=function(){"use strict";var t,e,n="undefined"!=typeof console;t=function(t,o,l){void 0===l&&(l="error"),n&&console[l]("[vue-paginate]: "+t+" "+(o?r(e(o)):""))},e=function(t){if(t.$root===t)return"root instance";var e=t._isVue?t.$options.name||t.$options._componentTag:t.name;return(e?"component <"+e+">":"anonymous component")+(t._isVue&&t.$options.__file?" at "+t.$options.__file:"")};var r=function(t){return"anonymous component"===t&&(t+=' - use the "name" option for better debugging messages.'),"\n(found in "+t+")"},o={name:"paginate",props:{name:{type:String,required:!0},list:{type:Array,required:!0},per:{type:Number,default:3,validator:function(t){return t>0}},tag:{type:String,default:"ul"},container:{type:Object,default:null}},data:function(){return{initialListSize:this.list.length}},computed:{parent:function(){return this.container?this.container:this.$parent},currentPage:{get:function(){if(this.parent.paginate[this.name])return this.parent.paginate[this.name].page},set:function(t){this.parent.paginate[this.name].page=t}},pageItemsCount:function(){var t=this.list.length;return this.currentPage*this.per+1+"-"+Math.min(this.currentPage*this.per+this.per,t)+" of "+t},lastPage:function(){return Math.ceil(this.list.length/this.per)}},mounted:function(){this.per<=0&&t('<paginate name="'+this.name+"\"> 'per' prop can't be 0 or less.",this.parent),this.parent.paginate[this.name]?this.paginateList():t("'"+this.name+"' is not registered in 'paginate' array.",this.parent)},watch:{currentPage:function(){this.paginateList()},list:function(){this.currentPage>=this.lastPage&&(this.currentPage=this.lastPage-1),this.paginateList()},per:function(){this.currentPage=0,this.paginateList()}},methods:{paginateList:function(){var t=this.currentPage*this.per,e=this.list.slice(t,t+this.per);this.parent.paginate[this.name].list=e},goToPage:function(e){var n=Math.ceil(this.list.length/this.per);e>n?t("You cannot go to page "+e+". The last page is "+n+".",this.parent):this.currentPage=e-1}},render:function(t){return t(this.tag,{},this.$slots.default)}},l=function(t,e,n){this.listOfPages=t,this.lastPage=t.length-1,this.currentPage=e===this.lastPage?this.lastPage-1:e,this.limit=n};l.prototype.generate=function(){var t=this._buildFirstHalf(),e=this._buildSecondHalf();return t.concat(e)},l.prototype._buildFirstHalf=function(){var t=this._allPagesButLast().slice(this._currentChunkIndex(),this._currentChunkIndex()+this.limit);return this.currentPage>=this.limit&&(t.unshift("…"),t.unshift(0)),this.lastPage-this.limit>this._currentChunkIndex()&&t.push("…"),t},l.prototype._buildSecondHalf=function(){return[this.lastPage]},l.prototype._currentChunkIndex=function(){return Math.floor(this.currentPage/this.limit)*this.limit},l.prototype._allPagesButLast=function(){var t=this;return this.listOfPages.filter((function(e){return e!==t.lastPage}))};var c={name:"paginate-links",props:{for:{type:String,required:!0},limit:{type:Number,default:0},simple:{type:Object,default:null,validator:function(t){return t.prev&&t.next}},stepLinks:{type:Object,default:function(){return{prev:"«",next:"»"}},validator:function(t){return t.prev&&t.next}},showStepLinks:{type:Boolean},hideSinglePage:{type:Boolean},classes:{type:Object,default:null},async:{type:Boolean,default:!1},container:{type:Object,default:null}},data:function(){return{listOfPages:[],numberOfPages:0,target:null}},computed:{parent:function(){return this.container?this.container.el:this.$parent},state:function(){return this.container?this.container.state:this.$parent.paginate[this.for]},currentPage:{get:function(){if(this.state)return this.state.page},set:function(t){this.state.page=t}}},mounted:function(){var e=this;this.simple&&this.limit&&t('<paginate-links for="'+this.for+"\"> 'simple' and 'limit' props can't be used at the same time. In this case, 'simple' will take precedence, and 'limit' will be ignored.",this.parent,"warn"),this.simple&&!this.simple.next&&t('<paginate-links for="'+this.for+"\"> 'simple' prop doesn't contain 'next' value.",this.parent),this.simple&&!this.simple.prev&&t('<paginate-links for="'+this.for+"\"> 'simple' prop doesn't contain 'prev' value.",this.parent),this.stepLinks&&!this.stepLinks.next&&t('<paginate-links for="'+this.for+"\"> 'step-links' prop doesn't contain 'next' value.",this.parent),this.stepLinks&&!this.stepLinks.prev&&t('<paginate-links for="'+this.for+"\"> 'step-links' prop doesn't contain 'prev' value.",this.parent),this.$nextTick((function(){e.updateListOfPages()}))},watch:{state:{handler:function(){this.updateListOfPages()},deep:!0},currentPage:function(t,e){this.$emit("change",t+1,e+1)}},methods:{updateListOfPages:function(){var e,n,r;if(this.target=(e=this.parent.$children,n=this.for,e.filter((function(t){return"paginate"===t.$vnode.componentOptions.tag})).find((function(t){return t.name===n}))),!this.target){if(this.async)return;return t('<paginate-links for="'+this.for+'"> can\'t be used without its companion <paginate name="'+this.for+'">',this.parent),void t('To fix that issue you may need to use :async="true" on <paginate-links> component to allow for asyncronous rendering',this.parent,"warn")}this.numberOfPages=Math.ceil(this.target.list.length/this.target.per),this.listOfPages=(r=this.numberOfPages,Array.apply(null,{length:r}).map((function(t,e){return e})))}},render:function(t){var e=this;if(!this.target&&this.async)return null;var n=this.simple?function(t,e){var n=t.listOfPages.length-1,r={on:{click:function(e){e.preventDefault(),t.currentPage>0&&(t.currentPage-=1)}}},o={on:{click:function(e){e.preventDefault(),t.currentPage<n&&(t.currentPage+=1)}}},l={class:["next",t.currentPage>=n?"disabled":""]},c={class:["prev",t.currentPage<=0?"disabled":""]},h=e("li",c,[e("a",r,t.simple.prev)]),f=e("li",l,[e("a",o,t.simple.next)]);return[h,f]}(this,t):this.limit>1?function(t,e){var n=new l(t.listOfPages,t.currentPage,t.limit,t.stepLinks).generate(),r=function(t){return t.map((function(link,e){return"…"===link&&0===t[e-1]?"left-ellipses":"…"===link&&0!==t[e-1]?"right-ellipses":link}))}(n=t.showStepLinks?[t.stepLinks.prev].concat(n,[t.stepLinks.next]):n);return n.map((function(link,n){var data={on:{click:function(e){e.preventDefault(),t.currentPage=f(link,t.limit,t.currentPage,t.listOfPages,t.stepLinks,r[n])}}},o=h(link,t.currentPage,t.listOfPages.length-1,t.stepLinks),text=link===parseInt(link,10)?link+1:link;return e("li",{class:o},[e("a",data,text)])}))}(this,t):function(t,e){return(t.showStepLinks?[t.stepLinks.prev].concat(t.listOfPages,[t.stepLinks.next]):t.listOfPages).map((function(link){var data={on:{click:function(e){e.preventDefault(),t.currentPage=f(link,t.limit,t.currentPage,t.listOfPages,t.stepLinks)}}},n=h(link,t.currentPage,t.listOfPages.length-1,t.stepLinks),r=link===t.stepLinks.next||link===t.stepLinks.prev?link:link+1;return e("li",{class:n},[e("a",data,r)])}))}(this,t);if(this.hideSinglePage&&this.numberOfPages<=1)return null;var r=t("ul",{class:["paginate-links",this.for]},n);return this.classes&&this.$nextTick((function(){var t,n;t=r.elm,n=e.classes,Object.keys(n).forEach((function(e){if("ul"===e){var r=n.ul;Array.isArray(r)?r.forEach((function(e){return t.classList.add(e)})):t.classList.add(r)}t.querySelectorAll(e).forEach((function(t){var r=n[e];Array.isArray(r)?r.forEach((function(e){return t.classList.add(e)})):t.classList.add(r)}))}))})),r}};function h(link,t,e,n){var r=n.prev,o=n.next,l=[];return link===r?l.push("left-arrow"):link===o?l.push("right-arrow"):"…"===link?l.push("ellipses"):l.push("number"),link===t&&l.push("active"),(link===r&&t<=0||link===o&&t>=e)&&l.push("disabled"),l}function f(link,t,e,n,r,o){var l=r.prev,c=r.next;void 0===o&&(o=null);var h=Math.floor(e/t);if(link===l)return e-1<0?0:e-1;if(link===c)return e+1>n.length-1?n.length-1:e+1;if(o&&"right-ellipses"===o)return(h+1)*t;if(o&&"left-ellipses"===o){var f=n.slice(h*t,h*t+t);return e===n.length-1&&1===f.length&&h--,(h-1)*t+t-1}return link}var d={install:function(e){e.mixin({created:function(){var t;"undefined"!==this.paginate&&this.paginate instanceof Array&&(this.paginate=(void 0===(t=this.paginate)&&(t=[]),t.reduce((function(t,e){return t[e]={list:[],page:0},t}),{})))},methods:{paginated:function(e){if(this.paginate&&this.paginate[e])return this.paginate[e].list;t("'"+e+"' is not registered in 'paginate' array.",this)}}}),e.component("paginate",o),e.component("paginate-links",c)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(d),d}()},406:function(t,e,n){"use strict";var r=n(310);n.n(r).a},407:function(t,e,n){(e=n(10)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}.pagination{padding-right:24px;margin-right:10px;display:flex;list-style-type:none;justify-content:center}.pagination li{margin-left:10px;font-size:1.2em}",""]),t.exports=e},408:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/07/06","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press71.pdf","text":"7月6日、本県71例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/07/04","url":"https://www.pref.yamagata.jp/ou/kenkofukushi/090001/20130425/corona-press/corona-press70.pdf","text":"7月4日、本県70例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/05/26","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html#sochi","text":"新型コロナウイルス感染防止の取組みのお願い （全国における緊急事態宣言解除に伴い更新）"},{"date":"2020/05/14","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html","text":"新型コロナウイルス感染防止の取組みのお願い （緊急事態宣言対象地域除外に伴い更新）"},{"date":"2020/05/11","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/eventpolicy.pdf","text":"県主催イベント等の開催に関する対応方針"},{"date":"2020/05/08","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html","text":"新型コロナウイルス感染拡大防止のための「山形県緊急事態措置等」について ５月１１日（月）以降の緊急事態措置等"},{"date":"2020/05/04","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/chijimessage020504.pdf","text":"5月4日、新型インフルエンザ等対策特別措置法に基づく緊急事態宣言の期間延長に係る吉村知事のコメント"},{"date":"2020/05/04","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/69reime.pdf","text":"5月4日、本県69例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/29","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/68reime.pdf","text":"4月29日、本県68例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/28","url":"https://www.city.yamagata-yamagata.lg.jp/kakuka/kenkoiryo/kenkozoshin/sogo/kansensyou/pf0607101142/xtoin1.pdf","text":"山形市における新型コロナウイルス感染症の確認事例について（山形市内7例目、県内67例目）"},{"date":"2020/04/26","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/shoutengaitou_yousei","text":"商店街やスーパーマーケット等における新型コロナウイルス感染症の感染拡大への協力要請"},{"date":"2020/04/26","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/iryou_sabetsuboushi","text":"感染症や医療従事者等に対する偏見や差別防止の協力要請"},{"date":"2020/04/24","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/66reime.pdf","text":"4月24日、本県66例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/22","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus-kinnkyuu.html","text":"新型コロナウイルス感染症の拡大防止に向け、県民の皆様に緊急の要請等を行います。"},{"date":"2020/04/22","url":"https://www.city.yamagata-yamagata.lg.jp/kakuka/kenkoiryo/kenkozoshin/sogo/kansensyou/pf0607101142/eotkrk.pdf","text":"山形市における新型コロナウイルス感染症の確認事例について（山形市内6例目、県内65例目）"},{"date":"2020/04/21","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/chijimessage020421.pdf","text":"4月21日、新型コロナウイルスの感染拡大を防止するため、吉村知事から県民の皆様へメッセージを送りました。"},{"date":"2020/04/20","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/62-64reime.pdf","text":"4月20日、本県62～64例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/19","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/61reime.pdf","text":"4月19日、本県61例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/18","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/59-60reime.pdf","text":"4月18日、本県59～60例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/17","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/55-58reime.pdf","text":"4月17日、本県55～58例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/16","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/50-54reime.pdf","text":"4月16日、本県50～54例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/15","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/44-49reime.pdf","text":"4月15日、本県44～49例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/14","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/40-43reime.pdf","text":"4月14日、本県40～43例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/13","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/39reime.pdf","text":"4月13日、本県39例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/12","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/34-38reime.pdf","text":"4月12日、本県34～38例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/11","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/020411chijimessage.pdf","text":"4月11日、新型コロナウイルスの感染拡大を防止するため、吉村知事から県民の皆様へメッセージを送りました。"},{"date":"2020/04/11","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/33reime.pdf","text":"4月11日、本県33例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/10","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/28-32reime.pdf","text":"4月10日、本県28～32例目となる新型コロナウイルスの感染者が確認されました。"},{"date":"2020/04/09","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/flyer.pdf","text":"「新型コロナウイルス感染症の感染拡大を防止するための緊急のお願い」が発表されました"},{"date":"2020/04/09","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/23-27reime.pdf","text":"本県23～27例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/08","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/20-22reime.pdf","text":"本県20～22例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/06","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/14-19reime.pdf","text":"本県14～19例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/05","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/11-13reime.pdf","text":"本県11～13例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/04","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/9-10reime.pdf","text":"本県9～10例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/03","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/4-8reime.pdf","text":"本県4～8例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/02","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/3reime.pdf","text":"本県3例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/04/01","url":"https://www.pref.yamagata.jp/ou/kyoiku/700001/somuka-top-kikakuyosan/kyuukoutaiou/yamagata202002.html","text":"学校臨時休業等に係る本県の対応について"},{"date":"2020/04/01","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/2reimesahikae.pdf","text":"本県2例目となる新型コロナウイルスの感染者が確認されました"},{"date":"2020/03/31","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/shingatacoronakikitaisakuhonbu5.html","text":"山形県新型コロナウイルス感染症に係る危機対策本部　第5回本部員会議を開催しました"},{"date":"2020/03/31","url":"https://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/pdf/1reime.pdf","text":"本県1例目となる新型コロナウイルスの感染者が確認されました"}]}')},409:function(t,e,n){"use strict";var r=n(311);n.n(r).a},410:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .Header[data-v-f33f760e]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-f33f760e]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-f33f760e]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-f33f760e]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-f33f760e]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-f33f760e]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-f33f760e]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-f33f760e]{padding:4px 8px}}",""]),t.exports=e},414:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(267),l=n(297),c=n(405);r.default.use(c);var h=r.default.extend({props:{items:{type:Array,required:!0}},data:function(){return{paginate:["paginate-items"]}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(l.a)(t)}}}),f=(n(406),n(5)),d=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("お知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},[n("paginate",{staticClass:"WhatsNew-list",attrs:{name:"paginate-items",list:t.items,per:4}},t._l(t.paginated("paginate-items"),(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n            "+t._s(e.date)+"\n          ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n            "+t._s(e.text)+"\n            "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n              mdi-open-in-new\n            ")])],1)])])})),0)],1),t._v(" "),n("paginate-links",{staticClass:"pagination",attrs:{for:"paginate-items","show-step-links":!0}})],1)}),[],!1,null,null,null).exports,m=n(262),w=n(408),v=n(316),x=n(320),k=n(317),y=n(319),P=r.default.extend({components:{PageHeader:o.a,WhatsNew:d,ConfirmedCasesDetailsCard:v.a,ConfirmedCasesNumberCard:x.a,ConfirmedCasesAttributesCard:k.a,InspectionPersonsNumberCard:y.a},data:function(){var data={Data:m,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:w.newsItems};return data},computed:{updatedAt:function(){return Object(l.b)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("県内の最新感染動向")}}}),_=(n(409),Object(f.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card")],1),t._v(" "),n("v-divider")],1)}),[],!1,null,"f33f760e",null));e.default=_.exports}}]);