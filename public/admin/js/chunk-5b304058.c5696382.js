(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b304058"],{"085d":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-many-to-one"},[!1===e.relationSetup?i("div",{staticClass:"notice"},[i("p",[i("v-icon",{attrs:{name:"warning"}}),e._v("\n      "+e._s(e.$t("interfaces-many-to-many-relation_not_setup"))+"\n    ")],1)]):[i("v-select",{attrs:{name:e.name,id:e.name,placeholder:e.options.placeholder||"",options:e.selectOptions,disabled:e.readonly,value:e.valuePK,icon:e.options.icon},on:{input:function(t){return e.$emit("input",t)}}}),e.count>e.options.threshold?i("button",{attrs:{type:"button"},on:{click:function(t){e.showListing=!0}}}):e._e(),i("v-spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner",attrs:{"line-fg-color":"var(--light-gray)","line-bg-color":"var(--lighter-gray)"}}),e.showListing?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("select_existing"),buttons:{save:{text:"Save",color:"accent",loading:e.selectionSaving,disabled:null===e.newSelected}},"action-required":""},on:{close:e.dismissModal,save:e.populateDropdown}},[i("div",{staticClass:"search"},[i("v-input",{staticClass:"search-input",attrs:{type:"search",placeholder:e.$t("search")},on:{input:e.onSearchInput}})],1),i("v-items",{staticClass:"items",attrs:{collection:e.relation.collection_one.collection,selection:e.selection,filters:e.filters,"view-query":e.viewQuery,"view-type":e.viewType,"view-options":e.viewOptions},on:{options:e.setViewOptions,query:e.setViewQuery,select:e.emitValue}})],1)],1):e._e()]],2)},r=[],s=i("768b"),o=i("795b"),l=i.n(o),a=(i("ac6a"),i("5df3"),i("cebc")),c=i("75fc"),u=i("bd86"),h=(i("7514"),i("8db2")),d=i.n(h),p={name:"interface-many-to-one",mixins:[d.a],data:function(){return{loading:!1,error:null,items:[],count:null,showListing:!1,selectionSaving:!1,newSelected:null,viewOptionsOverride:{},viewTypeOverride:null,viewQueryOverride:{},filtersOverride:[]}},computed:{relationSetup:function(){return!!this.relation},relatedPrimaryKeyField:function(){return _.find(this.relation.collection_one.fields,{primary_key:!0}).field},valuePK:function(){return _.isObject(this.value)?this.value[this.relatedPrimaryKeyField]:this.value},render:function(){return this.$helpers.micromustache.compile(this.options.template)},selection:function(){return this.value?this.newSelected?[this.newSelected]:this.valuePK?[Object(u["a"])({},this.relatedPrimaryKeyField,this.valuePK)]:[]:[]},selectOptions:function(){var e=this;return 0===this.items.length?{}:_.mapValues(_.keyBy(this.items,this.relatedPrimaryKeyField),function(t){return e.render(t)})},preferences:function(){return"string"===typeof this.options.preferences?JSON.parse(this.options.preferences):this.options.preferences},filters:function(){return!1===this.relationSetup?null:[].concat(Object(c["a"])(this.preferences&&this.preferences.filters||[]),Object(c["a"])(this.filtersOverride))},viewOptions:function(){if(!1===this.relationSetup)return null;var e=this.preferences&&this.preferences.viewOptions||{};return Object(a["a"])({},e,this.viewOptionsOverride)},viewType:function(){return!1===this.relationSetup?null:this.viewTypeOverride?this.viewTypeOverride:this.preferences&&this.preferences.viewType||"tabular"},viewQuery:function(){if(!1===this.relationSetup)return null;var e=this.preferences&&this.preferences.viewQuery||{};return Object(a["a"])({},e,this.viewQueryOverride)}},created:function(){this.relationSetup&&this.fetchItems(),this.onSearchInput=_.debounce(this.onSearchInput,200)},watch:{relation:function(){this.relationSetup&&this.fetchItems()}},methods:{emitValue:function(e){1===e.length?this.newSelected=e[0]:0===e.length?this.newSelected=null:this.newSelected=e[e.length-1],this.$emit("input",this.newSelected)},fetchItems:function(){var e=this;if(null!=this.relation){var t=this.relation.collection_one.collection;this.loading=!0;var i={fields:"*.*",meta:"total_count",limit:this.options.threshold};return l.a.all([this.$api.getItems(t,i),this.value?this.$api.getItem(t,this.valuePK):null]).then(function(t){var i=Object(s["a"])(t,2),n=i[0],r=n.meta,o=n.data,l=i[1];e.items=l?[].concat(Object(c["a"])(o),[l.data]):o,e.loading=!1,e.count=r.total_count}).catch(function(t){console.error(t),e.error=t,e.loading=!1})}},populateDropdown:function(){var e=this,t=!1;this.selectionSaving=!0,this.items.forEach(function(i){i[e.relatedPrimaryKeyField]===e.newSelected[e.relatedPrimaryKeyField]&&(t=!0)}),!1===t?this.$api.getItem(this.relation.collection_one.collection,this.newSelected[this.relatedPrimaryKeyField]).then(function(e){return e.data}).then(function(t){e.$emit("input",e.newSelected),e.items=[].concat(Object(c["a"])(e.items),[t]),e.selectionSaving=!1,e.showListing=!1}).catch(function(t){console.error(t),e.$events.emit("error",{notify:e.$t("something_went_wrong_body"),error:t})}):(this.$emit("input",this.newSelected),this.selectionSaving=!1,this.showListing=!1)},dismissModal:function(){this.showListing=!1,this.selectionSaving=!1,this.newSelected=null},setViewOptions:function(e){this.viewOptionsOverride=Object(a["a"])({},this.viewOptionsOverride,e)},setViewQuery:function(e){this.viewQueryOverride=Object(a["a"])({},this.viewQueryOverride,e)},onSearchInput:function(e){this.setViewQuery({q:e})}}},f=p,v=(i("fb90"),i("2877")),w=Object(v["a"])(f,n,r,!1,null,"6f233b0c",null);t["default"]=w.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},d741:function(e,t,i){},fb90:function(e,t,i){"use strict";var n=i("d741"),r=i.n(n);r.a}}]);
//# sourceMappingURL=chunk-5b304058.c5696382.js.map