import { useState } from 'react'
import Icon from './Icon.jsx'
export default function CodeBlock({ code, language = 'bash', filename }) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  async function copy() {
    try { await navigator.clipboard.writeText(code); setCopied(true); setError('') }
    catch { setError('Select the code below to copy it.'); setCopied(false) }
  }
  return <div className="code-block"><div className="code-toolbar"><span>{filename || language}</span><button type="button" onClick={copy} aria-label={copied ? 'Code copied' : 'Copy code'}><Icon name={copied ? 'check' : 'copy'} size={15} /><span>{copied ? 'Copied' : 'Copy'}</span></button></div><pre tabIndex={0} aria-label={`${language} code`}><code>{code}</code></pre><span className="copy-feedback" role="status">{error || (copied ? 'Copied to clipboard.' : '')}</span></div>
}
