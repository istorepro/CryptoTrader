var express = require('express');
var app = module.exports = express.Router();
const Poloniex = require('poloniex-api-node');
var poloniex = new Poloniex();
app.get('/ticker',function(req, res, next){
    poloniex.returnTicker(function(err, ticker) {
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : ticker});
    });
});
app.get('/tradehistory&:pair&:start&:end',function(req,res,next){
    poloniex.returnTradeHistory(req.params.pair, req.params.start, req.params.end, function(err,history){
      if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : history});
    });
});
app.get('/orderbook&:pair&:depth',function(req,res,next){
    poloniex.returnOrderBook(req.params.pair, req.params.depth, function(err,book){
      if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : book});
    });
});
app.get('/chartdata&:pair&:period&:start&:end',function(req,res,next){
    poloniex.returnChartData(req.params.pair,req.params.period,req.params.start,req.params.end, function(err,chart){
      if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : chart});
    });
});
app.get('/balances&:apiKey&:secretKey',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.returnBalances(function(err,balences){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : balences});
    });
});
app.get('/buy&:apiKey&:secretKey&:pair&:amount',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.buy(req.params.pair,0.00000173,req.params.amount,null,null,null,function(err,buy){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : buy});
    });
});

app.get('/sell&:apiKey&:secretKey&:pair&:amount',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.sell(req.params.pair,0.00000173,req.params.amount,null,null,null,function(err,sell){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : sell});
    });
});
app.get('/depositaddresses&:apiKey&:secretKey',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.returnDepositAddresses(function(err,adresses){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : adresses});
    });
});
app.get('/generatenewaddress&:apiKey&:secretKey&:currency',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.generateNewAddress(req.params.currency,function(err,currency){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : currency});
    });
});
app.get('/depositswithdrawals&:apiKey&:secretKey&:start&:end',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.returnDepositsWithdrawals(req.params.start,req.params.end,function(err,history){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : history});
    });
});
app.get('/currencies',function(req,res,next){
    poloniex.returnCurrencies(function(err, currencies) {
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : currencies});
    });
});

app.get('/withdraw&:apiKey&:secretKey&:currency&:amount&:address',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.withdraw(req.params.currency,req.params.amount,req.params.address,function(err,withdraw){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : withdraw});
    });
});
app.get('/MyTradeHistory&:apiKey&:secretKey&:currencyPair&:start&:end',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.returnMyTradeHistory(req.params.currencyPair,req.params.start,req.params.end,function(err,TradeHistory){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : TradeHistory});
    });
});
app.get('/OpenOrders&:apiKey&:secretKey&:currencyPair',function(req,res,next){
    poloniexTrade = new Poloniex(req.params.apiKey,req.params.secretKey);
    poloniexTrade.returnOpenOrders(req.params.currencyPair,function(err,OpenOrders){
        if(err){
            return res.json({"success" : false,"err" : err});
        }
        res.status(200).send({"success" : true,"result" : OpenOrders});
    });
});