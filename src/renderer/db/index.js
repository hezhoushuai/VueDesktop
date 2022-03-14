import Dexie from 'dexie'

// 实例化一个数据库
const dbInstance = new Dexie('task')

// 声明版本和数据结构（对象库）
dbInstance.version(1).stores({
  // 创建 3 个对象库，键为对象库的名称，值是对象库的中数据项的键和索引，用逗号分隔
  // 加星号 * 表示数据相应属性值为数组，且将数组的每个元素作为索引
  testTable: 'id, title, author, pageviews, status, display_time'
})

export default dbInstance

