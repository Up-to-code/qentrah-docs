import { BrandMark } from './Brand.jsx'
import Icon from './Icon.jsx'
/** Generated art provides material detail; original Qentrah SVG stays independent. */
export default function MotionScene({ paused, toggleMotion, reduced }) {
  return <div className="motion-scene generated-scene" data-paused={paused}>
    <div className="asset-glow" aria-hidden="true"/>
    <div className="hero-artwork">
      <img className="hero-sculpture" src="/artwork/qentrah-hero-vite.webp" width="1024" height="1024" alt="An exploded stack of black metal and cobalt-blue glass, with Qentrah’s original mark on the base" fetchPriority="high"/>
      <div className="original-brand-overlay" aria-hidden="true"><BrandMark size={55}/></div>
    </div>
    <div className="scene-caption"><span><i /> FROM IDEA TO UNDERSTANDING</span><button type="button" className="motion-control" onClick={toggleMotion} aria-pressed={!paused} disabled={reduced}><Icon name={paused ? 'play' : 'pause'} size={13}/>{reduced ? 'Motion off' : paused ? 'Play motion' : 'Pause motion'}</button></div>
  </div>
}
