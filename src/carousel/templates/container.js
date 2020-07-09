export const template = (options, elemItems) => {
  const elemLogo = (options.logo === true) ? `
  <a style="display: inline-block;vertical-align: top;padding-top: 2px;" href="https://www.rosetta.ai/?utm_source=client&amp;utm_medium=button" target="_blank">
    <img class="rosetta-logo" src="https://rosetta-ai.github.io/sdk.shopline/Rosetta.ai_Logo-01.png" style="width: 70px; vertical-align: text-top;">
  </a>` : ''

  return `
<div class="rosetta-carousel">
  <div class="title">
    ${options.title}
    ${elemLogo}
  </div>
  <div id="rosetta-container" >
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          ${elemItems}
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"> < </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"> > </button>
      </div>
    </div>
  </div>
</div>`
}
