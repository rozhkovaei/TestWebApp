import { createHmac } from "node:crypto";

let tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

function HMAC_SHA256(key: string | Buffer, secret: string) {
  return createHmac("sha256", key).update(secret);
}

function getCheckString(data: URLSearchParams) {
	const items: [k: string, v: string][] = [];

	// remove hash
	for (const [k, v] of data.entries()) if (k !== "hash") items.push([k, v]);

	return items.sort(([a], [b]) => a.localeCompare(b)) // sort keys
		.map(([k, v]) => `${k}=${v}`) // combine key-value pairs
		.join("\n");
}

const verifyInitData = (telegramInitData): boolean => {
  const data = new URLSearchParams(tg.initData);

	const data_check_string = getCheckString(data);
	const secret_key = HMAC_SHA256("WebAppData", process.env.BOT_TOKEN!).digest();
	const hash = HMAC_SHA256(secret_key, data_check_string).digest("hex");

	return (hash === data.get("hash"));   
}

let usercard = document.getElementById("usercard");

let result = verifyInitData();

let ver = document.createElement('p');
ver.innerText = `${result};
usercard.appendChild(ver);

let profName = document.createElement('p');
profName.innerText = `${sessionStorage.__telegram__initParams}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username}`;
usercard.appendChild(profName);

let userid = document.createElement('p');
userid.innerText = `${tg.initDataUnsafe.user.id}`;
usercard.appendChild(userid);

