export interface IGame {
  id: number;
  name: string;
  slug: string;
  summary: string;
  rating: number;
  cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
}

export enum GameCoverImageSizes {
  THUMB = 't_thumb',
  FULL_HD = 't_1080p',
  HD = 't_720p',
  MICRO = 't_micro',
  COVER_BIG = 't_cover_big',
}
