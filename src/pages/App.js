import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import NewsList from '../components/NewsList';
import Loading from '../components/Loading';
import Error from '../components/Error';

import { getNews } from '../services/getNews';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { keyword } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      const res = await getNews(keyword ? keyword : 'covid');

      if (!res) {
        setLoading(false);
        setError(true);
        return;
      }

      setLoading(false);
      setArticles(res.articles);
    };

    fetchNews();
  }, [keyword]);

  return (
    <>
      <Navbar selected={keyword ? keyword : ''} />
      <Container>
        {loading && <Loading />}
        {error && <Error />}
        {(!loading && articles.length > 0) && (
          <NewsList articles={articles} />
        )}
      </Container>
    </>
  );
};

export default App;