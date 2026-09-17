/* Clovelly app simulation: shared state, navigation, demo panel. Not product code. */
window.cap=function(s){return s.charAt(0).toUpperCase()+s.slice(1)};
(function(){
  var KEY='clovelly-sim';
  var S; try{S=JSON.parse(sessionStorage.getItem(KEY))||{}}catch(e){S={}}
  S.difficulty=S.difficulty||'hard'; if(S.sound===undefined)S.sound=true;
  function save(){try{sessionStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
  window.SIM={state:S,save:save,
    go:function(href){location.href=href},
    toast:function(msg){var t=document.getElementById('simToast');if(!t){t=document.createElement('div');t.id='simToast';document.body.appendChild(t);}
      t.textContent=msg;t.className='on';clearTimeout(t._h);t._h=setTimeout(function(){t.className=''},2600);},
    later:function(){SIM.toast('This screen is still to be designed.')},
    coachRun:function(){return S.mode==='coachRun'},
    coachNav:function(on){var L=[['Feed','coach.html'],['Team','team.html'],['Scenarios','builder.html']];
      return L.map(function(l){return '<span class="'+(l[0]===on?'on':'')+'" data-go="'+l[1]+'" style="cursor:pointer">'+l[0]+'</span>'}).join('')+'<span>JS</span>';},
    first:function(){var n=(S.invites||[]).filter(function(i){return i.status!=='cancelled'});return n;},
    newCoach:function(){var keep=S.sound;for(var k in S)delete S[k];S.sound=keep;S.difficulty='medium';S.newCoach=true;S.setup={};save();}};

  var css=document.createElement('style');
  css.textContent='#simToast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,20px);background:#101010;color:#fff;border:1px solid rgba(255,255,255,.25);'+
   'padding:12px 18px;border-radius:4px;font:500 13px/1.4 Inter,-apple-system,sans-serif;opacity:0;transition:opacity .2s ease,transform .2s ease;z-index:99;pointer-events:none}'+
   '#simToast.on{opacity:1;transform:translate(-50%,0)}'+
   '#simBtn{position:fixed;right:14px;bottom:14px;z-index:98;background:#2a2926;color:#cfc6b8;border:1px solid #5e5c58;border-radius:999px;padding:6px 13px;font:600 10px/1 Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}'+
   '#simPanel{position:fixed;right:14px;bottom:50px;z-index:98;background:#2a2926;color:#cfc6b8;border:1px solid #5e5c58;border-radius:6px;padding:14px 16px;width:250px;font:13px/1.5 Inter,sans-serif;display:none}'+
   '#simPanel.on{display:block}#simPanel b{display:block;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;margin:10px 0 6px}#simPanel b:first-child{margin-top:0}'+
   '#simPanel button{background:transparent;border:1px solid #5e5c58;color:#cfc6b8;border-radius:3px;padding:3px 9px;margin:0 4px 4px 0;font:12px Inter,sans-serif;cursor:pointer}'+
   '#simPanel button.on{background:#cfc6b8;color:#101010;border-color:#cfc6b8}';
  document.head.appendChild(css);

  document.addEventListener('DOMContentLoaded',function(){
    var b=document.createElement('button');b.id='simBtn';b.textContent='Demo controls';
    var p=document.createElement('div');p.id='simPanel';
    function paint(){p.innerHTML='<b>Difficulty of the next run</b>'+['easy','medium','hard'].map(function(d){return '<button data-d="'+d+'" class="'+(S.difficulty===d?'on':'')+'">'+d[0].toUpperCase()+d.slice(1)+'</button>'}).join('')+
      '<b>Cleo\'s voice</b><button data-s="1" class="'+(S.sound?'on':'')+'">On</button><button data-s="0" class="'+(!S.sound?'on':'')+'">Off</button>'+
      '<b>Sign in as</b><button data-g="home.html">Sarah, member</button><button data-g="coach.html">Jane, coach</button><button data-n="1">Jane, new workspace</button>'+
      '<b>Start over</b><button data-r="1">Reset the demo</button>';}
    paint();
    p.addEventListener('click',function(e){var t=e.target;if(t.tagName!=='BUTTON')return;
      if(t.dataset.d){S.difficulty=t.dataset.d;save();paint();if(window.onSimChange)onSimChange();}
      if(t.dataset.s){S.sound=t.dataset.s==='1';save();paint();if(!S.sound&&window.speechSynthesis)speechSynthesis.cancel();}
      if(t.dataset.g)location.href=t.dataset.g;
      if(t.dataset.n){SIM.newCoach();location.href='signup.html';}
      if(t.dataset.r){sessionStorage.removeItem(KEY);location.href='index.html';}});
    b.addEventListener('click',function(){p.classList.toggle('on')});
    document.body.appendChild(p);document.body.appendChild(b);
    if(S.mode==='coachRun'){var ln=document.querySelector('.nav .links');if(ln&&/SC/.test(ln.textContent))ln.innerHTML=SIM.coachNav('Scenarios');}
    document.querySelectorAll('[data-go]').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();location.href=el.dataset.go;})});
    document.querySelectorAll('[data-later]').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();SIM.toast(el.dataset.later||'This screen is still to be designed.');})});
  });
})();
