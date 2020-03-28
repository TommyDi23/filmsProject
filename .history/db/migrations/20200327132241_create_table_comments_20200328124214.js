exports.up = function(knex) {
  return knex.schema.createTable("comments", function(table) {
    table.increments("comment_id").primary();
    table
      .string("author")
      .references("users.username")
      .notNullable();
    table.integer("film_id");

    // .references("films.film_id");
    table.integer("votes").defaultTo(0);
    table.timestamp("created_at");
    table.text("body").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema(dropTable("comments"));
};
