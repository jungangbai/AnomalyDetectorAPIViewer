
// 事前準備
var fs = require("fs");
var csv = require("csv");
var csvSync = require('csv-parse/lib/sync')

function check(filePath) {
  var isExist = false;
  try {
    fs.statSync(filePath);
    isExist = true;
  } catch(err) {
    isExist = false;
  }
  return isExist;
}

function read(filePath) {
  var content = new String();
  if(check(filePath)) {;
    content = fs.readFileSync(filePath, 'utf8');
  }
  return content;
};

// expressモジュールをロードし、インスタンス化してappに代入
var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.text());

// listen()メソッドを実行して3000番ポートで待ち受け
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// View EngineにEJSを指定。
app.set('view engine', 'ejs');

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});

// デフォルトのデータポイント（サンプル）
const requestBody = {
    "series": [
      {
        "timestamp": "1972-01-01T00:00:00Z",
        "value": 826
      },
      {
        "timestamp": "1972-02-01T00:00:00Z",
        "value": 799
      },
      {
        "timestamp": "1972-03-01T00:00:00Z",
        "value": 890
      },
      {
        "timestamp": "1972-04-01T00:00:00Z",
        "value": 900
      },
      {
        "timestamp": "1972-05-01T00:00:00Z",
        "value": 961
      },
      {
        "timestamp": "1972-06-01T00:00:00Z",
        "value": 935
      },
      {
        "timestamp": "1972-07-01T00:00:00Z",
        "value": 894
      },
      {
        "timestamp": "1972-08-01T00:00:00Z",
        "value": 855
      },
      {
        "timestamp": "1972-09-01T00:00:00Z",
        "value": 809
      },
      {
        "timestamp": "1972-10-01T00:00:00Z",
        "value": 810
      },
      {
        "timestamp": "1972-11-01T00:00:00Z",
        "value": 766
      },
      {
        "timestamp": "1972-12-01T00:00:00Z",
        "value": 805
      },
      {
        "timestamp": "1973-01-01T00:00:00Z",
        "value": 821
      },
      {
        "timestamp": "1973-02-01T00:00:00Z",
        "value": 773
      },
      {
        "timestamp": "1973-03-01T00:00:00Z",
        "value": 883
      },
      {
        "timestamp": "1973-04-01T00:00:00Z",
        "value": 898
      },
      {
        "timestamp": "1973-05-01T00:00:00Z",
        "value": 957
      },
      {
        "timestamp": "1973-06-01T00:00:00Z",
        "value": 924
      },
      {
        "timestamp": "1973-07-01T00:00:00Z",
        "value": 881
      },
      {
        "timestamp": "1973-08-01T00:00:00Z",
        "value": 837
      },
      {
        "timestamp": "1973-09-01T00:00:00Z",
        "value": 784
      },
      {
        "timestamp": "1973-10-01T00:00:00Z",
        "value": 791
      },
      {
        "timestamp": "1973-11-01T00:00:00Z",
        "value": 760
      },
      {
        "timestamp": "1973-12-01T00:00:00Z",
        "value": 802
      },
      {
        "timestamp": "1974-01-01T00:00:00Z",
        "value": 828
      },
      {
        "timestamp": "1974-02-01T00:00:00Z",
        "value": 1030
      },
      {
        "timestamp": "1974-03-01T00:00:00Z",
        "value": 889
      },
      {
        "timestamp": "1974-04-01T00:00:00Z",
        "value": 902
      },
      {
        "timestamp": "1974-05-01T00:00:00Z",
        "value": 969
      },
      {
        "timestamp": "1974-06-01T00:00:00Z",
        "value": 947
      },
      {
        "timestamp": "1974-07-01T00:00:00Z",
        "value": 908
      },
      {
        "timestamp": "1974-08-01T00:00:00Z",
        "value": 867
      },
      {
        "timestamp": "1974-09-01T00:00:00Z",
        "value": 815
      },
      {
        "timestamp": "1974-10-01T00:00:00Z",
        "value": 812
      },
      {
        "timestamp": "1974-11-01T00:00:00Z",
        "value": 773
      },
      {
        "timestamp": "1974-12-01T00:00:00Z",
        "value": 813
      },
      {
        "timestamp": "1975-01-01T00:00:00Z",
        "value": 834
      },
      {
        "timestamp": "1975-02-01T00:00:00Z",
        "value": 782
      },
      {
        "timestamp": "1975-03-01T00:00:00Z",
        "value": 892
      },
      {
        "timestamp": "1975-04-01T00:00:00Z",
        "value": 903
      },
      {
        "timestamp": "1975-05-01T00:00:00Z",
        "value": 966
      },
      {
        "timestamp": "1975-06-01T00:00:00Z",
        "value": 937
      },
      {
        "timestamp": "1975-07-01T00:00:00Z",
        "value": 896
      },
      {  
        "timestamp": "1975-08-01T00:00:00Z",
        "value": 858
      },
      {
        "timestamp": "1975-09-01T00:00:00Z",
        "value": 817
      },
      {
        "timestamp": "1975-10-01T00:00:00Z",
        "value": 827
      },
      {
        "timestamp": "1975-11-01T00:00:00Z",
        "value": 797
      },
      {
        "timestamp": "1975-12-01T00:00:00Z",
        "value": 843
      }
    ],
    "maxAnomalyRatio": 0.25,
    "sensitivity": 95,
    "granularity": "monthly"
};


// 時系列データをJSON で返すAPI
app.post("/api/anomaly/initbody", function(req, res, next){
    console.log("init Request Body");
    res.json(requestBody);
});


app.post("/api/anomaly/buildbody", function(req, res, next){
    var responseBody= {};
    var series= [];
    var grn= String(req.query.grn);
    var sns= Number(req.query.sns);
    var mar= Number(req.query.mar);
    var bdy= Number(req.query.bdy);
    var int= Number(req.query.int);
    var prd= Number(req.query.prd);

    console.time('buildBody');
    switch (bdy) {
      case 1:
        console.log("reading from Default JSON");
        series= requestBody.series;
        break;
      case 2:
        console.log("reading data from test.csv");
        var data = read(__dirname + '/public/test.csv');
        series = csvSync(data,{columns: true}).filter(function(element, index, array) {
          return (element.deviceid == 'tosumi-dev1');
        });
        break;
      case 3:
        console.log("reading from Request Body");
        var data = req.body;
        series = csvSync(data,{columns: true});
        break;
    }

    responseBody.series= series;
    responseBody.granularity= grn;
    responseBody.sensitivity= sns;
    responseBody.maxAnomalyRatio= mar;
    if (prd) {
      responseBody.period= prd;
    }
    if (int > 1) {
      responseBody.customInterval= int;
    }

    console.timeEnd('buildBody');
    res.json(responseBody);
});


