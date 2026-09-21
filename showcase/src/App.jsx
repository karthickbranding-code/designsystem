import React,{useMemo,useState} from "react";
import * as DS from "../../src/index.jsx";
const groups=[
{name:"Foundations",description:"Tokens, principles and visual foundations.",items:["Foundations"]},
{name:"Core",description:"Essential interface building blocks.",items:["Button","IconButton","Card","MetricCard","Badge","Status","Avatar"]},
{name:"Forms",description:"Inputs, search and file collection.",items:["Input","SearchInput","FileUpload"]},
{name:"Data",description:"Tables, filters, pagination and commands.",items:["DataTable","Pagination","FilterBar","CommandPalette"]},
{name:"Navigation",description:"Application navigation and page structure.",items:["AppShell","PageHeader","Tabs"]},
{name:"Feedback",description:"System states, alerts and loading patterns.",items:["Alert","Skeleton","EmptyState"]},
{name:"Overlays",description:"Focused dialogs and layered interactions.",items:["Dialog"]},
{name:"Website",description:"Marketing and public-facing patterns.",items:["Hero","FeatureGrid","CTA","FAQ"]},
{name:"AI",description:"AI-native product interaction patterns.",items:["AIChat","AgentCard","InsightCard"]},
{name:"Industrial",description:"Industrial operations and monitoring patterns.",items:["StatusMonitor"]}
];

const descriptions={
Foundations:"The visual language behind Enterprise Tech Blue.",
Button:"Primary, secondary, ghost and destructive actions.",
IconButton:"Compact icon-only actions for dense interfaces.",
Card:"Reusable surface for product content and information.",
MetricCard:"High-signal KPI presentation for dashboards.",
Badge:"Compact semantic labels for categories and states.",
Status:"Operational status indicators for product workflows.",
Avatar:"Identity representation for users and teams.",
Input:"Labeled text input with helper and validation states.",
SearchInput:"Fast search pattern for applications and documentation.",
FileUpload:"Controlled file ingestion pattern for AI workflows.",
DataTable:"Dense structured data presentation for enterprise applications.",
Pagination:"Navigation through large result sets.",
FilterBar:"Consistent filtering controls for data-heavy views.",
CommandPalette:"Keyboard-first command and navigation surface.",
AppShell:"Responsive application shell with header, sidebar and main content.",
PageHeader:"Consistent page title, context and action area.",
Tabs:"Switch between related views without losing context.",
Alert:"Clear system feedback for important information and actions.",
Skeleton:"Loading placeholder for asynchronous content.",
EmptyState:"Helpful first-run and no-data experience.",
Dialog:"Focused confirmation, form and decision surface.",
Hero:"High-impact website introduction pattern.",
FeatureGrid:"Structured presentation of product capabilities.",
CTA:"Conversion-focused action section.",
FAQ:"Expandable answers for common questions.",
AIChat:"Conversational interface for AI-assisted workflows.",
AgentCard:"Reusable surface for AI agents and capabilities.",
InsightCard:"Actionable AI-generated insight presentation.",
StatusMonitor:"Operational health monitoring for industrial systems."
};
function Demo({name}){const C=DS[name];if(name==="Foundations")return <section><h2>Foundations</h2><p>Enterprise Tech Blue uses blue primary actions, neutral surfaces, 4px base spacing, 8px rhythm, Inter/system typography, borders before shadows and accessible focus states.</p><div className="swatches"><span>#2563EB</span><span>#F8FAFC</span><span>#0F172A</span><span>#E2E8F0</span><span>#10B981</span><span>#F59E0B</span><span>#F43F5E</span></div></section>;
if(name==="Button")return <section><h2>Button</h2><div className="demo-row"><C>Primary</C><C variant="secondary">Secondary</C><C variant="ghost">Ghost</C><C variant="destructive">Destructive</C><C disabled>Disabled</C></div><pre className="code">&lt;Button&gt;Primary&lt;/Button&gt;</pre></section>;
if(name==="IconButton")return <section><h2>IconButton</h2><div className="demo-row"><C aria-label="Add">+</C><C aria-label="Close">×</C><C disabled aria-label="More">•••</C></div></section>;
if(name==="Card")return <section><h2>Card</h2><C><strong>Factory Intelligence</strong><p>Reusable surface for dashboard content, product modules and business information.</p></C></section>;
if(name==="MetricCard")return <section><h2>MetricCard</h2><div className="demo-grid"><C label="AI Opportunities" value="128" trend="+18%" /><C label="Qualified Leads" value="42" trend="+12%" /></div></section>;
if(name==="Badge"||name==="Status")return <section><h2>{name}</h2><div className="demo-row"><C>Active</C><C variant="success">Success</C><C variant="warning">Warning</C><C variant="error">Error</C></div></section>;
if(name==="Avatar")return <section><h2>Avatar</h2><div className="demo-row"><C initials="KN"/><C initials="AI"/><C initials="BLP"/></div></section>;
if(name==="Input"||name==="SearchInput")return <section><h2>{name}</h2><C label="Company" placeholder="Enter company name" helperText="Use the registered company name." /></section>;
if(name==="FileUpload")return <section><h2>FileUpload</h2><C /></section>;
if(name==="DataTable")return <section><h2>DataTable</h2><C columns={[{key:"name",label:"Opportunity"},{key:"status",label:"Status"},{key:"owner",label:"Owner"}]} data={[{name:"Predictive Maintenance",status:"New",owner:"Karthick"},{name:"Energy Optimization",status:"Review",owner:"Marketing"},{name:"Machine Vision",status:"Qualified",owner:"Sales"}]} /></section>;
if(name==="Pagination")return <section><h2>Pagination</h2><C page={2} totalPages={8} onPageChange={()=>{}} /></section>;
if(name==="FilterBar")return <section><h2>FilterBar</h2><C filters={["All","Active","Review","Completed"]} /></section>;
if(name==="Tabs")return <section><h2>Tabs</h2><C tabs={["Overview","Campaigns","Analytics"]} activeTab="Overview" /></section>;
if(name==="Alert")return <section><h2>Alert</h2><C type="info">Your campaign workspace is ready.</C></section>;
if(name==="Skeleton")return <section><h2>Skeleton</h2><C width="100%" height="72px" /></section>;
if(name==="EmptyState")return <section><h2>EmptyState</h2><C title="No campaigns yet" description="Create your first campaign to begin." /></section>;
if(name==="Dialog")return <section><h2>Dialog</h2><p>Use the component for focused confirmations and forms.</p><C open title="Example dialog" onClose={()=>{}}>Dialog content</C></section>;
if(name==="Hero")return <section><h2>Hero</h2><C title="AI That Works Where Industry Happens." description="Reusable website hero pattern for Industry.AI products." primaryAction="Explore AI" /></section>;
if(name==="FeatureGrid")return <section><h2>FeatureGrid</h2><C features={[{title:"Predict",description:"Anticipate equipment failures."},{title:"Prevent",description:"Act before downtime."},{title:"Improve",description:"Optimize operations."}]} /></section>;
if(name==="CTA")return <section><h2>CTA</h2><C title="Ready to explore AI opportunities?" buttonLabel="Start Assessment" /></section>;
if(name==="FAQ")return <section><h2>FAQ</h2><C items={[{question:"Is this on-premise?",answer:"It can be deployed for sovereign industrial environments."},{question:"Can it integrate existing data?",answer:"Yes, through appropriate product connectors."}]} /></section>;
if(name==="AIChat")return <section><h2>AIChat</h2><C messages={[{role:"assistant",content:"What would you like to analyze?"}]} /></section>;
if(name==="AgentCard")return <section><h2>AgentCard</h2><C title="Marketing Intelligence Agent" description="Monitors campaigns, leads and content performance." /></section>;
if(name==="InsightCard")return <section><h2>InsightCard</h2><C title="Insight" insight="Lead quality improved after targeted industrial content." /></section>;
if(name==="StatusMonitor")return <section><h2>StatusMonitor</h2><C title="Plant AI Gateway" status="Operational" /></section>;
return <section><h2>{name}</h2><p>Documentation page ready for this component.</p></section>}
function ComponentCard({name,onOpen}){
return <button className="component-card" onClick={()=>onOpen(name)}>
  <div className="component-card-preview"><span className="preview-dot"/><span className="preview-line preview-line-long"/><span className="preview-line"/><span className="preview-control"/></div>
  <div className="component-card-body">
    <div className="component-card-title"><strong>{name}</strong><span>→</span></div>
    <p>{descriptions[name]}</p>
    <span className="component-card-link">View component</span>
  </div>
</button>;
}

export default function App(){
const [activeGroup,setActiveGroup]=useState("Core");
const [active,setActive]=useState(null);
const [q,setQ]=useState("");
const filtered=useMemo(()=>{
const query=q.trim().toLowerCase();
if(!query)return groups;
return groups.map(g=>({...g,items:g.items.filter(x=>x.toLowerCase().includes(query)||g.name.toLowerCase().includes(query))})).filter(g=>g.items.length);
},[q]);
const currentGroup=groups.find(g=>g.name===activeGroup)||groups[1];
const selectGroup=name=>{setActiveGroup(name);setActive(null);};
return <div className="showcase">
<aside className="sidebar">
<div className="brand-block"><div className="brand-mark">ET</div><div><strong>Enterprise Tech Blue</strong><span>Design System</span></div></div>
<div className="sidebar-section-label">Components</div>
<input className="side-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search components..."/>
<nav className="accordion">
{filtered.map(group=>{
const open=activeGroup===group.name;
return <div className={`accordion-group ${open?"open":""}`} key={group.name}>
<button className="accordion-trigger" onClick={()=>selectGroup(group.name)}><span className="chevron">{open?"⌄":"›"}</span><span>{group.name}</span><em>{group.items.length}</em></button>
{open&&<div className="accordion-items">{group.items.map(item=><button className={active===item?"accordion-item active":"accordion-item"} onClick={()=>setActive(item)} key={item}>{item}</button>)}</div>}
</div>;
})}
</nav>
<div className="sidebar-footer"><span>Enterprise Tech Blue</span><small>v0.1.0</small></div>
</aside>
<main className="content">
<header className="page-header"><div><span className="eyebrow">DESIGN SYSTEM / {activeGroup.toUpperCase()}</span><h1>{active||activeGroup}</h1><p>{active?descriptions[active]:currentGroup.description}</p></div><span className="version-pill">v0.1.0</span></header>
{active?<div className="detail-view"><button className="back-button" onClick={()=>setActive(null)}>← Back to {activeGroup}</button><Demo name={active}/></div>:<div className="component-grid">{currentGroup.items.map(item=><ComponentCard key={item} name={item} onOpen={setActive}/>)}</div>}
</main>
</div>;
}
