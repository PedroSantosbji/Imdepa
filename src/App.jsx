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
  {section:"Fase 1 — MVP",items:[{key:"overview",label:"Visão Geral"},{key:"architecture",label:"Arquitetura"},{key:"roadmap",label:"Roadmap"},{key:"team",label:"Equipe"}]},
  {section:"Fase 1 — Protótipo",items:[{key:"proto_dir",label:"Diretoria"},{key:"proto_ger",label:"Gerente"}]},
  {section:"Próximas Fases",items:[{key:"futuro",label:"Fases 2, 3 e 4"}]},
];
const PAGE_LABELS={overview:"Fase 1 · Visão Geral",architecture:"Fase 1 · Arquitetura",roadmap:"Fase 1 · Roadmap",team:"Fase 1 · Equipe",proto_dir:"Fase 1 · Protótipo Diretoria",proto_ger:"Fase 1 · Protótipo Gerente",futuro:"Próximas Fases · F2, F3 e F4"};

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
  const metrics=[
    {label:"Sistemas",value:"3",sub:"App Mobile · Backoffice · Backend",accent:C.blue},
    {label:"Prazo Estimado",value:"4 meses",sub:"M1–M4 · Backend + App + Backoffice",accent:C.purple},
    {label:"Horas Estimadas",value:"≈ 1.063h",sub:"850h base + 25% margem de segurança",accent:C.green},
  ];
  const systems=[
    {
      abbr:"APP", name:"App Mobile", bg:C.navy,
      tags:["React Native","iOS + Android","Diretoria","Gerente"],
      desc:"O app entrega exatamente os dados da tabela de faturamento que a equipe já recebe hoje por e-mail — só que em uma interface amigável, sempre atualizada e acessível pelo celular. Nada novo é inventado: Faturamento s/ IPI, Meta, % MC, Margem, Realizado do Dia, Diferença — tudo que já é acompanhado, agora em um app organizado por perfil, com alertas automáticos quando algo sai do ritmo.",
      feats:[
        "Autenticação e permissões por perfil",
        "Dashboards — KPIs Indústria e Revenda",
        "Listagem de dados por gerente e área",
        "Integração com backend via API REST",
        "Seletor de período Dia / Mês / Ano",
        "Central de alertas com severidade",
      ],
    },
    {
      abbr:"BKO", name:"Backoffice", bg:C.purple,
      tags:["NextJS","Web","Gestão de acessos"],
      desc:"Painel web interno para quem administra o sistema. Permite criar e desativar usuários, definir qual perfil cada pessoa tem (Diretoria ou Gerente), vincular cada gerente às suas áreas de responsabilidade, e visualizar logs de acesso.",
      feats:[
        "Gerenciamento de usuários",
        "Gerenciamento de permissões por perfil",
        "Logs de acessos e atividades",
      ],
    },
    {
      abbr:"API", name:"Backend & API", bg:C.greenT,
      tags:["NestJS","PostgreSQL","DevOps"],
      desc:"Camada técnica que sustenta o app e o backoffice. Autentica usuários, expõe os dados via API REST, gerencia permissões por perfil (RBAC), realiza a migração das queries ADVPL do Protheus para PostgreSQL e cuida de toda a infraestrutura de produção.",
      feats:[
        "Autenticação e RBAC",
        "Dashboards — endpoints e agregações",
        "Endpoints de consulta de dados",
        "Migração de Queries ADVPL → PostgreSQL",
        "Auditoria e logs",
        "Infraestrutura / DevOps",
      ],
    },
  ];
  const profiles=[
    {abbr:"DIR",name:"Diretoria",  desc:"App Mobile · Visão total de todas as áreas",    bg:C.blueL,  color:C.blueT},
    {abbr:"COM",name:"Comercial",  desc:"App Mobile · Filtrado pela sua área/cidade",     bg:C.greenL, color:C.green},
    {abbr:"BKO",name:"Backoffice", desc:"Backoffice Web · Gestão de acessos",             bg:C.purpleL,color:C.purple},
  ];
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
                <div style={{padding:"12px 18px",borderBottom:`0.5px solid ${C.border}`,fontSize:12,color:C.muted,lineHeight:1.7,borderLeft:`3px solid ${s.bg}`}}>
                  {s.desc}
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
        <div style={{...card(),padding:16}}><ST>Estimativas de horas</ST>
          {[
            {l:"Backend (NestJS)",      v:"438h",     sub:"350h + 25% margem"},
            {l:"App Mobile (React Native)", v:"500h", sub:"400h + 25% margem"},
            {l:"Backoffice (NextJS)",   v:"125h",     sub:"100h + 25% margem"},
            {l:"Total com margem",      v:"≈ 1.063h", sub:"850h base + 213h (25%)"},
          ].map((e,i,arr)=>(
            <div key={e.l} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",fontSize:12,padding:"6px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
              <div><span style={{color:C.muted}}>{e.l}</span>{e.sub&&<div style={{fontSize:10,color:C.hint,marginTop:1}}>{e.sub}</div>}</div>
              <span style={{color:i===arr.length-1?C.text:C.muted,fontWeight:i===arr.length-1?700:500,flexShrink:0,marginLeft:8}}>{e.v}</span>
            </div>
          ))}
        </div>
        <div style={{...card(),padding:16}}><ST>Equipe de desenvolvimento</ST>
          {[
            {l:"Gestor de Projetos",    v:"40h/mês · M1–M4"},
            {l:"Designer UX/UI",        v:"Part-time · M1–M2"},
            {l:"Eng. de Dados",         v:"Full-time · M1–M2"},
            {l:"Backend Pleno",         v:"Full-time · M1–M4"},
            {l:"Front End/Mobile Pleno",v:"Full-time · M1–M4"},
          ].map((e,i,arr)=>(
            <div key={e.l} style={{display:"flex",justifyContent:"space-between",fontSize:12,padding:"5px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
              <span style={{color:C.muted}}>{e.l}</span>
              <span style={{color:C.text,fontWeight:500}}>{e.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: ARCHITECTURE — sitemap interativo
// ═══════════════════════════════════════════════════════════════════════════════
function PageArchitecture(){
  const [selected,setSelected]=useState(null);

  const SYSTEMS={
    pwa:{
      abbr:"APP", label:"App Mobile", sub:"React Native · iOS + Android",
      color:"#1A3A5C", colorL:"#D0DCE8",
      profiles:["DIR · Diretoria","COM · Comercial"],
      desc:"Aplicativo mobile para diretoria e equipe comercial acompanharem a performance em tempo real. Construído em React Native para rodar nativamente em iOS e Android.",
      screens:[
        {p:"Diretoria",items:["Login","Home — KPIs totais (Indústria + Revenda)","Módulo Indústria — faturamento, margem, % MC","Módulo Revenda — faturamento, margem, % MC","Filtros por gerente e área","Central de alertas","Seletor de período Dia / Mês / Ano"]},
        {p:"Comercial",items:["Login","Home — KPIs da sua área","Módulo da sua área (Indústria ou Revenda)","Filtros dentro da sua área/cidade","Central de alertas da área"]},
      ],
    },
    backoffice:{
      abbr:"BKO", label:"Backoffice", sub:"NextJS · Web · Gestão de acessos",
      color:"#534AB7", colorL:"#EEEDFE",
      profiles:["BKO · Backoffice"],
      desc:"Interface web de administração construída em NextJS. Gerencia usuários, perfis e acessos. Não tem acesso a dados comerciais.",
      screens:[
        {p:"Backoffice",items:["Login","Gerenciamento de usuários","Gerenciamento de permissões por perfil","Logs de acessos e atividades"]},
      ],
    },
    pipeline:{
      abbr:"API", label:"Backend & API", sub:"NestJS · PostgreSQL · DevOps",
      color:"#3B6D11", colorL:"#EAF3DE",
      profiles:["Backend","Eng. de Dados"],
      desc:"Backend construído em NestJS com PostgreSQL. Autentica usuários, expõe dados via API REST, migra queries ADVPL do Protheus para PostgreSQL e cuida de toda a infraestrutura.",
      screens:[
        {p:"Backend",items:["Autenticação e RBAC","Dashboards — endpoints e agregações","Endpoints de consulta de dados","Auditoria e logs","Infraestrutura / DevOps"]},
        {p:"Eng. de Dados",items:["Extração direta do banco Protheus","Migração de Queries ADVPL → PostgreSQL","Transformação e carga no banco analítico","Disponibilização via API"]},
      ],
    },
  };

  const sel=selected?SYSTEMS[selected]:null;

  // Connector line helper
  function VLine(){
    return <div style={{width:1,height:32,backgroundColor:"rgba(0,0,0,0.12)",margin:"0 auto"}}/>;
  }
  function HLine(){
    return <div style={{flex:1,height:1,backgroundColor:"rgba(0,0,0,0.12)",marginTop:16}}/>;
  }

  return(
    <div style={{flex:1,overflowY:"auto",backgroundColor:C.bg}}>
      <div style={{padding:"10px 24px 0",backgroundColor:C.white,borderBottom:`0.5px solid ${C.border}`}}>
        <div style={{fontSize:11,color:C.hint,marginBottom:8}}>Arquitetura / Visão de sistemas e perfis de acesso</div>
      </div>

      <div style={{padding:"24px 40px 32px",display:"flex",flexDirection:"column",alignItems:"center"}}>

        {/* Hint */}
        <div style={{fontSize:12,color:C.hint,marginBottom:28,letterSpacing:"0.02em"}}>
          Clique em qualquer sistema para ver detalhes e funcionalidades
        </div>

        {/* Top node — Pipeline (fonte de dados) */}
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:900}}>

          {/* Pipeline node */}
          <SitemapNode sys={SYSTEMS.pipeline} id="pipeline" selected={selected} onSelect={setSelected}/>
          <VLine/>

          {/* API labels branching */}
          <div style={{display:"flex",alignItems:"center",width:"100%",gap:0}}>
            <HLine/>
            <div style={{...pill(C.greenL,C.green),margin:"0 8px",flexShrink:0}}>API</div>
            <div style={{width:80}}/>
            <div style={{...pill(C.greenL,C.green),margin:"0 8px",flexShrink:0}}>API</div>
            <HLine/>
          </div>

          {/* Bottom row — App + Backoffice */}
          <div style={{display:"flex",gap:40,marginTop:0,width:"100%",justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:1,maxWidth:380}}>
              <VLine/>
              <SitemapNode sys={SYSTEMS.pwa} id="pwa" selected={selected} onSelect={setSelected}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:1,maxWidth:380}}>
              <VLine/>
              <SitemapNode sys={SYSTEMS.backoffice} id="backoffice" selected={selected} onSelect={setSelected}/>
            </div>
          </div>
        </div>

        {/* Detail panel — shown when a node is selected */}
        {sel&&(
          <div style={{marginTop:32,width:"100%",maxWidth:900,...card({overflow:"hidden"})}}>
            <div style={{padding:"14px 20px",borderBottom:`0.5px solid ${C.border}`,display:"flex",alignItems:"center",gap:12,backgroundColor:`${sel.colorL}66`}}>
              <div style={{width:32,height:32,borderRadius:8,background:sel.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#fff",flexShrink:0}}>{sel.abbr}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:600,color:C.text}}>{sel.label}</div>
                <div style={{fontSize:11,color:C.hint,marginTop:1}}>{sel.sub}</div>
              </div>
              <button onClick={()=>setSelected(null)} style={{border:"none",background:"rgba(0,0,0,0.06)",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:11,color:C.muted}}>fechar</button>
            </div>
            <div style={{padding:"16px 20px",display:"grid",gridTemplateColumns:"2fr 1fr",gap:20}}>
              <div>
                <div style={{fontSize:11,color:C.hint,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:12}}>Telas e funcionalidades por perfil</div>
                <div style={{display:"flex",flexDirection:"column",gap:12}}>
                  {sel.screens.map(sc=>(
                    <div key={sc.p}>
                      <div style={{fontSize:11,fontWeight:600,color:sel.color,marginBottom:6}}>{sc.p}</div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px 16px"}}>
                        {sc.items.map(it=>(
                          <div key={it} style={{fontSize:12,color:"#555",display:"flex",gap:6,alignItems:"flex-start",padding:"2px 0"}}>
                            <span style={{width:4,height:4,borderRadius:"50%",background:sel.color,flexShrink:0,marginTop:5}}/>
                            {it}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{fontSize:11,color:C.hint,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:12}}>Perfis de acesso</div>
                {sel.profiles.map(p=>(
                  <div key={p} style={{padding:"6px 10px",background:`${sel.colorL}88`,borderRadius:6,marginBottom:6,fontSize:12,color:sel.color,fontWeight:500}}>{p}</div>
                ))}
                <div style={{marginTop:14,fontSize:12,color:C.muted,lineHeight:1.6}}>{sel.desc}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function SitemapNode({sys,id,selected,onSelect}){
  const isSelected=selected===id;
  return(
    <div onClick={()=>onSelect(isSelected?null:id)}
      style={{
        width:"100%",maxWidth:380,
        backgroundColor:C.white,
        border:`1.5px solid ${isSelected?sys.color:C.border}`,
        borderRadius:12,
        padding:"16px 18px",
        cursor:"pointer",
        transition:"border-color 0.15s, box-shadow 0.15s",
        boxShadow:isSelected?`0 0 0 3px ${sys.colorL}`:"none",
        position:"relative",
      }}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
        <div style={{width:32,height:32,borderRadius:8,background:sys.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#fff",flexShrink:0}}>{sys.abbr}</div>
        <div>
          <div style={{fontSize:14,fontWeight:600,color:C.text}}>{sys.label}</div>
          <div style={{fontSize:11,color:C.hint,marginTop:1}}>{sys.sub}</div>
        </div>
        <div style={{marginLeft:"auto",width:22,height:22,borderRadius:"50%",border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:C.hint,flexShrink:0}}>{isSelected?"−":"+"}</div>
      </div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
        {sys.profiles.map(p=>(
          <span key={p} style={{fontSize:10.5,padding:"3px 8px",borderRadius:20,backgroundColor:`${sys.colorL}`,color:sys.color,fontWeight:500,border:`0.5px solid ${sys.color}33`}}>{p}</span>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: ROADMAP — Gantt style
// ═══════════════════════════════════════════════════════════════════════════════
function PageRoadmap(){
  const SYS = {
    design:  { label:"Design UX/UI",              color:"#534AB7", bg:"#EEEDFE" },
    dados:   { label:"Eng. Dados / Protheus",      color:"#3B6D11", bg:"#EAF3DE" },
    backend: { label:"Backend — NestJS",           color:"#185FA5", bg:"#E6F1FB" },
    infra:   { label:"Infra / DevOps",             color:"#5F5E5A", bg:"#F1EFE8" },
    app:     { label:"App Mobile — React Native",  color:"#1A3A5C", bg:"#D0DCE8" },
    bko:     { label:"Backoffice — NextJS",        color:"#534AB7", bg:"#EEEDFE" },
  };

  const MONTHS = [
    { id:"M1", fase:"Autenticação\n+ Infra" },
    { id:"M2", fase:"Dashboards\n+ Queries" },
    { id:"M3", fase:"Dashboards\n+ Dados" },
    { id:"M4", fase:"Logs\n+ DevOps" },
  ];

  const MARCOS = [
    { at:"M1", title:"Auth + Infra prontos",      desc:"RBAC, autenticação, infra cloud configurada e início da migração ADVPL → PostgreSQL.", color:"#185FA5" },
    { at:"M2", title:"Design aprovado + Dev pleno",desc:"Design entrega handoff. Dashboards e endpoints em desenvolvimento no backend e app.", color:"#534AB7" },
    { at:"M3", title:"Dashboards operacionais",   desc:"Dashboards funcionando no app e no backend. Dados do Protheus disponíveis via API.", color:"#3B6D11" },
    { at:"M4", title:"MVP — Go-live",             desc:"App + Backoffice em produção. Logs, auditoria e DevOps completos.", color:"#1A3A5C" },
  ];

  const GROUPS = [
    {
      group:"DESIGN UX/UI", sys:"design", abbr:"DS",
      rows:[
        { label:"Prototipação das telas — todas as telas do app",   sys:"design",  start:0, span:2, ml:"M2" },
        { label:"Sistema de design & componentes",                   sys:"design",  start:0, span:1, ml:"M1" },
        { label:"Validação dos protótipos com diretoria",            sys:"design",  start:0, span:2, ml:"M2" },
        { label:"Handoff completo para desenvolvimento",             sys:"design",  start:1, span:1, ml:"M2" },
      ],
    },
    {
      group:"ENG. DE DADOS — PROTHEUS", sys:"dados", abbr:"DE",
      rows:[
        { label:"Extração dos dados diretamente do Protheus",        sys:"dados",   start:0, span:2, ml:"M2" },
        { label:"Transformação e carga no banco analítico",          sys:"dados",   start:0, span:2, ml:"M2" },
      ],
    },
    {
      group:"BACKEND — NestJS + PostgreSQL", sys:"backend", abbr:"BE",
      rows:[
        { label:"Autenticação e RBAC",                               sys:"backend", start:0, span:1, ml:"M1" },
        { label:"Dashboards — endpoints e agregações",               sys:"backend", start:1, span:2, ml:"M3" },
        { label:"Endpoints de consulta de dados",                    sys:"backend", start:1, span:2, ml:"M3" },
        { label:"Auditoria e logs",                                  sys:"backend", start:2, span:2, ml:"M4" },
        { label:"Infraestrutura / DevOps",                           sys:"infra",   start:0, span:4, ml:"M4" },
      ],
    },
    {
      group:"APP MOBILE — React Native", sys:"app", abbr:"MB",
      rows:[
        { label:"Autenticação e permissões",                         sys:"app",     start:0, span:1, ml:"M1" },
        { label:"Dashboards — telas e visualizações",                sys:"app",     start:0, span:3, ml:"M3" },
        { label:"Listagem de dados",                                 sys:"app",     start:1, span:2, ml:"M3" },
        { label:"Integração com backend",                            sys:"app",     start:0, span:3, ml:"M3" },
      ],
    },
    {
      group:"BACKOFFICE — NextJS", sys:"bko", abbr:"BKO",
      rows:[
        { label:"Gerenciamento de permissões",                       sys:"bko",     start:1, span:2, ml:"M3" },
        { label:"Gerenciamento de usuários",                         sys:"bko",     start:1, span:3, ml:"M4" },
        { label:"Logs de acessos e atividades",                      sys:"bko",     start:3, span:1, ml:"M4" },
      ],
    },
  ];

  const TOTAL_M = 4;
  const COL_W = 148;
  const LABEL_W = 240;

  const barColor = (sys) => SYS[sys]?.color || C.navy;
  const barBg    = (sys) => SYS[sys]?.bg    || C.blueL;

  return(
    <div style={{flex:1,overflowY:"auto",backgroundColor:C.bg}}>
      {/* Sub-header */}
      <div style={{padding:"10px 24px 0",borderBottom:`0.5px solid ${C.border}`,backgroundColor:C.white}}>
        <div style={{fontSize:11,color:C.hint,marginBottom:8}}>
          Roadmap / Feature by feature · 4 meses · design M1–M2 · Eng. Dados M1–M2 · Backend M1–M4 · App Mobile M1–M3 · Backoffice M2–M4 · Go-live M4
        </div>
      </div>

      <div style={{padding:"20px 24px 32px"}}>

        {/* Marcos de entrega */}
        <div style={{marginBottom:20}}>
          <div style={{fontSize:11,fontWeight:600,color:C.text,marginBottom:12}}>Marcos de Entrega</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
            {MARCOS.map(m=>(
              <div key={m.at} style={{backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:10,padding:"14px 16px",borderTop:`2.5px solid ${m.color}`}}>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
                  <div style={{width:8,height:8,borderRadius:"50%",background:m.color,flexShrink:0}}/>
                  <span style={{fontSize:10,fontWeight:700,color:m.color,textTransform:"uppercase",letterSpacing:"0.05em"}}>{m.at}</span>
                </div>
                <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:4}}>{m.title}</div>
                <div style={{fontSize:11,color:C.hint,lineHeight:1.4}}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Legenda */}
        <div style={{backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:10,padding:"10px 16px",marginBottom:20,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
          {Object.entries(SYS).map(([k,v])=>(
            <div key={k} style={{display:"flex",alignItems:"center",gap:5,marginRight:8}}>
              <div style={{width:10,height:10,borderRadius:2,backgroundColor:v.color,flexShrink:0}}/>
              <span style={{fontSize:11,color:C.muted}}>{v.label}</span>
            </div>
          ))}
        </div>

        {/* Gantt table */}
        <div style={{backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:12,overflow:"hidden"}}>
        <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
        <div style={{minWidth:LABEL_W+MONTHS.length*COL_W}}>

          {/* Header row: FEATURE label + month columns */}
          <div style={{display:"flex",borderBottom:`0.5px solid ${C.border}`,backgroundColor:"#FAFAFA"}}>
            <div style={{width:LABEL_W,minWidth:LABEL_W,padding:"8px 16px",fontSize:10,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",borderRight:`0.5px solid ${C.border}`,flexShrink:0,position:"sticky",left:0,backgroundColor:"#FAFAFA",zIndex:2}}>
              FEATURE
            </div>
            {MONTHS.map((m,i)=>(
              <div key={m.id} style={{width:COL_W,minWidth:COL_W,borderRight:i<MONTHS.length-1?`0.5px solid ${C.border}`:"none",textAlign:"center",padding:"4px 0",flexShrink:0}}>
                <div style={{fontSize:13,fontWeight:700,color:C.amber}}>{m.id}</div>
                <div style={{fontSize:10,color:C.hint,marginTop:1}}>{m.fase}</div>
              </div>
            ))}
          </div>

          {/* Groups + rows */}
          {GROUPS.map((g,gi)=>{
            const s=SYS[g.sys];
            return(
              <div key={g.group}>
                {/* Group header */}
                <div style={{display:"flex",alignItems:"center",borderBottom:`0.5px solid ${C.border}`,backgroundColor:"#F8F9FA"}}>
                  <div style={{width:LABEL_W,minWidth:LABEL_W,padding:"7px 16px",display:"flex",alignItems:"center",gap:8,borderRight:`0.5px solid ${C.border}`,flexShrink:0,position:"sticky",left:0,backgroundColor:"#F8F9FA",zIndex:1}}>
                    <div style={{width:18,height:18,borderRadius:4,background:s.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#fff",flexShrink:0}}>{g.abbr}</div>
                    <span style={{fontSize:11,fontWeight:700,color:C.text,textTransform:"uppercase",letterSpacing:"0.04em"}}>{g.group}</span>
                  </div>
                  {MONTHS.map((m,i)=>(
                    <div key={m.id} style={{width:COL_W,minWidth:COL_W,borderRight:i<MONTHS.length-1?`0.5px solid ${C.border}`:"none",flexShrink:0}}/>
                  ))}
                </div>

                {/* Feature rows */}
                {g.rows.map((row,ri)=>(
                  <div key={row.label} style={{display:"flex",alignItems:"center",borderBottom:ri<g.rows.length-1||gi<GROUPS.length-1?`0.5px solid rgba(0,0,0,0.04)`:"none",minHeight:36}}>
                    {/* Label — sticky */}
                    <div style={{width:LABEL_W,minWidth:LABEL_W,padding:"6px 16px 6px 28px",borderRight:`0.5px solid ${C.border}`,flexShrink:0,display:"flex",alignItems:"center",gap:6,position:"sticky",left:0,backgroundColor:ri%2===0?C.white:"#FAFBFC",zIndex:1}}>
                      <div style={{width:5,height:5,borderRadius:"50%",background:barColor(row.sys),flexShrink:0}}/>
                      <span style={{fontSize:11,color:C.muted,lineHeight:1.3}}>{row.label}</span>
                    </div>

                    {/* Month cells + bar */}
                    <div style={{display:"flex",position:"relative",alignItems:"center",height:36,width:MONTHS.length*COL_W,minWidth:MONTHS.length*COL_W,flexShrink:0}}>
                      {/* Grid lines */}
                      {MONTHS.map((m,i)=>(
                        <div key={m.id} style={{width:COL_W,minWidth:COL_W,height:"100%",borderRight:i<MONTHS.length-1?`0.5px solid rgba(0,0,0,0.05)`:"none",flexShrink:0,
                          backgroundColor: i%2===0?"transparent":"rgba(0,0,0,0.008)"
                        }}/>
                      ))}
                      {/* Bar */}
                      <div style={{
                        position:"absolute",
                        left: row.start * COL_W + 6,
                        width: row.span * COL_W - 12,
                        height:22,
                        borderRadius:5,
                        backgroundColor:barColor(row.sys),
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        overflow:"hidden",
                      }}>
                        {row.ml&&<span style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.85)"}}>{row.ml}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

        </div>
        </div>
        </div>

        {/* Bottom: decisões + riscos */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginTop:20}}>
          <div style={{...card(),padding:16}}>
            <ST>Decisões abertas</ST>
            {[
              {n:"1",d:"Acesso ao banco Protheus: SQL Server ou Oracle?", who:"TI Imdepa + Eng. Dados"},
              {n:"2",d:"Mapeamento de áreas por gerente (cidade/filial)",  who:"Operações Imdepa"},
              {n:"3",d:"Cloud provider: AWS, GCP ou Azure?",               who:"TI Imdepa"},
              {n:"4",d:"Framework frontend: React, Next.js ou Vite?",             who:"Dev Frontend"},
              {n:"5",d:"Notificações também por e-mail além do push?",     who:"Diretoria"},
              {n:"6",d:"Integração futura com outros módulos Protheus?",   who:"Diretoria"},
            ].map((d,i,arr)=>(
              <div key={d.n} style={{padding:"7px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}>
                <div style={{display:"flex",gap:7,alignItems:"flex-start"}}>
                  <span style={{...pill(C.amberL,C.amber),flexShrink:0,marginTop:1}}>{d.n}</span>
                  <span style={{fontSize:12,color:C.text,lineHeight:1.4}}>{d.d}</span>
                </div>
                <div style={{fontSize:10.5,color:C.hint,marginTop:2,paddingLeft:24}}>{d.who}</div>
              </div>
            ))}
          </div>
          <div style={{...card(),padding:16}}>
            <ST>Riscos principais</ST>
            {[
              {r:"Acesso ao banco Protheus negado ou restrito",   prob:"Média",imp:"Alto"},
              {r:"Tabelas Protheus sem documentação",            prob:"Alta", imp:"Alto"},
              {r:"Áreas de gerente sem mapeamento",              prob:"Alta", imp:"Médio"},
            ].map((r,i,arr)=>(
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
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: TEAM — Gantt dedication view
// ═══════════════════════════════════════════════════════════════════════════════
function PageTeam(){
  const MONTHS=[
    {id:"M1",fase:"Auth + Infra\n+ Design"},
    {id:"M2",fase:"Dashboards\n+ Queries"},
    {id:"M3",fase:"Dashboards\n+ Integração"},
    {id:"M4",fase:"Logs\n+ DevOps + Go-live"},
  ];
  const COL=140;
  const ROLE_W=192;
  const DED_W=152;

  const ROLES=[
    {
      a:"GP",  label:"Gestor de Projetos",
      ded:"40h/mês\nM1–M4",
      color:"#5F5E5A",
      skills:"Gestão de escopo · Cronograma · Stakeholders · Riscos · Cerimônias ágeis",
      segs:[{s:0, sp:4, t:"part"}],
    },
    {
      a:"UX",  label:"Designer UX/UI",
      ded:"Part-time\nM1–M2",
      color:"#534AB7",
      skills:"Figma · Prototipação · Sistema de design · Handoff",
      segs:[{s:0, sp:2, t:"part"}],
    },
    {
      a:"DE",  label:"Eng. de Dados",
      ded:"Full-time\nM1–M2",
      color:"#3B6D11",
      skills:"SQL · PostgreSQL · ADVPL → PostgreSQL · TOTVS/Protheus",
      segs:[{s:0, sp:2, t:"full"}],
    },
    {
      a:"BE",  label:"Backend Pleno",
      ded:"Full-time\nM1–M4",
      color:"#1A3A5C",
      skills:"NestJS · PostgreSQL · RBAC · REST APIs · Auditoria · DevOps · Infra",
      segs:[{s:0, sp:4, t:"full"}],
    },
    {
      a:"MB",  label:"Front End / Mobile Pleno",
      ded:"Full-time\nM1–M4",
      color:"#2E6DA4",
      skills:"React Native · NextJS · Dashboards · Listagem de dados · Integração backend",
      segs:[{s:0, sp:4, t:"full"}],
    },
  ];

  const monthBg=["#FFF8F0","#F0F7FF","#F5FFF0","#FFF0F8"];
  const monthFaseColor=["#E8A020","#2E6DA4","#3B8C2A","#A020A8"];

  function Bar({seg,color}){
    const isFull=seg.t==="full";
    return(
      <div style={{
        position:"absolute",
        left:seg.s*COL+5,
        width:seg.sp*COL-10,
        top:"50%",transform:"translateY(-50%)",
        height:24,
        borderRadius:5,
        backgroundColor:isFull?color:`${color}28`,
        border:isFull?"none":`1.5px dashed ${color}`,
        backgroundImage:isFull?"none":
          `repeating-linear-gradient(45deg,${color}22 0px,${color}22 4px,transparent 4px,transparent 10px)`,
        display:"flex",alignItems:"center",justifyContent:"flex-end",
        paddingRight:8,
        overflow:"hidden",
      }}>
        <span style={{fontSize:9.5,fontWeight:700,color:isFull?"rgba(255,255,255,0.85)":color,whiteSpace:"nowrap"}}>
          {isFull?"Full time":"Part time"}
        </span>
      </div>
    );
  }

  return(
    <div style={{flex:1,overflowY:"auto",backgroundColor:C.bg}}>
      <div style={{padding:"10px 24px 0",backgroundColor:C.white,borderBottom:`0.5px solid ${C.border}`}}>
        <div style={{fontSize:11,color:C.hint}}>Equipe / Composição do time e dedicação por mês</div>
      </div>

      <div style={{padding:"20px 24px 32px"}}>

        {/* Metric cards */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:20}}>
          {[
            {accent:"#3B6D11", lbl:"PESSOAS NO TIME",  val:"5",        sub:"GP · Designer · Eng. Dados · Backend · Mobile"},
            {accent:"#2E6DA4", lbl:"PERÍODO",          val:"4 meses",  sub:"M1–M4 · Backend + App + Backoffice"},
            {accent:"#C8102E", lbl:"GO-LIVE",          val:"M4",       sub:"App + Backoffice em produção"},
          ].map(m=>(
            <div key={m.lbl} style={{backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:10,padding:"16px 20px",borderTop:`2.5px solid ${m.accent}`}}>
              <div style={{fontSize:10,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8}}>{m.lbl}</div>
              <div style={{fontSize:28,fontWeight:500,color:C.text,lineHeight:1,marginBottom:6}}>{m.val}</div>
              <div style={{fontSize:11,color:C.hint}}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Gantt table */}
        <div style={{fontSize:12,fontWeight:600,color:C.text,marginBottom:12}}>Composição e Dedicação por Mês</div>
        <div style={{backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:12,overflow:"hidden"}}>
        <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
        <div style={{minWidth:ROLE_W+DED_W+MONTHS.length*COL}}>

          {/* Column header */}
          <div style={{display:"flex",borderBottom:`0.5px solid ${C.border}`,backgroundColor:"#FAFAFA"}}>
            <div style={{width:ROLE_W,minWidth:ROLE_W,padding:"8px 14px",fontSize:10,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",borderRight:`0.5px solid ${C.border}`,flexShrink:0,position:"sticky",left:0,backgroundColor:"#FAFAFA",zIndex:2}}>PAPEL</div>
            <div style={{width:DED_W,minWidth:DED_W,padding:"8px 12px",fontSize:10,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",borderRight:`0.5px solid ${C.border}`,flexShrink:0,position:"sticky",left:ROLE_W,backgroundColor:"#FAFAFA",zIndex:2}}>DEDICAÇÃO</div>
            {MONTHS.map((m,i)=>(
              <div key={m.id} style={{width:COL,minWidth:COL,borderRight:i<MONTHS.length-1?`0.5px solid ${C.border}`:"none",textAlign:"center",padding:"6px 4px",backgroundColor:monthBg[i],flexShrink:0}}>
                <div style={{fontSize:13,fontWeight:700,color:monthFaseColor[i]}}>{m.id}</div>
                <div style={{fontSize:9,color:C.hint,marginTop:2,whiteSpace:"pre-line",lineHeight:1.3}}>{m.fase}</div>
              </div>
            ))}
          </div>

          {/* Rows */}
          {ROLES.map((r,ri)=>(
            <div key={r.label} style={{display:"flex",alignItems:"stretch",borderBottom:ri<ROLES.length-1?`0.5px solid rgba(0,0,0,0.05)`:"none",minHeight:52}}>
              <div style={{width:ROLE_W,minWidth:ROLE_W,padding:"0 14px",borderRight:`0.5px solid ${C.border}`,flexShrink:0,display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,backgroundColor:ri%2===0?C.white:"#FAFBFC",zIndex:1}}>
                <div style={{width:24,height:24,borderRadius:6,background:r.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#fff",flexShrink:0}}>{r.a}</div>
                <span style={{fontSize:12,fontWeight:500,color:C.text,lineHeight:1.3}}>{r.label}</span>
              </div>
              <div style={{width:DED_W,minWidth:DED_W,padding:"0 12px",borderRight:`0.5px solid ${C.border}`,flexShrink:0,display:"flex",alignItems:"center",position:"sticky",left:ROLE_W,backgroundColor:ri%2===0?C.white:"#FAFBFC",zIndex:1}}>
                <span style={{fontSize:10.5,color:C.muted,lineHeight:1.6,whiteSpace:"pre-line"}}>{r.ded}</span>
              </div>
              <div style={{position:"relative",display:"flex",width:MONTHS.length*COL,minWidth:MONTHS.length*COL,flexShrink:0}}>
                {MONTHS.map((m,i)=>(
                  <div key={m.id} style={{width:COL,minWidth:COL,height:"100%",borderRight:i<MONTHS.length-1?`0.5px solid rgba(0,0,0,0.04)`:"none",flexShrink:0,backgroundColor:i%2===0?"transparent":"rgba(0,0,0,0.008)"}}/>
                ))}
                {r.segs.map((seg,si)=><Bar key={si} seg={seg} color={r.color}/>)}
              </div>
            </div>
          ))}

          {/* Legend */}
          <div style={{padding:"10px 16px",borderTop:`0.5px solid ${C.border}`,backgroundColor:"#FAFAFA",display:"flex",alignItems:"center",gap:20}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:28,height:12,borderRadius:3,backgroundColor:"#1A3A5C"}}/>
              <span style={{fontSize:11,color:C.muted}}>Full time</span>
            </div>
            <div style={{marginLeft:"auto",fontSize:11,color:C.hint}}>4 meses · M1–M4 · autenticação → dashboards → integração → go-live</div>
          </div>

        </div>
        </div>
        </div>

        {/* Skills row */}
        <div style={{marginTop:16,display:"flex",flexDirection:"column",gap:8}}>
          <div style={{fontSize:11,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>Skills por papel</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
            {ROLES.map(r=>(
              <div key={r.label} style={{...card(),padding:"12px 14px",display:"flex",gap:10,alignItems:"flex-start"}}>
                <div style={{width:24,height:24,borderRadius:6,background:r.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#fff",flexShrink:0,marginTop:1}}>{r.a}</div>
                <div>
                  <div style={{fontSize:12,fontWeight:600,color:C.text,marginBottom:3}}>{r.label}</div>
                  <div style={{fontSize:11,color:C.hint}}>{r.skills}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════════════════════
// IMDEPA BRAND TOKENS
// ═══════════════════════════════════════════════════════════════════════════════
const IM = {
  red:    "#C8102E",
  redD:   "#9E0C23",
  redL:   "#FDECEA",
  black:  "#111111",
  dark:   "#1A1A1A",
  gray:   "#F4F4F4",
  grayM:  "#E0E0E0",
  grayT:  "#999999",
  white:  "#FFFFFF",
  green:  "#1A7A3A",
  greenL: "#E8F5EE",
  amber:  "#C97A00",
  amberL: "#FFF3DC",
};

// ─── Brand logo mark (SVG inline) ────────────────────────────────────────────
function ImdepaLogo({size=28,white=false}){
  const c=white?"#fff":IM.red;
  return(
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M20 75 C20 75 35 30 50 20 C60 14 72 18 75 30 C78 42 68 52 55 48 C45 45 42 35 50 28" stroke={c} strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M50 28 C58 22 70 26 72 38 C74 50 62 60 50 56" stroke={c} strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.6"/>
    </svg>
  );
}

// ─── Phone frame ─────────────────────────────────────────────────────────────
function PhoneFrame({label,children}){
  return(
    <div style={{flex:1,overflowY:"auto",padding:"28px 32px 40px",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#ECECEC"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
        <div style={{fontSize:10,color:"#888",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600}}>{label||"Protótipo App · dados mockados"}</div>
        {/* Phone shell */}
        <div style={{width:375,backgroundColor:"#1A1A1A",borderRadius:48,padding:"14px 8px 18px",boxShadow:"0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)"}}>
          {/* Dynamic island */}
          <div style={{display:"flex",justifyContent:"center",marginBottom:6}}>
            <div style={{width:108,height:32,backgroundColor:"#111",borderRadius:20}}/>
          </div>
          {/* Screen */}
          <div style={{borderRadius:38,overflow:"hidden",height:740,backgroundColor:IM.gray,display:"flex",flexDirection:"column"}}>
            {children}
          </div>
          {/* Home bar */}
          <div style={{display:"flex",justifyContent:"center",marginTop:12}}>
            <div style={{width:100,height:4,backgroundColor:"rgba(255,255,255,0.3)",borderRadius:2}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared mock data ─────────────────────────────────────────────────────────
const MOCK_DIR = {
  mes:"Junho 2025",
  metaMes:54215310.78, realizadoMes:33983157.02,
  realizadoDia:1746639.91, diferenca:20232153.76,
  margemMes:5636191.42, margemMeta:9460377.88,
  mcMes:16.58, mcMeta:17.44,
  ind:{metaMes:16581984.91,realizadoMes:13621000,realizadoDia:444394.24,mc:17.2},
  rev:{metaMes:37633325.87,realizadoMes:20362157.02,realizadoDia:1302245.67,mc:16.1},
  areas:[
    {label:"Todas as áreas",ind:{meta:16581984,real:13621000},rev:{meta:37633325,real:20362157}},
    {label:"São Paulo - SP",ind:{meta:8200000,real:7100000},rev:{meta:18000000,real:11500000}},
    {label:"Campinas - SP",ind:{meta:4500000,real:3800000},rev:{meta:10000000,real:6200000}},
    {label:"Ribeirão Preto",ind:{meta:3881984,real:2721000},rev:{meta:9633325,real:2662157}},
  ],
  evolucao:[62,71,68,75,80,72,69,77,83,78,86,81,74,82,86,88,84,79,83,89,85,87,82,86,84,88,85,90,87,86],
};
const MOCK_GER={
  nome:"Carlos Mendes",area:"São Paulo - SP",segmento:"Indústria",mes:"Junho 2025",
  metaMes:16581984.91,realizadoMes:13621000,realizadoDia:444394.24,
  diferenca:2960984.91,difAnoAcum:3200000,margemMes:2340000,margemMeta:3040000,
  mcMeta:17.44,mcDia:17.37,mcMes:17.20,
  evolucao:[55,63,70,66,72,68,75,79,74,82,78,84,80,83,86,88,82,87,84,89,85,88,82,86],
};

function fmt(v){return"R$ "+v.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:0});}
function fmtM(v){return"R$\u00A0"+(v/1000000).toFixed(2).replace(".",",")+"M";}
function pct(v,t){return Math.min(100,Math.round((v/t)*100));}

// ─── Shared sub-components ────────────────────────────────────────────────────
function MiniBar({value,max,color}){
  const p=Math.min(100,Math.round((value/max)*100));
  return(
    <div style={{height:3,backgroundColor:"rgba(0,0,0,0.08)",borderRadius:2,overflow:"hidden",marginTop:5}}>
      <div style={{width:`${p}%`,height:"100%",backgroundColor:color,borderRadius:2}}/>
    </div>
  );
}
function Gauge({pct:p,color="#C8102E",size=44}){
  const r=16,cx=size/2,cy=size/2,circ=2*Math.PI*r,dash=(p/100)*circ;
  return(
    <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth={4}/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={4} strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"/>
    </svg>
  );
}
function Spark({data,color,w=290,h=44}){
  const pts=data.slice(-14),mn=Math.min(...pts),mx=Math.max(...pts),rng=mx-mn||1;
  const coords=pts.map((v,i)=>`${(i/(pts.length-1))*w},${h-((v-mn)/rng)*(h-6)+3}`).join(" ");
  return(
    <svg width={w} height={h} style={{overflow:"visible"}}>
      <polyline points={coords} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      <circle cx={w} cy={h-((pts[pts.length-1]-mn)/rng)*(h-6)+3} r="4" fill={color}/>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROTOTYPE: DIRETORIA
// ═══════════════════════════════════════════════════════════════════════════════
function PagePrototypeDir(){
  const [tab,setTab]=useState("home");
  const [periodo,setPeriodo]=useState("mes");
  const [areaIdx,setAreaIdx]=useState(0);
  const d=MOCK_DIR;
  const area=d.areas[areaIdx];
  const fatReal=areaIdx===0?d.realizadoMes:(area.ind.real+area.rev.real);
  const fatMeta=areaIdx===0?d.metaMes:(area.ind.meta+area.rev.meta);
  const pctFat=pct(fatReal,fatMeta);
  const pctMarg=pct(d.margemMes,d.margemMeta);

  const PBtn=({k,label})=>(
    <button onClick={()=>setPeriodo(k)} style={{padding:"4px 12px",borderRadius:5,border:"none",fontSize:10.5,fontWeight:600,backgroundColor:periodo===k?IM.white:"transparent",color:periodo===k?IM.red:IM.white,cursor:"pointer",opacity:periodo===k?1:0.65,transition:"all 0.15s"}}>
      {label}
    </button>
  );
  const NavBtn=({k,icon,label})=>(
    <button onClick={()=>setTab(k)} style={{flex:1,border:"none",backgroundColor:"transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:2,cursor:"pointer",padding:"6px 0"}}>
      <div style={{fontSize:17,lineHeight:1}}>{icon}</div>
      <div style={{fontSize:9,fontWeight:tab===k?700:400,color:tab===k?IM.red:IM.grayT,marginTop:1}}>{label}</div>
      {tab===k&&<div style={{width:16,height:2.5,borderRadius:2,background:IM.red,marginTop:1}}/>}
    </button>
  );

  return(
    <PhoneFrame label="Diretoria · App Imdepa">
      {/* Status bar */}
      <div style={{backgroundColor:IM.black,padding:"6px 20px 4px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.75)",fontWeight:600}}>09:41</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.5)"}}>▲▲▲ ⬡ 92%</span>
      </div>

      {/* ── HOME ── */}
      {tab==="home"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:IM.gray}}>
          {/* Header Imdepa red */}
          <div style={{backgroundColor:IM.red,padding:"16px 18px 24px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <ImdepaLogo size={24} white/>
                <div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.65)",letterSpacing:"0.05em"}}>Bom dia,</div>
                  <div style={{fontSize:17,fontWeight:800,color:IM.white,letterSpacing:"-0.02em"}}>Diretoria</div>
                </div>
              </div>
              <div style={{position:"relative"}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>🔔</div>
                <div style={{position:"absolute",top:0,right:0,width:9,height:9,borderRadius:"50%",background:"#FFD700",border:"2px solid "+IM.red}}/>
              </div>
            </div>

            {/* Período */}
            <div style={{display:"flex",gap:2,background:"rgba(0,0,0,0.25)",borderRadius:7,padding:3,marginBottom:12}}>
              <PBtn k="dia" label="Hoje"/><PBtn k="mes" label="Mês"/><PBtn k="ano" label="Ano"/>
            </div>

            {/* Filtro de área */}
            <div style={{marginBottom:14}}>
              <div style={{fontSize:9.5,color:"rgba(255,255,255,0.6)",fontWeight:600,letterSpacing:"0.06em",marginBottom:6}}>FILTRAR POR ÁREA</div>
              <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:2}}>
                {d.areas.map((a,i)=>(
                  <button key={i} onClick={()=>setAreaIdx(i)} style={{padding:"5px 12px",borderRadius:20,border:`1.5px solid ${areaIdx===i?"#fff":"rgba(255,255,255,0.35)"}`,backgroundColor:areaIdx===i?"#fff":"transparent",color:areaIdx===i?IM.red:"rgba(255,255,255,0.9)",fontSize:10.5,fontWeight:areaIdx===i?700:500,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}}>
                    {a.label==="Todas as áreas"?"Todas":a.label.split(" - ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Big KPI card */}
            <div style={{background:"rgba(0,0,0,0.2)",borderRadius:14,padding:"14px 16px"}}>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.65)",marginBottom:3,letterSpacing:"0.04em"}}>FATURAMENTO TOTAL · {area.label.toUpperCase()}</div>
              <div style={{fontSize:30,fontWeight:800,color:IM.white,letterSpacing:"-0.03em",marginBottom:6}}>{fmtM(fatReal)}</div>
              <div style={{height:5,backgroundColor:"rgba(255,255,255,0.2)",borderRadius:3,overflow:"hidden",marginBottom:5}}>
                <div style={{width:`${pctFat}%`,height:"100%",background:pctFat>=80?"#4ADE80":"#FFD700",borderRadius:3}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"rgba(255,255,255,0.65)"}}>
                <span style={{fontWeight:700,color:pctFat>=80?"#4ADE80":"#FFD700"}}>{pctFat}% da meta</span>
                <span>Meta: {fmtM(fatMeta)}</span>
              </div>
            </div>
          </div>

          <div style={{padding:"0 14px",marginTop:-14}}>
            {/* Indústria + Revenda cards */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
              {[
                {label:"Indústria",real:area.ind.real,meta:area.ind.meta,color:IM.red},
                {label:"Revenda",  real:area.rev.real,meta:area.rev.meta,color:"#1A1A1A"},
              ].map(s=>(
                <div key={s.label} style={{background:IM.white,borderRadius:14,padding:"13px 13px",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",borderTop:`3px solid ${s.color}`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                    <span style={{fontSize:10,fontWeight:700,color:IM.black,textTransform:"uppercase",letterSpacing:"0.04em"}}>{s.label}</span>
                    <div style={{position:"relative",width:44,height:44}}>
                      <Gauge pct={pct(s.real,s.meta)} color={s.color} size={44}/>
                      <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8.5,fontWeight:800,color:s.color,transform:"rotate(90deg)"}}>{pct(s.real,s.meta)}%</div>
                    </div>
                  </div>
                  <div style={{fontSize:15,fontWeight:800,color:IM.black}}>{fmtM(s.real)}</div>
                  <div style={{fontSize:10,color:IM.grayT}}>Meta {fmtM(s.meta)}</div>
                  <MiniBar value={s.real} max={s.meta} color={s.color}/>
                </div>
              ))}
            </div>

            {/* Margem + MC */}
            <div style={{background:IM.white,borderRadius:14,padding:"13px 15px",marginBottom:12,boxShadow:"0 2px 10px rgba(0,0,0,0.07)"}}>
              <div style={{fontSize:10,fontWeight:700,color:IM.black,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>Margem & % MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
                {[
                  {l:"Margem Mês",v:fmtM(d.margemMes),sub:`${pctMarg}% meta`,c:pctMarg<70?IM.red:IM.green},
                  {l:"% MC Mês",v:`${d.mcMes}%`,sub:`Meta ${d.mcMeta}%`,c:IM.black},
                  {l:"Realiz. Dia",v:`${(d.realizadoDia/1000).toFixed(0)}K`,sub:"hoje",c:IM.grayT},
                ].map(k=>(
                  <div key={k.l} style={{textAlign:"center"}}>
                    <div style={{fontSize:13,fontWeight:800,color:k.c}}>{k.v}</div>
                    <div style={{fontSize:9,color:IM.grayT,marginTop:2}}>{k.l}</div>
                    <div style={{fontSize:8.5,color:k.c,marginTop:1}}>{k.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sparkline */}
            <div style={{background:IM.white,borderRadius:14,padding:"13px 15px",marginBottom:12,boxShadow:"0 2px 10px rgba(0,0,0,0.07)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <span style={{fontSize:10,fontWeight:700,color:IM.black,textTransform:"uppercase",letterSpacing:"0.05em"}}>Evolução — 14 dias</span>
                <span style={{fontSize:9,color:IM.grayT}}>% da meta</span>
              </div>
              <Spark data={d.evolucao} color={IM.red}/>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:8.5,color:IM.grayT}}>
                <span>14 dias atrás</span><span>hoje</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── INDÚSTRIA ── */}
      {tab==="industria"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:IM.gray}}>
          <div style={{backgroundColor:IM.black,padding:"16px 18px 20px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
              <ImdepaLogo size={20} white/>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.5)",letterSpacing:"0.05em"}}>Módulo</div>
              <div style={{fontSize:16,fontWeight:800,color:IM.white}}>Indústria</div>
            </div>
            <div style={{display:"flex",gap:3,background:"rgba(255,255,255,0.08)",borderRadius:7,padding:3}}>
              {["dia","mes","ano"].map(k=>(
                <button key={k} onClick={()=>setPeriodo(k)} style={{flex:1,padding:"4px 0",borderRadius:5,border:"none",fontSize:10.5,fontWeight:600,backgroundColor:periodo===k?IM.red:"transparent",color:IM.white,cursor:"pointer",opacity:periodo===k?1:0.55}}>
                  {k==="dia"?"Hoje":k==="mes"?"Mês":"Acum."}
                </button>
              ))}
            </div>
          </div>
          <div style={{padding:"14px 14px 24px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
              {[
                {l:"Meta Orç. Mês",v:fmtM(d.ind.metaMes),c:IM.black},
                {l:"Realizado Mês",v:fmtM(d.ind.realizadoMes),c:IM.red,sub:`${pct(d.ind.realizadoMes,d.ind.metaMes)}% da meta`},
                {l:"Realizado Dia",v:fmt(d.ind.realizadoDia),c:IM.green},
                {l:"Gap para Meta",v:fmtM(d.ind.metaMes-d.ind.realizadoMes),c:IM.red},
              ].map(k=>(
                <div key={k.l} style={{background:IM.white,borderRadius:12,padding:"13px 13px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                  <div style={{fontSize:9.5,color:IM.grayT,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.04em"}}>{k.l}</div>
                  <div style={{fontSize:14,fontWeight:800,color:k.c}}>{k.v}</div>
                  {k.sub&&<div style={{fontSize:9,color:IM.grayT,marginTop:2}}>{k.sub}</div>}
                </div>
              ))}
            </div>
            <div style={{background:IM.white,borderRadius:12,padding:"13px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:10,fontWeight:700,color:IM.black,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>% Índice MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {[{l:"Meta",v:"17,44%"},{l:"Realiz. Dia",v:"17,37%"},{l:"Realiz. Mês",v:`${d.ind.mc}%`}].map((m,i)=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:IM.gray,borderRadius:10}}>
                    <div style={{fontSize:15,fontWeight:800,color:i===0?IM.black:i===1?IM.green:IM.red}}>{m.v}</div>
                    <div style={{fontSize:9,color:IM.grayT,marginTop:2}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── REVENDA ── */}
      {tab==="revenda"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:IM.gray}}>
          <div style={{backgroundColor:IM.dark,padding:"16px 18px 20px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
              <ImdepaLogo size={20} white/>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.5)",letterSpacing:"0.05em"}}>Módulo</div>
              <div style={{fontSize:16,fontWeight:800,color:IM.white}}>Revenda</div>
            </div>
            <div style={{display:"flex",gap:3,background:"rgba(255,255,255,0.08)",borderRadius:7,padding:3}}>
              {["dia","mes","ano"].map(k=>(
                <button key={k} onClick={()=>setPeriodo(k)} style={{flex:1,padding:"4px 0",borderRadius:5,border:"none",fontSize:10.5,fontWeight:600,backgroundColor:periodo===k?IM.red:"transparent",color:IM.white,cursor:"pointer",opacity:periodo===k?1:0.55}}>
                  {k==="dia"?"Hoje":k==="mes"?"Mês":"Acum."}
                </button>
              ))}
            </div>
          </div>
          <div style={{padding:"14px 14px 24px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
              {[
                {l:"Meta Orç. Mês",v:fmtM(d.rev.metaMes),c:IM.black},
                {l:"Realizado Mês",v:fmtM(d.rev.realizadoMes),c:IM.red,sub:`${pct(d.rev.realizadoMes,d.rev.metaMes)}% da meta`},
                {l:"Realizado Dia",v:fmt(d.rev.realizadoDia),c:IM.green},
                {l:"Gap para Meta",v:fmtM(d.rev.metaMes-d.rev.realizadoMes),c:IM.red},
              ].map(k=>(
                <div key={k.l} style={{background:IM.white,borderRadius:12,padding:"13px 13px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                  <div style={{fontSize:9.5,color:IM.grayT,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.04em"}}>{k.l}</div>
                  <div style={{fontSize:14,fontWeight:800,color:k.c}}>{k.v}</div>
                  {k.sub&&<div style={{fontSize:9,color:IM.grayT,marginTop:2}}>{k.sub}</div>}
                </div>
              ))}
            </div>
            <div style={{background:IM.white,borderRadius:12,padding:"13px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:10,fontWeight:700,color:IM.black,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>% Índice MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {[{l:"Meta",v:"17,44%"},{l:"Realiz. Dia",v:"16,8%"},{l:"Realiz. Mês",v:`${d.rev.mc}%`}].map((m,i)=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:IM.gray,borderRadius:10}}>
                    <div style={{fontSize:15,fontWeight:800,color:i===0?IM.black:i===1?IM.green:IM.red}}>{m.v}</div>
                    <div style={{fontSize:9,color:IM.grayT,marginTop:2}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ALERTAS ── */}
      {/* Bottom nav */}
      <div style={{backgroundColor:IM.white,borderTop:`1px solid ${IM.grayM}`,display:"flex",padding:"6px 0 12px",flexShrink:0}}>
        {[{k:"home",icon:"⊞",label:"Home"},{k:"industria",icon:"🏭",label:"Indústria"},{k:"revenda",icon:"🏪",label:"Revenda"}].map(n=>(
          <NavBtn key={n.k} k={n.k} icon={n.icon} label={n.label}/>
        ))}
      </div>
    </PhoneFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROTOTYPE: GERENTE
// ═══════════════════════════════════════════════════════════════════════════════
function PagePrototypeGer(){
  const [tab,setTab]=useState("home");
  const [periodo,setPeriodo]=useState("mes");
  const g=MOCK_GER;
  const pctFat=pct(g.realizadoMes,g.metaMes);
  const pctMarg=pct(g.margemMes,g.margemMeta);
  const diasRestantes=14;
  const ritmoNecessario=(g.metaMes-g.realizadoMes)/diasRestantes;

  const NavBtn=({k,icon,label})=>(
    <button onClick={()=>setTab(k)} style={{flex:1,border:"none",backgroundColor:"transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:2,cursor:"pointer",padding:"6px 0"}}>
      <div style={{fontSize:17,lineHeight:1}}>{icon}</div>
      <div style={{fontSize:9,fontWeight:tab===k?700:400,color:tab===k?IM.red:IM.grayT,marginTop:1}}>{label}</div>
      {tab===k&&<div style={{width:16,height:2.5,borderRadius:2,background:IM.red,marginTop:1}}/>}
    </button>
  );

  return(
    <PhoneFrame label="Gerente · App Imdepa">
      {/* Status bar */}
      <div style={{backgroundColor:IM.black,padding:"6px 20px 4px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.75)",fontWeight:600}}>09:41</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.5)"}}>▲▲▲ ⬡ 87%</span>
      </div>

      {/* ── HOME ── */}
      {tab==="home"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:IM.gray}}>
          {/* Header — igual ao da Diretoria: vermelho sólido */}
          <div style={{backgroundColor:IM.red,padding:"16px 18px 24px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <ImdepaLogo size={24} white/>
                <div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.65)",letterSpacing:"0.04em"}}>Olá,</div>
                  <div style={{fontSize:17,fontWeight:800,color:IM.white,letterSpacing:"-0.02em"}}>{g.nome}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.55)",marginTop:1}}>📍 {g.area} · {g.segmento}</div>
                </div>
              </div>
              <div style={{width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:"#fff"}}>CM</div>
            </div>

            {/* Período — igual ao da Diretoria */}
            <div style={{display:"flex",gap:2,background:"rgba(0,0,0,0.25)",borderRadius:7,padding:3,marginBottom:12}}>
              {["dia","mes","ano"].map(k=>(
                <button key={k} onClick={()=>setPeriodo(k)} style={{flex:1,padding:"4px 0",borderRadius:5,border:"none",fontSize:10.5,fontWeight:600,backgroundColor:periodo===k?IM.white:"transparent",color:periodo===k?IM.red:IM.white,cursor:"pointer",opacity:periodo===k?1:0.65,transition:"all 0.15s"}}>
                  {k==="dia"?"Hoje":k==="mes"?"Mês":"Ano"}
                </button>
              ))}
            </div>

            {/* Big KPI card — igual ao da Diretoria */}
            <div style={{background:"rgba(0,0,0,0.2)",borderRadius:14,padding:"14px 16px"}}>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.65)",marginBottom:3,letterSpacing:"0.04em"}}>FATURAMENTO · {g.mes.toUpperCase()}</div>
              <div style={{fontSize:30,fontWeight:800,color:IM.white,letterSpacing:"-0.03em",marginBottom:6}}>{fmtM(g.realizadoMes)}</div>
              <div style={{height:5,backgroundColor:"rgba(255,255,255,0.2)",borderRadius:3,overflow:"hidden",marginBottom:5}}>
                <div style={{width:`${pctFat}%`,height:"100%",background:pctFat>=80?"#4ADE80":"#FFD700",borderRadius:3}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"rgba(255,255,255,0.65)"}}>
                <span style={{fontWeight:700,color:pctFat>=80?"#4ADE80":"#FFD700"}}>{pctFat}% da meta</span>
                <span>Meta: {fmtM(g.metaMes)}</span>
              </div>
            </div>
          </div>

          <div style={{padding:"0 14px",marginTop:-14}}>
            {/* 4 KPI cards — mesmo padrão da Diretoria: white, sem borderLeft */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
              {[
                {l:"Realiz. Dia",     v:fmt(g.realizadoDia),          c:IM.green,  top:IM.green},
                {l:"Gap para Meta",   v:fmtM(g.diferenca),            c:IM.red,    top:IM.red},
                {l:"Margem Mês",      v:fmtM(g.margemMes),            c:IM.black,  top:IM.black, sub:`${pctMarg}% meta`},
                {l:"Dif. Ano Acum.",  v:fmtM(g.difAnoAcum),           c:IM.amber,  top:IM.amber},
              ].map(k=>(
                <div key={k.l} style={{background:IM.white,borderRadius:14,padding:"13px 13px",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",borderTop:`3px solid ${k.top}`}}>
                  <div style={{fontSize:9.5,color:IM.grayT,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.04em"}}>{k.l}</div>
                  <div style={{fontSize:14,fontWeight:800,color:k.c}}>{k.v}</div>
                  {k.sub&&<div style={{fontSize:9,color:IM.grayT,marginTop:2}}>{k.sub}</div>}
                </div>
              ))}
            </div>

            {/* % MC — igual ao da Diretoria */}
            <div style={{background:IM.white,borderRadius:14,padding:"13px 14px",marginBottom:12,boxShadow:"0 2px 10px rgba(0,0,0,0.07)"}}>
              <div style={{fontSize:10,fontWeight:700,color:IM.black,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>% Índice MC</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {[{l:"Meta",v:`${g.mcMeta}%`,c:IM.black},{l:"Realiz. Dia",v:`${g.mcDia}%`,c:g.mcDia>=g.mcMeta?IM.green:IM.amber},{l:"Realiz. Mês",v:`${g.mcMes}%`,c:g.mcMes>=g.mcMeta?IM.green:IM.red}].map(m=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:IM.gray,borderRadius:10}}>
                    <div style={{fontSize:15,fontWeight:800,color:m.c}}>{m.v}</div>
                    <div style={{fontSize:9,color:IM.grayT,marginTop:2}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sparkline — igual ao da Diretoria */}
            <div style={{background:IM.white,borderRadius:14,padding:"13px 14px",marginBottom:12,boxShadow:"0 2px 10px rgba(0,0,0,0.07)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <span style={{fontSize:10,fontWeight:700,color:IM.black,textTransform:"uppercase",letterSpacing:"0.05em"}}>Ritmo do mês</span>
                <span style={{fontSize:9,color:IM.grayT}}>% meta acumulada</span>
              </div>
              <Spark data={g.evolucao} color={IM.red}/>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:8.5,color:IM.grayT}}>
                <span>início</span><span>hoje</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── EVOLUÇÃO ── */}
      {tab==="evolucao"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:IM.gray}}>
          <div style={{backgroundColor:IM.red,padding:"16px 18px 20px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <ImdepaLogo size={20} white/>
              <div style={{fontSize:16,fontWeight:800,color:IM.white}}>Evolução Mensal</div>
            </div>
          </div>
          <div style={{padding:"14px 14px 24px"}}>
            {[
              {mes:"Jan",v:94},{mes:"Fev",v:88},{mes:"Mar",v:102},
              {mes:"Abr",v:97},{mes:"Mai",v:91},{mes:"Jun",v:82,atual:true},
            ].map(m=>(
              <div key={m.mes} style={{background:IM.white,borderRadius:14,padding:"12px 14px",marginBottom:9,boxShadow:"0 2px 10px rgba(0,0,0,0.07)",borderTop:`3px solid ${m.v>=100?IM.green:m.v>=80?IM.amber:IM.red}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:13,fontWeight:m.atual?800:600,color:IM.black}}>{m.mes} 2025</span>
                    {m.atual&&<span style={{fontSize:9,padding:"2px 7px",borderRadius:10,background:IM.red,color:"#fff",fontWeight:700}}>atual</span>}
                  </div>
                  <span style={{fontSize:15,fontWeight:800,color:m.v>=100?IM.green:m.v>=80?IM.amber:IM.red}}>{m.v}%</span>
                </div>
                <div style={{height:7,backgroundColor:IM.gray,borderRadius:4,overflow:"hidden"}}>
                  <div style={{width:`${m.v}%`,height:"100%",background:m.v>=100?IM.green:m.v>=80?IM.amber:IM.red,borderRadius:4}}/>
                </div>
                <div style={{fontSize:9.5,color:IM.grayT,marginTop:5}}>
                  {m.v>=100?`+${m.v-100}% acima da meta`:`Faltou ${100-m.v}% para atingir a meta`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── PERFIL ── */}
      {tab==="perfil"&&(
        <div style={{flex:1,overflowY:"auto",backgroundColor:IM.gray}}>
          <div style={{backgroundColor:IM.red,padding:"28px 18px 52px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:"#fff",marginBottom:10}}>CM</div>
            <div style={{fontSize:18,fontWeight:800,color:IM.white,marginBottom:4}}>{g.nome}</div>
            <div style={{fontSize:10,padding:"4px 12px",borderRadius:20,background:"rgba(0,0,0,0.2)",color:"rgba(255,255,255,0.9)",fontWeight:600}}>Gerente · {g.segmento}</div>
          </div>
          <div style={{padding:"0 14px",marginTop:-18}}>
            {[{l:"Área",v:g.area},{l:"Segmento",v:g.segmento},{l:"Perfil",v:"Gerente"},{l:"Último acesso",v:"Hoje, 09:41"}].map((r,i)=>(
              <div key={r.l} style={{background:IM.white,borderRadius:14,padding:"13px 15px",marginBottom:8,boxShadow:"0 2px 10px rgba(0,0,0,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:12,color:IM.grayT}}>{r.l}</span>
                <span style={{fontSize:12,fontWeight:700,color:IM.black}}>{r.v}</span>
              </div>
            ))}
            <button style={{width:"100%",marginTop:8,padding:"14px",border:"none",borderRadius:14,background:IM.redL,color:IM.red,fontSize:13,fontWeight:800,cursor:"pointer",letterSpacing:"0.02em"}}>Sair da conta</button>
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <div style={{backgroundColor:IM.white,borderTop:`1px solid ${IM.grayM}`,display:"flex",padding:"6px 0 12px",flexShrink:0}}>
        {[{k:"home",icon:"⊞",label:"Home"},{k:"evolucao",icon:"📈",label:"Evolução"},{k:"perfil",icon:"👤",label:"Perfil"}].map(n=>(
          <NavBtn key={n.k} k={n.k} icon={n.icon} label={n.label}/>
        ))}
      </div>
    </PhoneFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE: FUTURO — Próximas Fases
// ═══════════════════════════════════════════════════════════════════════════════
function PageFuturo(){
  const [fase,setFase]=useState("f2");

  const FASES=[
    {
      id:"f1", num:"Fase 1", label:"MVP — O que está sendo entregue",
      sub:"Planejada", cor:"#1A3A5C",
      desc:"Visibilidade em tempo real dos dados de faturamento do Protheus. App para Diretoria e Gerentes. Backoffice de gestão de acessos.",
      clicavel:false,
    },
    {
      id:"f2", num:"Fase 2", label:"App do Vendedor",
      sub:"Próxima fase", cor:"#534AB7",
      desc:"O vendedor passa a ter visibilidade do próprio desempenho — meta, carteira, ritmo e clientes em risco — direto no app.",
      clicavel:true,
    },
    {
      id:"f3", num:"Fase 3", label:"Amadurecimento e enriquecimento dos dados",
      sub:"Médio prazo", cor:"#185FA5",
      desc:"Com a base de dados consolidada, evoluímos para visões analíticas mais ricas: curva ABC, ranking de filiais, sazonalidade e análise de mix.",
      clicavel:true,
    },
    {
      id:"f4", num:"Fase 4", label:"Notificações Inteligentes",
      sub:"Longo prazo", cor:"#C8102E",
      desc:"Com dados maduros e histórico acumulado, o app começa a avisar antes do problema acontecer — alertas proativos baseados em padrões.",
      clicavel:true,
    },
  ];

  const FASE2=[
    { icone:"🎯", titulo:"Minha meta e realizado",       desc:"KPIs pessoais do vendedor: faturamento vs meta, % atingido e ritmo diário necessário para fechar o mês — restrito à própria carteira." },
    { icone:"💚", titulo:"Carteira com status de saúde", desc:"Clientes classificados automaticamente: Ativo (até 30d), Em risco (30–60d), Inativo (60d+). Ordenada por criticidade." },
    { icone:"📈", titulo:"Ticket médio + tendência",     desc:"Ticket médio dos últimos 3 meses por cliente com indicador de tendência. Destaca quedas acima de 20%." },
    { icone:"🏆", titulo:"Ranking da filial",            desc:"Posição do vendedor no ranking de faturamento e % de meta entre os colegas da mesma filial. Atualizado diariamente." },
  ];

  const FASE3=[
    { icone:"🔠", titulo:"Curva ABC de clientes",          desc:"Classifica clientes em A, B e C por faturamento. Mostra quais clientes A estão com queda de frequência — churn onde mais dói." },
    { icone:"🏅", titulo:"Ranking de filiais",             desc:"10 filiais rankeadas por % de meta, crescimento e % MC. Drill-down por segmento e período." },
    { icone:"🌱", titulo:"Sazonalidade por segmento",      desc:"Padrão histórico de pico e vale: Agro (safra set–jan), Industrial (manutenção programada), Automotivo (1º semestre)." },
    { icone:"📈", titulo:"Evolução histórica comparativa", desc:"Comparativo mês a mês e ano a ano por filial, gerente e segmento. Base histórica do Protheus." },
    { icone:"🔍", titulo:"Análise de mix por cliente",     desc:"Para cada cliente, o que o mercado compra que ele nunca pediu. Cruza os 23k SKUs com o histórico de compras." },
    { icone:"👥", titulo:"Comparativo de vendedores",      desc:"Performance lado a lado entre vendedores da mesma filial — ticket médio, % de meta e crescimento." },
  ];

  const FASE4=[
    { icone:"👑", titulo:"Cliente VIP parou de comprar",      gatilho:"Cliente do grupo A sem pedido há X dias.", alerta:"Alerta para gerente e vendedor com último valor comprado e histórico para embasar a abordagem.", impacto:"1 cliente VIP pode representar R$500K+/ano. Agir em 48h tem reativação 3× maior." },
    { icone:"📉", titulo:"Ticket médio do vendedor em queda", gatilho:"Ticket médio de um vendedor cai por 2 semanas consecutivas.", alerta:"Gerente recebe comparativo do vendedor vs média da filial — período e variação exata.", impacto:"Identifica se é problema de carteira, mix ou abordagem — antes de impactar o mês." },
    { icone:"⚠️", titulo:"Frequência de compra caindo",       gatilho:"Cliente com queda de frequência por 2+ períodos consecutivos.", alerta:"Lista priorizada de clientes em risco de churn gerada automaticamente para o gerente.", impacto:"Retenção custa 5× menos que aquisição. Detectar antes de perder muda o resultado." },
    { icone:"🌾", titulo:"Janela de safra se aproximando",    gatilho:"Meses antes do pico de safra (set–jan) em filiais de regiões agrícolas.", alerta:"Alerta proativo para reforço de estoque e abordagem dos clientes do segmento agro.", impacto:"Antecipar a janela de compra do cliente agro vale muito mais que reagir depois." },
    { icone:"🔀", titulo:"Cliente compra pouco do portfólio", gatilho:"Cliente ativo que nunca comprou mais de 2 famílias de produto.", alerta:"Vendedor recebe lista dos produtos que o mercado compra mas aquele cliente nunca pediu.", impacto:"23k SKUs. Aumentar mix = mais receita por cliente existente, sem novo custo de aquisição." },
    { icone:"📦", titulo:"Filial com mix concentrado",        gatilho:"+60% do faturamento de uma filial em 3 ou menos famílias de produto.", alerta:"Alerta de risco de concentração com sugestão de ação de diversificação.", impacto:"Mix diverso = mais resistência a oscilações de demanda e ruptura de fornecimento." },
  ];

  const corAtiva=FASES.find(f=>f.id===fase)?.cor||"#1A3A5C";

  return(
    <div style={{flex:1,overflowY:"auto",backgroundColor:"#F2F2F0"}}>
      <div style={{padding:"10px 24px 0",backgroundColor:C.white,borderBottom:`0.5px solid ${C.border}`}}>
        <div style={{fontSize:11,color:C.hint,marginBottom:8}}>Próximas Fases · evolução planejada após o MVP</div>
      </div>

      <div style={{padding:"20px 24px 48px"}}>

        {/* ── Linha do tempo ── */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:0,marginBottom:24,backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:12,overflow:"hidden"}}>
          {FASES.map((f,i)=>(
            <div key={f.id}
              onClick={()=>f.clicavel&&setFase(f.id)}
              style={{
                padding:"18px 20px",
                borderRight:i<3?`0.5px solid ${C.border}`:"none",
                backgroundColor:f.id===fase||!f.clicavel?`${f.cor}0D`:C.white,
                borderTop:`3px solid ${f.id===fase||!f.clicavel?f.cor:C.border}`,
                cursor:f.clicavel?"pointer":"default",
                transition:"all 0.15s",
              }}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
                <div style={{width:7,height:7,borderRadius:"50%",background:f.id===fase||!f.clicavel?f.cor:"#CCC",flexShrink:0}}/>
                <span style={{fontSize:9,fontWeight:700,color:f.id===fase||!f.clicavel?f.cor:"#AAA",textTransform:"uppercase",letterSpacing:"0.07em"}}>{f.sub}</span>
              </div>
              <div style={{fontSize:10,fontWeight:700,color:f.cor,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>{f.num}</div>
              <div style={{fontSize:12.5,fontWeight:800,color:f.id===fase||!f.clicavel?f.cor:C.text,marginBottom:6,lineHeight:1.3}}>{f.label}</div>
              <div style={{fontSize:11,color:C.muted,lineHeight:1.55}}>{f.desc}</div>
            </div>
          ))}
        </div>

        {/* ── F2: App do Vendedor ── */}
        {fase==="f2"&&(
          <div>
            <div style={{backgroundColor:C.white,borderRadius:12,padding:"16px 20px",marginBottom:20,border:`0.5px solid ${C.border}`,borderLeft:`4px solid #534AB7`,display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{fontSize:26,lineHeight:1,flexShrink:0}}>👤</div>
              <div>
                <div style={{fontSize:14,fontWeight:800,color:"#534AB7",marginBottom:4}}>O vendedor que não precisa mais perguntar pro gerente como está</div>
                <div style={{fontSize:12.5,color:C.text,lineHeight:1.75,maxWidth:680}}>
                  Hoje o vendedor não tem visibilidade do próprio desempenho em tempo real. A Fase 2 adiciona um novo perfil no app — o Vendedor — com acesso restrito à sua própria carteira. Nenhuma nova extração de dados é necessária: tudo já vem do Protheus.
                </div>
              </div>
            </div>
            <div style={{fontSize:11,fontWeight:700,color:C.hint,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:12}}>Funcionalidades do perfil Vendedor</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {FASE2.map((f,i)=>(
                <div key={i} style={{backgroundColor:C.white,borderRadius:12,border:`0.5px solid ${C.border}`,padding:"16px 18px",borderTop:`3px solid #534AB7`,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
                  <div style={{fontSize:22,marginBottom:8}}>{f.icone}</div>
                  <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:5}}>{f.titulo}</div>
                  <div style={{fontSize:12,color:C.muted,lineHeight:1.65}}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── F3: Amadurecimento dos dados ── */}
        {fase==="f3"&&(
          <div>
            <div style={{backgroundColor:C.white,borderRadius:12,padding:"16px 20px",marginBottom:20,border:`0.5px solid ${C.border}`,borderLeft:`4px solid #185FA5`,display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{fontSize:26,lineHeight:1,flexShrink:0}}>📊</div>
              <div>
                <div style={{fontSize:14,fontWeight:800,color:"#185FA5",marginBottom:4}}>Com a base consolidada, as visões ficam mais ricas</div>
                <div style={{fontSize:12.5,color:C.text,lineHeight:1.75,maxWidth:680}}>
                  Depois de meses de dados acumulados e validados, é possível construir visões analíticas que combinam histórico, comparativos e padrões. A Fase 3 transforma o app de acompanhamento operacional em ferramenta de decisão estratégica.
                </div>
              </div>
            </div>
            <div style={{fontSize:11,fontWeight:700,color:C.hint,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:12}}>Funcionalidades previstas</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
              {FASE3.map((f,i)=>(
                <div key={i} style={{backgroundColor:C.white,borderRadius:12,border:`0.5px solid ${C.border}`,padding:"16px 18px",borderTop:`3px solid #185FA5`,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
                  <div style={{fontSize:22,marginBottom:8}}>{f.icone}</div>
                  <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:5}}>{f.titulo}</div>
                  <div style={{fontSize:12,color:C.muted,lineHeight:1.65}}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── F4: Notificações Inteligentes ── */}
        {fase==="f4"&&(
          <div>
            <div style={{backgroundColor:C.white,borderRadius:12,padding:"16px 20px",marginBottom:20,border:`0.5px solid ${C.border}`,borderLeft:`4px solid #C8102E`,display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{fontSize:26,lineHeight:1,flexShrink:0}}>🧠</div>
              <div>
                <div style={{fontSize:14,fontWeight:800,color:"#C8102E",marginBottom:4}}>Dados maduros + histórico = alertas que antecipam problemas</div>
                <div style={{fontSize:12.5,color:C.text,lineHeight:1.75,maxWidth:680}}>
                  A Fase 4 só é possível depois que os dados estiverem maduros e com histórico suficiente. Com padrões estabelecidos — frequência de compra, sazonalidade, ticket por cliente — o sistema consegue detectar desvios com precisão e avisar antes que o problema vire perda.
                  <strong style={{color:"#C8102E"}}> Nenhum dado novo é necessário: </strong>tudo parte do que já foi extraído nas fases anteriores.
                </div>
              </div>
            </div>
            <div style={{fontSize:11,fontWeight:700,color:C.hint,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:12}}>Alertas que serão implementados</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {FASE4.map((a,i)=>(
                <div key={i} style={{backgroundColor:C.white,borderRadius:12,border:`0.5px solid ${C.border}`,overflow:"hidden",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
                  <div style={{padding:"14px 18px 10px",borderBottom:`0.5px solid ${C.border}`,display:"flex",gap:12,alignItems:"flex-start"}}>
                    <div style={{width:34,height:34,borderRadius:9,background:"#FDECEA",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0}}>{a.icone}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:4}}>{a.titulo}</div>
                      <div style={{fontSize:11,color:C.hint,lineHeight:1.5}}><span style={{fontWeight:600,color:"#C8102E"}}>Gatilho: </span>{a.gatilho}</div>
                    </div>
                  </div>
                  <div style={{padding:"9px 18px",borderBottom:`0.5px solid ${C.border}`,backgroundColor:"#FAFAFA"}}>
                    <div style={{fontSize:11,color:C.hint,lineHeight:1.5}}><span style={{fontWeight:600,color:C.text}}>Notificação: </span>{a.alerta}</div>
                  </div>
                  <div style={{padding:"9px 18px",backgroundColor:"#FFF8F8",display:"flex",gap:8,alignItems:"flex-start"}}>
                    <span style={{fontSize:12,flexShrink:0}}>💡</span>
                    <div style={{fontSize:11.5,color:"#C8102E",fontWeight:600,lineHeight:1.5}}>{a.impacto}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
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
    proto_dir:<PagePrototypeDir/>,
    proto_ger:<PagePrototypeGer/>,
    futuro:<PageFuturo/>,
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
