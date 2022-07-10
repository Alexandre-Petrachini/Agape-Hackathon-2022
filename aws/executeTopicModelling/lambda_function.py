import json
import re
import sys
import subprocess

def display_topics(H, W, feature_names, documents, no_top_words, no_top_documents):
    import numpy as np
    most_important_topics = []
    for topic_idx, topic in enumerate(H):
        most_important_topics.append(([(feature_names[i])
          for i in topic.argsort()[:-no_top_words - 1:-1]]))
        top_doc_indices = np.argsort( W[:,topic_idx] )[::-1][0:no_top_documents]
        for doc_index in top_doc_indices:
            print(str(doc_index) + ". " + documents[doc_index])
    print(most_important_topics)
    return most_important_topics

def lambda_handler(event, context):
    subprocess.call('pip install sklearn -t /tmp/ --no-cache-dir'.split(), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    sys.path.insert(1, '/tmp/')
    import sklearn
    from sklearn.feature_extraction.text import CountVectorizer
    from sklearn.decomposition import LatentDirichletAllocation
    import numpy as np
    documents = event["document"]
    no_topics = 1 
    no_top_words = 8 #@param {type:"integer"}
    stop_words = ['a', 'à', 'ao', 'aos', 'aquela', 'aquelas', 'aquele', 'aqueles', 'aquilo', 'as', 'às', 'até', 'com', 'como', 'da', 'das', 'de', 'dela', 'delas', 'dele', 'deles', 'depois', 'do', 'dos', 'e', 'é', 'ela', 'elas', 'ele', 'eles', 'em', 'entre', 'era', 'eram', 'éramos', 'essa', 'essas', 'esse', 'esses', 'esta', 'está', 'estamos', 'estão', 'estar', 'estas', 'estava', 'estavam', 'estávamos', 'este', 'esteja']
    no_top_documents = 1 #@param {type:"integer"}

    tf_vectorizer = CountVectorizer(max_df=1, min_df=1, stop_words=stop_words)
    documents[0] = re.sub('[,.:;!?]+', ' ', documents[0])
    tf = tf_vectorizer.fit_transform(documents)
    tf_feature_names = tf_vectorizer.get_feature_names()
    # Run LDA
    lda_model = LatentDirichletAllocation(n_components=no_topics, max_iter=25, learning_method='online', learning_offset=50.,random_state=0).fit(tf)
    lda_W = lda_model.transform(tf)
    lda_H = lda_model.components_
    final_topics = display_topics(lda_H, lda_W, tf_feature_names, documents, no_top_words, no_top_documents)
    return {
        'statusCode': 200,
        'body': json.dumps(final_topics)
    }