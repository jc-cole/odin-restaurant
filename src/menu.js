export function renderMenu(container) {

    let elements = {
        space: document.createElement("div"),
        quote: document.createElement("blockquote"),
        quoteAttribution: document.createElement("p"),
        mainContent: document.createElement("div"),
    }

    elements.space.className = "blank-space"

    elements.quote.textContent = "\" We literally only serve water. \""
    
    elements.quoteAttribution.id = "quote-attribution"
    elements.quoteAttribution.textContent = "- John Water"
    
    elements.mainContent.id = "main-content"

    let menu = document.createElement("div")
    menu.id = "menu"
    elements.mainContent.appendChild(menu)

    let menuTitle = document.createElement("h2")

    menuTitle.textContent = "Menu"
    menu.appendChild(menuTitle)

    let menuItem = document.createElement("h3")
    menuItem.textContent = "Water"
    menu.appendChild(menuItem)

    let menuItemDescription = document.createElement("p")
    menuItemDescription.textContent = "Sourced from the pristine depths of an ancient glacial aquifer,\
     this life-giving elixir has been meticulously filtered through layers of prehistoric\
      limestone and rare earth minerals. Each molecule of H2O has been carefully curated \
      to ensure optimal molecular alignment, resulting in a truly transcendent gustatory \
      experience. Our sommelier recommends savoring this liquid masterpiece at precisely \
      7.3°C (45.14°F) to fully appreciate its subtle notes of crisp mountain air and whispers\
       of morning dew. The mouthfeel is ethereal - simultaneously robust yet gossamer-light, \
       with a TDS (Total Dissolved Solids) level that will titillate even the most sophisticated\
        palate."
    menu.appendChild(menuItemDescription)

    let image = document.createElement("div")
    image.id = "image"
    elements.mainContent.appendChild(image)

    for (const prop in elements) {
        container.appendChild(elements[prop])
    }
}