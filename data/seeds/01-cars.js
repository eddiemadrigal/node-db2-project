
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '1J99DLLOE0220', year: 2015, make: 'Honda', model: 'Accord', mileage: 103882 },
        { vin: '1OD88EJUSTTW9', year: 2017, make: 'Mercedes', model: 'C230', mileage: 104229 },
        { vin: '1K99DIIE9300S', year: 2016, make: 'Toyota', model: 'Corolla', mileage: 098448 }
      ]);
    });
};
