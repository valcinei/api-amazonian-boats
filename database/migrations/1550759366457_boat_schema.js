'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoatSchema extends Schema {
  up () {
    this.create('boats', (table) => {
      table.increments()
      table.string('name', 150).notNullable()
      table.foreign('contact_id')
        .references('id')
        .inTable('contacts')
        .onDelete('cascade')
        .onUpdate('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('boats')
  }
}

module.exports = BoatSchema
