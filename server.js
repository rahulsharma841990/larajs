/*
    Start EJS Server File
 */

var express         = require('express');
global.basepath     = require('app-root-path');
var bodyParser      = require('body-parser');
global.App          = express();
var mysql           = require('mysql');
global.session      = require('express-session');
var sessionConfig   = require('./config/session');
var path            = require('path');
App.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
App.use(bodyParser.json());
require('./bootstrap/services');
App.use(session(sessionConfig));

App.use(express.static(path.join(__dirname, 'public')));

App.set('view engine','ejs');

App.listen(3000);

console.log('3000 is listining port.');

// return true;

/**
 * Electron Code
 */
const electron = require('electron')
var dialog = require('electron').dialog
const ElectApp = electron.app
const BrowserWindow = electron.BrowserWindow
global.Menu = electron.Menu
const options = {
    type: 'info',
    title: 'Information',
    message: "This is an information dialog. Isn't it nice?",
    buttons: ['Ok']
  }
global.template = require('./native/menu');

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({width: 800, height: 600, frame: true});
  mainWindow.setMenu(null);
  mainWindow.maximize();


  mainWindow.loadURL('http://localhost:3000/test');
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

ElectApp.on('ready', createWindow)
ElectApp.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    ElectApp.quit()
  }
})
