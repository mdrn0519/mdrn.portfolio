import React from 'react';
import img from '../images/profile_image.jpg';

class Profiles extends React.Component {

  constructor(props) {
    super(props)

    this.getMyAge = this.getMyAge.bind(this)
  }

  getMyAge() {
    const birthday = {
      y : 1993,
      m : 5,
      d : 19
    }

    const today = new Date()    
    const y1 = today.getFullYear().toString().padStart(4,'0')
    const m1 = (today.getMonth() +1).toString().padStart(2,'0')
    const d1 = today.getDate().toString().padStart(2,'0')

    const birthDate = new Date(birthday.y, birthday.m -1, birthday.d)
    const y2 = birthDate.getFullYear().toString().padStart(4,'0')
    const m2 = (birthDate.getMonth() +1).toString().padStart(2,'0')
    const d2 = birthDate.getDate().toString().padStart(2,'0')

    const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) /10000)

    return (
      <span>{age.toString()}</span>
    )
  }

  render() {
    return(
      <section className="profiles" data-section-name="Profiles">
        <div className="profiles--inner">
          <div className="profiles--inner__image">
            <img src={img} alt="Midori Tanaka"/>
          </div>
          <div className="profiles--inner__text">
            <h2 className="heading">MIDORI TANAKA</h2>
            <div className="letter">
              <p>1993年5月19日生まれ。{this.getMyAge()}歳。</p>
              <p>趣味はスノーボードと旅行と映画鑑賞。</p>
              <p>文化服装学院ファッション流通科を卒業後、服飾の仕事には就かず、学生時代よりアルバイトとして働いていた飲食業の延長線上で24歳まで高級飲食店や都内外資系ホテルにてバーテンダーとして従事。のちにスクールにてWeb系プログラミングを習得し異業種転職を決意、縁あってWebデザイナー兼フロントエンドエンジニアとして就業。</p>
              <p>車が好きで、猫と冬の雪山が最大の癒し。</p>
              <p>背景の写真は2020年2月にスノーボードで訪れた北海道ニセコ町から見た羊蹄山。</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.getMyAge()
  }
}

export default Profiles
