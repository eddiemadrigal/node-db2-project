
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 20)
      .unique()
      .notNullable();
    tbl.integer('year');
    tbl.string('make', 50);
    tbl.string('model', 50);
    tbl.integer('mileage')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cars');
};
