goog.provide('casa_financas.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.db.default_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708),(function (p__18374,_){
var map__18375 = p__18374;
var map__18375__$1 = cljs.core.__destructure_map(map__18375);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18375__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("supabase","sessao","supabase/sessao",441049988),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__18376,p__18377){
var map__18378 = p__18376;
var map__18378__$1 = cljs.core.__destructure_map(map__18378);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18378__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18379 = p__18377;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(1),null);
var senha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"erro","erro",-650947642),null], 0)),new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"senha","senha",1788313207),senha], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),(function (p__18382,_){
var map__18383 = p__18382;
var map__18383__$1 = cljs.core.__destructure_map(map__18383);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18383__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","logout","supabase/logout",-929994715),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),(function (p__18384,p__18385){
var map__18386 = p__18384;
var map__18386__$1 = cljs.core.__destructure_map(map__18386);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18386__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18387 = p__18385;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18387,(0),null);
var usuario = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18387,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),usuario,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555),(function (p__18390,_){
var map__18391 = p__18390;
var map__18391__$1 = cljs.core.__destructure_map(map__18391);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18391__$1,new cljs.core.Keyword(null,"db","db",993250759));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-templates","supabase/buscar-templates",253613684),null,new cljs.core.Keyword("supabase","buscar-historico","supabase/buscar-historico",-228455530),null,new cljs.core.Keyword("supabase","buscar-configuracoes","supabase/buscar-configuracoes",-33208108),null,new cljs.core.Keyword("supabase","buscar-categorias","supabase/buscar-categorias",1265109901),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),(function (db,p__18392){
var vec__18393 = p__18392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18393,(0),null);
var aba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18393,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669),aba);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-anterior","mes-anterior",679127544),(function (p__18396,_){
var map__18397 = p__18396;
var map__18397__$1 = cljs.core.__destructure_map(map__18397);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__18398 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__18398__$1 = cljs.core.__destructure_map(map__18398);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(12):(mes - (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(ano - (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-proximo","mes-proximo",-618952688),(function (p__18399,_){
var map__18400 = p__18399;
var map__18400__$1 = cljs.core.__destructure_map(map__18400);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__18401 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__18401__$1 = cljs.core.__destructure_map(map__18401);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(1):(mes + (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(ano + (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),(function (db,p__18402){
var vec__18403 = p__18402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18403,(0),null);
var tipo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18403,(1),null);
var dados = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18403,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tipo","tipo",837631118),tipo,new cljs.core.Keyword(null,"dados","dados",1114219967),dados], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),(function (db,p__18406){
var vec__18407 = p__18406;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18407,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18407,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-entradas","set-entradas",1331158514),(function (db,p__18410){
var vec__18411 = p__18410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18411,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18411,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),entradas);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-templates","set-templates",-528281172),(function (db,p__18414){
var vec__18415 = p__18414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18415,(0),null);
var templates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18415,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),templates);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-historico","set-historico",-2033938345),(function (db,p__18418){
var vec__18419 = p__18418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(1),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754),entradas], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),(function (db,p__18422){
var vec__18423 = p__18422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18423,(0),null);
var erro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18423,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"erro","erro",-650947642),erro);
}));
casa_financas.events.gerar_entradas_bolso = (function casa_financas$events$gerar_entradas_bolso(despesa,mes){
var pagadores = new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(despesa);
var eh_bolso_QMARK_ = ((cljs.core.seq(pagadores)) && (cljs.core.not(cljs.core.some((function (p1__18426_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18426_SHARP_,"conjunta");
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18427_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"despesa_ref","despesa_ref",-602134006).cljs$core$IFn$_invoke$arity$1(p1__18427_SHARP_),despesa_id);
}),es));
}));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"marcar-pago","marcar-pago",446617930),(function (p__18429,p__18430){
var map__18431 = p__18429;
var map__18431__$1 = cljs.core.__destructure_map(map__18431);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18431__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18432 = p__18430;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18432,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18432,(1),null);
var despesa = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18428_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18428_SHARP_),id);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desmarcar-pago","desmarcar-pago",-5576968),(function (p__18435,p__18436){
var map__18437 = p__18435;
var map__18437__$1 = cljs.core.__destructure_map(map__18437);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18438 = p__18436;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),(function (p__18442,p__18443){
var map__18444 = p__18442;
var map__18444__$1 = cljs.core.__destructure_map(map__18444);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18444__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18445 = p__18443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__18441_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18441_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-despesa","deletar-despesa",1441694847),(function (p__18449,p__18450){
var map__18451 = p__18449;
var map__18451__$1 = cljs.core.__destructure_map(map__18451);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18452 = p__18450;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18452,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18452,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.events.remover_entradas_auto(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18448_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18448_SHARP_),id);
}),ds));
})),id),new cljs.core.Keyword("supabase","deletar-despesa","supabase/deletar-despesa",1910682843),id,new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),(function (p__18456,p__18457){
var map__18458 = p__18456;
var map__18458__$1 = cljs.core.__destructure_map(map__18458);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18458__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18459 = p__18457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(0),null);
var entrada = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__18455_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18455_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entrada));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-entrada","deletar-entrada",-333068260),(function (p__18463,p__18464){
var map__18465 = p__18463;
var map__18465__$1 = cljs.core.__destructure_map(map__18465);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18466 = p__18464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18466,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18466,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18462_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18462_SHARP_),id);
}),es));
})),new cljs.core.Keyword("supabase","deletar-entrada","supabase/deletar-entrada",-803604216),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-template","salvar-template",-861853926),(function (p__18470,p__18471){
var map__18472 = p__18470;
var map__18472__$1 = cljs.core.__destructure_map(map__18472);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18473 = p__18471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18473,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18473,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__18469_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18469_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-template","deletar-template",-1473171528),(function (p__18477,p__18478){
var map__18479 = p__18477;
var map__18479__$1 = cljs.core.__destructure_map(map__18479);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18479__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18480 = p__18478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18480,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18480,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18476_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18476_SHARP_),id);
}),ts));
})),new cljs.core.Keyword("supabase","deletar-template","supabase/deletar-template",1262289036),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-template","toggle-template",1422016592),(function (p__18484,p__18485){
var map__18486 = p__18484;
var map__18486__$1 = cljs.core.__destructure_map(map__18486);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18487 = p__18485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(1),null);
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"ativo","ativo",-757128626),cljs.core.not);
} else {
return t;
}
}),ts);
}));
var template = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18483_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18483_SHARP_),id);
}),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(novo_db)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056),(function (p__18490,_){
var map__18491 = p__18490;
var map__18491__$1 = cljs.core.__destructure_map(map__18491);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"db","db",993250759));
var templates_ativos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(db));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var ids_existentes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db)));
var novas_despesas = cljs.core.vec((function (){var iter__5628__auto__ = (function casa_financas$events$iter__18492(s__18493){
return (new cljs.core.LazySeq(null,(function (){
var s__18493__$1 = s__18493;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18493__$1);
if(temp__5823__auto__){
var s__18493__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18493__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__18493__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__18495 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__18494 = (0);
while(true){
if((i__18494 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__18494);
if((!(cljs.core.contains_QMARK_(ids_existentes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t))))){
cljs.core.chunk_append(b__18495,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(t),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(t);
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

var G__18534 = (i__18494 + (1));
i__18494 = G__18534;
continue;
} else {
var G__18535 = (i__18494 + (1));
i__18494 = G__18535;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18495),casa_financas$events$iter__18492(cljs.core.chunk_rest(s__18493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18495),null);
}
} else {
var t = cljs.core.first(s__18493__$2);
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
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(t),false]),casa_financas$events$iter__18492(cljs.core.rest(s__18493__$2)));
} else {
var G__18536 = cljs.core.rest(s__18493__$2);
s__18493__$1 = G__18536;
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa-silencioso","salvar-despesa-silencioso",410347697),(function (_,p__18496){
var vec__18497 = p__18496;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18497,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18497,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),(function (p__18500){
var map__18501 = p__18500;
var map__18501__$1 = cljs.core.__destructure_map(map__18501);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18501__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var senha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18501__$1,new cljs.core.Keyword(null,"senha","senha",1788313207));
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
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),(function (p__18502){
var map__18503 = p__18502;
var map__18503__$1 = cljs.core.__destructure_map(map__18503);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_despesas_BANG_(ano,mes,(function (despesas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),despesas], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),(function (p__18504){
var map__18505 = p__18504;
var map__18505__$1 = cljs.core.__destructure_map(map__18505);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18505__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18505__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
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
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),(function (p__18506){
var map__18507 = p__18506;
var map__18507__$1 = cljs.core.__destructure_map(map__18507);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ativo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507__$1,new cljs.core.Keyword(null,"ativo","ativo",-757128626));
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
var seq__18508 = cljs.core.seq(events);
var chunk__18509 = null;
var count__18510 = (0);
var i__18511 = (0);
while(true){
if((i__18511 < count__18510)){
var e = chunk__18509.cljs$core$IIndexed$_nth$arity$2(null,i__18511);
re_frame.core.dispatch(e);


var G__18537 = seq__18508;
var G__18538 = chunk__18509;
var G__18539 = count__18510;
var G__18540 = (i__18511 + (1));
seq__18508 = G__18537;
chunk__18509 = G__18538;
count__18510 = G__18539;
i__18511 = G__18540;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18508);
if(temp__5823__auto__){
var seq__18508__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18508__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18508__$1);
var G__18541 = cljs.core.chunk_rest(seq__18508__$1);
var G__18542 = c__5673__auto__;
var G__18543 = cljs.core.count(c__5673__auto__);
var G__18544 = (0);
seq__18508 = G__18541;
chunk__18509 = G__18542;
count__18510 = G__18543;
i__18511 = G__18544;
continue;
} else {
var e = cljs.core.first(seq__18508__$1);
re_frame.core.dispatch(e);


var G__18545 = cljs.core.next(seq__18508__$1);
var G__18546 = null;
var G__18547 = (0);
var G__18548 = (0);
seq__18508 = G__18545;
chunk__18509 = G__18546;
count__18510 = G__18547;
i__18511 = G__18548;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-configuracoes","supabase/buscar-configuracoes",-33208108),(function (_){
return casa_financas.supabase.buscar_configuracoes_BANG_((function (configs){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-configuracoes","set-configuracoes",-1581975206),configs], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-configuracoes","set-configuracoes",-1581975206),(function (db,p__18512){
var vec__18513 = p__18512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(0),null);
var configs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(1),null);
casa_financas.utils.reset_cores_BANG_(configs);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),configs);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-cor-pessoa","salvar-cor-pessoa",-1731590300),(function (p__18516,p__18517){
var map__18518 = p__18516;
var map__18518__$1 = cljs.core.__destructure_map(map__18518);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18518__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18519 = p__18517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18519,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18519,(1),null);
var cor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18519,(2),null);
var chave = (""+"cor_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(casa_financas.utils.cores_pessoas,cljs.core.assoc,chave,cor);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),chave], null),cor),new cljs.core.Keyword("supabase","salvar-configuracao","supabase/salvar-configuracao",-476194239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chave","chave",519748335),chave,new cljs.core.Keyword(null,"valor","valor",-957162173),cor], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-configuracao","supabase/salvar-configuracao",-476194239),(function (p__18522){
var map__18523 = p__18522;
var map__18523__$1 = cljs.core.__destructure_map(map__18523);
var chave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18523__$1,new cljs.core.Keyword(null,"chave","chave",519748335));
var valor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18523__$1,new cljs.core.Keyword(null,"valor","valor",-957162173));
return casa_financas.supabase.salvar_configuracao_BANG_(chave,valor,(function (){
return console.log("Configura\u00E7\u00E3o salva");
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-categorias","supabase/buscar-categorias",1265109901),(function (_){
return casa_financas.supabase.buscar_categorias_BANG_((function (cats){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-categorias","set-categorias",1440200875),cats], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-categorias","set-categorias",1440200875),(function (db,p__18524){
var vec__18525 = p__18524;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18525,(0),null);
var cats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18525,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"categorias","categorias",-181626523),cats);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-categoria","salvar-categoria",357732616),(function (p__18528,p__18529){
var map__18530 = p__18528;
var map__18530__$1 = cljs.core.__destructure_map(map__18530);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18530__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18531 = p__18529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(0),null);
var categoria = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("supabase","salvar-categoria","supabase/salvar-categoria",-1454465060),categoria], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-categoria","supabase/salvar-categoria",-1454465060),(function (categoria){
return casa_financas.supabase.salvar_categoria_BANG_(categoria,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null));
}));
}));

//# sourceMappingURL=casa_financas.events.js.map
