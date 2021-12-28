const BTCFearGreed = ({btcFaG}) => {

    const bitcoinFearIndexIMG = 'https://alternative.me/crypto/fear-and-greed-index.png';
 
    const days = ['Toda', 'Yesterday', 'Last Week'];
 

    const calcRangeGAF = (fagDataRange) => {
        let valuesArr = fagDataRange.map( day => day.value)
        let avrValue =  valuesArr.reduce((prevVal,curVal) =>  parseInt(prevVal) + parseInt(curVal), 0) / 7;
        return Math.floor(avrValue);
    }
    function getGAFLabel(avrgValue) {
       switch (true) {
            case  (avrgValue < 24):
                  return 'Extreme Fear'
            case (avrgValue <= 46):
                 return 'Fear'
             case (avrgValue <= 54):
                  return 'Neutral'               
            case ( avrgValue <= 74):
                 return 'Greed'
            case (avrgValue > 74):
                 return 'Extreme Greed'
            default:
                return   ''
          }
    }
    const thisWeekGAF = calcRangeGAF(btcFaG.data.slice(0,7));
    const lastWeekGAF = calcRangeGAF(btcFaG.data.slice(7));
    const todayGAFLabel = btcFaG.data[0].value_classification;
    const yesterdayGAFLabel = btcFaG.data[1].value_classification;
    const thisWeekGAFLabel = getGAFLabel(thisWeekGAF);
    const lastWeekGAFLabel = getGAFLabel(lastWeekGAF);

    return (  
          <div className="fear-and-greed" >
              <img src={bitcoinFearIndexIMG} alt="Latest Crypto Fear & Greed Index" />
            <div className="history-data">
                <h3>Historical Values</h3>
                <div className="gaf-values">
                   <div  className="gaf-elem" gaf-attr={todayGAFLabel}>
                      <div className="gaf-time">
                        <span>Now</span>
                        <div className="gaf-lbl">{todayGAFLabel} </div>
                      </div>
                      <div className="gaf-num-val">{btcFaG.data[0].value} </div>
                    </div>
                    <div  className="gaf-elem" gaf-attr={yesterdayGAFLabel}>
                      <div className="gaf-time">
                       <span>Yesterday</span>
                       <div className="gaf-lbl">{yesterdayGAFLabel} </div>
                      </div>
                      <div className="gaf-num-val">{btcFaG.data[1].value} </div>
                    </div>
                    <div  className="gaf-elem" gaf-attr={thisWeekGAFLabel}>
                      <div className="gaf-time">
                       <span>This Week</span>
                       <div className="gaf-lbl"> {thisWeekGAFLabel}</div>
                      </div>
                      <div className="gaf-num-val"> {thisWeekGAF}</div>
                    </div>
                    <div  className="gaf-elem" gaf-attr={lastWeekGAFLabel}>
                      <div className="gaf-time">
                       <span>Last Week</span>
                       <div className="gaf-lbl"> {lastWeekGAFLabel}</div>
                      </div>
                      <div className="gaf-num-val">{lastWeekGAF}</div>
                    </div>

                </div>
         
            </div>
         </div>
    );
}

export default BTCFearGreed;