import { useState } from 'react'
import NewsletterModal from './NewsletterModal'

const links = [
  ['最新文章', 'articles'],
  ['工具分類', 'tools'],
  ['開發紀錄', 'dev'],
  ['我們的 App', 'apps'],
]

export default function Nav({ currentPage, onNavigate }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(250,248,244,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e0dbd2' }}>
        <div className="nav-inner">
          <a href="#" onClick={e => { e.preventDefault(); onNavigate('home') }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#1a1714', textDecoration: 'none', flexShrink: 0 }}>
            Daily AI <span style={{ color: '#c8410a' }}>Life</span>
          </a>
          <ul className="nav-links">
            {links.map(([label, page]) => {
              const isActive = currentPage === page
              return (
                <li key={label}>
                  <a href="#" onClick={e => { e.preventDefault(); onNavigate(page) }}
                    style={{ fontSize: 16, color: isActive ? '#c8410a' : '#4a4540', textDecoration: 'none', padding: '7px 14px', borderRadius: 6, display: 'inline-block', background: isActive ? '#f2efe8' : 'transparent', fontWeight: isActive ? 500 : 300, transition: 'all 0.2s' }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#c8410a'; e.currentTarget.style.background = '#f2efe8' } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#4a4540'; e.currentTarget.style.background = 'transparent' } }}
                  >{label}</a>
                </li>
              )
            })}
            <li>
              <button onClick={() => setModalOpen(true)}
                style={{ fontSize: 16, color: 'white', background: '#1a1714', border: 'none', padding: '7px 14px', borderRadius: 6, cursor: 'pointer', fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 500, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => e.currentTarget.style.background = '#c8410a'}
                onMouseLeave={e => e.currentTarget.style.background = '#1a1714'}
              >訂閱電子報</button>
            </li>
          </ul>
        </div>
      </nav>
      <NewsletterModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
