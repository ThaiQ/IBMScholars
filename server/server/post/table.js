
const postName = 'post';
const postTable = `
CREATE TABLE ${postName} (
    question varchar,
    description varchar
);
`;

module.exports = {
    postTable,
    postName
}