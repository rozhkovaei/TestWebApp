
let tg = window.Telegram.WebApp;

tg.expand();

let usercard = document.getElementById("usercard");

tg.showAlert(`${sessionStorage.__telegram__initParams}`, function () {
                });

let profName = document.createElement('p');
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username}`;
usercard.appendChild(profName);

let userid = document.createElement('p');
userid.innerText = `${tg.initDataUnsafe.user.id}`;
usercard.appendChild(userid);

