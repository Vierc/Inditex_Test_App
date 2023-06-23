import { useEffect } from "react";
import { getPodcasts } from "../services/podcasts";
import { useLocalStorage } from "./useLocalStorage";

export function usePodcastList () {

  const [ allPodcasts, setAllPodcasts ] = useLocalStorage("podcasts", [])
  const fetchData = async () => {
    if(allPodcasts.length < 1) {
      const apiPodcasts = await getPodcasts()
      await setAllPodcasts(apiPodcasts)
    }
  }

  useEffect(() => {
    fetchData().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { allPodcasts }
}