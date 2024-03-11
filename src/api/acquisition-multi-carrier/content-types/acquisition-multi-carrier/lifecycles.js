module.exports = {
  afterCreate(event) {
    const { result, model } = event;
    event.result.path = `/${result.locale}/landing/${model.info.singularName}`;
  },

  afterUpdate(event) {
    const { result, model } = event;
    event.result.path = `/${result.locale}/landing/${model.info.singularName}`;
  },
};
