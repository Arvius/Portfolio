var typed = new Typed(".auto-type", {
    strings: ["Programmer", "Web Developer", "Backend Developer"],
    typeSpeed: 60,        // Bilis ng pag-type
    backSpeed: 70,        // Bilis ng pag-delete (mas mabagal para smooth)
    backDelay: 1000,      // Delay bago mag-delete (1.5 seconds)
    startDelay: 500,       // Delay bago mag-start
    loop: true,            // Ulit-ulitin
    showCursor: true,      // Ipakita ang cursor
    cursorChar: "|",       // Character ng cursor
    autoInsertCss: true,   // Auto-add ng CSS para sa cursor
    smartBackspace: true,  // Mas matalinong pag-delete
});