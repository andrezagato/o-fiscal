goog.provide('casa_financas.views.templates');
casa_financas.views.templates.item_template = (function casa_financas$views$templates$item_template(template){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white rounded-xl border border-gray-100 p-3 mb-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"editar-template","editar-template",-1536598193),template], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 min-w-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-gray-800"], null),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(template)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 mt-1"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$templates$item_template_$_iter__26618(s__26619){
return (new cljs.core.LazySeq(null,(function (){
var s__26619__$1 = s__26619;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26619__$1);
if(temp__5823__auto__){
var s__26619__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26619__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26619__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26621 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26620 = (0);
while(true){
if((i__26620 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__26620);
cljs.core.chunk_append(b__26621,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.chip_pessoa,pid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)));

var G__26663 = (i__26620 + (1));
i__26620 = G__26663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26621),casa_financas$views$templates$item_template_$_iter__26618(cljs.core.chunk_rest(s__26619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26621),null);
}
} else {
var pid = cljs.core.first(s__26619__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.chip_pessoa,pid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)),casa_financas$views$templates$item_template_$_iter__26618(cljs.core.rest(s__26619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(template));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-400"], null),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(template)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-end gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-gray-700"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(template))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-10 h-5 rounded-full transition-colors flex items-center px-0.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template))?"bg-green-400":"bg-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-template","toggle-template",1422016592),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-4 h-4 rounded-full bg-white shadow transition-transform "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template))?"translate-x-5":"translate-x-0")))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.barra_divisao,new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(template)], null)], null)], null);
});
casa_financas.views.templates.templates = (function casa_financas$views$templates$templates(){
var templates = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templates","templates",-1237401733)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col pb-24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 bg-white border-b border-gray-100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-800 text-lg"], null),"Templates"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 pt-4"], null),((cljs.core.empty_QMARK_(templates))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center py-16 text-gray-400"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl mb-3"], null),"\uD83D\uDCCB"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium"], null),"Nenhum template"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm"], null),"Toque no + para criar"], null)], null):(function (){var iter__5628__auto__ = (function casa_financas$views$templates$templates_$_iter__26643(s__26644){
return (new cljs.core.LazySeq(null,(function (){
var s__26644__$1 = s__26644;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26644__$1);
if(temp__5823__auto__){
var s__26644__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26644__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26644__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26646 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26645 = (0);
while(true){
if((i__26645 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__26645);
cljs.core.chunk_append(b__26646,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.templates.item_template,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__26671 = (i__26645 + (1));
i__26645 = G__26671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26646),casa_financas$views$templates$templates_$_iter__26643(cljs.core.chunk_rest(s__26644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26646),null);
}
} else {
var t = cljs.core.first(s__26644__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.templates.item_template,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null)),casa_financas$views$templates$templates_$_iter__26643(cljs.core.rest(s__26644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(templates);
})())], null)], null);
});

//# sourceMappingURL=casa_financas.views.templates.js.map
