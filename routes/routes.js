/**
 * Project Routes
 */
App.get('/', middlewares.isLoggedin, controllers.dashboard.index);

App.get('/login',controllers.login.index);

App.get('/test',controllers.TestController.index);

App.post('/loginuser',controllers.login.loginUser);

App.get('/dashboard',controllers.dashboard.test);