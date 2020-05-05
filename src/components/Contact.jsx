import React from 'react';

import qiita from '../images/qiita_logo_wh.png';
import github from '../images/github_logo_wh.png';

class Contact extends React.Component {
  render() {
    return (
      <section className="contact" data-section-name="Contact">
        <div className="contact--inner">
          <div className="contact--disc">
            <h2 className="heading">お問い合わせ</h2>
            <p className="contact--disc__text letter">下記アドレスより、お気軽になんでもお問い合わせください。</p>
          </div>
          <div className="contact--email">
            <a href="mailto:tnk.mdrn0519@gmail.com" className="contact--email__address">tnk.mdrn0519@gmail.com</a>
          </div>
          <div className="contact--sns">
            <a href="https://qiita.com/mdrn_0519" className="contact--linker">
              <img src={qiita} alt="qiita"/>
            </a>
            <a href="https://github.com/mdrn0519" className="contact--linker">
              <img src={github} alt="github"/>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
