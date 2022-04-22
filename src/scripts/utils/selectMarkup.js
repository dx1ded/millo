export const select = (weights) => {
  const current = weights.splice(0, 1)

  return (`
    <div class="select">
      <span class="text text--xs select__display">${current}</span>
      <ul class="list-reset select-list">
        ${weights
          ? weights.map((element) => (`
              <li class="text text--xs select-list__item">${element}</li>
            `)).join("")
          : ""
        }
      </ul>
    </div>
  `)
}
