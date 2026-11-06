import { guides } from '../content/guides.js'
import CodeBlock from './CodeBlock.jsx'
import Icon from './Icon.jsx'
function Block({ block }) {
  if(block.type==='code')return <CodeBlock code={block.code} language={block.language}/>
  if(block.type==='callout')return <aside className="doc-callout">{block.text}</aside>
  if(block.type==='list')return <ul>{block.items.map(item=><li key={item}>{item}</li>)}</ul>
  if(block.type==='link')return <p><a href={block.href}>{block.text}<Icon name="external" size={15}/></a></p>
  return <p>{block.text}</p>
}
export default function DocPage({ slug }) {
  const guide = guides.find(x=>x.slug===slug)
  if(!guide)return <main className="not-found frame" id="main-content" tabIndex={-1}><span className="eyebrow">PAGE NOT FOUND</span><h1>Let’s find your way back.</h1><p>This starter does not contain that guide.</p><a className="button primary" href="#/docs/introduction">Open the introduction<Icon name="arrow"/></a></main>
  const index=guides.indexOf(guide)
  return <main id="main-content" className="docs-layout frame" tabIndex={-1}><aside className="doc-sidebar"><a className="doc-home-link" href="#"><Icon name="arrow" className="back-arrow" size={15}/>Back to overview</a><p className="eyebrow">THE STARTER</p><nav aria-label="Documentation">{guides.map(x=><a href={`#/docs/${x.slug}`} key={x.slug} aria-current={x.slug===slug?'page':undefined}>{x.title}</a>)}</nav><div className="sidebar-source"><Icon name="code"/><p>Content lives in<br/><code>src/content/guides.js</code></p></div></aside>
  <article className="doc-article"><div className="doc-breadcrumb">Qentrah Docs <span>/</span> The starter</div><h1>{guide.title}</h1><p className="doc-lead">{guide.description}</p>{guide.sections.map(section=><section key={section.id} id={section.id} tabIndex={-1}><h2><a href={`#/docs/${slug}?section=${section.id}`}>{section.title}<span className="heading-anchor" aria-hidden="true">#</span></a></h2>{section.blocks.map((block,i)=><Block block={block} key={i}/>)}</section>)}<div className="doc-pagination">{index>0?<a href={`#/docs/${guides[index-1].slug}`}><small>PREVIOUS</small>{guides[index-1].title}</a>:<span/>}{index<guides.length-1&&<a href={`#/docs/${guides[index+1].slug}`}><small>NEXT</small>{guides[index+1].title}<Icon name="arrow" size={16}/></a>}</div></article>
  <aside className="doc-toc"><p className="eyebrow">ON THIS PAGE</p><nav aria-label="On this page">{guide.sections.map(x=><a href={`#/docs/${slug}?section=${x.id}`} key={x.id}>{x.title}</a>)}</nav></aside></main>
}
