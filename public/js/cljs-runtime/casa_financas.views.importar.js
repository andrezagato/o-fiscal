goog.provide('casa_financas.views.importar');
casa_financas.views.importar.parse_valor = (function casa_financas$views$importar$parse_valor(s){
if(cljs.core.truth_((function (){var and__5140__auto__ = s;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"");
} else {
return and__5140__auto__;
}
})())){
return parseFloat(clojure.string.trim(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,"R$ ",""),".",""),",",".")));
} else {
return null;
}
});
casa_financas.views.importar.parse_data = (function casa_financas$views$importar$parse_data(s){
if(cljs.core.truth_((function (){var and__5140__auto__ = s;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"");
} else {
return and__5140__auto__;
}
})())){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(s),/\//);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(parts))){
var dia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(0));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(1));
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(2));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ano)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mes)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dia));
} else {
return null;
}
} else {
return null;
}
});
casa_financas.views.importar.parse_mes_ano = (function casa_financas$views$importar$parse_mes_ano(data_str){
if(cljs.core.truth_(data_str)){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(data_str,/-/);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ano","ano",109602792),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(0)) | 0),new cljs.core.Keyword(null,"mes","mes",-890288111),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(1)) | 0),new cljs.core.Keyword(null,"dia","dia",-134509912),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(2)) | 0)], null);
} else {
return null;
}
});
casa_financas.views.importar.parse_pagador = (function casa_financas$views$importar$parse_pagador(s){
var G__17217 = clojure.string.trim(clojure.string.lower_case((function (){var or__5142__auto__ = s;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
switch (G__17217) {
case "conjunta":
return "conjunta";

break;
case "casa":
return "conjunta";

break;
case "andre":
return "andre";

break;
case "bia":
return "bianca";

break;
case "bianca":
return "bianca";

break;
case "fernanda":
return "fernanda";

break;
case "bruna":
return "bruna";

break;
default:
return "conjunta";

}
});
casa_financas.views.importar.parse_usuario = (function casa_financas$views$importar$parse_usuario(s){
var G__17229 = clojure.string.trim(clojure.string.lower_case((function (){var or__5142__auto__ = s;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
switch (G__17229) {
case "andre":
return "andre";

break;
case "bia":
return "bianca";

break;
case "bianca":
return "bianca";

break;
case "fernanda":
return "fernanda";

break;
case "bruna":
return "bruna";

break;
default:
return "andre";

}
});
casa_financas.views.importar.parse_metodo = (function casa_financas$views$importar$parse_metodo(s){
var s__$1 = clojure.string.lower_case(clojure.string.trim((function (){var or__5142__auto__ = s;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
if(clojure.string.includes_QMARK_(s__$1,"cred")){
return "credito";
} else {
return "pix";
}
});
casa_financas.views.importar.parse_divisao = (function casa_financas$views$importar$parse_divisao(s){
var s__$1 = clojure.string.trim((function (){var or__5142__auto__ = s;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "25/25/25/25";
}
})());
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/\//);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(parts))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(0)) | 0),new cljs.core.Keyword(null,"bianca","bianca",820619526),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(1)) | 0),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(2)) | 0),new cljs.core.Keyword(null,"bruna","bruna",1508842390),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,(3)) | 0)], null);
} else {
return casa_financas.utils.divisao_padrao();
}
});
casa_financas.views.importar.parse_csv = (function casa_financas$views$importar$parse_csv(texto){
var linhas = clojure.string.split_lines(clojure.string.trim(texto));
var linhas__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17252_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__17252_SHARP_,"");
}),linhas);
return cljs.core.rest(linhas__$1);
});
casa_financas.views.importar.parse_linha_despesa = (function casa_financas$views$importar$parse_linha_despesa(linha){
var cols = clojure.string.split.cljs$core$IFn$_invoke$arity$2(linha,/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);
var cols__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17261_SHARP_){
return clojure.string.replace(p1__17261_SHARP_,"\"","");
}),cols);
var data_str = casa_financas.views.importar.parse_data(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(0)));
var data_map = casa_financas.views.importar.parse_mes_ano(data_str);
if(cljs.core.truth_((function (){var and__5140__auto__ = data_str;
if(cljs.core.truth_(and__5140__auto__)){
return data_map;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],[casa_financas.views.importar.parse_valor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(2))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.importar.parse_pagador(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(4)))], null),casa_financas.views.importar.parse_divisao(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(5))),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(data_map),new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(data_map),clojure.string.trim(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cols__$1,(1),"")),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(data_map),casa_financas.utils.gerar_id(),casa_financas.views.importar.parse_metodo(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(3))),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("sim",clojure.string.lower_case(clojure.string.trim(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cols__$1,(6),""))))]);
} else {
return null;
}
});
casa_financas.views.importar.parse_linha_entrada = (function casa_financas$views$importar$parse_linha_entrada(linha){
var cols = clojure.string.split.cljs$core$IFn$_invoke$arity$2(linha,/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);
var cols__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17275_SHARP_){
return clojure.string.replace(p1__17275_SHARP_,"\"","");
}),cols);
var data_str = casa_financas.views.importar.parse_data(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(0)));
if(cljs.core.truth_(data_str)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),casa_financas.utils.gerar_id(),new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),casa_financas.views.importar.parse_usuario(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(1))),new cljs.core.Keyword(null,"valor","valor",-957162173),casa_financas.views.importar.parse_valor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols__$1,(2))),new cljs.core.Keyword(null,"data","data",-232669377),data_str,new cljs.core.Keyword(null,"descricao","descricao",861900814),""], null);
} else {
return null;
}
});
casa_financas.views.importar.tabela_preview_despesas = (function casa_financas$views$importar$tabela_preview_despesas(despesas){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-x-auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full text-xs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-gray-200"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-left py-1.5 text-gray-500 font-medium"], null),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-left py-1.5 text-gray-500 font-medium"], null),"Descri\u00E7\u00E3o"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right py-1.5 text-gray-500 font-medium"], null),"Valor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center py-1.5 text-gray-500 font-medium"], null),"Pago"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5628__auto__ = (function casa_financas$views$importar$tabela_preview_despesas_$_iter__17283(s__17284){
return (new cljs.core.LazySeq(null,(function (){
var s__17284__$1 = s__17284;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17284__$1);
if(temp__5823__auto__){
var s__17284__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17284__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__17284__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__17286 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__17285 = (0);
while(true){
if((i__17285 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__17285);
cljs.core.chunk_append(b__17286,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-gray-50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-gray-600"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(d))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-gray-800 max-w-24 truncate"], null),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-right text-gray-800"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-center"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(d))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-green-500"], null),"\u2713"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-300"], null),"\u2013"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)));

var G__17350 = (i__17285 + (1));
i__17285 = G__17350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17286),casa_financas$views$importar$tabela_preview_despesas_$_iter__17283(cljs.core.chunk_rest(s__17284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17286),null);
}
} else {
var d = cljs.core.first(s__17284__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-gray-50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-gray-600"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(d))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-gray-800 max-w-24 truncate"], null),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-right text-gray-800"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-center"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(d))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-green-500"], null),"\u2713"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-300"], null),"\u2013"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)),casa_financas$views$importar$tabela_preview_despesas_$_iter__17283(cljs.core.rest(s__17284__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(despesas);
})()], null)], null)], null);
});
casa_financas.views.importar.tabela_preview_entradas = (function casa_financas$views$importar$tabela_preview_entradas(entradas){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-x-auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full text-xs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-gray-200"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-left py-1.5 text-gray-500 font-medium"], null),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-left py-1.5 text-gray-500 font-medium"], null),"Pessoa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right py-1.5 text-gray-500 font-medium"], null),"Valor"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5628__auto__ = (function casa_financas$views$importar$tabela_preview_entradas_$_iter__17299(s__17300){
return (new cljs.core.LazySeq(null,(function (){
var s__17300__$1 = s__17300;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17300__$1);
if(temp__5823__auto__){
var s__17300__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17300__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__17300__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__17302 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__17301 = (0);
while(true){
if((i__17301 < size__5627__auto__)){
var e = cljs.core._nth(c__5626__auto__,i__17301);
cljs.core.chunk_append(b__17302,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-gray-50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-gray-600"], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.chip_pessoa,new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(e)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-right text-green-600 font-medium"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(e))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)], null)));

var G__17357 = (i__17301 + (1));
i__17301 = G__17357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17302),casa_financas$views$importar$tabela_preview_entradas_$_iter__17299(cljs.core.chunk_rest(s__17300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17302),null);
}
} else {
var e = cljs.core.first(s__17300__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-gray-50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-gray-600"], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.chip_pessoa,new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(e)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1.5 text-right text-green-600 font-medium"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(e))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)], null)),casa_financas$views$importar$tabela_preview_entradas_$_iter__17299(cljs.core.rest(s__17300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(entradas);
})()], null)], null)], null);
});
casa_financas.views.importar.importar = (function casa_financas$views$importar$importar(){
var aba = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"despesas","despesas",786163068));
var csv_texto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var preview = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var importando = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var importado = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col pb-24"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.seletor_mes], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-3 space-y-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-800 mb-1"], null),"Importar do CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500"], null),"Cole o conte\u00FAdo do CSV exportado do Google Sheets. Inclua o cabe\u00E7alho."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 p-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aba),new cljs.core.Keyword(null,"despesas","despesas",786163068)))?"bg-blue-500 text-white":"text-gray-500"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(aba,new cljs.core.Keyword(null,"despesas","despesas",786163068));

cljs.core.reset_BANG_(preview,null);

cljs.core.reset_BANG_(csv_texto,"");

return cljs.core.reset_BANG_(importado,false);
})], null),"\uD83D\uDCB8 Despesas"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aba),new cljs.core.Keyword(null,"entradas","entradas",-1856269220)))?"bg-blue-500 text-white":"text-gray-500"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(aba,new cljs.core.Keyword(null,"entradas","entradas",-1856269220));

cljs.core.reset_BANG_(preview,null);

cljs.core.reset_BANG_(csv_texto,"");

return cljs.core.reset_BANG_(importado,false);
})], null),"\uD83D\uDCB0 Entradas"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white rounded-2xl border border-gray-100 shadow-sm p-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-500 mb-1.5 block"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aba),new cljs.core.Keyword(null,"despesas","despesas",786163068)))?"Cole o CSV de Despesas aqui:":"Cole o CSV de Entradas aqui:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-32 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aba),new cljs.core.Keyword(null,"despesas","despesas",786163068)))?"Gastos,Descri\u00E7\u00E3o,Valor,M\u00E9todo,Pago Por,Forma de Divis\u00E3o,Quitado\n23/02/2026,Mercado,\"R$ 150,00\",Cr\u00E9dito,Conjunta,25/25/25/25,":"Entradas,Usu\u00E1rio,Valor\n05/02/2026,Andre,\"R$ 3.000,00\""),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(csv_texto),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17315_SHARP_){
cljs.core.reset_BANG_(csv_texto,p1__17315_SHARP_.target.value);

cljs.core.reset_BANG_(preview,null);

return cljs.core.reset_BANG_(importado,false);
})], null)], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(csv_texto),""))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"\uD83D\uDC41 Visualizar Preview",(function (){
var linhas = casa_financas.views.importar.parse_csv(cljs.core.deref(csv_texto));
var parsed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aba),new cljs.core.Keyword(null,"despesas","despesas",786163068)))?cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(casa_financas.views.importar.parse_linha_despesa,linhas)):cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(casa_financas.views.importar.parse_linha_entrada,linhas)));
return cljs.core.reset_BANG_(preview,parsed);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),""], null)], null):null),(cljs.core.truth_(cljs.core.deref(preview))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white rounded-2xl border border-gray-100 shadow-sm p-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between items-center mb-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-600"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(preview)))+" registros encontrados")], null),(cljs.core.truth_(cljs.core.deref(importado))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-green-600 font-medium"], null),"\u2713 Importado!"], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aba),new cljs.core.Keyword(null,"despesas","despesas",786163068)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.importar.tabela_preview_despesas,cljs.core.deref(preview)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.importar.tabela_preview_entradas,cljs.core.deref(preview)], null)),((((cljs.core.seq(cljs.core.deref(preview))) && (cljs.core.not(cljs.core.deref(importado)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_primario,(cljs.core.truth_(cljs.core.deref(importando))?"Importando...":(""+"\u2B06 Importar "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(preview)))+" registros")),(function (){var tipo = cljs.core.deref(aba);
return (function (){
if(cljs.core.not(cljs.core.deref(importando))){
cljs.core.reset_BANG_(importando,true);

var seq__17325_17358 = cljs.core.seq(cljs.core.deref(preview));
var chunk__17326_17359 = null;
var count__17327_17360 = (0);
var i__17328_17361 = (0);
while(true){
if((i__17328_17361 < count__17327_17360)){
var item_17362 = chunk__17326_17359.cljs$core$IIndexed$_nth$arity$2(null,i__17328_17361);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo,new cljs.core.Keyword(null,"despesas","despesas",786163068))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),item_17362], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),item_17362], null));
}


var G__17363 = seq__17325_17358;
var G__17364 = chunk__17326_17359;
var G__17365 = count__17327_17360;
var G__17366 = (i__17328_17361 + (1));
seq__17325_17358 = G__17363;
chunk__17326_17359 = G__17364;
count__17327_17360 = G__17365;
i__17328_17361 = G__17366;
continue;
} else {
var temp__5823__auto___17367 = cljs.core.seq(seq__17325_17358);
if(temp__5823__auto___17367){
var seq__17325_17368__$1 = temp__5823__auto___17367;
if(cljs.core.chunked_seq_QMARK_(seq__17325_17368__$1)){
var c__5673__auto___17369 = cljs.core.chunk_first(seq__17325_17368__$1);
var G__17370 = cljs.core.chunk_rest(seq__17325_17368__$1);
var G__17371 = c__5673__auto___17369;
var G__17372 = cljs.core.count(c__5673__auto___17369);
var G__17373 = (0);
seq__17325_17358 = G__17370;
chunk__17326_17359 = G__17371;
count__17327_17360 = G__17372;
i__17328_17361 = G__17373;
continue;
} else {
var item_17374 = cljs.core.first(seq__17325_17368__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tipo,new cljs.core.Keyword(null,"despesas","despesas",786163068))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),item_17374], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),item_17374], null));
}


var G__17375 = cljs.core.next(seq__17325_17368__$1);
var G__17376 = null;
var G__17377 = (0);
var G__17378 = (0);
seq__17325_17358 = G__17375;
chunk__17326_17359 = G__17376;
count__17327_17360 = G__17377;
i__17328_17361 = G__17378;
continue;
}
} else {
}
}
break;
}

return setTimeout((function (){
cljs.core.reset_BANG_(importando,false);

cljs.core.reset_BANG_(importado,true);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null));
}),(2000));
} else {
return null;
}
});
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(importando)], null)], null)], null):null)], null):null)], null)], null);
});
});

//# sourceMappingURL=casa_financas.views.importar.js.map
