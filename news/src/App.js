import React, { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from your Flask API
    fetch('http://127.0.0.1:5000/api/rss')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading if there's an error
      });
  }, []);

  return (
    <div>
      <h1>RSS Feed</h1>
      {loading ? (
        <p>Loading...</p> // Show loading text until data is fetched
      ) : (
        <div>
          {Object.keys(articles).map((source, index) => (
            <div>
              <div key={index} style={{ marginBottom: '40px' }}>
                <h2>{source}</h2>
                {articles[source].length === 0 ? (
                  <p>No articles found for {source}.</p>
                ) : (
                  articles[source].map((article, index) => (
                    <div>
                      <div key={index} style={{ marginBottom: '20px' }}>
                        <h3>{article.title}</h3>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                          Read More
                        </a>
                        <p> <b>Summarized :</b> {article.summary}</p>
                        
                        {article.image && <img src={article.image} alt="article" style={{ width: '100%', maxHeight: '300px' }} />}
                        <p><strong>Published:</strong> {article.published}</p>
                      </div>
                      <div>================================================</div>
                    </div>
                  ))
                )}
              
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
