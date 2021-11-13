'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  async findOne(getResult) {
    let res = await strapi.services.results.findOne({
      rollNumber:getResult.params.id
    });
    console.log(res);
    return res.scores;
  }

};
