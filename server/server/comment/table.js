
const commentName = 'comment';
const commentTable = `
CREATE TABLE ${commentName} (
    question varchar,
    reply varchar,
    name varchar
);
`;

module.exports = {
    commentName,
    commentTable
}