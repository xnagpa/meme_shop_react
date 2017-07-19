import React from 'react';
import { List } from 'semantic-ui-react';
import Image from './Image';
import { Icon } from 'semantic-ui-react';

const CatalogMenu = () => (
  <List>
    <List.Item>
       <Icon name='book'/>
       <List.Content>
         <List.Header as='a'>Манга</List.Header>
         <List.Description>Все связанное с японкой мангой</List.Description>
       </List.Content>
    </List.Item>
    <List.Item>
       <Icon name='warning sign' />
       <List.Content>
         <List.Header as='a'>18+</List.Header>
         <List.Description>NSFW контент</List.Description>
       </List.Content>
    </List.Item>
    <List.Item>
       <Icon name='info circle' />
       <List.Content>
         <List.Header as='a'>Разные фандомы</List.Header>
         <List.Description>Шерлок, Adventure time, My little pony</List.Description>
       </List.Content>
    </List.Item>
  </List>
);

export default CatalogMenu;
