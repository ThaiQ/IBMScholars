const rewardName = 'reward';
const rewardTable = `
CREATE TABLE ${rewardName} (
    item varchar,
    price int,
    id int
);
`;

module.exports = {
    rewardTable,
    rewardName,
}