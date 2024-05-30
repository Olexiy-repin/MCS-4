/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },

  changeName(newTitle) {
    if (newTitle.length <= 120) {
      this.name = newTitle;
    }
  },

  getTracksCount() {
    return this.tracks.length;
  },
};

playlist.updateRating(3);

playlist.changeName('New playlist');

console.log(playlist);

console.log(playlist.getTracksCount());
