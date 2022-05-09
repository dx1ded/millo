import { select } from "./selectMarkup"

export const productCard = ({
  id, name, preview, image, price, rating, reviewsCount,
  chars, extent, weights, isPopular, isNew
}) => (`
  <article class="product product--sale">
    <div class="product__header">
      ${price.old ? "<span class='text text--xs sales-sign'>Скидки</span>" : ""}
      <div class="product__types">
        ${isPopular
          ? "<span class='text text--xs'>Популярное</span>"
          : ""
        }
        ${isNew
          ? "<span class='text text--xs'>Новый урожай</span>"
          : ""
        }
      </div>
      ${select(weights)}
    </div>
    <div class="product__content">
      <div class="product__image">
        <img src="${image.url}" alt="${image.alt}">
      </div>
      <div class="product__options">
        <div class="rating">
          <div class="rating__stars">
            ${new Array(5).fill().map((_, index) => (`
              <svg ${index === rating - 1 ? "class='current'" : ""}>
                <use xlink:href="assets/images/sprite.svg#star"></use>
              </svg>
            `)).reverse().join("")}
          </div>
          <span class="rating__text">
            <strong>${rating}.0</strong>&nbsp;
            (${reviewsCount} отзыва)
          </span>
        </div>
        <div class="beans">
          ${new Array(extent).fill().map(() => (`
            <svg>
              <use xlink:href="assets/images/sprite.svg#bean"></use>
            </svg>
          `)).join("")}
        </div>
        <div class="product-chars">
          ${Object.entries(chars).map(([name, value]) => (`
            <div class="char">
              <span class="text text--sm char__name">${name}</span>
              <div class="char__bullets">
                ${new Array(10).fill().map((_, index) => (`
                  <div ${index === value - 1 ? "class='current'" : ""}></div>
                `)).reverse().join("")}
              </div>
            </div>
          `)).join("")}
        </div>
      </div>
    </div>
    <div class="product__info">
      <h4 class="text text--md product__name">${name}</h4>
      <p class="text text--xs product__description">${preview}</p>
      <div class="product__wrapper">
        <div class="product-price">
          ${price.old
            ? `<del class="text text--md product-price__old">${price.old} &#8381;</del>`
            : ""
          }
          <ins class="product-price__current">${price.current} &#8381;</ins>
        </div>
        <a class="btn btn-reset btn--primary product__cta" href="product.html#${id}">Купить</a>
      </div>
    </div>
  </article>
`)
