import i18n from "../i18n/index";
import { Link } from "react-router-dom";
import "../stylesheets/PodcastInfo.css";
import { useAppSelector } from "../store/store";

const PodcastInfo = () => {

  const { podcast } = useAppSelector(state => state.podcast)

  return(
    <div>
      <div className="box-shadow podcastCard">
        <Link to={""}>
          <img 
            className="podcastImage" 
            src={podcast.image} 
            alt={`Podcast ${podcast.title}`} 
          />
        </Link>
        <hr/>
        <Link to={""}>
          <h2 className="podcastTitle">{podcast.title}</h2>
          <p className="podcastAuthor"><i>{i18n.PODCAST.PODCAST_AUTHOR + ' ' + podcast.author}</i></p>
        </Link>
        <hr/>
        <p className="podcastDescriptionTitle"><b>{i18n.PODCAST.DESCRIPTION}</b></p>
        <p className="podcastDescription"><i>{podcast.summary}</i></p>
      </div>
    </div>
  );
}

export default PodcastInfo;