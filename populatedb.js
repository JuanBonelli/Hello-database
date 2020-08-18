
const mongoose = require('mongoose');
const User = require('./models/User');
const db = 'mongodb+srv://HelloDatabase:HelloDatabase@cluster0.oganc.mongodb.net/Hellodb?retryWrites=true&w=majority';
const users = [
  {
    id: 1,
    name: 'Regina',
    mail: 'ReginaPhalange@mail.com',
    birthday: '2000-05-24'
  },
  {
    id: 2,
    name: 'Maximo',
    mail: 'MaximoCozzetti@mail.com',
    birthday: '2000-02-13'
  },
  {
    id: 3,
    name: 'Fulano',
    mail: 'FulanoDeTal@mail.com',
    birthday: '2000-05-19'
  },
  {
    id: 4,
    name: 'Carlos',
    mail: 'CarlosGardel@mail.com',
    birthday: '1890-12-11'
  }
];

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    User.insertMany(users, (err, users) => {
      if (err) throw err;
      console.log(`${users.length} documents inserted!`);
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));
