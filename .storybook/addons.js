import React from 'react';
import '@storybook/addon-knobs/register';
import addonAPI from '@storybook/addons';

addonAPI.register('thinknetica/notesPanel', (storybookAPI) => (
  addonAPI.addPanel('thinknetica/notesPanel/panel', {
    title: 'Notes',
    render: () => (
       <b>Notes</b>
    )
  })
));
