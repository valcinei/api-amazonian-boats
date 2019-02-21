'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RouteSchema extends Schema {
  up () {
    this.create('routes', (table) => {
      table.increments().unique()
      table.string('name', 45).notNullable()

      table.integer('departure_city').unsigned()
        table.foreign('departure_city')
          .references('id')
          .inTable('cities')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      table.integer('arrival_city').unsigned()
        table.foreign('arrival_city')
          .references('id')
          .inTable('cities')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

      table.string('departure_hour', 45).notNullable()
      table.string('arrival_hour', 45).notNullable()
      table.enu('departure_day', ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
      table.enu('arrival_day', ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
      table.string('departure_local', 150).notNullable()
      table.string('arrival_local', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('routes')
  }
}

module.exports = RouteSchema