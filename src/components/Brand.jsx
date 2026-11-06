/** Original Qentrah mark, copied verbatim from qentrah.com's header. */
export function BrandMark({ className = '', size = 32 }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M49 33a20 20 0 1 0-20 20" stroke="currentColor" strokeWidth="10" /><path d="M33 33h14v14H33zM48 48h11v11H48z" fill="currentColor" /></svg>
}
export default function Brand({ compact = false }) {
  return <a className="brand" href="#" aria-label="Qentrah Docs home"><BrandMark size={31} /><span>qentrah<span className="brand-docs">{compact ? '' : ' / docs'}</span></span></a>
}
