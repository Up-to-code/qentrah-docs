const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6', external: 'M7 17 17 7M7 7h10v10',
  chevron: 'm8 10 4 4 4-4', close: 'm6 6 12 12M6 18 18 6',
  search: 'm16 16 4 4', copy: 'M9 9h11v11H9zM15 5V2H2v13h3',
  pause: 'M9 5v14M15 5v14', play: 'm8 5 11 7-11 7V5Z',
  menu: 'M4 7h16M4 17h16', sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5',
  moon: 'M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z',
  code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18', book: 'M4 3h12a3 3 0 0 1 3 3v15H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M3 17h16',
  check: 'm5 12 4 4L19 6', github: 'M9 19c-5 1-5-3-7-3m14 6v-4a3.5 3.5 0 0 0-1-2.8c3.3-.4 6.7-1.6 6.7-7.2A5.6 5.6 0 0 0 20 4.1 5.2 5.2 0 0 0 19.9 0S18.6-.4 15.5 1.5a15.3 15.3 0 0 0-8 0C4.4-.4 3.1 0 3.1 0A5.2 5.2 0 0 0 3 4.1 5.6 5.6 0 0 0 1.5 8c0 5.6 3.4 6.8 6.7 7.2A3.5 3.5 0 0 0 7.2 18v4',
}
export default function Icon({ name, size = 18, className = '' }) {
  return <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.arrow} />{name === 'search' && <circle cx="10.5" cy="10.5" r="6.5" />}{name === 'sun' && <circle cx="12" cy="12" r="4" />}</svg>
}
