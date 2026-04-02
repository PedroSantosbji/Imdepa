import { useState } from "react";

// ─── Tokens ──────────────────────────────────────────────────────────────────
const C = {
  navy:"#1A3A5C", blue:"#2E6DA4", blueL:"#E6F1FB", blueT:"#185FA5",
  green:"#3B6D11", greenL:"#EAF3DE", greenT:"#639922",
  amber:"#BA7517", amberL:"#FAEEDA", red:"#A32D2D", redL:"#FCEBEB",
  gray:"#5F5E5A", grayL:"#F1EFE8", purple:"#534AB7", purpleL:"#EEEDFE",
  bg:"#F5F5F3", white:"#FFFFFF", border:"rgba(0,0,0,0.08)",
  text:"#111111", muted:"#666666", hint:"#AAAAAA",
};
const card=(e={})=>({backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:12,...e});
const pill=(bg,color)=>({fontSize:10,padding:"2px 7px",borderRadius:4,backgroundColor:bg,color,fontWeight:500,whiteSpace:"nowrap"});
const lbl={fontSize:10.5,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:600,marginBottom:6};
const big={fontSize:26,fontWeight:500,color:C.text,lineHeight:1,marginBottom:4};
const sub={fontSize:11,color:C.hint};
function Badge({a,bg,color}){return <div style={{width:28,height:28,borderRadius:7,background:bg,color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,flexShrink:0}}>{a}</div>;}
function ST({children}){return <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:12}}>{children}</div>;}
function SP({label:l,color,bg}){return <span style={{...pill(bg,color),fontSize:10.5}}>{l}</span>;}
function FeatGrid({items,color}){return(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",padding:"11px 18px 13px",gap:"4px 24px"}}>{items.map(f=><div key={f} style={{fontSize:12,color:"#555",padding:"3px 0",display:"flex",gap:6,alignItems:"flex-start"}}><span style={{width:4,height:4,borderRadius:"50%",background:color||C.hint,flexShrink:0,marginTop:5}}/>{f}</div>)}</div>);}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
const NAV=[
  {section:"Produto",items:[{key:"overview",label:"Visão Geral"},{key:"architecture",label:"Arquitetura"}]},
  {section:"Entrega",items:[{key:"roadmap",label:"Roadmap"},{key:"team",label:"Equipe"},{key:"scope",label:"Escopo"}]},
  {section:"Protótipo",items:[{key:"proto_dir",label:"Diretoria"},{key:"proto_ger",label:"Gerente"}]},
];
const PAGE_LABELS={overview:"Visão Geral",architecture:"Arquitetura",roadmap:"Roadmap",team:"Equipe",scope:"Escopo",proto_dir:"Protótipo · Diretoria",proto_ger:"Protótipo · Gerente"};

function Sidebar({active,setActive}){
  return(
    <aside style={{width:200,minWidth:200,backgroundColor:C.white,borderRight:`0.5px solid ${C.border}`,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"14px 16px",borderBottom:`0.5px solid ${C.border}`,display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:26,height:26,borderRadius:6,background:C.navy,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#fff"}}>IM</div>
        <div><div style={{fontSize:13,fontWeight:600,color:C.text}}>Imdepa</div><div style={{fontSize:10,color:C.hint}}>Dashboard MVP</div></div>
      </div>
      {NAV.map(({section,items})=>(
        <div key={section}>
          <div style={{padding:"14px 12px 4px",fontSize:10,fontWeight:600,color:C.hint,letterSpacing:"0.07em",textTransform:"uppercase"}}>{section}</div>
          {items.map(({key,label:lbl_})=>(
            <div key={key} onClick={()=>setActive(key)} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 12px",borderRadius:6,margin:"1px 6px",cursor:"pointer",color:active===key?C.text:C.muted,fontWeight:active===key?500:400,fontSize:12.5,backgroundColor:active===key?C.bg:"transparent"}}>
              <span style={{width:7,height:7,borderRadius:"50%",backgroundColor:active===key?C.blue:"#ddd",flexShrink:0,display:"inline-block"}}/>
              {lbl_}
            </div>
          ))}
        </div>
      ))}
      <div style={{marginTop:"auto",padding:12,borderTop:`0.5px solid ${C.border}`}}>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",backgroundColor:C.bg,borderRadius:8}}>
          <div style={{width:26,height:26,borderRadius:6,background:C.blue,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#fff"}}>DP</div>
          <div><div style={{fontSize:12,fontWeight:600,color:C.text}}>Dashboard Perf.</div><div style={{fontSize:10,color:C.hint}}>Produto Comercial</div></div>
        </div>
      </div>
    </aside>
  );
}
function Topbar({active}){
  return(
    <div style={{padding:"11px 24px",borderBottom:`0.5px solid ${C.border}`,backgroundColor:C.white,display:"flex",alignItems:"center",gap:6,fontSize:12,color:C.hint,flexShrink:0}}>
      <span style={{color:C.text,fontWeight:500}}>{PAGE_LABELS[active]}</span>
      <span style={{color:"#ddd"}}>/</span>
      <span>Imdepa · Dashboard de Performance Comercial</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: OVERVIEW
// ═══════════════════════════════════════════════════════════════════════════════
function PageOverview(){
  const metrics=[{label:"Sistemas",value:"3",sub:"Retaguarda · App · Pipeline",accent:C.blue},{label:"Prazo Estimado",value:"5m+",sub:"Design · Dados · Dev · Infra",accent:C.purple},{label:"Perfis de Acesso",value:"3",sub:"Diretoria · Gerente · Backoffice",accent:C.green}];
  const systems=[
    {abbr:"RT",name:"Retaguarda",bg:C.navy,tags:["Web","3 perfis","Protheus"],feats:["Dashboard de KPIs por perfil","Módulo Indústria — Faturamento s/ IPI","Módulo Revenda — Faturamento s/ IPI","Filtros por gerente e área/cidade","Gráficos de evolução mensal","Parametrização de alertas","Controle de acessos — CRUD usuários","Log de atividades"]},
    {abbr:"APP",name:"App Mobile",bg:C.blue,tags:["React Native","Mobile-First","iOS + Android"],feats:["Home com KPIs consolidados","Módulo Indústria — visão mobile","Módulo Revenda — visão mobile","Progresso vs meta (gauge visual)","Push notifications (FCM)","Seletor de período Dia/Mês/Ano","Painel de alertas com severidade","Pull-to-refresh"]},
    {abbr:"PIP",name:"Pipeline de Dados",bg:C.greenT,tags:["Protheus → API","ETL","2 abordagens"],feats:["Opção A: Parser e-mail Protheus","Opção B: Extração banco Protheus","Normalização em PostgreSQL","Modelagem dimensional","API REST (Node.js / FastAPI)","Autenticação JWT + perfis","Engine de alertas","Ciclo 2h espelhando Protheus"]},
  ];
  const profiles=[{abbr:"DIR",name:"Diretoria",desc:"App + Retaguarda · Visão total",bg:C.blueL,color:C.blueT},{abbr:"GER",name:"Gerente",desc:"App · Filtrado por área/cidade",bg:C.greenL,color:C.green},{abbr:"BKO",name:"Backoffice",desc:"Retaguarda · Controle de acessos",bg:C.grayL,color:C.gray}];
  return(
    <div style={{flex:1,overflowY:"auto",padding:24,display:"flex",gap:20,alignItems:"flex-start"}}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:16}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
          {metrics.map(m=><div key={m.label} style={{...card(),padding:"16px 18px",borderTop:`2.5px solid ${m.accent}`}}><div style={lbl}>{m.label}</div><div style={big}>{m.value}</div><div style={sub}>{m.sub}</div></div>)}
        </div>
        <div><ST>Ecossistema de sistemas</ST>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {systems.map(s=>(
              <div key={s.abbr} style={card({overflow:"hidden"})}>
                <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 18px 10px",borderBottom:`0.5px solid ${C.border}`}}>
                  <div style={{width:28,height:28,borderRadius:7,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#fff",flexShrink:0}}>{s.abbr}</div>
                  <div><div style={{fontSize:13,fontWeight:600,color:C.text}}>{s.name}</div><div style={{display:"flex",gap:5,marginTop:3,flexWrap:"wrap"}}>{s.tags.map(t=><span key={t} style={pill(C.bg,C.hint)}>{t}</span>)}</div></div>
                </div>
                <FeatGrid items={s.feats} color={C.hint}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{width:220,minWidth:220,display:"flex",flexDirection:"column",gap:12}}>
        <div style={{...card(),padding:16}}><ST>Perfis de acesso</ST>
          {profiles.map((p,i)=><div key={p.abbr} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"9px 0",borderBottom:i<profiles.length-1?`0.5px solid ${C.border}`:"none"}}><Badge a={p.abbr} bg={p.bg} color={p.color}/><div><div style={{fontSize:12.5,fontWeight:600,color:C.text,marginBottom:2}}>{p.name}</div><div style={{fontSize:11,color:C.hint,lineHeight:1.4}}>{p.desc}</div></div></div>)}
        </div>
        <div style={{...card(),padding:16}}><ST>Abordagem de dados</ST>
          <div style={{padding:"9px 12px",borderRadius:8,border:`0.5px solid ${C.border}`,borderLeft:`2.5px solid ${C.blue}`,marginBottom:8}}><div style={{fontSize:12,fontWeight:600,color:C.text,marginBottom:3}}>Opção A — E-mail Parser</div><div style={{fontSize:11,color:C.hint,lineHeight:1.5}}>Parse do relatório Protheus · MVP rápido · 2–4 semanas</div></div>
          <div style={{padding:"9px 12px",borderRadius:8,border:`0.5px solid ${C.border}`,borderLeft:`2.5px solid ${C.greenT}`,marginBottom:8}}><div style={{fontSize:12,fontWeight:600,color:C.text,marginBottom:3}}>Opção B — Dados Brutos</div><div style={{fontSize:11,color:C.hint,lineHeight:1.5}}>ETL direto Protheus · Escalável · 2 meses full-time</div></div>
          <div style={{padding:"9px 12px",backgroundColor:C.bg,borderRadius:8,fontSize:11,color:C.muted,lineHeight:1.5}}>Recomendação: A para MVP, migrar para B na evolução</div>
        </div>
        <div style={{...card(),padding:16}}><ST>Estimativas</ST>
          {[{l:"Design UX/UI",v:"2m part-time",w:false},{l:"Dados (Op. B)",v:"2m full-time",w:false},{l:"Front + Back",v:"a estimar",w:true},{l:"Infra / DevOps",v:"a estimar",w:true}].map((e,i,arr)=>(
            <div key={e.l} style={{display:"flex",justifyContent:"space-between",fontSize:12,padding:"5px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}><span style={{color:C.muted}}>{e.l}</span><span style={{color:e.w?C.amber:C.text,fontWeight:500}}>{e.v}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════════════
function PageArchitecture(){
  const opts=[
    {color:C.blue,label:"Opção A — Ingestão via E-mail (MVP)",pill:{label:"Recomendada p/ MVP",color:C.blueT,bg:C.blueL},feats:["Protheus gera e-mail com tabela a cada 2h","Microserviço lê e-mail via IMAP / webhook","Parser extrai e normaliza dados da tabela","Armazenamento em PostgreSQL","API REST expõe os dados ao app","Ciclo de atualização: 2h (espelha Protheus)","Implementação: 2–4 semanas","Zero impacto no ambiente Protheus"],pros:["Baixa complexidade","Entrega rápida"],cons:["Formato do e-mail","Granularidade limitada"]},
    {color:C.greenT,label:"Opção B — Extração Direta do Protheus (Evolução)",pill:{label:"Fase 4",color:C.green,bg:C.greenL},feats:["Conector direto: SQL Server / Oracle","Pipeline ETL com orquestração (Airflow)","Staging → transformação → data warehouse","Modelagem dimensional: fatos + dimensões","Dimensões: tempo, produto, gerente, área","API analítica com filtros granulares","Histórico profundo para comparativos","2 meses full-time · Eng. Dados Pleno"],pros:["Granularidade total","Analytics avançado"],cons:["Alta complexidade","Mapeamento tabelas Protheus"]},
  ];
  return(
    <div style={{flex:1,overflowY:"auto",padding:24,display:"flex",gap:20,alignItems:"flex-start"}}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:16}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
          {[{abbr:"ERP",label:"Protheus ERP",sub:"Fonte de dados",bg:C.grayL,color:C.gray},{abbr:"ETL",label:"Pipeline",sub:"Parser / ETL",bg:C.blueL,color:C.blueT},{abbr:"API",label:"Backend API",sub:"Node.js / FastAPI",bg:C.greenL,color:C.green},{abbr:"APP",label:"Clientes",sub:"Web + Mobile",bg:C.purpleL,color:C.purple}].map((s,i)=>(
            <div key={s.abbr} style={{...card(),padding:"14px 16px",display:"flex",flexDirection:"column",gap:6,position:"relative"}}>
              <div style={{...pill(s.bg,s.color),alignSelf:"flex-start"}}>{s.abbr}</div>
              <div style={{fontSize:13,fontWeight:600,color:C.text}}>{s.label}</div>
              <div style={{fontSize:11,color:C.hint}}>{s.sub}</div>
              {i<3&&<div style={{position:"absolute",right:-9,top:"50%",transform:"translateY(-50%)",fontSize:16,color:C.hint}}>›</div>}
            </div>
          ))}
        </div>
        {opts.map(opt=>(
          <div key={opt.label} style={card({overflow:"hidden"})}>
            <div style={{padding:"12px 18px 10px",borderBottom:`0.5px solid ${C.border}`,display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:10,height:10,borderRadius:"50%",background:opt.color,flexShrink:0}}/>
              <span style={{fontSize:13,fontWeight:600,color:C.text,flex:1}}>{opt.label}</span>
              <SP label={opt.pill.label} color={opt.pill.color} bg={opt.pill.bg}/>
            </div>
            <FeatGrid items={opt.feats} color={opt.color}/>
            <div style={{padding:"0 18px 13px",display:"flex",gap:12,flexWrap:"wrap"}}>
              {opt.pros.map(p=><span key={p} style={{fontSize:11,color:C.green}}>✓ {p}</span>)}
              {opt.cons.map(c_=><span key={c_} style={{fontSize:11,color:C.amber}}>⚠ {c_}</span>)}
            </div>
          </div>
        ))}
        <div><ST>Stack tecnológica</ST>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[{c:"App Mobile",t:"React Native",n:"iOS + Android"},{c:"Backend",t:"Node.js + Fastify",n:"ou Python FastAPI"},{c:"Banco",t:"PostgreSQL",n:"Queries analíticas"},{c:"Push",t:"Firebase FCM",n:"Multiplataforma"},{c:"ETL",t:"Airflow + dbt",n:"Orquestração"},{c:"Auth",t:"JWT + OAuth2",n:"Padrão mercado"},{c:"Infra",t:"AWS / GCP",n:"Escalável"},{c:"CI/CD",t:"GitHub Actions",n:"Automação deploys"}].map(s=>(
              <div key={s.c} style={{...card(),padding:"11px 14px",display:"flex",alignItems:"center",gap:12}}><div style={{fontSize:11,color:C.hint,width:90,flexShrink:0}}>{s.c}</div><div><div style={{fontSize:12.5,fontWeight:600,color:C.text}}>{s.t}</div><div style={{fontSize:11,color:C.hint}}>{s.n}</div></div></div>
            ))}
          </div>
        </div>
      </div>
      <div style={{width:220,minWidth:220,display:"flex",flexDirection:"column",gap:12}}>
        <div style={{...card(),padding:16}}><ST>Alertas mapeados</ST>
          {[{n:"Fat. Diário Abaixo",s:"⚠",sc:C.amber,sb:C.amberL},{n:"Alerta de Quinzena",s:"!",sc:C.red,sb:C.redL},{n:"Margem Abaixo Piso",s:"!",sc:C.red,sb:C.redL},{n:"% MC Fora da Faixa",s:"⚠",sc:C.amber,sb:C.amberL},{n:"Meta Mensal em Risco",s:"!",sc:C.red,sb:C.redL},{n:"Atualização de Dados",s:"i",sc:C.blueT,sb:C.blueL}].map((a,i,arr)=>(
            <div key={a.n} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{width:20,height:20,borderRadius:5,background:a.sb,color:a.sc,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0}}>{a.s}</div>
              <div style={{fontSize:12,color:C.text}}>{a.n}</div>
            </div>
          ))}
        </div>
        <div style={{...card(),padding:16}}><ST>KPIs monitorados</ST>
          {["Faturamento s/ IPI","Meta Orç. Mês","Realizado Total Dia","Realizado Total Mês","Diferença do Mês","Dif. Meta Orç. Ano Acum.","% Índice MC","Margem"].map((k,i,arr)=>(
            <div key={k} style={{fontSize:12,color:C.muted,padding:"4px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>{k}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: ROADMAP
// ═══════════════════════════════════════════════════════════════════════════════
function PageRoadmap(){
  const phases=[
    {phase:"Fase 0",name:"Discovery",duration:"1–2 sem.",color:C.gray,colorL:C.grayL,status:"Pendente",sc:C.amber,sb:C.amberL,dep:"Acesso ao time Imdepa",items:["Mapeamento de áreas por gerente (cidade/filial)","Validação do formato de dados Protheus (e-mail)","Avaliação técnica acesso banco Protheus (Op. B)","Definição: Opção A, B ou híbrida","Definição do cloud provider","Refinamento técnico Front + Back + Infra"]},
    {phase:"Fase 1",name:"Design UX/UI",duration:"2 meses",color:C.purple,colorL:C.purpleL,status:"Part-time",sc:C.purple,sb:C.purpleL,dep:"Fase 0 concluída",items:["Wireframes mobile-first — todas as telas","Sistema de design: tokens e componentes","Protótipos navegáveis para validação","Telas: Home, Indústria, Revenda, Alertas","Telas Backoffice: Acessos, Configurações","Aprovação final e handoff para dev"]},
    {phase:"Fase 2",name:"MVP — Backend + App",duration:"A definir",color:C.blue,colorL:C.blueL,status:"A estimar",sc:C.amber,sb:C.amberL,dep:"Design aprovado + Fase 0",items:["Infra cloud + CI/CD + ambientes","Backend: API REST, JWT, gestão de perfis","Pipeline Opção A: parser e-mail + banco","App mobile: Home, Indústria, Revenda","App mobile: login, perfis, navegação","Integração App ↔ API + testes E2E"]},
    {phase:"Fase 3",name:"Notificações & Alertas",duration:"A definir",color:C.amber,colorL:C.amberL,status:"A estimar",sc:C.amber,sb:C.amberL,dep:"MVP estável em produção",items:["Engine de alertas com regras configuráveis","Integração Firebase FCM push notifications","Painel in-app de notificações com histórico","Config. de thresholds via Backoffice","Alertas: Fat. Diário, Quinzena, Margem, % MC","Testes de carga do sistema de alertas"]},
    {phase:"Fase 4",name:"Evolução — Dados Brutos",duration:"2+ meses",color:C.green,colorL:C.greenL,status:"Full-time pleno",sc:C.green,sb:C.greenL,dep:"MVP em produção · Eng. Dados Pleno",items:["Mapeamento de tabelas do banco Protheus","Extração ETL direto do Protheus (Op. B)","Modelagem dimensional no data warehouse","Migração da API para dados brutos","Analytics avançado: histórico e comparativos","Desativação gradual do pipeline Op. A"]},
  ];
  return(
    <div style={{flex:1,overflowY:"auto",padding:24,display:"flex",gap:20,alignItems:"flex-start"}}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:12}}>
        <ST>Fases de entrega</ST>
        {phases.map(p=>(
          <div key={p.phase} style={card({overflow:"hidden"})}>
            <div style={{padding:"12px 18px 10px",borderBottom:`0.5px solid ${C.border}`,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
              <span style={{...pill(p.colorL,p.color),fontSize:11}}>{p.phase}</span>
              <span style={{fontSize:13,fontWeight:600,color:C.text}}>{p.name}</span>
              <span style={{fontSize:12,color:C.hint}}>· {p.duration}</span>
              <div style={{marginLeft:"auto"}}><SP label={p.status} color={p.sc} bg={p.sb}/></div>
            </div>
            <FeatGrid items={p.items} color={p.color}/>
            <div style={{padding:"0 18px 11px"}}><span style={{fontSize:11,color:C.hint}}>Dependência: </span><span style={{fontSize:11,color:C.muted}}>{p.dep}</span></div>
          </div>
        ))}
      </div>
      <div style={{width:220,minWidth:220,display:"flex",flexDirection:"column",gap:12}}>
        <div style={{...card(),padding:16}}><ST>Decisões abertas</ST>
          {[{n:"1",d:"Opção A, B ou híbrida para dados?",who:"Diretoria + Tech"},{n:"2",d:"Mapeamento de áreas por gerente",who:"Operações Imdepa"},{n:"3",d:"Cloud provider: AWS, GCP ou Azure?",who:"TI + DevOps"},{n:"4",d:"React Native ou Flutter?",who:"Tech Lead Front"},{n:"5",d:"Notificações também por e-mail?",who:"Diretoria"},{n:"6",d:"Integração futura outros módulos ERP?",who:"Diretoria"}].map((d,i,arr)=>(
            <div key={d.n} style={{padding:"8px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{display:"flex",gap:7,alignItems:"flex-start"}}><span style={{...pill(C.amberL,C.amber),flexShrink:0,marginTop:1}}>{d.n}</span><span style={{fontSize:12,color:C.text,lineHeight:1.4}}>{d.d}</span></div>
              <div style={{fontSize:11,color:C.hint,marginTop:3,paddingLeft:24}}>{d.who}</div>
            </div>
          ))}
        </div>
        <div style={{...card(),padding:16}}><ST>Riscos principais</ST>
          {[{r:"Formato do e-mail muda",prob:"Média",imp:"Alto"},{r:"Tabelas Protheus não mapeadas",prob:"Alta",imp:"Alto"},{r:"Áreas sem mapeamento",prob:"Alta",imp:"Médio"},{r:"Estimativas subestimadas",prob:"Média",imp:"Alto"},{r:"Baixa adoção diretores",prob:"Baixa",imp:"Alto"}].map((r,i,arr)=>(
            <div key={r.r} style={{padding:"7px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{fontSize:12,color:C.text,marginBottom:4}}>{r.r}</div>
              <div style={{display:"flex",gap:6}}>
                <span style={pill(C.grayL,C.gray)}>Prob: {r.prob}</span>
                <span style={pill(r.imp==="Alto"?C.redL:C.amberL,r.imp==="Alto"?C.red:C.amber)}>Imp: {r.imp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: TEAM
// ═══════════════════════════════════════════════════════════════════════════════
function PageTeam(){
  const roles=[
    {a:"UX",role:"Designer UX/UI",regime:"Part-time",prazo:"2 meses",bg:C.purpleL,color:C.purple,status:"Contratar",sc:C.amber,sb:C.amberL,resp:["Wireframes mobile-first (iOS + Android)","Sistema de design e componentes","Protótipos navegáveis para validação","Handoff para desenvolvimento (Figma)","Telas: Home, Indústria, Revenda, Alertas, BKO"],skills:["Figma","Mobile Design","UX Research","Design System"]},
    {a:"DE",role:"Engenheiro de Dados",regime:"Full-time",prazo:"2 meses",bg:C.greenL,color:C.green,status:"Contratar",sc:C.amber,sb:C.amberL,resp:["Parser automático do e-mail Protheus (Op. A)","Extração ETL banco Protheus (Op. B — Fase 4)","Modelagem dimensional: fatos e dimensões","Pipeline: staging → transformação → DW","Monitoramento e qualidade dos dados"],skills:["Python","SQL","Airflow/Prefect","dbt","PostgreSQL","TOTVS"]},
    {a:"BE",role:"Desenvolvedor Backend",regime:"A definir",prazo:"A estimar",bg:C.blueL,color:C.blueT,status:"A contratar",sc:C.amber,sb:C.amberL,resp:["API REST: KPIs, perfis e alertas","Autenticação JWT e permissões por perfil","Engine de alertas com regras de negócio","Integração com pipeline de dados","Infraestrutura e deploy (cloud + CI/CD)"],skills:["Node.js","REST APIs","JWT","PostgreSQL","Docker","CI/CD"]},
    {a:"FE",role:"Dev Frontend / Mobile",regime:"A definir",prazo:"A estimar",bg:C.blueL,color:C.blueT,status:"A contratar",sc:C.amber,sb:C.amberL,resp:["App React Native: iOS + Android","Telas Home, Indústria, Revenda, Login, Alertas","Integração com API REST do backend","Push notifications via Firebase FCM","Retaguarda web: Backoffice e dashboards"],skills:["React Native","React","TypeScript","Firebase FCM","REST"]},
  ];
  return(
    <div style={{flex:1,overflowY:"auto",padding:24,display:"flex",gap:20,alignItems:"flex-start"}}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:12}}>
        <ST>Composição da equipe</ST>
        {roles.map(r=>(
          <div key={r.role} style={card({overflow:"hidden"})}>
            <div style={{padding:"12px 18px 10px",borderBottom:`0.5px solid ${C.border}`,display:"flex",alignItems:"center",gap:10}}>
              <Badge a={r.a} bg={r.bg} color={r.color}/><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.text}}>{r.role}</div><div style={{fontSize:11,color:C.hint,marginTop:2}}>{r.regime} · {r.prazo}</div></div>
              <SP label={r.status} color={r.sc} bg={r.sb}/>
            </div>
            <FeatGrid items={r.resp} color={r.color}/>
            <div style={{padding:"0 18px 12px",display:"flex",gap:6,flexWrap:"wrap"}}>{r.skills.map(s=><span key={s} style={pill(r.bg,r.color)}>{s}</span>)}</div>
          </div>
        ))}
      </div>
      <div style={{width:220,minWidth:220,display:"flex",flexDirection:"column",gap:12}}>
        <div style={{...card(),padding:16}}><ST>Resumo de esforço</ST>
          {[{role:"Designer UX/UI",regime:"Part-time",prazo:"2m",ok:true},{role:"Eng. de Dados",regime:"Full-time",prazo:"2m",ok:true},{role:"Dev Backend",regime:"—",prazo:"estimar",ok:false},{role:"Dev Frontend/Mobile",regime:"—",prazo:"estimar",ok:false},{role:"QA / Testes",regime:"—",prazo:"estimar",ok:false},{role:"DevOps / Infra",regime:"—",prazo:"estimar",ok:false}].map((e,i,arr)=>(
            <div key={e.role} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{width:18,height:18,borderRadius:4,background:e.ok?C.greenL:C.amberL,color:e.ok?C.green:C.amber,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,flexShrink:0}}>{e.ok?"✓":"?"}</div>
              <div style={{flex:1}}><div style={{fontSize:12,color:C.text}}>{e.role}</div><div style={{fontSize:10.5,color:C.hint}}>{e.regime} · {e.prazo}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: SCOPE
// ═══════════════════════════════════════════════════════════════════════════════
function PageScope(){
  const SC2={MVP:{color:C.blueT,bg:C.blueL},Fase3:{color:C.amber,bg:C.amberL},Fase4:{color:C.green,bg:C.greenL},Futuro:{color:C.gray,bg:C.grayL}};
  const SL={MVP:"MVP",Fase3:"Fase 3",Fase4:"Fase 4",Futuro:"Futuro"};
  const modules=[
    {a:"AU",mod:"Autenticação",bg:C.grayL,color:C.gray,items:[{f:"Login com e-mail e senha",s:"MVP"},{f:"Sessão persistente com JWT",s:"MVP"},{f:"Recuperação de senha por e-mail",s:"MVP"},{f:"Logout manual",s:"MVP"},{f:"Biometria / Face ID",s:"Futuro"}]},
    {a:"HM",mod:"Home — Dashboard Geral",bg:C.blueL,color:C.blueT,items:[{f:"KPIs consolidados (Indústria + Revenda)",s:"MVP"},{f:"Barra de progresso vs meta",s:"MVP"},{f:"Seletor de período Dia/Mês/Ano",s:"MVP"},{f:"Cards de alertas ativos",s:"MVP"},{f:"Bottom navigation (4 abas)",s:"MVP"},{f:"Modo escuro",s:"Futuro"}]},
    {a:"IN",mod:"Módulo Indústria",bg:C.navy,color:"#fff",items:[{f:"KPIs: Meta, Realizado Dia/Mês, Diferença",s:"MVP"},{f:"% Índice MC — Meta, Dia, Mês",s:"MVP"},{f:"Gráfico evolução diária no mês",s:"MVP"},{f:"Filtro por gerente (Diretoria)",s:"MVP"},{f:"Tabs: Dia / Mês / Acumulado",s:"MVP"},{f:"Comparativo histórico meses",s:"Fase4"}]},
    {a:"RV",mod:"Módulo Revenda",bg:C.greenL,color:C.green,items:[{f:"KPIs: Meta, Realizado Dia/Mês, Diferença",s:"MVP"},{f:"% Índice MC — Meta, Dia, Mês",s:"MVP"},{f:"Gráfico evolução diária no mês",s:"MVP"},{f:"Filtro por gerente (Diretoria)",s:"MVP"},{f:"Tabs: Dia / Mês / Acumulado",s:"MVP"},{f:"Comparativo histórico meses",s:"Fase4"}]},
    {a:"NO",mod:"Notificações & Alertas",bg:C.amberL,color:C.amber,items:[{f:"Push notification via FCM",s:"Fase3"},{f:"Painel in-app com histórico",s:"Fase3"},{f:"Alerta: Fat. diário abaixo do necessário",s:"Fase3"},{f:"Alerta: 1ª quinzena < 45% da meta",s:"Fase3"},{f:"Alerta: Margem abaixo de threshold",s:"Fase3"},{f:"Alerta: % MC fora da faixa",s:"Fase3"},{f:"Alerta: Meta mensal em risco",s:"Fase3"},{f:"Thresholds configuráveis via BKO",s:"Fase3"}]},
    {a:"BK",mod:"Backoffice",bg:C.grayL,color:C.gray,items:[{f:"CRUD de usuários",s:"MVP"},{f:"Atribuição de perfil",s:"MVP"},{f:"Vinculação gerente ↔ área/cidade",s:"MVP"},{f:"Log de acessos",s:"MVP"},{f:"Histórico de último acesso",s:"MVP"},{f:"Config. de thresholds",s:"Fase3"}]},
  ];
  const all=modules.flatMap(m=>m.items);
  const counts=[{k:"MVP"},{k:"Fase3"},{k:"Fase4"},{k:"Futuro"}].map(c=>({...c,count:all.filter(i=>i.s===c.k).length}));
  return(
    <div style={{flex:1,overflowY:"auto",padding:24,display:"flex",gap:20,alignItems:"flex-start"}}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:12}}>
        <ST>Funcionalidades por módulo</ST>
        {modules.map(m=>(
          <div key={m.mod} style={card({overflow:"hidden"})}>
            <div style={{padding:"11px 18px 9px",borderBottom:`0.5px solid ${C.border}`,display:"flex",alignItems:"center",gap:10}}>
              <Badge a={m.a} bg={m.bg} color={m.a==="IN"?"#fff":m.color}/><div style={{fontSize:13,fontWeight:600,color:C.text}}>{m.mod}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",padding:"10px 18px 12px",gap:"3px 16px"}}>
              {m.items.map(it=>{const sc=SC2[it.s]||SC2.Futuro;return(
                <div key={it.f} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,padding:"3px 0"}}>
                  <div style={{fontSize:12,color:"#555",display:"flex",gap:6,alignItems:"flex-start",flex:1}}><span style={{width:4,height:4,borderRadius:"50%",background:C.hint,flexShrink:0,marginTop:5}}/>{it.f}</div>
                  <span style={{...pill(sc.bg,sc.color),flexShrink:0}}>{SL[it.s]}</span>
                </div>
              );})}
            </div>
          </div>
        ))}
      </div>
      <div style={{width:220,minWidth:220,display:"flex",flexDirection:"column",gap:12}}>
        <div style={{...card(),padding:16}}><ST>Contagem por fase</ST>
          {counts.map((c,i,arr)=>{const sc=SC2[c.k];return(
            <div key={c.k} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"7px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
              <SP label={SL[c.k]} color={sc.color} bg={sc.bg}/><span style={{fontSize:16,fontWeight:500,color:C.text}}>{c.count}</span>
            </div>
          );})}
          <div style={{marginTop:10,padding:"8px 10px",backgroundColor:C.bg,borderRadius:8,textAlign:"center"}}>
            <div style={{fontSize:11,color:C.hint}}>Total</div><div style={{fontSize:20,fontWeight:500,color:C.text}}>{all.length}</div>
          </div>
        </div>
        <div style={{...card(),padding:16}}><ST>Fora do escopo (v1)</ST>
          {["Integração com estoque Protheus","Integração financeiro ERP","Relatórios PDF / Excel","Multi-tenant","Biometria / Face ID","Modo offline completo"].map((s,i,arr)=>(
            <div key={s} style={{fontSize:12,color:C.hint,padding:"5px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none",display:"flex",gap:6}}><span style={{color:C.red,fontWeight:700,flexShrink:0}}>✕</span>{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROTOTYPE SHELL — wraps mobile frame
// ═══════════════════════════════════════════════════════════════════════════════
function PhoneFrame({children}){
  return(
    <div style={{flex:1,overflowY:"auto",padding:32,display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:C.bg}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:16}}>
        <div style={{fontSize:11,color:C.hint,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600}}>Protótipo Mobile — dados mockados</div>
        {/* Phone shell */}
        <div style={{width:375,backgroundColor:"#0F1923",borderRadius:44,padding:"12px 8px",boxShadow:"0 24px 64px rgba(0,0,0,0.35)"}}>
          {/* Notch */}
          <div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
            <div style={{width:120,height:34,backgroundColor:"#0F1923",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
              <div style={{width:10,height:10,borderRadius:"50%",background:"#1a2530"}}/>
              <div style={{width:50,height:8,borderRadius:4,background:"#1a2530"}}/>
            </div>
          </div>
          {/* Screen */}
          <div style={{borderRadius:36,overflow:"hidden",height:760,backgroundColor:"#F2F3F7",display:"flex",flexDirection:"column"}}>
            {children}
          </div>
          {/* Home indicator */}
          <div style={{display:"flex",justifyContent:"center",marginTop:10}}>
            <div style={{width:120,height:5,backgroundColor:"rgba(255,255,255,0.25)",borderRadius:3}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROTOTYPE: DIRETORIA
// ═══════════════════════════════════════════════════════════════════════════════
const MOCK_DIR = {
  mes: "Junho 2025",
  metaMes: 54215310.78,
  realizadoMes: 33983157.02,
  realizadoDia: 1746639.91,
  diferenca: 20232153.76,
  margemMes: 5636191.42,
  margemMeta: 9460377.88,
  mcMes: 16.58,
  mcMeta: 17.44,
  ind: { metaMes: 16581984.91, realizadoMes: 13621000.00, realizadoDia: 444394.24, mc: 17.2 },
  rev: { metaMes: 37633325.87, realizadoMes: 20362157.02, realizadoDia: 1302245.67, mc: 16.1 },
  evolucao: [62,71,68,75,80,72,69,77,83,78,86,81,74,82,86,88,84,79,83,89,85,87,82,86,84,88,85,90,87,86],
  alertas: [
    {tipo:"!", texto:"Fat. diário abaixo do ritmo necessário para bater meta", cor:"#C0392B", bg:"#FCEBEB"},
    {tipo:"⚠", texto:"Margem mês em 59,6% da meta — atenção", cor:"#BA7517", bg:"#FAEEDA"},
    {tipo:"i", texto:"Dados atualizados há 18 min", cor:"#185FA5", bg:"#E6F1FB"},
  ],
};

function fmt(v){return"R$ "+v.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:0});}
function fmtM(v){return"R$ "+(v/1000000).toFixed(2).replace(".",",")+" M";}
function pct(v,t){return Math.min(100,Math.round((v/t)*100));}

function MiniBar({value,max,color}){
  const p=Math.min(100,Math.round((value/max)*100));
  return(
    <div style={{height:4,backgroundColor:"rgba(0,0,0,0.07)",borderRadius:2,overflow:"hidden",marginTop:4}}>
      <div style={{width:`${p}%`,height:"100%",backgroundColor:color,borderRadius:2,transition:"width 0.4s ease"}}/>
    </div>
  );
}

function PagePrototypeDir(){
  const [tab,setTab]=useState("home");
  const [periodo,setPeriodo]=useState("mes");
  const d=MOCK_DIR;
  const pctFat=pct(d.realizadoMes,d.metaMes);
  const pctMarg=pct(d.margemMes,d.margemMeta);

  // Mini sparkline using inline SVG
  const SparkLine=({data,color})=>{
    const w=290,h=48,pts=data.slice(-14);
    const mn=Math.min(...pts),mx=Math.max(...pts),rng=mx-mn||1;
    const coords=pts.map((v,i)=>`${(i/(pts.length-1))*w},${h-((v-mn)/rng)*(h-8)+4}`).join(" ");
    return(
      <svg width={w} height={h} style={{overflow:"visible"}}>
        <polyline points={coords} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        {pts.map((v,i)=>i===pts.length-1&&<circle key={i} cx={(i/(pts.length-1))*w} cy={h-((v-mn)/rng)*(h-8)+4} r="3.5" fill={color}/>)}
      </svg>
    );
  };

  // Gauge arc SVG
  const Gauge=({pct:p,color,size=88})=>{
    const r=36,cx=size/2,cy=size/2,circ=2*Math.PI*r;
    const dash=(p/100)*circ;
    return(
      <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={6}/>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={6}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"/>
      </svg>
    );
  };

  const TabBtn=({k,label})=>(
    <button onClick={()=>setTab(k)} style={{flex:1,border:"none",padding:"10px 0",backgroundColor:"transparent",fontSize:11,fontWeight:tab===k?600:400,color:tab===k?C.navy:C.hint,borderBottom:`2px solid ${tab===k?C.navy:"transparent"}`,cursor:"pointer",transition:"all 0.15s"}}>
      {label}
    </button>
  );

  const PeriodBtn=({k,label})=>(
    <button onClick={()=>setPeriodo(k)} style={{padding:"4px 10px",borderRadius:6,border:"none",fontSize:10.5,fontWeight:500,backgroundColor:periodo===k?C.navy:"transparent",color:periodo===k?"#fff":C.hint,cursor:"pointer"}}>
      {label}
    </button>
  );

  return(
    <PhoneFrame>
      {/* Status bar */}
      <div style={{backgroundColor:C.navy,padding:"6px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.8)",fontWeight:500}}>09:41</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>▲▲▲ ⬡ 92%</span>
      </div>

      {tab==="home" && (
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          {/* Header */}
          <div style={{background:`linear-gradient(160deg, ${C.navy} 0%, #2E6DA4 100%)`,padding:"20px 20px 28px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
              <div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:2}}>Bom dia,</div>
                <div style={{fontSize:17,fontWeight:700,color:"#fff"}}>Diretoria</div>
              </div>
              <div style={{position:"relative"}}>
                <div style={{width:38,height:38,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🔔</div>
                <div style={{position:"absolute",top:0,right:0,width:10,height:10,borderRadius:"50%",background:"#E24B4A",border:"2px solid #1A3A5C"}}/>
              </div>
            </div>
            {/* Período */}
            <div style={{display:"flex",gap:4,background:"rgba(0,0,0,0.2)",borderRadius:8,padding:3,marginBottom:16}}>
              <PeriodBtn k="dia" label="Hoje"/><PeriodBtn k="mes" label="Mês"/><PeriodBtn k="ano" label="Ano"/>
            </div>
            {/* Big KPI */}
            <div style={{background:"rgba(255,255,255,0.12)",borderRadius:16,padding:"16px 18px"}}>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:4}}>Faturamento Total — {d.mes}</div>
              <div style={{fontSize:28,fontWeight:700,color:"#fff",marginBottom:4}}>{fmtM(d.realizadoMes)}</div>
              <div style={{height:6,backgroundColor:"rgba(255,255,255,0.15)",borderRadius:3,overflow:"hidden",marginBottom:6}}>
                <div style={{width:`${pctFat}%`,height:"100%",background:"linear-gradient(90deg,#5BC87F,#2ECC71)",borderRadius:3}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"rgba(255,255,255,0.6)"}}>
                <span>{pctFat}% da meta</span><span>Meta: {fmtM(d.metaMes)}</span>
              </div>
            </div>
          </div>

          {/* Negative offset cards */}
          <div style={{padding:"0 16px",marginTop:-16}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
              {/* Indústria */}
              <div style={{background:C.white,borderRadius:14,padding:"14px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <span style={{fontSize:10,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em"}}>Indústria</span>
                  <div style={{position:"relative",width:42,height:42}}>
                    <Gauge pct={pct(d.ind.realizadoMes,d.ind.metaMes)} color={C.blue} size={42}/>
                    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:C.navy,transform:"rotate(90deg)"}}>{pct(d.ind.realizadoMes,d.ind.metaMes)}%</div>
                  </div>
                </div>
                <div style={{fontSize:15,fontWeight:700,color:C.text}}>{fmtM(d.ind.realizadoMes)}</div>
                <div style={{fontSize:10,color:C.hint}}>Meta {fmtM(d.ind.metaMes)}</div>
                <MiniBar value={d.ind.realizadoMes} max={d.ind.metaMes} color={C.blue}/>
              </div>
              {/* Revenda */}
              <div style={{background:C.white,borderRadius:14,padding:"14px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <span style={{fontSize:10,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em"}}>Revenda</span>
                  <div style={{position:"relative",width:42,height:42}}>
                    <Gauge pct={pct(d.rev.realizadoMes,d.rev.metaMes)} color={C.greenT} size={42}/>
                    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:C.navy,transform:"rotate(90deg)"}}>{pct(d.rev.realizadoMes,d.rev.metaMes)}%</div>
                  </div>
                </div>
                <div style={{fontSize:15,fontWeight:700,color:C.text}}>{fmtM(d.rev.realizadoMes)}</div>
                <div style={{fontSize:10,color:C.hint}}>Meta {fmtM(d.rev.metaMes)}</div>
                <MiniBar value={d.rev.realizadoMes} max={d.rev.metaMes} color={C.greenT}/>
              </div>
            </div>

            {/* Margem + MC */}
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
              <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:12}}>Margem & % MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
                <div><div style={{fontSize:10,color:C.hint,marginBottom:3}}>Margem Mês</div><div style={{fontSize:14,fontWeight:700,color:C.text}}>{fmtM(d.margemMes)}</div><div style={{fontSize:9,color:pctMarg<70?C.red:C.green}}>{pctMarg}% da meta</div></div>
                <div><div style={{fontSize:10,color:C.hint,marginBottom:3}}>% MC Mês</div><div style={{fontSize:14,fontWeight:700,color:C.text}}>{d.mcMes}%</div><div style={{fontSize:9,color:C.hint}}>Meta {d.mcMeta}%</div></div>
                <div><div style={{fontSize:10,color:C.hint,marginBottom:3}}>Realiz. Dia</div><div style={{fontSize:13,fontWeight:700,color:C.text}}>{(d.realizadoDia/1000).toFixed(0)}K</div><div style={{fontSize:9,color:C.hint}}>hoje</div></div>
              </div>
            </div>

            {/* Sparkline */}
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <span style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em"}}>Evolução — últimos 14 dias</span>
                <span style={{fontSize:10,color:C.hint}}>% da meta</span>
              </div>
              <SparkLine data={d.evolucao} color={C.blue}/>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:9,color:C.hint}}>
                <span>há 14d</span><span>hoje</span>
              </div>
            </div>

            {/* Alertas */}
            {d.alertas.length>0&&(
              <div style={{marginBottom:20}}>
                <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>Alertas ativos</div>
                {d.alertas.map((a,i)=>(
                  <div key={i} style={{background:a.bg,borderRadius:12,padding:"10px 14px",marginBottom:8,display:"flex",gap:10,alignItems:"flex-start"}}>
                    <div style={{width:22,height:22,borderRadius:6,background:a.cor,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0}}>{a.tipo}</div>
                    <div style={{fontSize:12,color:a.cor,lineHeight:1.4,fontWeight:500}}>{a.texto}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {tab==="industria"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          <div style={{background:`linear-gradient(160deg,${C.navy} 0%,#2E6DA4 100%)`,padding:"20px 20px 24px"}}>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:4}}>Módulo</div>
            <div style={{fontSize:20,fontWeight:700,color:"#fff",marginBottom:16}}>Indústria</div>
            <div style={{display:"flex",gap:4,background:"rgba(0,0,0,0.2)",borderRadius:8,padding:3}}>
              <PeriodBtn k="dia" label="Dia"/><PeriodBtn k="mes" label="Mês"/><PeriodBtn k="ano" label="Acum."/>
            </div>
          </div>
          <div style={{padding:"16px 16px 24px",marginTop:-8}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
              {[
                {l:"Meta Orç. Mês",v:fmtM(d.ind.metaMes),sub:"orçado",c:C.navy},
                {l:"Realizado Mês",v:fmtM(d.ind.realizadoMes),sub:`${pct(d.ind.realizadoMes,d.ind.metaMes)}% da meta`,c:C.blue},
                {l:"Realizado Dia",v:fmt(d.ind.realizadoDia),sub:"hoje",c:C.greenT},
                {l:"Diferença Mês",v:fmtM(d.ind.metaMes-d.ind.realizadoMes),sub:"gap para meta",c:C.red},
              ].map(k=>(
                <div key={k.l} style={{background:C.white,borderRadius:14,padding:"14px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                  <div style={{fontSize:10,color:C.hint,marginBottom:4}}>{k.l}</div>
                  <div style={{fontSize:14,fontWeight:700,color:k.c}}>{k.v}</div>
                  <div style={{fontSize:10,color:C.hint,marginTop:2}}>{k.sub}</div>
                </div>
              ))}
            </div>
            {/* % MC */}
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:12,boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>% Índice MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {[{l:"Meta",v:"17,44%",c:C.navy},{l:"Realiz. Dia",v:"17,37%",c:C.blue},{l:"Realiz. Mês",v:`${d.ind.mc}%`,c:C.greenT}].map(m=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"#F8F9FA",borderRadius:10}}>
                    <div style={{fontSize:15,fontWeight:700,color:m.c}}>{m.v}</div>
                    <div style={{fontSize:10,color:C.hint,marginTop:2}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Evolução */}
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>Evolução do mês — Indústria</div>
              <svg width={295} height={80} style={{overflow:"visible"}}>
                {(() => {
                  const data=d.evolucao.slice(0,22).map(v=>v*0.95+Math.random()*4);
                  const mn=Math.min(...data),mx=Math.max(...data),rng=mx-mn||1;
                  const pts=data.map((v,i)=>`${(i/(data.length-1))*295},${70-((v-mn)/rng)*62}`);
                  return <>
                    <polyline points={pts.join(" ")} fill="none" stroke={C.blue} strokeWidth="2" strokeLinejoin="round"/>
                    <circle cx={(data.length-1)/(data.length-1)*295} cy={70-((data[data.length-1]-mn)/rng)*62} r="4" fill={C.blue}/>
                  </>;
                })()}
              </svg>
            </div>
          </div>
        </div>
      )}

      {tab==="revenda"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          <div style={{background:`linear-gradient(160deg,#1E5C2A 0%,#3B8C42 100%)`,padding:"20px 20px 24px"}}>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:4}}>Módulo</div>
            <div style={{fontSize:20,fontWeight:700,color:"#fff",marginBottom:16}}>Revenda</div>
            <div style={{display:"flex",gap:4,background:"rgba(0,0,0,0.2)",borderRadius:8,padding:3}}>
              <PeriodBtn k="dia" label="Dia"/><PeriodBtn k="mes" label="Mês"/><PeriodBtn k="ano" label="Acum."/>
            </div>
          </div>
          <div style={{padding:"16px 16px 24px",marginTop:-8}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
              {[
                {l:"Meta Orç. Mês",v:fmtM(d.rev.metaMes),sub:"orçado",c:C.navy},
                {l:"Realizado Mês",v:fmtM(d.rev.realizadoMes),sub:`${pct(d.rev.realizadoMes,d.rev.metaMes)}% da meta`,c:C.greenT},
                {l:"Realizado Dia",v:fmt(d.rev.realizadoDia),sub:"hoje",c:C.blue},
                {l:"Diferença Mês",v:fmtM(d.rev.metaMes-d.rev.realizadoMes),sub:"gap para meta",c:C.red},
              ].map(k=>(
                <div key={k.l} style={{background:C.white,borderRadius:14,padding:"14px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                  <div style={{fontSize:10,color:C.hint,marginBottom:4}}>{k.l}</div>
                  <div style={{fontSize:14,fontWeight:700,color:k.c}}>{k.v}</div>
                  <div style={{fontSize:10,color:C.hint,marginTop:2}}>{k.sub}</div>
                </div>
              ))}
            </div>
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>% Índice MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {[{l:"Meta",v:"17,44%",c:C.navy},{l:"Realiz. Dia",v:"16,8%",c:C.blue},{l:"Realiz. Mês",v:`${d.rev.mc}%`,c:C.greenT}].map(m=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"#F8F9FA",borderRadius:10}}>
                    <div style={{fontSize:15,fontWeight:700,color:m.c}}>{m.v}</div>
                    <div style={{fontSize:10,color:C.hint,marginTop:2}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab==="alertas"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          <div style={{background:`linear-gradient(160deg,#7A2020 0%,#B83030 100%)`,padding:"20px 20px 24px"}}>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:4}}>Central de</div>
            <div style={{fontSize:20,fontWeight:700,color:"#fff"}}>Alertas</div>
          </div>
          <div style={{padding:"16px",marginTop:-8}}>
            {[
              {tipo:"!",texto:"Faturamento médio diário R$ 1,75M abaixo do necessário (R$ 2,28M/dia para bater meta)",tempo:"Agora",cor:"#C0392B",bg:"#FCEBEB"},
              {tipo:"!",texto:"1ª quinzena: 62,7% da meta. Piso recomendado: 45%. Situação controlada mas monitorar.",tempo:"2h atrás",cor:"#C0392B",bg:"#FCEBEB"},
              {tipo:"⚠",texto:"Margem mês em 59,6% da meta de margem. Revenda puxando para baixo.",tempo:"4h atrás",cor:"#BA7517",bg:"#FAEEDA"},
              {tipo:"⚠",texto:"% MC Indústria (17,2%) abaixo da meta (17,44%). Diferença de 0,24 pp.",tempo:"Ontem",cor:"#BA7517",bg:"#FAEEDA"},
              {tipo:"i",texto:"Dados sincronizados com sucesso — Protheus 08:32",tempo:"08:32",cor:"#185FA5",bg:"#E6F1FB"},
              {tipo:"i",texto:"Dados sincronizados com sucesso — Protheus 06:32",tempo:"06:32",cor:"#185FA5",bg:"#E6F1FB"},
            ].map((a,i)=>(
              <div key={i} style={{background:a.bg,borderRadius:14,padding:"12px 14px",marginBottom:10,display:"flex",gap:10,alignItems:"flex-start",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                <div style={{width:26,height:26,borderRadius:8,background:a.cor,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,flexShrink:0}}>{a.tipo}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,color:a.cor,lineHeight:1.45,fontWeight:500,marginBottom:4}}>{a.texto}</div>
                  <div style={{fontSize:10,color:"rgba(0,0,0,0.35)"}}>{a.tempo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <div style={{backgroundColor:C.white,borderTop:"0.5px solid rgba(0,0,0,0.08)",display:"flex",padding:"8px 0 16px",flexShrink:0}}>
        {[{k:"home",icon:"⊞",label:"Home"},{k:"industria",icon:"🏭",label:"Indústria"},{k:"revenda",icon:"🏪",label:"Revenda"},{k:"alertas",icon:"🔔",label:"Alertas"}].map(n=>(
          <button key={n.k} onClick={()=>setTab(n.k)} style={{flex:1,border:"none",backgroundColor:"transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:3,cursor:"pointer",padding:"4px 0"}}>
            <span style={{fontSize:18}}>{n.icon}</span>
            <span style={{fontSize:9.5,fontWeight:tab===n.k?700:400,color:tab===n.k?C.navy:C.hint}}>{n.label}</span>
            {tab===n.k&&<div style={{width:20,height:2.5,borderRadius:2,background:C.navy}}/>}
          </button>
        ))}
      </div>
    </PhoneFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROTOTYPE: GERENTE
// ═══════════════════════════════════════════════════════════════════════════════
const MOCK_GER = {
  nome: "Carlos Mendes",
  area: "São Paulo - SP",
  segmento: "Indústria",
  mes: "Junho 2025",
  metaMes: 16581984.91,
  realizadoMes: 13621000.00,
  realizadoDia: 444394.24,
  diferenca: 2960984.91,
  difAnoAcum: 3200000.00,
  margemMes: 2340000.00,
  margemMeta: 3040000.00,
  mcMeta: 17.44,
  mcDia: 17.37,
  mcMes: 17.20,
  evolucao: [55,63,70,66,72,68,75,79,74,82,78,84,80,83,86,88,82,87,84,89,85,88,82,86],
};

function PagePrototypeGer(){
  const [tab,setTab]=useState("home");
  const [periodo,setPeriodo]=useState("mes");
  const g=MOCK_GER;
  const pctFat=pct(g.realizadoMes,g.metaMes);
  const pctMarg=pct(g.margemMes,g.margemMeta);

  const SparkLine=({data,color})=>{
    const w=290,h=48,pts=data.slice(-12);
    const mn=Math.min(...pts),mx=Math.max(...pts),rng=mx-mn||1;
    const coords=pts.map((v,i)=>`${(i/(pts.length-1))*w},${h-((v-mn)/rng)*(h-8)+4}`).join(" ");
    return(
      <svg width={w} height={h} style={{overflow:"visible"}}>
        <polyline points={coords} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        {pts.map((v,i)=>i===pts.length-1&&<circle key={i} cx={(i/(pts.length-1))*w} cy={h-((v-mn)/rng)*(h-8)+4} r="3.5" fill={color}/>)}
      </svg>
    );
  };

  const PeriodBtn=({k,label})=>(
    <button onClick={()=>setPeriodo(k)} style={{padding:"4px 10px",borderRadius:6,border:"none",fontSize:10.5,fontWeight:500,backgroundColor:periodo===k?"#fff":"transparent",color:periodo===k?C.navy:C.hint,cursor:"pointer"}}>
      {label}
    </button>
  );

  return(
    <PhoneFrame>
      {/* Status bar */}
      <div style={{backgroundColor:C.navy,padding:"6px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.8)",fontWeight:500}}>09:41</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>▲▲▲ ⬡ 87%</span>
      </div>

      {tab==="home"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          {/* Header */}
          <div style={{background:`linear-gradient(160deg,#1E3A5A 0%,#2A5A8A 100%)`,padding:"20px 20px 28px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
              <div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",marginBottom:2}}>Olá,</div>
                <div style={{fontSize:17,fontWeight:700,color:"#fff"}}>{g.nome}</div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",marginTop:2}}>📍 {g.area} · {g.segmento}</div>
              </div>
              <div style={{width:42,height:42,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700,color:"#fff"}}>CM</div>
            </div>
            {/* Período */}
            <div style={{display:"flex",gap:4,background:"rgba(0,0,0,0.2)",borderRadius:8,padding:3,marginTop:16,marginBottom:16}}>
              <PeriodBtn k="dia" label="Hoje"/><PeriodBtn k="mes" label="Mês"/><PeriodBtn k="ano" label="Ano"/>
            </div>
            {/* Big progress card */}
            <div style={{background:"rgba(255,255,255,0.12)",borderRadius:16,padding:"16px 18px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:6}}>
                <div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:3}}>Faturamento — {g.mes}</div>
                  <div style={{fontSize:26,fontWeight:700,color:"#fff"}}>{fmtM(g.realizadoMes)}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:22,fontWeight:700,color:pctFat>=80?"#5BC87F":"#FFC107"}}>{pctFat}%</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.5)"}}>da meta</div>
                </div>
              </div>
              <div style={{height:6,backgroundColor:"rgba(255,255,255,0.15)",borderRadius:3,overflow:"hidden",marginBottom:6}}>
                <div style={{width:`${pctFat}%`,height:"100%",background:pctFat>=80?"linear-gradient(90deg,#5BC87F,#2ECC71)":"linear-gradient(90deg,#FFC107,#FF9800)",borderRadius:3}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"rgba(255,255,255,0.55)"}}>
                <span>Falta: {fmtM(g.diferenca)}</span>
                <span>Meta: {fmtM(g.metaMes)}</span>
              </div>
            </div>
          </div>

          <div style={{padding:"0 16px",marginTop:-14}}>
            {/* 4 KPI cards */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
              {[
                {l:"Realiz. Dia",v:fmt(g.realizadoDia),sub:"hoje",c:C.blue,bg:"#EBF4FF"},
                {l:"Diferença Mês",v:fmtM(g.diferenca),sub:"gap para meta",c:C.red,bg:"#FFF0F0"},
                {l:"Margem Mês",v:fmtM(g.margemMes),sub:`${pctMarg}% da meta`,c:C.greenT,bg:"#F0FAF0"},
                {l:"Dif. Ano Acum.",v:fmtM(g.difAnoAcum),sub:"ano a ano",c:C.amber,bg:"#FFFAF0"},
              ].map(k=>(
                <div key={k.l} style={{background:C.white,borderRadius:14,padding:"13px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",borderLeft:`3px solid ${k.c}`}}>
                  <div style={{fontSize:10,color:C.hint,marginBottom:4}}>{k.l}</div>
                  <div style={{fontSize:13,fontWeight:700,color:k.c}}>{k.v}</div>
                  <div style={{fontSize:10,color:C.hint,marginTop:2}}>{k.sub}</div>
                </div>
              ))}
            </div>

            {/* % MC */}
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:12,boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>% Índice MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {[{l:"Meta",v:`${g.mcMeta}%`,c:C.navy,ok:true},{l:"Realiz. Dia",v:`${g.mcDia}%`,c:g.mcDia>=g.mcMeta?C.green:C.amber,ok:g.mcDia>=g.mcMeta},{l:"Realiz. Mês",v:`${g.mcMes}%`,c:g.mcMes>=g.mcMeta?C.green:C.amber,ok:g.mcMes>=g.mcMeta}].map(m=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:m.ok?"#F0FAF0":"#FFF9F0",borderRadius:10}}>
                    <div style={{fontSize:16,fontWeight:700,color:m.c}}>{m.v}</div>
                    <div style={{fontSize:9.5,color:C.hint,marginTop:2}}>{m.l}</div>
                    <div style={{fontSize:9,color:m.ok?C.green:C.amber}}>{m.ok?"✓ ok":"▼ abaixo"}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sparkline */}
            <div style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <span style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.05em"}}>Ritmo do mês</span>
                <span style={{fontSize:10,color:C.hint}}>% meta acumulada</span>
              </div>
              <SparkLine data={g.evolucao} color={C.blue}/>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:9,color:C.hint}}>
                <span>início do mês</span><span>hoje</span>
              </div>
            </div>

            {/* Alerta da quinzena */}
            <div style={{background:"#FFF9F0",borderRadius:14,padding:"12px 14px",marginBottom:20,display:"flex",gap:10,alignItems:"flex-start",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
              <div style={{width:26,height:26,borderRadius:8,background:C.amber,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,flexShrink:0}}>⚠</div>
              <div>
                <div style={{fontSize:12,color:C.amber,lineHeight:1.4,fontWeight:600}}>Ritmo diário médio: R$ 444K</div>
                <div style={{fontSize:11,color:"#8B5E20",lineHeight:1.4,marginTop:2}}>Para bater a meta precisa de R$ 694K/dia nos {14} dias restantes</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab==="evolucao"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          <div style={{background:`linear-gradient(160deg,#1E3A5A 0%,#2A5A8A 100%)`,padding:"20px 20px 24px"}}>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:4}}>Acompanhamento</div>
            <div style={{fontSize:20,fontWeight:700,color:"#fff"}}>Evolução Mensal</div>
          </div>
          <div style={{padding:"16px",marginTop:-8}}>
            {/* Bar chart mockado */}
            {[
              {mes:"Jan",v:94,meta:100},{mes:"Fev",v:88,meta:100},{mes:"Mar",v:102,meta:100},
              {mes:"Abr",v:97,meta:100},{mes:"Mai",v:91,meta:100},{mes:"Jun",v:82,meta:100,atual:true},
            ].map(m=>(
              <div key={m.mes} style={{background:C.white,borderRadius:12,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <span style={{fontSize:12,fontWeight:m.atual?700:500,color:m.atual?C.navy:C.text}}>{m.mes} 2025 {m.atual&&<span style={pill(C.blueL,C.blueT)}>atual</span>}</span>
                  <span style={{fontSize:13,fontWeight:700,color:m.v>=100?C.green:m.v>=80?C.amber:C.red}}>{m.v}%</span>
                </div>
                <div style={{height:8,backgroundColor:"#F0F0F0",borderRadius:4,overflow:"hidden"}}>
                  <div style={{width:`${m.v}%`,height:"100%",background:m.v>=100?"linear-gradient(90deg,#3B8C42,#5BC87F)":m.v>=80?"linear-gradient(90deg,#BA7517,#EFAB3A)":"linear-gradient(90deg,#A32D2D,#E24B4A)",borderRadius:4}}/>
                </div>
                <div style={{fontSize:10,color:C.hint,marginTop:4}}>
                  {m.v>=100?`+${m.v-100}% acima da meta`:`Faltou ${100-m.v}% para a meta`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab==="alertas"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          <div style={{background:`linear-gradient(160deg,#5C2A0A 0%,#A34A10 100%)`,padding:"20px 20px 24px"}}>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:4}}>Seus</div>
            <div style={{fontSize:20,fontWeight:700,color:"#fff"}}>Alertas</div>
          </div>
          <div style={{padding:"16px",marginTop:-8}}>
            {[
              {tipo:"!",texto:"Ritmo diário (R$ 444K) insuficiente. Precisa de R$ 694K/dia nos 14 dias restantes.",tempo:"Agora",cor:"#C0392B",bg:"#FCEBEB"},
              {tipo:"⚠",texto:"% MC do mês (17,2%) abaixo da meta (17,44%). Atenção na rentabilidade.",tempo:"2h atrás",cor:"#BA7517",bg:"#FAEEDA"},
              {tipo:"⚠",texto:"Margem mês em 76,9% da meta de margem. Acompanhar ritmo da segunda quinzena.",tempo:"4h atrás",cor:"#BA7517",bg:"#FAEEDA"},
              {tipo:"i",texto:"Dados atualizados — Protheus 08:32",tempo:"08:32",cor:"#185FA5",bg:"#E6F1FB"},
            ].map((a,i)=>(
              <div key={i} style={{background:a.bg,borderRadius:14,padding:"12px 14px",marginBottom:10,display:"flex",gap:10,alignItems:"flex-start",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                <div style={{width:26,height:26,borderRadius:8,background:a.cor,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,flexShrink:0}}>{a.tipo}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,color:a.cor,lineHeight:1.45,fontWeight:500,marginBottom:4}}>{a.texto}</div>
                  <div style={{fontSize:10,color:"rgba(0,0,0,0.35)"}}>{a.tempo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab==="perfil"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F3F7"}}>
          <div style={{background:`linear-gradient(160deg,#1E3A5A 0%,#2A5A8A 100%)`,padding:"28px 20px 48px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:700,color:"#fff",marginBottom:10}}>CM</div>
            <div style={{fontSize:18,fontWeight:700,color:"#fff",marginBottom:4}}>{g.nome}</div>
            <div style={pill("rgba(255,255,255,0.2)","rgba(255,255,255,0.9)")}>Gerente · Indústria</div>
          </div>
          <div style={{padding:"0 16px",marginTop:-20}}>
            {[{l:"Área",v:g.area},{l:"Segmento",v:g.segmento},{l:"Perfil",v:"Gerente"},{l:"Último acesso",v:"Hoje, 09:41"},{l:"Notificações",v:"Ativas · Push + In-app"}].map((r,i,arr)=>(
              <div key={r.l} style={{background:C.white,borderRadius:14,padding:"14px 16px",marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:12,color:C.hint}}>{r.l}</span>
                <span style={{fontSize:12,fontWeight:500,color:C.text}}>{r.v}</span>
              </div>
            ))}
            <button style={{width:"100%",marginTop:8,padding:"14px",border:"none",borderRadius:14,background:"#FFF0F0",color:C.red,fontSize:13,fontWeight:600,cursor:"pointer"}}>Sair da conta</button>
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <div style={{backgroundColor:C.white,borderTop:"0.5px solid rgba(0,0,0,0.08)",display:"flex",padding:"8px 0 16px",flexShrink:0}}>
        {[{k:"home",icon:"⊞",label:"Home"},{k:"evolucao",icon:"📈",label:"Evolução"},{k:"alertas",icon:"🔔",label:"Alertas"},{k:"perfil",icon:"👤",label:"Perfil"}].map(n=>(
          <button key={n.k} onClick={()=>setTab(n.k)} style={{flex:1,border:"none",backgroundColor:"transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:3,cursor:"pointer",padding:"4px 0"}}>
            <span style={{fontSize:18}}>{n.icon}</span>
            <span style={{fontSize:9.5,fontWeight:tab===n.k?700:400,color:tab===n.k?C.navy:C.hint}}>{n.label}</span>
            {tab===n.k&&<div style={{width:20,height:2.5,borderRadius:2,background:C.navy}}/>}
          </button>
        ))}
      </div>
    </PhoneFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════════════════════════
export default function ImdepaApp(){
  const [active,setActive]=useState("overview");
  const pages={
    overview:<PageOverview/>,
    architecture:<PageArchitecture/>,
    roadmap:<PageRoadmap/>,
    team:<PageTeam/>,
    scope:<PageScope/>,
    proto_dir:<PagePrototypeDir/>,
    proto_ger:<PagePrototypeGer/>,
  };
  return(
    <div style={{display:"flex",height:"100vh",minHeight:600,backgroundColor:C.bg,fontFamily:"'DM Sans','Segoe UI',sans-serif",fontSize:13,overflow:"hidden"}}>
      <Sidebar active={active} setActive={setActive}/>
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <Topbar active={active}/>
        {pages[active]}
      </div>
    </div>
  );
}
