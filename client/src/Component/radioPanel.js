import React from 'react';

export default function RadioPanel(props) {
  const expanded = props.module1Expanded;

  const rootStyle = {
    display: expanded ? 'grid' : 'none'
  };

  return (
    <div style={rootStyle} className="subPanel">
      <div className="item_a subItem">
        <div>
          <p>
            My journals are audible, not only have they recorded my life but
            also many other lovely human beings...
          </p>
        </div>
      </div>
      <div className="item_b subItem">
        <div>
          <h3>Media Producer</h3>
          <p>More than 5 years experience as a media producer in China.</p>
          <p>
            I have worked for TV, radio, recording studio and advertising firm.
          </p>
        </div>
      </div>
      <div className="item_c subItem">
        <div>
          <p>
            I love converting technical stuff to the plain language so I made a
            podcast about medical knowledge, which reached 10 million hits in a
            few months.
          </p>
        </div>
      </div>

      <div className="item_d subItem">
        <iframe
          src="https://www.listennotes.com/podcasts/贱康课-刘老湿的贱康课-YAxIbd5ij0H/embed/"
          style={{ height: '100%', width: '100%' }}
          frameBorder="0"
          scrolling="no"
          title="podcast"
        ></iframe>
      </div>
    </div>
  );
}
