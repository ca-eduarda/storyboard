import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <p className="app__eyebrow">MVP — front-only</p>
        <h1>Ensaio Storyboard</h1>
        <p className="app__lede">
          Moodboard 3×3, dados do ensaio, paleta manual e PDF de uma página para
          o cliente. Detalhes e decisões de produto estão no{' '}
          <code>README.md</code>.
        </p>
      </header>

      <section className="app__sections" aria-label="Estrutura planejada">
        <h2 className="visually-hidden">Estrutura planejada</h2>
        <ol className="app__roadmap">
          <li>Nome do ensaio (título do PDF)</li>
          <li>Descrição da ideia (com limite visual na prévia)</li>
          <li>Cores do ensaio (swatches escolhidos pelo usuário)</li>
          <li>Fotógrafo, data e local</li>
          <li>Moodboard 9 fotos (1:1 na grade)</li>
          <li>Texto de rodapé (referências / direção criativa)</li>
          <li>Exportar PDF — qualidade web</li>
        </ol>
      </section>
    </div>
  )
}

export default App
