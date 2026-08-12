import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  DraftingCompass,
  GraduationCap,
  HardHat,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Trophy,
  Users,
} from 'lucide-react'
import './styles.css'

const education = [
  {
    level: 'Colegio',
    name: 'Unidad Educativa Julio María Matovelle',
    detail: 'Formación académica base con enfoque en disciplina y constancia.',
  },
  {
    level: 'Universidad',
    name: 'Escuela Politécnica Nacional',
    detail: 'Ingeniería Civil - cursando 5.º semestre con 48.89% aprobado.',
  },
]

const profile = [
  ['Edad', '22 años'],
  ['Nacionalidad', 'Ecuatoriana'],
  ['Profesión', 'Ingeniera civil en formación'],
  ['Correo', 'brendacalvache5@gmail.com'],
]

const tools = [
  'QGIS',
  'MS Project',
  'AutoCAD',
  'H-Canales',
  'EPANET',
  'HEC-HMS',
  'HEC-RAS',
]

const certifications = [
  'Participación en el primer concurso de Puentes de Madera 2026A',
  'Participación en el II Concurso Nacional de Ingeniería de Canales y Puertos, organizado por la Universidad de Cartagena UPCT España',
  'Curso Marketing UTPL',
  'Fundamentos Informáticos UTPL',
  'Curso MATLAB Udemy',
  'Curso MS Project',
]

const skills = [
  { icon: ShieldCheck, title: 'Ética profesional' },
  { icon: Users, title: 'Colaborativa' },
  { icon: Trophy, title: 'Liderazgo' },
  { icon: Brain, title: 'Rápido aprendizaje' },
  { icon: CheckCircle2, title: 'Perseverante' },
  { icon: MessageCircle, title: 'Comunicativa' },
  { icon: DraftingCompass, title: 'Adaptabilidad' },
]

function sendMessage(event) {
  event.preventDefault()
  const form = new FormData(event.currentTarget)
  const name = form.get('name') || ''
  const email = form.get('email') || ''
  const message = form.get('message') || ''
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmail: ${email}\n\n${message}`
  )

  window.location.href = `mailto:brendacalvache5@gmail.com?subject=Contacto desde portafolio&body=${body}`
}

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#inicio" className="brand">
            <HardHat size={19} />
            Brenda Calvache
          </a>

          <div className="nav-links">
            <a href="#perfil">Perfil</a>
            <a href="#educacion">Educación</a>
            <a href="#herramientas">Herramientas</a>
            <a href="#certificaciones">Certificaciones</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <Building2 size={16} />
            Ingeniería civil en formación
          </p>

          <h1>Brenda Calvache</h1>

          <h2 className="hero-title">
            Ingeniera Civil en formación
          </h2>

          <p className="hero-text">
            Construir espacios con ciencia, sensibilidad y criterio técnico:
            convertir ideas en hogares, edificios y proyectos que entienden cómo
            funciona el mundo.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contacto">
              Contacto
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="#herramientas">
              Herramientas
            </a>
          </div>

          <div className="metrics">
            <span>
              <strong>22</strong>
              años de edad
            </span>

            <span>
              <strong>5.º</strong>
              semestre actual
            </span>

            <span>
              <strong>48.89%</strong>
              aprobado
            </span>
          </div>
        </div>

        <div className="hero-visual reveal delay-1">
          <div className="photo-card">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
              alt="Planos arquitectónicos y herramientas de ingeniería civil sobre una mesa"
            />
          </div>

          <div className="floating-card top-card">
            <DraftingCompass size={20} />
            <span>Diseño técnico</span>
          </div>

          <div className="floating-card bottom-card">
            <MapPin size={20} />
            <span>Ecuador</span>
          </div>

          <div id="perfil"></div>
        </div>
      </section>

      <section className="section-shell profile-panel">
        <div className="section-heading reveal">
          <p className="eyebrow">Perfil</p>

          <h2>
            Curiosidad por la estructura que sostiene cada idea.
          </h2>

          <div className="profile-facts">
            {profile.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <article className="statement-card reveal delay-1">
          <p>
            Quiero construir el mundo y saber cómo funciona. Me apasiona aprender
            cosas nuevas y entender la ingeniería detrás del arte. Se me hace
            fascinante cómo una idea con ciencia detrás puede hacer que un espacio
            se convierta en hogares y edificios. Me gusta trabajar en equipo y
            hacer realidad proyectos.
          </p>
        </article>

        <div id="educacion"></div>
      </section>

      <section className="section-shell intro-grid">
        <div className="section-heading reveal">
          <p className="eyebrow">Educación</p>

          <h2>
            Formación académica y avance profesional.
          </h2>
        </div>

        <div className="steps reveal delay-1">
          {education.map((item, index) => (
            <article className="step-card" key={item.name}>
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <p>{item.level}</p>
                <h3>{item.name}</h3>
                <small>{item.detail}</small>
              </div>

              <GraduationCap size={22} />
            </article>
          ))}

          <article className="progress-card">
            <div>
              <p>Porcentaje aprobado</p>
              <h3>48.89%</h3>
            </div>

            <div className="progress-track">
              <span />
            </div>

            <div id="herramientas"></div>

            <small>
              Avance actual de carrera en la Escuela Politécnica Nacional.
            </small>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Herramientas</p>

          <h2>
            Software técnico para análisis, planificación y modelado.
          </h2>
        </div>

        <div className="tool-grid">
          {tools.map((tool, index) => (
            <article
              className="tool-card reveal"
              style={{ '--delay': `${index * 70}ms` }}
              key={tool}
            >
              <BookOpen size={20} />
              <span>{tool}</span>
            </article>
          ))}

          <div id="certificaciones"></div>
        </div>
      </section>

      <section className="section-shell certification-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Certificaciones</p>

          <h2>
            Aprendizaje constante y participación académica.
          </h2>
        </div>

        <div className="certification-list reveal delay-1">
          {certifications.map((item) => (
            <article key={item}>
              <Award size={18} />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell skills-section">
        <div className="quote-card reveal">
          <div className="section-heading">
            <p className="eyebrow">Habilidades</p>

            <h2>
              Perfil humano para proyectos técnicos.
            </h2>
          </div>
        </div>

        <div className="skill-grid reveal delay-1">
          {skills.map(({ icon: Icon, title }) => (
            <article className="skill-card" key={title}>
              <Icon size={20} />
              <span>{title}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact section-shell">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contacto</p>

          <h2>
            Conectemos para construir algo con propósito.
          </h2>

          <p>
            Disponible para colaboraciones académicas, proyectos estudiantiles,
            prácticas y oportunidades relacionadas con ingeniería civil.
          </p>

          <a
            className="whatsapp"
            href="mailto:brendacalvache5@gmail.com"
          >
            <Mail size={20} />
            brendacalvache5@gmail.com
          </a>
        </div>

        <form
          className="contact-form reveal delay-1"
          onSubmit={sendMessage}
        >
          <label>
            Nombre
            <input
              name="name"
              type="text"
              placeholder="Tu nombre"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
            />
          </label>

          <label>
            Mensaje
            <textarea
              name="message"
              placeholder="Cuéntame sobre el proyecto u oportunidad..."
              rows="4"
            />
          </label>

          <button type="submit">
            Enviar mensaje
            <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)