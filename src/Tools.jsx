import articles from './articles'

export default function Tools({ onNavigateToArticle }) {
  const featuredArticle = articles.find(a => a.id === 'why-claude-pro')
  const deployArticle = articles.find(a => a.id === 'free-deployment')

  const ArticleCard = ({ article }) => (
    <div
      onClick={() => onNavigateToArticle(article)}
      style={{ background: '#fff', border: '1px solid #e0dbd2', borderRadius: 16, padding: '24px 28px', cursor: 'pointer', transition: 'all 0.2s', marginBottom: 16 }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#c8410a'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,65,10,0.08)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0dbd2'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
            {article.tags.map(tag => (
              <span key={tag} style={{ fontSize: 11, color: '#c8410a', background: '#fff3ee', padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}>{tag}</span>
            ))}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#1a1714', marginBottom: 8, lineHeight: 1.3 }}>{article.title}</h3>
          <p style={{ fontSize: 14, color: '#4a4540', lineHeight: 1.8 }}>{article.summary}</p>
        </div>
        <span style={{ fontSize: 20, flexShrink: 0, color: '#c8410a', marginTop: 4 }}>→</span>
      </div>
      <p style={{ fontSize: 12, color: '#8a8480', marginTop: 16 }}>{article.date}</p>
    </div>
  )

  return (
    <main style={{ flex: 1, padding: '100px 48px 60px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 720, width: '100%' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8410a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 20, height: 1, background: '#c8410a', display: 'block' }}></span>
            工具分類
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, lineHeight: 1.15, color: '#1a1714' }}>
            用過才推，<em style={{ fontStyle: 'italic', color: '#c8410a' }}>沒用過不說</em>
          </h1>
        </div>

        {/* 開發工具 */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#1a1714', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #e0dbd2' }}>開發工具</h2>
          {featuredArticle && <ArticleCard article={featuredArticle} />}
        </div>

        {/* 部署工具 */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#1a1714', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #e0dbd2' }}>部署工具</h2>
          {deployArticle && <ArticleCard article={deployArticle} />}
        </div>

        {/* Placeholder categories */}
        {[['聲音 / 影片', 'ElevenLabs、CapCut'], ['寫作 / 內容', 'ChatGPT 文案應用'], ['自動化', 'Vercel、Supabase、NewsAPI']].map(([cat, desc]) => (
          <div key={cat} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#1a1714', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #e0dbd2' }}>{cat}</h2>
            <div style={{ background: '#f2efe8', borderRadius: 16, padding: '24px 28px' }}>
              <p style={{ fontSize: 14, color: '#8a8480', lineHeight: 1.8 }}>即將更新：{desc}</p>
            </div>
          </div>
        ))}

      </div>
    </main>
  )
}
