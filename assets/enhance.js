/* Weekly Growth Muscle — shared enhancement behaviour.
   Currently: accessible mobile navigation toggle. Loaded with `defer`. */
(function(){
  document.querySelectorAll('nav .nav-in').forEach(function(navIn){
    var toggle = navIn.querySelector('.nav-toggle');
    var links  = navIn.querySelector('.nav-links');
    if(!toggle || !links) return;

    function setOpen(open){
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function(){
      setOpen(!links.classList.contains('open'));
    });

    // close after choosing a destination
    links.addEventListener('click', function(e){
      if(e.target.closest('a')) setOpen(false);
    });

    // Esc closes the menu
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') setOpen(false);
    });

    // reset when resizing back up to desktop
    window.addEventListener('resize', function(){
      if(window.innerWidth > 760) setOpen(false);
    });
  });
})();

/* ---------------------------------------------------------------------------
   Cookie consent banner + consent gate.
   PREP MODE: no ad or analytics scripts are loaded yet. When you're approved
   for AdSense, put the loader inside applyConsent() so ads only run *after*
   the visitor clicks Accept (and never if they Decline).
   Consent is remembered in localStorage so the banner shows only once.
   --------------------------------------------------------------------------- */
(function(){
  var KEY = 'wgm-consent';
  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch(e) {}

  function applyConsent(){
    /* Ready for after AdSense approval — load ad/analytics scripts here, e.g.:
       var s = document.createElement('script');
       s.async = true;
       s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
       s.crossOrigin = 'anonymous';
       document.head.appendChild(s);
    */
  }

  if(choice === 'accepted'){ applyConsent(); return; }
  if(choice === 'declined'){ return; }

  function store(v){ try { localStorage.setItem(KEY, v); } catch(e) {} }

  var bar = document.createElement('div');
  bar.className = 'wgm-cookie';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Cookie consent');
  bar.innerHTML =
    '<p>We use local storage to power features like your saved workout log, and we’re preparing to show ads via Google AdSense, which will set cookies. See our <a href="privacy.html">Privacy Policy</a>.</p>' +
    '<div class="row">' +
      '<button type="button" class="btn accept">Accept</button>' +
      '<button type="button" class="decline">Decline</button>' +
    '</div>';
  document.body.appendChild(bar);
  function reveal(){ bar.classList.add('show'); }
  requestAnimationFrame(function(){ requestAnimationFrame(reveal); });
  // rAF is paused while a tab is backgrounded / not compositing, so guarantee
  // the banner still appears shortly after load.
  setTimeout(reveal, 250);

  function dismiss(){
    bar.classList.remove('show');
    setTimeout(function(){ if(bar.parentNode) bar.parentNode.removeChild(bar); }, 500);
  }
  bar.querySelector('.accept').addEventListener('click', function(){
    store('accepted'); dismiss(); applyConsent();
  });
  bar.querySelector('.decline').addEventListener('click', function(){
    store('declined'); dismiss();
  });
})();
