/**
 * Native application menu
 */
module.exports = [
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'Viewsss',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More          Ctrl+G',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      },
      {
        label: 'Testing',
        click () {
            dialog.showMessageBox(options);
            var child = new BrowserWindow({parent: mainWindow});
            child.loadURL('http://google.com');
            child.setAlwaysOnTop(true);
            child.show();
        }
      }
    ]
  }
]