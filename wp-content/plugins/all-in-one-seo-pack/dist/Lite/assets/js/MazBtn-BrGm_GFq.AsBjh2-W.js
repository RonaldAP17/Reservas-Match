const __vite__fileDeps=[window.__aioseoDynamicImportPreload__("js/MazSpinner-CCnDkF4m.BXcFVbz5.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.CWQFYt9y.js"),window.__aioseoDynamicImportPreload__("js/Phone.Dy0fdeSX.js"),window.__aioseoDynamicImportPreload__("js/links.DERf9LZO.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.Bd0Z306Z.js"),window.__aioseoDynamicImportPreload__("js/helpers.D2xRWOvn.js"),window.__aioseoDynamicImportPreload__("js/preload-helper.M0ZNWaht.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.BN1snXvA.js"),window.__aioseoDynamicImportPreload__("css/Phone.CSx2umrP.css"),window.__aioseoDynamicImportPreload__("css/MazSpinner-CCnDkF4m.CIDeY9ty.css"),window.__aioseoDynamicImportPreload__("js/MazIcon-Cxrv3_OK.BheUKhc4.js")],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_}from"./preload-helper.M0ZNWaht.js";import{f as L,Q as P,R as T,S as R,g as a,o,l,m as U,c as r,H as s,d as t,q as u,u as c,v as d,U as g}from"./vue.esm-bundler.CWQFYt9y.js";import{A as M}from"./Phone.Dy0fdeSX.js";import"./links.DERf9LZO.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.D2xRWOvn.js";import"./_plugin-vue_export-helper.BN1snXvA.js";const D=L({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},noLeading:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{default:void 0},leftIcon:{default:void 0},rightIcon:{default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},contentClass:{default:void 0}},setup(h){const k=g(()=>_(()=>import("./MazSpinner-CCnDkF4m.BXcFVbz5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),p=g(()=>_(()=>import("./MazIcon-Cxrv3_OK.BheUKhc4.js"),__vite__mapDeps([10,1]),import.meta.url)),{href:B,to:I}=P(),f=T(),n=h;R(()=>{n.icon&&!n.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const m=a(()=>B?"a":I?"router-link":"button"),z=a(()=>n.pastel?`--${n.color}-pastel`:n.outline?`--${n.color}-outline`:`--${n.color}`),v=a(()=>(n.loading||n.disabled)&&m.value==="button"),$=a(()=>v.value?"--cursor-default":"--cursor-pointer"),A=a(()=>`--is-${n.variant}`),i=a(()=>n.loading&&n.variant==="button"),y=a(()=>!!f["left-icon"]||n.leftIcon),b=a(()=>!!f["right-icon"]||n.rightIcon),C=a(()=>y.value||b.value),x=a(()=>n.fab&&(n.icon||!!f.icon)),E=a(()=>m.value==="button"?n.type:void 0);return(e,S)=>(o(),l(d(m.value),{disabled:v.value,class:s(["m-btn",[`--${e.size}`,z.value,$.value,A.value,{"--block":e.block,"--no-underline":e.noUnderline,"--no-leading":e.noLeading,"--fab":e.fab,"--loading":e.loading,"--disabled":v.value,"--icon":C.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]]),type:E.value},{default:U(()=>[y.value?(o(),r("div",{key:0,class:s(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":i.value}])},[t(`
        @slot left-icon - The icon to display on the left of the button
      `),u(e.$slots,"left-icon",{},()=>[typeof e.leftIcon=="string"?(o(),l(c(p),{key:0,name:e.leftIcon},null,8,["name"])):e.leftIcon?(o(),l(d(e.leftIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),x.value?(o(),r("div",{key:1,class:s(["m-btn__icon",{"maz-invisible":i.value}])},[t(`
        @slot icon - The icon to display on the fab button
      `),u(e.$slots,"icon",{},()=>[typeof e.icon=="string"?(o(),l(c(p),{key:0,name:e.icon},null,8,["name"])):e.icon?(o(),l(d(e.icon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),e.$slots.default?(o(),r("span",{key:2,class:s([{"maz-invisible":i.value},e.contentClass])},[t(`
        @slot default - The content of the button
      `),u(e.$slots,"default",{},void 0,!0)],2)):t("v-if",!0),b.value?(o(),r("div",{key:3,class:s(["m-btn__icon-right",{"maz-invisible":i.value}])},[t(`
        @slot right-icon - The icon to display on the right of the button
      `),u(e.$slots,"right-icon",{},()=>[typeof e.rightIcon=="string"?(o(),l(c(p),{key:0,name:e.rightIcon},null,8,["name"])):e.rightIcon?(o(),l(d(e.rightIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),i.value?(o(),l(c(k),{key:4,class:"m-btn-loader",size:"2em",color:e.color},null,8,["color"])):t("v-if",!0)]),_:3},8,["disabled","class","type"]))}}),Q=M(D,[["__scopeId","data-v-0b480541"]]);export{Q as default};
