# Развёртывание на российских платформах

Проект настроен на **статический экспорт** (`output: 'export'`) — после сборки получается папка `out/` с готовым статическим сайтом. Его можно развернуть на любом хостинге: Timeweb, Selectel, Yandex Cloud, REG.RU и др.

## Сборка

```bash
pnpm install
pnpm build
```

Результат сборки: папка `out/` с файлами `index.html`, `_next/` и др.

---

## 1. Timeweb Cloud

**Аналог Vercel/Netlify.** Поддерживает автодеплой из Git.

1. Зарегистрируйтесь на [timeweb.cloud](https://timeweb.cloud)
2. Раздел **Сервисы** → **Облачные серверы** или **Сайты**
3. Подключите репозиторий (GitHub/GitLab) или загрузите содержимое папки `out/`
4. Укажите команду сборки: `pnpm build` (или `npm run build`)
5. Корневая папка: `out` (или укажите `out` как output директорию)

---

## 2. Selectel Cloud

**Object Storage + CDN** — подходит для статики.

1. [Selectel Cloud](https://selectel.ru/services/cloud/) → Object Storage
2. Создайте контейнер (bucket) с доступом на чтение
3. Загрузите содержимое `out/` в корень контейнера
4. Включите хостинг статического сайта в настройках контейнера
5. Подключите CDN для ускорения

```bash
# Пример загрузки через s3cmd (настройте доступ)
s3cmd sync out/ s3://ваш-bucket/
```

---

## 3. Yandex Cloud (Object Storage)

1. [Yandex Cloud](https://cloud.yandex.ru) → Object Storage
2. Создайте bucket
3. Включите **Хостинг** в настройках bucket
4. Загрузите файлы из `out/` (через консоль или `yc` CLI)

---

## 4. REG.RU / Beget / классический хостинг

1. Соберите проект: `pnpm build`
2. Через FTP/SFTP загрузите **содержимое** папки `out/` в `public_html` (или аналог)
3. Важно: загружайте именно содержимое `out/`, а не саму папку

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
pnpm build
npx serve out
```

Откройте http://localhost:3000 — сайт должен отображаться корректно.
