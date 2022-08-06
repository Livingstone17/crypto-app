import React from "react";
import {Switch, Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar,Exchanges,HomePage,Cryptocurrencies,CrytoDetails,News} from "./components";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Routes>
            <Route exact path='/' element={<HomePage />} />   
            <Route exact path='/exchanges' element={<Exchanges />}/>
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}/>
            <Route exact path='/crypto/:coinId' element={<CrytoDetails />}/>
            <Route exact path='/news' element={<News/>}/>
          </Routes>
        </Layout>
      {/* </div> */}
      <div className="footer">
        <Typography.Title  level={5} style={{color:'white',textAlign:'center'}}>
            Cryptophos <br/>
            All Right Reserved
        </Typography.Title>
        <Space>
          <Link to='/' >Home</Link>
          <Link to='/exchanges' >Exchanges</Link>
          {/* <Link to='/cryptocurrencies' >Cryptocurrencies</Link> */}
          <Link to='/news' >News</Link>

        </Space>
      </div>
      </div>

    </div>
  );
}

export default App;
