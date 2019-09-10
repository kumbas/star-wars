import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const data = {
      people: {
        id,
        name: payload.name,
        gender: payload.gender,
        height: payload.height,
        mass: payload.mass === 'unknown' ? 0 : payload.mass,
      }
    };

    return this._super(store, primaryModelClass, data, id, requestType);
  }
});
