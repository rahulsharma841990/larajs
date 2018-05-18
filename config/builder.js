
/**
 * To get database configrations
 * @type {object}
 */
let settings;


/**
 * get database details from config
 * @type {[type]}
 */
settings = require(basepath + '/config/database');



/**
 * Define global variable db.
 */
global.db;


/**
 * Make available db variable in applicatin
 * @type {[type]}
 */
db = require('node-querybuilder').QueryBuilder(settings,'mysql','single');