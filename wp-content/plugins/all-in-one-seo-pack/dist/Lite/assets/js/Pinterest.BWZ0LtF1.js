import{a as m}from"./links.C572zDFG.js";import{M as d}from"./MetaTag.DKpedjK3.js";import{C as f}from"./Card.CuS1kKeW.js";import{C as g}from"./SettingsRow.BzmNmU2T.js";import{_ as h}from"./_plugin-vue_export-helper.BLXtEB-G.js";import{v as n,c as y,B as s,l as p,o as b,a as e,C as w,t as c}from"./runtime-core.esm-bundler.DMBo7TXk.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.D5tYIqKS.js";import"./Tooltip.CRFjFnpF.js";import"./Caret.CGwYaMo_.js";import"./index.CdwEuUIl.js";import"./Slide.D2pWF0rN.js";import"./Row.CHjKxnPP.js";const k={setup(){return{optionsStore:m()}},components:{CoreCard:f,CoreSettingsRow:g},mixins:[d],data(){return{pagePostOptions:[],strings:{pinterest:this.$t.__("Pinterest",this.$td),description:this.$t.__("Pinterest uses Open Graph metadata just like Facebook, so be sure to keep Open Graph enabled on the Facebook tab checked if you want to optimize your site for Pinterest.",this.$td),learnHowToGetPinterestTag:this.$t.__("Learn how to get your Pinterest Verification Code",this.$td),skipStep:this.$t.__("If you have already confirmed your website with Pinterest, you can skip the step below.",this.$td),pinterestVerificationCode:this.$t.__("Pinterest Verification Code",this.$td)}}}},C={class:"aioseo-pinterest"},P={class:"aioseo-settings-row aioseo-section-description"},V=["innerHTML"],T=e("br",null,null,-1),x=e("br",null,null,-1);function S(r,o,$,i,t,v){const l=n("base-input"),u=n("core-settings-row"),_=n("core-card");return b(),y("div",C,[s(_,{slug:"pinterest","header-text":t.strings.pinterest},{default:p(()=>[e("div",P,[w(c(t.strings.description)+" ",1),e("span",{innerHTML:r.$links.getDocLink(t.strings.learnHowToGetPinterestTag,"pinterestSiteVerification",!0)},null,8,V),T,x,e("strong",null,c(t.strings.skipStep),1)]),s(u,{name:t.strings.pinterestVerificationCode,align:""},{content:p(()=>[s(l,{size:"medium",modelValue:i.optionsStore.options.webmasterTools.pinterest,"onUpdate:modelValue":o[0]||(o[0]=a=>i.optionsStore.options.webmasterTools.pinterest=a),onBlur:o[1]||(o[1]=a=>r.maybeUpdateId("pinterest"))},null,8,["modelValue"])]),_:1},8,["name"])]),_:1},8,["header-text"])])}const R=h(k,[["render",S]]);export{R as default};
