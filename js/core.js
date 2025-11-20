const $ = {
    bodyClassAdd: c => $.el('body').classList.add(c),
    el: s => document.querySelector(s),

  };

const help = new Help({
  commands: CONFIG.commands,
});

new start ({
  toggleHelp: help.toggle,
});
