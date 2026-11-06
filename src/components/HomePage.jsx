import { useState } from 'react'
import { site, home } from '../content/site.js'
import { products, packages } from '../content/products.js'
import { BrandMark } from './Brand.jsx'
import MotionScene from './MotionScene.jsx'
import CodeBlock from './CodeBlock.jsx'
import Icon from './Icon.jsx'
function QuickStart() {
  const [manager,setManager]=useState('npm')
  const commands = { npm: 'npm install\nnpm run dev', pnpm: 'pnpm install\npnpm dev', Bun: 'bun install\nbun run dev' }
  return <div className="quickstart"><div className="manager-tabs" role="group" aria-label="Package manager">{Object.keys(commands).map(x=><button type="button" key={x} aria-pressed={x===manager} onClick={()=>setManager(x)}>{x}</button>)}<span>LOCAL QUICK START</span></div><CodeBlock key={manager} code={commands[manager]} language="bash"/><p>Have the source? Open a terminal in the project folder.</p></div>
}
function ProductWordmark({ product }) {
  return <span className={`product-wordmark wordmark-${product.id}`}>{product.id==='qh'&&<img src="/brand/qh-logo.svg" width="25" height="25" alt=""/>}{product.name}</span>
}
function Feature({ number, title, description, children, className='' }) {
  return <article className={`feature ${className}`}><div className="feature-copy"><span className="eyebrow">{number}</span><h3>{title}</h3><p>{description}</p></div>{children}</article>
}
export default function HomePage({ paused, toggleMotion, reduced }) {
  return <main id="main-content" tabIndex={-1}>
    <section className="hero frame ticks"><div className="hero-copy"><div className="hero-introduction"><span className="eyebrow hero-eyebrow"><BrandMark size={15}/>{site.hero.eyebrow}</span><h1>{site.hero.title[0]}<br/><span>{site.hero.title[1]}</span></h1><p className="hero-description">{site.hero.description}</p><div className="hero-buttons"><a className="button primary" href={site.hero.primary.href}>{site.hero.primary.label}<Icon name="arrow" size={16}/></a><a className="button secondary" href={site.hero.secondary.href}>{site.hero.secondary.label}<Icon name="external" size={15}/></a></div></div><QuickStart/></div><MotionScene paused={paused} toggleMotion={toggleMotion} reduced={reduced}/></section>
    <section className="ecosystem frame ticks"><p>{home.ecosystem}</p><div className="wordmark-row">{products.map(product=><a href={product.href} key={product.id}><ProductWordmark product={product}/></a>)}</div></section>
    <section className="section-intro frame"><span className="eyebrow">{home.intro.eyebrow}</span><h2>{home.intro.title[0]}<br/>{home.intro.title[1]}</h2><p>{home.intro.description}</p></section>
    <section className="features-grid frame ticks">
      <Feature {...home.features.start}><div className="feature-terminal"><CodeBlock filename="your-project / terminal" code={'$ npm install\n$ npm run dev\n\n  VITE  ready\n\n  ➜  Local: http://localhost:5173/'} language="bash"/><div className="terminal-note"><span className="status-dot"/>Your next idea is ready to begin.</div></div></Feature>
      <Feature {...home.features.explore}><div className="product-map">{products.slice(0,4).map((product,i)=><a href={product.href} key={product.id}><span className="product-map-number">0{i+1}</span><ProductWordmark product={product}/><Icon name="external" size={16}/></a>)}</div></Feature>
      <Feature {...home.features.customize}><div className="generated-feature generated-guides"><img src="/artwork/documentation-sculpture.webp" loading="lazy" width="1536" height="1024" alt="Black document cards with illuminated blue glass edges"/><a className="artwork-caption" href="#/docs/customization"><span>src / content / site.js</span><Icon name="arrow" size={15}/></a></div></Feature>
      <Feature {...home.features.motion}><div className="generated-feature generated-creative"><img src="/artwork/creative-sculpture.webp" loading="lazy" width="1536" height="1024" alt="A modular sculpture made of cobalt glass, white porcelain and black ceramic cubes"/><span className="artwork-label">SPACE FOR YOUR NEXT IDEA</span></div></Feature>
    </section>
    <section id="products" className="product-section frame ticks"><div className="section-topline"><div><span className="eyebrow">{home.products.eyebrow}</span><h2>{home.products.title}</h2></div><a className="text-link" href={home.products.href}>{home.products.more}<Icon name="arrow" size={16}/></a></div><div className="product-cards">{products.map(product=><a className={`product-card card-${product.id}`} href={product.href} key={product.id}>{product.image&&<img className="product-cover" src={product.image} loading="lazy" width="640" height="360" alt="QH Pixels studio artwork from Qentrah"/>}<div className="product-card-body"><span className="eyebrow">{product.category}</span><h3>{product.name}<Icon name="external" size={20}/></h3><p>{product.description}</p><span className="product-card-link">Explore {product.name}<Icon name="arrow" size={15}/></span></div></a>)}</div></section>
    <section id="packages" className="packages-section frame ticks"><div className="section-topline"><div><span className="eyebrow">{home.packages.eyebrow}</span><h2>{home.packages.title}</h2></div><a className="text-link" href={home.packages.href}>{home.packages.more}<Icon name="arrow" size={16}/></a></div><div className="package-grid">{packages.map(pkg=><a href={`https://qentrah.com/docs/${pkg.guide}`} className="package-card" key={pkg.name}><div className="package-meta"><Icon name="code" size={21}/><span>{pkg.type}</span></div><h3>{pkg.name}</h3><p>{pkg.description}</p><span className="package-guide">Read the guide<Icon name="arrow" size={16}/></span></a>)}</div></section>
    <section className="open-section frame ticks"><div><span className="eyebrow">{home.open.eyebrow}</span><h2>{home.open.title[0]}<br/>{home.open.title[1]}</h2><p>{home.open.description}</p><div className="hero-buttons"><a className="button primary" href="#/docs/customization">Make it yours<Icon name="arrow" size={16}/></a><a className="text-link" href="#/docs/contributing">How to contribute<Icon name="external" size={15}/></a></div><span className="open-license">MIT LICENSED CODE · BUILT WITH REACT</span></div><div className="guide-preview"><div className="preview-address"><span/><span/><span/><code>your-project / docs</code></div><div className="preview-content"><span className="eyebrow">GETTING STARTED</span><h3>From your first edit<br/>to your own documentation.</h3><p>Give your ideas a place to grow.</p><div className="preview-steps"><span><i>1</i>Clone the source</span><span><i>2</i>Make it your own</span><span><i>3</i>Share what you build</span></div><a href="#/docs/introduction">Start with the introduction<Icon name="arrow" size={16}/></a></div></div></section>
  </main>
}
