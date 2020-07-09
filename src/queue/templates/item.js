function price(property) {
  let showPrice = typeof property.sale_price !== 'undefined' ? `
    <div>
      <div class = "global-primary dark-primary price price-crossed">
        NT$${property.price}
      </div>
      <div class="price-sale price ">
        NT$${property.sale_price}
      </div>
    </div>` : `
    <div class="global-primary dark-primary price">
      NT$${property.price}
    </div>`

  return showPrice
}

export const template = (property) => {
  return `
<div class="product-item col-xs-6 col-md-3" data-item-type="${property.type}">
  <a href="${property.link}" class="quick-cart-item" target="_blank" data-rosetta-local-item-id="${property.local_id}" data-rosetta-verifier="rosetta">
    <div class="boxify-image-wrapper">
      <div class="boxify-image center-contain sl-lazy-image" style="background-image:url(${property.image_link})">
      </div>
    </div>
    <div class="info-box">
      <div class="info-box-inner-wrapper">
        <div class="title text-primary-color title-container ellipsis" data-max-height="45">
          ${property.name}
        </div>
        <div class="quick-cart-price">
          ${price(property)}
        </div>
      </div>
    </div>
  </a>
</div>`
}
