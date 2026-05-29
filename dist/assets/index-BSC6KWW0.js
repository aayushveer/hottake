const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.esm-DbSiJUtA.js","./index.esm-DxzhmYuY.js","./index.esm-I4xfEU6i.js","./index.esm-CR_yt0YQ.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=`modulepreload`,u=function(e,t){return new URL(e,t).href},d={},f=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=u(t,n),t in d)return;d[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:l,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},p={apiKey:`YOUR_API_KEY`,authDomain:`YOUR_PROJECT.firebaseapp.com`,projectId:`YOUR_PROJECT_ID`,storageBucket:`YOUR_PROJECT.appspot.com`,messagingSenderId:`YOUR_SENDER_ID`,appId:`YOUR_APP_ID`},m=[{id:1,text:`Rohit Sharma > Virat Kohli as captain`,optionA:`Rohit`,optionB:`Virat`,category:`Cricket`,votesA:0,votesB:0},{id:2,text:`T20 format is killing cricket as a sport`,optionA:`T20 GOAT`,optionB:`T20 is trash`,category:`Cricket`,votesA:0,votesB:0},{id:3,text:`MS Dhoni > Virat Kohli in ODIs`,optionA:`Dhoni`,optionB:`Virat`,category:`Cricket`,votesA:0,votesB:0},{id:4,text:`Gangs of Wasseypur is the greatest Indian film ever made`,optionA:`GoW = GOAT`,optionB:`Overrated`,category:`Bollywood`,votesA:0,votesB:0},{id:5,text:`SRK is the greatest Bollywood actor of all time`,optionA:`SRK = GOAT`,optionB:`Overrated`,category:`Bollywood`,votesA:0,votesB:0},{id:6,text:`Animal was the best film of 2023`,optionA:`Animal was fire`,optionB:`Garbage film`,category:`Bollywood`,votesA:0,votesB:0},{id:7,text:`IIT tag matters more than actual skills in tech careers`,optionA:`IIT matters`,optionB:`Skills > College`,category:`Career`,votesA:0,votesB:0},{id:8,text:`Remote work is better than office work`,optionA:`Remote all the way`,optionB:`Office is better`,category:`Career`,votesA:0,votesB:0},{id:9,text:`Starting a startup is smarter than a high-paying corporate job`,optionA:`Startup life`,optionB:`Corporate stability`,category:`Career`,votesA:0,votesB:0},{id:10,text:`iPhone is objectively better than Android`,optionA:`iPhone`,optionB:`Android`,category:`Tech`,votesA:0,votesB:0},{id:11,text:`Elon Musk is a better CEO than Tim Cook`,optionA:`Musk`,optionB:`Cook`,category:`Tech`,votesA:0,votesB:0},{id:12,text:`Google is a better research tool than ChatGPT`,optionA:`Google`,optionB:`ChatGPT`,category:`Tech`,votesA:0,votesB:0},{id:13,text:`Arranged marriages have a higher success rate than love marriages`,optionA:`Arranged FTW`,optionB:`Love marriage`,category:`Culture`,votesA:0,votesB:0},{id:14,text:`Delhi is a better city than Mumbai`,optionA:`Delhi`,optionB:`Mumbai`,category:`Culture`,votesA:0,votesB:0},{id:15,text:`North Indian food > South Indian food`,optionA:`North food`,optionB:`South food`,category:`Culture`,votesA:0,votesB:0},{id:16,text:`India would beat Pakistan in any sport on any given day`,optionA:`India wins always`,optionB:`Pak can beat us`,category:`Sports`,votesA:0,votesB:0},{id:17,text:`Chess is a more impressive sport than cricket`,optionA:`Chess`,optionB:`Cricket`,category:`Sports`,votesA:0,votesB:0},{id:18,text:`South Indian cinema is better than Bollywood`,optionA:`South cinema`,optionB:`Bollywood`,category:`Bollywood`,votesA:0,votesB:0},{id:19,text:`Instagram is a waste of time`,optionA:`It's toxic`,optionB:`It's useful`,category:`Tech`,votesA:0,votesB:0},{id:20,text:`WhatsApp is better than Instagram for staying connected`,optionA:`WhatsApp`,optionB:`Instagram`,category:`Tech`,votesA:0,votesB:0},{id:21,text:`Morning people are more productive than night owls`,optionA:`Morning person`,optionB:`Night owl`,category:`Culture`,votesA:0,votesB:0},{id:22,text:`Studying abroad is always better than studying in India`,optionA:`Abroad`,optionB:`India is enough`,category:`Career`,votesA:0,votesB:0},{id:23,text:` Sachin Tendulkar is the greatest batsman ever`,optionA:`Sachin GOAT`,optionB:`Not the GOAT`,category:`Cricket`,votesA:0,votesB:0},{id:24,text:`India should prioritize manufacturing over IT services`,optionA:`Manufacturing`,optionB:`IT services`,category:`Tech`,votesA:0,votesB:0},{id:25,text:`Public transport in Indian cities is actually good enough`,optionA:`It's good`,optionB:`It's terrible`,category:`Culture`,votesA:0,votesB:0},{id:26,text:`Streaming movies at home is better than going to theatres`,optionA:`OTT at home`,optionB:`Theatre experience`,category:`Bollywood`,votesA:0,votesB:0},{id:27,text:`AI will replace most tech jobs within 5 years`,optionA:`Yes, scared`,optionB:`No, overhyped`,category:`Tech`,votesA:0,votesB:0},{id:28,text:`Indian street food is the best in the world`,optionA:`Best food`,optionB:`Not the best`,category:`Culture`,votesA:0,votesB:0},{id:29,text:`English should remain the primary business language in India`,optionA:`English only`,optionB:`Promote Hindi`,category:`Culture`,votesA:0,votesB:0},{id:30,text:`OnePlus phones offer better value than Samsung in the same price range`,optionA:`OnePlus`,optionB:`Samsung`,category:`Tech`,votesA:0,votesB:0}],h=null,g=null,_=0,v=0,y=0,b=null,x=new Set,S={},C=[...m],w=!1,T=`hottake_state_v2`,ee=`hottake_vault`,E=`kv`,D=`state`;function O(e){return String(e)}function k(e){let t=O(e);return C.find(e=>O(e.id)===t)}function A(e){return x.has(O(e))}function te(e){x.add(O(e))}function ne(e){return`take_${O(e)}`}function j(e){return S[O(e)]||null}function M(e){return j(e)?.choice||null}function N(e,t,n=0,r=new Date().toISOString(),i={}){let a=O(e),o=S[a];if(o&&!i.override)return o;let s={choice:t,score:Number.isFinite(n)?n:o?.score||0,takenAt:r||o?.takenAt||new Date().toISOString()};return S[a]=s,te(a),s}function P(e){return O(e).replaceAll(`/`,`_`)}function F(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function I(e=new Date){return`daily_topic_${F(e)}`}function L(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t}function R(e){return JSON.stringify(O(e)).replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}function re(e){if(!e||e.id===void 0||e.id===null)return null;let t=k(e.id);if(t)return t;let n={votesA:0,votesB:0,...e,id:O(e.id)};return C=[n,...C],n}function z(){return{version:2,userScore:_,takeCount:v,streak:y,lastTakeDate:b,takes:S,updatedAt:new Date().toISOString()}}function B(e,t={}){if(!e||typeof e!=`object`)return;let n=Number(e.userScore??e.hotScore),r=Number(e.takeCount),i=Number(e.streak);Number.isFinite(n)&&(_=Math.max(_,n)),Number.isFinite(r)&&(v=Math.max(v,r)),Number.isFinite(i)&&(y=Math.max(y,i)),e.lastTakeDate&&!b&&(b=e.lastTakeDate);let a=e.takes||{};Object.entries(a).forEach(([e,n])=>{!n||!n.choice||N(e,n.choice,Number(n.score)||0,n.takenAt,{override:t.overrideTakes})}),v=Math.max(v,Object.keys(S).length)}function ie(e=z()){localStorage.setItem(T,JSON.stringify(e)),localStorage.setItem(`userScore`,String(e.userScore)),localStorage.setItem(`takeCount`,String(e.takeCount)),localStorage.setItem(`streak`,String(e.streak)),e.lastTakeDate&&localStorage.setItem(`lastTakeDate`,e.lastTakeDate),Object.entries(e.takes||{}).forEach(([e,t])=>{t?.choice&&localStorage.setItem(ne(e),t.choice)})}function V(){return typeof indexedDB>`u`?Promise.resolve(null):new Promise((e,t)=>{let n=indexedDB.open(ee,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(E)||e.createObjectStore(E)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function ae(){let e=await V();return e?new Promise((t,n)=>{let r=e.transaction(E,`readonly`).objectStore(E).get(D);r.onsuccess=()=>t(r.result||null),r.onerror=()=>n(r.error)}):null}async function oe(e=z()){let t=await V();t&&await new Promise((n,r)=>{let i=t.transaction(E,`readwrite`);i.objectStore(E).put(e,D),i.oncomplete=()=>n(),i.onerror=()=>r(i.error)})}async function H(){let e=z();try{ie(e),await oe(e)}catch(e){console.warn(`State persistence failed:`,e)}}function se(e,t,n){let r=t.votesA,i=t.votesB,a=r+i;if(a===0)return 10;let o=Math.round((e===`A`?r:i)/a*100),s=o<30?3:1,c=y*2,l=o>=40&&o<=60?5:0;return 10*s+c+l}var U=null,W=!1;async function ce(){try{let{initializeApp:e}=await f(async()=>{let{initializeApp:e}=await import(`./index.esm-DbSiJUtA.js`);return{initializeApp:e}},__vite__mapDeps([0,1]),import.meta.url),{getFirestore:t,collection:n,doc:r,setDoc:i,getDoc:a,updateDoc:o,increment:s,onSnapshot:c,query:l,orderBy:u,limit:d}=await f(async()=>{let{getFirestore:e,collection:t,doc:n,setDoc:r,getDoc:i,updateDoc:a,increment:o,onSnapshot:s,query:c,orderBy:l,limit:u}=await import(`./index.esm-I4xfEU6i.js`);return{getFirestore:e,collection:t,doc:n,setDoc:r,getDoc:i,updateDoc:a,increment:o,onSnapshot:s,query:c,orderBy:l,limit:u}},__vite__mapDeps([2,1]),import.meta.url);p.apiKey===`YOUR_API_KEY`?(console.log(`📱 Running in local mode (Firebase not configured)`),W=!1):(U=t(e(p)),n(U,`users`),n(U,`topics`),n(U,`takes`),W=!0,console.log(`🔥 Firebase connected`),await le())}catch(e){console.log(`📱 Firebase init failed, using local mode:`,e.message),W=!1}}async function le(){if(W)try{let{getDocs:e,collection:t}=await f(async()=>{let{getDocs:e,collection:t}=await import(`./index.esm-I4xfEU6i.js`);return{getDocs:e,collection:t}},__vite__mapDeps([2,1]),import.meta.url),n=await e(t(U,`topics`));n.empty||(C=n.docs.map(e=>{let t=e.data();return{votesA:0,votesB:0,...t,id:t.id??e.id}}))}catch{console.log(`Loading from local seed data`)}}async function ue(e,t,n){if(!W||!h)return{accepted:!0};let r=O(e.id),i=`${P(h.uid)}_${P(r)}`,a=new Date().toISOString(),{doc:o,increment:s,runTransaction:c,serverTimestamp:l}=await f(async()=>{let{doc:e,increment:t,runTransaction:n,serverTimestamp:r}=await import(`./index.esm-I4xfEU6i.js`);return{doc:e,increment:t,runTransaction:n,serverTimestamp:r}},__vite__mapDeps([2,1]),import.meta.url),u=o(U,`users`,h.uid),d=o(U,`topics`,r),p=o(U,`takes`,i);return c(U,async i=>{let o=await i.get(p);if(o.exists())return{accepted:!1,take:o.data()};let c={uid:h.uid,topicId:r,choice:t,score:n,topicText:e.text,optionA:e.optionA,optionB:e.optionB,category:e.category,takenAt:a,createdAt:l()};return i.set(p,c),i.set(u,{displayName:h.displayName||`Anonymous`,hotScore:s(n),takeCount:s(1),streak:y,lastTakeDate:b,updatedAt:l(),takes:{[r]:{choice:t,score:n,takenAt:a}}},{merge:!0}),i.set(d,{id:e.id,text:e.text,optionA:e.optionA,optionB:e.optionB,category:e.category,votesA:s(+(t===`A`)),votesB:s(+(t===`B`)),updatedAt:l()},{merge:!0}),{accepted:!0,take:c}})}async function de(){if(!W){h={uid:`local_`+Date.now(),displayName:`Anonymous`};return}try{let{signInAnonymously:e,onAuthStateChanged:t}=await f(async()=>{let{signInAnonymously:e,onAuthStateChanged:t}=await import(`./index.esm-CR_yt0YQ.js`);return{signInAnonymously:e,onAuthStateChanged:t}},__vite__mapDeps([3,1]),import.meta.url),{auth:n}=await f(async()=>{let{auth:e}=await import(`./index.esm-CR_yt0YQ.js`);return{auth:e}},__vite__mapDeps([3,1]),import.meta.url),{doc:r,setDoc:i,getDoc:a}=await f(async()=>{let{doc:e,setDoc:t,getDoc:n}=await import(`./index.esm-I4xfEU6i.js`);return{doc:e,setDoc:t,getDoc:n}},__vite__mapDeps([2,1]),import.meta.url),o=(await f(async()=>{let{initializeApp:e}=await import(`./index.esm-DbSiJUtA.js`);return{initializeApp:e}},__vite__mapDeps([0,1]),import.meta.url)).initializeApp(p);h=(await e((await f(async()=>{let{getAuth:e}=await import(`./index.esm-CR_yt0YQ.js`);return{getAuth:e}},__vite__mapDeps([3,1]),import.meta.url)).getAuth(o))).user;let s=await a(r(U,`users`,h.uid));if(s.exists())B(s.data(),{overrideTakes:!0}),await H();else{let e=z();await i(r(U,`users`,h.uid),{displayName:`Anonymous`,hotScore:e.userScore,takeCount:e.takeCount,streak:e.streak,lastTakeDate:e.lastTakeDate,takes:e.takes,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()})}}catch{h={uid:`local_`+Date.now(),displayName:`Anonymous`}}}function G(e){document.getElementById(`app`).innerHTML=e}function fe(){let e=document.getElementById(`app`);e&&(e.querySelector(`.home`)&&Y(),e.querySelector(`.profile-screen`)&&$())}function pe(){G(`
    <div class="splash">
      <div class="splash-content">
        <div class="logo-container">
          <div class="logo-icon">🔥</div>
          <h1 class="logo-text">HotTake</h1>
        </div>
        <p class="tagline">The Opinion Arena</p>
        <p class="sub-tagline">Where India takes sides.</p>
        <div class="splash-stats">
          <div class="stat"><span class="stat-num">30</span><span class="stat-label">Topics</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-num">🔥</span><span class="stat-label">Hot Scores</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-num">∞</span><span class="stat-label">Debates</span></div>
        </div>
        <button class="btn-primary btn-large" onclick="showHome()">
          Take Your First Stance →
        </button>
        <p class="splash-footer">No account needed. Just take a stance.</p>
      </div>
    </div>
  `)}var K={0:`Culture`,1:`Tech`,2:`Career`,3:`Cricket`,4:`Bollywood`,5:`Sports`,6:`Culture`},q={"2026-05-27":{id:`special-2026-05-27`,text:`Hardik Pandya is a better all-rounder than MS Dhoni`,optionA:`Hardik`,optionB:`Dhoni`,category:`Cricket`,votesA:0,votesB:0},"2026-06-15":{id:`special-2026-06-15`,text:`Indian movies are better than Hollywood`,optionA:`Bollywood`,optionB:`Hollywood`,category:`Bollywood`,votesA:0,votesB:0}};function J(){let e=F();if(q[e])return{...q[e]};let t=K[new Date().getDay()],n=m.filter(e=>e.category===t);return n.length>0?n[L(`${e}:${t}`)%n.length]:m[L(e)%m.length]}function me(){let e=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],t=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],n=new Date;return`${e[n.getDay()]}, ${n.getDate()} ${t[n.getMonth()]}`}function Y(){let e=re(J()),t=localStorage.getItem(I()),n=[];!t&&e&&!A(e.id)&&n.push({...e,isFeatured:!0});let r=K[new Date().getDay()],i=C.filter(e=>e.category===r&&!A(e.id));n.push(...i.slice(0,2));let a=C.filter(e=>!A(e.id)&&!n.find(t=>O(t.id)===O(e.id)));n.push(...a.sort(()=>Math.random()-.5).slice(0,3));let o=new Set;n=n.filter(e=>{let t=O(e.id);return o.has(t)?!1:(o.add(t),!0)}).slice(0,5);let s=n.map((e,t)=>`
    <div class="topic-card${e.isFeatured?` featured`:``}" onclick="selectTopic(${R(e.id)})" style="animation-delay: ${t*80}ms">
      ${e.isFeatured?`<div class="featured-badge">🔥 TODAY'S TAKE</div>`:``}
      <div class="topic-category">${e.category}</div>
      <p class="topic-text">"${e.text}"</p>
      <div class="topic-meta">
        <span class="meta-item">⚡ Take a stance</span>
        <span class="meta-item">${e.votesA+e.votesB} votes</span>
      </div>
    </div>
  `).join(``),c=x.size,l=C.filter(e=>!A(e.id)).length;G(`
    <div class="home">
      <div class="home-header">
        <div class="header-left">
          <span class="logo-icon-small">🔥</span>
          <span class="brand">HotTake</span>
        </div>
        <div class="user-stats" onclick="showProfile()">
          <div class="score-badge">
            <span class="score-num">${_}</span>
            <span class="score-label">Score</span>
          </div>
        </div>
      </div>

      <div class="streak-bar ${y>0?`active`:``}">
        🔥 ${y>0?`${y}-day streak! Keep it going`:`Take a stance to start your streak`}
      </div>

      <div class="section-header">
        <h2 class="section-title">🔥 Hot Takes Today — ${me()}</h2>
        <span class="section-badge">${c>0?`${c} taken`:`Fresh`}</span>
      </div>

      <div class="topics-list">
        ${s}
      </div>

      ${c>0?`
      <div class="section-header" style="margin-top: 32px">
        <h2 class="section-title">📋 Your Stances</h2>
      </div>
      <div class="taken-topics">
        ${C.filter(e=>A(e.id)).slice(0,5).map(e=>{let t=M(e.id);return`
            <div class="taken-card" onclick="showResults(${R(e.id)})">
              <p class="taken-text">"${e.text}"</p>
              <div class="taken-choice ${t===`A`?`option-a`:`option-b`}">
                You: ${t===`A`?e.optionA:e.optionB}
              </div>
            </div>
          `}).join(``)}
      </div>
      `:``}

      ${l===0&&c>0?`
      <div class="empty-state">
        <p>🎉 You've taken all stances today!</p>
        <p class="empty-sub">🔥 Come back tomorrow for new hot takes — the daily featured topic will be different</p>
      </div>
      `:``}
    </div>
  `)}function he(e){if(g=k(e),g){if(A(g.id)){Z(g.id);return}G(`
    <div class="take-screen">
      <div class="take-header">
        <button class="btn-back" onclick="showHome()">← Back</button>
        <span class="category-badge">${g.category}</span>
      </div>

      <div class="take-content">
        <h1 class="take-question">"${g.text}"</h1>
        
        <div class="vote-preview">
          <div class="preview-bar">
            <div class="preview-fill option-a-fill" style="width: ${X(g.votesA,g.votesB)}%"></div>
            <div class="preview-fill option-b-fill" style="width: ${X(g.votesB,g.votesA)}%"></div>
          </div>
          <div class="preview-labels">
            <span>A: ${g.votesA} votes</span>
            <span>B: ${g.votesB} votes</span>
          </div>
        </div>

        <p class="choose-label">Choose your side:</p>

        <div class="choice-buttons">
          <button class="choice-btn option-a" onclick="submitTake('A')">
            <span class="choice-text">${g.optionA}</span>
            <span class="choice-percent">${X(g.votesA,g.votesB)}%</span>
          </button>
          
          <div class="vs-divider">OR</div>

          <button class="choice-btn option-b" onclick="submitTake('B')">
            <span class="choice-text">${g.optionB}</span>
            <span class="choice-percent">${X(g.votesB,g.votesA)}%</span>
          </button>
        </div>
      </div>
    </div>
  `)}}function X(e,t){let n=e+t;return n===0?50:Math.round(e/n*100)}async function ge(e){if(!g||w)return;let t=j(g.id);if(t){Z(g.id,t.choice,t.score);return}w=!0;let n={...g,votesA:g.votesA+ +(e===`A`),votesB:g.votesB+ +(e===`B`)},r=se(e,n,n.votesA+n.votesB),i=y,a=b,o=new Date().toDateString();if(b!==o){let e=new Date(Date.now()-864e5).toDateString();y=b===e?y+1:1,b=o}try{let t=await ue(g,e,r);if(t.accepted===!1){y=i,b=a;let n=t.take||{};N(g.id,n.choice||e,Number(n.score)||0,n.takenAt,{override:!0}),await H(),Z(g.id,n.choice||e,Number(n.score)||0),w=!1;return}}catch(e){console.warn(`Remote take lock failed, saving locally:`,e)}e===`A`?g.votesA++:g.votesB++,_+=r,v++,N(g.id,e,r),await H();let s=J();s&&O(s.id)===O(g.id)&&localStorage.setItem(I(),O(g.id)),Z(g.id,e,r),w=!1}function Z(e,t,n){let r=k(e);if(!r)return;g=r;let i=t||M(e);if(!i)return Y();let a=X(r.votesA,r.votesB),o=X(r.votesB,r.votesA),s=i===`A`?a:o,c=i===`A`&&r.votesA>r.votesB||i===`B`&&r.votesB>r.votesA,l=s<35;G(`
    <div class="results-screen">
      <div class="results-header">
        <button class="btn-back" onclick="showHome()">← Home</button>
        <span class="results-score">${Number.isFinite(n)?`+${n}`:`${_}`} 🔥</span>
      </div>

      <div class="results-content">
        <div class="result-status ${c?`winner`:`minority`}">
          ${c?`🎉 You picked the winning side!`:l?`🧠 Bold take. Controversial pick.`:`📊 The majority disagrees.`}
        </div>

        <h2 class="result-question">"${r.text}"</h2>

        <div class="result-bars">
          <div class="result-bar-wrap">
            <div class="result-label">
              <span>${r.optionA}</span>
              <span class="result-pct ${i===`A`?`chosen`:``}">${a}%</span>
            </div>
            <div class="result-bar">
              <div class="result-fill option-a-fill" style="width: ${a}%"></div>
            </div>
          </div>
          
          <div class="result-bar-wrap">
            <div class="result-label">
              <span>${r.optionB}</span>
              <span class="result-pct ${i===`B`?`chosen`:``}">${o}%</span>
            </div>
            <div class="result-bar">
              <div class="result-fill option-b-fill" style="width: ${o}%"></div>
            </div>
          </div>
        </div>

        <div class="your-choice ${i===`A`?`option-a`:`option-b`}">
          You chose: <strong>${i===`A`?r.optionA:r.optionB}</strong>
        </div>

        <div class="score-display">
          <div class="score-ring">
            <span class="score-big">${_}</span>
            <span class="score-sub">Total Score</span>
          </div>
        </div>

        <!-- SHARE CARD PREVIEW -->
        <div class="share-card-wrapper">
          <div class="share-card" id="shareCard">
            <div class="card-header">
              <div class="card-logo">🔥 HotTake</div>
              <div class="card-tag">OPINION ARENA</div>
            </div>
            <p class="card-question">"${r.text}"</p>
            <div class="card-choices">
              <div class="card-choice ${i===`A`?`active`:``}">
                <div class="card-choice-label">${r.optionA}</div>
                <div class="card-choice-pct">${a}%</div>
              </div>
              <div class="card-vs">VS</div>
              <div class="card-choice ${i===`B`?`active`:``}">
                <div class="card-choice-label">${r.optionB}</div>
                <div class="card-choice-pct">${o}%</div>
              </div>
            </div>
            <div class="card-score">
              <span class="card-score-icon">🔥</span>
              <span>My Hot Score: <strong>${_}</strong></span>
            </div>
            <div class="card-footer">
              <span>Think I'm wrong? Take the test 👇</span>
              <span class="card-url">hottake.in</span>
            </div>
          </div>
        </div>

        <div class="share-actions">
          <button class="btn-share" onclick="downloadShareCard()">
            📸 Screenshot Card
          </button>
          <button class="btn-share btn-whatsapp" onclick="shareWhatsApp()">
            💬 Share on WhatsApp
          </button>
          <button class="btn-share btn-copy" onclick="copyShareLink(event)">
            🔗 Copy Link
          </button>
        </div>

        <button class="btn-primary" onclick="showHome()" style="margin-top: 24px">
          Next Hot Take →
        </button>
      </div>
    </div>
  `)}async function _e(){let{default:e}=await f(async()=>{let{default:e}=await import(`./html2canvas-CqQof0Ao.js`).then(e=>c(e.default,1));return{default:e}},[],import.meta.url),t=document.getElementById(`shareCard`);if(t)try{let n=await e(t,{scale:3,backgroundColor:`#0a0a0f`,useCORS:!0,logging:!1,width:t.offsetWidth,height:t.offsetHeight}),r=document.createElement(`a`);r.download=`hottake-${Date.now()}.png`,r.href=n.toDataURL(`image/png`),r.click()}catch{Q(),alert(`Screenshot saved! You can also screenshot the card above manually.`)}}function ve(){let e=g;if(!e)return;let t=`🔥 I just took a stance on HotTake: "${e.text}" — My Hot Score is ${_}! Think I'm wrong? Take the test 👇\nhottake.in`,n=`https://wa.me/?text=${encodeURIComponent(t)}`;window.open(n,`_blank`)}function Q(e){if(!g)return;let t=`🔥 I just took a stance on "${g.text}" — My Hot Score is ${_}! Take the test: hottake.in`;navigator.clipboard.writeText(t).then(()=>{let t=e?.currentTarget||e?.target;if(!t)return;let n=t.textContent;t.textContent=`✅ Copied!`,setTimeout(()=>t.textContent=n,2e3)})}function $(){let e=C.filter(e=>A(e.id));G(`
    <div class="profile-screen">
      <div class="profile-header">
        <button class="btn-back" onclick="showHome()">← Back</button>
      </div>

      <div class="profile-hero">
        <div class="profile-avatar">🔥</div>
        <h2 class="profile-name">${h?.displayName||`HotTaker`}</h2>
        <div class="profile-badge">Opinion Warrior</div>
      </div>

      <div class="profile-stats">
        <div class="pstat">
          <span class="pstat-num">${_}</span>
          <span class="pstat-label">🔥 Hot Score</span>
        </div>
        <div class="pstat">
          <span class="pstat-num">${v}</span>
          <span class="pstat-label">Stances Taken</span>
        </div>
        <div class="pstat">
          <span class="pstat-num">${y}</span>
          <span class="pstat-label">Day Streak</span>
        </div>
      </div>

      ${e.length>0?`
      <div class="profile-history">
        <h3 class="history-title">Your Take History</h3>
        ${e.map(e=>{let t=M(e.id);return`
            <div class="history-item">
              <p class="history-text">"${e.text}"</p>
              <div class="history-choice ${t===`A`?`option-a`:`option-b`}">
                ${t===`A`?e.optionA:e.optionB}
              </div>
            </div>
          `}).join(``)}
      </div>
      `:``}
    </div>
  `)}async function ye(){try{let e=localStorage.getItem(T);e&&B(JSON.parse(e),{overrideTakes:!0});let t=localStorage.getItem(`userScore`),n=localStorage.getItem(`takeCount`),r=localStorage.getItem(`streak`),i=localStorage.getItem(`lastTakeDate`);t!==null&&(_=Math.max(_,parseInt(t,10)||0)),n!==null&&(v=Math.max(v,parseInt(n,10)||0)),r!==null&&(y=Math.max(y,parseInt(r,10)||0)),i!==null&&(b=i);for(let e=0;e<localStorage.length;e++){let t=localStorage.key(e);if(t&&t.startsWith(`take_`)){let e=t.slice(5),n=localStorage.getItem(t);e&&n&&N(e,n)}}B(await ae(),{overrideTakes:!0}),await H(),console.log(`📱 Loaded from localStorage:`,{userScore:_,takeCount:v,streak:y,takenCount:x.size})}catch(e){console.warn(`localStorage read failed:`,e)}}async function be(){await ye(),pe(),ce().then(()=>de()).then(()=>{fe()}).catch(()=>{console.log(`📱 Continuing in local-only mode`)})}be(),window.showHome=Y,window.selectTopic=he,window.submitTake=ge,window.showResults=Z,window.showProfile=$,window.downloadShareCard=_e,window.shareWhatsApp=ve,window.copyShareLink=Q;export{o as t};