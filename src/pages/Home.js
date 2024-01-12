import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/nkm/Desktop/github-local/react_project/my-app/src/assets/styles/Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <div className="brand">
          <span>BWC</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/card-editor">명함생성</Link></li>
            <li><Link to="/card-wallet">명함지갑</Link></li>
            <li><Link to="/login-signup">로그인&회원가입</Link></li>
          </ul>
        </nav>
      </header>

      <section>
        {/* 명함 목록 등의 내용을 표시할 섹션 */}
        {/* 이 부분에는 명함 목록, 폴더 목록 등을 표시하는 컴포넌트들이 들어갈 수 있습니다. */}
      </section>

      <footer>
        {/* 푸터 내용 */}
      </footer>
    </div>
  );
}

export default Home;
