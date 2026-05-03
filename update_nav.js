const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

const newNav = `    <!-- Header Area -->
    <header id="top-header">
        <div class="container header-flex">
            <div class="logo">
                <img src="logo.png.png" alt="Maximizer Financial Services" class="logo-img">
            </div>
            <div class="header-info">
                <div class="info-block">
                    <div class="icon-box"><i class="fas fa-envelope"></i></div>
                    <div class="info-text">
                        <span class="info-label">SEND US A MESSAGE</span>
                        <span class="info-value">helpdesk@maximizerfinancialservices.com</span>
                    </div>
                </div>
                <div class="info-block">
                    <div class="icon-box"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="info-text">
                        <span class="info-label">ADDRESS HERE</span>
                        <span class="info-value">Govindpuri Kalkaji, New Delhi</span>
                    </div>
                </div>
                <a href="tel:+919811056448" class="header-btn">+91-9811056448 <i class="fas fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    </header>

    <!-- Main Navigation -->
    <div class="nav-wrapper">
        <nav id="main-nav">
            <div class="container nav-container">
                <ul class="nav-links">
                    <li><a href="index.html#home">HOME</a></li>
                    <li><a href="index.html#about">ABOUT US</a></li>
                    <li class="has-dropdown">
                        <a href="index.html#services">SERVICES <i class="fas fa-chevron-down" style="font-size: 0.7rem;"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="ca-services.html">CA Services</a></li>
                            <li><a href="itr-filing.html">ITR Filing</a></li>
                            <li><a href="mutual-funds.html">Mutual Funds</a></li>
                            <li><a href="insurance.html">Insurance</a></li>
                            <li><a href="pan-card.html">PAN Card</a></li>
                            <li><a href="tax-planning.html">Tax Planning</a></li>
                        </ul>
                    </li>
                    <li><a href="partners.html">PARTNERS</a></li>
                    <li><a href="index.html#contact">CONTACT US</a></li>
                </ul>
                <div class="menu-toggle" id="mobile-menu">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>`;

for(let file of files) {
    let content = fs.readFileSync(file, 'utf8');
    // We are replacing the old <nav id="navbar"> block.
    // We can use a regex to grab from <!-- Navbar --> to </nav>
    const regex = /\s*<!-- Navbar -->\s*<nav id="navbar">[\s\S]*?<\/nav>/;
    
    // First, let's fix the fact that I accidentally replaced the hero section in ca-services, itr-filing, mutual-funds earlier.
    // Oh wait! I didn't undo the accidental removal of the hero section in those 3 files yet.
    // I should actually completely rewrite those 3 files or just fix the nav here.
    
    // Since I messed up the hero section in ca-services.html, itr-filing.html, and mutual-funds.html earlier due to replace_file_content matching the end tag, let's restore them.
    // Wait, the easiest way to restore the missing <section class="service-detail-hero"> is to just do a simple replacement if it's missing.
    // But since this script is just for nav, let's do nav first.
    
    content = content.replace(regex, '\n' + newNav);
    
    fs.writeFileSync(file, content);
    console.log('Updated nav in ' + file);
}
