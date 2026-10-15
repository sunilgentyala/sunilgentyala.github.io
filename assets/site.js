(function(){
var r=document.documentElement,k='sg-theme';
try{var s=localStorage.getItem(k);if(s)r.setAttribute('data-theme',s)}catch(e){}
var t=document.getElementById('theme');
if(t)t.addEventListener('click',function(){var cur=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');var n=cur==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem(k,n)}catch(e){}});
document.querySelectorAll('.filters').forEach(function(bar){
 var list=document.getElementById(bar.dataset.target),items=[].slice.call(list.querySelectorAll('.item')),f='all',q='';
 var cnt=document.createElement('p');cnt.className='count';cnt.setAttribute('aria-live','polite');bar.after(cnt);
 function run(){var n=0;items.forEach(function(i){var ok=(f==='all'||(i.dataset.areas||'').split(' ').indexOf(f)>-1)&&(!q||i.textContent.toLowerCase().indexOf(q)>-1);i.classList.toggle('hidden',!ok);if(ok)n++});cnt.textContent=n+' of '+items.length+' shown'}
 bar.querySelectorAll('.chip').forEach(function(b){b.addEventListener('click',function(){f=b.dataset.f;bar.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===b)});run()})});
 bar.querySelector('.search').addEventListener('input',function(ev){q=ev.target.value.trim().toLowerCase();run()});
 var h=location.hash.slice(1);if(h&&AREAS_OK(h)){var b=bar.querySelector('[data-f="'+h+'"]');if(b)b.click()}else run();
});
function AREAS_OK(h){return /^(ai|off|def|priv|pqc|clin)$/.test(h)}
})();