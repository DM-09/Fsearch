from bardapi import Bard
from flask import Flask, jsonify
from flask_cors import CORS
from urllib.parse import unquote

app = Flask(__name__)
CORS(app)

@app.route("/ai/<string:q>", methods=['GET'])
def getAI_ans(q):
    token = ''
    bard = Bard(token=token)

    res = bard.get_answer(unquote(q))['content']
    return jsonify({'res': res}), 200
