import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUbuntu,
  faReact,
  faNode,
  faJava,
  faJs,
  faSwift
} from '@fortawesome/free-brands-svg-icons';

export default function DeveloperPanel(props) {
  const expanded = props.module2Expanded;

  const rootStyle = {
    display: expanded ? 'grid' : 'none'
  };

  return (
    <div className="subPanel" style={rootStyle}>
      <div className="item_e subItem">
        <div>
          <p>
            My inspiration is being able to build good products, and they could
            become a part of someone's life.
          </p>
        </div>
      </div>

      <div className="item_f subItem">
        <div>
          <h3>Full Stack Developer</h3>
          <p id="devIntro">
            Acquired an MSc degree in Information Technology at RMIT University
            in Melbourne (2016-2017). Enjoyed 2 years of full-stack developer
            job in Melbourne and Sydney.
          </p>
          <section id="devIcons">
            <FontAwesomeIcon className="devIcon" icon={faUbuntu} />
            <FontAwesomeIcon className="devIcon" icon={faReact} />
            <FontAwesomeIcon className="devIcon" icon={faNode} />
            <FontAwesomeIcon className="devIcon" icon={faJava} />
            <FontAwesomeIcon className="devIcon" icon={faJs} />
            <FontAwesomeIcon className="devIcon" icon={faSwift} />
          </section>
        </div>
      </div>

      <div className="item_g subItem">
        <div>
          <p>I believe that keep learning is the key to developers.</p>
        </div>
      </div>

      <div className="item_h subItem">
        <div className="slider1 sliderItem"></div>
        <div className="slider2 sliderItem"></div>
        <div className="slider3 sliderItem"></div>
        <div className="slider4 sliderItem"></div>
        <div className="slider5 sliderItem"></div>
      </div>
    </div>
  );
}
