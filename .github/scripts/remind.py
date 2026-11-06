"""Ежедневное напоминание в Telegram с кнопкой, открывающей урок.
Токен и чат берутся из секретов GitHub (BOT_TOKEN, CHAT_ID), адрес приложения — из APP_URL."""
import datetime
import json
import os
import urllib.request

PHRASES = [
    ("¡Vamos!", "Погнали!"),
    ("Poco a poco se va lejos.", "Тише едешь — дальше будешь."),
    ("Hoy es un buen día para aprender.", "Сегодня хороший день, чтобы учиться."),
    ("¡Tú puedes!", "У тебя получится!"),
    ("La práctica hace al maestro.", "Практика делает мастера."),
    ("Un paso cada día.", "Один шаг каждый день."),
    ("¿Listo para la lección?", "Готов к уроку?"),
]

token = os.environ["BOT_TOKEN"]
chat = os.environ["CHAT_ID"]
url = os.environ["APP_URL"]

es, ru = PHRASES[datetime.date.today().toordinal() % len(PHRASES)]
text = f"🇪🇸 <b>{es}</b>\n<i>{ru}</i>\n\nВремя урока испанского — 20–30 минут."
body = {
    "chat_id": chat,
    "text": text,
    "parse_mode": "HTML",
    "reply_markup": {"inline_keyboard": [[{"text": "Начать урок", "web_app": {"url": url}}]]},
}
req = urllib.request.Request(
    f"https://api.telegram.org/bot{token}/sendMessage",
    data=json.dumps(body).encode(),
    headers={"Content-Type": "application/json"},
)
with urllib.request.urlopen(req, timeout=30) as r:
    print("sent:", json.load(r)["ok"])
