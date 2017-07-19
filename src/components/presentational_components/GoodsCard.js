import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import Image from './Image';
import PropTypes from 'prop-types';

const GoodsCard = (props) => (
  <Card>
    <Image src={props.imageSrc} />
    <Card.Content>
      <Card.Header>
        { props.goodsTitle }
      </Card.Header>
      <Card.Description>
        { props.goodsDescription }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='ruble' />
        { props.price }
      </a>
    </Card.Content>
  </Card>
);

GoodsCard.propTypes = {
  imageSrc: PropTypes.string,
  goodsTitle: PropTypes.string,
  goodsDescription: PropTypes.string,
  price: PropTypes.string
};

export default GoodsCard;
