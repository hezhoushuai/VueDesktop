import Mock from 'mockjs' // 引入mockjs

Mock.setup({
  timeout: 500 // 延迟效果
})

// 拦截请求并返回数据
Mock.mock('/user/login', (req, res) => {
  // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  console.log('in Mock')
  const list = {
    code: 20000,
    data: {
      token: 'admin'
    }
  }
  return list
})

// 拦截请求并返回数据
Mock.mock('/user/info?token=admin', (req, res) => {
  // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  console.log('in Mock info')
  const list = {
    code: 20000,
    data: {
      roles: ['admin'],
      name: 'admin',
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    }
  }
  return list
})

Mock.mock('/user/logout', (req, res) => {
  console.log('Mock logOut')
  const list = {
    code: 20000
  }
  return list
})

Mock.mock('/table/list', (req, res) => {
    console.log('Mock list')
    const list = {
      code: 20000,
      data: [
          {title: 'title1', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title2', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title3', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title4', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title5', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title6', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title7', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title8', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title9', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title10', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'},
          {title: 'title11', author: 'hezhoushuai', pageviews: '22', status: 0, display_time: '2022-09-12 12:00:00'}
      ]
    }
    return list
  })