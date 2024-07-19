import"./js/vue2.RHmKp0B5.js";import{o as i,l as v,m as n,a as l,t as c,C as r,u,x as a,D as k,c as b,d as y,F as P,K as $,H as A,G as B,v as U,X as L}from"./js/vue.esm-bundler.CWQFYt9y.js";import{l as O}from"./js/index.FFqvTAHh.js";import{e as D,B as S,l as F}from"./js/index.BQgiQQKQ.js";import{l as R}from"./js/index.3BJ3ZnWB.js";import{f as N,r as V,u as z,e as q,l as H}from"./js/links.BdfvOpfI.js";import{C as x}from"./js/Card.CacAhFkZ.js";import{C as G}from"./js/SocialProfiles.IcM-YzR_.js";import{A as I}from"./js/AddonConditions.CXG7tzuk.js";import{J}from"./js/JsonValues.D25FTfEu.js";import{u as j}from"./js/EeatCta.BAUm4qFR.js";import{C as M}from"./js/ProBadge.WwPkDor4.js";import{C as K}from"./js/Index.XNbBlAFo.js";import{C as W}from"./js/Blur.DNVDismY.js";import{C}from"./js/SettingsRow.DQldd-1Z.js";import{_ as d}from"./js/default-i18n.Bd0Z306Z.js";import{R as X}from"./js/RequiredPlans.DD8UwVw8.js";import{_ as T}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import{S as Q}from"./js/LogoGear.BF23BIEd.js";import{e as Y}from"./js/elemLoaded.COgXIo-H.js";import"./js/translations.Buvln_cw.js";import"./js/constants.DpuIWwJ9.js";import"./js/Caret.iRBf3wcH.js";import"./js/helpers.pkmhnyB1.js";import"./js/Tooltip.Jp05nfCy.js";import"./js/Slide.CRIn0kdn.js";import"./js/Checkbox.D2dfpbIi.js";import"./js/Checkmark.pCOnqh_g.js";import"./js/Textarea.BgYpy-yd.js";import"./js/Row.CzuhYwfs.js";import"./js/Twitter.BZyxMZgm.js";import"./js/addons.C79zowsK.js";import"./js/upperFirst.Wa3gt1AT.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/toString.C-weURPh.js";import"./js/license.D7gbNQw6.js";const Z={class:"aioseo-settings-row aioseo-section-description"},ee={class:"aioseo-description"},te=l("br",null,null,-1),oe={class:"aioseo-description"},se={class:"aioseo-description"},re={__name:"EeatBlur",setup(e){const o="all-in-one-seo-pack",t={description:d("The fields below provide structured information for search engines about the current author. By filling out these fields, you will enhance your online presence and improve search engine visibility. This increases the chances of your author details appearing prominently in search results, making it easier for readers, publishers, and media representatives to discover and connect with you.",o),enable:d("Enable Author Info",o),alumniOf:d("Alumni Of",o),alumniOfDescription:d("The school, college, or university where the author studied.",o),alumniOfUrl:d("School, college, or university URL",o),alumniOfUrlDescription:d("The URL of the school, college, or university where the author studied.",o),worksFor:d("Employer",o),worksForDescription:d("The organization the author works for.",o)};return(s,m)=>(i(),v(u(W),{id:"aioseo-author-seo-meta-data"},{default:n(()=>[l("div",Z,c(t.description),1),r(u(C),{name:t.enable},{content:n(()=>[r(u(D))]),_:1},8,["name"]),r(u(C),{name:t.alumniOf},{content:n(()=>[r(u(S),{size:"medium",placeholder:t.alumniOf},null,8,["placeholder"]),l("div",ee,c(t.alumniOfDescription),1),te,r(u(S),{size:"medium",placeholder:t.alumniOfUrl},null,8,["placeholder"]),l("div",oe,c(t.alumniOfUrlDescription),1)]),_:1},8,["name"]),r(u(C),{name:t.worksFor},{content:n(()=>[r(u(S),{size:"medium",placeholder:t.worksFor},null,8,["placeholder"]),l("div",se,c(t.worksForDescription),1)]),_:1},8,["name"])]),_:1}))}},ie={setup(){const{addonSlug:e,features:o,strings:t}=j();return{addonSlug:e,features:o,licenseStore:N(),links:V,strings:t}},components:{CoreCard:x,CoreProBadge:M,Cta:K,EeatBlur:re,RequiredPlans:X},mixins:[I,J]};function ae(e,o,t,s,m,h){const f=a("core-pro-badge"),_=a("eeat-blur"),w=a("required-plans"),p=a("cta"),g=a("core-card");return i(),v(g,{noSlide:""},{header:n(()=>[l("span",null,c(s.strings.authorInfo),1),r(f)]),default:n(()=>[r(_),r(p,{"cta-link":s.links.getPricingUrl("eeat","eeat-upsell"),"button-text":s.strings.ctaButtonText,"learn-more-link":s.links.getUpsellUrl("eeat",null,e.$isPro?"pricing":"liteUpgrade"),"feature-list":s.features},{"header-text":n(()=>[k(c(s.strings.headerText),1)]),description:n(()=>[r(w,{addon:"aioseo-eeat"}),k(" "+c(s.strings.description),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})}const E=T(ie,[["render",ae]]),ne={components:{EeatCta:E,EeatCtaLite:E},mixins:[I],data(){return{addonSlug:"aioseo-eeat"}}};function le(e,o,t,s,m,h){const f=a("eeat-cta",!0),_=a("eeat-cta-lite");return i(),b("div",null,[e.shouldShowUpdate||e.shouldShowActivate?(i(),v(f,{key:0})):y("",!0),e.shouldShowLite?(i(),v(_,{key:1})):y("",!0)])}const ce=T(ne,[["render",le]]),ue={setup(){return{rootStore:z(),settingsStore:q()}},components:{CoreCard:x,CoreSocialProfiles:G,EeatCta:ce,SvgLogoGear:Q},data(){return{activeTabIndex:0,strings:{socialProfiles:this.$t.__("Social Profiles",this.$td),description:this.$t.__("To let search engines know which profiles are associated with this user, enter them below:",this.$td)}}},methods:{setActiveTab(e){var t;const o=this.activeTabIndex;switch(this.activeTabIndex=e,this.activeTabObject.slug){case"personal-options":document.getElementById("your-profile").childNodes.forEach(s=>{s.style&&(s.style.display="block")});break;case"author-seo":document.getElementById("your-profile").childNodes.forEach(s=>{s.id==="aioseo-user-profile-tab-wrapper"||s.className==="submit"||!s.style||(s.style.display="none")});break;case"customer-data":this.activeTabIndex=o,window.location.href=this.rootStore.aioseo.urls.home+"/wp-admin/admin.php?page=followup-emails-reports&tab=reportuser_view&email="+encodeURIComponent(this.settingsStore.userProfile.userData.user_email)+"&user_id="+this.settingsStore.userProfile.userData.ID;break}location.hash=(t=this.activeTabObject)==null?void 0:t.slug},updateHiddenInputField(e){document.getElementById("aioseo-user-social-profiles").value=JSON.stringify(e)}},computed:{tabs(){const e=[{label:this.$t.__("Personal Options",this.$td),slug:"personal-options"},{label:this.$t.__("Author SEO",this.$td),slug:"author-seo",svg:"svg-logo-gear"}];return this.settingsStore.userProfile.isWooCommerceFollowupEmailsActive&&e.push({label:this.$t.__("Customer Data",this.$td),slug:"customer-data"}),e},activeTabObject(){return this.tabs[this.activeTabIndex]}},async created(){this.updateHiddenInputField(this.settingsStore.userProfile.profiles)},beforeMount(){new URLSearchParams(window.location.search).has("authorInfo")&&this.setActiveTab(1)},mounted(){const e=new URLSearchParams(window.location.search)||null;(e!=null&&e.get("author-seo")||location!=null&&location.hash.includes("author-seo"))&&this.setActiveTab(1)}},de={id:"aioseo-user-profile-tab"},pe={class:"navigation-bar"},me=["onClick"],he={class:"aioseo-user-profile-fields"},fe={class:"aioseo-settings-row aioseo-section-description"};function _e(e,o,t,s,m,h){const f=a("eeat-cta"),_=a("core-social-profiles"),w=a("core-card");return i(),b("div",de,[l("div",pe,[(i(!0),b(P,null,$(h.tabs,(p,g)=>(i(),b("a",{key:g,class:A({active:g===m.activeTabIndex}),href:"#",onClick:B(ye=>h.setActiveTab(g),["prevent"])},[p.svg?(i(),v(U(p.svg),{key:0})):y("",!0),k(" "+c(p.label),1)],10,me))),128))]),h.activeTabObject.slug==="author-seo"?(i(),b(P,{key:0},[r(f),l("div",he,[r(w,{slug:"userProfiles","header-text":m.strings.socialProfiles},{default:n(()=>[l("div",fe,c(m.strings.description),1),r(_,{userProfiles:s.settingsStore.userProfile.profiles,onUpdated:o[0]||(o[0]=p=>h.updateHiddenInputField(p))},null,8,["userProfiles"])]),_:1},8,["header-text"])])],64)):y("",!0)])}const ge=T(ue,[["render",_e]]),be=()=>{const e=document.getElementById("your-profile");if(!e)return;const o=document.createElement("div");o.id="aioseo-user-profile-tab-wrapper";const t=document.createElement("input");t.id="aioseo-user-social-profiles",t.name="aioseo-user-social-profiles",t.type="hidden",e.prepend(t),e.prepend(o)},ve=()=>{let e=L({...ge,name:"Standalone/UserProfileTab"});e=O(e),e=F(e),e=R(e),H(e),e.mount("#aioseo-user-profile-tab-wrapper")};Y("#your-profile","profilePageLoaded");document.addEventListener("animationstart",function(e){e.animationName==="profilePageLoaded"&&(be(),ve())});
