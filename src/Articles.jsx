import articles from './articles'
import ArticleDetail from './ArticleDetail'
import { useState } from 'react'

export default function Articles({ onNavigateToArticle }) {
  const [selected, setSelected] = useState(null)

  if (selected) return <ArticleDetail article={selected} onBack={() => setSelected(null)} />

  return (
    <main style={{ flex: 1, padding: '100px 48px 60px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 720, width: '100%' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8410a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 20, height: 1, background: '#c8410a', display: 'block' }}></span>
            最新文章
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, lineHeight: 1.15, color: '#1a1714' }}>
            用過才說，<em style={{ fontStyle: 'italic', color: '#c8410a' }}>踩過才寫</em>
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {articles.map(article => (
            <div key={article.id}
              onClick={() => { setSelected(article); onNavigateToArticle && onNavigateToArticle(article) }}
              style={{ background: '#fff', border: '1px solid #e0dbd2', borderRadius: 16, padding: '28px 32px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c8410a'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,65,10,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0dbd2'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                {article.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 11, color: '#c8410a', background: '#fff3ee', padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: '#1a1714', marginBottom: 10, lineHeight: 1.3 }}>{article.title}</h2>
              <p style={{ fontSize: 14, color: '#4a4540', lineHeight: 1.8, marginBottom: 16 }}>{article.summary}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#8a8480' }}>{article.date}</span>
                <span style={{ fontSize: 13, color: '#c8410a', fontWeight: 500 }}>閱讀全文 →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
