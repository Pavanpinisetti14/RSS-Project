import React, { useState, useEffect } from 'react';
function GetData() {
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
    <div className=' bg-zinc-100'>
      {loading ? (
        <p>Loading...</p> // Show loading text until data is fetched
      ) : (
        <div className='flex gap-3'>
          <div className='w-[65%] p-4 border-double border-r-8 border-black h-[1200px] overflow-auto'>
            {Object.keys(articles).map((source, index) => (
              <div>
                <div key={index} style={{ marginBottom: '40px' }}>
                  {/* <h2>{source}</h2> */}

                  {articles[source].length === 0 ? (
                    <p>No articles found for {source}.</p>
                  ) : (
                    articles[source].map((article, index) => (
                        <div className="flex flex-wrap justify-center gap-6">
                            <div key={index} className="w-[80%] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                            {/* Image Section */}
                            {article.image && (
                                <img
                                src={article.image}
                                alt="article"
                                className="w-full h-48 object-contains"
                                />
                            )}
                        
                            <div className="p-4">
                                {/* Title */}
                                <h2 className="text-xl font-semibold text-gray-800 truncate">{article.title}</h2>
                        
                                {/* Summary */}
                                <p className="text-base text-gray-600 mt-2 line-clamp-3">
                                {article.summary}
                                </p>
                        
                                {/* Published Date */}
                                <p className="text-sm text-gray-500 mt-3">{article.published}</p>
                            </div>
                        
                            {/* Read More Button */}
                            <div className="p-4 border-t border-gray-200 bg-gray-100">
                                <a
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-dark font-semibold"
                                >
                                Read More
                                </a>
                            </div>
                        </div>
                        <br></br>
                      </div>
                      
                    ))
                  )}
                </div>
                {/* <br></br> */}
              </div>
            ))}
          </div>
          <div className='w-[45%] h-fit grid grid-cols-2 gap-4'>
            <div className='p-3 w-[200px] h-[100px] bg-black'></div>
            <div className='p-3 w-[200px] h-[100px] bg-blue-500'></div>
            <div className='p-3 w-[200px] h-[100px] bg-pink-500'></div>
            <div className='p-3 w-[200px] h-[100px] bg-cyan-500'></div>
            <div className='p-3 w-[200px] h-[100px] bg-yellow-500'></div>
            <div className='p-3 w-[200px] h-[100px] bg-green-500'></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetData;
