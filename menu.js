const { Menu, shell } = require('electron');
const template = [
  {
    label: 'Control',
    submenu: [
      {
        label: 'Play',
        click() {
          console.log("Hello world")
        }
      },
      {
        label: 'List',
        click() {
        }
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'About Editor Component',
        click() {
          shell.openExternal('https://simplemde.com/');
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
module.exports = menu;