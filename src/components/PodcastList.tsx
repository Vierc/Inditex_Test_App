import { Podcast } from "../types";
import "../stylesheets/PodcastList.css";

interface Props {
  podcasts: Array<Podcast>
}

const PodcastList = ({podcasts}: Props) => {

  return(
    <ul className='podcastsGrid'>
      {
        podcasts.map(podcast => {
          return (
            <li key={podcast.id} className='podcastList'>
              <div className='box-shadow podcastBox'>
                <img className='podcastImg' src={podcast.image} alt={`Podcast ${podcast.title}`} />
                <h4>{podcast.title.toUpperCase()}</h4>
                <p className='podcastAuthor'>{podcast.author}</p>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}

export default PodcastList;