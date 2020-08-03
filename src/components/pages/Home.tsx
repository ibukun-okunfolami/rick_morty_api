import React, { useEffect, useContext, Fragment, Suspense, lazy } from "react";
import { RickEpisode, EpisodeProps } from "../../context/interface";
import { RickContext } from "../../context/rickState";
import actions, { toggle } from "../../context/actions";

const EpisodeLists = lazy<any>(() => import("../app"));

const Home = () => {
  const { state, dispatch } = useContext(RickContext);

  useEffect(() => {
    state.episodes.length === 0 && actions.fetchRicks(dispatch);
  }, []);

  const props: EpisodeProps = {
    episodes: state.episodes,
    store:{state, dispatch},
    toggle,
    favourites: state.favourites,
  };

  return (
    <Fragment>
      <Suspense fallback={<div className="load_text">Loading...</div>}>
        <section className="episode-layout ">
          <EpisodeLists {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
};

export default Home;
