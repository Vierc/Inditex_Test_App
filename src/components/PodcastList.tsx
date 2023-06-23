import { Link } from "react-router-dom";
import { Podcast } from "../types";
import i18n from "../i18n/index";
import "../stylesheets/PodcastList.css";

interface Props {
  podcasts: Array<Podcast>
}

const PodcastList = ({podcasts}: Props) => {

  return(
    <ul className="podcastsGrid">
      {
        podcasts.map(podcast => {
          return (
            <li key={podcast.id} className="podcastList">
              <Link to={"/podcast/" + podcast.id}>
                <div className="box-shadow podcastBox">
                  <img className="podcastImg" src={podcast.image} alt={`Podcast ${podcast.title}`} />
                  <h4>{podcast.title.toUpperCase()}</h4>
                  <p className="podcastAuthor">{i18n.HOME.PODCAST_AUTHOR + ' ' + podcast.author}</p>
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export default PodcastList;