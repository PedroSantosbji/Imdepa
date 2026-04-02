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
  const metrics=[
    {label:"Sistemas",value:"3",sub:"PWA · Backoffice · Pipeline",accent:C.blue},
    {label:"Prazo Estimado",value:"3 meses",sub:"Design · ETL · Dev · QA",accent:C.purple},
    {label:"Perfis de Acesso",value:"3",sub:"Diretoria · Gerente · Backoffice",accent:C.green},
  ];
  const systems=[
    {
      abbr:"PWA", name:"PWA — Imdepa", bg:C.navy,
      tags:["Progressive Web App","Mobile-first","Diretoria","Gerente"],
      feats:[
        "Home com KPIs consolidados + gauge de meta",
        "Módulo Indústria — faturamento e margem",
        "Módulo Revenda — faturamento e margem",
        "Filtros por gerente e área/cidade",
        "Gráficos de evolução e comparativo",
        "Central de alertas com severidade",
        "Seletor de período Dia / Mês / Ano",
        "Instalável na tela inicial (PWA)",
      ],
    },
    {
      abbr:"BKO", name:"Backoffice", bg:C.purple,
      tags:["Web","Gestão de acessos","Backoffice"],
      feats:[
        "CRUD de usuários — criar, editar, desativar",
        "Atribuição de perfil por usuário",
        "Vinculação gerente ↔ área/cidade",
        "Log de acessos e atividades",
        "Histórico de último acesso",
        "Configuração de thresholds de alertas",
      ],
    },
    {
      abbr:"API", name:"Pipeline & API", bg:C.greenT,
      tags:["Protheus","ETL","Dados brutos"],
      feats:[
        "Extração dos dados diretamente do Protheus",
        "Transformação e carga no banco analítico",
        "API REST com endpoints por perfil e período",
        "Autenticação JWT e controle de acesso",
        "Engine de alertas com regras de negócio",
        "Push notifications via Firebase FCM",
        "Atualização periódica dos dados",
        "Histórico granular para comparativos",
      ],
    },
  ];
  const profiles=[
    {abbr:"DIR",name:"Diretoria",  desc:"PWA · Visão total de todas as áreas",          bg:C.blueL,  color:C.blueT},
    {abbr:"GER",name:"Gerente",    desc:"PWA · Filtrado pela sua área/cidade",           bg:C.greenL, color:C.green},
    {abbr:"BKO",name:"Backoffice", desc:"Backoffice Web · Gestão de acessos e configs",  bg:C.purpleL,color:C.purple},
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
          <div style={{padding:"9px 12px",borderRadius:8,border:`0.5px solid ${C.border}`,borderLeft:`2.5px solid ${C.greenT}`,marginBottom:8}}>
            <div style={{fontSize:12,fontWeight:600,color:C.text,marginBottom:3}}>Extração Direta — Protheus</div>
            <div style={{fontSize:11,color:C.hint,lineHeight:1.5}}>ETL direto do banco Protheus · Dados brutos · Granularidade total</div>
          </div>
          <div style={{padding:"9px 12px",backgroundColor:C.greenL,borderRadius:8,fontSize:11,color:C.green,lineHeight:1.5,fontWeight:500}}>
            ✓ Extração direta do Protheus — abordagem definida
          </div>
        </div>
        <div style={{...card(),padding:16}}><ST>Estimativas</ST>
          {[{l:"Design UX/UI",v:"2m part-time",w:false},{l:"Eng. Dados (ETL)",v:"2m full-time",w:false},{l:"Dev Backend",v:"3m part-time",w:false},{l:"Dev Frontend/Mobile",v:"3m full-time",w:false},{l:"QA / Testes",v:"2m full-time",w:false}].map((e,i,arr)=>(
            <div key={e.l} style={{display:"flex",justifyContent:"space-between",fontSize:12,padding:"5px 0",borderBottom:i<arr.length-1?`0.5px solid ${C.border}`:"none"}}><span style={{color:C.muted}}>{e.l}</span><span style={{color:e.w?C.amber:C.text,fontWeight:500}}>{e.v}</span></div>
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
      abbr:"PWA", label:"PWA — Imdepa", sub:"Progressive Web App · Mobile-first",
      color:"#1A3A5C", colorL:"#D0DCE8",
      profiles:["DIR · Diretoria","GER · Gerente"],
      desc:"Aplicação web progressiva acessada pelo celular (ou desktop) pela diretoria e gerentes. Mobile-first, instalável na tela inicial como um app nativo.",
      screens:[
        {p:"Diretoria",items:["Login","Home — KPIs totais (Indústria + Revenda)","Módulo Indústria — faturamento, margem, % MC","Módulo Revenda — faturamento, margem, % MC","Filtros por gerente e área","Central de alertas — todas as áreas","Seletor de período Dia / Mês / Ano"]},
        {p:"Gerente",items:["Login","Home — KPIs da sua área + ritmo diário","Módulo da sua área (Indústria ou Revenda)","Filtros dentro da sua área/cidade","Central de alertas da área","Evolução mensal"]},
      ],
    },
    backoffice:{
      abbr:"BKO", label:"Backoffice", sub:"Web · Gestão de acessos",
      color:"#534AB7", colorL:"#EEEDFE",
      profiles:["BKO · Backoffice"],
      desc:"Interface web de administração exclusiva para o perfil Backoffice. Gerencia usuários, perfis e vinculações de áreas. Não tem acesso a dados comerciais.",
      screens:[
        {p:"Backoffice",items:["Login","CRUD de usuários — criar, editar, desativar","Atribuição de perfil por usuário (DIR / GER / BKO)","Vinculação gerente ↔ área/cidade","Log de acessos e atividades","Histórico de último acesso por usuário","Configuração de thresholds de alertas"]},
      ],
    },
    pipeline:{
      abbr:"API", label:"Pipeline & API", sub:"Protheus → ETL → API",
      color:"#3B6D11", colorL:"#EAF3DE",
      profiles:["Extração Protheus","Transformação","Exposição via API"],
      desc:"Extração direta dos dados brutos do banco Protheus, transformação e disponibilização via API para o PWA e o Backoffice.",
      screens:[
        {p:"Fonte",items:["Banco Protheus (SQL Server / Oracle)","Dados brutos de faturamento, margem e KPIs"]},
        {p:"Pipeline",items:["Extração programada dos dados do Protheus","Transformação e carga no banco analítico","Atualização periódica dos dados"]},
        {p:"API",items:["Endpoints de KPIs por perfil e período","Autenticação JWT + controle de perfis","Engine de alertas com regras de negócio","Push notifications via Firebase FCM"]},
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

          {/* Bottom row — PWA + Backoffice */}
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
  // M1–M6 = meses do projeto. Cada feature tem start(0-based) e span (em meses).
  // Legenda de sistemas
  const SYS = {
    discovery:  { label:"Discovery",          color:"#5F5E5A", bg:"#F1EFE8" },
    design:     { label:"Design UX/UI",       color:"#534AB7", bg:"#EEEDFE" },
    dados:      { label:"Pipeline Protheus",  color:"#3B6D11", bg:"#EAF3DE" },
    backend:    { label:"Backend & API",      color:"#185FA5", bg:"#E6F1FB" },
    app:        { label:"PWA",                color:"#2E6DA4", bg:"#D6E4F2" },
    retaguarda: { label:"Dashboard Web",      color:"#1A3A5C", bg:"#D0DCE8" },
    alertas:    { label:"Alertas & Notif.",   color:"#BA7517", bg:"#FAEEDA" },
  };

  // 3 meses visíveis
  const MONTHS = [
    { id:"M1", label:"M1", fase:"Discovery + Design" },
    { id:"M2", label:"M2", fase:"Design + Dev" },
    { id:"M3", label:"M3", fase:"Dev + Homolog." },
  ];

  // Marcos de entrega
  const MARCOS = [
    { at:"M1", label:"M1", title:"Discovery concluído", desc:"Áreas mapeadas, abordagem de dados definida, stack aprovada", color:"#5F5E5A" },
    { at:"M2", label:"M2", title:"Design aprovado", desc:"Wireframes e protótipos validados pela diretoria. Dev inicia.", color:"#534AB7" },
    { at:"M3", label:"M3", title:"MVP Go-live", desc:"PWA + Backoffice em produção — alertas ativos", color:"#185FA5" },
    { at:"M3", label:"M3", title:"Homologação completa", desc:"QA finalizado, dados validados, entrega ao cliente", color:"#BA7517" },
  ];

  // Features: start (0-based), span em meses (3 total)
  const GROUPS = [
    {
      group:"F0 · DISCOVERY", sys:"discovery", abbr:"F0",
      rows:[
        { label:"Mapeamento de áreas por gerente",           sys:"discovery", start:0, span:1, ml:"M1" },
        { label:"Levantamento de acesso ao banco Protheus",   sys:"discovery", start:0, span:1, ml:"M1" },
        { label:"Refinamento técnico (Front + Back)",        sys:"discovery", start:0, span:1, ml:"M1" },
        { label:"Definição cloud provider + stack",          sys:"discovery", start:0, span:1, ml:"M1" },
      ]
    },
    {
      group:"F1 · DESIGN UX/UI", sys:"design", abbr:"F1",
      rows:[
        { label:"Wireframes mobile-first — todas as telas",  sys:"design", start:0, span:2, ml:"M2" },
        { label:"Sistema de design & biblioteca de comp.",   sys:"design", start:0, span:1, ml:"M1" },
        { label:"Protótipos navegáveis + validação diret.",  sys:"design", start:1, span:1, ml:"M2" },
        { label:"Handoff para desenvolvimento (Figma)",      sys:"design", start:1, span:1, ml:"M2" },
      ]
    },
    {
      group:"F2 · PIPELINE DE DADOS (OP. B)", sys:"dados", abbr:"F2",
      rows:[
        { label:"Mapeamento tabelas banco Protheus",          sys:"dados",   start:0, span:1, ml:"M1" },
        { label:"Conector ETL: SQL Server / Oracle",          sys:"dados",   start:0, span:2, ml:"M2" },
        { label:"Pipeline staging → DW (Airflow + dbt)",     sys:"dados",   start:0, span:2, ml:"M2" },
        { label:"Modelagem dimensional: fatos + dimensões",  sys:"dados",   start:1, span:1, ml:"M2" },
        { label:"API REST — endpoints de KPIs",              sys:"backend", start:1, span:2, ml:"M3" },
        { label:"Autenticação JWT + perfis de acesso",       sys:"backend", start:1, span:1, ml:"M2" },
      ]
    },
    {
      group:"F3 · APP MOBILE", sys:"app", abbr:"F3",
      rows:[
        { label:"Login, perfis e navegação base",            sys:"app", start:1, span:1, ml:"M2" },
        { label:"Home — KPIs consolidados + gauge",          sys:"app", start:1, span:2, ml:"M3" },
        { label:"Módulo Indústria — telas e filtros",        sys:"app", start:1, span:2, ml:"M3" },
        { label:"Módulo Revenda — telas e filtros",          sys:"app", start:2, span:1, ml:"M3" },
        { label:"Integração App ↔ API + testes E2E",         sys:"app", start:2, span:1, ml:"M3" },
      ]
    },
    {
      group:"F4 · DASHBOARD WEB", sys:"retaguarda", abbr:"F4",
      rows:[
        { label:"Dashboard Web — controle de acessos (BKO)", sys:"retaguarda", start:1, span:2, ml:"M3" },
        { label:"Dashboard Web — KPIs Diretoria (todas áreas)",sys:"retaguarda", start:1, span:2, ml:"M3" },
        { label:"Dashboard Web — KPIs Gerente (área filtrada)",sys:"retaguarda", start:2, span:1, ml:"M3" },
        { label:"Vinculação gerente ↔ área/cidade",           sys:"retaguarda", start:1, span:1, ml:"M2" },
      ]
    },
    {
      group:"F5 · ALERTAS & HOMOLOGAÇÃO", sys:"alertas", abbr:"F5",
      rows:[
        { label:"Engine de alertas com regras de negócio",   sys:"alertas", start:2, span:1, ml:"M3" },
        { label:"Push notifications — Firebase FCM",         sys:"alertas", start:2, span:1, ml:"M3" },
        { label:"Alertas: Fat., Quinzena, Margem, % MC",     sys:"alertas", start:2, span:1, ml:"M3" },
        { label:"Painel in-app + thresholds configuráveis",  sys:"alertas", start:2, span:1, ml:"M3" },
        { label:"Homologação + QA final",                    sys:"alertas", start:2, span:1, ml:"M3" },
      ]
    },
  ];

  const TOTAL_M = 3;
  const COL_W = 160; // px per month — 3 months, more room
  const LABEL_W = 210; // left label column

  const barColor = (sys) => SYS[sys]?.color || C.navy;
  const barBg    = (sys) => SYS[sys]?.bg    || C.blueL;

  return(
    <div style={{flex:1,overflowY:"auto",backgroundColor:C.bg}}>
      {/* Sub-header */}
      <div style={{padding:"10px 24px 0",borderBottom:`0.5px solid ${C.border}`,backgroundColor:C.white}}>
        <div style={{fontSize:11,color:C.hint,marginBottom:8}}>
          Roadmap / Feature by feature · 3 meses · discovery M1 · design M1–M2 · ETL Protheus M1–M2 · dev M2–M3 · alertas M3 · homologação M3
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
              {n:"1",d:"Acesso ao banco Protheus: SQL Server ou Oracle?",who:"TI Imdepa + Eng. Dados"},
              {n:"2",d:"Mapeamento de áreas por gerente (cidade/filial)",who:"Operações Imdepa"},
              {n:"3",d:"Cloud provider: AWS, GCP ou Azure?",who:"TI + DevOps"},
              {n:"4",d:"Framework PWA: Next.js, Vite ou CRA?",who:"Tech Lead Front"},
              {n:"5",d:"Notificações também por e-mail além do push?",who:"Diretoria"},
              {n:"6",d:"Integração futura com outros módulos Protheus?",who:"Diretoria"},
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
              {r:"Estimativas de dev subestimadas",              prob:"Média",imp:"Alto"},
              {r:"Baixa adoção pelos diretores",                 prob:"Baixa",imp:"Alto"},
              {r:"Schema Protheus diferente entre versões",      prob:"Média",imp:"Alto"},
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
    {id:"M1",fase:"Discovery\n+ Design"},
    {id:"M2",fase:"Design\n+ Dev"},
    {id:"M3",fase:"Dev +\nHomolog."},
  ];
  const COL=160; // px per month — 3 months, more breathing room
  const ROLE_W=160;
  const DED_W=148;

  // segments: {s = start (0-based, supports 0.5 for mid-month), sp = span in months, t = "full"|"part"}
  const ROLES=[
    {
      a:"UX",  label:"Designer UX/UI",
      ded:"Part-time\nM1–M2",
      color:"#6C63D4",
      skills:"Figma · Mobile · Design System · Prototipação",
      segs:[{s:0, sp:2, t:"part"}],
    },
    {
      a:"BE",  label:"Dev Backend Pleno",
      ded:"Part-time\nM1–M3",
      color:"#1A3A5C",
      skills:"Node.js · API REST · JWT · PostgreSQL · Docker",
      segs:[{s:0, sp:3, t:"part"}],
    },
    {
      a:"FE",  label:"Dev Frontend / Mobile",
      ded:"Full-time\nM1 (15d) – M3",
      color:"#2E6DA4",
      skills:"React · PWA · TypeScript · Firebase FCM · CSS mobile-first",
      segs:[{s:0.5, sp:2.5, t:"full"}],
    },
    {
      a:"DE",  label:"Eng. de Dados",
      ded:"Full-time\nM1–M2",
      color:"#3B6D11",
      skills:"Python · SQL · Airflow · dbt · PostgreSQL · SQL Server · TOTVS/Protheus",
      segs:[{s:0, sp:2, t:"full"}],
    },
    {
      a:"QA",  label:"QA / Testes",
      ded:"Full-time\nM2–M3",
      color:"#BA7517",
      skills:"Testes funcionais · Regressão · E2E · Performance",
      segs:[{s:1, sp:2, t:"full"}],
    },
  ];

  const monthBg=["#FFF8F0","#F0F7FF","#F5FFF0"];
  const monthFaseColor=["#E8A020","#2E6DA4","#3B8C2A"];

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
            {accent:"#3B6D11", lbl:"PESSOAS NO TIME",   val:"5",        sub:"Papéis distintos e complementares"},
            {accent:"#2E6DA4", lbl:"PERÍODO",           val:"3 meses",  sub:"M1–M3 · discovery → dev → homologação"},
            {accent:"#BA7517", lbl:"GO-LIVE",           val:"M3",       sub:"PWA + Backoffice em produção"},
          ].map(m=>(
            <div key={m.lbl} style={{backgroundColor:C.white,border:`0.5px solid ${C.border}`,borderRadius:10,padding:"16px 20px",borderTop:`2.5px solid ${m.accent}`}}>
              <div style={{fontSize:10,fontWeight:600,color:C.hint,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8}}>{m.lbl}</div>
              <div style={{fontSize:28,fontWeight:500,color:C.text,lineHeight:1,marginBottom:6}}>{m.val}</div>
              <div style={{fontSize:11,color:C.hint}}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Table */}
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
              {/* Role label — sticky */}
              <div style={{width:ROLE_W,minWidth:ROLE_W,padding:"0 14px",borderRight:`0.5px solid ${C.border}`,flexShrink:0,display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,backgroundColor:ri%2===0?C.white:"#FAFBFC",zIndex:1}}>
                <div style={{width:24,height:24,borderRadius:6,background:r.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#fff",flexShrink:0}}>{r.a}</div>
                <span style={{fontSize:12,fontWeight:500,color:C.text,lineHeight:1.3}}>{r.label}</span>
              </div>
              {/* Dedication — sticky */}
              <div style={{width:DED_W,minWidth:DED_W,padding:"0 12px",borderRight:`0.5px solid ${C.border}`,flexShrink:0,display:"flex",alignItems:"center",position:"sticky",left:ROLE_W,backgroundColor:ri%2===0?C.white:"#FAFBFC",zIndex:1}}>
                <span style={{fontSize:10.5,color:C.muted,lineHeight:1.6,whiteSpace:"pre-line"}}>{r.ded}</span>
              </div>
              {/* Bar cells */}
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
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:28,height:12,borderRadius:3,border:"1.5px dashed #6C63D4",backgroundImage:"repeating-linear-gradient(45deg,rgba(108,99,212,0.15) 0px,rgba(108,99,212,0.15) 3px,transparent 3px,transparent 8px)"}}/>
              <span style={{fontSize:11,color:C.muted}}>Part time / apoio</span>
            </div>
            <div style={{marginLeft:"auto",fontSize:11,color:C.hint}}>3 meses · M1–M3 · discovery → dev → alertas → homologação</div>
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
// PAGE: SCOPE
// ═══════════════════════════════════════════════════════════════════════════════
function PageScope(){
  const SC2={MVP:{color:C.blueT,bg:C.blueL},Fase3:{color:C.amber,bg:C.amberL},Futuro:{color:C.gray,bg:C.grayL}};
  const SL={MVP:"MVP",Fase3:"Fase 3",Futuro:"Futuro"};
  const modules=[
    {a:"AU",mod:"Autenticação — Todos os sistemas",bg:C.grayL,color:C.gray,items:[{f:"Login com e-mail e senha",s:"MVP"},{f:"Sessão persistente com JWT",s:"MVP"},{f:"Recuperação de senha por e-mail",s:"MVP"},{f:"Controle de acesso por perfil",s:"MVP"},{f:"Biometria / Face ID",s:"Futuro"}]},
    {a:"DW",mod:"PWA — Imdepa",bg:C.blueL,color:C.navy,items:[
      {f:"Home — KPIs consolidados por perfil",s:"MVP"},
      {f:"Módulo Indústria — faturamento e margem",s:"MVP"},
      {f:"Módulo Revenda — faturamento e margem",s:"MVP"},
      {f:"Filtros por gerente e área/cidade",s:"MVP"},
      {f:"Gráficos de evolução e comparativo",s:"MVP"},
      {f:"Seletor de período Dia / Mês / Ano",s:"MVP"},
      {f:"Instalável na tela inicial (PWA)",s:"MVP"},
      {f:"Configuração de thresholds de alertas",s:"Fase3"},
    ]},
    {a:"BKO",mod:"Backoffice",bg:C.purpleL,color:C.purple,items:[
      {f:"CRUD de usuários",s:"MVP"},
      {f:"Atribuição de perfil",s:"MVP"},
      {f:"Vinculação gerente ↔ área/cidade",s:"MVP"},
      {f:"Log de acessos",s:"MVP"},
      {f:"Histórico de último acesso",s:"MVP"},
      {f:"Config. de thresholds de alertas",s:"Fase3"},
    ]},
    {a:"API",mod:"Pipeline & API — Protheus",bg:C.greenL,color:C.green,items:[
      {f:"Extração dos dados diretamente do Protheus",s:"MVP"},
      {f:"Transformação e carga no banco analítico",s:"MVP"},
      {f:"API REST — endpoints por perfil e período",s:"MVP"},
      {f:"Autenticação JWT + controle de acesso",s:"MVP"},
      {f:"Engine de alertas com regras de negócio",s:"Fase3"},
      {f:"Atualização periódica dos dados",s:"MVP"},
    ]},
    {a:"NO",mod:"Notificações & Alertas",bg:C.amberL,color:C.amber,items:[
      {f:"Push notification via FCM",s:"Fase3"},
      {f:"Painel in-app com histórico de alertas",s:"Fase3"},
      {f:"Alerta: fat. médio diário abaixo do ritmo",s:"Fase3"},
      {f:"Alerta: 1ª quinzena abaixo do esperado",s:"Fase3"},
      {f:"Alerta: margem abaixo do piso",s:"Fase3"},
      {f:"Alerta: % MC fora da faixa",s:"Fase3"},
      {f:"Alerta: meta mensal em risco",s:"Fase3"},
      {f:"Thresholds configuráveis no Backoffice",s:"Fase3"},
    ]},
  ];
  const all=modules.flatMap(m=>m.items);
  const counts=[{k:"MVP"},{k:"Fase3"},{k:"Futuro"}].map(c=>({...c,count:all.filter(i=>i.s===c.k).length}));
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
          {["Parser de e-mail Protheus (descartado)","Integração com módulo de estoque Protheus","Integração com módulo financeiro Protheus","Relatórios exportáveis (PDF / Excel)","Multi-tenant / multi-empresa","Biometria / Face ID no app","Modo offline completo no app"].map((s,i,arr)=>(
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
