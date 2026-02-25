goog.provide('casa_financas.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.db.default_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708),(function (p__28733,_){
var map__28734 = p__28733;
var map__28734__$1 = cljs.core.__destructure_map(map__28734);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28734__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("supabase","sessao","supabase/sessao",441049988),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__28735,p__28736){
var map__28737 = p__28735;
var map__28737__$1 = cljs.core.__destructure_map(map__28737);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28737__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28738 = p__28736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28738,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28738,(1),null);
var senha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28738,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"erro","erro",-650947642),null], 0)),new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"senha","senha",1788313207),senha], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),(function (p__28741,_){
var map__28742 = p__28741;
var map__28742__$1 = cljs.core.__destructure_map(map__28742);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28742__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","logout","supabase/logout",-929994715),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),(function (p__28743,p__28744){
var map__28745 = p__28743;
var map__28745__$1 = cljs.core.__destructure_map(map__28745);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28745__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28746 = p__28744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28746,(0),null);
var usuario = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28746,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),usuario,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555),(function (p__28749,_){
var map__28750 = p__28749;
var map__28750__$1 = cljs.core.__destructure_map(map__28750);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28750__$1,new cljs.core.Keyword(null,"db","db",993250759));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-templates","supabase/buscar-templates",253613684),null,new cljs.core.Keyword("supabase","buscar-historico","supabase/buscar-historico",-228455530),null,new cljs.core.Keyword("supabase","buscar-configuracoes","supabase/buscar-configuracoes",-33208108),null,new cljs.core.Keyword("supabase","buscar-categorias","supabase/buscar-categorias",1265109901),null,new cljs.core.Keyword("supabase","buscar-fatura","supabase/buscar-fatura",-1459715508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),(function (db,p__28751){
var vec__28752 = p__28751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28752,(0),null);
var aba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28752,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669),aba);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-anterior","mes-anterior",679127544),(function (p__28755,_){
var map__28756 = p__28755;
var map__28756__$1 = cljs.core.__destructure_map(map__28756);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28756__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__28757 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__28757__$1 = cljs.core.__destructure_map(map__28757);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28757__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28757__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(12):(mes - (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(ano - (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-proximo","mes-proximo",-618952688),(function (p__28758,_){
var map__28759 = p__28758;
var map__28759__$1 = cljs.core.__destructure_map(map__28759);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__28760 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__28760__$1 = cljs.core.__destructure_map(map__28760);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28760__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28760__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(1):(mes + (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(ano + (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),(function (db,p__28761){
var vec__28762 = p__28761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28762,(0),null);
var tipo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28762,(1),null);
var dados = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28762,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tipo","tipo",837631118),tipo,new cljs.core.Keyword(null,"dados","dados",1114219967),dados], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),(function (db,p__28765){
var vec__28766 = p__28765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-entradas","set-entradas",1331158514),(function (db,p__28769){
var vec__28770 = p__28769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),entradas);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-templates","set-templates",-528281172),(function (db,p__28773){
var vec__28774 = p__28773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28774,(0),null);
var templates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28774,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),templates);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-historico","set-historico",-2033938345),(function (db,p__28777){
var vec__28778 = p__28777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28778,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28778,(1),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28778,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754),entradas], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),(function (db,p__28781){
var vec__28782 = p__28781;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28782,(0),null);
var erro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28782,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"erro","erro",-650947642),erro);
}));
casa_financas.events.gerar_entradas_bolso = (function casa_financas$events$gerar_entradas_bolso(despesa,mes){
var pagadores = new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(despesa);
var eh_bolso_QMARK_ = ((cljs.core.seq(pagadores)) && (cljs.core.not(cljs.core.some((function (p1__28785_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28785_SHARP_,"conjunta");
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28786_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"despesa_ref","despesa_ref",-602134006).cljs$core$IFn$_invoke$arity$1(p1__28786_SHARP_),despesa_id);
}),es));
}));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"marcar-pago","marcar-pago",446617930),(function (p__28788,p__28789){
var map__28790 = p__28788;
var map__28790__$1 = cljs.core.__destructure_map(map__28790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28790__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28791 = p__28789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791,(1),null);
var despesa = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28787_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28787_SHARP_),id);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desmarcar-pago","desmarcar-pago",-5576968),(function (p__28794,p__28795){
var map__28796 = p__28794;
var map__28796__$1 = cljs.core.__destructure_map(map__28796);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28796__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28797 = p__28795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28797,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28797,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),(function (p__28801,p__28802){
var map__28803 = p__28801;
var map__28803__$1 = cljs.core.__destructure_map(map__28803);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28804 = p__28802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(1),null);
var despesa_ajustada = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(despesa),"credito"))?(function (){var data_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data_input","data_input",131000147).cljs$core$IFn$_invoke$arity$1(despesa),/-/);
var ano_c = (cljs.core.first(data_parts) | 0);
var mes_c = (cljs.core.second(data_parts) | 0);
var dia = new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa);
var periodo = casa_financas.utils.mes_fatura(dia,mes_c,ano_c);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([despesa,periodo], 0));
})():despesa);
var existe_QMARK_ = cljs.core.some((function (p1__28800_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28800_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa_ajustada));
}),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
if(cljs.core.truth_(existe_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa_ajustada))){
return despesa_ajustada;
} else {
return d;
}
}),ds);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ds),despesa_ajustada);
}
}));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var entradas_auto = (cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa_ajustada))?casa_financas.events.gerar_entradas_bolso(despesa_ajustada,mes):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(novo_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null),new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),despesa_ajustada], null),((cljs.core.seq(entradas_auto))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),e], null);
}),entradas_auto)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-despesa","deletar-despesa",1441694847),(function (p__28808,p__28809){
var map__28810 = p__28808;
var map__28810__$1 = cljs.core.__destructure_map(map__28810);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28810__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28811 = p__28809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.events.remover_entradas_auto(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28807_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28807_SHARP_),id);
}),ds));
})),id),new cljs.core.Keyword("supabase","deletar-despesa","supabase/deletar-despesa",1910682843),id,new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),(function (p__28815,p__28816){
var map__28817 = p__28815;
var map__28817__$1 = cljs.core.__destructure_map(map__28817);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28817__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28818 = p__28816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818,(0),null);
var entrada = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__28814_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28814_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entrada));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-entrada","deletar-entrada",-333068260),(function (p__28822,p__28823){
var map__28824 = p__28822;
var map__28824__$1 = cljs.core.__destructure_map(map__28824);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28824__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28825 = p__28823;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28825,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28825,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28821_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28821_SHARP_),id);
}),es));
})),new cljs.core.Keyword("supabase","deletar-entrada","supabase/deletar-entrada",-803604216),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-template","salvar-template",-861853926),(function (p__28829,p__28830){
var map__28831 = p__28829;
var map__28831__$1 = cljs.core.__destructure_map(map__28831);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28831__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28832 = p__28830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28832,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28832,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__28828_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28828_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-template","deletar-template",-1473171528),(function (p__28836,p__28837){
var map__28838 = p__28836;
var map__28838__$1 = cljs.core.__destructure_map(map__28838);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28838__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28839 = p__28837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28835_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28835_SHARP_),id);
}),ts));
})),new cljs.core.Keyword("supabase","deletar-template","supabase/deletar-template",1262289036),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-template","toggle-template",1422016592),(function (p__28843,p__28844){
var map__28845 = p__28843;
var map__28845__$1 = cljs.core.__destructure_map(map__28845);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28845__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28846 = p__28844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(1),null);
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"ativo","ativo",-757128626),cljs.core.not);
} else {
return t;
}
}),ts);
}));
var template = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28842_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28842_SHARP_),id);
}),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(novo_db)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056),(function (p__28849,_){
var map__28850 = p__28849;
var map__28850__$1 = cljs.core.__destructure_map(map__28850);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28850__$1,new cljs.core.Keyword(null,"db","db",993250759));
var templates_ativos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(db));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var ids_existentes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db)));
var novas_despesas = cljs.core.vec((function (){var iter__5628__auto__ = (function casa_financas$events$iter__28851(s__28852){
return (new cljs.core.LazySeq(null,(function (){
var s__28852__$1 = s__28852;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__28852__$1);
if(temp__5823__auto__){
var s__28852__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28852__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__28852__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__28854 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__28853 = (0);
while(true){
if((i__28853 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__28853);
if((!(cljs.core.contains_QMARK_(ids_existentes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t))))){
cljs.core.chunk_append(b__28854,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(t),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(t);
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

var G__28911 = (i__28853 + (1));
i__28853 = G__28911;
continue;
} else {
var G__28912 = (i__28853 + (1));
i__28853 = G__28912;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28854),casa_financas$events$iter__28851(cljs.core.chunk_rest(s__28852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28854),null);
}
} else {
var t = cljs.core.first(s__28852__$2);
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
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(t),false]),casa_financas$events$iter__28851(cljs.core.rest(s__28852__$2)));
} else {
var G__28913 = cljs.core.rest(s__28852__$2);
s__28852__$1 = G__28913;
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa-silencioso","salvar-despesa-silencioso",410347697),(function (_,p__28855){
var vec__28856 = p__28855;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28856,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28856,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),(function (p__28859){
var map__28860 = p__28859;
var map__28860__$1 = cljs.core.__destructure_map(map__28860);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28860__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var senha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28860__$1,new cljs.core.Keyword(null,"senha","senha",1788313207));
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
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),(function (p__28861){
var map__28862 = p__28861;
var map__28862__$1 = cljs.core.__destructure_map(map__28862);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28862__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28862__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_despesas_BANG_(ano,mes,(function (despesas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),despesas], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),(function (p__28863){
var map__28864 = p__28863;
var map__28864__$1 = cljs.core.__destructure_map(map__28864);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28864__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28864__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
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
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),(function (p__28865){
var map__28866 = p__28865;
var map__28866__$1 = cljs.core.__destructure_map(map__28866);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28866__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ativo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28866__$1,new cljs.core.Keyword(null,"ativo","ativo",-757128626));
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
var seq__28867 = cljs.core.seq(events);
var chunk__28868 = null;
var count__28869 = (0);
var i__28870 = (0);
while(true){
if((i__28870 < count__28869)){
var e = chunk__28868.cljs$core$IIndexed$_nth$arity$2(null,i__28870);
re_frame.core.dispatch(e);


var G__28914 = seq__28867;
var G__28915 = chunk__28868;
var G__28916 = count__28869;
var G__28917 = (i__28870 + (1));
seq__28867 = G__28914;
chunk__28868 = G__28915;
count__28869 = G__28916;
i__28870 = G__28917;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28867);
if(temp__5823__auto__){
var seq__28867__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28867__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__28867__$1);
var G__28918 = cljs.core.chunk_rest(seq__28867__$1);
var G__28919 = c__5673__auto__;
var G__28920 = cljs.core.count(c__5673__auto__);
var G__28921 = (0);
seq__28867 = G__28918;
chunk__28868 = G__28919;
count__28869 = G__28920;
i__28870 = G__28921;
continue;
} else {
var e = cljs.core.first(seq__28867__$1);
re_frame.core.dispatch(e);


var G__28922 = cljs.core.next(seq__28867__$1);
var G__28923 = null;
var G__28924 = (0);
var G__28925 = (0);
seq__28867 = G__28922;
chunk__28868 = G__28923;
count__28869 = G__28924;
i__28870 = G__28925;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-configuracoes","set-configuracoes",-1581975206),(function (db,p__28871){
var vec__28872 = p__28871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28872,(0),null);
var configs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28872,(1),null);
casa_financas.utils.reset_cores_BANG_(configs);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),configs);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-cor-pessoa","salvar-cor-pessoa",-1731590300),(function (p__28875,p__28876){
var map__28877 = p__28875;
var map__28877__$1 = cljs.core.__destructure_map(map__28877);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28877__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28878 = p__28876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28878,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28878,(1),null);
var cor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28878,(2),null);
var chave = (""+"cor_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(casa_financas.utils.cores_pessoas,cljs.core.assoc,chave,cor);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),chave], null),cor),new cljs.core.Keyword("supabase","salvar-configuracao","supabase/salvar-configuracao",-476194239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chave","chave",519748335),chave,new cljs.core.Keyword(null,"valor","valor",-957162173),cor], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-configuracao","supabase/salvar-configuracao",-476194239),(function (p__28881){
var map__28882 = p__28881;
var map__28882__$1 = cljs.core.__destructure_map(map__28882);
var chave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28882__$1,new cljs.core.Keyword(null,"chave","chave",519748335));
var valor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28882__$1,new cljs.core.Keyword(null,"valor","valor",-957162173));
return casa_financas.supabase.salvar_configuracao_BANG_(chave,valor,(function (){
return console.log("Configura\u00E7\u00E3o salva");
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-categorias","supabase/buscar-categorias",1265109901),(function (_){
return casa_financas.supabase.buscar_categorias_BANG_((function (cats){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-categorias","set-categorias",1440200875),cats], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-categorias","set-categorias",1440200875),(function (db,p__28883){
var vec__28884 = p__28883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28884,(0),null);
var cats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28884,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"categorias","categorias",-181626523),cats);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-categoria","salvar-categoria",357732616),(function (p__28887,p__28888){
var map__28889 = p__28887;
var map__28889__$1 = cljs.core.__destructure_map(map__28889);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28889__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28890 = p__28888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890,(0),null);
var categoria = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("supabase","salvar-categoria","supabase/salvar-categoria",-1454465060),categoria], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-categoria","supabase/salvar-categoria",-1454465060),(function (categoria){
return casa_financas.supabase.salvar_categoria_BANG_(categoria,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-fatura","set-fatura",-177665949),(function (db,p__28893){
var vec__28894 = p__28893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(0),null);
var fatura = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"fatura","fatura",18781370),fatura);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-pagamento-fatura","salvar-pagamento-fatura",1301159182),(function (p__28898,p__28899){
var map__28900 = p__28898;
var map__28900__$1 = cljs.core.__destructure_map(map__28900);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28900__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28901 = p__28899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28901,(0),null);
var valor_pago = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28901,(1),null);
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var fatura = new cljs.core.Keyword(null,"fatura","fatura",18781370).cljs$core$IFn$_invoke$arity$1(db);
var despesas = new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db);
var creditos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28897_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__28897_SHARP_),"credito");
}),despesas);
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),creditos));
var pago_total_QMARK_ = (valor_pago >= total);
var soma_div = (function (pessoa_key){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d) * (cljs.core.get.cljs$core$IFn$_invoke$arity$3(d,pessoa_key,(0)) / (100)));
}),creditos));
});
var div_andre = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_andre","divisao_andre",-1837479647)) / total)):(25));
var div_bianca = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_bianca","divisao_bianca",-601970961)) / total)):(25));
var div_fernanda = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_fernanda","divisao_fernanda",360832815)) / total)):(25));
var div_bruna = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_bruna","divisao_bruna",1669406733)) / total)):(25));
var nova_fatura = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"divisao_andre","divisao_andre",-1837479647),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"divisao_bruna","divisao_bruna",1669406733),new cljs.core.Keyword(null,"divisao_bianca","divisao_bianca",-601970961),new cljs.core.Keyword(null,"divisao_fernanda","divisao_fernanda",360832815),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"valor_total","valor_total",1765765977),new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073)],[div_andre,new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),div_bruna,div_bianca,div_fernanda,new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}
})(),total,valor_pago]);
var novo_db = (function (){var G__28904 = db;
var G__28904__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__28904,new cljs.core.Keyword(null,"fatura","fatura",18781370),nova_fatura,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal","modal",-1031880850),null], 0))
;
if(pago_total_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__28904__$1,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(d),"credito")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"pago","pago",27952415),true);
} else {
return d;
}
}),ds);
}));
} else {
return G__28904__$1;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","salvar-fatura","supabase/salvar-fatura",1793352485),nova_fatura], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-fatura","supabase/buscar-fatura",-1459715508),(function (p__28905){
var map__28906 = p__28905;
var map__28906__$1 = cljs.core.__destructure_map(map__28906);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28906__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28906__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_fatura_BANG_(ano,mes,(function (fatura){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-fatura","set-fatura",-177665949),fatura], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-fatura","supabase/salvar-fatura",1793352485),(function (fatura){
return casa_financas.supabase.salvar_fatura_BANG_(fatura,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar fatura"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desmarcar-fatura","desmarcar-fatura",-2096898598),(function (p__28907,_){
var map__28908 = p__28907;
var map__28908__$1 = cljs.core.__destructure_map(map__28908);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28908__$1,new cljs.core.Keyword(null,"db","db",993250759));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var fatura = new cljs.core.Keyword(null,"fatura","fatura",18781370).cljs$core$IFn$_invoke$arity$1(db);
var nova_fatura = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fatura,new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073),(0));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"fatura","fatura",18781370),nova_fatura),new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(d),"credito")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"pago","pago",27952415),false);
} else {
return d;
}
}),ds);
}));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","salvar-fatura","supabase/salvar-fatura",1793352485),nova_fatura,new cljs.core.Keyword("supabase","desmarcar-creditos","supabase/desmarcar-creditos",1242110984),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","desmarcar-creditos","supabase/desmarcar-creditos",1242110984),(function (p__28909){
var map__28910 = p__28909;
var map__28910__$1 = cljs.core.__destructure_map(map__28910);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28910__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28910__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.desmarcar_creditos_BANG_(ano,mes,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao desmarcar cr\u00E9ditos"], null));
} else {
return null;
}
}));
}));

//# sourceMappingURL=casa_financas.events.js.map
