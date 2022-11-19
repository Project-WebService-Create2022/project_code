import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios'
import "./styles.css";
import KakaoMap from "./KakaoMap";
// import Weather from "./Weather";

export default function App() { // eslint-disable-next-line
  const [visible, setVisible] = useState(true);

  const [markerPositions, setMarkerPositions] = useState([]);
  const markerPositions1 = [
    [33.452278, 126.567803],
    [33.452671, 126.574792],
    [33.451744, 126.572441]
  ];
  const markerPositions2 = [
    [37.499590490909185, 127.0263723554437],
    [37.499427948430814, 127.02794423197847],
    [37.498553760499505, 127.02882598822454],
    [37.497625593121384, 127.02935713582038],
    [37.49629291770947, 127.02587362608637],
    [37.49754540521486, 127.02546694890695],
    [37.49646391248451, 127.02675574250912]
  ];

  const [mapSize, setMapSize] = useState([400, 400]);

  const API_KEY = "99bfbfe44797995b67f1b4c4948e3ea2";
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const url= 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}';

  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios ({
          method: 'get',
          url: url

        })

        console.log(data);
        setResult(data);
      }
      catch (err) {
        alert (err);
      }

    }
  }


  const AppWrap = styled.div `
    width: 8rem;
    height: 8rem;
    border: 1px pink solid;

    .appContentWrap {
      left: 50%
      top: 50%
      transform: translate(-50%,-50%);
      position: absolute;
      border: 1px blue solid;
      padding:20px;
    }
  `; 
  
  const ResultWrap = styled.div `
    margin-top: 60px;
    padding: 10px;
    border: 1px black solid;
    border-radius: 8px;

  
  `; 
  
  
  
  return (
    <div className="App">
      <div className="App-nav">
        <div className="nav-bar">
          <ul id="nav">
            <li>
              <a href="#">
                지진대피소안내
              </a>
            </li>
            <li>
              <a href="#">지진대피소위치</a>
              <ul>
                <li>
                  <a href="#">지역별위치검색</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">지진발생이력</a>
              <ul>
                <li>
                  <a href="#">지역별</a>
                </li>
                <li>
                  <a href="#">빈도수</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="   http://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/csc/bbs_conf.jsp?menuSeq=593&bbs_no=9">지진대피지침</a>
            </li>
            <li>
              <a href="#">공지사항</a>
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
      <div id="wrap">
        {visible && (
          <>
            <h2>지도</h2>
            <KakaoMap markerPositions={markerPositions} size={mapSize} />
          </>
        )}
      </div>
      <div id="wrap-2">
        {visible && (
          <>
            <h2>날씨정보검색</h2>
            <AppWrap>
              <div className="appContentWrap">
              <input 
                placeholder= '도시를 입력하세요.'
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
                type= 'text'
                onKeyDown={searchWeather}
              />
              <ResultWrap>
                <div className="도시명">(result.name)</div>
                <div className="기온">(result.data.main.tem)</div>
                <div className="기상상태">(result.data.weather[0].main)</div>
              </ResultWrap>

              </div>

            </AppWrap>
          </>
        )}
      </div>

      {/* react footer  */}
      <hr></hr>
      <div id = "footer">
          <div class="bg-custom">
            <div class = "divbox">
              <div class="row">
                <div class="col-md-12 p-5">
                  <div class="row">

                    <div class="col-md-3">
                      <h3>Service</h3>
                      <p>개발자 | 박지원 손진희 백경서 박아영</p>

                        <ul>
                          <li><a href="#">YouTube</a></li>
                          <li><a href="#">Twitter</a></li>
                          <li><a href="#">Third item</a></li>
                          <li><a href="#">Fourth item</a></li>
                        </ul>
                    </div>
                        <p>재난 신고전화(전국어디서나 1588-3650)는 국민적 관심 유도와 범국민적 신고체계를 확립하여 24시간 누수없는 대국민 신고 및 민원 접수가 가능토록 운영하기 위해 대표번호(1588-3650)를 누르면 해당 구·군 재난종합상황실로 자동 연결되는 서비스 시스템입니다.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
     
  
      </div>



    
  );
}
