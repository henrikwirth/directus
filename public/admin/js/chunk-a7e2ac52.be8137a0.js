(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7e2ac52"],{"0e66":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-checkboxes"},e._l(e.options.choices,function(t,l){return n("v-checkbox",{key:t,attrs:{id:t,value:e.name+"-"+l,disabled:e.readonly,label:t,checked:e.selection.includes(l)},on:{change:function(t){return e.updateValue(l,t)}}})}),1)},i=[],a=n("75fc"),u=(n("28a5"),n("6762"),n("2fdb"),n("8db2")),s=n.n(u),c={name:"interface-checkboxes",mixins:[s.a],computed:{selection:function(){return null==this.value?[]:(e="string"===typeof this.value?this.value.includes(",")?e.split(","):[this.value]:this.value,this.options.wrap&&e.length>2&&(e.pop(),e.shift()),e);var e}},methods:{updateValue:function(e){var t=Object(a["a"])(this.selection);t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),t=t.join(","),this.options.wrap&&t.length>0&&(t=",".concat(t,",")),"array"===this.type&&(t=t.split(",")),this.$emit("input",t)}}},o=c,r=(n("28df"),n("2877")),p=Object(r["a"])(o,l,i,!1,null,"1093fc58",null);t["default"]=p.exports},"28df":function(e,t,n){"use strict";var l=n("e97e"),i=n.n(l);i.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},e97e:function(e,t,n){}}]);
//# sourceMappingURL=chunk-a7e2ac52.be8137a0.js.map