export const charsMarkup = (items) => (
  items
    ? `
      <div class="product__chars">
        ${Object.entries(items).map(([name, value]) => (`
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
    `
    : ""
)
