
let tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let usercard = document.getElementById("usercard");

let profName = document.createElement('p');
profName.innerText = `${sessionStorage.__telegram__initParams}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username}`;
usercard.appendChild(profName);

let userid = document.createElement('p');
userid.innerText = `${tg.initDataUnsafe.user.id}`;
usercard.appendChild(userid);

