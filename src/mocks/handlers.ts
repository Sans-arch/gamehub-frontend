import { http, HttpResponse } from 'msw';



const getMostPopularGames = http.get('http://localhost:3003/api/games/most-popular', ({ request }) => {
  // console.log('Request INTERCEPTADA pelo MWS: http://localhost:3003/api/games/most-popular');
  const mockedGames = [{
    "id": 1020,
    "cover": {
      "id": 120937,
      "game": 1020,
      "height": 1580,
      "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2lbd.jpg",
      "width": 1185
    },
    "name": "Grand Theft Auto V",
    "rating": 89.88782798407868,
    "slug": "grand-theft-auto-v",
    "summary": "Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story."
  }, {
    "id": 1942,
    "cover": {
      "id": 89386,
      "game": 1942,
      "height": 1559,
      "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1wyy.jpg",
      "width": 1170
    },
    "name": "The Witcher 3: Wild Hunt",
    "rating": 94.36538432301626,
    "slug": "the-witcher-3-wild-hunt",
    "summary": "RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing."
  }]

  return HttpResponse.json(mockedGames)
});


export const handlers = [
  getMostPopularGames
];