export const ratingMarkup = (rating, reviewsCount) => (`
  <div class="rating">
    <div class="rating__stars">
      ${new Array(5).fill().map((_, index) => (`
        <svg ${index === rating - 1 ? "class='current'" : ""}>
          <use xlink:href="assets/images/sprite.svg#star"></use>
        </svg>
      `)).reverse().join("")}
    </div>
    <span class="rating__text">
      <strong>${rating}.0</strong>&nbsp;(${reviewsCount} отзыва)
    </span>
  </div>
`)
