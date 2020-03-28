exports.up = function(knex) {
  return knex.schema.createTable("films", function(table) {
    table.increments("film_id").primary();
    table.string("title");
    table.integer("year_of_release");
    table.string("director");
    table.string("genre");
    table.float("avg_ratings");
    table.integer("up_votes").defaultTo(0);
    table.integer("down_votes").defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("films");
};
