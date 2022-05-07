const { User } = require('../server/db');

module.exports = {
  Gus: {
    username: 'blu',
    password: 'ydouneedtoknow1',
    email: 'gustavoallen92@gmail.com',
    isAdmin: true,
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b2734465e20d27519e1b9dacf366',
  },
  Andy: { username: 'Andy4545', password: 'Andy123', email: 'Andy@gmail.com' },
  Oscar: {
    username: 'Oscar_prod',
    password: 'Oscar123',
    email: 'Oscar@gmail.com',
    isAdmin: false,
    imageUrl:
      'https://www.universetoday.com/wp-content/uploads/2020/06/STScI-H-p2031b-m-2000x1778-1-1280x720.jpg',
  },
  Drew: {
    username: 'JustDrew',
    password: 'Drew123',
    email: 'Drew@gmail.com',
    isAdmin: false,
  },
};
