const fs = require('fs');

const shellTop = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>__TITLE__ | Chauhan Dental Laboratory</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="style.css?v=3">
</head>
<body>

<!-- Top Bar -->
<div class="top-bar">
  <div class="container top-bar-inner">
    <div class="top-bar-left">
      <i class="fas fa-check-circle"></i> 35+ Years of Excellence in Dental Laboratory Services
    </div>
    <div class="top-bar-right">
      <span><i class="far fa-clock"></i> Mon - Sat 9:00 AM - 7:00 PM</span>
      <span><i class="fas fa-phone"></i> <a href="tel:+919810350385" style="color: inherit; text-decoration: none;">+91-9810350385</a></span>
      <span><i class="far fa-envelope"></i> <a href="mailto:support@chauhandentallaboratory.com" style="color: inherit; text-decoration: none;">support@chauhandentallaboratory.com</a></span>
    </div>
  </div>
</div>

<!-- Header -->
<header class="header">
  <div class="container header-inner">
    <a href="index.html" class="logo-area">
      <div class="logo-icon"><i class="fas fa-tooth"></i></div>
      <div class="logo-text">
        <strong>CHAUHAN</strong>
        <span>DENTAL LABORATORY</span>
        <small>Quality. Precision. Trust.</small>
      </div>
    </a>
    <nav class="nav-menu">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="products.html" class="active">Our Products</a>
      <a href="gallery.html">Gallery</a>
      <a href="why-us.html">Why Us</a>
      <a href="contact.html">Contact Us</a>
      <a href="contact.html" class="mobile-git-link" style="display: none;"><i class="fas fa-phone" style="margin-right:5px;"></i> Get In Touch</a>
    </nav>
    <a href="contact.html" class="btn btn-primary get-in-touch"><i class="fas fa-phone" style="margin-right:5px;"></i> Get In Touch</a>
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</header>

<!-- Hero Section -->
<section class="gallery-hero" style="min-height: 400px; background: url('images/image copy 6.png') no-repeat center center / cover;">
  <div class="gallery-hero-content">
    <div class="gallery-hero-eyebrow">
      <i class="__ICON__"></i> __EYEBROW__
    </div>
    <h1>__HERO_TITLE__</h1>
    <p>__HERO_DESC__</p>
  </div>
</section>

<!-- Product Details Section -->
<div class="gallery-body" style="padding-top: 60px;">
  <div class="section-title-center">__SECTION_TITLE__</div>
  <p class="section-subtitle">__SECTION_SUBTITLE__</p>
  
  <div class="container" style="margin-top: 50px;">
`;

const shellBottom = `
  </div>
</div>

<!-- CTA -->
<div class="home-cta">
  <div class="container home-cta-inner">
    <div class="home-cta-left">
      <div class="home-cta-icon"><i class="fas fa-tooth"></i></div>
      <div>
        <h3>Ready to partner with us?</h3>
        <p>Send us your case today and experience the Chauhan Dental Lab difference.</p>
      </div>
    </div>
    <div class="home-cta-btns">
      <a href="tel:+919810350385" class="btn btn-primary"><i class="fas fa-phone"></i> Call Now</a>
      <a href="https://wa.me/919810350385" class="btn-success" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="new-footer">
  <div class="container">
    <div class="new-footer-grid">
      <div class="nf-brand">
        <div class="nf-logo">
          <div class="nf-logo-icon"><i class="fas fa-tooth"></i></div>
          <div class="nf-logo-text"><strong>CHAUHAN</strong><span>DENTAL LABORATORY</span></div>
        </div>
        <p>Delivering high quality dental restorations with advanced technology and skilled craftsmanship since 1988.</p>
        <div class="nf-social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="nf-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="products.html">Our Products</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="why-us.html">Why Choose Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="nf-col">
        <h4>Our Products</h4>
        <ul>
          <li><a href="crown-bridge.html">Crowns &amp; Bridges</a></li>
          <li><a href="implants.html">Implant Restorations</a></li>
          <li><a href="removables.html">Dentures</a></li>
          <li><a href="orthodontics.html">Orthodontic Appliances</a></li>
          <li><a href="custom-solutions.html">Custom Solutions</a></li>
        </ul>
      </div>
      <div class="nf-col">
        <h4>Contact Us</h4>
        <ul class="nf-contact-list">
          <li><i class="fas fa-map-marker-alt"></i> House No. 561/A, Chirag Dilli, New Delhi - 110017</li>
          <li><i class="fas fa-phone"></i> <a href="tel:+919810350385" style="color: inherit; text-decoration: none;">+91-9810350385</a></li>
          <li><i class="far fa-envelope"></i> <a href="mailto:support@chauhandentallaboratory.com" style="color: inherit; text-decoration: none;">support@chauhandentallaboratory.com</a></li>
          <li><i class="far fa-clock"></i> Mon - Sat: 9:00 AM - 7:00 PM</li>
        </ul>
      </div>
    </div>
    <div class="new-footer-bottom">
      <p>&copy; 2025 Chauhan Dental Laboratory. All Rights Reserved.</p>
      <div><a href="privacy-policy.html">Privacy Policy</a> &nbsp;|&nbsp; <a href="terms.html">Terms &amp; Conditions</a></div>
    </div>
  </div>
</footer>

<a href="https://wa.me/919810350385" class="whatsapp-float" target="_blank"><i class="fab fa-whatsapp"></i></a>

<script>
  // Hamburger Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      const icon = this.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });
  }
</script>
</body>
</html>
`;

function buildRow(imagePath, title, desc, features, reverse) {
  let listItems = features.map(f => '<li class="product-detail-list-item"><i class="fas fa-check"></i> ' + f + '</li>').join('\n          ');
  
  const imgCol = `
    <div class="product-detail-img-col">
      <img src="${imagePath}" alt="${title}">
    </div>`;
    
  const textCol = `
    <div class="product-detail-text-col">
      <h3>${title}</h3>
      <p>${desc}</p>
      <ul>
        ${listItems}
      </ul>
      <a href="contact.html" class="btn btn-outline-primary" style="margin-top: 25px; display: inline-block;">Send Case</a>
    </div>`;

  return `
    <div class="product-detail-row ${reverse ? 'reverse' : ''}">
      ${imgCol}
      ${textCol}
    </div>`;
}

// 1. Crowns & Bridges
let crownHTML = shellTop
  .replace('__TITLE__', 'Crowns & Bridges')
  .replace('__ICON__', 'fas fa-tooth')
  .replace('__EYEBROW__', 'Crown & Bridge Restorations')
  .replace('__HERO_TITLE__', 'Crowns & <span>Bridges</span>')
  .replace('__HERO_DESC__', 'Exceptional crowns and bridges utilizing the latest CAD/CAM technology and premium materials for aesthetics, strength, and perfect fit.')
  .replace('__SECTION_TITLE__', 'Our Crown & Bridge Solutions')
  .replace('__SECTION_SUBTITLE__', 'Precision-crafted restorations tailored for every indication');

crownHTML += buildRow('Our Products/zirconia-crown.png', 'Zirconia Crowns', 'Unmatched durability and lifelike aesthetics. Our monolithic and layered zirconia restorations are meticulously milled and customized for optimal natural blending.', ['High flexural strength', 'Biocompatible', 'Excellent marginal fit', 'Lifelike translucency'], false);
crownHTML += buildRow('Our Products/fm-crown.png', 'PFM Crowns', 'Porcelain-Fused-to-Metal (PFM) crowns utilizing Identalloy certified materials for a strong, reliable, and aesthetic outcome.', ['Strong metal base', 'Porcelain finish', 'Reliable performance', 'Long-lasting solution'], true);
crownHTML += buildRow('Our Products/E-max Crown.png', 'All Ceramic / E-max Crowns', 'Premium e.Max® and all-ceramic restorations delivering natural translucency and superior aesthetics for anterior cases.', ['Natural translucency', 'Metal-free design', 'Premium aesthetics', 'Excellent patient satisfaction'], false);
crownHTML += shellBottom;
fs.writeFileSync('crown-bridge.html', crownHTML, 'utf8');

// 2. Implants
let implantsHTML = shellTop
  .replace('__TITLE__', 'Dental Implants')
  .replace('__ICON__', 'fas fa-tooth')
  .replace('__EYEBROW__', 'Implant Restorations')
  .replace('__HERO_TITLE__', 'Dental <span>Implants</span>')
  .replace('__HERO_DESC__', 'Advanced implant restorations designed for precision, strength, aesthetics and long-term success. We offer custom implants and gladly accept over-denture and full-mouth reconstruction cases.')
  .replace('__SECTION_TITLE__', 'Our Implant Solutions')
  .replace('__SECTION_SUBTITLE__', 'Reliable, highly aesthetic prosthetics for every implant case');

implantsHTML += buildRow('Our Products/implant-crown.png', 'Implant Crowns', 'High-quality implant-supported crowns crafted using premium materials to ensure an exact fit and natural appearance. Compatible with major implant systems.', ['Excellent aesthetics', 'Natural appearance', 'Accurate fit', 'Durable restoration'], false);
implantsHTML += buildRow('Our Products/Dental Bridges.png', 'Implant Bridges', 'Multi-unit implant-supported bridges designed for superior stability, functionality, and long-lasting results.', ['Stable support', 'High functionality', 'Long-lasting results', 'Custom fabrication'], true);
implantsHTML += buildRow('Our Products/cutom abutment.png', 'Custom Abutments', 'Precision-milled custom abutments designed for ideal emergence profiles, improved aesthetics, and optimal support for the final restoration.', ['Precision engineered', 'Better emergence profile', 'Improved aesthetics', 'Enhanced fit'], false);
implantsHTML += shellBottom;
fs.writeFileSync('implants.html', implantsHTML, 'utf8');

// 3. Removables
let removablesHTML = shellTop
  .replace('__TITLE__', 'Removables')
  .replace('__ICON__', 'fas fa-teeth-open')
  .replace('__EYEBROW__', 'Removables')
  .replace('__HERO_TITLE__', 'Removable <span>Prosthetics</span>')
  .replace('__HERO_DESC__', 'Comfortable, durable and aesthetic removable dental solutions. CDL Lab provides a variety of dentures and partials, with and without metal frameworks, to suit the needs of your patients.')
  .replace('__SECTION_TITLE__', 'Our Removable Solutions')
  .replace('__SECTION_SUBTITLE__', 'Comfortable, well-fitting dentures and partials');

removablesHTML += buildRow('Our Products/comlete denture.png', 'Complete Denture', 'Our complete dentures are fabricated using high-impact acrylics and premium teeth for optimal function, comfort, and aesthetics. We ensure accurate fit and natural appearance.', ['Natural appearance', 'Comfortable fit', 'High quality materials', 'Long-lasting performance'], false);
removablesHTML += buildRow('Our Products/partial denture.png', 'Partial Denture', 'We offer cast metal and acrylic partial dentures designed to restore function and blend seamlessly with remaining natural dentition.', ['Precise fit', 'Easy maintenance', 'Functional restoration', 'Improved aesthetics'], true);
removablesHTML += buildRow('Our Products/metallic partial denture.png', 'Flexible Denture', "Metal-free flexible partials provide a highly aesthetic and comfortable alternative, adapting perfectly to the mouth's natural contours.", ['Flexible material', 'Metal free', 'Comfortable design', 'Natural appearance'], false);
removablesHTML += buildRow('Our Products/Night Guards.png', 'Night Guards', 'Custom-fabricated night guards and splints to protect restorations and natural teeth from bruxism and clenching.', ['Protects teeth', 'Comfortable fit', 'Durable construction', 'Custom fabrication'], true);
removablesHTML += shellBottom;
fs.writeFileSync('removables.html', removablesHTML, 'utf8');

// 4. Orthodontics
let orthoHTML = shellTop
  .replace('__TITLE__', 'Orthodontics')
  .replace('__ICON__', 'fas fa-smile')
  .replace('__EYEBROW__', 'Orthodontic Appliances')
  .replace('__HERO_TITLE__', 'Orthodontic <span>Appliances</span>')
  .replace('__HERO_DESC__', 'Precision-crafted orthodontic appliances designed for effective treatment and patient comfort. Our lab provides a full range of fixed and removable orthodontic solutions.')
  .replace('__SECTION_TITLE__', 'Our Orthodontic Solutions')
  .replace('__SECTION_SUBTITLE__', 'Reliable appliances for optimal treatment outcomes');

orthoHTML += buildRow('Our Products/Orthodontic Appliances.png', 'Clear Aligners', 'Virtually invisible aligner systems custom-designed to gradually and comfortably move teeth into their ideal position.', ['Highly aesthetic', 'Removable convenience', 'Comfortable fit', 'Predictable results'], false);
orthoHTML += buildRow('Our Products/Removable Appliances.png', 'Retainers', 'High-quality Hawley and clear Essix retainers fabricated to hold teeth securely in their corrected positions after orthodontic treatment.', ['Durable materials', 'Secure fit', 'Long-lasting', 'Custom fabricated'], true);
orthoHTML += shellBottom;
fs.writeFileSync('orthodontics.html', orthoHTML, 'utf8');

// 5. Custom Solutions
let customHTML = shellTop
  .replace('__TITLE__', 'Custom Solutions')
  .replace('__ICON__', 'fas fa-cogs')
  .replace('__EYEBROW__', 'Custom Dental Solutions')
  .replace('__HERO_TITLE__', 'Custom <span>Solutions</span>')
  .replace('__HERO_DESC__', 'Tailored dental prosthetics and specialized lab services designed to meet the unique challenges of complex cases. We partner with you to deliver exact specifications.')
  .replace('__SECTION_TITLE__', 'Our Custom Services')
  .replace('__SECTION_SUBTITLE__', 'Specialized solutions crafted for unique patient needs');

customHTML += buildRow('Product Categories/custom-solutions.png', 'Complex Restorations', 'From full-mouth rehabilitations to intricate combination cases, we provide careful planning and precise execution for demanding restorations.', ['Full-mouth reconstruction', 'Combination cases', 'Advanced diagnostics', 'Detailed wax-ups'], false);
customHTML += shellBottom;
fs.writeFileSync('custom-solutions.html', customHTML, 'utf8');

console.log('Successfully updated all 5 pages with alternating rows layout!');
