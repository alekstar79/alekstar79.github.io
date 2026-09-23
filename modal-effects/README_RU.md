[English](README.md) · **Русский**

# Эффекты модальных окон

Справочная коллекция из 24 анимаций открытия и закрытия модальных окон.
Каждый эффект — самодостаточный блок CSS. Единственный JavaScript в проекте
переключает класс.

Этот документ описывает сами эффекты: что каждый делает, как устроен и где
уместен. Код приложен для каждого эффекта.

---

## Как устроен эффект

Все эффекты построены по одной схеме.

**Разметка** — обёртка-оверлей с классом эффекта, внутри — модалка:

```html
<div class="overlay overlay-spring" id="myModal">
  <div class="modal">
    <!-- контент -->
  </div>
</div>
```

**Состояние** — класс `open` на обёртке:

```html
<div class="overlay overlay-spring open" id="myModal">
```

**Поведение** — CSS описывает закрытое состояние, открытое состояние и
переход между ними:

```css
.overlay-spring .modal {
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.overlay-spring.open .modal {
  transform: scale(1);
}
```

Добавили `open` — проигралась анимация открытия. Сняли — анимация закрытия.
Ни библиотек, ни стейт-машины, ни JavaScript в самом эффекте.

---

## Базовые стили

Вставляются один раз на проект. Отвечают за положение оверлея, центрирование
модалки и переключение видимости.

```css
.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
  visibility: hidden;
  opacity: 0;
  overflow-y: auto;
  z-index: 999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.overlay.open {
  visibility: visible;
  opacity: 1;
}

.modal {
  margin: auto;
  width: 100%;
  max-width: 500px;
  padding: 32px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}
```

Каждый блок эффекта ниже добавляется поверх этой базы.

---

## Эффекты

### 1. Сверху вниз

Модалка разворачивается от верхнего края, как разворачивающийся вниз свиток.

```css
.overlay-top {
  perspective: 800px;
}

.overlay-top .modal {
  transform: rotateX(90deg);
  transform-origin: top center;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-top.open .modal {
  transform: rotateX(0deg);
}
```

**Когда использовать.** Диалоги с большим количеством текста, подтверждения,
пользовательские соглашения. Движение читается как *разворачивание*, а не
*появление* — хорошо сочетается с текстовым контентом.

---

### 2. Слева направо

Модалка разворачивается от левого края, как переворачивающаяся страница.

```css
.overlay-left {
  perspective: 1000px;
}

.overlay-left .modal {
  transform: rotateY(90deg);
  transform-origin: left center;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-left.open .modal {
  transform: rotateY(0deg);
}
```

**Когда использовать.** Редакционные модалки, статьи, всё с читательским
потоком. Также естественный выбор для LTR-интерфейсов, где движение приходит
с ведущего края.

---

### 3. Снизу вверх

Модалка разворачивается от нижнего края, как приподнимающаяся.

```css
.overlay-bottom {
  perspective: 800px;
}

.overlay-bottom .modal {
  transform: rotateX(-90deg);
  transform-origin: bottom center;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-bottom.open .modal {
  transform: rotateX(0deg);
}
```

**Когда использовать.** Приглашения, приветствия, welcome-диалоги. Читается
как *преподнесение* чего-то пользователю.

---

### 4. Справа налево

Модалка разворачивается от правого края. Зеркало эффекта 2.

```css
.overlay-right {
  perspective: 1000px;
}

.overlay-right .modal {
  transform: rotateY(-90deg);
  transform-origin: right center;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-right.open .modal {
  transform: rotateY(0deg);
}
```

**Когда использовать.** Те же сценарии, что у эффекта 2, но для RTL-языков.
Или как зеркальная пара, когда модалка вызывается с правой стороны экрана.

---

### 5. Скольжение слева направо

Модалка выезжает из-за левого края, разворачиваясь по пути.

```css
.overlay-slide-left {
  perspective: 1000px;
}

.overlay-slide-left .modal {
  transform: translate3d(-150%, 0, 0) rotateY(90deg);
  transform-origin: left center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-left.open .modal {
  transform: translate3d(0, 0, 0) rotateY(0deg);
}
```

**Когда использовать.** Боковые панели, навигационные ящики, всё, у чего есть
естественный левый источник. Пройденное расстояние делает движение
пространственным.

---

### 6. Скольжение справа налево

То же движение, что в эффекте 5, отражённое от правого края.

```css
.overlay-slide-right {
  perspective: 1000px;
}

.overlay-slide-right .modal {
  transform: translate3d(150%, 0, 0) rotateY(-90deg);
  transform-origin: right center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-right.open .modal {
  transform: translate3d(0, 0, 0) rotateY(0deg);
}
```

**Когда использовать.** Панели, привязанные к правому краю, настройки, фильтры
модалок, открываемых с правой стороны интерфейса.

---

### 7. Скольжение сверху вниз

Модалка падает сверху, разворачиваясь на месте.

```css
.overlay-slide-top {
  perspective: 800px;
}

.overlay-slide-top .modal {
  transform: translate3d(0, -150%, 0) rotateX(90deg);
  transform-origin: top center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-top.open .modal {
  transform: translate3d(0, 0, 0) rotateX(0deg);
}
```

**Когда использовать.** Модалки в стиле выпадающего списка, уведомления,
спускающиеся из верхнего бара, всё, что вызывается из шапки.

---

### 8. Скольжение снизу вверх

Модалка поднимается от нижнего края, разворачиваясь вверх.

```css
.overlay-slide-bottom {
  perspective: 800px;
}

.overlay-slide-bottom .modal {
  transform: translate3d(0, 150%, 0) rotateX(-90deg);
  transform-origin: bottom center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-bottom.open .modal {
  transform: translate3d(0, 0, 0) rotateX(0deg);
}
```

**Когда использовать.** Мобильные интерфейсы, action sheet, всё, что имитирует
bottom sheet.

---

### 9. Пружина

Модалка появляется с отскоком: вырастает чуть больше финального размера,
слегка сжимается и стабилизируется.

```css
.overlay-spring .modal {
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.overlay-spring.open .modal {
  transform: scale(1);
}
```

**Когда использовать.** Успешные состояния, подтверждения, игровые
интерфейсы. Отскок сигнализирует о появлении — модалка *выпрыгивает*, а не
*возникает*.

---

### 11. Зум с вращением

Модалка вырастает из нуля, одновременно доворачиваясь на место с 45 градусов.

```css
.overlay-zoomrotate .modal {
  transform: scale(0) rotate(45deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-zoomrotate.open .modal {
  transform: scale(1) rotate(0deg);
}
```

**Когда использовать.** Праздничные диалоги, шаги онбординга, анонсы
продуктов. Вращение добавляет характер тому, что иначе было бы простым зумом.

---

### 12. Перспектива 3D

Модалка приближается издалека с лёгким наклоном вперёд, который выпрямляется
на месте.

```css
.overlay-perspective {
  perspective: 600px;
}

.overlay-perspective .modal {
  transform: translateZ(-300px) rotateX(30deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-perspective.open .modal {
  transform: translateZ(0) rotateX(0deg);
}
```

**Когда использовать.** Главные диалоги, онбординг, всё, что заслуживает
неразделённого внимания. Читается как *приближение к зрителю* из глубины.

---

### 13. Оригами слева направо

Модалка раскрывается из левого верхнего угла со скосом, как бумага,
разворачивающаяся из сгиба.

```css
.overlay-origami .modal {
  transform: rotate(-90deg) scale(0.3) skewX(20deg);
  transform-origin: top left;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-origami.open .modal {
  transform: rotate(0deg) scale(1) skewX(0deg);
}
```

**Когда использовать.** Творческие инструменты, редакционные страницы,
игровые продукты. Скос даёт эффекту характер — он не выглядит как стоковая
анимация.

---

### 14. Отскок

Keyframes-анимация с тремя чёткими долями: раздувание, сжатие, стабилизация.

```css
@keyframes bounceIn {
  0%   { transform: scale(0.3); opacity: 0; }
  50%  { transform: scale(1.1); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

.overlay-bounce .modal {
  transform: scale(0.3);
  opacity: 0;
}

.overlay-bounce.open .modal {
  animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
}
```

**Когда использовать.** Заметные уведомления, cookie-баннеры, рекламные
модалки. Громко по замыслу — не для утилитарных диалогов.

---

### 15. Диагональ слева сверху

Модалка влетает из левого верхнего угла, доворачиваясь на месте.

```css
.overlay-diagonal .modal {
  transform: translate3d(-200%, 200%, 0) rotate(45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**Когда использовать.** Уведомления, чат-бабблы, всё, что привязано к левому
верхнему углу экрана. Диагональ делает источник движения безошибочным.

---

### 16. Выпуклость

Модалка начинается как маленький круглый пузырь, раздувается в карточку и
приобретает рельефную тень — как надувающийся шар.

```css
.overlay-convex {
  perspective: 800px;
}

.overlay-convex .modal {
  transform: scale(0.3) rotateX(20deg) rotateY(20deg);
  border-radius: 50%;
  opacity: 0;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    inset 0 -20px 40px rgba(0, 0, 0, 0.1),
    inset 0 20px 40px rgba(255, 255, 255, 0.3);
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    border-radius 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease,
    box-shadow 0.8s ease;
}

.overlay-convex.open .modal {
  transform: scale(1) rotateX(0deg) rotateY(0deg);
  border-radius: 24px;
  opacity: 1;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    inset 0 -10px 30px rgba(0, 0, 0, 0.05),
    inset 0 10px 30px rgba(255, 255, 255, 0.2);
}
```

**Когда использовать.** Карточки товаров, акценты на функциях,
взаимодействия-раскрытия. Мягче пружины, органичнее зума — морфинг
border-radius здесь ключевой.

---

### 17. Диагональ справа сверху

```css
.overlay-diagonal-top-right .modal {
  transform: translate3d(200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-top-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**Когда использовать.** Уведомления в правом верхнем углу, меню аккаунта,
всё, что вызывается из верхней правой области интерфейса.

---

### 18. Диагональ слева снизу

```css
.overlay-diagonal-bottom-left .modal {
  transform: translate3d(-200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**Когда использовать.** Взаимодействия, привязанные к левому нижнему углу,
вспомогательные диалоги, попапы рядом с триггером.

---

### 19. Диагональ справа снизу

```css
.overlay-diagonal-bottom-right .modal {
  transform: translate3d(200%, 200%, 0) rotate(45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**Когда использовать.** Чат-виджеты, всплывающие подсказки поддержки,
оверлеи, привязанные к правому нижнему углу.

---

### 20. Оригами справа налево

Зеркало эффекта 13 — раскрывается из правого верхнего угла.

```css
.overlay-origami-right .modal {
  transform: rotate(90deg) scale(0.3) skewX(-20deg);
  transform-origin: top right;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-origami-right.open .modal {
  transform: rotate(0deg) scale(1) skewX(0deg);
}
```

**Когда использовать.** Те же сценарии, что у эффекта 13, но зеркально.
Полезно для RTL-интерфейсов или когда модалка открывается с правой стороны.

---

### 21. Флип X

Модалка стартует развёрнутой от зрителя и поворачивается лицом вокруг
горизонтальной оси.

```css
.overlay-flip-x {
  perspective: 800px;
}

.overlay-flip-x .modal {
  transform: rotateX(180deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-x.open .modal {
  transform: rotateX(0deg);
}
```

**Когда использовать.** Просмотр карточек, взаимодействия
«переверни, чтобы увидеть». Лучше всего работает, когда у триггера уже есть
метафора флипа.

---

### 22. Флип Y → Масштаб

Горизонтальный флип в комбинации с масштабом. Флип идёт слева направо.

```css
.overlay-flip-ys {
  perspective: 800px;
}

.overlay-flip-ys .modal {
  transform: rotateY(180deg) scale(0.3);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-ys.open .modal {
  transform: rotateY(0deg) scale(1);
}
```

**Когда использовать.** Превью продуктов, карточки изображений, всё, где
горизонтальный флип связывает триггер с контентом.

---

### 23. Флип Y ← Масштаб

Зеркало эффекта 22. Флип идёт справа налево.

```css
.overlay-flip-ys-reverse {
  perspective: 800px;
}

.overlay-flip-ys-reverse .modal {
  transform: rotateY(-180deg) scale(0.3);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-ys-reverse.open .modal {
  transform: rotateY(0deg) scale(1);
}
```

**Когда использовать.** Зеркальная пара к эффекту 22 — пригодится, когда на
странице два триггера с противоположных сторон, и их появления должны
ощущаться разными.

---

### 24. Двойной флип

Двойной флип: обе оси сразу, с масштабом. Самый театральный эффект коллекции.

```css
.overlay-flip-mix {
  perspective: 800px;
}

.overlay-flip-mix .modal {
  transform: rotateX(180deg) rotateY(180deg) scale(0.3);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-mix.open .modal {
  transform: rotateX(0deg) rotateY(0deg) scale(1);
}
```

**Когда использовать.** Показы новых функций, праздничные диалоги — там, где
модалка в центре внимания и может позволить себе быть драматичной.

---

## Как выбрать эффект

Сначала выбирайте семейство, потом конкретный эффект.

| Если триггер — это...              | Присмотритесь к...                |
|------------------------------------|-----------------------------------|
| Текстовая ссылка или заголовок     | Семейство «рулон» (1–4)           |
| Боковая панель или ящик            | Скольжение + рулон (5–8)          |
| Успех или подтверждение            | Пружина (9), Зум с вращением (11) |
| Главное действие                   | Перспектива 3D (12)               |
| Карточка или редактор              | Оригами (13, 20), Выпуклость (16) |
| Уведомление или баннер             | Отскок (14)                       |
| Привязка к углу экрана             | Диагональ (15, 17–19)             |
| Триггер «переверни, чтобы увидеть» | Флип (21–24)                      |

---

## Доступность

- Каждая модалка — `role="dialog"` с `aria-modal="true"` и `aria-labelledby`,
  указывающим на её заголовок.
- Tab заперт внутри открытой модалки. Escape закрывает её и возвращает фокус
  на триггер.
- Все эффекты уважают `prefers-reduced-motion: reduce` — анимации
  пропускаются для пользователей, которые просят меньше движения.
- Движение декоративно. Ни один сценарий интерфейса не зависит от того,
  проиграется ли анимация.

---

## Поддержка браузеров

Современные evergreen-браузеры: Chrome, Edge, Firefox, Safari. Проект
использует `@layer`, `color-mix()`, `:focus-visible` и ES-модули.

---

## Лицензия

MIT.
