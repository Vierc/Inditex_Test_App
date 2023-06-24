import { Outlet, useParams } from "react-router-dom";
import PodcastInfo from "../components/PodcastInfo";
import { usePodcast } from "../hooks/usePodcast";
import "../stylesheets/Podcast.css";

const Podcast = () => {

  const { podcastId } = useParams()
  usePodcast(podcastId || '')

  return(
    <div className="podcastGrid">
      <PodcastInfo />
      <Outlet />
    </div>
  );
}

export default Podcast;