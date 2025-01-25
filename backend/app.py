from flask import Flask, jsonify
from flask_cors import CORS
import feedparser

app = Flask(__name__)
CORS(app)

rss_sources = {
    "NDTV": "https://feeds.feedburner.com/ndtvnews-latest",
    "News 18": "https://www.news18.com/commonfeeds/v1/eng/rss/india.xml",
    "The Hindu": "https://www.thehindu.com/news/feeder/default.rss",
}

def content_return(rss_feed):
    feed = feedparser.parse(rss_feed)
    articles = feed.get('entries', [])
    
    li = []
    for i in range(len(articles)):
        di = {}

        if articles[i].get('id') and '.' in articles[i]['id']:
            di['link'] = articles[i]['id']
        else: 
            di['link'] = articles[i]['links'][0]['href']

        if articles[i].get('title'): 
            di['title'] = articles[i]['title']

        try:
            if articles[i].get('media_content'):
                if isinstance(articles[i]['media_content'], list) and len(articles[i]['media_content']) > 0:
                    di['image'] = articles[i]['media_content'][0].get('url', articles[i]['links'][0]['href'])
        except KeyError:
            di['image'] = articles[i]['links'][0]['href']

        if articles[i].get('summary'):
            di['summary'] = articles[i]['summary']

        if articles[i].get('published'):
            di['published'] = articles[i]['published']

        if di.get('summary') and di.get('image'):
            li.append(di)

    return li

@app.route('/api/rss', methods=['GET'])
def fetch_all_rss():
    all_articles = {}
    
    for source_name, rss_url in rss_sources.items():
        articles = content_return(rss_url)
        
        if not articles:
            all_articles[source_name] = {"error": "No articles found."}
        else:
            all_articles[source_name] = articles

    return jsonify(all_articles)

if __name__ == '__main__':
    app.run(debug=True)
