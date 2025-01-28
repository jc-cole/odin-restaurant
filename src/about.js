export function renderAbout(container) {

    let elements = {
        space: document.createElement("div"),
        title: document.createElement("blockquote"),
        mainContent: document.createElement("div"),
    }

    elements.space.className = "blank-space"

    elements.title.textContent = "The Visionary Behind Aqua Vitae"
    
    elements.mainContent.id = "main-content-2"

    
    let p1 = document.createElement("p")
    p1.textContent = "Meet Reginald Hydrous von Wettenham III, a man so committed to water that he once claimed to have been \"baptized in mineral springs and weaned on artisanal alpine runoff.\" A former water sommelier turned restaurateur, Reginald is known for his trademark monocle, his collection of 17th-century water pitchers, and his ability to describe the \"mouthfeel\" of H2O with the same intensity most people reserve for fine wines. His business card simply reads: \"Purveyor of Liquid Perfection | Hydration Architect | Water Whisperer\" Local rumors suggest he once challenged a competitor to a \"water tasting duel\" and won by detecting subtle notes of \"mountain serenity\" and \"glacial whispers\" in his selected specimen. Reginald\'s personal motto? \"Life is 70% water. I make that 100% extraordinary."
    elements.mainContent.appendChild(p1)

    for (const prop in elements) {
        container.appendChild(elements[prop])
    }

}