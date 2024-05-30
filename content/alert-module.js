export function alertMessage (text = "Hi!") {
  alert('alertMessage' + text);
}

export class TestClass {
  constructor() {
    this.loaderElement = document.createElement('div');
    const loaderSpan = document.createElement('span');
    this.loaderElement.appendChild(loaderSpan);
  }
}