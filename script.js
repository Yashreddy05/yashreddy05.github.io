// Custom cursor animation
var cur = document.getElementById('cursor');
var ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', function(e){
  cur.style.left  = e.clientX + 'px';
  cur.style.top   = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(function(el){
  el.addEventListener('mouseenter', function(){
    cur.style.width = '20px'; cur.style.height = '20px';
    ring.style.width = '50px'; ring.style.height = '50px';
  });
  el.addEventListener('mouseleave', function(){
    cur.style.width = '12px'; cur.style.height = '12px';
    ring.style.width = '36px'; ring.style.height = '36px';
  });
});

// Scroll reveal effect
var reveals = document.querySelectorAll('.reveal');
var obs = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){ e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });

reveals.forEach(function(r){ obs.observe(r); });

// Typewriter text effect
var roles = ['GenAI Developer', 'AI Engineer', 'LLM Developer', 'Agentic AI Builder'];
var ri = 0, ci = 0, deleting = false;
var roleEl = document.querySelector('.hero-role span');

function type(){
  var word = roles[ri];
  if(!deleting){
    roleEl.textContent = word.slice(0, ci+1);
    ci++;
    if(ci === word.length){ deleting = true; setTimeout(type, 1500); return; }
  } else {
    roleEl.textContent = word.slice(0, ci-1);
    ci--;
    if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Stat counter activation triggers
function animateCounters(){
  document.querySelectorAll('.stat-num').forEach(function(el){
    el.classList.add('visible');
  });
}
setTimeout(animateCounters, 800);
