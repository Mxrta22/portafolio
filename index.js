<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marta Haro | Full Stack Developer</title>
    <!-- Tipografía Inter (elegante y minimalista) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #ffffff;
            --text: #111111;
            --text-muted: #666666;
            --border: #eeeeee;
            --font: 'Inter', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font);
            background-color: var(--bg);
            color: var(--text);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        /* Menú de Navegación */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 30px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            z-index: 100;
        }

        nav .logo {
            font-weight: 600;
            text-decoration: none;
            color: var(--text);
            letter-spacing: -0.5px;
        }

        nav .links a {
            text-decoration: none;
            color: var(--text-muted);
            margin-left: 30px;
            font-size: 0.9rem;
            transition: color 0.2s;
        }

        nav .links a:hover {
            color: var(--text);
        }

        /* Secciones */
        section {
            padding: 140px 8% 60px 8%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--text-muted);
            margin-bottom: 40px;
            font-weight: 500;
        }

        /* Hero / Inicio */
        #home {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 0;
        }

        #home h1 {
            font-size: clamp(2.5rem, 7vw, 5.5rem);
            font-weight: 600;
            line-height: 1.1;
            letter-spacing: -2px;
            margin-bottom: 24px;
        }

        #home p {
            font-size: clamp(1.1rem, 2.5vw, 1.5rem);
            color: var(--text-muted);
            max-width: 700px;
            font-weight: 300;
        }

        /* Sobre Mí */
        #about .about-content {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            font-weight: 300;
            line-height: 1.4;
            max-width: 900px;
            letter-spacing: -0.5px;
        }

        #about .about-content span {
            color: var(--text-muted);
        }

        /* Tecnologías (Stack) */
        .stack-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 30px;
        }

        .tech-tag {
            border: 1px solid var(--border);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            color: var(--text-muted);
        }

        /* Proyectos */
        .project-list {
            display: flex;
            flex-direction: column;
            gap: 60px;
        }

        .project-item {
            border-bottom: 1px solid var(--border);
            padding-bottom: 40px;
        }

        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 15px;
        }

        .project-title {
            font-size: 1.75rem;
            font-weight: 500;
            letter-spacing: -0.5px;
        }

        .project-date {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .project-desc {
            color: var(--text-muted);
            max-width: 800px;
            margin-bottom: 20px;
        }

        /* Trayectoria / Experiencia */
        .timeline {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .timeline-item {
            display: grid;
            grid-template-columns: 250px 1fr;
            border-bottom: 1px solid var(--border);
            padding-bottom: 25px;
        }

        .timeline-date {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .timeline-info h3 {
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .timeline-info h4 {
            font-size: 0.95rem;
            color: var(--text-muted);
            font-weight: 400;
            margin-bottom: 10px;
        }

        .timeline-info p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        /* Contacto */
        #contact .huge-link {
            font-size: clamp(2rem, 6vw, 4.5rem);
            color: var(--text);
            text-decoration: none;
            font-weight: 600;
            letter-spacing: -2px;
            display: inline-block;
            margin-bottom: 20px;
            transition: opacity 0.2s;
        }

        #contact .huge-link:hover {
            opacity: 0.4;
        }

        /* Footer */
        footer {
            padding: 60px 8%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            color: var(--text-muted);
            border-top: 1px solid var(--border);
        }

        footer a {
            color: var(--text);
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav { padding: 20px 5%; }
            section { padding: 100px 5% 40px 5%; }
            .timeline-item {
                grid-template-columns: 1fr;
                gap: 10px;
            }
            footer { padding: 40px 5%; flex-direction: column; gap: 20px; }
        }
    </style>
</head>
<body>

    <nav>
        <a href="#home" class="logo">mh.</a>
        <div class="links">
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#experience">Trayectoria</a>
            <a href="#contact">Contacto</a>
        </div>
    </nav>

    <section id="home">
        <h1>Marta Haro</h1>
        <p>Estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM). Creando aplicaciones eficientes, escalables y con un propósito real.</p>
    </section>

    <section id="about">
        <span class="section-title">Sobre mí</span>
        <div class="about-content">
            <p>Me encuentro en la etapa final de mi formación en el <span>Institut Pedralbes</span>. Mi día a día consiste en programar en Java y explorar el ecosistema móvil. Más allá de escribir código, disfruto entendiendo cómo se gestionan los datos en tiempo real mediante WebSockets y cómo integrar modelos de IA para crear herramientas útiles e intuitivas.</p>
        </div>
        <div class="stack-grid">
            <span class="tech-tag">Java</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">WebSockets</span>
            <span class="tech-tag">Docker</span>
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">Android</span>
        </div>
    </section>

    <section id="projects">
        <span class="section-title">Proyectos Destacados</span>
        <div class="project-list">
            
            <div class="project-item">
                <div class="project-header">
                    <h3 class="project-title">FitAI — Entrenamiento Inteligente</h3>
                    <span class="project-date">2025</span>
                </div>
                <p class="project-desc">Plataforma web para sesiones de entrenamiento colaborativo en tiempo real. Integra Computer Vision (MoveNet) para detectar puntos corporales, con arquitectura de servidor dual (API REST y WebSockets) y entorno virtualizado mediante Docker.</p>
                <div class="stack-grid">
                    <span class="tech-tag">TensorFlow.js</span>
                    <span class="tech-tag">WebSockets</span>
                    <span class="tech-tag">Docker</span>
                    <span class="tech-tag">Node.js</span>
                </div>
            </div>

            <div class="project-item">
                <div class="project-header">
                    <h3 class="project-title">Projecte ENGINY</h3>
                    <span class="project-date">2026</span>
                </div>
                <p class="project-desc">Desarrollo de una aplicación web para la digitalización del Programa Enginy del Consorci d'Educació de Barcelona, con el fin de prevenir el absentismo escolar a través de itinerarios inclusivos orientadores.</p>
                <div class="stack-grid">
                    <span class="tech-tag">MongoDB</span>
                    <span class="tech-tag">Express</span>
                    <span class="tech-tag">Vue 3</span>
                    <span class="tech-tag">Node.js</span>
                </div>
            </div>

        </div>
    </section>

    <section id="experience">
        <span class="section-title">Trayectoria</span>
        <div class="timeline">

            <div class="timeline-item">
                <div class="timeline-date">Feb. 2026 — Actualidad</div>
                <div class="timeline-info">
                    <h3>Becaria de Desarrollo Web</h3>
                    <h4>Associacio Cultural Storyville</h4>
                    <p>Mantenimiento, optimización y puesta a punto de la web corporativa y la plataforma del festival internacional.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">2024 — 2026</div>
                <div class="timeline-info">
                    <h3>Grado Superior en DAM</h3>
                    <h4>Institut Pedralbes</h4>
                    <p>Ingeniería de Software e Informática. Finalista en los Premios FPEmprèn 2025 y 3er puesto iFest por el proyecto SafeHer.</p>
                </div>
            </div>

        </div>
    </section>

    <section id="contact">
        <span class="section-title">Contacto</span>
        <a href="mailto:tu-correo@ejemplo.com" class="huge-link">¿Hablamos?</a>
        <p style="color: var(--text-muted);">Disponible para incorporarme a equipos de desarrollo e innovación.</p>
    </section>

    <footer>
        <p>© 2026 Marta Haro</p>
        <p><a href="https://www.linkedin.com/in/marta-haro/" target="_blank">LinkedIn</a> / <a href="https://bcn.shag.cat/" target="_blank">Proyecto Reciente</a></p>
    </footer>

</body>
</html>
