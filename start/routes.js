'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.post('banks', 'BankController.store')
    Route.get('banks', 'BankController.index')
    Route.get('banks/:id', 'BankController.show')
    Route.put('banks/:id', 'BankController.update')
    Route.delete('banks/:id', 'BankController.delete')
  }).prefix('api/v1')
