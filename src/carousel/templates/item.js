function price(property) {
  const showPrice = typeof property.sale_price !== 'undefined' ? `
    <div>
      <div class="crossed">
        NT$${property.price}
      </div>
      <div class="sale">
        NT$${property.sale_price}
      </div>
    </div>` : `
    <div>
      NT$${property.price}
    </div>`

  return showPrice
}

export const template = (property) => {
  return `
<li class="glide__slide">
  <div data-item-type="${property.type}">
    <a class="description" href="${property.link}?utm_source=rosetta" target="_blank" data-rosetta-local-item-id="${property.local_id}" data-rosetta-verifier="rosetta">
      <div>
      <div class="boxify-image" style="background-image:url(${property.image_link})">
      </div>
      <div>
        <div>
          <div data-max-height="45" class="name">
            ${property.name}
          </div>
          <div class="price">
            ${price(property)}
          </div>
        </div>
      </div>
    </a>
  </div>
</li>`
}
