import PostModel from './model';
import UserModel from '../user/model';
// const mockData = require('./mock.json');

export default {
  // create: (req, res) => {
  //   PostModel.create(mockData)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: err.message || 'Some error occurred while creating the posts.',
  //       });
  //     });
  // },
  recommend: (req, res) => {
    const { size = 5 } = req.query;

    PostModel.find()
      .limit(size)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while fetching recommend posts.',
        });
      });
  },
  findAll: (req, res) => {
    const { size = 10, user_id } = req.query;
    const conditions = user_id ? { user_id } : {};

    PostModel.find(conditions)
      .limit(size)
      .then((data) => {
        const newData = [];
        let currentIndex = 0;

        data.forEach((item) => {
          UserModel.findOne({ id: item.user_id }).then((user) => {
            item.set('user', user.toJSON(), { strict: false });
            newData.push(item);
            ++currentIndex;

            if (currentIndex === data.length) {
              res.send(newData);
            }
          });
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while fetching the post.',
        });
      });
  },
  findOne: (req, res) => {
    const { id } = req.params;

    PostModel.findOne({ id })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: 'Not found with id ' + id });
        } else {
          UserModel.findOne({ id: data.user_id }).then((user) => {
            data.set('user', user.toJSON(), { strict: false });
            res.send(data);
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while fetching the post.',
        });
      });
  },
};
