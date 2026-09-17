
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