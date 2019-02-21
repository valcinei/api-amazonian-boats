'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BoatRoute extends Model {
    static get table () {
        return 'boat_routes'
      }
}

module.exports = BoatRoute
