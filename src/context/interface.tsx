export type Dispatch = React.Dispatch<RickActions>;

export interface RickStateInterface {
  episodes: Array<RickEpisode>;
  favourites: Array<RickEpisode>;
}

export interface RickActions {
  type: string;
  payload: Array<RickEpisode> | any;
}

export interface RickEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface EpisodeProps {
  episodes: Array<RickEpisode>;
  store: { state: RickStateInterface; dispatch: Dispatch };
  toggle: (state: RickStateInterface, dispatch: Dispatch, episode: RickEpisode) => RickActions;
  favourites: Array<RickEpisode>;
}
