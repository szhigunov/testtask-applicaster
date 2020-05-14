/**
 * @format
 */

import 'react-native';
import React from 'react';
import {FeedItem} from '../feed-item';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const DATA = [
  {
    type: {
      value: 'link',
    },
    title: 'נתניהו בראיון: "מאשימים אותי בבגידה? את כולם אני אתבע"',
    summary:
      'ראש הממשלה סבור כי הרמטכ"לים לשעבר של \'כחול לבן\' יודעים שלא קיבל כסף ממכירת צוללות ומשיב אש: "אותי אתם מאשימים בבגידה? את מי שנלחם נגד כל העולם כדי למנוע מאיראן את ההסכם שאתם תמכתם בו?" | הראיון המלא הערב בחדשות 20',
    id: '343297',
    published: '',
    updated: '',
    content: {
      content:
        'ראש הממשלה סבור כי הרמטכ"לים לשעבר של \'כחול לבן\' יודעים שלא קיבל כסף ממכירת צוללות ומשיב אש: "אותי אתם מאשימים בבגידה? את מי שנלחם נגד כל העולם כדי למנוע מאיראן את ההסכם שאתם תמכתם בו?" | הראיון המלא הערב בחדשות 20',
      type: 'html',
    },
    link: {
      rel: 'alternate',
      type: 'text/html',
      href:
        'https://www.20il.co.il/mobile-post/?id=343297&native=true&shareable=true&showcontext=true&title=%D7%90%D7%A7%D7%98%D7%95%D7%90%D7%9C%D7%99%D7%94%20%D7%95%D7%97%D7%93%D7%A9%D7%95%D7%AA',
    },
    media_group: [
      {
        type: 'image',
        media_item: [
          {
            src:
              'https://www.20il.co.il/wp-content/uploads/2019/03/%D7%A0%D7%AA%D7%A0%D7%99%D7%94%D7%95-%D7%91%D7%A8%D7%90%D7%99%D7%95%D7%9F-1270x714.jpg',
            type: 'image',
            scale: 'small',
            key: 'image_base',
          },
          {
            src:
              'https://www.20il.co.il/wp-content/uploads/2019/03/%D7%A0%D7%AA%D7%A0%D7%99%D7%94%D7%95-%D7%91%D7%A8%D7%90%D7%99%D7%95%D7%9F-1270x714.jpg',
            type: 'image',
            scale: 'large',
            key: 'image_base_2',
          },
        ],
      },
    ],
    author: {
      name: '',
    },
  },
];

describe('Component/FeedItem', () => {
  it('FeedItem renders correctly', () => {
    renderer.create(<FeedItem item={DATA[0]} />);
  });
});
