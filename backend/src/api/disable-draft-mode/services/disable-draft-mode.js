'use strict';

/**
 * disable-draft-mode service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disable-draft-mode.disable-draft-mode');
