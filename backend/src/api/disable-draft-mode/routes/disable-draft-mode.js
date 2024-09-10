'use strict';

/**
 * disable-draft-mode router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::disable-draft-mode.disable-draft-mode');
