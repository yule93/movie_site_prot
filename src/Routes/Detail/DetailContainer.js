import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: {id}
      },
      history: {push}
    } = this.props;
    const parsedId = Number(id);
    const { isMovie } = this.state;
    console.log(id);
    if(isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if(isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
      }
      console.log(result);
    } catch {
      this.setState({ error: "Can't find anyting." });
    } finally {
      this.setState( { loading: false, result } );
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}