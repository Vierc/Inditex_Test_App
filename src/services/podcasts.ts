import axios from "axios";
import { Episode, EpisodesResponseFromApi, Podcast, PodcastsResponseFromApi } from "../types";

const apiPodcastsUrl = process.env.API_PODCASTS_URL || "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
const apiEpisodesUrl = process.env.API_EPISODES_URL || "https://itunes.apple.com/"

export const getPodcasts = async () => {
  const apiResponse = await fetchPodcasts();
  return mapPodcastsFromApiResponse(apiResponse);
}

export const getEpisodes = async (podcastId: string) => {
  const apiResponse = await fetchEpisodes(podcastId);
  return mapEpisodesFromApiResponse(apiResponse);
}

const fetchPodcasts = async (): Promise<PodcastsResponseFromApi> => {
  const { data } = await axios.get(apiPodcastsUrl);
  return data;
}

const axiosInstance = axios.create({
  baseURL: "https://api.allorigins.win/get?url=",
});

const fetchEpisodes = async (podcastId: string): Promise<EpisodesResponseFromApi> => {
  const { data } = await axiosInstance.get(`${apiEpisodesUrl}lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`);
  return data;
}

const mapPodcastsFromApiResponse = (apiResponse: PodcastsResponseFromApi): Array<Podcast> => {
  return apiResponse.feed.entry.map(apiPodcast => {
    const podcast = {
      id: apiPodcast.id.attributes["im:id"],
      image: apiPodcast["im:image"]?.filter(img => img.attributes?.height === "170")[0]?.label,
      title: apiPodcast["im:name"]?.label,
      author: apiPodcast["im:artist"]?.label,
      summary: apiPodcast.summary?.label,
    }
    return podcast
  })
}

const mapEpisodesFromApiResponse = (apiResponse: EpisodesResponseFromApi): Array<Episode> => {
  return apiResponse.results.filter(result => result.episodeUrl).map(apiEpisode => {
    const date = new Date(apiEpisode.releaseDate)
    const episode = {
      id: apiEpisode.trackId.toString(),
      name: apiEpisode.trackName,
      description: addUrlTagInString(apiEpisode.description),
      url: apiEpisode.episodeUrl,
      date: date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),
      duration: msToStringTime(apiEpisode.trackTimeMillis)
    }
    return episode
  })
}

const addUrlTagInString = (content: string) => {
  var urlRegex: RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/ig;
  return content.replace(urlRegex, function(url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
  })
}

const msToStringTime = (duration: number) => {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? 0 + hours : hours;
  minutes = (minutes < 10) ? 0 + minutes : minutes;
  seconds = (seconds < 10) ? 0 + seconds : seconds;

  const minutesString = "00".substring(minutes.toString().length) + minutes
  const secondsString = "00".substring(seconds.toString().length) + seconds
  return hours ? hours + ":" + minutesString + ":" + secondsString :  minutesString + ":" + secondsString;
}