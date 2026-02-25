goog.provide('casa_financas.views.settings');
casa_financas.views.settings.pessoas_ids = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna"], null);
casa_financas.views.settings.secao_perfis = (function casa_financas$views$settings$secao_perfis(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white rounded-2xl border border-gray-100 p-4 mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-gray-700 mb-3"], null),"Perfis"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$settings$secao_perfis_$_iter__28038(s__28039){
return (new cljs.core.LazySeq(null,(function (){
var s__28039__$1 = s__28039;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__28039__$1);
if(temp__5823__auto__){
var s__28039__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28039__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__28039__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__28041 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__28040 = (0);
while(true){
if((i__28040 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__28040);
cljs.core.chunk_append(b__28041,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-3 py-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.avatar,pid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"md"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 font-medium text-gray-800"], null),casa_financas.utils.pessoa_nome(pid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-8 h-8 rounded-full border-2 border-gray-200",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cor-pessoa","cor-pessoa",-1425578316),pid], null)))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)));

var G__28046 = (i__28040 + (1));
i__28040 = G__28046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28041),casa_financas$views$settings$secao_perfis_$_iter__28038(cljs.core.chunk_rest(s__28039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28041),null);
}
} else {
var pid = cljs.core.first(s__28039__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-3 py-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.avatar,pid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"md"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 font-medium text-gray-800"], null),casa_financas.utils.pessoa_nome(pid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-8 h-8 rounded-full border-2 border-gray-200",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cor-pessoa","cor-pessoa",-1425578316),pid], null)))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)),casa_financas$views$settings$secao_perfis_$_iter__28038(cljs.core.rest(s__28039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.settings.pessoas_ids);
})()], null);
});
casa_financas.views.settings.secao_conta = (function casa_financas$views$settings$secao_conta(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white rounded-2xl border border-gray-100 p-4 mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-gray-700 mb-3"], null),"Conta"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full py-3 px-4 rounded-xl font-semibold text-blue-600 bg-blue-50 active:bg-blue-100 transition-colors mb-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),new cljs.core.Keyword(null,"importar","importar",893653638)], null));
})], null),"\u2B06 Importar CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full py-3 px-4 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
})], null),"Sair da conta"], null)], null);
});
casa_financas.views.settings.paleta_cores = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#2563EB","#7C3AED","#DB2777","#DC2626","#EA580C","#D97706","#65A30D","#966305","#0891B2","#eed428","#221e6e","#380f5f","#C026D3","#0F766E","#15803D"], null);
casa_financas.views.settings.seletor_cor = (function casa_financas$views$settings$seletor_cor(pessoa_id,aberto_atom){
return (function (){
var cor_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cor-pessoa","cor-pessoa",-1425578316),pessoa_id], null)));
var aberto_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aberto_atom),pessoa_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-3 py-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.avatar,pessoa_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"sm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 text-sm font-medium text-gray-700"], null),casa_financas.utils.pessoa_nome(pessoa_id)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-8 h-8 rounded-full border-2 border-gray-200 transition-all",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor_atual], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(aberto_atom,((aberto_QMARK_)?null:pessoa_id));
})], null)], null),((aberto_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-0 top-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-5 gap-2"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$settings$seletor_cor_$_iter__28042(s__28043){
return (new cljs.core.LazySeq(null,(function (){
var s__28043__$1 = s__28043;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__28043__$1);
if(temp__5823__auto__){
var s__28043__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28043__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__28043__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__28045 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__28044 = (0);
while(true){
if((i__28044 < size__5627__auto__)){
var cor = cljs.core._nth(c__5626__auto__,i__28044);
cljs.core.chunk_append(b__28045,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-8 h-8 rounded-full border-2 transition-all "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cor,cor_atual))?"border-gray-800 scale-110":"border-transparent"))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28044,cor,c__5626__auto__,size__5627__auto__,b__28045,s__28043__$2,temp__5823__auto__,cor_atual,aberto_QMARK_){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-cor-pessoa","salvar-cor-pessoa",-1731590300),pessoa_id,cor], null));

return cljs.core.reset_BANG_(aberto_atom,null);
});})(i__28044,cor,c__5626__auto__,size__5627__auto__,b__28045,s__28043__$2,temp__5823__auto__,cor_atual,aberto_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cor], null)));

var G__28047 = (i__28044 + (1));
i__28044 = G__28047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28045),casa_financas$views$settings$seletor_cor_$_iter__28042(cljs.core.chunk_rest(s__28043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28045),null);
}
} else {
var cor = cljs.core.first(s__28043__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-8 h-8 rounded-full border-2 transition-all "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cor,cor_atual))?"border-gray-800 scale-110":"border-transparent"))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cor,s__28043__$2,temp__5823__auto__,cor_atual,aberto_QMARK_){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-cor-pessoa","salvar-cor-pessoa",-1731590300),pessoa_id,cor], null));

return cljs.core.reset_BANG_(aberto_atom,null);
});})(cor,s__28043__$2,temp__5823__auto__,cor_atual,aberto_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cor], null)),casa_financas$views$settings$seletor_cor_$_iter__28042(cljs.core.rest(s__28043__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.settings.paleta_cores);
})()], null)], null):null)], null)], null);
});
});
casa_financas.views.settings.secao_cores = (function casa_financas$views$settings$secao_cores(){
var aberto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-800 mb-3"], null),"Cores dos Usu\u00E1rios"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"divide-y divide-gray-50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.seletor_cor,"andre",aberto], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.seletor_cor,"bianca",aberto], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.seletor_cor,"fernanda",aberto], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.seletor_cor,"bruna",aberto], null)], null)], null);
});
});
casa_financas.views.settings.settings = (function casa_financas$views$settings$settings(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col pb-24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 bg-white border-b border-gray-100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-800 text-lg"], null),"Configura\u00E7\u00F5es"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.secao_cores], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.secao_conta], null)], null)], null);
});

//# sourceMappingURL=casa_financas.views.settings.js.map
