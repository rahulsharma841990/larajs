/**
 *
 * Setup Express Session
 */
module.exports = {


    /**
     * Set your session secret key
     * @type {String}
     */
    secret: 'q9WdRRMGM68USa0UyCcZ9FwId84zsPGk',



    /**
     * Name of your cookie to set 
     * @type {String}
     */
    name: 'node-app',



    /**
     * To enable session proxy
     * @type {Boolean}
     */
    proxy: true,



    /**
     * To resave application session data
     * @type {Boolean}
     */
    resave: true,




    /**
     * Save session which is not initialized
     * @type {Boolean}
     */
    saveUninitialized: true
}