import React, { useEffect, useState } from "react";
import "./styles.css";
// import KakaoMap from "./KakaoMap";
import {Map, MapMarker} from 'react-kakao-maps-sdk';
// import Weather from "./Weather";

function fetchData() {
  const promise = fetch(`https://apis.data.go.kr/1741000/TsunamiShelter3/getTsunamiShelter1List?serviceKey=F2Rw4w1N2FlrIJZmsiYjs6pSjy7B3P9AK0K3tu%2BTtMps%2FQfVU8KSOWRsSQv8AyK5MsoL8P7fRnvdwbqWVNNtDw%3D%3D&pageNo=1&numOfRows=10&type=json`)
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json()
  })

  return promise;
}

export default function App() { // eslint-disable-next-line
  const [visible, setVisible] = useState(true);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
    .then(data => {
      setData(data)
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [])

  console.log(data)

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

  if (error) {
    return <p>failed to fetch</p>
  }
  if (!isLoaded) {
    return <p>fetching data...</p>
  }
  return (
    <div className="App">

      {/* Header */}
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
              <a href="http://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/csc/bbs_conf.jsp?menuSeq=593&bbs_no=9">지진대피지침</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
          </ul>
        </div>
      </div>

      <h1>{data.TsunamiShelter[1].row[0].address}</h1>
      <h1>{data.TsunamiShelter[1].row[0].lat}</h1>
      <h1>{data.TsunamiShelter[1].row[0].lon}</h1>


      {/* Main content */}
      <div id="wrap">
        {visible && (
          <>
            <h2>Kakao Map</h2>
            <KakaoMap data={data} />
            {/* <KakaoMap markerPositions={markerPositions} size={mapSize} /> */}
          </>
        )}
      </div>

      {/* content */}
      {/* <div id="notice">
        
      </div> */}
      <div class="py-10">
        <h1 class="text-3xl text-center mb-5">Heading</h1>
        <div class="max-w-3xl px-2 flex gap-4 flex-col md:flex-row mx-auto">
          <div class="w-full h-64 border border-black"></div>
          <div class="w-full h-64 border border-black"></div>
        </div>
      </div>
    </div>
  );
}


function KakaoMap({data}) {

  console.log(data);

  // const positions = [
  //   {
  //     title: "..", 
  //     latlng: {lat: data.TsunamiShelter[1].row[0].lat, lng: data.TsunamiShelter[1].row[0].lon}}
  // ]

  const positions = data.TsunamiShelter[1].row.map(item => {
    return {
      title: "..",
      latlng: {
        lat: item.lat,
        lng: item.lon,
      }
    }
  })

  console.log(positions)


  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: data.TsunamiShelter[1].row[0].lat,
        lng: data.TsunamiShelter[1].row[0].lon,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={9} // 지도의 확대 레벨
    >
      {positions.map((position, index) => (
        <MapMarker
          key={`${position.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
    </Map>
  )
}