'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with boats
 */

const Boat = use('App/Models/Boat');
const Contact = use('App/Models/Contact');
const Route = use('App/Models/Route');
const BoatRoute = use('App/Models/BoatRoute');

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
    return Boat.query().with('contact').with('routes').fetch();
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

    await  contact.save(trx);
    boat.name = data.name;
    boat.contact_id = contact.id;
    await boat.save(trx) ;
    data.routes.forEach((routeItem)=>{
      const r = new Route();
      r.name =  routeItem.name;
      r.departure_city = routeItem.departureCity.id;
      r.arrival_city = routeItem.arrivalCity.id;
      r.departure_hour = routeItem.departureHour;
      r.arrival_hour = routeItem.arrivalHour;
      r.departure_day = routeItem.departureDay;
      r.arrival_day = routeItem.arrivalDay;
      r.departure_local = routeItem.departureLocal;
      r.arrival_local = routeItem.arrivalLocal;
      r.save(trx);
      const boatRoute = new BoatRoute();
      boatRoute.boat_id = boat.id ;
      boatRoute.route_id = r.id;
      
    });
    
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
