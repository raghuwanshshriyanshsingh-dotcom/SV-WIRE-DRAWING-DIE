<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
<title>S.B Dies </title>
<meta name="description" content="Precision Tungsten Carbide Dies for Wire and Tube Drawing. High-performance dies engineered for accuracy, durability, and consistent results in demanding industrial applications Tc die ." />

  <!-- Google Fonts for precision industrial look -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">   
</head>
<style>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    :root {
      --bg: #060707;
      --panel: #0d0f0f;
      --panel2: #121515;
      --line: rgba(255, 255, 255, 0.08);
      --line-bright: rgba(255, 255, 255, 0.18);
      --muted: #828784;
      --accent: #c3f53c;
      --accent-dim: rgba(195, 245, 60, 0.15);
      --white: #f5f6f3;
      --font-display: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'Space Grotesk', monospace, sans-serif;
    }

    body {
      background: var(--bg);
      color: var(--white);
      font-family: var(--font-display);
      overflow-x: hidden;
      selection-background-color: var(--accent);
      selection-color: #000;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* ---------- CUSTOM MOUSE CURSOR ---------- */
    .cursor {
      width: 8px;
      height: 8px;
      position: fixed;
      border-radius: 50%;
      background: var(--accent);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      mix-blend-mode: difference;
    }

    .cursor-ring {
      width: 36px;
      height: 36px;
      position: fixed;
      border: 1px solid rgba(195, 245, 60, 0.4);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s;
    }

    /* ---------- NAVBAR ---------- */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 24px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(6, 7, 7, 0.7);
      backdrop-filter: blur(25px);
      border-bottom: 1px solid var(--line);
    }

    .logo {
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .logo span {
      color: var(--accent);
    }

    .nav-links {
      display: flex;
      gap: 32px;
      list-style: none;
      color: #8c918f;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .nav-links a {
      position: relative;
      transition: 0.3s;
      padding-bottom: 4px;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--white);
    }

    .nav-links a.active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5px;
      background: var(--accent);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-btn {
      border: 1px solid var(--line-bright);
      padding: 10px 22px;
      border-radius: 100px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .nav-btn:hover {
      background: var(--accent);
      color: #050605;
      border-color: var(--accent);
      transform: translateY(-1px);
    }

    .menu-burger {
      display: flex;
      flex-direction: column;
      gap: 4px;
      cursor: pointer;
    }

    .menu-burger span {
      display: block;
      width: 22px;
      height: 2px;
      background: #aaa;
    }

    /* ---------- HERO SECTION ---------- */
    .hero {
      min-height: 100vh;
      padding: 140px 6% 80px;
      position: relative;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      align-items: center;
      overflow: hidden;
    }

    .grid-bg {
      position: absolute;
      inset: 0;
      opacity: 0.25;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 80px 80px;
      mask-image: radial-gradient(circle at 60% 40%, black 20%, transparent 80%);
    }

    .hero-glow {
      position: absolute;
      width: 750px;
      height: 750px;
      right: -150px;
      top: 50px;
      background: radial-gradient(circle, rgba(195, 245, 60, 0.12), transparent 60%);
      filter: blur(80px);
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 650px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: var(--accent);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 25px;
    }

    .eyebrow::before {
      content: "";
      width: 32px;
      height: 1px;
      background: var(--accent);
    }

    .hero-title {
      display: flex;
      align-items: baseline;
      gap: 20px;
      margin-bottom: 15px;
    }

    .hero-title .solid {
      font-size: clamp(65px, 8.5vw, 110px);
      font-weight: 900;
      letter-spacing: -4px;
      line-height: 0.85;
    }

    .hero-title .outline {
      font-size: clamp(65px, 8.5vw, 110px);
      font-weight: 900;
      letter-spacing: -4px;
      line-height: 0.85;
      color: transparent;
      -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.85);
    }

    .hero-subhead {
      font-size: clamp(20px, 2.3vw, 32px);
      font-weight: 800;
      letter-spacing: -0.5px;
      text-transform: uppercase;
      line-height: 1.25;
      margin-top: 15px;
      color: #e5e8e5;
    }

    .hero-subhead span {
      display: block;
      color: #929995;
      font-weight: 700;
    }

    .hero-text {
      max-width: 480px;
      margin-top: 25px;
      color: var(--muted);
      line-height: 1.65;
      font-size: 14.5px;
    }

    .hero-buttons {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 40px;
    }

    .primary-btn {
      padding: 16px 28px;
      background: var(--accent);
      color: #060707;
      border-radius: 100px;
      font-weight: 800;
      font-size: 12px;
      letter-spacing: 0.5px;
      border: 1px solid var(--accent);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
    }

    .primary-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 35px rgba(195, 245, 60, 0.25);
    }

    .secondary-btn {
      padding: 16px 28px;
      border: 1px solid var(--line-bright);
      border-radius: 100px;
      color: #e0e4e1;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
    }

    .secondary-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(195, 245, 60, 0.04);
    }

    /* ---------- HERO 3D GLASS STAGE ---------- */
    .hero-stage-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1400px;
    }

    .stage-card {
      width: 100%;
      max-width: 530px;
      height: 480px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
    }

    .glass-base {
      position: absolute;
      inset: 0;
      border-radius: 20px;
      background: radial-gradient(120% 120% at 20% 15%, rgba(255, 255, 255, 0.09) 0%, rgba(20, 24, 23, 0.45) 50%, rgba(8, 10, 9, 0.85) 100%);
      border: 1px solid rgba(255, 255, 255, 0.16);
      backdrop-filter: blur(16px);
      box-shadow: 
        0 40px 100px rgba(0, 0, 0, 0.8),
        inset 0 1px 1px rgba(255, 255, 255, 0.3),
        inset 0 -20px 40px rgba(0, 0, 0, 0.6);
      transform: rotateX(16deg) rotateY(-18deg) rotateZ(3deg);
      transform-style: preserve-3d;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px;
    }

    .glass-glow-spot {
      position: absolute;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(195, 245, 60, 0.2), transparent 70%);
      top: 15%;
      right: 15%;
      filter: blur(30px);
      pointer-events: none;
    }

    .glass-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 11px;
      color: #929994;
      letter-spacing: 2px;
      z-index: 10;
    }

    .brand-badge {
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 4px 14px;
      border-radius: 50px;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #fff;
    }

    /* DIE IMAGE SHOWCASE */
    .dies-graphic-cluster {
      position: relative;
      width: 100%;
      height: 260px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
    }

    /* HERO IMAGE STYLING */
    .dies-render-img {
      width: 90%;
      max-width: 400px;
      height: 220px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 25px 35px rgba(0,0,0,0.6);
      animation: subtleFloat 6s ease-in-out infinite alternate;
    }

    @keyframes subtleFloat {
      0% { transform: translateY(0px) rotate(0deg); }
      100% { transform: translateY(-8px) rotate(-1deg); }
    }

    .glass-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      z-index: 10;
    }

    .glass-caption h4 {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #ffffff;
      text-transform: uppercase;
    }

    .glass-caption p {
      font-size: 9px;
      font-family: var(--font-mono);
      color: var(--muted);
      letter-spacing: 1.5px;
      margin-top: 4px;
    }

    .glass-spec-table {
      text-align: right;
      font-family: var(--font-mono);
      font-size: 10px;
      line-height: 1.6;
    }

    .glass-spec-table span.label {
      color: #7d8581;
      margin-right: 8px;
    }

    .glass-spec-table span.val {
      color: var(--accent);
      font-weight: 700;
    }

    /* Vertical page index tracker (01/04) */
    .side-indicator {
      position: absolute;
      right: -40px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      font-size: 10px;
      font-family: var(--font-mono);
      color: #6d7370;
    }

    .side-indicator .dot {
      width: 5px;
      height: 5px;
      background: var(--accent);
      border-radius: 50%;
    }

    .side-indicator .line {
      width: 1px;
      height: 25px;
      background: rgba(255, 255, 255, 0.15);
    }

    /* ---------- STATS STRIP ---------- */
    .stats {
      padding: 35px 6%;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background: rgba(10, 12, 12, 0.4);
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 10px 25px;
      border-right: 1px solid var(--line);
    }

    .stat-item:last-child {
      border-right: none;
    }

    .stat-icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent);
      flex-shrink: 0;
      background: rgba(255, 255, 255, 0.02);
    }

    .stat-content .stat-number {
      font-size: 28px;
      font-weight: 800;
      font-family: var(--font-display);
      letter-spacing: -0.5px;
    }

    .stat-content .stat-label {
      color: #6f7572;
      font-size: 10.5px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-top: 3px;
    }

    /* ---------- SECTION DEFAULTS ---------- */
    section {
      padding: 130px 6%;
      position: relative;
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--accent);
      font-size: 11px;
      letter-spacing: 2px;
      font-family: var(--font-mono);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .section-label::before {
      content: "";
      width: 20px;
      height: 1px;
      background: var(--accent);
    }

    /* ---------- PRODUCTS SECTION ---------- */
    .products {
      background: #08090a;
    }

    .products-layout {
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 40px;
      align-items: start;
    }

    .products-intro h2 {
      font-size: clamp(38px, 4.2vw, 56px);
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -2px;
    }

    .products-intro p {
      color: var(--muted);
      font-size: 13.5px;
      line-height: 1.65;
      margin: 24px 0 35px;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .product-card-item {
      background: linear-gradient(170deg, #131717 0%, #0a0c0c 70%);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 24px;
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 460px;
    }

    .product-card-item:hover {
      transform: translateY(-8px);
      border-color: rgba(195, 245, 60, 0.45);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(195, 245, 60, 0.08);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 11px;
      color: #6e7572;
      letter-spacing: 1px;
    }

    .product-thumb-container {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 15px 0;
      overflow: hidden;
      border-radius: 8px;
    }

    /* Hover effect scaled images */
    .product-thumb-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .product-card-item:hover .product-thumb-container img {
      transform: scale(1.06) rotate(1deg);
    }

    .product-info h3 {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
    }

    .product-info p {
      color: #79807d;
      font-size: 12.5px;
      line-height: 1.5;
    }

    .card-bottom {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    .circle-arrow {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--line-bright);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 13px;
      transition: 0.3s;
    }

    .product-card-item:hover .circle-arrow {
      background: var(--accent);
      color: #000;
      border-color: var(--accent);
      transform: rotate(45deg);
    }

    /* ---------- ENGINEERING ---------- */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .big-text {
      font-size: clamp(36px, 4.2vw, 64px);
      line-height: 1.05;
      letter-spacing: -2.5px;
      font-weight: 900;
    }

    .big-text span {
      color: var(--accent);
    }

    .about-copy {
      color: #858a87;
      line-height: 1.8;
      margin-top: 25px;
      font-size: 15px;
      max-width: 520px;
    }

    .technical-box {
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 50px;
      background: linear-gradient(145deg, #111414, #080909);
      position: relative;
    }

    .technical-box::before {
      content: "[ TC-DIE / ENGINEERING ACCURACY ]";
      position: absolute;
      top: 22px;
      right: 25px;
      color: #555b58;
      font-family: var(--font-mono);
      font-size: 9px;
      letter-spacing: 2px;
    }

    .technical-ring {
      width: 280px;
      height: 280px;
      margin: auto;
      border-radius: 50%;
      border: 1px solid #2e3532;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .technical-ring::before,
    .technical-ring::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 1px dashed #3f4744;
    }

    .technical-ring::before { inset: 30px; }
    .technical-ring::after { inset: 65px; }

    .ring-center {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: radial-gradient(circle, #e2d194 0%, #a27b20 40%, #1e1e1e 100%);
      box-shadow: 0 0 40px rgba(195, 245, 60, 0.2);
    }

    /* ---------- PROCESS ---------- */
    .process {
      background: #090b0b;
    }

    .process-list {
      border-top: 1px solid var(--line);
      margin-top: 40px;
    }

    .process-row {
      display: grid;
      grid-template-columns: 100px 1.2fr 1fr;
      padding: 34px 0;
      border-bottom: 1px solid var(--line);
      align-items: center;
      transition: padding-left 0.3s ease;
    }

    .process-row:hover {
      padding-left: 15px;
    }

    .process-no {
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 700;
    }

    .process-title {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }

    .process-description {
      color: #79807d;
      font-size: 13.5px;
      line-height: 1.6;
    }

    /* ---------- APPLICATIONS ---------- */
    .applications-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
      margin-top: 45px;
    }

    .application {
      min-height: 200px;
      padding: 32px;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      transition: 0.3s ease;
    }

    .application:hover {
      background: #101313;
    }

    .application-number {
      color: #555c59;
      font-family: var(--font-mono);
      font-size: 10px;
      letter-spacing: 1.5px;
    }

    .application h3 {
      margin-top: 55px;
      font-size: 19px;
      font-weight: 800;
    }

    .application p {
      color: #747a77;
      font-size: 12px;
      margin-top: 8px;
      line-height: 1.55;
    }

    /* ---------- CONTACT ---------- */
    .contact-grid {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 90px;
    }

    .contact-info h2 {
      font-size: clamp(38px, 4.5vw, 60px);
      font-weight: 900;
      letter-spacing: -2px;
      line-height: 1;
    }

    .contact-info p {
      color: var(--muted);
      line-height: 1.7;
      margin-top: 24px;
      font-size: 14.5px;
    }

    .contact-details {
      margin-top: 45px;
    }

    .contact-details div {
      border-top: 1px solid var(--line);
      padding: 18px 0;
      color: #b2b8b5;
      font-size: 14px;
    }

    .contact-details span {
      color: #5d6360;
      display: block;
      font-family: var(--font-mono);
      font-size: 9px;
      letter-spacing: 2px;
      margin-bottom: 6px;
    }

    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .field.full {
      grid-column: 1 / -1;
    }

    input, textarea {
      width: 100%;
      border: 1px solid var(--line);
      background: #0d0f0f;
      color: white;
      padding: 18px;
      border-radius: 6px;
      outline: none;
      transition: 0.3s;
      font-size: 13.5px;
    }

    textarea {
      height: 150px;
      resize: vertical;
    }

    input:focus, textarea:focus {
      border-color: var(--accent);
      background: #111414;
    }

    /* ---------- FOOTER ---------- */
    footer {
      border-top: 1px solid var(--line);
      padding: 30px 6%;
      display: flex;
      justify-content: space-between;
      color: #606663;
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 1px;
    }

    /* ---------- REVEAL ANIMATIONS ---------- */
    .reveal {
      opacity: 0;
      transform: translateY(35px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }

    /* ---------- RESPONSIVE BREAKPOINTS ---------- */
    @media (max-width: 1100px) {
      .products-layout {
        grid-template-columns: 1fr;
      }
      .product-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      .stat-item:nth-child(2) {
        border-right: none;
      }
      .applications-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 900px) {
      .nav-links { display: none; }
      .hero {
        grid-template-columns: 1fr;
        padding-top: 130px;
        gap: 60px;
      }
      .stage-card {
        max-width: 440px;
        height: 420px;
      }
      .about-grid, .contact-grid {
        grid-template-columns: 1fr;
        gap: 50px;
      }
      .process-row {
        grid-template-columns: 60px 1fr;
        gap: 15px;
      }
      .process-description {
        grid-column: 2;
      }
    }

    @media (max-width: 600px) {
      nav { padding: 18px 5%; }
      .product-grid, .applications-grid, .stats {
        grid-template-columns: 1fr;
      }
      .stat-item {
        border-right: none;
        border-bottom: 1px solid var(--line);
        padding: 18px 0;
      }
      form {
        grid-template-columns: 1fr;
      }
      .field.full {
        grid-column: auto;
      }
      .cursor, .cursor-ring {
        display: none;
      }
      footer {
        flex-direction: column;
        gap: 12px;
      }
    }
  </style>
</style>
<body>

  <div class="cursor"></div>
  <div class="cursor-ring"></div>

  <!-- NAVBAR -->
  <nav>
    <a href="#home" class="logo">SB DRAWING<span>.</span>DIE</a>

    <ul class="nav-links">
      <li><a href="#home" class="active">Home</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#engineering">Engineering</a></li>
      <li><a href="#process">Process</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div class="nav-actions">
      <a href="#contact" class="nav-btn">
        REQUEST QUOTE <span>→</span>
      </a>
      <div class="menu-burger">
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero" id="home">
    <div class="grid-bg"></div>
    <div class="hero-glow"></div>

    <div class="hero-content reveal">
      <div class="eyebrow">Precision Carbide Engineering</div>

      <div class="hero-title">
        <span class="solid">TC</span>
        <span class="outline">DIE</span>
      </div>

      <div class="hero-subhead">
        Precision Engineered.
        <span>Built to perform.</span>
      </div>

      <p class="hero-text">
        High-performance tungsten carbide dies for demanding industrial applications. 
        Superior wear resistance, exceptional accuracy, consistent results.
      </p>

      <div class="hero-buttons">
        <a href="#products" class="primary-btn">
          EXPLORE PRODUCTS <span>→</span>
        </a>
        <a href="#contact" class="secondary-btn">
          CUSTOM ENQUIRY
        </a>
      </div>
    </div>

    <!-- 3D GLASS STAGE WITH CARBIDE DIES -->
    <div class="hero-stage-wrapper">
      <div class="stage-card" id="productCard">
        <div class="glass-base">
          <div class="glass-glow-spot"></div>
          
          <div class="glass-header">
            <div>[ TC-D / 001 ]</div>
            <div class="brand-badge">CARATD</div>
          </div>

          <!-- DIES PRESENTATION CLUSTER (Hero Image replacement) -->
          <div class="dies-graphic-cluster">
            <img src="./images (1).jpg" alt="Precision Carbide Dies" class="dies-render-img">
          </div>

          <div class="glass-footer">
            <div class="glass-caption">
              <h4>Tungsten Carbide Die</h4>
              <p>High Precision // High Durability</p>
            </div>
            <div class="glass-spec-table">
              <div><span class="label">WC GRADE</span><span class="val">: PREMIUM</span></div>
              <div><span class="label">PRECISION</span><span class="val">: &plusmn;0.005 MM</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide tracker 01/04 -->
      <div class="side-indicator">
        <span>01 / 04</span>
        <div class="dot"></div>
        <div class="line"></div>
      </div>
    </div>
  </section>

  <!-- STATS STRIP -->
  <div class="stats">
    <div class="stat-item reveal">
      <div class="stat-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>
        </svg>
      </div>
      <div class="stat-content">
        <div class="stat-number">&plusmn;5 &mu;m</div>
        <div class="stat-label">Precision Capability</div>
      </div>
    </div>

    <div class="stat-item reveal">
      <div class="stat-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
      <div class="stat-content">
        <div class="stat-number">99%</div>
        <div class="stat-label">Quality Focus</div>
      </div>
    </div>

    <div class="stat-item reveal">
      <div class="stat-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </div>
      <div class="stat-content">
        <div class="stat-number">8AM to 6PM</div>
        <div class="stat-label">Industrial Performance</div>
      </div>
    </div>

    <div class="stat-item reveal">
      <div class="stat-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M6 3h12l4 6-10 12L2 9z"/>
          <path d="M11 3 8 9l4 12 4-12-3-6"/>
        </svg>
      </div>
      <div class="stat-content">
        <div class="stat-number">TC</div>
        <div class="stat-label">Carbide Technology</div>
      </div>
    </div>
  </div>

  <!-- PRODUCTS SECTION -->
  <section class="products" id="products">
    <div class="products-layout">
      
      <div class="products-intro reveal">
        <div class="section-label">01 / Product Range</div>
        <h2>Engineered<br>for every<br>application.</h2>
        <p>
          From standard dies to custom solutions, we manufacture carbide dies that deliver precision, durability and performance.
        </p>
        <a href="#contact" class="secondary-btn">
          VIEW ALL PRODUCTS <span>→</span>
        </a>
      </div>

      <div class="product-grid">

        <!-- Card 1: Wire Drawing Dies -->
        <div class="product-card-item reveal">
          <div class="card-top">
            <span>[ TC-01 ]</span>
          </div>

          <div class="product-thumb-container">
            <img src="./images (2).jpg" alt="Wire Drawing Dies">
          </div>

          <div class="product-info">
            <h3>WIRE DRAWING DIES</h3>
            <p>High-performance carbide dies for accurate wire reduction and continuous production.</p>
          </div>

          <div class="card-bottom">
            <div class="circle-arrow">→</div>
          </div>
        </div>

        <!-- Card 2: Tube Drawing Dies -->
        <div class="product-card-item reveal">
          <div class="card-top">
            <span>[ TC-02 ]</span>
          </div>

          <div class="product-thumb-container">
            <img src="./images.jpg" alt="Tube Drawing Dies">
          </div>

          <div class="product-info">
            <h3>TUBE DRAWING DIES</h3>
            <p>Precision tooling for tube sizing, reduction and controlled dimensional output.</p>
          </div>

          <div class="card-bottom">
            <div class="circle-arrow">→</div>
          </div>
        </div>

        <!-- Card 3: Custom Dies -->
        <div class="product-card-item reveal">
          <div class="card-top">
            <span>[ TC-03 ]</span>
          </div>

          <div class="product-thumb-container">
            <img src="./tc die.jpg" alt="Custom Dies">
          </div>

          <div class="product-info">
            <h3>CUSTOM DIES</h3>
            <p>Application-specific carbide die solutions manufactured to customer drawings.</p>
          </div>

          <div class="card-bottom">
            <div class="circle-arrow">→</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ENGINEERING / ABOUT -->
  <section id="engineering">
    <div class="about-grid">
      <div class="reveal">
        <div class="section-label">02 / Engineering</div>
        <div class="big-text">
          Small dimensions.<br>
          <span>Massive impact.</span>
        </div>
        <p class="about-copy">
          TC DIE focuses on precision tooling where even microscopic dimensional variations determine production quality. Our tungsten carbide metallurgy delivers prolonged life cycles, tight tolerances, and predictable outcomes under extreme stress.
        </p>
      </div>

      <div class="technical-box reveal">
        <div class="technical-ring">
          <div class="ring-center"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS SECTION -->
  <section class="process" id="process">
    <div class="section-label reveal">03 / Manufacturing Workflow</div>
    <div class="big-text reveal" style="margin-bottom: 20px;">From raw alloy<br>to micrometer accuracy.</div>

    <div class="process-list">
      <div class="process-row reveal">
        <div class="process-no">01</div>
        <div class="process-title">Material Selection</div>
        <div class="process-description">
          Micro-grain tungsten carbide grade selection tailored specifically for required wire hardness, corrosion conditions, and thermal shock resistance.
        </div>
      </div>

      <div class="process-row reveal">
        <div class="process-no">02</div>
        <div class="process-title">Hot Isostatic Pressing</div>
        <div class="process-description">
          Sinter-HIP processing eliminates structural microporosity, achieving maximum fracture toughness and grain structural density.
        </div>
      </div>

      <div class="process-row reveal">
        <div class="process-no">03</div>
        <div class="process-title">Mirror Lapping & Polish</div>
        <div class="process-description">
          Sub-micron diamond paste finishing to attain ultra-low friction Ra values that prevent material pick-up and maximize tool service life.
        </div>
      </div>

      <div class="process-row reveal">
        <div class="process-no">04</div>
        <div class="process-title">Optical Inspection</div>
        <div class="process-description">
          100% computerized optical measurement guaranteeing exit diameter, reduction angle, and bearing length tolerances within &plusmn;0.005mm.
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section id="contact">
    <div class="contact-grid">
      <div class="contact-info reveal">
        <div class="section-label">05 / Contact & Enquiries</div>
        <h2>Let's build<br>precision.</h2>
        <p>
          Send us your drawings or technical parameters. Our engineering team will review requirements and provide quotation within 24 hours.
        </p>

        <div class="contact-details">
          <div>
            <span>DIRECT EMAIL</span>
            singhranveer28980@gmail.com
          </div>
          <div>
            <span>PHONE</span>
            +91 9977571581
          </div>
          <div>
            <span>HEADQUARTERS</span>
            BajrangPura,Industrial Area, India
          </div>
        </div>
      </div>

      <form class="reveal" id="quoteForm">
        <div class="field">
          <input type="text" placeholder="Your Name" required>
        </div>
        <div class="field">
          <input type="email" placeholder="Business Email" required>
        </div>
        <div class="field">
          <input type="text" placeholder="Company Name">
        </div>
        <div class="field">
          <input type="text" placeholder="Target Spec / Die Size">
        </div>
        <div class="field full">
          <textarea placeholder="Describe your die application, material specifications, or volume requirements..."></textarea>
        </div>
        <button type="submit" class="primary-btn">
          REQUEST QUOTATION <span>→</span>
        </button>
      </form>
    </div>
  </section>
<script>
  
    const cursor = document.querySelector(".cursor");
    const ring = document.querySelector(".cursor-ring");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      ring.animate(
        { left: e.clientX + "px", top: e.clientY + "px" },
        { duration: 400, fill: "forwards" }
      );
    });

    const card = document.getElementById("productCard");

    if (card) {
      document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 45;
        const y = (window.innerHeight / 2 - e.clientY) / 45;
        card.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
      });
    }

    /* /* ---------- INTERSECTION OBSERVER FOR FADE-IN ---------- */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));


   /* ---------- CONTACT FORM SUBMIT BUTTON STATE (WhatsApp Setup) ---------- */
    const form = document.getElementById("quoteForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // Page ko reload hone se rokega
        
        // 1. Form ki details nikalna
        const name = form.querySelector('input[placeholder="Your Name"]').value;
        const email = form.querySelector('input[placeholder="Business Email"]').value;
        const company = form.querySelector('input[placeholder="Company Name"]').value;
        const spec = form.querySelector('input[placeholder="Target Spec / Die Size"]').value;
        const message = form.querySelector('textarea').value;

        // 2. WhatsApp ke liye message banana
        // %0A ka matlab hai line break (Enter button)
        const whatsappMsg = `*New Quotation Request* 🛠️%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Company:* ${company}%0A*Specification:* ${spec}%0A*Message:* ${message}`;

        // 3. APNA WHATSAPP NUMBER YAHAN DALEN 
        // Note: Country code zaroor lagayein (India ke liye 91), bina + ya space ke.
        const phoneNumber = "9977571581"; 
        
        // WhatsApp URL banana
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;

        // Naye tab me WhatsApp kholna
        window.open(whatsappURL, "_blank");

        // Button ka style change karna (Success animation)
        const btn = form.querySelector("button");
        btn.innerHTML = "ENQUIRY SENT ✓";
        btn.style.background = "#fff";
        btn.style.color = "#000";
        setTimeout(() => {
          btn.innerHTML = 'REQUEST QUOTATION <span>→</span>';
          btn.style.background = "var(--accent)";
          form.reset(); // Form khali karna
        }, 3000);
      });
    }
</script>
  <!-- FOOTER -->
  <footer>
    <div>&copy; 2026 SB Wire Drawing DIE CORPORATION. ALL RIGHTS RESERVED.</div>
    <div>WC GRADE : PREMIUM // &plusmn;0.005 MM TOLERANCE</div>
  </footer>

  
</body>
</html>
