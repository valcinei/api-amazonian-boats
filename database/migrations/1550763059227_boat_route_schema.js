'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoatRouteSchema extends Schema {
  up () {
    this.create('boat_routes', (table) => {
      table.integer('boat_id').unsigned()
      table.foreign('boat_id')
        .references('id')
        .inTable('boats')
        .onDelete('cascade')
        .onUpdate('cascade');
      
      table.integer('route_id').unsigned()
        table.foreign('route_id')
          .references('id')
          .inTable('routes')
          .onDelete('cascade')
          .onUpdate('cascade');
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('boat_routes')
  }
}

module.exports = BoatRouteSchema
