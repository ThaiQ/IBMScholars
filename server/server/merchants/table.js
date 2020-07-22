
const merchantName = 'merchant';
const merchantTable = `
CREATE TABLE ${merchantName} (
    email varchar,
    name varchar,
    id int
);
`;

module.exports = {
    merchantTable,
    merchantName
}