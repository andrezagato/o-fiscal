goog.provide('casa_financas.views.despesas');
casa_financas.views.despesas.item_despesa = (function casa_financas$views$despesas$item_despesa(despesa,fatura){
var eh_credito_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(despesa),"credito");
var fatura_status = ((eh_credito_QMARK_)?(function (){var total_pago = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var total = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_total","valor_total",1765765977).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
if((((total > (0))) && ((total_pago >= total)))){
return new cljs.core.Keyword(null,"paga","paga",-490375672);
} else {
if((total_pago > (0))){
return new cljs.core.Keyword(null,"parcial","parcial",488083582);
} else {
return new cljs.core.Keyword(null,"pendente","pendente",311658061);

}
}
})():null);
var status = ((eh_credito_QMARK_)?(function (){var or__5142__auto__ = fatura_status;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"pendente","pendente",311658061);
}
})():casa_financas.utils.despesa_status(despesa));
var vec__26588 = (function (){var G__26593 = status;
var G__26593__$1 = (((G__26593 instanceof cljs.core.Keyword))?G__26593.fqn:null);
switch (G__26593__$1) {
case "paga":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-green-50","border-green-100"], null);

break;
case "parcial":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-amber-50","border-amber-200"], null);

break;
case "vencida":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-red-50","border-red-200"], null);

break;
case "pendente":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-white","border-gray-100"], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26593__$1))));

}
})();
var bg_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26588,(0),null);
var border_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26588,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"rounded-xl border overflow-hidden mb-2 shadow-sm "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_class)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_class))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.barra_divisao,new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(despesa)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 px-3 py-2.5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"editar-despesa","editar-despesa",-7409021),despesa], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center w-6 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold text-gray-700 leading-none"], null),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-px h-8 bg-gray-200 flex-shrink-0"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 min-w-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"font-semibold text-sm truncate mb-0.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"paga","paga",-490375672)))?"line-through text-gray-400 text-lg":"text-gray-800 text-lg")))], null),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(despesa)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$item_despesa_$_iter__26599(s__26600){
return (new cljs.core.LazySeq(null,(function (){
var s__26600__$1 = s__26600;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26600__$1);
if(temp__5823__auto__){
var s__26600__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26600__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26600__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26602 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26601 = (0);
while(true){
if((i__26601 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__26601);
cljs.core.chunk_append(b__26602,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs px-1.5 py-0.5 rounded-full font-medium",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.pessoa_cor(pid))+"20"),new cljs.core.Keyword(null,"color","color",1011675173),casa_financas.utils.pessoa_cor(pid)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"Casa":casa_financas.utils.pessoa_inicial(pid))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)));

var G__26730 = (i__26601 + (1));
i__26601 = G__26730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26602),casa_financas$views$despesas$item_despesa_$_iter__26599(cljs.core.chunk_rest(s__26600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26602),null);
}
} else {
var pid = cljs.core.first(s__26600__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs px-1.5 py-0.5 rounded-full font-medium",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.pessoa_cor(pid))+"20"),new cljs.core.Keyword(null,"color","color",1011675173),casa_financas.utils.pessoa_cor(pid)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"Casa":casa_financas.utils.pessoa_inicial(pid))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)),casa_financas$views$despesas$item_despesa_$_iter__26599(cljs.core.rest(s__26600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(despesa));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-400"], null),((eh_credito_QMARK_)?"cred":"pix")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"vencida","vencida",-1537883219)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-red-500 font-medium"], null),"atrasada"], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"font-semibold text-sm "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"vencida","vencida",-1537883219)))?"text-red-600":"text-gray-800")))], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(despesa))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((eh_credito_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"paga","paga",-490375672)))))?"bg-green-400 border-green-400 opacity-50 cursor-not-allowed":((((eh_credito_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"parcial","parcial",488083582)))))?"bg-amber-400 border-amber-400 opacity-50 cursor-not-allowed":((eh_credito_QMARK_)?"border-gray-200 opacity-30 cursor-not-allowed":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"paga","paga",-490375672)))?"bg-green-400 border-green-400":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"vencida","vencida",-1537883219)))?"border-red-300":"border-gray-300"
))))))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),eh_credito_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

if((!(eh_credito_QMARK_))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desmarcar-pago","desmarcar-pago",-5576968),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marcar-pago","marcar-pago",446617930),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa)], null));
}
} else {
return null;
}
})], null),(((((((!(eh_credito_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"paga","paga",-490375672))))) || (((eh_credito_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"paga","paga",-490375672)))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white text-xs font-bold"], null),"\u2713"], null):null)], null)], null)], null)], null);
});
casa_financas.views.despesas.card_fatura = (function casa_financas$views$despesas$card_fatura(fatura,total_credito){
var valor_pago = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var status = (((valor_pago >= total_credito))?new cljs.core.Keyword(null,"paga","paga",-490375672):(((valor_pago > (0)))?new cljs.core.Keyword(null,"parcial","parcial",488083582):new cljs.core.Keyword(null,"pendente","pendente",311658061)
));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"rounded-xl border overflow-hidden mb-2 shadow-sm "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__26648 = status;
var G__26648__$1 = (((G__26648 instanceof cljs.core.Keyword))?G__26648.fqn:null);
switch (G__26648__$1) {
case "paga":
return "bg-green-50 border-green-200";

break;
case "parcial":
return "bg-amber-50 border-amber-200";

break;
case "pendente":
return "bg-white border-gray-100";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26648__$1))));

}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-1 bg-blue-400"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 px-3 py-2.5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"pagamento-fatura","pagamento-fatura",-1469032114),fatura], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center w-6 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold text-gray-700 leading-none"], null),"23"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-px h-8 bg-gray-200 flex-shrink-0"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 min-w-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-sm text-gray-800 text-lg"], null),"\uD83D\uDCB3 Fatura Cart\u00E3o"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1.5"], null),(function (){var G__26654 = status;
var G__26654__$1 = (((G__26654 instanceof cljs.core.Keyword))?G__26654.fqn:null);
switch (G__26654__$1) {
case "paga":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-green-600 font-medium"], null),"pago"], null);

break;
case "parcial":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-amber-600 font-medium"], null),(""+"pago "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(valor_pago)))], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-400"], null),"pendente"], null);

}
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-sm text-gray-800"], null),casa_financas.utils.formatar_valor_br(total_credito)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__26656 = status;
var G__26656__$1 = (((G__26656 instanceof cljs.core.Keyword))?G__26656.fqn:null);
switch (G__26656__$1) {
case "paga":
return "bg-green-400 border-green-400";

break;
case "parcial":
return "bg-amber-400 border-amber-400";

break;
default:
return "border-gray-300";

}
})())),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"pagamento-fatura","pagamento-fatura",-1469032114),fatura], null));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"paga","paga",-490375672)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white text-xs font-bold"], null),"\u2713"], null):null)], null)], null)], null)], null);
});
casa_financas.views.despesas.despesas = (function casa_financas$views$despesas$despesas(){
var filtro = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"todas","todas",-2073992414));
return (function (){
var despesas_mes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null)));
var fatura = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fatura","fatura",18781370)], null)));
var total_credito = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-credito-mes","total-credito-mes",-1293171558)], null)));
var tem_credito_QMARK_ = (total_credito > (0));
var templates = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templates","templates",-1237401733)], null)));
var despesas_filtradas = (function (){var G__26667 = cljs.core.deref(filtro);
var G__26667__$1 = (((G__26667 instanceof cljs.core.Keyword))?G__26667.fqn:null);
switch (G__26667__$1) {
case "todas":
return despesas_mes;

break;
case "pendentes":
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26661_SHARP_){
return ((cljs.core.not(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__26661_SHARP_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__26661_SHARP_),"credito")));
}),despesas_mes);

break;
case "pagas":
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pago","pago",27952415),despesas_mes);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26667__$1))));

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col pb-24"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.seletor_mes], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1 p-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm mb-3"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$despesas_$_iter__26672(s__26673){
return (new cljs.core.LazySeq(null,(function (){
var s__26673__$1 = s__26673;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26673__$1);
if(temp__5823__auto__){
var s__26673__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26673__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26673__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26675 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26674 = (0);
while(true){
if((i__26674 < size__5627__auto__)){
var vec__26683 = cljs.core._nth(c__5626__auto__,i__26674);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26683,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26683,(1),null);
cljs.core.chunk_append(b__26675,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filtro),k))?"bg-blue-500 text-white":"text-gray-500"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26674,vec__26683,k,label,c__5626__auto__,size__5627__auto__,b__26675,s__26673__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,tem_credito_QMARK_,templates,despesas_filtradas,filtro){
return (function (){
return cljs.core.reset_BANG_(filtro,k);
});})(i__26674,vec__26683,k,label,c__5626__auto__,size__5627__auto__,b__26675,s__26673__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,tem_credito_QMARK_,templates,despesas_filtradas,filtro))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__26738 = (i__26674 + (1));
i__26674 = G__26738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26675),casa_financas$views$despesas$despesas_$_iter__26672(cljs.core.chunk_rest(s__26673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26675),null);
}
} else {
var vec__26690 = cljs.core.first(s__26673__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26690,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26690,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filtro),k))?"bg-blue-500 text-white":"text-gray-500"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__26690,k,label,s__26673__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,tem_credito_QMARK_,templates,despesas_filtradas,filtro){
return (function (){
return cljs.core.reset_BANG_(filtro,k);
});})(vec__26690,k,label,s__26673__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,tem_credito_QMARK_,templates,despesas_filtradas,filtro))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),casa_financas$views$despesas$despesas_$_iter__26672(cljs.core.rest(s__26673__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todas","todas",-2073992414),"Todas"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pendentes","pendentes",-832225647),"Pendentes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagas","pagas",1483387154),"Pagas"], null)], null));
})()], null),((cljs.core.empty_QMARK_(despesas_filtradas))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center py-12 text-gray-400"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl mb-3"], null),"\uD83D\uDCB8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium"], null),"Nenhuma despesa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm mb-4"], null),"Toque no + para adicionar"], null),((cljs.core.seq(templates))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056)], null));
})], null),"\uD83D\uDCCB Importar Templates"], null):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var despesas_ordenadas = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"ano_compra","ano_compra",2049635973).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d);
}
})(),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mes_compra","mes_compra",431314692).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d);
}
})(),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(d)], null);
}),despesas_filtradas);
var antes_23 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26664_SHARP_){
return (new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(p1__26664_SHARP_) < (23));
}),despesas_ordenadas);
var partir_23 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26665_SHARP_){
return (new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(p1__26665_SHARP_) >= (23));
}),despesas_ordenadas);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$despesas_$_iter__26700(s__26701){
return (new cljs.core.LazySeq(null,(function (){
var s__26701__$1 = s__26701;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26701__$1);
if(temp__5823__auto__){
var s__26701__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26701__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26701__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26703 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26702 = (0);
while(true){
if((i__26702 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__26702);
cljs.core.chunk_append(b__26703,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa,d,fatura], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)));

var G__26761 = (i__26702 + (1));
i__26702 = G__26761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26703),casa_financas$views$despesas$despesas_$_iter__26700(cljs.core.chunk_rest(s__26701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26703),null);
}
} else {
var d = cljs.core.first(s__26701__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa,d,fatura], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)),casa_financas$views$despesas$despesas_$_iter__26700(cljs.core.rest(s__26701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(antes_23);
})(),((((tem_credito_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filtro),new cljs.core.Keyword(null,"todas","todas",-2073992414)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.card_fatura,fatura,total_credito], null):null),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$despesas_$_iter__26715(s__26716){
return (new cljs.core.LazySeq(null,(function (){
var s__26716__$1 = s__26716;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26716__$1);
if(temp__5823__auto__){
var s__26716__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26716__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26716__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26718 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26717 = (0);
while(true){
if((i__26717 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__26717);
cljs.core.chunk_append(b__26718,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa,d,fatura], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)));

var G__26762 = (i__26717 + (1));
i__26717 = G__26762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26718),casa_financas$views$despesas$despesas_$_iter__26715(cljs.core.chunk_rest(s__26716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26718),null);
}
} else {
var d = cljs.core.first(s__26716__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa,d,fatura], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)),casa_financas$views$despesas$despesas_$_iter__26715(cljs.core.rest(s__26716__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(partir_23);
})()], null);
})(),((cljs.core.seq(templates))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full mt-2 py-2.5 rounded-xl text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056)], null));
})], null),"\uD83D\uDCCB Importar Templates do M\u00EAs"], null):null)], null))], null)], null);
});
});

//# sourceMappingURL=casa_financas.views.despesas.js.map
