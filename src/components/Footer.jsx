import Brand, { BrandMark } from './Brand.jsx'
import Icon from './Icon.jsx'
import { site, home } from '../content/site.js'
const currentYear = new Date().getFullYear()
export default function Footer({ compact=false }) {
  return <footer className="site-footer frame">{!compact&&<div className="footer-cta ticks"><div className="footer-texture" aria-hidden="true"/><BrandMark size={34}/><h2>{home.footer.title[0]}<br/>{home.footer.title[1]}</h2><p>{home.footer.description}</p><a className="button white" href="#/docs/introduction">Start building<Icon name="arrow" size={16}/></a></div>}<div className="footer-links"><div className="footer-brand"><Brand compact/><p>{home.footer.brandDescription[0]}<br/>{home.footer.brandDescription[1]}</p></div>{site.footer.map(group=><div key={group.title}><p className="eyebrow">{group.title}</p><ul>{group.links.map(([label,href])=><li key={label}><a href={href}>{label}</a></li>)}</ul></div>)}</div><div className="footer-bottom"><span>© {currentYear} Qentrah</span><span>Made for the next idea.<span className="blue-dot"/></span><a href="#/docs/contributing">MIT licensed code<Icon name="external" size={12}/></a></div></footer>
}
