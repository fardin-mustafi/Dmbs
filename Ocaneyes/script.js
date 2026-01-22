const btnF = document.getElementById("btnF");
const btnA = document.getElementById("btnA");
const btnAd = document.getElementById("btnAd");

const fisher = document.getElementById("fisher");
const auth = document.getElementById("auth");
const admin = document.getElementById("admin"); // may be null in signup

function activate(panel){
  if(fisher) fisher.classList.remove("active");
  if(auth) auth.classList.remove("active");
  if(admin) admin.classList.remove("active");

  panel.classList.add("active");

  if(btnF) btnF.classList.remove("active");
  if(btnA) btnA.classList.remove("active");
  if(btnAd) btnAd.classList.remove("active");
}

if(btnF){
  btnF.onclick = ()=>{
    activate(fisher);
    btnF.classList.add("active");
  };
}

if(btnA){
  btnA.onclick = ()=>{
    activate(auth);
    btnA.classList.add("active");
  };
}

if(btnAd){
  btnAd.onclick = ()=>{
    activate(admin);
    btnAd.classList.add("active");
  };
}

/* PAGE SWITCH */
function goSignup(){
  document.body.classList.add("page-exit");
  setTimeout(()=>location.href="signup.html",600);
}

function goLogin(){
  document.body.classList.add("page-exit");
  setTimeout(()=>location.href="login.html",600);
}
