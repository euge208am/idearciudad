(function(){
var top=document.getElementById('top'),h=document.getElementById('inicio');
function bar(){top.classList.toggle('solid',window.scrollY>h.offsetHeight-70)}
bar();addEventListener('scroll',bar,{passive:true});

var M=window.MAP,NS='http://www.w3.org/2000/svg';
function mk(p,cls,d,pl){var e=document.createElementNS(NS,'path');e.setAttribute('d',d);e.setAttribute('class',cls);if(pl)e.setAttribute('pathLength','1');p.appendChild(e);return e}
function build(svg,pad,draw){svg.setAttribute('viewBox',(-pad)+' '+(-pad)+' '+(M.w+2*pad)+' '+(M.h+2*pad));
var g=document.createElementNS(NS,'g');g.setAttribute('class','g');svg.appendChild(g);
var L={o:[mk(g,'ln-o',M.outline,draw)]};
['c','b','a','w','r'].forEach(function(k){L[k]=M[k==='w'?'wa':k].map(function(d){return mk(g,'ln-'+k,d,draw)})});
return {g:g,L:L}}
var m2=document.getElementById('msvg');if(m2&&M)build(m2,10,false);
var hs=document.getElementById('hmap'),logo=document.querySelector('.h .logo'),con=document.querySelector('.h .conoce');
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
function hero(){
if(!hs||!M||rm){document.documentElement.classList.add('rm');return}
function fit(){var P=hs.parentNode,H=P.clientHeight*.88,W=P.clientWidth*.94,w=H*M.w/M.h;if(w>W){w=W;H=w*M.h/M.w}hs.style.width=w+'px';hs.style.height=H+'px'}
fit();var B=build(hs,0,false),SC=1;
function meas(){SC=hs.getBoundingClientRect().width/M.w||1}
var items=[];
function add(list,t0,span,dur){var n=list.length;list.forEach(function(e,i){var len=0;try{len=e.getTotalLength()}catch(x){}
items.push({e:e,len:len,t0:t0+(n>1?span*i/(n-1):0),dur:dur,done:false});e.style.opacity=0})}
add(B.L.o,0,0,1500);
add(B.L.a,500,1500,900);
add(B.L.b,1300,1400,800);
add(B.L.c,1900,1400,700);
add(B.L.w,3100,1000,1100);
add(B.L.r,3900,700,1000);
var ZT=5300,ZD=2200,LT=ZT+1000,CT=ZT+ZD+300;
function ease(p){return p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2}
B.g.style.transformOrigin=(M.cx/M.w*100)+'% '+(M.cy/M.h*100)+'%';
function render(t){
meas();
items.forEach(function(it){if(it.done)return;var p=(t-it.t0)/it.dur;
if(p<=0){it.e.style.opacity=0;return}
it.e.style.opacity=1;
if(p>=1){it.e.style.strokeDasharray='';it.e.style.strokeDashoffset='';it.done=true;return}
var L=it.len*SC;it.e.style.strokeDasharray=L+' '+(L+2);it.e.style.strokeDashoffset=L*(1-ease(p))});
var z=Math.min(1,Math.max(0,(t-ZT)/ZD)),ze=z*z*(3-2*z);
B.g.style.transform='scale('+(1+13*ze*ze)+')';
B.g.style.opacity=z<.55?1:Math.max(0,1-(z-.55)/.45);
logo.classList.toggle('on',t>=LT);con.classList.toggle('on',t>=CT)}
var q=/[?&]t=(\d+)/.exec(location.search);
if(q){render(+q[1]);return}
var t0=null;function frame(ts){if(t0===null)t0=ts;var t=ts-t0;render(t);if(t<CT+400)requestAnimationFrame(frame)}
requestAnimationFrame(frame);
addEventListener('resize',function(){fit()})}
hero();


// mapa de problemas por capas
var PL=window.PL,pm=document.getElementById('pmsvg');
if(pm&&M){pm.setAttribute('viewBox','-10 -10 '+(M.w+20)+' '+(M.h+20));
function pe(t,a,p){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);(p||pm).appendChild(e);return e}
pe('path',{d:M.outline,'class':'b-o'});M.a.forEach(function(d){pe('path',{d:d,'class':'b-a'})});M.wa.forEach(function(d){pe('path',{d:d,'class':'b-w'})});M.r.forEach(function(d){pe('path',{d:d,'class':'b-r'})});
var list=document.getElementById('pm-layers'),cap=document.getElementById('pm-cap');
(PL||[]).forEach(function(l,i){
var g=pe('g',{'class':'L'+(l.on?'':' off'),'data-id':l.id});
if(l.type==='soon'){}else if(l.type==='poly')l.d.forEach(function(d){pe('path',{d:d,fill:l.color,'fill-opacity':l.fo||.55,stroke:l.color,'stroke-width':.8},g)});
if(l.type==='line')l.d.forEach(function(d){pe('path',{d:d,fill:'none',stroke:l.color,'stroke-width':1.6,'stroke-linecap':'round'},g)});
if(l.type==='point')l.pts.forEach(function(p){pe('circle',{cx:p[0],cy:p[1],r:l.r||4,fill:l.color,stroke:'#2a4b9b','stroke-width':1},g)});
var li=document.createElement('li'),lb=document.createElement('label'),inp=document.createElement('input');inp.type='checkbox';if(l.type==='soon')inp.disabled=true;inp.checked=!!l.on;inp.style.setProperty('--c',l.color);
inp.addEventListener('change',function(){g.classList.toggle('off',!inp.checked);var on=PL.filter(function(x,j){return list.querySelectorAll('input')[j].checked}).map(function(x){return x.name});cap.textContent=on.length?on.join(' + '):'Prendé una capa para empezar'});
var b=document.createElement('b');b.textContent=l.name;var sm=document.createElement('small');sm.innerHTML=l.note+' Fuente: '+(l.url?'<a href="'+l.url+'" target="_blank" rel="noopener">'+l.source+'</a>':l.source)+'.';
lb.appendChild(inp);lb.appendChild(b);lb.appendChild(sm);li.appendChild(lb);list.appendChild(li)});
cap.textContent=(PL||[]).filter(function(l){return l.on}).map(function(l){return l.name}).join(' + ')}

// buscador
var q=document.getElementById('q'),chips=document.getElementById('chips'),items=[].slice.call(document.querySelectorAll('#res li')),vacio=document.getElementById('vacio'),mapa=document.getElementById('mapa'),eje='';
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
function filtrar(){var t=norm(q.value.trim()),n=0;items.forEach(function(li){var ok=(!eje||li.dataset.e===eje)&&(!t||norm(li.textContent).indexOf(t)>-1);li.hidden=!ok;if(ok)n++});vacio.hidden=n>0}
q.addEventListener('input',filtrar);
chips.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;eje=b.dataset.e;[].forEach.call(chips.children,function(c){c.setAttribute('aria-pressed',c===b)});mapa.style.setProperty('--fill',b.dataset.c||'transparent');filtrar()});
// formularios: se arma un mail (completar MAIL con el correo real)
var MAIL='';
[].forEach.call(document.querySelectorAll('.form'),function(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),body=[];d.forEach(function(v,k){body.push(k+': '+v)});
if(!MAIL){var p=document.createElement('p');p.className='ok';p.textContent='Falta configurar el correo de destino.';f.replaceWith(p);return}
location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(f.dataset.kind+' desde la web')+'&body='+encodeURIComponent(body.join('\n'));})});
})();
