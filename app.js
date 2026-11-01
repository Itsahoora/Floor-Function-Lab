const themeToggle=document.getElementById('theme-toggle'),themeIcon=document.getElementById('theme-icon');
function setTheme(theme){
 document.documentElement.dataset.theme=theme;
 const dark=theme==='dark';
 themeToggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
 themeToggle.title=dark?'Switch to light theme':'Switch to dark theme';
 themeIcon.innerHTML=dark
  ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'
  : '<path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z"/>';
}
themeToggle.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
const langToggle=document.getElementById('lang-toggle');
function setLang(next){
 lang=next;const fa=lang==='fa';document.documentElement.lang=lang;document.documentElement.dir=fa?'rtl':'ltr';
 document.title=fa?'آزمایشگاه تابع جزء صحیح — ریاضی تعاملی':'Floor Function Lab — Interactive Math';
 themeToggle.setAttribute('aria-label',fa?'تغییر به پوستهٔ تیره':'Switch to dark theme');themeToggle.title=fa?'تغییر پوسته':'Switch theme';
 $('presentation-close').setAttribute('aria-label',fa?'بستن ارائه':'Close presentation');
 $('in').setAttribute('aria-label',fa?'عبارت‌های ریاضی را با ویرگول جدا کنید':'Enter mathematical expressions separated by commas');
 $('sl').setAttribute('aria-label',fa?'زمان پویانمایی':'Animation time');
 $('cv').setAttribute('aria-label',fa?'پویانمایی نقطه‌ها روی خط y = x و افتادن آن‌ها در گودال‌های عدد صحیح':'Animation: points roll down the line y = x and fall into pits at the integers');
 $('live-chart').setAttribute('aria-label',fa?'نمودار تعاملی تابع جزء صحیح':'Interactive floor function graph');
 $('compare-chart').setAttribute('aria-label',fa?'نمودار مقایسهٔ تابع جزء صحیح با تابع انتخاب‌شده':'Graph comparing the floor function with the selected function');
 $('studio-chart').setAttribute('aria-label',fa?'نمودار تابع انتخاب‌شده':'Selected function graph');
 $('feature-suite').setAttribute('aria-label',fa?'راه‌های بیشتری برای کشف تابع جزء صحیح':'More ways to explore the floor function');
 document.querySelector('.feature-tabs').setAttribute('aria-label',fa?'ابزارهای ریاضی':'Math tools');
 document.querySelector('table caption').textContent=fa?'نتیجهٔ تابع جزء صحیح برای هر مقدار واردشده':'Floor function results for each entered value';
 langToggle.textContent=fa?'EN':'فا';langToggle.setAttribute('aria-label',fa?'Switch to English':'تغییر زبان به فارسی');langToggle.title=fa?'Switch to English':'تغییر زبان به فارسی';
 const values=fa?{
 'brand-name':'آزمایشگاه تابع جزء صحیح','brand-note':'یک آزمایش تعاملی ریاضی','eyebrow-main':'عدد صحیحِ پایین‌تر را کشف کنید','main-title':'هر عدد، جزء صحیحی دارد.','main-sub':'یک مقدار وارد کنید و ببینید تابع جزء صحیح چگونه بزرگ‌ترین عدد صحیحِ کوچک‌تر یا مساوی آن را پیدا می‌کند.','input-eyebrow':'۰۱ / ورودی','input-title':'عددهایتان را انتخاب کنید','roll-btn':'شروع حرکت','input-hint':'از ۱ تا ۱۰ مقدار از منفی ۹ تا مثبت ۹ وارد کنید. اعشار، کسر، pi و sqrt(2) پشتیبانی می‌شوند.','preset-label':'با یک نمونه شروع کنید','speed-label':'سرعت','type-integer':'صحیح','type-rational':'گویا','type-irrational':'گنگ','rule-label':'قاعده','rule-explain':'هر نقطه به سمت چپ می‌غلتد و در نخستین گودال می‌افتد. عدد گودال، بزرگ‌ترین عدد صحیحِ کوچک‌تر یا مساوی مقدار اولیه است. برای همین ⌊−۷/۲⌋ = −۴ است، نه −۳.','results-eyebrow':'۰۲ / نتیجه‌ها','results-title':'نتیجه‌های شما','th-number':'عدد','th-type':'نوع','th-value':'مقدار','th-because':'دلیل','footer-name':'آزمایشگاه تابع جزء صحیح','footer-note':'ریاضی، دیدنی می‌شود.'
 }: {
 'brand-name':'Floor Function Lab','brand-note':'An interactive math experiment','eyebrow-main':'Explore the integer below','main-title':'Every number has a floor.','main-sub':'Enter a value and watch the floor function turn it into the greatest integer less than or equal to it.','input-eyebrow':'01 / Input','input-title':'Choose your numbers','roll-btn':'Roll them','input-hint':'Use 1–10 values between −9 and 9. Supports decimals, fractions, pi, and sqrt(2).','preset-label':'START WITH AN EXAMPLE','speed-label':'Speed','type-integer':'Integer','type-rational':'Rational','type-irrational':'Irrational','rule-label':'The rule','rule-explain':'Each point rolls left and falls into the first pit it meets. The pit is the greatest integer less than or equal to the original value. That is why ⌊−7/2⌋ = −4, not −3.','results-eyebrow':'02 / Results','results-title':'Your results','th-number':'Number','th-type':'Type','th-value':'Value','th-because':'Because','footer-name':'Floor Function Lab','footer-note':'Mathematics, made visible.'
 };
 Object.entries(values).forEach(([id,text])=>{const el=document.getElementById(id);if(el)el.textContent=text;});
 document.querySelectorAll('[data-en][data-fa]').forEach(el=>el.textContent=el.dataset[lang]);
 document.querySelectorAll('#st span').forEach(el=>el.textContent=el.dataset[lang]);
 $('pl').textContent=playing?tr('pause'):tr('play');$('rs').textContent=fa?'از نو':'Replay';$('sp').previousElementSibling.textContent=tr('speed');updSnd();
 if(!idle)run($('in').value);else drawIdle();
 if(typeof syncExtraLanguage==='function')syncExtraLanguage();
}
langToggle.addEventListener('click',()=>setLang(lang==='en'?'fa':'en'));
const cv=document.getElementById('cv'),c=cv.getContext('2d'),W=1000,H=700;
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),ease=t=>t*t*(3-2*t),lerp=(a,b,t)=>a+(b-a)*t,mn=s=>{const out=String(s).replace(/-/g,'−');return lang==='fa'?out.replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[+d]):out};
let lang='en';
const TXT={en:{integer:'Integer',rational:'Rational',irrational:'Irrational',pause:'Pause',play:'Play',speed:'Speed',soundEnable:'🔈 Tap to enable sound',soundOff:'🔇 Sound off',soundOn:'🔊 Sound on',waiting:'Waiting for your numbers…',idle1:'Type your numbers above',idle2:'then press “Roll them” to watch them fall into the wells',errEmpty:'Please type at least one number.',errMany:'Please use at most 10 numbers.',errRead:t=>`Could not read “${t}”. Try forms like 2.7, 5/2, pi or sqrt(2).`,errRange:t=>`“${t}” is outside the range −9 to 9.`,caps:['Start with a number line holding your numbers: integers, rationals and irrationals.','Lift the whole number line onto y = x, the bisector of the 1st and 3rd quadrants. The points ride along.','Now dig a pit at every integer point of the line.','The line is a slope, so each point rolls like a log down to the left and drops into the first pit it reaches. Integers already sit above a pit.','The value of each pit is the floor of the number that fell into it. The table below lists every result.']},fa:{integer:'صحیح',rational:'گویا',irrational:'گنگ',pause:'مکث',play:'ادامه',speed:'سرعت',soundEnable:'🔈 برای فعال‌کردن صدا لمس کنید',soundOff:'🔇 صدا خاموش',soundOn:'🔊 صدا روشن',waiting:'منتظر واردکردن عددها…',idle1:'عددها را در کادر بالا وارد کنید',idle2:'سپس «شروع حرکت» را بزنید تا افتادن آن‌ها در گودال‌ها را ببینید',errEmpty:'لطفاً دست‌کم یک عدد وارد کنید.',errMany:'لطفاً حداکثر ۱۰ عدد وارد کنید.',errRead:t=>`عبارت «${t}» قابل‌خواندن نیست. نمونه‌ها: ۲٫۷، ۵/۲، pi یا sqrt(2).`,errRange:t=>`عبارت «${t}» خارج از بازهٔ ۹- تا ۹ است.`,caps:['روی محور اعداد، عددهای صحیح، گویا و گنگ را قرار می‌دهیم.','تمام محور اعداد را روی خط y = x، نیمساز ربع اول و سوم، بالا می‌بریم. نقطه‌ها همراه خط حرکت می‌کنند.','حالا در محل هر عدد صحیح روی خط، یک گودال ایجاد می‌کنیم.','چون خط شیب دارد، هر نقطه مانند کُنده‌ای به سمت چپ می‌غلتد و در نخستین گودال می‌افتد. عددهای صحیح از ابتدا بالای گودال قرار دارند.','عدد هر گودال برابر جزء صحیحِ عددی است که در آن افتاده است. همهٔ نتیجه‌ها در جدول آمده‌اند.']}};
function tr(k,...args){const v=TXT[lang][k];return typeof v==='function'?v(...args):v;}
const FONT='Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Tahoma,"Noto Sans Arabic",sans-serif',COL={i:'#34d399',q:'#60a5fa',r:'#fb7185'},GOLD='#fbbf24';
let P=[],nmin,nmax,S,OX,OY,R,HW,D,tFin,TOT,lo,hi,T=0,playing=true,speed=1,last=0,capI=-1,rows=[];
const typeName=k=>tr(k==='i'?'integer':k==='q'?'rational':'irrational');
const X=x=>OX+x*S,Y=y=>OY-y*S;
const $=id=>document.getElementById(id),cap=$('cap'),sl=$('sl'),fin=$('fin'),pl=$('pl'),pills=[...document.querySelectorAll('#st span')];
const stars=[...Array(70)].map((_,i)=>({x:i*173%W,y:i*389%H,r:.6+(i%3)*.5,ph:i}));
const ev=window.FloorFunctionMath.evaluateExpression;
function parse(str){
 let parts=str.replace(/،/g,',').split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean);
 if(parts.length===1&&!/[*\/^()]/.test(parts[0]))parts=parts[0].split(/\s+/);
 if(!parts.length)throw tr('errEmpty');
 if(parts.length>10)throw tr('errMany');
 return parts.map(t=>{const r=ev(t);
  if(!r||typeof r!=='object'||!isFinite(r.v))throw tr('errRead',t);
  if(Math.abs(r.v)>9)throw tr('errRange',t);
  const isInt=Number.isInteger(r.v),v=r.v;
  const label=mn(t.replace(/\s+/g,'').replace(/sqrt\(?(\d+(\.\d+)?)\)?/g,'√$1').replace(/sqrt/g,'√').replace(/pi/gi,'π'));
  return {v,t:isInt?'i':(/pi|sqrt|√|π/i.test(t)?'r':'q'),s:label}})}
function setup(items){
 P=items;const cnt={};
 P.forEach((p,i)=>{p.n=Math.floor(p.v);cnt[p.n]=(cnt[p.n]??-1)+1;p.lv=cnt[p.n];p.fr=p.t==='i'?0:p.v-p.n;p.ts=12+i*.6;p.dr=p.fr?.7+p.fr*1.2:0;p.tl=p.ts+p.dr+.55;p.tp=.3+i*.35});
 const mc=Math.max(...Object.values(cnt))+1;
 nmin=Math.min(0,...P.map(p=>p.n));nmax=Math.max(0,...P.map(p=>p.n));
 lo=nmin-2.1;hi=nmax+2.2;S=Math.min(W/(hi-lo+.4),H/(hi-lo+1.4));
 OX=W/2-S*(lo+hi)/2;OY=H/2+S*((lo-1.2)+hi)/2;
 R=Math.max(.15,9.5/S);HW=R*1.15;D=Math.min(2*HW+.05+2*R*(mc-1),Math.max(.75,2*HW+.1));
 tFin=Math.max(...P.map(p=>p.tl));TOT=tFin+3;sl.max=TOT;sl.setAttribute('aria-valuetext',`${fmt(0)} seconds of ${fmt(TOT)} seconds`);
 $('tb').innerHTML=P.map(p=>`<tr class="r"><td><b class="m">${p.s}</b></td><td><span class="dot" style="background:${COL[p.t]}"></span>${typeName(p.t)}</td><td>${fmt(parseFloat(p.v.toFixed(4)))}</td><td><b class="m">${mn(p.n)}</b></td><td class="m">${mn(p.n)} ≤ ${fmt(parseFloat(p.v.toFixed(3)))} &lt; ${mn(p.n+1)}</td></tr>`).join('');
 rows=[...$('tb').children];
 $('canvas-description').textContent=P.map(p=>`${p.s}: floor ${mn(p.n)}.`).join(' ');
 CAPS=[[0,tr('caps')[0]],[5,tr('caps')[1]],[9.5,tr('caps')[2]],[12,tr('caps')[3]],[tFin,tr('caps')[4]]];
 T=0;capI=-1;playing=true;pl.textContent=tr('pause')}
let CAPS=[];
function tp(s,x,y,col,sz,al,w){c.globalAlpha=al;c.font=`${w||700} ${sz}px ${FONT}`;c.fillStyle=col;c.textAlign='center';c.textBaseline='middle';c.fillText(s,x,y);c.globalAlpha=1}
function seg(a,b,d,e){c.beginPath();c.moveTo(X(a),Y(b));c.lineTo(X(d),Y(e));c.stroke()}
const hasPit=n=>Number.isInteger(n)&&n>=nmin&&n<=nmax;
function pos(p,t,k,nx,ny){const u=p.dr?cl((t-p.ts)/p.dr):0,s=p.v-p.fr*u*u,f=cl((t-p.ts-p.dr)/.55);let cx=s+R*nx,cy=k*s+R*ny;
 if(f>0){cx=lerp(cx,p.n,f);cy=lerp(cy,p.n-D+R+p.lv*2*R,f*f)}return{cx,cy,s,f,u}}
function draw(){
 const k=ease(cl((T-5)/4)),pa=cl((T-9.5)/1.5),ya=cl(T-4.5),L=Math.hypot(1,k),nx=-k/L,ny=1/L,now=performance.now()/1000;
 const bg=c.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#0f172a');bg.addColorStop(1,'#2a1b4e');c.fillStyle=bg;c.fillRect(0,0,W,H);
 stars.forEach(s=>{c.fillStyle=`rgba(255,255,255,${.2+.2*Math.sin(now*2+s.ph)})`;c.beginPath();c.arc(s.x,s.y,s.r,0,7);c.fill()});
 c.lineCap='round';c.lineJoin='round';
 c.strokeStyle='rgba(148,163,184,.4)';c.lineWidth=1.5;seg(lo,0,hi,0);c.globalAlpha=ya;seg(0,lo-1,0,hi);c.globalAlpha=1;
 tp('x',X(hi)-8,Y(0)-14,'#94a3b8',16,1);tp('y',X(0)+14,Y(hi)+6,'#94a3b8',16,ya);
 const pts=[nmin-.6];for(let n=nmin;n<=nmax+1;n++)pts.push(n);pts.push(nmax+1.4);
 c.shadowColor=GOLD;c.shadowBlur=14*k;c.strokeStyle=GOLD;c.lineWidth=4.5;
 for(let j=0;j<pts.length-1;j++){let a=pts[j],b=pts[j+1];const e=HW*pa;if(hasPit(a))a+=e;if(hasPit(b))b-=e;seg(a,k*a,b,k*b)}
 c.shadowBlur=0;c.lineWidth=2.5;
 for(let n=nmin;n<=nmax+1;n++){const X0=X(n),Y0=Y(k*n);c.globalAlpha=hasPit(n)?1-pa:1;c.beginPath();c.moveTo(X0-nx*7,Y0+ny*7);c.lineTo(X0+nx*7,Y0-ny*7);c.stroke();c.globalAlpha=1;tp(mn(n),X0,Y0+28,'#cbd5e1',17,1-k)}
 tp('y = x',X(nmax+1.2)+10,Y(nmax+1.2)-34,GOLD,22,k,800);
 if(pa>0)for(let n=nmin;n<=nmax;n++){
  c.globalAlpha=pa;c.beginPath();c.moveTo(X(n-HW),Y(n-HW));c.lineTo(X(n-HW),Y(n-D+HW));c.arc(X(n),Y(n-D+HW),HW*S,Math.PI,0,true);c.lineTo(X(n+HW),Y(n+HW));
  const pg=c.createLinearGradient(0,Y(n+HW),0,Y(n-D));pg.addColorStop(0,'rgba(99,102,241,.55)');pg.addColorStop(1,'rgba(2,6,23,.95)');c.fillStyle=pg;c.fill();c.shadowColor='#818cf8';c.shadowBlur=8;c.strokeStyle='#c7d2fe';c.lineWidth=2.5;c.stroke();c.shadowBlur=0;c.globalAlpha=1;
  tp(mn(n),X(n),Y(n-D)+22,'#cbd5e1',18,pa)}
 P.forEach(p=>{
  if(T<p.tp)return;
  const sc=ease(cl((T-p.tp)/.4)),q=pos(p,T,k,nx,ny),col=COL[p.t],r=R*S*sc;
  if(q.u>0&&q.u<1&&k===1)for(let j=4;j>=1;j--){const g=pos(p,T-j*.05,k,nx,ny);c.globalAlpha=.07*(5-j);c.fillStyle=col;c.beginPath();c.arc(X(g.cx),Y(g.cy),r*.9,0,7);c.fill();c.globalAlpha=1}
  const rp=(T-p.tl)/.8;
  if(rp>0&&rp<1){c.globalAlpha=1-rp;c.strokeStyle=col;c.lineWidth=3;c.beginPath();c.ellipse(X(p.n),Y(p.n-D)+2,rp*40,rp*14,0,0,7);c.stroke();
   c.fillStyle=col;for(let j=0;j<10;j++){const a=j/10*6.283,d=ease(rp)*52;c.beginPath();c.arc(X(p.n)+Math.cos(a)*d,Y(p.n-D)-8-Math.abs(Math.sin(a))*d*.9+rp*rp*30,3,0,7);c.fill()}c.globalAlpha=1}
  if(T<p.tl)tp(p.s,X(q.cx)-4,Y(q.cy)-32,col,24,1-q.f,800);
  c.save();c.translate(X(q.cx),Y(q.cy));c.rotate(-((p.v-q.s)*Math.SQRT2)/R);
  c.beginPath();c.arc(0,0,r,0,7);c.fillStyle=col;c.fill();
  const gr=c.createRadialGradient(-r*.35,-r*.35,r*.1,0,0,r);gr.addColorStop(0,'rgba(255,255,255,.75)');gr.addColorStop(.5,'rgba(255,255,255,0)');gr.addColorStop(1,'rgba(0,0,0,.35)');c.fillStyle=gr;c.fill();
  c.strokeStyle='rgba(0,0,0,.3)';c.lineWidth=1.5;c.beginPath();c.arc(0,0,r*.62,0,7);c.stroke();c.beginPath();c.arc(0,0,r*.3,0,7);c.stroke();
  c.beginPath();c.moveTo(-r,0);c.lineTo(r,0);c.lineWidth=2;c.strokeStyle='rgba(0,0,0,.45)';c.stroke();c.restore();
  if(T>=p.tl){
   const a=ease(cl((T-p.tl)/.35)),str=`⌊${p.s}⌋ = ${mn(p.n)}`,row=Math.floor(p.lv/2),up=p.lv%2===0;
   c.font=`800 18px ${FONT}`;const w=c.measureText(str).width+22;
   const tx=X(p.n)+(up?-(w/2+14):(w/2+18)),ty=Y(p.n)+(up?-34-row*34:34+row*34)+(1-a)*12;
   c.globalAlpha=a;c.fillStyle=col;c.beginPath();c.roundRect(tx-w/2,ty-15,w,30,15);c.fill();
   c.fillStyle='#0f172a';c.textAlign='center';c.textBaseline='middle';c.fillText(str,tx,ty+1);c.globalAlpha=1}
 });
 let ci=0;CAPS.forEach((a,i)=>{if(T>=a[0])ci=i});
 if(ci!==capI){capI=ci;cap.textContent=CAPS[ci][1];pills.forEach((el,i)=>el.classList.toggle('on',i===ci))}
 rows.forEach((r,i)=>r.classList.toggle('on',T>=P[i].tl));
 fin.classList.toggle('on',T>=tFin);sl.value=T;sl.setAttribute('aria-valuetext',`${fmt(T)} seconds of ${fmt(TOT)} seconds`)}
let AC=null,master,muted=false,tapped=false,fresh=false;
function audio(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)();master=AC.createGain();master.gain.value=.5;master.connect(AC.destination)}catch(e){}}if(AC&&AC.state==='suspended')AC.resume();return AC}
function tone(f,t0,dur,type,vol,f2){const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t0);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t0+dur);g.gain.setValueAtTime(.0001,t0);g.gain.exponentialRampToValueAtTime(vol,t0+.01);g.gain.exponentialRampToValueAtTime(.0001,t0+dur);o.connect(g);g.connect(master);o.start(t0);o.stop(t0+dur+.05)}
function noise(t0,dur,f1,f2,vol){const n=Math.floor(AC.sampleRate*dur),b=AC.createBuffer(1,n,AC.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;const s=AC.createBufferSource();s.buffer=b;const fl=AC.createBiquadFilter();fl.type='bandpass';fl.frequency.setValueAtTime(f1,t0);fl.frequency.exponentialRampToValueAtTime(f2,t0+dur);const g=AC.createGain();g.gain.setValueAtTime(.0001,t0);g.gain.exponentialRampToValueAtTime(vol,t0+dur*.3);g.gain.exponentialRampToValueAtTime(.0001,t0+dur);s.connect(fl);fl.connect(g);g.connect(master);s.start(t0)}
const note=n=>{const i=n+12,sc=[0,2,4,7,9];return 220*Math.pow(2,(sc[i%5]+12*Math.floor(i/5))/12)};
function sfx(a,b){if(muted||!AC||AC.state!=='running'||b<=a||b-a>.5)return;const t=AC.currentTime,x=v=>a<v&&b>=v;
 P.forEach((p,i)=>{
  if(x(p.tp))tone(520*Math.pow(2,[0,2,4,7,9,12,14,16,19,21][i]/12),t,.18,'sine',.25);
  if(p.dr&&x(p.ts))noise(t,p.dr/speed+.2,300,900,.35);
  if(x(p.tl)){const f=note(p.n);tone(f*2,t,.9,'sine',.3);tone(f*4,t,.5,'triangle',.08);tone(160,t,.15,'sine',.4,60)}
 });
 if(x(5))noise(t,.9/speed,200,2500,.4);
 for(let n=nmin;n<=nmax;n++)if(x(9.5+(n-nmin)*.12))tone(130,t,.14,'sine',.35,55);
 if(x(tFin))[0,4,7,12].forEach((s,j)=>tone(523.25*Math.pow(2,s/12),t+j*.12,.7,'triangle',.22))}
function drawIdle(){const now=performance.now()/1000,bg=c.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#0f172a');bg.addColorStop(1,'#2a1b4e');c.fillStyle=bg;c.fillRect(0,0,W,H);stars.forEach(s=>{c.fillStyle=`rgba(255,255,255,${.2+.2*Math.sin(now*2+s.ph)})`;c.beginPath();c.arc(s.x,s.y,s.r,0,7);c.fill()});tp(tr('idle1'),W/2,H/2-20,'#e2e8f0',lang==='fa'?34:40,1,800);tp(tr('idle2'),W/2,H/2+32,'#a5b4fc',lang==='fa'?19:22,1,700);cap.textContent=tr('waiting')}
function frame(t){
 if(playing){const t0=T;T=Math.min(TOT,T+(t-last)/1000*speed);sfx(t0,T);if(T>=TOT){playing=false;pl.textContent=tr('play')}}
 last=t;idle?drawIdle():draw();requestAnimationFrame(frame)}
function run(str){const e=$('err');$('share-status').textContent='';try{setup(parse(str));idle=false;e.textContent=''}catch(x){e.textContent=String(x)}}
$('f').onsubmit=ev=>{ev.preventDefault();run($('in').value)};
document.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{$('in').value=b.dataset.v;run(b.dataset.v)});
function resultRows(){return P.map(p=>({expression:p.s,type:p.t==='i'?'Integer':p.t==='q'?'Rational':'Irrational',value:p.v,floor:p.n,interval:`${p.n} ≤ ${p.v} < ${p.n+1}`}))}
function csvCell(value){return `"${String(value).replace(/"/g,'""')}"`}
$('share-results').addEventListener('click',async()=>{
 const status=$('share-status');
 let shareUrl;
 try{parse($('in').value);shareUrl=new URL(location.href);shareUrl.searchParams.set('values',$('in').value.trim());shareUrl.hash='out'}
 catch(error){status.textContent=String(error);return}
 try{
  if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(shareUrl.href);
  else{
   const field=document.createElement('textarea');field.value=shareUrl.href;field.setAttribute('readonly','');field.setAttribute('aria-hidden','true');field.tabIndex=-1;field.className='copy-fallback';document.body.append(field);field.select();
   const copied=document.execCommand('copy');field.remove();if(!copied)throw new Error('Clipboard access is unavailable. Copy this page URL and add your values with ?values=…');
  }
  status.textContent=lang==='fa'?'پیوند اشتراک‌گذاری کپی شد.':'Shareable link copied to clipboard.';
 }catch(error){status.textContent=error instanceof Error?error.message:String(error)}
});
$('export-results').addEventListener('click',()=>{
 if(!P.length){$('share-status').textContent=lang==='fa'?'ابتدا عددها را وارد کنید.':'Enter values before exporting results.';return}
 const headers=['Expression','Type','Value','Floor','Interval'];
 const rows=resultRows().map(row=>[row.expression,row.type,row.value,row.floor,row.interval]);
 const csv=[headers,...rows].map(row=>row.map(csvCell).join(',')).join('\r\n');
 const url=URL.createObjectURL(new Blob(['\uFEFF',csv],{type:'text/csv;charset=utf-8'}));
 const link=document.createElement('a');link.href=url;link.download='floor-function-results.csv';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),0);
 $('share-status').textContent=lang==='fa'?'فایل CSV آماده شد.':'CSV results downloaded.';
});
pl.onclick=()=>{if(idle)return;if(T>=TOT)T=0;playing=!playing;pl.textContent=playing?tr('pause'):tr('play')};
$('rs').onclick=()=>{if(idle)return;T=0;playing=true;pl.textContent=tr('pause')};
$('sp').onchange=e=>speed=+e.target.value;
const snd=$('snd'),updSnd=()=>snd.textContent=!tapped?tr('soundEnable'):muted?tr('soundOff'):tr('soundOn');
document.addEventListener('pointerdown',()=>{fresh=!tapped;tapped=true;audio();setTimeout(updSnd,60)},true);
snd.onclick=()=>{if(fresh){fresh=false;updSnd();return}muted=!muted;updSnd()};
sl.oninput=()=>{T=+sl.value;playing=false;pl.textContent=tr('play')};
$('pr').onclick=()=>{const keep=T;T=TOT;draw();try{$('pimg').src=cv.toDataURL('image/png')}catch(e){$('share-status').textContent=lang==='fa'?'تصویر نمودار برای چاپ در دسترس نیست.':'The graph image could not be prepared for printing.'}window.print();T=keep};
if(matchMedia('(prefers-reduced-motion:reduce)').matches)playing=false;
let idle=true;playing=false;pl.textContent=tr('play');
if(matchMedia('(prefers-reduced-motion:reduce)').matches){playing=false;pl.textContent=tr('play')}

// Feature suite: live graph, comparisons, practice, solver and presentation mode.
const extraText={en:{below:(x,n)=>`${fmt(x)} is between ${n} and ${n+1}, so its floor is ${n}.`,exact:x=>`${fmt(x)} is already an integer, so its floor is itself.`,quizQ:'Question',of:'of',correct:'Correct — nice work!',wrong:n=>`Not quite. The floor is ${n}.`,complete:s=>`Round complete: ${s} out of 5 correct.`,answer:'Your answer',eval:'Evaluated value',interval:'Interval',solverErr:'Enter a valid expression between −9 and 9.',compare:(x,f,v)=>`At x = ${fmt(x)}: floor = ${Math.floor(x)}, ${f} = ${v}.`},fa:{below:(x,n)=>`عدد ${fmt(x)} بین ${fmt(n)} و ${fmt(n+1)} است؛ پس جزء صحیح آن ${fmt(n)} است.`,exact:x=>`عدد ${fmt(x)} خودش صحیح است؛ پس جزء صحیح آن برابر خودش است.`,quizQ:'پرسش',of:'از',correct:'درست است؛ آفرین!',wrong:n=>`نه کاملاً؛ جزء صحیح برابر ${fmt(n)} است.`,complete:s=>`پایان دور: ${fmt(s)} پاسخ درست از ۵ پرسش.`,answer:'پاسخ شما',eval:'مقدار محاسبه‌شده',interval:'بازه',solverErr:'یک عبارت معتبر با مقدار بین ۹- و ۹ وارد کنید.',compare:(x,f,v)=>`برای x = ${fmt(x)}: جزء صحیح = ${fmt(Math.floor(x))}، ${f} = ${fmt(v)}.`}};
function fmt(n){return new Intl.NumberFormat(lang==='fa'?'fa-IR':'en-US',{maximumFractionDigits:4,useGrouping:false}).format(n).replace(/-/g,'−')}
const lx=$('live-x'), liveChart=$('live-chart'), compareChart=$('compare-chart');
$('compare-chart').setAttribute('role','img');
$('compare-chart').setAttribute('aria-label','Graph comparing the floor function with the selected function');
$('compare-chart').setAttribute('aria-describedby','compare-readout');
$('quiz-feedback').setAttribute('role','status');
function graphBase(canvas){const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);const bg=ctx.createLinearGradient(0,0,w,h);bg.addColorStop(0,'#111323');bg.addColorStop(1,'#211a3c');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);const x0=58,y0=h-44,plotW=w-88,plotH=h-82;return {ctx,w,h,x0,y0,plotW,plotH,px:x=>x0+(x+5)/10*plotW,py:y=>y0-(y+5)/10*plotH};}
function drawLive(){if(!liveChart)return;const x=+lx.value,n=Math.floor(x),g=graphBase(liveChart),{ctx,w,h,x0,y0,plotW,plotH,px,py}=g;ctx.lineWidth=1;ctx.strokeStyle='rgba(255,255,255,.12)';ctx.fillStyle='#9ca3bd';ctx.font='14px system-ui';ctx.textAlign='center';ctx.textBaseline='top';for(let i=-5;i<=5;i++){ctx.beginPath();ctx.moveTo(px(i),py(-5));ctx.lineTo(px(i),py(5));ctx.stroke();ctx.beginPath();ctx.moveTo(px(-5),py(i));ctx.lineTo(px(5),py(i));ctx.stroke();ctx.fillText(fmt(i),px(i),y0+10)}ctx.strokeStyle='rgba(255,255,255,.45)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(px(-5),py(0));ctx.lineTo(px(5),py(0));ctx.moveTo(px(0),py(-5));ctx.lineTo(px(0),py(5));ctx.stroke();ctx.strokeStyle='#a69aff';ctx.lineWidth=4;ctx.lineCap='round';for(let k=-5;k<=5;k++){const a=Math.max(-5,k),b=Math.min(5,k+1);ctx.beginPath();ctx.moveTo(px(a),py(k));ctx.lineTo(px(b),py(k));ctx.stroke();if(k>-5){ctx.fillStyle='#a69aff';ctx.beginPath();ctx.arc(px(k),py(k),4.5,0,Math.PI*2);ctx.fill();}ctx.fillStyle='#111323';ctx.beginPath();ctx.arc(px(k+1),py(k),4.5,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#a69aff';ctx.lineWidth=2;ctx.stroke();ctx.strokeStyle='#a69aff';ctx.lineWidth=4;}ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.beginPath();ctx.moveTo(px(x),py(0));ctx.lineTo(px(x),py(n));ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(px(x),py(n),8,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();ctx.fillStyle='#fff';ctx.font='700 17px system-ui';ctx.textAlign='left';ctx.fillText(`x = ${fmt(x)}`,Math.min(px(x)+12,w-140),Math.max(18,py(n)-25));const exact=Number.isInteger(x);$('live-x-label').textContent=fmt(x);$('live-floor').textContent=`⌊${fmt(x)}⌋ = ${fmt(n)}`;$('live-interval').textContent=`${fmt(n)} ≤ ${fmt(x)} < ${fmt(n+1)}`;$('boundary-note').textContent=exact?extraText[lang].exact(x):extraText[lang].below(x,n);drawCompare();}
function compareValue(x,kind){if(kind==='ceil')return Math.ceil(x);if(kind==='round')return Math.round(x);if(kind==='identity')return x;return Math.abs(x)}
function drawCompare(){if(!compareChart)return;const kind=$('compare-function').value,x=+lx.value,g=graphBase(compareChart),{ctx,w,h,px,py}=g;ctx.lineWidth=1;ctx.strokeStyle='rgba(255,255,255,.12)';ctx.fillStyle='#9ca3bd';ctx.font='13px system-ui';ctx.textAlign='center';for(let i=-5;i<=5;i++){ctx.beginPath();ctx.moveTo(px(i),py(-5));ctx.lineTo(px(i),py(5));ctx.moveTo(px(-5),py(i));ctx.lineTo(px(5),py(i));ctx.stroke();ctx.fillText(fmt(i),px(i),h-32)}ctx.strokeStyle='rgba(255,255,255,.35)';ctx.beginPath();ctx.moveTo(px(-5),py(0));ctx.lineTo(px(5),py(0));ctx.moveTo(px(0),py(-5));ctx.lineTo(px(0),py(5));ctx.stroke();ctx.strokeStyle='#a69aff';ctx.lineWidth=3.5;for(let k=-5;k<5;k++){ctx.beginPath();ctx.moveTo(px(k),py(k));ctx.lineTo(px(k+1),py(k));ctx.stroke();ctx.fillStyle='#211a3c';ctx.beginPath();ctx.arc(px(k+1),py(k),4,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#a69aff';ctx.lineWidth=2;ctx.stroke();ctx.strokeStyle='#a69aff';ctx.lineWidth=3.5;}if(kind==='identity'||kind==='abs'||kind==='round'){ctx.strokeStyle='#60a5fa';ctx.lineWidth=3;ctx.beginPath();let first=true;for(let xx=-5;xx<=5;xx+=.015){const yy=compareValue(xx,kind);if(first){ctx.moveTo(px(xx),py(yy));first=false}else ctx.lineTo(px(xx),py(yy))}ctx.stroke()}else{ctx.strokeStyle='#60a5fa';ctx.lineWidth=3;for(let k=-5;k<=4;k++){const yy=k+1;ctx.beginPath();ctx.moveTo(px(k),py(yy));ctx.lineTo(px(k+1),py(yy));ctx.stroke();ctx.fillStyle='#211a3c';ctx.beginPath();ctx.arc(px(k+1),py(yy),4,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#60a5fa';ctx.lineWidth=2;ctx.stroke();ctx.strokeStyle='#60a5fa';ctx.lineWidth=3;}}const val=compareValue(x,kind),names={ceil:'⌈x⌉',round:'round(x)',identity:'x',abs:'|x|'};$('compare-legend-label').textContent=names[kind];$('compare-readout').textContent=extraText[lang].compare(x,names[kind],val);ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(px(x),py(val),7,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();}
lx.addEventListener('input',drawLive);$('compare-function').addEventListener('change',drawCompare);
const featureTabs=[...document.querySelectorAll('.feature-tab')];
function activateTab(btn,moveFocus=false){
 featureTabs.forEach(tab=>{const active=tab===btn;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1});
 document.querySelectorAll('.feature-panel').forEach(panel=>{const active=panel.id===btn.getAttribute('aria-controls');panel.hidden=!active;panel.classList.toggle('active',active)});
 if(moveFocus)btn.focus();
 if(btn.dataset.panel==='playground')drawLive();
 if(btn.dataset.panel==='compare')drawCompare();
}
featureTabs.forEach((btn,index)=>{
 btn.addEventListener('click',()=>activateTab(btn));
 btn.addEventListener('keydown',event=>{
  let next=index;
  const forward=document.documentElement.dir==='rtl'?-1:1;
  if(event.key==='ArrowRight')next=(index+forward+featureTabs.length)%featureTabs.length;
  else if(event.key==='ArrowLeft')next=(index-forward+featureTabs.length)%featureTabs.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=featureTabs.length-1;
  else return;
  event.preventDefault();activateTab(featureTabs[next],true);
 });
});
let quizIndex=0,quizScore=0,quizQuestions=[],quizAnswered=false,quizDifficulty=1;
function nextQuizQuestion(){
 const choices=[
  ['-4.7','-3.1','-2.5','-1.2','-0.5','0','0.2','0.8','1','1.4','2.9','3.6','4.2'],
  ['-2.001','-1.999','-0.001','0.001','1.999','2.001','-5/2','7/3','3.99'],
  ['-sqrt(5)','-pi/2','pi-3','-7/2','sqrt(2)','5/2','-2^2','2^2']
 ][quizDifficulty-1];
 const expression=choices[Math.floor(Math.random()*choices.length)],value=ev(expression).v;
 quizQuestions[quizIndex]={expression,v:value,answer:Math.floor(value)};
}
function makeQuiz(){quizIndex=0;quizScore=0;quizDifficulty=1;quizQuestions=[];quizAnswered=false;nextQuizQuestion();renderQuiz()}
function renderQuiz(){const done=quizIndex>=5;$('quiz-progress-text').textContent=done?(lang==='fa'?'پایان چالش':'Challenge complete'):`${extraText[lang].quizQ} ${fmt(quizIndex+1)} ${extraText[lang].of} ${fmt(5)}`;$('quiz-progress-bar').style.width=`${Math.min(quizIndex,5)/5*100}%`;$('quiz-score').textContent=`${fmt(quizScore)} / ${fmt(5)}`;$('quiz-card').querySelector('form').hidden=done;$('quiz-expression').textContent=done?(lang==='fa'?'آفرین!':'Well played!'):`⌊${quizQuestions[quizIndex].expression.replace(/-/g,'−')}⌋ = ?`;$('quiz-answer').value='';$('quiz-answer').disabled=done;$('quiz-feedback').textContent=done?extraText[lang].complete(quizScore):'';$('quiz-feedback').className='quiz-feedback';$('quiz-next').hidden=true;$('quiz-restart').hidden=!done;$('quiz-next').textContent=lang==='fa'?'پرسش بعدی ←':'Next question →';}
$('quiz-form').addEventListener('submit',e=>{e.preventDefault();if(quizAnswered||quizIndex>=5)return;const ans=ev($('quiz-answer').value);if(!ans||typeof ans!=='object'||!Number.isFinite(ans.v)){ $('quiz-feedback').textContent=lang==='fa'?'یک عدد معتبر وارد کنید.':'Enter a valid number.';$('quiz-feedback').className='quiz-feedback bad';return}quizAnswered=true;const correct=Number.isInteger(ans.v)&&ans.v===quizQuestions[quizIndex].answer;if(correct){quizScore++;quizDifficulty=Math.min(3,quizDifficulty+1)}else quizDifficulty=Math.max(1,quizDifficulty-1);$('quiz-feedback').textContent=correct?extraText[lang].correct:extraText[lang].wrong(quizQuestions[quizIndex].answer);$('quiz-feedback').className='quiz-feedback '+(correct?'good':'bad');$('quiz-score').textContent=`${fmt(quizScore)} / ${fmt(5)}`;$('quiz-next').hidden=false;$('quiz-progress-bar').style.width=`${(quizIndex+1)/5*100}%`;});$('quiz-next').addEventListener('click',()=>{quizIndex++;quizAnswered=false;if(quizIndex<5)nextQuizQuestion();renderQuiz()});$('quiz-restart').addEventListener('click',makeQuiz);
function solveExpression(){const str=$('solver-input').value.trim(),r=ev(str);$('solver-error').textContent='';if(!r||typeof r!=='object'||!Number.isFinite(r.v)||Math.abs(r.v)>9){$('solver-error').textContent=extraText[lang].solverErr;return}const value=r.v,n=Math.floor(value),clean=str.replace(/-/g,'−');$('solution-original').textContent=clean;$('solution-evaluated').textContent=fmt(value);$('solution-eval-note').textContent=lang==='fa'?`مقدار عبارت برابر ${fmt(value)} است.`:`The expression evaluates to ${fmt(value)}.`;$('solution-answer').textContent=`⌊${fmt(value)}⌋ = ${fmt(n)}`;$('solution-explanation').textContent=`${fmt(n)} ≤ ${fmt(value)} < ${fmt(n+1)}${lang==='fa'?'؛ پس جزء صحیح برابر است با '+fmt(n)+'.':', so the floor is '+fmt(n)+'.'}`;}
$('solver-form').addEventListener('submit',e=>{e.preventDefault();solveExpression()});
let slide=0,presentationOpener=null;const slideNotes={en:['Remember: floor is not the same as rounding.','For a negative non-integer, floor moves to the more negative integer.','At an exact integer, the floor stays exactly there.'],fa:['به یاد داشته باشید: جزء صحیح با گرد کردن یکسان نیست.','برای عدد منفیِ غیرصحیح، جزء صحیح عدد صحیحِ کوچک‌تر است.','اگر عدد خودش صحیح باشد، جزء صحیح همان عدد است.']};function updatePresentation(){const x=+$('presentation-x').value,n=Math.floor(x);$('presentation-result').textContent=`⌊${fmt(x)}⌋ = ${fmt(n)}`;$('presentation-interval').textContent=`${fmt(n)} ≤ ${fmt(x)} < ${fmt(n+1)}`;$('presentation-slide-note').textContent=slideNotes[lang][slide%3];$('presentation-title').textContent=lang==='fa'?['تابع جزء صحیح','عددهای منفی','مرزهای صحیح'][slide%3]:['The floor function','Negative numbers','Integer boundaries'][slide%3];$('presentation-explain').textContent=lang==='fa'?['جزء صحیح هر عدد حقیقی، بزرگ‌ترین عدد صحیح کوچک‌تر یا مساوی آن عدد است.','برای عددهای منفی، جزء صحیح به سمت منفی‌تر می‌رود؛ مثلاً ⌊−۳٫۵⌋ = −۴.','اگر x عدد صحیح باشد، ⌊x⌋ = x.'][slide%3]:['The floor of a real number is the greatest integer less than or equal to that number.','For negative non-integers, floor moves downward: ⌊−3.5⌋ = −4.','If x is an integer, then ⌊x⌋ = x.'][slide%3];}
function openPresentation(){const dialog=$('presentation-overlay');presentationOpener=$('present-launch');dialog.hidden=false;slide=0;updatePresentation();$('presentation-status').textContent='';$('presentation-close').focus();if(document.fullscreenEnabled&&dialog.requestFullscreen)dialog.requestFullscreen().catch(error=>{$('presentation-status').textContent=lang==='fa'?'حالت تمام‌صفحه در دسترس نیست.':`Fullscreen could not be opened: ${error.message}`})}
function closePresentation(){const dialog=$('presentation-overlay');dialog.hidden=true;if(document.fullscreenElement)document.exitFullscreen().catch(error=>{$('share-status').textContent=lang==='fa'?'خروج از حالت تمام‌صفحه انجام نشد.':`Could not exit fullscreen: ${error.message}`});if(presentationOpener?.isConnected)presentationOpener.focus();presentationOpener=null}
$('present-launch').addEventListener('click',openPresentation);$('presentation-close').addEventListener('click',closePresentation);$('presentation-x').addEventListener('input',updatePresentation);$('presentation-next').addEventListener('click',()=>{slide=(slide+1)%3;updatePresentation()});$('presentation-prev').addEventListener('click',()=>{slide=(slide+2)%3;updatePresentation()});
document.addEventListener('keydown',event=>{
 const dialog=$('presentation-overlay');if(dialog.hidden)return;
 if(event.key==='Escape'){closePresentation();return}
 if(event.key==='Tab'){
  const focusable=[...dialog.querySelectorAll('button:not([disabled]),input:not([disabled]),[href],[tabindex]:not([tabindex="-1"])')].filter(el=>!el.hidden);
  const first=focusable[0],last=focusable[focusable.length-1];
  if(event.shiftKey&&document.activeElement===first){last.focus();event.preventDefault()}
  else if(!event.shiftKey&&document.activeElement===last){first.focus();event.preventDefault()}
  return;
 }
 if((event.key==='ArrowRight'||event.key==='ArrowLeft')&&event.target!==$('presentation-x')){
  const delta=event.key==='ArrowRight'?1:-1;$('presentation-x').value=cl(+$('presentation-x').value+delta*.1,-9,9);updatePresentation();event.preventDefault();
 }
});
const studioDescriptions={
 en:{floor:'The greatest integer less than or equal to x.',ceil:'The smallest integer greater than or equal to x.',abs:'Distance from zero; never negative.',identity:'The output is exactly the input.',round:'The nearest integer (half values round toward positive infinity in this JavaScript model).',fraction:'The fractional part x − ⌊x⌋ is always in [0, 1).',sign:'Returns −1 for negatives, 0 at zero, and 1 for positives.'},
 fa:{floor:'بزرگ‌ترین عدد صحیح کوچک‌تر یا مساوی x.',ceil:'کوچک‌ترین عدد صحیح بزرگ‌تر یا مساوی x.',abs:'فاصله از صفر؛ همیشه نامنفی است.',identity:'خروجی دقیقاً برابر ورودی است.',round:'نزدیک‌ترین عدد صحیح؛ در نیمه‌ها به سمت مثبت گرد می‌شود.',fraction:'جزء کسری x − ⌊x⌋ همیشه در بازهٔ [۰، ۱) است.',sign:'برای منفی‌ها ۱−، در صفر ۰ و برای مثبت‌ها ۱ برمی‌گرداند.'}
};
function studioValue(x,k){switch(k){case'floor':return Math.floor(x);case'ceil':return Math.ceil(x);case'abs':return Math.abs(x);case'identity':return x;case'round':return Math.floor(x+0.5);case'fraction':return x-Math.floor(x);case'sign':return Math.sign(x);default:return Math.floor(x)}}
function studioName(k){return ({floor:'⌊x⌋',ceil:'⌈x⌉',abs:'|x|',identity:'x',round:'round(x)',fraction:'x − ⌊x⌋',sign:'sign(x)'})[k]||'⌊x⌋'}
function drawStudio(){const canvas=$('studio-chart');if(!canvas)return;const k=$('studio-function').value,x=+$('studio-x').value,y=studioValue(x,k),g=graphBase(canvas),{ctx,w,h,px,py}=g;
 ctx.lineWidth=1;ctx.strokeStyle='rgba(255,255,255,.12)';ctx.fillStyle='#a8acc4';ctx.font='13px system-ui';ctx.textAlign='center';for(let i=-5;i<=5;i++){ctx.beginPath();ctx.moveTo(px(i),py(-5));ctx.lineTo(px(i),py(5));ctx.moveTo(px(-5),py(i));ctx.lineTo(px(5),py(i));ctx.stroke();ctx.fillText(fmt(i),px(i),h-31)}ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(px(-5),py(0));ctx.lineTo(px(5),py(0));ctx.moveTo(px(0),py(-5));ctx.lineTo(px(0),py(5));ctx.stroke();ctx.strokeStyle='#a69aff';ctx.lineWidth=3.5;ctx.lineCap='round';
 if(k==='floor'||k==='ceil'||k==='fraction'||k==='round'){
  for(let a=-5;a<5;a+=1){let yy=k==='floor'?a:k==='ceil'?a+1:k==='fraction'?0:a; if(k==='fraction'){ctx.strokeStyle='#a69aff';ctx.beginPath();ctx.moveTo(px(a),py(0));ctx.lineTo(px(a+1),py(1));ctx.stroke();ctx.fillStyle='#a69aff';ctx.beginPath();ctx.arc(px(a),py(0),4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#111323';ctx.beginPath();ctx.arc(px(a+1),py(1),4,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#a69aff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(px(a+1),py(1),4,0,Math.PI*2);ctx.stroke();ctx.lineWidth=3.5;continue}ctx.beginPath();ctx.moveTo(px(a),py(yy));ctx.lineTo(px(a+1),py(yy));ctx.stroke();ctx.fillStyle='#211a3c';ctx.beginPath();ctx.arc(px(a+1),py(yy),4.2,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#a69aff';ctx.lineWidth=2;ctx.stroke();ctx.strokeStyle='#a69aff';ctx.lineWidth=3.5;
   if(k==='ceil'){ctx.fillStyle='#a69aff';ctx.beginPath();ctx.arc(px(a),py(yy),4.2,0,Math.PI*2);ctx.fill();}
  }
 }else{ctx.strokeStyle='#a69aff';ctx.lineWidth=3.5;ctx.beginPath();let first=true;for(let xx=-5;xx<=5.001;xx+=.01){const yy=studioValue(xx,k);if(yy < -5.2||yy>5.2){first=true;continue}if(first){ctx.moveTo(px(xx),py(yy));first=false}else ctx.lineTo(px(xx),py(yy))}ctx.stroke();}
 ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(px(x),py(Math.max(-5,Math.min(5,y))),8,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();$('studio-x-label').textContent=fmt(x);$('studio-output').textContent=`${studioName(k)} = ${fmt(y)}`;$('studio-description').textContent=studioDescriptions[lang][k];let insight='';if(k==='floor')insight=`${fmt(Math.floor(x))} ≤ ${fmt(x)} < ${fmt(Math.floor(x)+1)}${lang==='fa'?'؛ پس جزء صحیح برابر است با ':', so the floor is '}${fmt(y)}.`;else if(k==='fraction')insight=lang==='fa'?`جزء کسری برابر ${fmt(x)} − ${fmt(Math.floor(x))} = ${fmt(y)} است.`:`Fractional part = ${fmt(x)} − ${fmt(Math.floor(x))} = ${fmt(y)}.`;else insight=lang==='fa'?`برای x = ${fmt(x)}، خروجی ${studioName(k)} برابر ${fmt(y)} است.`:`At x = ${fmt(x)}, ${studioName(k)} gives ${fmt(y)}.`;$('studio-insight').textContent=insight;}
$('studio-function').addEventListener('change',drawStudio);$('studio-x').addEventListener('input',drawStudio);
function syncExtraLanguage(){drawLive();drawCompare();drawStudio();if(quizQuestions.length)renderQuiz();$('quiz-answer').placeholder=lang==='fa'?'پاسخ شما':'Your answer';$('quiz-answer').setAttribute('aria-label',lang==='fa'?'پاسخ شما':'Your answer');solveExpression();updatePresentation();}
makeQuiz();solveExpression();updatePresentation();drawLive();drawStudio();
const sharedValues=new URL(location.href).searchParams.get('values');
if(sharedValues!==null){$('in').value=sharedValues;run(sharedValues)}

requestAnimationFrame(t=>{last=t;frame(t)});
