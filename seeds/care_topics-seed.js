const  Care_Topics  = require('../models/Care_Topics');

const care_TopicsData = [
  {
    title: 'Allergy',
    description: 'Type of Allrgyes.',
    post_id: 1,
  },
];

const seedCare_Topics = () => Care_Topics.bulkCreate(care_TopicsData);

module.exports = seedCare_Topics;