import Search from "../components/Search";
import PodcastList from "../components/PodcastList";
import { usePodcastList } from "../hooks/usePodcastList";

function Home() {

  const { allPodcasts } = usePodcastList()

  return (
    <>
      <Search podcasts={allPodcasts} />
      <PodcastList podcasts={allPodcasts} />
    </>
  )
}

export default Home