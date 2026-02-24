goog.provide('casa_financas.utils');
casa_financas.utils.meses_nomes = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","Janeiro","Fevereiro","Mar\u00E7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"], null);
casa_financas.utils.mes_nome = (function casa_financas$utils$mes_nome(m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(casa_financas.utils.meses_nomes,m,"");
});
casa_financas.utils.formatar_valor_br = (function casa_financas$utils$formatar_valor_br(v){
var formatted = (function (){var or__5142__auto__ = v;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})().toLocaleString("pt-BR",({"minimumFractionDigits": (2), "maximumFractionDigits": (2)}));
return (""+"R$ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(formatted));
});
casa_financas.utils.dia_hoje = (function casa_financas$utils$dia_hoje(){
return (new Date()).getDate();
});
casa_financas.utils.mes_hoje = (function casa_financas$utils$mes_hoje(){
return ((new Date()).getMonth() + (1));
});
casa_financas.utils.ano_hoje = (function casa_financas$utils$ano_hoje(){
return (new Date()).getFullYear();
});
casa_financas.utils.despesa_status = (function casa_financas$utils$despesa_status(despesa){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa))){
return new cljs.core.Keyword(null,"paga","paga",-490375672);
} else {
if((new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa) < casa_financas.utils.dia_hoje())){
return new cljs.core.Keyword(null,"vencida","vencida",-1537883219);
} else {
return new cljs.core.Keyword(null,"pendente","pendente",311658061);

}
}
});
casa_financas.utils.status_cor = (function casa_financas$utils$status_cor(status){
var G__17021 = status;
var G__17021__$1 = (((G__17021 instanceof cljs.core.Keyword))?G__17021.fqn:null);
switch (G__17021__$1) {
case "paga":
return "bg-green-50 border-green-200";

break;
case "vencida":
return "bg-red-50 border-red-200";

break;
case "pendente":
return "bg-amber-50 border-amber-200";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17021__$1))));

}
});
casa_financas.utils.cores_pessoas = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, ["cor_andre","#3B82F6","cor_bianca","#EC4899","cor_fernanda","#14B8A6","cor_bruna","#F97316"], null));
casa_financas.utils.reset_cores_BANG_ = (function casa_financas$utils$reset_cores_BANG_(configs){
return cljs.core.reset_BANG_(casa_financas.utils.cores_pessoas,configs);
});
casa_financas.utils.pessoa_cor = (function casa_financas$utils$pessoa_cor(pessoa_id){
var G__17022 = pessoa_id;
switch (G__17022) {
case "conjunta":
return "#8B5CF6";

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(casa_financas.utils.cores_pessoas),(""+"cor_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id)),(function (){var G__17023 = pessoa_id;
switch (G__17023) {
case "andre":
return "#3B82F6";

break;
case "bianca":
return "#EC4899";

break;
case "fernanda":
return "#14B8A6";

break;
case "bruna":
return "#F97316";

break;
default:
return "#9CA3AF";

}
})());

}
});
casa_financas.utils.pessoa_nome = (function casa_financas$utils$pessoa_nome(pessoa_id){
var G__17024 = pessoa_id;
switch (G__17024) {
case "andre":
return "Andr\u00E9";

break;
case "bianca":
return "Bianca";

break;
case "fernanda":
return "Fernanda";

break;
case "bruna":
return "Bruna";

break;
case "conjunta":
return "Conta Conjunta";

break;
default:
return "?";

}
});
casa_financas.utils.pessoa_inicial = (function casa_financas$utils$pessoa_inicial(pessoa_id){
var G__17025 = pessoa_id;
switch (G__17025) {
case "andre":
return "A";

break;
case "bianca":
return "Bi";

break;
case "fernanda":
return "F";

break;
case "bruna":
return "Br";

break;
case "conjunta":
return "CC";

break;
default:
return "?";

}
});
casa_financas.utils.gerar_id = (function casa_financas$utils$gerar_id(){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
});
casa_financas.utils.divisao_padrao = (function casa_financas$utils$divisao_padrao(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),(25),new cljs.core.Keyword(null,"bianca","bianca",820619526),(25),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),(25),new cljs.core.Keyword(null,"bruna","bruna",1508842390),(25)], null);
});
casa_financas.utils.soma_divisao = (function casa_financas$utils$soma_divisao(divisao){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.vals(divisao));
});

//# sourceMappingURL=casa_financas.utils.js.map
