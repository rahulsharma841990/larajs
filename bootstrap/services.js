/**
 *
 *  Bootstrap all the required components and files
 *
 *  Bootstraping:
 *  -Controllers
 *  -Model
 *  -Routes
 *  -Database
 *  -Views
 */

/**
 * Defining the controllers global variable
 */
global.controllers;


/**
 * Make available all the controllers for routws
 * @type {[type]}
 */
controllers = require('require-all')(basepath + '/app/Http/Controllers');


/**
 * Make available query builder in application
 */
require(basepath + '/config/builder');


/**
 * Defining the models global variable
 */
global.models;


/**
 * Make available all the models for controller and view
 * @type {object}
 */
models = require('require-all')(basepath + '/app');



/**
 * Defining middlewares for application
 */
global.middlewares;

/**
 * Make available all middlewares for routes
 * @type {object}
 */
middlewares = require('require-all')(basepath + '/app/Http/Middleware');


/**
 * Make available all routes for application
 */

require(basepath + '/routes/routes');

App.set('views',basepath + '/resources/views');