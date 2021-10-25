import { Row, Col, Style } from './utils';

class Block {
    constructor(type, value, options) {
        this.type = type
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('HTML must be realized')
    }
}

export class TitleBlock extends Block {
    constructor(type, value, options) {
        super(type, value, options);
    }
    toHTML() {
        //console.log(this.options)
        const { tag = 'h1', style } = this.options;
        return Row(Col(`<${tag}>${this.value}</${tag}>`), Style(style))
    }

}

export class ImageBlock extends Block {
    constructor(type, value, options) {
        super(type, value, options);
    }
    toHTML() {
        return Row(Col(`<img src="${this.value}" style="${Style(this.options.imgStyle)}">`), Style(this.options.style))
    }
}

export class TextBlock extends Block {
    constructor(type, value, options) {
        super(type, value, options);
    }
    toHTML() {
        return Row(Col(this.value), Style(this.options.style))
    }
}

export class ColumnsBlock extends Block {
    constructor(type, value, options) {
        super(type, value, options);
    }
    toHTML() {
        return Row(this.value.map(Col).join(''), Style(this.options.style))
    }
}