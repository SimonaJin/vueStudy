import Mock from 'mockjs';
// import data from '../data.json'

Mock.mock(/getNewsList/, {
  'list|5': [{
    'url': '@url',
    'title': '@ctitle(5, 20)'
  }]
})
