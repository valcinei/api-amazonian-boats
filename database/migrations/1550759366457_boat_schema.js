'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoatSchema extends Schema {
  up () {
    this.create('boats', (table) => {
      table.increments().unique()
      table.string('name', 150).notNullable()
      table.integer('contact_id').unsigned()
        table.foreign('contact_id')
          .references('id')
          .inTable('contacts')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      table.timestamps()
    })
  }

  down () {
    this.drop('boats')
  }
}

module.exports = BoatSchema
