(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-392e0b84"],{"0395f":function(e,t,i){"use strict";var n=i("f4e6"),s=i.n(n);s.a},bac0:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout"},[i("v-table",{ref:"table",class:e.viewOptions.spacing,attrs:{items:e.items,columns:e.columns,"primary-key-field":e.primaryKeyField,selection:e.selection,"sort-val":e.sortVal,"row-height":e.rowHeight,loading:e.loading,"lazy-loading":e.lazyLoading,"column-widths":e.viewOptions.widths||{},link:e.link,"use-interfaces":!0,"manual-sort-field":e.sortField},on:{sort:e.sort,widths:e.setWidths,select:function(t){return e.$emit("select",t)},"scroll-end":function(t){return e.$emit("next-page")},input:function(t){return e.$emit("input",t)}}})],1)},s=[],r=(i("a481"),i("f559"),i("55dd"),i("28a5"),i("a745")),l=i.n(r),o=i("db0c"),a=i.n(o),u=i("c3ff"),c=i.n(u),f={mixins:[c.a],computed:{columns:function(){var e,t=this,i=a()(this.fields);return e=this.viewQuery.fields?l()(this.viewQuery.fields)?this.viewQuery.fields:this.viewQuery.fields.split(","):i.filter(function(e){return!1===e.primary_key||"0"===e.primary_key}).slice(0,4).map(function(e){return e.field}),e.filter(function(e){return t.fields[e]}).map(function(e){var i=t.fields[e],n=i.name;return{field:e,name:n,fieldInfo:i}})},rowHeight:function(){return"comfortable"===this.viewOptions.spacing?48:"cozy"===this.viewOptions.spacing?40:"compact"===this.viewOptions.spacing?32:48},sortVal:function(){var e=this.viewQuery&&this.viewQuery["sort"]||this.primaryKeyField;return{asc:!e.startsWith("-"),field:e.replace("-","")}}},methods:{sort:function(e){var t=(e.asc?"":"-")+e.field;this.$emit("query",{sort:t})},setWidths:function(e){this.$emit("options",{widths:e})}},watch:{sortVal:function(e,t){e!==t&&(this.$refs.table.$el.scrollTop=0)}}},d=f,p=(i("0395f"),i("2877")),y=Object(p["a"])(d,n,s,!1,null,"75dd30ec",null);t["default"]=y.exports},c3ff:function(e,t){e.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null}}}},f4e6:function(e,t,i){}}]);
//# sourceMappingURL=chunk-392e0b84.f664f321.js.map