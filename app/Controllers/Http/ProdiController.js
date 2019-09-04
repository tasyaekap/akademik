'use strict'
const Prodi = use('App/Models/Prodi')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with prodis
 */
class ProdiController {
  /**
   * Show a list of all prodis.
   * GET prodis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let prodi = await Prodi.all()
    return response.json(prodi)
  }

  

  /**
   * Create/save a new prodi.
   * POST prodis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const nm_prodi = request.input('nm_prodi')

    const prodi = new Prodi()
    
    prodi.nm_prodi = nm_prodi


    await prodi.save()
    return response.json(prodi)

  }

 

  /**
   * Update prodi details.
   * PUT or PATCH prodis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const prodi = await Prodi.find(params.id)

    const nm_prodi = request.input('nm_prodi')

    const prodi = new Prodi()
    
    prodi.nm_prodi = nm_prodi


    await prodi.save()
    return response.json(prodi)
  }

  /**
   * Delete a prodi with id.
   * DELETE prodis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const prodi = await Prodi.find(params.id)
    await prodi.delete()
    return response.json({message : 'Data Deleted!'})
  }
}

module.exports = ProdiController
