'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RouteSchema extends Schema {
  up () {
    this.create('routes', (table) => {
      table.increments().unique()
      table.string('name', 45).notNullable()

      table.integer('derparture_city').unsigned()
        table.foreign('derparture_city')
          .references('id')
          .inTable('cities')
          .onDelete('cascade')
          .onUpdate('cascade');
      table.integer('arrival_city').unsigned()
        table.foreign('arrival_city')
          .references('id')
          .inTable('cities')
          .onDelete('cascade')
          .onUpdate('cascade');

      table.string('derparture_hour', 45).notNullable()
      table.string('arrival_hour', 45).notNullable()
      table.enu('derparture_day', ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
      table.enu('arrival_day', ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
      table.string('derparture_local', 150).notNullable()
      table.string('arrival_local', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('routes')
  }
}

module.exports = RouteSchema