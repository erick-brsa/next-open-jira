import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>Open Jira</Typography>
    </Layout>
  )
}

export default HomePage;
