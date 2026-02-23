goog.provide('casa_financas.core');
var module$node_modules$lucide_react$dist$cjs$lucide_react=shadow.js.require("module$node_modules$lucide_react$dist$cjs$lucide_react", {});
casa_financas.core.nav_item = (function casa_financas$core$nav_item(aba,icone,label){
var aba_ativa = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669)], null)));
var ativo_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aba_ativa,aba);
var cor = ((ativo_QMARK_)?"#3B82F6":"#9CA3AF");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center flex-1 py-2 transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),aba], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(22),new cljs.core.Keyword(null,"color","color",1011675173),cor,new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),1.8], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"text-xs mt-0.5 font-medium "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((ativo_QMARK_)?"text-blue-500":"text-gray-400")))], null),label], null)], null);
});
casa_financas.core.nav_bottom = (function casa_financas$core$nav_bottom(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center z-40 shadow-sm",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"calc(env(safe-area-inset-bottom) + 16px)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),module$node_modules$lucide_react$dist$cjs$lucide_react.Home,"In\u00EDcio"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"despesas","despesas",786163068),module$node_modules$lucide_react$dist$cjs$lucide_react.Receipt,"Despesas"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),module$node_modules$lucide_react$dist$cjs$lucide_react.Wallet,"Entradas"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"templates","templates",-1237401733),module$node_modules$lucide_react$dist$cjs$lucide_react.FileText,"Templates"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"settings","settings",1556144875),module$node_modules$lucide_react$dist$cjs$lucide_react.Settings,"Config"], null)], null);
});
casa_financas.core.botao_flutuante = (function casa_financas$core$botao_flutuante(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed bottom-24 right-4 w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white text-2xl z-40 active:bg-blue-600 transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-acao","nova-acao",-174989988),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),"+"], null);
});
casa_financas.core.tela_ativa = (function casa_financas$core$tela_ativa(){
var aba = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669)], null)));
var G__12424 = aba;
var G__12424__$1 = (((G__12424 instanceof cljs.core.Keyword))?G__12424.fqn:null);
switch (G__12424__$1) {
case "dashboard":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.dashboard.dashboard], null);

break;
case "despesas":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.despesas], null);

break;
case "entradas":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.entradas.entradas], null);

break;
case "templates":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.templates.templates], null);

break;
case "importar":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.importar.importar], null);

break;
case "settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.settings], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.dashboard.dashboard], null);

}
});
casa_financas.core.app_autenticado = (function casa_financas$core$app_autenticado(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen bg-gray-50 max-w-lg mx-auto relative"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.tela_ativa], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_bottom], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.botao_flutuante], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modais], null)], null);
});
casa_financas.core.app = (function casa_financas$core$app(){
var usuario = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439)], null)));
var loading = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null)));
if(cljs.core.truth_(loading)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen flex items-center justify-center bg-blue-500"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white font-medium"], null),"Carregando..."], null)], null)], null);
} else {
if(cljs.core.truth_(usuario)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.app_autenticado], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.login.login], null);

}
}
});
casa_financas.core.init = (function casa_financas$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.app], null),document.getElementById("app"));
});

//# sourceMappingURL=casa_financas.core.js.map
