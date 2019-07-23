
exports.up = (knex, Promise) => {
    return knex.schema.createTable('pets', (table) => {
        table.increments();
        table.string('name').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('pets');
}
