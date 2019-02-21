'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Boat extends Model {
    routes() {
        return this.belongsToMany('App/Models/Route');
    }
}

module.exports = Boat
