import { http, HttpResponse } from 'msw';

const getMostPopularGames = http.get('http://localhost:3003/api/games/most-popular', () => {
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

const getGameById = http.get('http://localhost:3003/api/games/get-by-id', () => {
  return HttpResponse.json([
    [
      {
        "id": 72,
        "cover": {
          "id": 82660,
          "game": 72,
          "height": 1948,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1rs4.jpg",
          "width": 1461
        },
        "name": "Portal 2",
        "rating": 91.76163294183355,
        "slug": "portal-2",
        "summary": "Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Gun's mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs."
      }
    ],
    [
      {
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
      }
    ],
    [
      {
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
      }
    ]
  ]);
});

const deleteListById = http.delete('http://localhost:3003/api/lists/:id', () => {
  return new HttpResponse(null, { status: 200 })
});

const createList = http.post('http://localhost:3003/api/lists', () => {
  const mockedResponse = { "id": 6, "description": "Nova lista", "gameList": [{ "id": 5 }, { "id": 6 }] }

  return HttpResponse.json(mockedResponse)
});

export const handlers = [
  getMostPopularGames,
  getGameById,
  deleteListById,
  createList
];