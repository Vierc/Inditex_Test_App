import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/store";
import "../stylesheets/Episode.css";
import { Episode } from "../types";

const EpisodePlayer = () => {

  const { episodeId } = useParams();
  const { episodes } = useAppSelector(state => state.episodes)
  const episode = episodes.filter( episode => episode.id === episodeId )[0] || {} as Episode

  return(
    <div>
      <div className="box-shadow episodeBox">
        <h3>{episode.name}</h3>
        <div className="episodeDescription" dangerouslySetInnerHTML={{__html: episode.description}}></div>
        <hr/>
        <audio controls className="episodePlayer">
          <source id="audioPlayer" src={episode.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default EpisodePlayer;