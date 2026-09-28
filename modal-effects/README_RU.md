[English](README.md) · **Русский**

# Эффекты модальных окон

Справочная коллекция анимаций открытия и закрытия модальных окон, сгруппированная
по семействам. Каждый эффект — самодостаточный блок CSS. Единственный JavaScript
в проекте переключает класс.

[**LIVE DEMO**](https://alekstar79.github.io/modal-effects)

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

**Когда использовать.** Диалоги с большим количеством текста, подтверждения, пользовательские соглашения. Движение читается как *разворачивание*, а не *появление* — хорошо сочетается с текстовым контентом.

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

**Когда использовать.** Редакционные модалки, статьи, всё с читательским потоком. Также естественный выбор для LTR-интерфейсов, где движение приходит с ведущего края.

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

**Когда использовать.** Приглашения, приветствия, welcome-диалоги. Читается как *преподнесение* чего-то пользователю.

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

**Когда использовать.** Те же сценарии, что у эффекта 2, но для RTL-языков. Или как зеркальная пара, когда модалка вызывается с правой стороны экрана.

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

**Когда использовать.** Боковые панели, навигационные ящики, всё, у чего есть естественный левый источник. Пройденное расстояние делает движение пространственным.

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

**Когда использовать.** Панели, привязанные к правому краю, настройки, фильтры модалок, открываемых с правой стороны интерфейса.

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

**Когда использовать.** Модалки в стиле выпадающего списка, уведомления, спускающиеся из верхнего бара, всё, что вызывается из шапки.

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

**Когда использовать.** Мобильные интерфейсы, action sheet, всё, что имитирует bottom sheet.

---

### 9. Выезд с наклоном

Модалка поднимается снизу, выравнивая наклон `rotate(15deg)` на месте.

```css
.overlay-slide-rotate .modal {
  transform: translate3d(0, 100%, 0) rotate(15deg);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-slide-rotate.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
  opacity: 1;
}
```

**Когда использовать.** Игровые подтверждения, карточки товаров, всё, где небольшой наклон добавляет характер обычному нижнему выезду.

---

### 10. Вкат слева

Модалка вкатывается слева с полным оборотом `rotate(-720deg)` — как катящееся колесо.

```css
.overlay-roll-left .modal {
  transform: translate3d(-120%, 0, 0) rotate(-720deg);
  opacity: 0;
  transition:
    transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.6s ease;
}

.overlay-roll-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
  opacity: 1;
}
```

**Когда использовать.** Игровые интерфейсы, игривый онбординг, всё с метафорой колеса или кубика. Полный двойной оборот — обязательство: сочетайте с подходящей иконкой.

---

### 11. Вкат справа

Зеркало «Вката слева» — оборот на 720° справа.

```css
.overlay-roll-right .modal {
  transform: translate3d(120%, 0, 0) rotate(720deg);
  opacity: 0;
  transition:
    transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.6s ease;
}

.overlay-roll-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
  opacity: 1;
}
```

**Когда использовать.** Зеркальная пара к эффекту 10, или правая метафора колеса.

---

### 12. Пружина

Модалка появляется с отскоком: вырастает чуть больше финального размера, слегка сжимается и стабилизируется.

```css
.overlay-spring .modal {
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.overlay-spring.open .modal {
  transform: scale(1);
}
```

**Когда использовать.** Успешные состояния, подтверждения, игровые интерфейсы. Отскок сигнализирует о появлении — модалка *выпрыгивает*, а не *возникает*.

---

### 13. Резинка

Keyframes-резинка: модалка растягивается по X, сжимается по Y и постепенно успокаивается.

```css
@keyframes rubberBand {
  0%   { transform: scale(1); }
  30%  { transform: scaleX(1.25) scaleY(0.75); }
  40%  { transform: scaleX(0.75) scaleY(1.25); }
  50%  { transform: scaleX(1.15) scaleY(0.85); }
  65%  { transform: scaleX(0.95) scaleY(1.05); }
  75%  { transform: scaleX(1.05) scaleY(0.95); }
  100% { transform: scale(1); }
}

.overlay-rubber .modal {
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-rubber.open .modal {
  opacity: 1;
  animation: rubberBand 0.9s ease forwards;
}
```

**Когда использовать.** Игривые подтверждения, взаимодействия с маскотом, всё, где небольшая «резиновая» комедия подходит бренду. Не для утилитарных диалогов.

---

### 14. Сердцебиение

Сердцебиение — модалка бьётся дважды с мягким масштабом и замирает.

```css
@keyframes heartbeat {
  0%   { transform: scale(1); }
  14%  { transform: scale(1.15); }
  28%  { transform: scale(1); }
  42%  { transform: scale(1.15); }
  70%  { transform: scale(1); }
  100% { transform: scale(1); }
}

.overlay-heartbeat .modal {
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-heartbeat.open .modal {
  opacity: 1;
  animation: heartbeat 1s ease forwards;
}
```

**Когда использовать.** Подтверждения лайка/сохранения, приложения здоровья, всё, где «двойной удар» читается естественно.

---

### 15. Желе

Желейное покачивание — затухающий скос по обеим осям.

```css
@keyframes jello {
  0%, 100% { transform: skewX(0deg) skewY(0deg); }
  15%      { transform: skewX(-12.5deg) skewY(-12.5deg); }
  30%      { transform: skewX(6.25deg) skewY(6.25deg); }
  45%      { transform: skewX(-3.125deg) skewY(-3.125deg); }
  60%      { transform: skewX(1.5625deg) skewY(1.5625deg); }
  75%      { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
}

.overlay-jello .modal {
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-jello.open .modal {
  opacity: 1;
  animation: jello 1s ease forwards;
}
```

**Когда использовать.** Комедийные подтверждения, пасхалки, игривые продукты. Слишком «прыгуче» для серьёзных диалогов.

---

### 16. Зум с вращением

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

**Когда использовать.** Праздничные диалоги, шаги онбординга, анонсы продуктов. Вращение добавляет характер тому, что иначе было бы простым зумом.

---

### 17. Зум из угла

Модалка зумится из левого верхнего угла — комбинация `scale(0)` и `translate(-100%, -100%)`.

```css
.overlay-zoom-corner .modal {
  transform: scale(0) translate(-100%, -100%);
  transform-origin: top left;
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease;
}

.overlay-zoom-corner.open .modal {
  transform: scale(1) translate(0, 0);
  opacity: 1;
}
```

**Когда использовать.** Тултипы, раскрывающиеся из угловой иконки, поповеры, привязанные к углу, всё, где угол-источник визуально очевиден.

---

### 18. Поворот из левого нижнего

Модалка влетает с поворотом из левого нижнего угла через `rotate(-90deg) translateY(100%)`.

```css
.overlay-rotate-down-left .modal {
  transform-origin: left bottom;
  transform: rotate(-90deg) translateY(100%);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-rotate-down-left.open .modal {
  transform: rotate(0deg) translateY(0);
  opacity: 1;
}
```

**Когда использовать.** Раскрытие с поворотом от углового триггера, карточка, поднимающаяся от якоря в углу. Читается как петля, а не как скольжение.

---

### 19. Поворот из правого нижнего

Зеркало — поворот из правого нижнего угла.

```css
.overlay-rotate-down-right .modal {
  transform-origin: right bottom;
  transform: rotate(90deg) translateY(100%);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-rotate-down-right.open .modal {
  transform: rotate(0deg) translateY(0);
  opacity: 1;
}
```

**Когда использовать.** То же, что у эффекта 18, для RTL или с триггером справа.

---

### 20. Диагональ слева сверху

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

**Когда использовать.** Уведомления, чат-бабблы, всё, что привязано к левому верхнему углу экрана. Диагональ делает источник движения безошибочным.

---

### 21. Диагональ справа сверху

Зеркало «Диагонали слева сверху».

```css
.overlay-diagonal-top-right .modal {
  transform: translate3d(200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-top-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**Когда использовать.** Уведомления в правом верхнем углу, меню аккаунта, всё, что вызывается из верхней правой области интерфейса.

---

### 22. Диагональ слева снизу

Зеркало — влетает из левого нижнего угла.

```css
.overlay-diagonal-bottom-left .modal {
  transform: translate3d(-200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**Когда использовать.** Взаимодействия, привязанные к левому нижнему углу, вспомогательные диалоги, попапы рядом с триггером.

---

### 23. Диагональ справа снизу

Влетает из правого нижнего угла.

```css
.overlay-diagonal-bottom-right .modal {
  transform: translate3d(200%, 200%, 0) rotate(45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**Когда использовать.** Чат-виджеты, всплывающие подсказки поддержки, оверлеи, привязанные к правому нижнему углу.

---

### 24. Оригами Л → П

Модалка раскрывается из левого верхнего угла со скосом, как бумага, разворачивающаяся из сгиба.

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

**Когда использовать.** Творческие инструменты, редакционные страницы, игровые продукты. Скос даёт эффекту характер — он не выглядит как стоковая анимация.

---

### 25. Оригами П → Л

Зеркало эффекта 24 — раскрывается из правого верхнего угла.

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

**Когда использовать.** Те же сценарии, что у эффекта 24, но зеркально. Полезно для RTL-интерфейсов или когда модалка открывается с правой стороны.

---

### 26. Скос + проявление

Модалка входит под скосом 40° и в полмасштаба, затем выпрямляется и проявляется.

```css
.overlay-skew .modal {
  transform: skewX(40deg) scale(0.5);
  opacity: 0;
  transition:
    transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-skew.open .modal {
  transform: skewX(0deg) scale(1);
  opacity: 1;
}
```

**Когда использовать.** Редакционные модалки с динамичным наклоном, показы функций, карточки, которые должны ощущаться «брошенными в поле зрения».

---

### 27. Скорость света

Вход на скорости света — модалка влетает справа с сильным `skewX(-30deg)`.

```css
.overlay-light-speed .modal {
  transform: translate3d(100%, 0, 0) skewX(-30deg);
  opacity: 0;
  transition:
    transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.6s ease;
}

.overlay-light-speed.open .modal {
  transform: translate3d(0, 0, 0) skewX(0deg);
  opacity: 1;
}
```

**Когда использовать.** Быстрые диалоги, панели «быстрых действий», всё, что должно ощущаться *прибывшим со скоростью*. Хорошо сочетается с флешем или свайпом.

---

### 28. Отскок

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

**Когда использовать.** Заметные уведомления, cookie-баннеры, рекламные модалки. Громко по замыслу — не для утилитарных диалогов.

---

### 29. Отскок сверху

Keyframes-отскок сверху — модалка падает, перелетает точку и успокаивается.

```css
@keyframes bounceInDown {
  0%   { transform: translateY(-300px); opacity: 0; }
  60%  { transform: translateY(25px);   opacity: 1; }
  75%  { transform: translateY(-10px);  opacity: 1; }
  90%  { transform: translateY(5px);    opacity: 1; }
  100% { transform: translateY(0);      opacity: 1; }
}

.overlay-bounce-down .modal {
  transform: translateY(-300px);
  opacity: 0;
}

.overlay-bounce-down.open .modal {
  opacity: 1;
  animation: bounceInDown 0.9s ease forwards;
}
```

**Когда использовать.** Модалки-выпадашки из шапки, баннеры-уведомления, тосты, которые должны приземлиться мягко.

---

### 30. Отскок снизу

Зеркало «Отскока сверху» — модалка отскакивает снизу.

```css
@keyframes bounceInUp {
  0%   { transform: translateY(300px);  opacity: 0; }
  60%  { transform: translateY(-25px);  opacity: 1; }
  75%  { transform: translateY(10px);   opacity: 1; }
  90%  { transform: translateY(-5px);   opacity: 1; }
  100% { transform: translateY(0);      opacity: 1; }
}

.overlay-bounce-up .modal {
  transform: translateY(300px);
  opacity: 0;
}

.overlay-bounce-up.open .modal {
  opacity: 1;
  animation: bounceInUp 0.9s ease forwards;
}
```

**Когда использовать.** Action sheet’ы, мобильные диалоги, всё, что должно ощущаться «выпрыгнувшим» снизу.

---

### 31. Перспектива 3D

Модалка приближается издалека с лёгким наклоном вперёд, который выпрямляется на месте.

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

**Когда использовать.** Главные диалоги, онбординг, всё, что заслуживает неразделённого внимания. Читается как *приближение к зрителю* из глубины.

---

### 32. Выпуклость

Модалка начинается как маленький круглый пузырь, раздувается в карточку и приобретает рельефную тень — как надувающийся шар.

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

**Когда использовать.** Карточки товаров, акценты на функциях, взаимодействия-раскрытия. Мягче пружины, органичнее зума — морфинг border-radius здесь ключевой.

---

### 33. Флип X

Модалка стартует развёрнутой от зрителя и поворачивается лицом вокруг горизонтальной оси.

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

**Когда использовать.** Просмотр карточек, взаимодействия «переверни, чтобы увидеть». Лучше всего работает, когда у триггера уже есть метафора флипа.

---

### 34. Флип Y → Масштаб

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

**Когда использовать.** Превью продуктов, карточки изображений, всё, где горизонтальный флип связывает триггер с контентом.

---

### 35. Флип Y ← Масштаб

Зеркало эффекта 34. Флип идёт справа налево.

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

**Когда использовать.** Зеркальная пара к эффекту 34 — пригодится, когда на странице два триггера с противоположных сторон, и их появления должны ощущаться разными.

---

### 36. Двойной флип

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

**Когда использовать.** Показы новых функций, праздничные диалоги — там, где модалка в центре внимания и может позволить себе быть драматичной.

---

### 37. Разворот вниз

Модалка разворачивается вертикально через `scaleY(0)` от верхнего края — визуально разворачивается вниз.

```css
.overlay-unfold-bottom .modal {
  transform: scaleY(0);
  transform-origin: top center;
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease;
}

.overlay-unfold-bottom.open .modal {
  transform: scaleY(1);
  opacity: 1;
}
```

**Когда использовать.** Меню, выпадашки, панели, визуально «вытягивающиеся» из триггера сверху. Хорошо сочетается с иконкой-кареткой.

---

### 38. Разворот вверх

Модалка раскрывается снизу вверх, петля на `transform-origin: bottom center`.

```css
.overlay-unfold-up .modal {
  transform-origin: bottom center;
  transform: rotateX(100deg);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.5s ease;
}

.overlay-unfold-up.open .modal {
  transform: rotateX(0deg);
  opacity: 1;
}
```

**Когда использовать.** Bottom action sheet’ы с метафорой петли, палитры, поднимающиеся из нижнего тулбара.

---

### 39. Горизонтальное разворачивание

Модалка разворачивается горизонтально через `scaleX(0)` от левого края.

```css
.overlay-unfold-horizontal .modal {
  transform: scaleX(0);
  transform-origin: left center;
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease;
}

.overlay-unfold-horizontal.open .modal {
  transform: scaleX(1);
  opacity: 1;
}
```

**Когда использовать.** Боковые панели, «вытягивающиеся» от левого якоря, редакционные раскрытия, карточки прогресса.

---

### 40. Размытие в фокус

Модалка проявляется из размытия — старт с `blur(20px)` и `scale(1.2)`, финиш — резкость.

```css
.overlay-blur .modal {
  filter: blur(20px);
  transform: scale(1.2);
  opacity: 0;
  transition:
    filter 0.8s ease,
    transform 0.8s ease,
    opacity 0.6s ease;
}

.overlay-blur.open .modal {
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
}
```

**Когда использовать.** «Раскрытие из мягкости» — сны, кинематографичные интро продуктов, всё, где модалка должна «проявиться в фокус». `filter: blur()` на крупном элементе дорог на слабых мобильных — проверьте на целевых устройствах.

---

## Как выбрать эффект

Сначала выбирайте семейство, потом конкретный эффект.

| Если триггер — это...              | Присмотритесь к...                 |
|------------------------------------|------------------------------------|
| Текстовая ссылка или заголовок     | Семейство «рулон» (1–4)            |
| Боковая панель или ящик            | Скольжение + рулон (5–8)           |
| Успех или подтверждение            | Пружина (12), Зум с вращением (16) |
| Главное действие                   | Перспектива 3D (31)                |
| Карточка или редактор              | Оригами (24, 25), Выпуклость (32)  |
| Уведомление или баннер             | Отскок (28), Резинка (13)          |
| Привязка к углу экрана             | Диагональ (20–23)                  |
| Триггер «переверни, чтобы увидеть» | Флип (33–36)                       |
| Вращающееся появление              | Вкат (10, 11)                      |
| Панель, которая «вытягивается»     | Разворачивание (37, 39)            |
| Петля сверху или снизу             | Разворот вверх (38)                |
| Игривый / маскотный момент         | Сердцебиение (14), Желе (15)       |
| Поворот от угла                    | Rotate In Down (18, 19)            |
| «Раскрытие из мягкости»            | Размытие в фокус (40)              |

---

## Использование CSS-библиотеки

Репозиторий также содержит эффекты в виде самостоятельной CSS-библиотеки,
независимой от демо-приложения. Предоставляются три файла:

| Файл                    | Назначение                                    |
|-------------------------|-----------------------------------------------|
| `modal-effects.css`     | Неминифицированный — для разработки и разбора |
| `modal-effects.min.css` | Минифицированный — для продакшена             |
| `modal-effects.scss`    | SCSS-исходник — для кастомизации              |

### Подключение

Подключите минифицированную сборку напрямую из репозитория:

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/alekstar79/modal-effects/main/modal-effects.min.css">
```

Или скачайте файл и подключите локально:

```html
<link rel="stylesheet" href="/path/to/modal-effects.min.css">
```

### Разметка

Оберните модалку в `.overlay` с классом эффекта. Внутри — `.modal` с любым
содержимым.

```html
<button id="open">Открыть</button>

<div class="overlay overlay-spring" id="modal">
  <div class="modal">
    <h2>Заголовок</h2>
    <p>Контент</p>
    <button id="close">Закрыть</button>
  </div>
</div>
```

### Поведение

Переключайте класс `open` на оверлее. Больше ничего не нужно.

```js
const overlay = document.getElementById('modal')

document.getElementById('open').addEventListener('click', () => {
  overlay.classList.add('open')
})

document.getElementById('close').addEventListener('click', () => {
  overlay.classList.remove('open')
})

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) overlay.classList.remove('open')
})
```

### Приоритет слоя

Библиотека живёт в собственном CSS-слое `modal-effects`, так что вы можете
управлять тем, побеждает ли она ваши стили или проигрывает им. Объявите порядок до
импорта:

```css
@layer reset, base, modal-effects, components, utilities;
@import 'modal-effects.css';
```

Слои, объявленные позже, побеждают. Всё, что не помещено в слой, всегда
побеждает любой слой — ваши проектные переопределения не нуждаются в `!important`.

### Кастомизация

SCSS-исходник отдаёт значения по умолчанию в виде переменных. Переопределите
их перед компиляцией:

```scss
@use 'modal-effects' with (
  $overlay-bg:    rgba(0, 0, 0, 0.8),
  $modal-radius:  12px,
  $modal-padding: 24px
);
```

Доступные переменные: `$overlay-bg`, `$overlay-padding`, `$overlay-z`,
`$overlay-fade`, `$modal-bg`, `$modal-radius`, `$modal-max-width`,
`$modal-padding`, `$modal-shadow`, `$ease-back`, `$ease-spring`,
`$ease-swing`, `$ease-roll`.

Компиляция SCSS стандартным `sass` CLI:

```bash
sass modal-effects.scss modal-effects.css --style=expanded --no-source-map
sass modal-effects.scss modal-effects.min.css --style=compressed --no-source-map
```

---

## Доступность

- Каждая модалка — `role="dialog"` с `aria-modal="true"` и
  `aria-labelledby`, указывающим на её заголовок.
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
