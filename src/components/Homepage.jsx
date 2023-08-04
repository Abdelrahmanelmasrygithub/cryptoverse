import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

// const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const GlobalStats = data?.data?.stats;
  if (isFetching) return 'Loading...';
  return (
    <> 
       <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
       <Row>
             <Col span={12}><Statistic title='Total Cryptocurrencies' value={millify(GlobalStats.total)}/></Col>
             <Col span={12}><Statistic title="Total Exchanges" value={millify(GlobalStats.totalExchanges)} /></Col>
             <Col span={12}><Statistic title="Total Market Cap:"  value={millify(GlobalStats.totalMarketCap)} /></Col>
             <Col span={12}><Statistic title="Total 24h Volume"  value={millify(GlobalStats.total24hVolume)} /></Col>
             {/* <Col span={12}><Statistic title="Total Cryptocurrencies"  value={GlobalStats.total} /></Col> */}
             <Col span={12}><Statistic title="Total Markets"  value={millify(GlobalStats.totalMarkets)} /></Col>      
       </Row>
         <div className='home-heading-container'>
             <Typography.Title level={2} className="home-title">Top 10 Cryptos In The World</Typography.Title>
             <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title>
         </div>
         <Cryptocurrencies simplified />
         <div className='home-heading-container'>
             <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
             <Typography.Title level={3} ><Link to="/News">Show more</Link></Typography.Title>
         </div>
         <News simplified />
    </>
  );
};

export default Homepage