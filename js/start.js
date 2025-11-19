class Menu {
    constructor(options) {
      this._el = $.el('#start');
      this._delimiter = options.delimiter;
      this._el.addEventListener('click', options.toggleHelp);
      this._el.textContent = "/home/crh";
    }
}
