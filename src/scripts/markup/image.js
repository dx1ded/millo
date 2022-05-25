export const imageMarkup = ({ url, alt }) => {
  const [filename] = url.split(".")

  return (`
    <picture>
      <source srcset="${filename}.avif" type="image/avif">
      <source srcset="${filename}.webp" type="image/webp">
      <img src="${url}" alt="${alt}">
    </picture>
  `)
}
