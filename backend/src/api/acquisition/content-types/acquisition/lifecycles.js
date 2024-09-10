module.exports = {
  afterCreate(event) {
    const { result, model } = event;
    event.result.path = `/${result.locale}/landing/${model.info.singularName}/${result.carrier}`;
  },

  afterUpdate(event) {
    const { result, model } = event;
    event.result.path = `/${result.locale}/landing/${model.info.singularName}/${result.carrier}`;
  },
};
