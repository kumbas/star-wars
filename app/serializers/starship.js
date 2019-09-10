import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const data = {
      starships: {
        id,
        name: payload.name,
        created: payload.created,
        crew: payload.crew === 'unknown' ? 0 : payload.crew,
      }
    };

    return this._super(store, primaryModelClass, data, id, requestType);
  }
});
