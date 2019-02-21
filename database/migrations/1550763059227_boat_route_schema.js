'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoatRouteSchema extends Schema {
  up () {
    this.create('boat_routes', (table) => {
      table.increments()
      table.integer('boat_id').unsigned()
      table.foreign('boat_id')
        .references('id')
        .inTable('boats')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      
      table.integer('route_id').unsigned()
        table.foreign('route_id')
          .references('id')
          .inTable('routes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      table.timestamps()
    })
  }

  down () {
    this.drop('boat_routes')
  }
}

module.exports = BoatRouteSchema
