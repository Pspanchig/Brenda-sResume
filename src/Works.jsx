import React from 'react'
import {
  ExternalLink,
  FileText,
  FolderOpen,
  LibraryBig,
} from 'lucide-react'
import workItems from './data/workItems.json'

function Works() {
  const categories = [...new Set(workItems.map((item) => item.category))]

  return (
    <section className="works-page section-shell">
      <div className="works-hero reveal is-visible">
        <p className="eyebrow">
          <LibraryBig size={16} />
          Trabajos realizados
        </p>

        <h1>Documentos y proyectos</h1>

        <p>
          Un espacio para organizar informes, evidencias, memorias, planos y
          proyectos academicos. La lista se alimenta desde un archivo JSON, asi
          que puedes actualizarla sin backend.
        </p>
      </div>

      <div className="works-summary reveal is-visible delay-1">
        <article>
          <FolderOpen size={20} />
          <span>{workItems.length}</span>
          <p>archivos publicados</p>
        </article>

        <article>
          <FileText size={20} />
          <span>{categories.length}</span>
          <p>categorias</p>
        </article>
      </div>

      <div className="works-grid">
        {workItems.map((item, index) => (
          <article
            className="work-card reveal is-visible"
            style={{ '--delay': `${index * 80}ms` }}
            key={`${item.title}-${item.url}`}
          >
            <div className="work-card-top">
              <span>{item.category}</span>
              <small>{item.type}</small>
            </div>

            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <a href={item.url} target="_blank" rel="noreferrer">
              Abrir documento
              <ExternalLink size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Works
