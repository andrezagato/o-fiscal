goog.provide('casa_financas.supabase');
var module$node_modules$$supabase$supabase_js$dist$index_cjs=shadow.js.require("module$node_modules$$supabase$supabase_js$dist$index_cjs", {});
if((typeof casa_financas !== 'undefined') && (typeof casa_financas.supabase !== 'undefined') && (typeof casa_financas.supabase.client !== 'undefined')){
} else {
casa_financas.supabase.client = module$node_modules$$supabase$supabase_js$dist$index_cjs.createClient(casa_financas.config.supabase_url,casa_financas.config.supabase_anon_key);
}
casa_financas.supabase.login_BANG_ = (function casa_financas$supabase$login_BANG_(email,senha,callback){
return casa_financas.supabase.client.auth.signInWithPassword(({"email": email, "password": senha})).then((function (p1__18332_SHARP_){
var G__18334 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__18332_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18334) : callback.call(null,G__18334));
})).catch((function (p1__18333_SHARP_){
var G__18335 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18333_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18335) : callback.call(null,G__18335));
}));
});
casa_financas.supabase.logout_BANG_ = (function casa_financas$supabase$logout_BANG_(callback){
return casa_financas.supabase.client.auth.signOut().then((function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})).catch((function (p1__18336_SHARP_){
var G__18337 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18336_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18337) : callback.call(null,G__18337));
}));
});
casa_financas.supabase.sessao_atual = (function casa_financas$supabase$sessao_atual(callback){
return casa_financas.supabase.client.auth.getSession().then((function (p1__18338_SHARP_){
var G__18339 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__18338_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18339) : callback.call(null,G__18339));
}));
});
casa_financas.supabase.on_auth_change = (function casa_financas$supabase$on_auth_change(callback){
return casa_financas.supabase.client.auth.onAuthStateChange((function (event,session){
var G__18340 = event;
var G__18341 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(session,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__18340,G__18341) : callback.call(null,G__18340,G__18341));
}));
});
casa_financas.supabase.buscar_despesas_BANG_ = (function casa_financas$supabase$buscar_despesas_BANG_(ano,mes,callback){
return casa_financas.supabase.client.from("despesa_mensal").select("*").eq("ano",ano).eq("mes",mes).then((function (res){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__18343 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),new cljs.core.Keyword(null,"divisao_andre","divisao_andre",-1837479647).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"bianca","bianca",820619526),new cljs.core.Keyword(null,"divisao_bianca","divisao_bianca",-601970961).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),new cljs.core.Keyword(null,"divisao_fernanda","divisao_fernanda",360832815).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"bruna","bruna",1508842390),new cljs.core.Keyword(null,"divisao_bruna","divisao_bruna",1669406733).cljs$core$IFn$_invoke$arity$1(d)], null));
}),data);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18343) : callback.call(null,G__18343));
})).catch((function (p1__18342_SHARP_){
return console.error("Erro ao buscar despesas",p1__18342_SHARP_);
}));
});
casa_financas.supabase.salvar_despesa_BANG_ = (function casa_financas$supabase$salvar_despesa_BANG_(despesa,callback){
var row = ({"divisao_andre": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(despesa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"andre","andre",936361062)], null),(0)), "origem_template_id": new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498).cljs$core$IFn$_invoke$arity$1(despesa), "valor": new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(despesa), "categoria_nome": new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669).cljs$core$IFn$_invoke$arity$1(despesa), "pagadores": cljs.core.clj__GT_js(new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(despesa)), "ano": new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(despesa), "dia_do_mes": new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa), "divisao_bruna": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(despesa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"bruna","bruna",1508842390)], null),(0)), "categoria_id": new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(despesa), "descricao": new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(despesa), "data_pagamento": new cljs.core.Keyword(null,"data_pagamento","data_pagamento",987849358).cljs$core$IFn$_invoke$arity$1(despesa), "divisao_bianca": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(despesa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"bianca","bianca",820619526)], null),(0)), "divisao_fernanda": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(despesa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127)], null),(0)), "mes": new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(despesa), "id": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa), "forma_pagamento": new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(despesa), "pago": new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa)});
return casa_financas.supabase.client.from("despesa_mensal").upsert(row).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})).catch((function (p1__18344_SHARP_){
var G__18345 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18344_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18345) : callback.call(null,G__18345));
}));
});
casa_financas.supabase.marcar_pago_BANG_ = (function casa_financas$supabase$marcar_pago_BANG_(id,callback){
return casa_financas.supabase.client.from("despesa_mensal").update(({"pago": true, "data_pagamento": (new Date()).toISOString()})).eq("id",id).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})).catch((function (p1__18346_SHARP_){
var G__18347 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18346_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18347) : callback.call(null,G__18347));
}));
});
casa_financas.supabase.buscar_entradas_BANG_ = (function casa_financas$supabase$buscar_entradas_BANG_(ano,mes,callback){
var inicio = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ano)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((mes < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mes)+"-01");
var prox_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(1):(mes + (1)));
var prox_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(ano + (1)):ano);
var fim = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prox_ano)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((prox_mes < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prox_mes)+"-01");
return casa_financas.supabase.client.from("entradas").select("*").gte("data",inicio).lt("data",fim).then((function (res){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__18350 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"valor","valor",-957162173),(function (p1__18348_SHARP_){
return parseFloat(p1__18348_SHARP_);
}));
}),data);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18350) : callback.call(null,G__18350));
})).catch((function (p1__18349_SHARP_){
return console.error("Erro ao buscar entradas",p1__18349_SHARP_);
}));
});
casa_financas.supabase.salvar_entrada_BANG_ = (function casa_financas$supabase$salvar_entrada_BANG_(entrada,callback){
var row = ({"id": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entrada), "pessoa_id": new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(entrada), "valor": new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(entrada), "data": new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(entrada), "descricao": new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(entrada)});
return casa_financas.supabase.client.from("entradas").upsert(row).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})).catch((function (p1__18351_SHARP_){
var G__18352 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18351_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18352) : callback.call(null,G__18352));
}));
});
casa_financas.supabase.buscar_templates_BANG_ = (function casa_financas$supabase$buscar_templates_BANG_(callback){
return casa_financas.supabase.client.from("template_despesa").select("*").then((function (res){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__18354 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),new cljs.core.Keyword(null,"divisao_andre","divisao_andre",-1837479647).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"bianca","bianca",820619526),new cljs.core.Keyword(null,"divisao_bianca","divisao_bianca",-601970961).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),new cljs.core.Keyword(null,"divisao_fernanda","divisao_fernanda",360832815).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"bruna","bruna",1508842390),new cljs.core.Keyword(null,"divisao_bruna","divisao_bruna",1669406733).cljs$core$IFn$_invoke$arity$1(t)], null));
}),data);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18354) : callback.call(null,G__18354));
})).catch((function (p1__18353_SHARP_){
return console.error("Erro ao buscar templates",p1__18353_SHARP_);
}));
});
casa_financas.supabase.salvar_template_BANG_ = (function casa_financas$supabase$salvar_template_BANG_(template,callback){
var row = ({"divisao_andre": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"andre","andre",936361062)], null),(0)), "valor_padrao": new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(template), "categoria_nome": new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669).cljs$core$IFn$_invoke$arity$1(template), "pagador_padrao": cljs.core.clj__GT_js(new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(template)), "divisao_bruna": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"bruna","bruna",1508842390)], null),(0)), "categoria_id": new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(template), "descricao": new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(template), "ativo": new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template), "divisao_bianca": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"bianca","bianca",820619526)], null),(0)), "divisao_fernanda": cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127)], null),(0)), "forma_pagamento_padrao": new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(template), "id": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template)});
return casa_financas.supabase.client.from("template_despesa").upsert(row).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})).catch((function (p1__18355_SHARP_){
var G__18356 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18355_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18356) : callback.call(null,G__18356));
}));
});
casa_financas.supabase.toggle_template_BANG_ = (function casa_financas$supabase$toggle_template_BANG_(id,ativo,callback){
return casa_financas.supabase.client.from("template_despesa").update(({"ativo": ativo})).eq("id",id).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})).catch((function (p1__18357_SHARP_){
var G__18358 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18357_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18358) : callback.call(null,G__18358));
}));
});
casa_financas.supabase.deletar_BANG_ = (function casa_financas$supabase$deletar_BANG_(tabela,id){
return casa_financas.supabase.client.from(tabela).delete().eq("id",id).then((function (){
return console.log("Deletado",tabela,id);
})).catch((function (p1__18359_SHARP_){
return console.error("Erro ao deletar",tabela,id,p1__18359_SHARP_);
}));
});
casa_financas.supabase.desmarcar_pago_BANG_ = (function casa_financas$supabase$desmarcar_pago_BANG_(id,callback){
return casa_financas.supabase.client.from("despesa_mensal").update(({"pago": false, "data_pagamento": null})).eq("id",id).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})).catch((function (p1__18360_SHARP_){
var G__18361 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__18360_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18361) : callback.call(null,G__18361));
}));
});
casa_financas.supabase.deletar_entradas_auto_BANG_ = (function casa_financas$supabase$deletar_entradas_auto_BANG_(despesa_id){
return casa_financas.supabase.client.from("entradas").delete().eq("despesa_ref",despesa_id).then((function (){
return console.log("Entradas auto deletadas",despesa_id);
})).catch((function (p1__18362_SHARP_){
return console.error("Erro ao deletar entradas auto",p1__18362_SHARP_);
}));
});
casa_financas.supabase.buscar_todas_despesas_BANG_ = (function casa_financas$supabase$buscar_todas_despesas_BANG_(callback){
return casa_financas.supabase.client.from("despesa_mensal").select("*").then((function (res){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__18364 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),new cljs.core.Keyword(null,"divisao_andre","divisao_andre",-1837479647).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"bianca","bianca",820619526),new cljs.core.Keyword(null,"divisao_bianca","divisao_bianca",-601970961).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),new cljs.core.Keyword(null,"divisao_fernanda","divisao_fernanda",360832815).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"bruna","bruna",1508842390),new cljs.core.Keyword(null,"divisao_bruna","divisao_bruna",1669406733).cljs$core$IFn$_invoke$arity$1(d)], null));
}),data);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18364) : callback.call(null,G__18364));
})).catch((function (p1__18363_SHARP_){
return console.error("Erro ao buscar historico despesas",p1__18363_SHARP_);
}));
});
casa_financas.supabase.buscar_todas_entradas_BANG_ = (function casa_financas$supabase$buscar_todas_entradas_BANG_(callback){
return casa_financas.supabase.client.from("entradas").select("*").then((function (res){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__18367 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"valor","valor",-957162173),(function (p1__18365_SHARP_){
return parseFloat(p1__18365_SHARP_);
}));
}),data);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18367) : callback.call(null,G__18367));
})).catch((function (p1__18366_SHARP_){
return console.error("Erro ao buscar historico entradas",p1__18366_SHARP_);
}));
});
casa_financas.supabase.buscar_configuracoes_BANG_ = (function casa_financas$supabase$buscar_configuracoes_BANG_(callback){
return casa_financas.supabase.client.from("configuracoes").select("*").then((function (res){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__18369 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"chave","chave",519748335).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(item));
}),cljs.core.PersistentArrayMap.EMPTY,data);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18369) : callback.call(null,G__18369));
})).catch((function (p1__18368_SHARP_){
return console.error("Erro ao buscar configuracoes",p1__18368_SHARP_);
}));
});
casa_financas.supabase.salvar_configuracao_BANG_ = (function casa_financas$supabase$salvar_configuracao_BANG_(chave,valor,callback){
return casa_financas.supabase.client.from("configuracoes").upsert(({"chave": chave, "valor": valor})).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
})).catch((function (p1__18370_SHARP_){
return console.error("Erro ao salvar configuracao",p1__18370_SHARP_);
}));
});
casa_financas.supabase.buscar_categorias_BANG_ = (function casa_financas$supabase$buscar_categorias_BANG_(callback){
return casa_financas.supabase.client.from("categorias").select("*").order("ordem").then((function (res){
var G__18372 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__18372) : callback.call(null,G__18372));
})).catch((function (p1__18371_SHARP_){
return console.error("Erro ao buscar categorias",p1__18371_SHARP_);
}));
});
casa_financas.supabase.salvar_categoria_BANG_ = (function casa_financas$supabase$salvar_categoria_BANG_(categoria,callback){
return casa_financas.supabase.client.from("categorias").insert(({"nome": new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(categoria), "emoji": new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(categoria), "ordem": new cljs.core.Keyword(null,"ordem","ordem",-1627535087).cljs$core$IFn$_invoke$arity$1(categoria)})).then((function (){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
})).catch((function (p1__18373_SHARP_){
return console.error("Erro ao salvar categoria",p1__18373_SHARP_);
}));
});

//# sourceMappingURL=casa_financas.supabase.js.map
