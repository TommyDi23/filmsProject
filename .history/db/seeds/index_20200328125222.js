const { userData, commentData } = require("../data/index");
const { formatDates } = require("../utils/utils");
exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("comments")
        .insert(commentData)
        .returning("*");
    })
    .then(() => {
      const formattedCommentsData = formatDates(commentData);
      return knex
        .insert(formattedCommentsData)
        .into("comments")
        .returning("*");
    });
};

//     .then(houseRows => {
//       // <-- do the rest of the seed logic here ...
//     });
// };
