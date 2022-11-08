import UserModel from './model';
// const mockData = require('./mock.json');

export default {
  // create: (req, res) => {
  //   UserModel.create(mockData)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: err.message || 'Some error occurred while creating the users.',
  //       });
  //     });
  // },
  recommend: (req, res) => {
    const { size = 5 } = req.query;

    UserModel.find()
      .limit(size)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while fetching recommend users.',
        });
      });
  },
};
