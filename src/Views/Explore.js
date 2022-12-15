/* News Logos */
import coinDeskLogo from '../Assets/Explore/coindesk.svg';
import coinTelegraphLogo from '../Assets/Explore/cointelegraph.svg';
import theBlockLogo from '../Assets/Explore/theblock.svg';
/* Indexes Logos */
import coinGeckoLogo from '../Assets/Explore/coingecko.png';
import coinMarketCapLogo from '../Assets/Explore/coinmarketcap.svg';
/* Defi Logos */
import defiPulseoLogo from '../Assets/Explore/defipulse.png';
import stakingRewardsLogo from '../Assets/Explore/stakingrewards.png';

const Explore = () => {
    return (  
        <section className="crypto-learn">
                <div className="contrainer">
                    <h3>Indexes</h3>
                    <div className="resources">
                        <a href="coingecko.com">
                        <img className="svg-logo coingecko"  src={coinGeckoLogo} />
                        </a>
                        <a href="coinmarketcap.com">
                            <img className="svg-logo"  src={coinMarketCapLogo} />
                        </a>
                        <a href=""></a>
                    </div>
                </div>
                <div className="contrainer">
                    <h3>News</h3>
                    <div className="resources">
                        <a href="cointelegraph.com">
                        <img className="svg-logo"  src="{coinTelegraphLogo}" />
                        </a>
                        <a href="coindesk.com">
                            <img className="svg-logo"  src={coinDeskLogo} />
                        </a>
                        <a href="theblockcrypto.com">
                            <img className="svg-logo block"  src={theBlockLogo} />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <h3>Defi</h3>
                    <div className="resources">
                        <a href="defipulse.com">
                        <img className="svg-logo defi-pulse"  src={defiPulseoLogo} />
                        </a>
                        <a href="stakingrewards.com">
                            <img className="svg-logo staking-rewards"  src={stakingRewardsLogo} />
                        </a>
                        <a href=""></a>
                    </div>

                </div>
         </section>
     );
}
 
export default Explore;