import React from 'react';
import html from '../images/html_icon.png';
import js from '../images/js_icon.png';
import adobe from '../images/adobe_icon.png';
import design from '../images/design_icon.png';

class Skils extends React.Component {
  render() {    
    const skils = {
      html: "HTML5 / CSS3 / SCSS / SASS",
      js: "Vanilla JS / jQuery / React / (coffee)",
      adobe: "Photoshop / Illustrator / Xd",
      design: "Web / Logo / Banner / etc."
    }

    const Blocks = Object.entries(skils).map(([ctg, skil], i) => {
      const src = () => {
        switch(ctg) {
          case "html" : return html;
          case "js" : return js;
          case "adobe" : return adobe;
          case "design" : return design;
  
          default: return html;
        }
      }

      return (
        <div key={i} className={`skils--block ${ctg}`}>
          <div className="skils--block__image">
            <img src={src()} alt={`${ctg}_icon`} />
          </div>
          <div className="skils--block__text letter">
            { skil }
          </div>
        </div>
      )
    });

    return(
      <section className="skils" data-section-name="Skils">
        <div className="skils--inner">
          <h2 className="skils--titl heading">Design ~ Frontend</h2>
          <div className="skils--main">
            { Blocks }
          </div>
        </div>
      </section>
    )
  }
}

export default Skils
