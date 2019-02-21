'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Boat extends Model {
    
    static get hidden () {
        return ['created_at', 'updated_at', 'contact_id']
      }

    contact() {
        return this.belongsTo('App/Models/Contact');
    }
    
    routes() {
        return this.belongsToMany('App/Models/Route').pivotTable('boat_routes');
    }
}

module.exports = Boat
