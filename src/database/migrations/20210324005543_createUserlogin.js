exports.up = function (knex) {
    return knex.schema.alterTable("users", function (table) {
        table.string("login").nullable();
        table.string("password_hash").nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropColumns(
        "login",
        "password_hash"
    );
};
