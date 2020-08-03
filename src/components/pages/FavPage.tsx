import React, { useContext, Fragment, Suspense, lazy } from "react";
import { RickContext } from "../../context/rickState";
import { toggle } from "../../context/actions";
import { EpisodeProps } from "../../context/interface";

const EpisodeLists = lazy<any>(() => import("../app"));
const FavPage = (): JSX.Element => {
  const { state, dispatch } = useContext(RickContext);
  const props: EpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
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

export default FavPage;
