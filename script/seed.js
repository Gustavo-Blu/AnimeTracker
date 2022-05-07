'use strict';

const { db, User, Artist, Song, Show, Playlist } = require('../server/db');
const allUsers = require('./userData');
const allArtists = require('./artistData');
const allSongs = require('./songData');
const allShows = require('./showData');
const allPlaylists = require('./playlistData');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  // const users = await Promise.all([
  //   User.create({ username: 'cody', password: '123' }),
  //   User.create({ username: 'murphy', password: '123' }),
  // ]);
  let users = {};
  let artists = {};
  let songs = {};
  let shows = {};
  let playlists = {};

  for (let key in allUsers) {
    users[key] = await User.create(allUsers[key]);
  }
  for (let key in allArtists) {
    artists[key] = await Artist.create(allArtists[key]);
  }
  for (let key in allSongs) {
    songs[key] = await Song.create(allSongs[key]);
  }
  for (let key in allShows) {
    shows[key] = await Show.create(allShows[key]);
  }
  for (let key in allPlaylists) {
    playlists[key] = await Playlist.create(allPlaylists[key]);
  }

  // console.log(users);

  //user associations
  users.Gus.setArtists(Object.values(artists));
  users.Gus.setSongs(Object.values(songs));
  users.Gus.setShows(Object.values(shows));
  users.Gus.setPlaylists(Object.values(playlists));

  //shows associations
  shows.fmab.setSongs([
    songs.again,
    songs.hologram,
    songs.goldenTimeLover,
    songs.uso,
    songs.letItOut,
    songs.tsunaideTe,
  ]);
  shows.flcl.setSongs([
    songs.oneLife,
    songs.instantMusic,
    songs.happyBivouac,
    songs.runnersHigh,
    songs.carnival,
    songs.rideOnAShootingStar,
  ]);
  shows.progressive.setSongs([songs.spikySeeds]);
  shows.alternative.setSongs([songs.starOverhead]);
  shows.kingsGame.setSongs([songs.feedTheFire, songs.lostParadise]);

  //artist associations
  artists.thePillows.setSongs([
    songs.oneLife,
    songs.instantMusic,
    songs.happyBivouac,
    songs.runnersHigh,
    songs.carnival,
    songs.rideOnAShootingStar,
    songs.spikySeeds,
    songs.starOverhead,
  ]);
  artists.coldrain.setSongs([songs.feedTheFire]);
  artists.yui.setSongs([songs.again]);
  artists.nicoTouchesTheWalls.setSongs([songs.hologram]);
  artists.sukimaSwitch.setSongs([songs.goldenTimeLover]);
  artists.sid.setSongs([songs.uso]);
  artists.mihoFukuhara.setSongs([songs.letItOut]);
  artists.lilB.setSongs([songs.tsunaideTe]);
  artists.pile.setSongs([songs.lostParadise]);

  //playlist associations
  playlists.openings.setSongs([
    songs.again,
    songs.hologram,
    songs.goldenTimeLover,
    songs.oneLife,
    songs.instantMusic,
    songs.happyBivouac,
    songs.runnersHigh,
    songs.carnival,
    songs.feedTheFire,
  ]);
  playlists.endings.setSongs([
    songs.uso,
    songs.letItOut,
    songs.tsunaideTe,
    songs.rideOnAShootingStar,
    songs.spikySeeds,
    songs.starOverhead,
    songs.lostParadise,
  ]);
  playlists.allSongs.setSongs(Object.values(songs));

  console.log(`seeded users`);
  console.log(`seeded artists`);
  console.log(`seeded songs`);
  console.log(`seeded shows`);
  console.log(`seeded playlists`);
  console.log(`seeded successfully`);

  return {
    users,
    artists,
    songs,
    shows,
    playlists,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
