import { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import Articles from './Articles'
import Tools from './Tools'
import ArticleDetail from './ArticleDetail'
import ComingSoon from './ComingSoon'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const handleNavigateToArticle = (article) => {
    setSelectedArticle(article)
    setPage('article-detail')
  }

  const renderPage = () => {
    if (page === 'article-detail' && selectedArticle) {
      return <ArticleDetail article={selectedArticle} onBack={() => { setSelectedArticle(null); setPage('articles') }} />
    }
    switch (page) {
      case 'home': return <Home />
      case 'articles': return <Articles onNavigateToArticle={handleNavigateToArticle} />
      case 'tools': return <Tools onNavigateToArticle={handleNavigateToArticle} />
      case 'dev': return <ComingSoon emoji="💻" title="開發紀錄" description="從零開始做 App 的過程，包含踩坑、解法、花費，全部公開記錄。第一個專案進行中。" />
      case 'apps': return <ComingSoon emoji="🚀" title="我們的 App" description="我們自己做的工具，給自己用也給你用。第一個 App 開發中，預計近期上線。" />
      default: return <Home />
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#faf8f4', color: '#1a1714', fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300, lineHeight: 1.7 }}>
      <Nav currentPage={page} onNavigate={(p) => { setPage(p); setSelectedArticle(null) }} />
      {renderPage()}
      <footer style={{ borderTop: '1px solid #e0dbd2', padding: '20px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: '#1a1714', fontWeight: 700 }}>
          Daily AI <span style={{ color: '#c8410a' }}>Life</span>
        </div>
        <p style={{ fontSize: 12, color: '#8a8480' }}>每天往前一點點就夠了</p>
        <p style={{ fontSize: 12, color: '#8a8480' }}>© 2026 Daily AI Life</p>
      </footer>
    </div>
  )
}
