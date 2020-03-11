import { graphql } from 'gatsby'
import * as React from 'react'
import { Page } from '../containers/Page/Page'
import { HomeDataQuery } from '../graphql-types'
import { Home } from '../containers/Home/Home'

interface Props {
  data: HomeDataQuery
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <Page page="Personal Page">
      <Home>{data.home.content}</Home>
    </Page>
  )
}

export default HomePage

export const query = graphql`
  query HomeData {
    home {
      content
    }
  }
`
