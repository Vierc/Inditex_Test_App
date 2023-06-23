import { getPodcasts, getEpisodes } from "../services/podcasts";

function Home() {

  const fetchData = async () => {
    const podcasts = await getPodcasts()
    console.log(podcasts)
    if(podcasts.length) {
      const episodes = await getEpisodes(podcasts[0].id)
      console.log(episodes)
    }
  }
  fetchData()

  return (
    <div>Home</div>
  )
}

export default Home