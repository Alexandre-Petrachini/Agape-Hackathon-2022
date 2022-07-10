import json
import requests

def query(payload):
    API_URL = "https://api-inference.huggingface.co/models/ricardo-filho/bert-base-portuguese-cased-nli-assin"
    headers = {"Authorization": "Bearer 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"}
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

def lambda_handler(event, context):
    listToOrder = json.loads(event['body'])
    listofwords = listToOrder['listofwords']
    sentences = []
    for item in listToOrder['listToOrder']:
        sentences.append((item["listOfWords"]))

    output = query({
    	"inputs": {
    		"source_sentence": f"{listofwords}",
    		"sentences": ["".join(i) for i in sentences],
    	},
    })
    final_results = []
    for index, item in enumerate(output):
        final_results.append((item, listToOrder['listToOrder'][index]['id']))
    final_results.sort(key=lambda a: a[0], reverse=True)
    json_response = [tupla[1] for tupla in final_results]    
    
    return {
        'statusCode': 200,
        'body': json.dumps(json_response)
    }
