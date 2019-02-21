'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with boats
 */

const Boat = use('App/Models/Boat');
const Contact = use('App/Models/Contact');

const Database = use('Database');
class BoatController {
  /**
   * Show a list of all boats.
   * GET boats
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Boat.query().with('contact').fetch();
  }

  /**
   * Render a form to be used for creating a new boat.
   * GET boats/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  
  }

  /**
   * Create/save a new boat.
   * POST boats
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const trx = await Database.beginTransaction();

    const data = request.all();
    const boat = new Boat();
    const contact = new Contact();

    contact.name = data.contact.name;
    contact.phone_1 = data.contact.phone1;
    contact.phone_2 = data.contact.phone2;

    await  contact.save();
    boat.name = data.name;
    boat.contact_id = contact.id;
    await boat.save() ;
    return boat;
    await trx.commit();
    // if something gone wrong
    await trx.rollback

  }

  /**
   * Display a single boat.
   * GET boats/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing boat.
   * GET boats/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update boat details.
   * PUT or PATCH boats/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a boat with id.
   * DELETE boats/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BoatController
