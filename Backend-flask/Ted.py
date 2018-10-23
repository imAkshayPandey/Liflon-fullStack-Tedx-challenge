
from flask import jsonify , json , Flask


import csv

with open('TED-22kData.csv',encoding="ISO-8859-1") as f:
    reader = csv.DictReader(f)
    rows = list(reader)
with open('TED-22kData.csv.json', 'w') as f:
    json.dump(rows, f)


app = Flask(__name__)


@app.route("/",methods=['GET'])
def api():

    return jsonify(rows)
if __name__ == '__main__':
    app.run(host="192.168.42.185",port=5000,debug=True)
