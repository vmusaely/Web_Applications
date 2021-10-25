export function Row(row, style) {
    return `
    <div class="row" style="${style}">${row}</div>
    `
}

export function Col(col) {
    return `
    <div class="col-sm">${col}</div>
    `
}

export function Style(styleValue) {
    if (typeof styleValue === 'string') return styleValue
    return Object.keys(styleValue).map(styleName => {
        return `${styleName}: ${styleValue[styleName]}`
    }).join('; ')

}

export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    render(Model) {
        this.$el.innerHTML = ''
        Model.map(element => {
            this.$el.insertAdjacentHTML('beforeend', element.toHTML())
        })
    }
}

