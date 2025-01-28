
export function renderHome(container) {

    let elements = {
        space: document.createElement("div"),
        mainContent: document.createElement("div"),
    }

    

    for (const prop in elements) {
        container.appendChild(elements[prop])
    }
}

