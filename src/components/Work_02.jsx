import React from 'react';

import work02 from '../images/thumbnail_02.png';

class Work02 extends React.Component {
  render() {
    return (
      <section className="work" data-section-name="Work_02">
        <div className="work--inner">
          <div className="work--disc">
            <h2 className="work--disc__titl heading">K I Telecommunication System</h2>
            <div className="work--disc__text letter">
              デザイナーとして務めた時にWork_01で紹介した"eat"で制作した、茨城県古河市にある電気通信工事会社様のウェブサイトです。メインカラーは緑(蛍光色が好ましい)でロゴのヘキサゴンをデザインに落とし込んで欲しいとのことで制作しました。制作日数は４〜５日程。画像加工(Photoshop)とCSSによるコーディングを行いました。
            </div>
            <div className="btn">
              <a className="linker letter" href="https://www.ki-ts.co.jp" target="_blank" rel="noopener noreferrer nofollow">
                Got to site
              </a>
            </div>
          </div>
          <div className="work--image">
            <img src={work02} alt="work02"/>
          </div>
        </div>
      </section>
    )
  }
}

export default Work02
