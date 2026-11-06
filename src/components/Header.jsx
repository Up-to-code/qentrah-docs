import { useEffect, useRef, useState } from 'react'
import Brand from './Brand.jsx'
import Icon from './Icon.jsx'
import { site } from '../content/site.js'
import { guides } from '../content/guides.js'
import { products, packages } from '../content/products.js'
const searchItems = [
  ...guides.map(x => ({title:x.title, description:x.description, href:`#/docs/${x.slug}`,type:'Starter guide'})),
  ...products.map(x=>({title:x.name,description:x.description,href:x.href,type:x.category})),
  ...packages.map(x=>({title:x.name,description:x.description,href:`https://qentrah.com/docs/${x.guide}`,type:'Package'})),
]
export default function Header({ theme, toggleTheme }) {
  const [menu, setMenu] = useState(false)
  const [resources, setResources] = useState(false)
  const [query, setQuery] = useState('')
  const [banner, setBanner] = useState(true)
  const dialog = useRef(null)
  const header = useRef(null)
  const trigger = useRef(null)
  function closeSearch() { dialog.current.close(); trigger.current?.focus() }
  function openSearch(e) {
    trigger.current = e?.currentTarget || document.activeElement
    setQuery(''); setMenu(false); setResources(false); dialog.current.showModal()
  }
  useEffect(()=>{
    function keydown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k') { e.preventDefault(); if(!dialog.current.open) openSearch() }
      if(e.key==='Escape') { header.current?.querySelector('button[aria-expanded="true"]')?.focus(); if(dialog.current.open){e.preventDefault();closeSearch()} setMenu(false);setResources(false) }
    }
    function outside(e){if(!header.current?.contains(e.target))setResources(false)}
    function navigate(){setMenu(false);setResources(false);if(dialog.current.open)closeSearch()}
    document.addEventListener('keydown',keydown);document.addEventListener('pointerdown',outside);window.addEventListener('hashchange',navigate)
    return ()=>{document.removeEventListener('keydown',keydown);document.removeEventListener('pointerdown',outside);window.removeEventListener('hashchange',navigate)}
  },[])
  const results = searchItems.filter(x=>(x.title+' '+x.description+' '+x.href+' '+x.type).toLowerCase().includes(query.toLowerCase()))
  return <>
    {banner && <div className="announcement"><a href="#/docs/introduction"><span className="announcement-dot" />{site.announcement}<span className="announcement-link">Explore the starter <Icon name="external" size={14} /></span></a><button type="button" aria-label="Dismiss announcement" onClick={()=>setBanner(false)}><Icon name="close" size={16} /></button></div>}
    <header ref={header} className="site-header frame"><div className="header-start"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{site.nav.map(x=><a href={x.href} key={x.label}>{x.label}</a>)}<div className="resource-menu"><button type="button" onClick={()=>setResources(!resources)} aria-expanded={resources} aria-controls="resource-links">Resources<Icon name="chevron" size={14} /></button>{resources&&<div id="resource-links" className="dropdown">{site.resources.map(x=><a key={x.label} href={x.href}>{x.label}<Icon name="external" size={14}/></a>)}</div>}</div></nav></div>
    <div className="header-actions"><button className="search-trigger" type="button" onClick={openSearch} aria-label="Search documentation"><Icon name="search" size={16}/><span>Search docs</span><kbd>⌘ K</kbd></button><span className="header-separator"/><button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`} type="button"><Icon name={theme==='dark'?'sun':'moon'} size={18}/></button><a className="icon-button github-link" href={site.github} aria-label="Qentrah on GitHub"><Icon name="github" size={19}/></a><button type="button" className="icon-button mobile-toggle" aria-expanded={menu} aria-controls="mobile-nav" aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}><Icon name={menu?'close':'menu'} size={22}/></button></div>
    {menu&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...site.nav,...site.resources].map(x=><a key={x.label} href={x.href}>{x.label}<Icon name="arrow" size={16}/></a>)}</nav>}</header>
    <dialog ref={dialog} className="search-dialog" aria-labelledby="search-title" onCancel={e=>{e.preventDefault();closeSearch()}} onClick={e=>{if(e.target===dialog.current)closeSearch()}}><div className="search-dialog-inner"><div className="search-dialog-heading"><h2 id="search-title">Find your next step.</h2><button type="button" className="icon-button" onClick={closeSearch} aria-label="Close search"><Icon name="close" /></button></div><label htmlFor="search-input" className="sr-only">Search products and guides</label><div className="search-field"><Icon name="search"/><input id="search-input" autoFocus type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products, packages, and guides…"/></div><p className="search-count" role="status">{results.length} {results.length===1?'result':'results'}</p><ul>{results.map(x=><li key={x.title}><a href={x.href} onClick={closeSearch}><span><small>{x.type}</small><strong>{x.title}</strong><span>{x.description}</span></span><Icon name="arrow"/></a></li>)}</ul>{!results.length&&<p className="empty-state">No matches yet. Try “Kyna”, “CMS”, or “customization”.</p>}</div></dialog>
  </>
}
