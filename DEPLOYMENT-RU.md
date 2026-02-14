# Развёртывание на российских платформах

Проект собран на **Vite** — после сборки получается папка `dist/` с готовым статическим сайтом. Его можно развернуть на любом хостинге: Timeweb, Selectel, Yandex Cloud, REG.RU и др.

## Сборка

```bash
npm install
npm run build
```

Результат сборки: папка `dist/` с файлами `index.html`, `assets/` и др.

---

## 1. Timeweb Cloud

**Аналог Vercel/Netlify.** Поддерживает автодеплой из Git.

1. Зарегистрируйтесь на [timeweb.cloud](https://timeweb.cloud)
2. Раздел **Сервисы** → **Облачные серверы** или **Сайты**
3. Подключите репозиторий (GitHub/GitLab) или загрузите содержимое папки `dist/`
4. Укажите команду сборки: `npm run build`
5. Корневая папка: `dist` (output директория Vite)

---

## 2. Selectel Cloud

**Object Storage + CDN** — подходит для статики.

1. [Selectel Cloud](https://selectel.ru/services/cloud/) → Object Storage
2. Создайте контейнер (bucket) с доступом на чтение
3. Загрузите содержимое `dist/` в корень контейнера
4. Включите хостинг статического сайта в настройках контейнера
5. Подключите CDN для ускорения

```bash
# Пример загрузки через s3cmd (настройте доступ)
s3cmd sync dist/ s3://ваш-bucket/
```

---

## 3. Yandex Cloud (Object Storage)

1. [Yandex Cloud](https://cloud.yandex.ru) → Object Storage
2. Создайте bucket
3. Включите **Хостинг** в настройках bucket
4. Загрузите файлы из `dist/` (через консоль или `yc` CLI)

---

## 4. REG.RU / Beget / классический хостинг

1. Соберите проект: `npm run build`
2. Через FTP/SFTP загрузите **содержимое** папки `dist/` в `public_html` (или аналог)
3. Важно: загружайте именно содержимое `dist/`, а не саму папку

---

## 5. Docker (универсальный вариант)

Для платформ с поддержкой контейнеров (Timeweb, Selectel, Yandex Cloud Run):

```bash
docker build -t stroymaster .
docker run -p 3000:80 stroymaster
```

См. `Dockerfile` в корне проекта.

---

## Проверка перед деплоем

```bash
npm run build
npm run preview
```

Откройте http://localhost:4173 — сайт должен отображаться корректно.
