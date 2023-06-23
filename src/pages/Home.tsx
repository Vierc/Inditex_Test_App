import Search from "../components/Search";
import PodcastList from "../components/PodcastList";
import { usePodcastList } from "../hooks/usePodcastList";

function Home() {

  const { podcasts } = usePodcastList()

  return (
    <>
      <Search podcasts={podcasts} />
      <PodcastList podcasts={podcasts} />
    </>
  )
}

export default Home