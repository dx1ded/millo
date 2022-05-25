export const beans = (extent) => (
  extent
    ? `
       <div class="beans">
        ${new Array(extent).fill().map(() => (`
          <svg>
            <use xlink:href="assets/images/sprite.svg#bean"></use>
          </svg>
        `)).join("")}
        </div>`
    : ""
)
