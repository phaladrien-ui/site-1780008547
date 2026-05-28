Voici le code complet pour une landing page avec animations, scroll smooth et menu mobile en JavaScript vanilla :

## HTML (index.html)

html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Animée</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">Logo</a>
            <div class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#accueil" class="nav-link">Accueil</a></li>
                <li><a href="#services" class="nav-link">Services</a></li>
                <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Section Accueil -->
    <section id="accueil" class="section hero">
        <div class="container">
            <h1 class="animate-fadeIn">Bienvenue sur notre site</h1>
            <p class="animate-fadeIn">Découvrez des solutions innovantes pour votre entreprise</p>
            <a href="#services" class="btn animate-fadeIn">En savoir plus</a>
        </div>
    </section>

    <!-- Section Services -->
    <section id="services" class="section services">
        <div class="container">
            <h2 class="section-title animate-slideUp">Nos Services</h2>
            <div class="services-grid">
                <div class="service-card animate-slideUp">
                    <div class="service-icon">🚀</div>
                    <h3>Développement Web</h3>
                    <p>Sites web modernes et responsives</p>
                </div>
                <div class="service-card animate-slideUp">
                    <div class="service-icon">🎨</div>
                    <h3>Design UI/UX</h3>
                    <p>Interfaces utilisateur intuitives</p>
                </div>
                <div class="service-card animate-slideUp">
                    <div class="service-icon">📱</div>
                    <h3>Applications Mobiles</h3>
                    <p>Apps natives et hybrides</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Portfolio -->
    <section id="portfolio" class="section portfolio">
        <div class="container">
            <h2 class="section-title animate-slideUp">Notre Portfolio</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item animate-scale">
                    <img src="https://via.placeholder.com/300x200" alt="Projet 1">
                    <div class="portfolio-overlay">
                        <h3>Projet 1</h3>
                        <p>Description du projet</p>
                    </div>
                </div>
                <div class="portfolio-item animate-scale">
                    <img src="https://via.placeholder.com/300x200" alt="Projet 2">
                    <div class="portfolio-overlay">
                        <h3>Projet 2</h3>
                        <p>Description du projet</p>
                    </div>
                </div>
                <div class="portfolio-item animate-scale">
                    <img src="https://via.placeholder.com/300x200" alt="Projet 3">
                    <div class="portfolio-overlay">
                        <h3>Projet 3</h3>
                        <p>Description du projet</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Contact -->
    <section id="contact" class="section contact">
        <div class="container">
            <h2 class="section-title animate-slideUp">Contactez-nous</h2>
            <form class="contact-form animate-fadeIn">
                <input type="text" placeholder="Votre nom" required>
                <input type="email" placeholder="Votre email" required>
                <textarea placeholder="Votre message" required></textarea>
                <button type="submit" class="btn">Envoyer</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Landing Page. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>


## CSS (style.css)

css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #007bff