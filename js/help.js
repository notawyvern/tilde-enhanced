class Help {
    constructor(options) {
      this._el = $.el('#help');
      this._commands = options.commands;
      this._buildAndAppendLists();
    }
  
    toggle(show) { $.bodyClassAdd('help'); }

    _buildAndAppendLists() {
      const lists = document.createElement('ul');
      lists.classList.add('categories');
  
      this._getCategories().forEach(category => {
        lists.insertAdjacentHTML(
          'beforeend',
          `<li class="category">
            <h2 class="category-name">${category}</h2>
            <ul>${this._buildListCommands(category)}</ul>
          </li>`
        );
      });
  
      this._el.appendChild(lists);
    }
  
    _buildListCommands(currentCategory) {

      const bgcolor = getComputedStyle(document.documentElement).getPropertyValue('--background')
      const fgcolor = getComputedStyle(document.documentElement).getPropertyValue('--foreground') 
      const commandListWithIcons =  this._commands
        .map(({ category, name, key, url, icon }, i) => { 
          const iconEl = CONFIG.iconExtension =
			`<img src='assets/icons/${icon}.png' height = 28px center;">`
  
          if (category === currentCategory) {
            return `
              <style>
                .command-key-${i} {
                  color: ${fgcolor}; 
                  background-color:${bgcolor};
                  border: 4px solid ${fgcolor}; 
                }   
              </style>
              <li class="command">
                <a href="${url}" target="_self">
                  <span class="command-key command-key-${i}">${iconEl}</span>
                  <span class="command-name">${name}</span>
                </a>
              </li>
            `;
          }
        })
        .join('');

      const commandListWithKeys = this._commands
        .map(({ category, name, key, url }, i) => {
          if (category === currentCategory) {
            return `
              <li class="command">
                <a href="${url}" target="_self">
                      <style>
                        .command-key-${i} {
                          color: ${fgcolor}; 
                          background-color:${bgcolor};
                          border: 4px solid ${fgcolor}; 
                        }   
                      </style>
                  <span class="command-key command-key-${i}">${key}</span>
                  <span class="command-name command-name-${i}">${name}</span>
                </a>
              </li>
            `;
          }
        })
        .join('');
  
      return commandListWithIcons;
    }
  
    _getCategories() {
      const categories = this._commands
        .map(v => v.category)
        .filter(category => category);
  
      return [...new Set(categories)];
    }
  
  }
