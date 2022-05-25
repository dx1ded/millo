import { imageMarkup } from "./image"
import { select } from "./select"
import { beans } from "./beans"
import { ratingMarkup } from "./rating"
import { charsMarkup } from "./chars"

export const product = ({
  image,
  extent,
  name,
  isPopular,
  isNew,
  reviewsCount,
  rating,
  description,
  chars,
  weights,
  price
}) => (`
  <div class="product">
    <div class="product__image">
      ${imageMarkup(image)}
    </div>
    <div class="product__info">
      <div class="product__row">
        <div class="product__column">
          ${beans(extent)}
          <h2 class="product__name">${name}</h2>
          <p class="text text--sm product__type">Мытая, натуральная, смесь</p>
        </div>
        <div class="product__column">
          ${isPopular
            ? "<span class='text text--sm product__sign'>Популярное</span>"
            : ""
          }
          ${isNew
            ? "<span class='text text--sm product__sign'>Новый урожай</span>"
            : ""
          }
        </div>
      </div>
      ${ratingMarkup(rating, reviewsCount)}
      <div class="product__description">
        <p class="text text--sm">${description}</p>
        <button class="btn-reset text-more" id="text-more">Читать полностью</button>
      </div>
      ${charsMarkup(chars)}
      <form class="product-form">
        <fieldset class="product-form__options">
          ${weights.map((weight) => (`
            <label class="radio">
              <input
                class="visually-hidden radio__input"
                type="radio"
                aria-label="Вес ${weight}"
              >
              <span class="radio__visual"></span>
              ${weight} г.
            </label>
          `)).join("")}
        </fieldset>
        <div class="product-form__summary">
          ${select(weights)}
          <div class="counter">
            <input
              class="counter__display"
              type="number"
              value="1"
              min="1"
              max="99"
              required
            >
            <input
              class="btn-reset counter__action counter__action--decrement"
              type="button"
              value="-"
            >
            <input
              class="btn-reset counter__action counter__action--increment"
              type="button"
              value="+"
            >
          </div>
          <input type="submit" class="btn btn-reset btn--primary product__buy" value="Купить за ${price.current} ₽">
        </div>
      </form>
    </div>
  </div>
`)


export const productCard = ({
  id,
  name,
  preview,
  image,
  price,
  rating,
  reviewsCount,
  chars,
  extent,
  weights,
  isPopular,
  isNew
}) => (`
  <article class="product ${price.old ? "product--sale" : ""}">
    <div class="product__header">
      ${price.old
        ? "<span class='text text--xs sales-sign'>Скидки</span>"
        : ""
      }
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
        ${imageMarkup(image)}
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
              <span class="text text--xs char__name">${name}</span>
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
            ? `
              <del class="text text--md product-price__old">
                ${price.old} &#8381;
              </del>`
            : ""
          }
          <ins class="product-price__current">${price.current} &#8381;</ins>
        </div>
        <a class="btn btn-reset btn--primary product__cta" href="product.html?id=${id}">Купить</a>
      </div>
    </div>
  </article>
`)

export const productCardWide = ({
  id,
  name,
  preview,
  image,
  price,
  rating,
  reviewsCount,
  weights
}) => (`
  <article class="product product--wide">
    <div class="product__header">
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
      ${select(weights)}
    </div>
    <div class="product__content">
      <div class="product__image">
        ${imageMarkup(image)}
      </div>
    </div>
    <div class="product__info">
      <h4 class="text text--md product__name">${name}</h4>
      <p class="text text--xs product__description">${preview}</p>
      <div class="product__wrapper">
        <div class="product-price">
          <ins class="product-price__current">${price.current} &#8381;</ins>
        </div>
        <a class="btn btn-reset btn--primary product__cta" href="product.html?id=${id}">Купить</a>
      </div>
    </div>
  </article>
`)


export const productSlide = ({
  id,
  name,
  preview,
  image,
  price,
  rating,
  reviewsCount,
  chars,
  extent,
  weights,
  isPopular,
  isNew
}) => (`
  <article class="swiper-slide product product--sale">
    <div class="product__header">
      ${price.old
        ? "<span class='text text--xs sales-sign'>Скидки</span>"
        : ""
      }
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
        ${imageMarkup(image)}
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
              <span class="text text--xs char__name">${name}</span>
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
            ? `
              <del class="text text--md product-price__old">
                ${price.old} &#8381;
              </del>`
            : ""
          }
          <ins class="product-price__current">${price.current} &#8381;</ins>
        </div>
        <a class="btn btn-reset btn--primary product__cta" href="product.html?id=${id}">Купить</a>
      </div>
    </div>
  </article>
`)
