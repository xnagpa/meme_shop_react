import React from 'react';
import GoodsCatalog from '../container_components/GoodsCatalog';
import CatalogMenu from '../presentational_components/CatalogMenu';
import { Grid, Container, Header } from 'semantic-ui-react';

const MainPage = () => (
  <Container>
    <Grid>
      <Grid.Row columns={1}>
        <h1>Teh meme shop!</h1>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width={4}>
          <CatalogMenu />
        </Grid.Column>
        <Grid.Column width={12}>
          <GoodsCatalog />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default MainPage;
