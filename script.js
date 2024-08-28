   let tg = window.Telegram.WebApp;

   tg.expand();

   let usercard = document.getElementById("usercard");

   let profName = document.createElement('p');
   profName.innerText = `${tg.initDataUnsafe.user.first_name}
   ${tg.initDataUnsafe.user.last_name}
   ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
   usercard.appendChild(profName);

   let userid = document.createElement('p');
   userid.innerText = `${tg.initDataUnsafe.user.id}`;
   usercard.appendChild(userid);
