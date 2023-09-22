export default (theme, fill, year) => `<section class="bottom-content content row">
  <div class="mobile-bar">
    <div class="line">
      <button class="support__button support__button--mobile mt-0 mb-3">
        Поддержка
      </button>
    </div>

    <div class="line socials flex--row justify-between">
      <a href="javascript:void(0)"><img src="../img/icons/dzen${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/telegram${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/bitsmedia${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/vk${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/vcru${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/twitter${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/pikabu${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/inst${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/facebook${theme}.svg" alt=""></a>
      <a href="javascript:void(0)"><img src="../img/icons/medium${theme}.svg" alt=""></a>
    </div>
  </div>

  <div class="level-top flex--row">
    <div class="wrapper flex--row">
      <div class="block__first flex--column">
        <p class="title">Об AWEX</p>

        <a href="javascript:void(0)">О нас</a>
        <a href="javascript:void(0)">Наша команда</a>
        <a href="javascript:void(0)">AWEX Блог</a>
        <a href="javascript:void(0)">База знаний</a>
        <a href="javascript:void(0)">FAQ</a>
      </div>

      <div class="block__second flex--column">
        <p class="title">Биржа</p>

        <a href="javascript:void(0)">Личный кабинет</a>
        <a href="javascript:void(0)">Торговля</a>
        <a href="javascript:void(0)">Обмен</a>
        <a href="javascript:void(0)">Тарифы</a>
        <a href="javascript:void(0)">Комиссии</a>
      </div>

      <div class="block__third flex--column">
        <p class="title">Документация</p>

        <a href="javascript:void(0)">Лицензия</a>
        <a href="javascript:void(0)">Пользовательское соглашение</a>
        <a href="javascript:void(0)">Политика конфиденциальности</a>
        <a href="javascript:void(0)">О рисках и соответствии нормам</a>
      </div>

      <div class="block__fourth flex--column">
        <p class="title">Узнать больше</p>

        <a href="javascript:void(0)">Как купить Bitcoin</a>
        <a href="javascript:void(0)">Как купить Etherium</a>
        <a href="javascript:void(0)">Как купить с карты</a>
        <a href="javascript:void(0)">Как работать с фьючерсами</a>
        <a href="javascript:void(0)">Купить крипто за фиат</a>
        <a href="javascript:void(0)">Криптоэквайринг для бизнеса</a>
      </div>
    </div>

    <div class="block__fifth flex--column">
      <p class="title">Сообщество</p>

      <div class="line">
        <a href="javascript:void(0)"><img src="../img/icons/dzen${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/telegram${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/bitsmedia${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/vk${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/vcru${theme}.svg" alt=""></a>
      </div>

      <div class="line">
        <a href="javascript:void(0)"><img src="../img/icons/twitter${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/pikabu${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/inst${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/facebook${theme}.svg" alt=""></a>
        <a href="javascript:void(0)"><img src="../img/icons/medium${theme}.svg" alt=""></a>
      </div>

      <div class="line">
        <button class="support__button">Поддержка</button>
      </div>
    </div>
  </div>

  <div class="level-bottom flex--column">
    <p class="title">Приложение AWEX</p>

    <div class="container flex--row pb-4">
      <div class="block__first d-flex">
        <a href="javascript:void(0)">
          <figure>
            <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="${fill}"
                d="M16.394 2C16.534 3.212 16.029 4.405 15.29 5.283C14.52 6.147 13.286 6.807 12.086 6.722C11.929 5.557
                12.537 4.317 13.218 3.561C13.988 2.701 15.325 2.044 16.394 2ZM20.233 8.509C20.091 8.589 17.879 9.849
                17.903 12.411C17.931 15.513 20.76 16.538 20.793 16.549C20.777 16.621 20.35 18.029 19.291 19.457C18.405
                20.715 17.476 21.945 16.003 21.967C15.303 21.983 14.829 21.791 14.336 21.592C13.822 21.384 13.286 21.167
                12.447 21.167C11.559 21.167 10.999 21.391 10.459 21.607C9.99198 21.793 9.54098 21.974 8.90398 21.999C7.50098
                22.049 6.42798 20.656 5.50998 19.409C3.67698 16.865 2.24898 12.236 4.16298 9.087C5.09098 7.542 6.78298 6.547
                8.59098 6.521C9.38698 6.505 10.151 6.797 10.821 7.052C11.333 7.248 11.79 7.422 12.164 7.422C12.493 7.422
                12.937 7.255 13.455 7.06C14.271 6.752 15.268 6.376 16.285 6.477C16.98 6.497 18.96 6.737 20.236 8.507L20.233 8.509Z"
              />
            </svg>

            <figcaption>
              AppStore
            </figcaption>
          </figure>
        </a>
      </div>

      <div class="block__second d-flex">
        <a href="javascript:void(0)">
          <figure>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="${fill}"
                d="M3.19603 20.8223L11.939 12.0953L3.19603 3.35228C2.98103 3.69928 2.83203 4.26228 2.83203
                5.07428V19.1003C2.83203 19.9113 2.98103 20.4743 3.19603 20.8223ZM15.63 15.7873L12.766 12.9073L4.25603
                21.4343H4.33903C5.06703 21.4343 5.69603 21.1693 6.70603 20.6233L15.63 15.7873ZM16.704 8.96528L13.591
                12.0953L16.704 15.2083L18.592 14.1813C19.287 13.8013 20.347 13.1053 20.347 12.0953C20.347 11.0683
                19.287 10.3723 18.592 9.99128L16.704 8.96528ZM4.25603 2.73828L12.766 11.2663L15.631 8.38628L6.70603
                3.55028C5.69603 3.00328 5.06703 2.73828 4.33903 2.73828H4.25603Z"
              />
            </svg>

            <figcaption>
              Google Play
            </figcaption>
          </figure>
        </a>
      </div>

      <div class="block__third d-flex">
        <figure>
          <img src="../img/icons/qr.svg" alt="">
          <figcaption>
            Скачать<br>приложение
          </figcaption>
        </figure>
      </div>
    </div>
  </div>

  <div class="copyright">
    <span class="brand">AWEX</span> Copyright <span class="year">${year}</span> <a href="javascript:void(0)">CRYPTO EXPLORER DMCC</a>
  </div>
</section>`
