const { userData, commentData, filmData } = require("../data/index");
const { formatDates } = require("../utils/utils");
exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const userPromise = knex("users")
        .insert(userData)
        .returning("*");
      const commentPromise = knex("comments")
        .insert(formatDates(commentData))
        .returning("*");
      const filmPromise = knex("films")
        .insert(filmData)
        .returning("*");
      return Promise.all([userPromise, commentPromise, filmPromise]);
    });
};
