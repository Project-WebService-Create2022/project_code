import './notice.css';

function Notice() {
  return (
    <div className="all">
    <div>
      <h1>공지사항</h1>
    </div>
    <div>
      <a href="#" class="nav_notice">공지사항</a>
      <a href="#" class="nav_notice">공지사항(풍수해)</a>
    </div>
    &nbsp;
    <div className="table1">
    <table>

      <div className="search_1">
        <tr>
          <th>기본검색</th>
          <th>
            <select>
              <option>제목</option>
              <option>내용</option>
            </select>
          </th>
          <th><input type="text" name="search" className="search_2"/></th>
        </tr>
      </div>

      <div>

        <tr>
          <th>등록일</th>
          <th><input type="number" name="date" maxlength="8" className="search_3"/> -</th>
          <th><input type="number" name="date" maxlength="8" className="search_3"/></th>
          {/* <p>날짜입력예시 : 20221116</p> */}
          <div className="button">
            <button>검색</button>
          </div>
        </tr>
      </div>
        
      </table>
    </div>
    &nbsp;
    <div className="table2">
      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>부서</th>
          <th>등록일</th>
        </tr>
        <tr>
          <td className="notice_n">5</td>
          <td><a href="#5" className="notice">2022.11.03 서비스 점검 안내 공지</a></td>
          <td>재난정보통신과</td>
          <td>2022-11-01</td>
        </tr>
        
        <tr>
          <td className="notice_n">4</td>
          <td><a href="#4" className="notice">전국 지진대피훈련 실시 공지</a></td>
          <td>재난정보통신과</td>
          <td>2022-09-01</td>
        </tr>
        <tr>
          <td className="notice_n">3</td>
          <td><a href="#3" className="notice">비상연락망 관리(등록/수정)메뉴얼입니다</a></td>
          <td>비상대비민방위정책관</td>
          <td>2022-06-01</td>
        </tr>
        <tr>
          <td className="notice_n">2</td>
          <td><a href="#2" className="notice">국민안전의식 자가진단테스트 이벤트</a></td>
          <td>중앙재난안전상황실</td>
          <td>2022-03-01</td>
        </tr>
        <tr>
          <td className="notice_n">1</td>
          <td><a href="#1" className="notice">국가재난관리정보센터 시범서비스 안내</a></td>
          <td>재난정보통신과</td>
          <td>2022-01-01</td>
        </tr>
      </table>
    </div>
    &nbsp;
    <div>
      <a href="#" className="page">{'>'}</a>
      <a href="#" className="page">5</a>
      <a href="#" className="page">4</a>
      <a href="#" className="page">3</a>
      <a href="#" className="page">2</a>
      <a href="#" className="page">1</a>
      <a href="#" className="page">{'<'}</a>
    </div>
    </div>
  );
}

export default Notice;
