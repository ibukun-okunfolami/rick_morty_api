import React, { Fragment } from "react";
import { RickEpisode } from "../context/interface";
import { useLocation } from "@reach/router";

const EpisodeList: React.SFC = (props: any) => {
  const { episodes, toggle, favourites, store } = props;
  const { state, dispatch } = store;

  const location = useLocation();

  let noItem: any;

  if (location.pathname === "/faves" && favourites.length <= 0) {
    noItem = <p className="no-item">No Saved Favourites</p>;
  }

  return (
    <Fragment>
      {noItem}
      {episodes.map((episode: RickEpisode) => (
        <section key={episode.id} className="episode-box">
          <img src={episode.image.medium} alt={`Rick & Mort ${episode.name}`} />
          <section>
            <div className="btn">
              <div>
                <div>{episode.name}</div>
                Season:{episode.season} Episode:{episode.number}
              </div>
              <i
                className={`love-size ${favourites.find((fav: RickEpisode) => fav.id === episode.id) ? "fas fa-heart" : "far fa-heart"}`}
                onClick={() => toggle(state, dispatch, episode)}
              ></i>
            </div>
          </section>
        </section>
      ))}
    </Fragment>
  );
};

export default EpisodeList;
