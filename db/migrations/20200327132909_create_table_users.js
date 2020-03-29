exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table
      .string("username")
      .unique()
      .primary();
    table.string("name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
