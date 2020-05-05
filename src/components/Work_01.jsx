import React from 'react';

import work01 from '../images/thumbnail_01.png';

class Work01 extends React.Component {
  render() {
    return (
      <section className="work" data-section-name="Work_01">
        <div className="work--inner">
          <div className="work--disc">
            <h2 className="work--disc__titl heading">eat</h2>
            <div className="work--disc__text letter">
              HTMLやCSSなどの知識がなくても複数のデザイン済のセクションテンプレートを用いることによって、完成度の高いウェブサイトを構築できるCMSにて、フロントエンドエンジニアとしてテンプレートの作成や画像変更のプロセスやwysiwygのシステム、遅延ロードの実装、コアプログラム（Ruby on Rails）との連携などを行っていました。
            </div>
            <div className="btn">
              <a className="linker letter" href="https://start.eat.auto" target="_blank" rel="noopener noreferrer nofollow">
                Got to site
              </a>
            </div>
          </div>
          <div className="work--image">
            <img src={work01} alt="work01"/>
          </div>
        </div>
      </section>
    )
  }
}

export default Work01
