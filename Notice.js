import './notice.css'

function Notice() {
  return (
    <div className='App'>
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
            </li>

          </ul>
        </div>
      </div>
    <div className="content">

      <div className="title">
        <h1>공지사항</h1> 
      </div>

      <div>
        <a href="#" className="menu">공지사항</a>
        <a href="#" className="menu">공지사항(풍수해)</a>
      </div>

      <form className="boardSearch">
        <div>
          <p>
            기본검색
          <select className="option">
            <option>제목</option>
            <option>내용</option>
          </select>
          <input type="search" className="search" />
          </p>
        </div>

        <div>
          <p>등록일
            <input type="number" className="number1" />
            - 
            <input type="number" className="number2" />
            날짜예시입력 : 20221118
            <input type="submit" value="검색" className="submit"/>
          </p>
        </div>
      </form>

      <div>
        전체 30  건
      </div>

      <table className="table">

      <tr>
        <th className="th1">번호</th>
        <th className="th2">제목</th>
        <th className="th3">부서</th>
        <th className="th4">등록일</th>
      </tr>

      <tr>
        <td className="td1">5</td>
        <td className="td2"><a href="#5" className="subject">2022.11.03 서비스 점검 안내 공지</a></td>
        <td className="td3">재난정보통신과</td>
        <td className="td4">2022-11-01</td>
      </tr>

      <tr>
        <td className="td1">4</td>
        <td className="td2"><a href="#4" className="subject">전국 지진대피훈련 실시 공지</a></td>
        <td className="td3">재난정보통신과</td>
        <td className="td4">2022-09-01</td>
      </tr>

      <tr>
        <td className="td1">3</td>
        <td className="td2"><a href="#3" className="subject">비상연락망 관리(등록/수정)메뉴얼입니다</a></td>
        <td className="td3">비상대비민방위정책관</td>
        <td className="td4">2022-06-01</td>
      </tr>

      <tr>
        <td className="td1">2</td>
        <td className="td2"><a href="#2" className="subject">국민안전의식 자가진단테스트 이벤트</a></td>
        <td className="td3">중앙재난안전상황실</td>
        <td className="td4">2022-03-01</td>
      </tr>

      <tr>
        <td className="td1">1</td>
        <td className="td2"><a href="#1" className="subject">국가재난관리정보센터 시범서비스 안내</a></td>
        <td className="td3">재난정보통신과</td>
        <td className="td4">2022-01-01</td>
      </tr>

      </table>

      <div className="pagination">
        <a href="#" className="pagination_list">{'<'}</a>
        <a href="#" className="pagination_list">1</a>
        <a href="#" className="pagination_list">2</a>
        <a href="#" className="pagination_list">3</a>
        <a href="#" className="pagination_list">4</a>
        <a href="#" className="pagination_list">5</a>
        <a href="#" className="pagination_list">{'>'}</a>
      </div>

      
    </div>
    </div>
  );
}

export default Notice;
