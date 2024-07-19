import{a as U}from"./allowed.DI27y-Lv.js";import{h as w}from"./helpers.D5tYIqKS.js";import{c as S}from"./news-sitemap.DpNdH6wu.js";import{C as O}from"./GettingStarted.DsX3A9Nz.js";import{C as y}from"./Index.fxoyLS1r.js";import{G as A,a as I}from"./Row.CHjKxnPP.js";import{S as v}from"./Book.DaIhDiml.js";import{_ as E}from"./_plugin-vue_export-helper.BLXtEB-G.js";import{v as o,c as _,k as c,b as g,l as e,a as i,B as r,o as n,C as d,t as a,F as P,ac as x}from"./runtime-core.esm-bundler.DMBo7TXk.js";import"./links.C572zDFG.js";import"./default-i18n.Bd0Z306Z.js";import"./Caret.CGwYaMo_.js";import"./Rocket.2DIRzDuc.js";import"./constants.B6ynd7gz.js";const b={components:{CoreGettingStarted:O,Cta:y,GridColumn:A,GridRow:I,SvgBook:v},data(){return{allowed:U,ctaImg:S,strings:{cta:{title:this.$t.sprintf(this.$t.__("Get %1$s %2$s and Unlock all the Powerful Features",this.$td),"AIOSEO","Pro"),header:this.$t.sprintf(this.$t.__("Get %1$s %2$s and Unlock all the Powerful Features.",this.$td),"AIOSEO","Pro"),button:this.$t.sprintf(this.$t.__("Upgrade to %1$s Today",this.$td),"Pro")},videos:{title:this.$t.__("Video Tutorials",this.$td),linkText:this.$t.__("View all video tutorials",this.$td),linkUrl:"https://changeme"},documentation:{title:this.$t.sprintf(this.$t.__("%1$s Documentation",this.$td),"AIOSEO"),linkText:this.$t.__("See our full documentation",this.$td),linkUrl:this.$links.getDocUrl("home")}},videos:{video1:{title:this.$t.__("Basic Guide to Google Analytics",this.$td),url:"https://changeme"},video2:{title:this.$t.__("Basic Guide to Google Search Console",this.$td),url:"https://changeme"},video3:{title:this.$t.__("Best Practices for Domains and URLs",this.$td),url:"https://changeme"},video4:{title:this.$t.__("How to Control Search Results",this.$td),url:"https://changeme"},video5:{title:this.$t.sprintf(this.$t.__("Installing %1$s %2$s",this.$td),"AIOSEO","Pro"),url:"https://changeme"},video6:{title:this.$t.__("Optimizing your Content Headings",this.$td),url:"https://changeme"}},docs:{doc1:{title:"How do I get Google to show sitelinks for my site?",url:this.$links.getDocUrl("showSitelinks")},doc2:{title:"How do I use your API code examples?",url:this.$links.getDocUrl("apiCodeExamples")},doc3:{title:"What are media attachments and should I submit them to search engines?",url:this.$links.getDocUrl("whatAreMediaAttachments")},doc4:{title:"When to use NOINDEX or the robots.txt?",url:this.$links.getDocUrl("whenToUseNoindex")},doc5:{title:"How do I troubleshoot issues with AIOSEO?",url:this.$links.getDocUrl("troubleshootIssues")},doc6:{title:"How does the import process for SEO data work?",url:this.$links.getDocUrl("importProcessSeoData")},doc7:{title:"Installation instructions for AIOSEO Pro",url:this.$links.getDocUrl("installAioseoPro")},doc8:{title:"What are the minimum requirements for All in One SEO?",url:this.$links.getDocUrl("minimumRequirements")}}}},computed:{upgradeToday(){return this.$t.sprintf(this.$t.__("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",this.$td),"AIOSEO","Pro")}},methods:{getAssetUrl:w}},D={class:"aioseo-getting-started"},C=["src"],G={class:"aioseo-getting-started-documentation"},T=["href"],B={class:"d-flex"},L=["href"];function N(s,H,R,V,t,u){const p=o("core-getting-started"),f=o("cta"),l=o("grid-column"),h=o("grid-row"),$=o("svg-book");return n(),_("div",D,[t.allowed("aioseo_setup_wizard")?(n(),c(p,{key:0,"disable-close":""})):g("",!0),s.$isPro?g("",!0):(n(),c(f,{key:1,class:"aioseo-getting-started-cta",type:2,floating:!1,"button-text":t.strings.cta.button,"cta-link":s.$links.utmUrl("getting-started","main-cta"),"learn-more-link":s.$links.getUpsellUrl("getting-started","main-cta",s.$isPro?"pricing":"liteUpgrade"),"feature-list":s.$constants.UPSELL_FEATURE_LIST,showLink:!1},{"header-text":e(()=>[d(a(t.strings.cta.header),1)]),description:e(()=>[d(a(u.upgradeToday),1)]),"featured-image":e(()=>[i("img",{alt:"Getting Started with AIOSEO",src:u.getAssetUrl(t.ctaImg)},null,8,C)]),_:1},8,["button-text","cta-link","learn-more-link","feature-list"])),i("div",G,[r(h,{class:"header"},{default:e(()=>[r(l,{class:"header-title",sm:"6",md:"6"},{default:e(()=>[d(a(t.strings.documentation.title),1)]),_:1}),r(l,{sm:"6",md:"6",class:"header-link"},{default:e(()=>[i("a",{href:t.strings.documentation.linkUrl,target:"_blank"},a(t.strings.documentation.linkText)+" → ",9,T)]),_:1})]),_:1}),r(h,{class:"docs"},{default:e(()=>[(n(!0),_(P,null,x(t.docs,(m,k)=>(n(),c(l,{class:"doc",key:k,sm:"12",md:"6"},{default:e(()=>[i("div",B,[r($),i("a",{href:m.url,target:"_blank"},a(m.title),9,L)])]),_:2},1024))),128))]),_:1})])])}const st=E(b,[["render",N]]);export{st as default};