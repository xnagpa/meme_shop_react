import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, color, boolean, date } from '@storybook/addon-knobs';
import moment from 'moment';

import Button from './Button';
import Welcome from './Welcome';

addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addWithInfo('with text',
  'Простой компонент кнопки ',
  () => (<Button
     onClick={action('clicked')}
     disabled={boolean('Disabled ', true)}
     style={{backgroundColor: color('Bgcolor', '#FFFFFF')}}>

    { text('Button label','Hello, Button!') }
    </Button>));
  //.add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const DateCaption = ({ date }) => (
  <span>{moment(date).format('L')}</span>
);

storiesOf('DateCaption ', module)
  .add('Simple Date', () => (
    <DateCaption date={date('Value')}/>
  ));
  //
  // // disabled={boolean('Disabled ', true)}
  // style={{backgroundColor: color('Bgcolor', '#FFFFFF')}}>
  //{ text('Button label','Hello, Button!') }
