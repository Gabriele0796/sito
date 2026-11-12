// Menu su telefono + comparsa delle sezioni allo scroll
(function(){
  var b=document.querySelector('.apri-menu'), m=document.getElementById('menu');
  if(b&&m){b.addEventListener('click',function(){var a=m.classList.toggle('aperto');b.setAttribute('aria-expanded',a);b.textContent=a?'Chiudi':'Menu';});}
  if(!('IntersectionObserver' in window))return;
  document.documentElement.classList.add('js');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visto');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.entra').forEach(function(el){io.observe(el);});
})();
