goog.provide('casa_financas.views.modais');
casa_financas.views.modais.pessoas_ids = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna","conjunta"], null);
casa_financas.views.modais.pessoas_ids_sem_conjunta = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna"], null);
casa_financas.views.modais.presets_divisao = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"25\u00B725\u00B725\u00B725",new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),(25),new cljs.core.Keyword(null,"bianca","bianca",820619526),(25),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),(25),new cljs.core.Keyword(null,"bruna","bruna",1508842390),(25)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"30\u00B730\u00B720\u00B720",new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),(30),new cljs.core.Keyword(null,"bianca","bianca",820619526),(30),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),(20),new cljs.core.Keyword(null,"bruna","bruna",1508842390),(20)], null)], null)], null);
casa_financas.views.modais.seletor_divisao = (function casa_financas$views$modais$seletor_divisao(divisao,on_change){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$seletor_divisao_$_iter__13308(s__13309){
return (new cljs.core.LazySeq(null,(function (){
var s__13309__$1 = s__13309;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__13309__$1);
if(temp__5823__auto__){
var s__13309__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13309__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__13309__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__13311 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__13310 = (0);
while(true){
if((i__13310 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__13310);
cljs.core.chunk_append(b__13311,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2 rounded-xl text-xs font-medium border-2 transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p),divisao))?"bg-blue-500 text-white border-blue-500":"text-gray-500 border-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13310,p,c__5626__auto__,size__5627__auto__,b__13311,s__13309__$2,temp__5823__auto__){
return (function (){
var G__13312 = new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__13312) : on_change.call(null,G__13312));
});})(i__13310,p,c__5626__auto__,size__5627__auto__,b__13311,s__13309__$2,temp__5823__auto__))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__13342 = (i__13310 + (1));
i__13310 = G__13342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13311),casa_financas$views$modais$seletor_divisao_$_iter__13308(cljs.core.chunk_rest(s__13309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13311),null);
}
} else {
var p = cljs.core.first(s__13309__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2 rounded-xl text-xs font-medium border-2 transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p),divisao))?"bg-blue-500 text-white border-blue-500":"text-gray-500 border-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__13309__$2,temp__5823__auto__){
return (function (){
var G__13313 = new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__13313) : on_change.call(null,G__13313));
});})(p,s__13309__$2,temp__5823__auto__))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null)),casa_financas$views$modais$seletor_divisao_$_iter__13308(cljs.core.rest(s__13309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.presets_divisao);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2 rounded-xl text-xs font-medium border-2 transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(cljs.core.some((function (p1__13306_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p1__13306_SHARP_),divisao);
}),casa_financas.views.modais.presets_divisao)))?"bg-blue-500 text-white border-blue-500":"text-gray-500 border-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(divisao) : on_change.call(null,divisao));
})], null),"Manual"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 gap-1.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$seletor_divisao_$_iter__13314(s__13315){
return (new cljs.core.LazySeq(null,(function (){
var s__13315__$1 = s__13315;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__13315__$1);
if(temp__5823__auto__){
var s__13315__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13315__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__13315__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__13317 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__13316 = (0);
while(true){
if((i__13316 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__13316);
cljs.core.chunk_append(b__13317,(function (){var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
var pct = cljs.core.get.cljs$core$IFn$_invoke$arity$3(divisao,k,(0));
var cor = casa_financas.utils.pessoa_cor(pid);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cor], null)], null),casa_financas.utils.pessoa_inicial(pid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[(0),pct,"number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor], null),(100),"w-full border-2 rounded-lg px-1 py-1.5 text-sm text-center focus:outline-none",((function (i__13316,k,pct,cor,pid,c__5626__auto__,size__5627__auto__,b__13317,s__13315__$2,temp__5823__auto__){
return (function (p1__13307_SHARP_){
var G__13318 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(divisao,k,(p1__13307_SHARP_.target.value | 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__13318) : on_change.call(null,G__13318));
});})(i__13316,k,pct,cor,pid,c__5626__auto__,size__5627__auto__,b__13317,s__13315__$2,temp__5823__auto__))
,"numeric","[0-9]*"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-400"], null),"%"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})());

var G__13343 = (i__13316 + (1));
i__13316 = G__13343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13317),casa_financas$views$modais$seletor_divisao_$_iter__13314(cljs.core.chunk_rest(s__13315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13317),null);
}
} else {
var pid = cljs.core.first(s__13315__$2);
return cljs.core.cons((function (){var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
var pct = cljs.core.get.cljs$core$IFn$_invoke$arity$3(divisao,k,(0));
var cor = casa_financas.utils.pessoa_cor(pid);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cor], null)], null),casa_financas.utils.pessoa_inicial(pid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[(0),pct,"number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor], null),(100),"w-full border-2 rounded-lg px-1 py-1.5 text-sm text-center focus:outline-none",((function (k,pct,cor,pid,s__13315__$2,temp__5823__auto__){
return (function (p1__13307_SHARP_){
var G__13319 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(divisao,k,(p1__13307_SHARP_.target.value | 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__13319) : on_change.call(null,G__13319));
});})(k,pct,cor,pid,s__13315__$2,temp__5823__auto__))
,"numeric","[0-9]*"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-400"], null),"%"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})(),casa_financas$views$modais$seletor_divisao_$_iter__13314(cljs.core.rest(s__13315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.pessoas_ids_sem_conjunta);
})()], null),(function (){var soma = casa_financas.utils.soma_divisao(divisao);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(soma,(100))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-red-500 font-medium text-center"], null),(""+"\u26A0 Soma: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(soma)+"% (precisa ser 100%)")], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.barra_divisao,divisao], null)], null);
});
casa_financas.views.modais.seletor_data = (function casa_financas$views$modais$seletor_data(valor,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white",new cljs.core.Keyword(null,"value","value",305978217),valor,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13320_SHARP_){
var G__13321 = p1__13320_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__13321) : on_change.call(null,G__13321));
})], null)], null);
});
casa_financas.views.modais.dia_para_date = (function casa_financas$views$modais$dia_para_date(dia,mes,ano){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ano)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((mes < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mes)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((dia < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dia));
});
casa_financas.views.modais.date_para_dia = (function casa_financas$views$modais$date_para_dia(date_str){
if(cljs.core.truth_((function (){var and__5140__auto__ = date_str;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(date_str,"");
} else {
return and__5140__auto__;
}
})())){
return (cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/-/)) | 0);
} else {
return null;
}
});
casa_financas.views.modais.modal_nova_acao = (function casa_financas$views$modais$modal_nova_acao(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed inset-0 z-50",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__13322_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13322_SHARP_.target,p1__13322_SHARP_.currentTarget)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-24 right-4 flex flex-col gap-2 items-end"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 active:bg-gray-50 border border-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-despesa","nova-despesa",-1962536346),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCB8"], null),"Nova Despesa"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 active:bg-gray-50 border border-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-entrada","nova-entrada",-912141489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCB0"], null),"Nova Entrada"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 active:bg-gray-50 border border-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"novo-template","novo-template",-809713410),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCCB"], null),"Novo Template"], null)], null)], null);
});
casa_financas.views.modais.seletor_pagadores = (function casa_financas$views$modais$seletor_pagadores(pagadores,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1.5 flex-wrap"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$seletor_pagadores_$_iter__13324(s__13325){
return (new cljs.core.LazySeq(null,(function (){
var s__13325__$1 = s__13325;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__13325__$1);
if(temp__5823__auto__){
var s__13325__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13325__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__13325__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__13327 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__13326 = (0);
while(true){
if((i__13326 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__13326);
cljs.core.chunk_append(b__13327,(function (){var selecionado = cljs.core.some(((function (i__13326,pid,c__5626__auto__,size__5627__auto__,b__13327,s__13325__$2,temp__5823__auto__){
return (function (p1__13323_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13323_SHARP_,pid);
});})(i__13326,pid,c__5626__auto__,size__5627__auto__,b__13327,s__13325__$2,temp__5823__auto__))
,pagadores);
var cor = casa_financas.utils.pessoa_cor(pid);
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"Casa":casa_financas.utils.pessoa_inicial(pid));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-9 h-9 rounded-full text-xs font-bold border-2 transition-colors flex items-center justify-center",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#9CA3AF"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13326,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__13327,s__13325__$2,temp__5823__auto__){
return (function (){
var G__13328 = (function (){var ps = cljs.core.vec(pagadores);
if(cljs.core.truth_(selecionado)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__13326,ps,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__13327,s__13325__$2,temp__5823__auto__){
return (function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid);
});})(i__13326,ps,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__13327,s__13325__$2,temp__5823__auto__))
,ps));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,pid);
}
})();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__13328) : on_change.call(null,G__13328));
});})(i__13326,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__13327,s__13325__$2,temp__5823__auto__))
], null),label], null);
})());

var G__13345 = (i__13326 + (1));
i__13326 = G__13345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13327),casa_financas$views$modais$seletor_pagadores_$_iter__13324(cljs.core.chunk_rest(s__13325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13327),null);
}
} else {
var pid = cljs.core.first(s__13325__$2);
return cljs.core.cons((function (){var selecionado = cljs.core.some(((function (pid,s__13325__$2,temp__5823__auto__){
return (function (p1__13323_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13323_SHARP_,pid);
});})(pid,s__13325__$2,temp__5823__auto__))
,pagadores);
var cor = casa_financas.utils.pessoa_cor(pid);
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"Casa":casa_financas.utils.pessoa_inicial(pid));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-9 h-9 rounded-full text-xs font-bold border-2 transition-colors flex items-center justify-center",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#9CA3AF"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selecionado,cor,label,pid,s__13325__$2,temp__5823__auto__){
return (function (){
var G__13329 = (function (){var ps = cljs.core.vec(pagadores);
if(cljs.core.truth_(selecionado)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid);
}),ps));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,pid);
}
})();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__13329) : on_change.call(null,G__13329));
});})(selecionado,cor,label,pid,s__13325__$2,temp__5823__auto__))
], null),label], null);
})(),casa_financas$views$modais$seletor_pagadores_$_iter__13324(cljs.core.rest(s__13325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.pessoas_ids);
})()], null);
});
casa_financas.views.modais.modal_despesa = (function casa_financas$views$modais$modal_despesa(dados){
var mes_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
var data_default = casa_financas.views.modais.dia_para_date(casa_financas.utils.dia_hoje(),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual));
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"descricao","descricao",861900814),"",new cljs.core.Keyword(null,"valor","valor",-957162173),"",new cljs.core.Keyword(null,"data_input","data_input",131000147),data_default,new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),casa_financas.utils.dia_hoje(),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),"pix",new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null),new cljs.core.Keyword(null,"divisao","divisao",1361721447),casa_financas.utils.divisao_padrao(),new cljs.core.Keyword(null,"pago","pago",27952415),false], null),(cljs.core.truth_(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(dados))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data_input","data_input",131000147),casa_financas.views.modais.dia_para_date(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(dados),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual))], null):null),dados], 0)));
return (function (){
var soma_ok_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.utils.soma_divisao(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),(100));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.modal_wrapper,(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"Editar Despesa":"Nova Despesa"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Descri\u00E7\u00E3o (ex: Mercado, Aluguel...)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13330_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__13330_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1 block"], null),"Valor (R$)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"decimal",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]*",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0,00",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13331_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor","valor",-957162173),p1__13331_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1 block"], null),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_data,new cljs.core.Keyword(null,"data_input","data_input",131000147).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"data_input","data_input",131000147),v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),(function (){var or__5142__auto__ = casa_financas.views.modais.date_para_dia(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.dia_hoje();
}
})()], 0));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),"Forma de pagamento"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"pix"))?"bg-blue-500 text-white border-blue-500":"text-gray-500 border-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),"pix");
})], null),"\uD83D\uDCB3 Pix/D\u00E9bito"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"credito"))?"bg-blue-500 text-white border-blue-500":"text-gray-500 border-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),"credito");
})], null),"\uD83D\uDCB3 Cr\u00E9dito"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-end justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),"Quem pagou?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_pagadores,new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (ps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),ps);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500"], null),"Pago"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"bg-green-400 border-green-400 text-white":"border-gray-200 text-gray-300"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.update,new cljs.core.Keyword(null,"pago","pago",27952415),cljs.core.not);
})], null),"\u2713"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),"Divis\u00E3o (%)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_divisao,new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (nova_div){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"divisao","divisao",1361721447),nova_div);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 pt-1"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-2.5 px-3 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-despesa","deletar-despesa",1441694847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
})], null),"Deletar"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"Cancelar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 px-4 rounded-xl font-semibold text-white transition-colors text-sm "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((soma_ok_QMARK_)?"bg-blue-500 active:bg-blue-600":"bg-gray-300 cursor-not-allowed"))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(soma_ok_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(soma_ok_QMARK_){
var mes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(form),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.gerar_id();
}
})(),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"valor","valor",-957162173),parseFloat(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))], null)], 0))], null));
} else {
return null;
}
})], null),"Salvar"], null)], null)], null)], null);
});
});
casa_financas.views.modais.modal_entrada = (function casa_financas$views$modais$modal_entrada(dados){
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),"andre",new cljs.core.Keyword(null,"valor","valor",-957162173),"",new cljs.core.Keyword(null,"data","data",-232669377),(function (){var d = (new Date());
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getFullYear())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((d.getMonth() + (1)) < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((d.getMonth() + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((d.getDate() < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getDate()));
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814),""], null),dados], 0)));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.modal_wrapper,(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"Editar Entrada":"Nova Entrada"),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),"Quem recebeu?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$modal_entrada_$_iter__13335(s__13336){
return (new cljs.core.LazySeq(null,(function (){
var s__13336__$1 = s__13336;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__13336__$1);
if(temp__5823__auto__){
var s__13336__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13336__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__13336__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__13338 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__13337 = (0);
while(true){
if((i__13337 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__13337);
cljs.core.chunk_append(b__13338,(function (){var selecionado = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),pid);
var cor = casa_financas.utils.pessoa_cor(pid);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 py-2 rounded-xl text-sm font-medium border-2 transition-colors",new cljs.core.Keyword(null,"style","style",-496642736),((selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#6B7280"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13337,selecionado,cor,pid,c__5626__auto__,size__5627__auto__,b__13338,s__13336__$2,temp__5823__auto__,form){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),pid);
});})(i__13337,selecionado,cor,pid,c__5626__auto__,size__5627__auto__,b__13338,s__13336__$2,temp__5823__auto__,form))
], null),casa_financas.utils.pessoa_nome(pid)], null);
})());

var G__13347 = (i__13337 + (1));
i__13337 = G__13347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13338),casa_financas$views$modais$modal_entrada_$_iter__13335(cljs.core.chunk_rest(s__13336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13338),null);
}
} else {
var pid = cljs.core.first(s__13336__$2);
return cljs.core.cons((function (){var selecionado = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),pid);
var cor = casa_financas.utils.pessoa_cor(pid);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 py-2 rounded-xl text-sm font-medium border-2 transition-colors",new cljs.core.Keyword(null,"style","style",-496642736),((selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#6B7280"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selecionado,cor,pid,s__13336__$2,temp__5823__auto__,form){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),pid);
});})(selecionado,cor,pid,s__13336__$2,temp__5823__auto__,form))
], null),casa_financas.utils.pessoa_nome(pid)], null);
})(),casa_financas$views$modais$modal_entrada_$_iter__13335(cljs.core.rest(s__13336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.pessoas_ids_sem_conjunta);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1 block"], null),"Valor (R$)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"decimal",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]*",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0,00",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13332_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor","valor",-957162173),p1__13332_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1 block"], null),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_data,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (p1__13333_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),p1__13333_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Descri\u00E7\u00E3o (ex: Sal\u00E1rio, Freelance...)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13334_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__13334_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 pt-1"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-2.5 px-3 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-entrada","deletar-entrada",-333068260),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
})], null),"Deletar"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"Cancelar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_primario,"Salvar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(form),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.gerar_id();
}
})(),new cljs.core.Keyword(null,"valor","valor",-957162173),parseFloat(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))], null)], 0))], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null)], null)], null)], null);
});
});
casa_financas.views.modais.modal_template = (function casa_financas$views$modais$modal_template(dados){
var mes_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"descricao","descricao",861900814),"",new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509),"",new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711),"pix",new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null),new cljs.core.Keyword(null,"divisao","divisao",1361721447),casa_financas.utils.divisao_padrao(),new cljs.core.Keyword(null,"data_input","data_input",131000147),casa_financas.views.modais.dia_para_date((1),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual)),new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274),(1),new cljs.core.Keyword(null,"ativo","ativo",-757128626),true], null),dados], 0)));
return (function (){
var soma_ok_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.utils.soma_divisao(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),(100));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.modal_wrapper,(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"Editar Template":"Novo Template"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Descri\u00E7\u00E3o (ex: Aluguel, Internet...)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13339_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__13339_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1 block"], null),"Valor (R$)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"decimal",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]*",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0,00",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13340_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509),p1__13340_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1 block"], null),"Dia previsto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_data,new cljs.core.Keyword(null,"data_input","data_input",131000147).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"data_input","data_input",131000147),v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274),(function (){var or__5142__auto__ = casa_financas.views.modais.date_para_dia(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})()], 0));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),"Forma de pagamento"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"pix"))?"bg-blue-500 text-white border-blue-500":"text-gray-500 border-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711),"pix");
})], null),"\uD83D\uDCB3 Pix/D\u00E9bito"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"credito"))?"bg-blue-500 text-white border-blue-500":"text-gray-500 border-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711),"credito");
})], null),"\uD83D\uDCB3 Cr\u00E9dito"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-end justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),"Quem paga?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_pagadores,new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (ps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695),ps);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500"], null),"Ativo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"bg-green-400 border-green-400 text-white":"border-gray-200 text-gray-300"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.update,new cljs.core.Keyword(null,"ativo","ativo",-757128626),cljs.core.not);
})], null),"\u2713"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),"Divis\u00E3o (%)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_divisao,new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (nova_div){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"divisao","divisao",1361721447),nova_div);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 pt-1"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-2.5 px-3 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-template","deletar-template",-1473171528),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
})], null),"Deletar"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"Cancelar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 px-4 rounded-xl font-semibold text-white transition-colors text-sm "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((soma_ok_QMARK_)?"bg-blue-500 active:bg-blue-600":"bg-gray-300 cursor-not-allowed"))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(soma_ok_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(soma_ok_QMARK_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-template","salvar-template",-861853926),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(form),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.gerar_id();
}
})(),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509),parseFloat(new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))], null)], 0))], null));
} else {
return null;
}
})], null),"Salvar"], null)], null)], null)], null);
});
});
casa_financas.views.modais.modais = (function casa_financas$views$modais$modais(){
var modal = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null)));
if(cljs.core.truth_(modal)){
var G__13341 = new cljs.core.Keyword(null,"tipo","tipo",837631118).cljs$core$IFn$_invoke$arity$1(modal);
var G__13341__$1 = (((G__13341 instanceof cljs.core.Keyword))?G__13341.fqn:null);
switch (G__13341__$1) {
case "nova-acao":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_nova_acao], null);

break;
case "nova-despesa":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_despesa,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "editar-despesa":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_despesa,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "nova-entrada":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_entrada,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "editar-entrada":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_entrada,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "novo-template":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_template,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "editar-template":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_template,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
default:
return null;

}
} else {
return null;
}
});

//# sourceMappingURL=casa_financas.views.modais.js.map
