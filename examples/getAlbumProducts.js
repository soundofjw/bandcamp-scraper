var bandcamp = require('../lib/index');

bandcamp.getAlbumProducts("http://joshwhelchel.com/album/oblitus", function(error, products) {
  if (error) {
    console.log(error);
  } else {
    console.log(products);
  }
});