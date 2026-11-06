import { useEffect, useState, useSyncExternalStore } from 'react'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import DocPage from './components/DocPage.jsx'
import Footer from './components/Footer.jsx'
import { guides } from './content/guides.js'
import { site } from './content/site.js'
const subscribeHash = callback => {window.addEventListener('hashchange',callback);return()=>window.removeEventListener('hashchange',callback)}
const getHash = ()=>window.location.hash
const motionQuery=window.matchMedia('(prefers-reduced-motion: reduce)')
const subscribeMotion = callback=>{motionQuery.addEventListener('change',callback);return()=>motionQuery.removeEventListener('change',callback)}
export default function App() {
  const hash=useSyncExternalStore(subscribeHash,getHash)
  const reduced=useSyncExternalStore(subscribeMotion,()=>motionQuery.matches)
  const [paused,setPaused]=useState(false)
  const [theme,setTheme]=useState(()=>document.documentElement.dataset.theme||'dark')
  const isDoc=hash.startsWith('#/docs/')
  const slug=hash.split('?')[0].split('/')[2]
  const effectivePaused=paused||reduced
  function toggleTheme(){const next=theme==='dark'?'light':'dark';setTheme(next);document.documentElement.dataset.theme=next;try{localStorage.setItem('qentrah-docs-theme',next)}catch{/* Storage may be unavailable in private browsing. */}}
  useEffect(()=>{
    document.title=isDoc?`${guides.find(x=>x.slug===slug)?.title||'Page not found'} | ${site.name}`:`${site.name} — Good ideas. Clear documentation.`
    const section=isDoc?new URLSearchParams(hash.split('?')[1]||'').get('section'):hash.slice(1)
    const frame=requestAnimationFrame(()=>{if(section)document.getElementById(section)?.scrollIntoView();else { window.scrollTo(0,0); if(isDoc)document.getElementById('main-content')?.focus({preventScroll:true}) }})
    return()=>cancelAnimationFrame(frame)
  },[hash,isDoc,slug])
  return <div className="app" data-motion={effectivePaused?'paused':'playing'}><a className="skip-link" href={isDoc?`#/docs/${slug}?section=main-content`:'#main-content'}>Skip to content</a><Header theme={theme} toggleTheme={toggleTheme}/>{isDoc?<DocPage key={slug} slug={slug}/>:<HomePage paused={effectivePaused} toggleMotion={()=>setPaused(!paused)} reduced={reduced}/>}<Footer compact={isDoc}/></div>
}
