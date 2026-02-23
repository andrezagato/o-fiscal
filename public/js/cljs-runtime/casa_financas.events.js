goog.provide('casa_financas.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.db.default_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708),(function (p__13165,_){
var map__13166 = p__13165;
var map__13166__$1 = cljs.core.__destructure_map(map__13166);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13166__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("supabase","sessao","supabase/sessao",441049988),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-usuario","set-usuario",1733516621),(function (db,p__13167){
var vec__13168 = p__13167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(0),null);
var usuario = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),usuario);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__13171,p__13172){
var map__13173 = p__13171;
var map__13173__$1 = cljs.core.__destructure_map(map__13173);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13173__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13174 = p__13172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13174,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13174,(1),null);
var senha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13174,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"erro","erro",-650947642),null], 0)),new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"senha","senha",1788313207),senha], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),(function (p__13177,_){
var map__13178 = p__13177;
var map__13178__$1 = cljs.core.__destructure_map(map__13178);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13178__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","logout","supabase/logout",-929994715),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),(function (p__13179,p__13180){
var map__13181 = p__13179;
var map__13181__$1 = cljs.core.__destructure_map(map__13181);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13181__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13182 = p__13180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13182,(0),null);
var usuario = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13182,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),usuario,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555),(function (p__13185,_){
var map__13186 = p__13185;
var map__13186__$1 = cljs.core.__destructure_map(map__13186);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13186__$1,new cljs.core.Keyword(null,"db","db",993250759));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-templates","supabase/buscar-templates",253613684),null,new cljs.core.Keyword("supabase","buscar-historico","supabase/buscar-historico",-228455530),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),(function (db,p__13187){
var vec__13188 = p__13187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(0),null);
var aba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669),aba);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-anterior","mes-anterior",679127544),(function (p__13191,_){
var map__13192 = p__13191;
var map__13192__$1 = cljs.core.__destructure_map(map__13192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13192__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__13193 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__13193__$1 = cljs.core.__destructure_map(map__13193);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13193__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13193__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(12):(mes - (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(ano - (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-proximo","mes-proximo",-618952688),(function (p__13194,_){
var map__13195 = p__13194;
var map__13195__$1 = cljs.core.__destructure_map(map__13195);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13195__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__13196 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__13196__$1 = cljs.core.__destructure_map(map__13196);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13196__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13196__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(1):(mes + (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(ano + (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),(function (db,p__13197){
var vec__13198 = p__13197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13198,(0),null);
var tipo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13198,(1),null);
var dados = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13198,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tipo","tipo",837631118),tipo,new cljs.core.Keyword(null,"dados","dados",1114219967),dados], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),(function (db,p__13201){
var vec__13202 = p__13201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13202,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13202,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-entradas","set-entradas",1331158514),(function (db,p__13205){
var vec__13206 = p__13205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13206,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13206,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),entradas);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-templates","set-templates",-528281172),(function (db,p__13209){
var vec__13210 = p__13209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13210,(0),null);
var templates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13210,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),templates);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-historico","set-historico",-2033938345),(function (db,p__13213){
var vec__13214 = p__13213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(1),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754),entradas], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__13217){
var vec__13218 = p__13217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13218,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),(function (db,p__13221){
var vec__13222 = p__13221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13222,(0),null);
var erro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13222,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"erro","erro",-650947642),erro);
}));
casa_financas.events.gerar_entradas_bolso = (function casa_financas$events$gerar_entradas_bolso(despesa,mes){
var pagadores = new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(despesa);
var eh_bolso_QMARK_ = ((cljs.core.seq(pagadores)) && (cljs.core.not(cljs.core.some((function (p1__13225_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13225_SHARP_,"conjunta");
}),pagadores))));
if(eh_bolso_QMARK_){
var valor_por_pagador = (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(despesa) / cljs.core.count(pagadores));
var data_str = (function (){var m = new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes);
var a = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes);
var d = new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((m < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((d < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (pid){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),pid,new cljs.core.Keyword(null,"valor","valor",-957162173),valor_por_pagador,new cljs.core.Keyword(null,"data","data",-232669377),data_str,new cljs.core.Keyword(null,"descricao","descricao",861900814),(""+"Pgto: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(despesa))),new cljs.core.Keyword(null,"auto","auto",-566279492),true,new cljs.core.Keyword(null,"despesa_ref","despesa_ref",-602134006),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa)], null);
}),pagadores);
} else {
return null;
}
});
casa_financas.events.remover_entradas_auto = (function casa_financas$events$remover_entradas_auto(db,despesa_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"despesa_ref","despesa_ref",-602134006).cljs$core$IFn$_invoke$arity$1(p1__13226_SHARP_),despesa_id);
}),es));
}));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"marcar-pago","marcar-pago",446617930),(function (p__13228,p__13229){
var map__13230 = p__13228;
var map__13230__$1 = cljs.core.__destructure_map(map__13230);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13230__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13231 = p__13229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,(1),null);
var despesa = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13227_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13227_SHARP_),id);
}),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db)));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var entradas_auto = (cljs.core.truth_(despesa)?casa_financas.events.gerar_entradas_bolso(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(despesa,new cljs.core.Keyword(null,"pago","pago",27952415),true),mes):null);
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(d,new cljs.core.Keyword(null,"pago","pago",27952415),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data_pagamento","data_pagamento",987849358),(new Date()).toISOString()], 0));
} else {
return d;
}
}),ds);
}));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","marcar-pago","supabase/marcar-pago",1985144366),id], null),((cljs.core.seq(entradas_auto))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),e], null);
}),entradas_auto)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desmarcar-pago","desmarcar-pago",-5576968),(function (p__13234,p__13235){
var map__13236 = p__13234;
var map__13236__$1 = cljs.core.__destructure_map(map__13236);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13236__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13237 = p__13235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13237,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13237,(1),null);
var novo_db = casa_financas.events.remover_entradas_auto(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(d,new cljs.core.Keyword(null,"pago","pago",27952415),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data_pagamento","data_pagamento",987849358),null], 0));
} else {
return d;
}
}),ds);
})),id);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","desmarcar-pago","supabase/desmarcar-pago",598668748),id,new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),(function (p__13241,p__13242){
var map__13243 = p__13241;
var map__13243__$1 = cljs.core.__destructure_map(map__13243);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13243__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13244 = p__13242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13244,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13244,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__13240_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13240_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa));
}),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
if(cljs.core.truth_(existe_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa))){
return despesa;
} else {
return d;
}
}),ds);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ds),despesa);
}
}));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var entradas_auto = (cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa))?casa_financas.events.gerar_entradas_bolso(despesa,mes):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(novo_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null),new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),despesa], null),((cljs.core.seq(entradas_auto))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),e], null);
}),entradas_auto)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-despesa","deletar-despesa",1441694847),(function (p__13248,p__13249){
var map__13250 = p__13248;
var map__13250__$1 = cljs.core.__destructure_map(map__13250);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13250__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13251 = p__13249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13251,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13251,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.events.remover_entradas_auto(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13247_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13247_SHARP_),id);
}),ds));
})),id),new cljs.core.Keyword("supabase","deletar-despesa","supabase/deletar-despesa",1910682843),id,new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),(function (p__13255,p__13256){
var map__13257 = p__13255;
var map__13257__$1 = cljs.core.__destructure_map(map__13257);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13257__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13258 = p__13256;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13258,(0),null);
var entrada = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13258,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__13254_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13254_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entrada));
}),new cljs.core.Keyword(null,"entradas","entradas",-1856269220).cljs$core$IFn$_invoke$arity$1(db));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
if(cljs.core.truth_(existe_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entrada))){
return entrada;
} else {
return e;
}
}),es);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(es),entrada);
}
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(novo_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null),new cljs.core.Keyword("supabase","salvar-entrada","supabase/salvar-entrada",553645972),entrada], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-entrada","deletar-entrada",-333068260),(function (p__13262,p__13263){
var map__13264 = p__13262;
var map__13264__$1 = cljs.core.__destructure_map(map__13264);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13264__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13265 = p__13263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13265,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13265,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13261_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13261_SHARP_),id);
}),es));
})),new cljs.core.Keyword("supabase","deletar-entrada","supabase/deletar-entrada",-803604216),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-template","salvar-template",-861853926),(function (p__13269,p__13270){
var map__13271 = p__13269;
var map__13271__$1 = cljs.core.__destructure_map(map__13271);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13271__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13272 = p__13270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13272,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13272,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__13268_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13268_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
}),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(db));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
if(cljs.core.truth_(existe_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template))){
return template;
} else {
return t;
}
}),ts);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ts),template);
}
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(novo_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null),new cljs.core.Keyword("supabase","salvar-template","supabase/salvar-template",1353044998),template], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-template","deletar-template",-1473171528),(function (p__13276,p__13277){
var map__13278 = p__13276;
var map__13278__$1 = cljs.core.__destructure_map(map__13278);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13278__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13279 = p__13277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13279,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13279,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13275_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13275_SHARP_),id);
}),ts));
})),new cljs.core.Keyword("supabase","deletar-template","supabase/deletar-template",1262289036),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-template","toggle-template",1422016592),(function (p__13283,p__13284){
var map__13285 = p__13283;
var map__13285__$1 = cljs.core.__destructure_map(map__13285);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13285__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13286 = p__13284;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13286,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13286,(1),null);
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"ativo","ativo",-757128626),cljs.core.not);
} else {
return t;
}
}),ts);
}));
var template = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13282_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13282_SHARP_),id);
}),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(novo_db)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056),(function (p__13289,_){
var map__13290 = p__13289;
var map__13290__$1 = cljs.core.__destructure_map(map__13290);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13290__$1,new cljs.core.Keyword(null,"db","db",993250759));
var templates_ativos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(db));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var ids_existentes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db)));
var novas_despesas = cljs.core.vec((function (){var iter__5628__auto__ = (function casa_financas$events$iter__13291(s__13292){
return (new cljs.core.LazySeq(null,(function (){
var s__13292__$1 = s__13292;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__13292__$1);
if(temp__5823__auto__){
var s__13292__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13292__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__13292__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__13294 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__13293 = (0);
while(true){
if((i__13293 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__13293);
if((!(cljs.core.contains_QMARK_(ids_existentes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t))))){
cljs.core.chunk_append(b__13294,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(t),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null);
}
})(),new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(t),false]));

var G__13311 = (i__13293 + (1));
i__13293 = G__13311;
continue;
} else {
var G__13312 = (i__13293 + (1));
i__13293 = G__13312;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13294),casa_financas$events$iter__13291(cljs.core.chunk_rest(s__13292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13294),null);
}
} else {
var t = cljs.core.first(s__13292__$2);
if((!(cljs.core.contains_QMARK_(ids_existentes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t))))){
return cljs.core.cons(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(t),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null);
}
})(),new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(t),false]),casa_financas$events$iter__13291(cljs.core.rest(s__13292__$2)));
} else {
var G__13313 = cljs.core.rest(s__13292__$2);
s__13292__$1 = G__13313;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(templates_ativos);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),cljs.core.into,novas_despesas),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-despesa-silencioso","salvar-despesa-silencioso",410347697),d], null);
}),novas_despesas)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa-silencioso","salvar-despesa-silencioso",410347697),(function (_,p__13295){
var vec__13296 = p__13295;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13296,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13296,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),despesa], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","sessao","supabase/sessao",441049988),(function (_){
return casa_financas.supabase.sessao_atual((function (res){
var temp__5821__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"user","user",1532431356)], null));
if(cljs.core.truth_(temp__5821__auto__)){
var usuario = temp__5821__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),usuario], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661)], null));
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),(function (p__13299){
var map__13300 = p__13299;
var map__13300__$1 = cljs.core.__destructure_map(map__13300);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var senha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,new cljs.core.Keyword(null,"senha","senha",1788313207));
return casa_financas.supabase.login_BANG_(email,senha,(function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Email ou senha incorretos"], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user","user",1532431356)], null))], null));
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","logout","supabase/logout",-929994715),(function (_){
return casa_financas.supabase.logout_BANG_((function (___$1){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661)], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),(function (p__13301){
var map__13302 = p__13301;
var map__13302__$1 = cljs.core.__destructure_map(map__13302);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_despesas_BANG_(ano,mes,(function (despesas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),despesas], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),(function (p__13303){
var map__13304 = p__13303;
var map__13304__$1 = cljs.core.__destructure_map(map__13304);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_entradas_BANG_(ano,mes,(function (entradas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-entradas","set-entradas",1331158514),entradas], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-templates","supabase/buscar-templates",253613684),(function (_){
return casa_financas.supabase.buscar_templates_BANG_((function (templates){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-templates","set-templates",-528281172),templates], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),(function (despesa){
return casa_financas.supabase.salvar_despesa_BANG_(despesa,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar despesa"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","marcar-pago","supabase/marcar-pago",1985144366),(function (id){
return casa_financas.supabase.marcar_pago_BANG_(id,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao marcar como pago"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","desmarcar-pago","supabase/desmarcar-pago",598668748),(function (id){
return casa_financas.supabase.desmarcar_pago_BANG_(id,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao desmarcar pagamento"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-entrada","supabase/salvar-entrada",553645972),(function (entrada){
return casa_financas.supabase.salvar_entrada_BANG_(entrada,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar entrada"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-entrada","supabase/deletar-entrada",-803604216),(function (id){
return casa_financas.supabase.deletar_BANG_("entradas",id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),(function (despesa_id){
return casa_financas.supabase.deletar_entradas_auto_BANG_(despesa_id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-template","supabase/salvar-template",1353044998),(function (template){
return casa_financas.supabase.salvar_template_BANG_(template,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar template"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),(function (p__13305){
var map__13306 = p__13305;
var map__13306__$1 = cljs.core.__destructure_map(map__13306);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ativo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13306__$1,new cljs.core.Keyword(null,"ativo","ativo",-757128626));
return casa_financas.supabase.toggle_template_BANG_(id,ativo,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao atualizar template"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-despesa","supabase/deletar-despesa",1910682843),(function (id){
return casa_financas.supabase.deletar_BANG_("despesa_mensal",id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-template","supabase/deletar-template",1262289036),(function (id){
return casa_financas.supabase.deletar_BANG_("template_despesa",id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-historico","supabase/buscar-historico",-228455530),(function (_){
return casa_financas.supabase.buscar_todas_despesas_BANG_((function (despesas){
return casa_financas.supabase.buscar_todas_entradas_BANG_((function (entradas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-historico","set-historico",-2033938345),despesas,entradas], null));
}));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (events){
var seq__13307 = cljs.core.seq(events);
var chunk__13308 = null;
var count__13309 = (0);
var i__13310 = (0);
while(true){
if((i__13310 < count__13309)){
var e = chunk__13308.cljs$core$IIndexed$_nth$arity$2(null,i__13310);
re_frame.core.dispatch(e);


var G__13314 = seq__13307;
var G__13315 = chunk__13308;
var G__13316 = count__13309;
var G__13317 = (i__13310 + (1));
seq__13307 = G__13314;
chunk__13308 = G__13315;
count__13309 = G__13316;
i__13310 = G__13317;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13307);
if(temp__5823__auto__){
var seq__13307__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13307__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13307__$1);
var G__13318 = cljs.core.chunk_rest(seq__13307__$1);
var G__13319 = c__5673__auto__;
var G__13320 = cljs.core.count(c__5673__auto__);
var G__13321 = (0);
seq__13307 = G__13318;
chunk__13308 = G__13319;
count__13309 = G__13320;
i__13310 = G__13321;
continue;
} else {
var e = cljs.core.first(seq__13307__$1);
re_frame.core.dispatch(e);


var G__13322 = cljs.core.next(seq__13307__$1);
var G__13323 = null;
var G__13324 = (0);
var G__13325 = (0);
seq__13307 = G__13322;
chunk__13308 = G__13323;
count__13309 = G__13324;
i__13310 = G__13325;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=casa_financas.events.js.map
