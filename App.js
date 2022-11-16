import React, { useState } from "react";
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
            <h2>날씨정보</h2>
            {/* need to bring the live weather cast here */}
          </>
        )}
      </div>

      {/* react footer  */}

      </div>
     
  
    

    
  );
}
