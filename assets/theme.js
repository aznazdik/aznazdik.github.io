(function(){var k='az-theme',r=document.documentElement,t=null;try{t=localStorage.getItem(k)}catch(e){}
if(t==='dark'||t==='light')r.setAttribute('data-theme',t);
document.addEventListener('DOMContentLoaded',function(){var b=document.getElementById('themeBtn');if(!b)return;
function cur(){var a=r.getAttribute('data-theme');if(a)return a;return matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
function sync(){var d=cur()==='dark';b.setAttribute('aria-pressed',d?'true':'false');b.setAttribute('aria-label',d?'رفتن به حالت روشن':'رفتن به حالت تیره');b.title=b.getAttribute('aria-label')}
sync();b.addEventListener('click',function(){var n=cur()==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem(k,n)}catch(e){}sync()})})})();
