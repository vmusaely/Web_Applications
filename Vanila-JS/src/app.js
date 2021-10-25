import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "./classes";

export class app {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this))
    this.update = updateCallback
  }
  get template() {
    return [
      block('Title'),
      block('Text')
    ].join('')
  }

  add(event) {
    event.preventDefault()
    const type = event.target.name;
    const value = event.target.value.value;
    const style = event.target.styles.value



    let newBlock = type === 'text'
      ? newBlock = new TextBlock(type, value, { style })
      : newBlock = new TitleBlock(type, value, { style })

    this.update(newBlock)

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}

function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Add</button>
    </form>
    <hr />
  `
}