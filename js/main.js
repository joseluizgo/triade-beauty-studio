/* main.js
   Responsividade, animações de scroll (IntersectionObserver),
   atualização de ano no footer e pequenos comportamentos.
*/

/* Atualiza o ano no footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* Scroll reveal simples usando IntersectionObserver */
(function(){
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12
  });

  reveals.forEach(el => observer.observe(el));
})();

/* Pequeno efeito para links que abrem WhatsApp: adiciona foco visual */
document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
  a.addEventListener('click', () => {
    // evento simples; não bloqueia comportamento padrão
    // aqui você pode adicionar tracking se desejar
  });
});

/* Acessibilidade: tecla ESC fecha modais futuros (placeholder) */
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    // fechar modais se houver
  }
});
