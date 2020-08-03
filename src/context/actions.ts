import { RickEpisode, EpisodeProps, RickStateInterface } from "./interface";

export const fetchRicks = async (dispatch: any) => {
  const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const response = await fetch(URL);
  const data = await response.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: data._embedded.episodes,
  });
};

export const toggle = (state: RickStateInterface, dispatch: any, episode: RickEpisode) => {
  const espfav = state.favourites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };
  if (espfav) {
    const favEpisode: any = state.favourites.filter((esp: RickEpisode) => esp.id !== episode.id);
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favEpisode,
    };
  }
  return dispatch(dispatchObj);
};

export default {
  fetchRicks,
  toggle,
};
