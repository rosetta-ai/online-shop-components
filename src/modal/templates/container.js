export const template = (options, elemItems) => {
  let elemLogo = (options.logo === true) ? `
  &nbsp;<a class="quick-cart-item" style="display: inline-block;vertical-align: top;padding-top: 2px;" href="https://www.rosetta.ai/?utm_source=client&amp;utm_medium=button" target="_blank">
    <img class="rosetta-logo" src="https://rosetta-ai.github.io/sdk.shopline/Rosetta.ai_Logo-01.png" style="width: 70px; vertical-align: text-top;">
  </a>` : ''

  return `
<div class="global-primary">
  <div class="container-md-height" style="height: 100%; table-layout: fixed; width: 100%; margin-bottom: 2%;">
    <div class="row row-md-height" style="height: 100%;">
      <div class="item grid-products-item col-xs-12 col-md-12 col-md-height" style="vertical-align: top; height: 100%; text-align: center;">
        <p class="global-primary dark-primary section-title" style="margin: auto; color: #666; font-size: x-large; font-weight: bold;">
          ${options.title}
          ${elemLogo}
        </p>
      </div>
    </div>
    <div class="row row-md-height" style="height: 100%;">
      <div class="item grid-products-item col-xs-12 col-md-12 col-md-height" style="vertical-align: top; height: 100%;">
        <div style="height: 100%;">
          <div class="box-info">
            <div class="product-items-container quick-cart-container" id="rosetta-container" style="position:relative;">
              <div class="glide">
                <div class="glide__track" data-glide-el="track">
                  <ul class="glide__slides rosetta-container-inner">
                    ${elemItems}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}
