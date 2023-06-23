import { useAppSelector } from "../store/store";
import "../stylesheets/Loading.css";

const Loading = () => {

  const { loading } = useAppSelector(state => state.loading)

  return(
    <div>
      {loading && <div id="loading" className="loading">
        <div className="loadingDot"></div>
        <div className="loadingDot"></div>
      </div>}
    </div>
  );
}

export default Loading;