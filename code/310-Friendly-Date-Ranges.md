## 310. Friendly Date Ranges

```javascript
function makeFriendlyDates(arr) {
  // 友好的月份
  const monthArr = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  // 友好的日期
  const dayArr = ['1st', '2nd', '3rd', '4th', '5th', '6th',
    '7th', '8th', '9th', '10th', '11th', '12th', '13th',
    '14th', '15th', '16th', '17th', '18th', '19th', '20th',
    '21st', '22nd', '23rd', '24th', '25th', '26th', '27th',
    '28th', '29th', '30th', '31st'];
  const ONE_YEAR_MINISECONDES = 31507200000;
  const res = [null, null];
  // 开始日期 [年, 月, 日]
  const start = arr[0].split('-').map(item => {
    // 将字符串转换为数字
    return parseInt(item, 10);
  });
  // 结束日期 [年, 月, 日]
  const end = arr[1].split('-').map(item => {
    // 将字符串转换为数字
    return parseInt(item, 10);
  });

  // 判断年份之差是否大于一年
  if (new Date(arr[1]) - new Date(arr[0]) > ONE_YEAR_MINISECONDES) {
    // 大于一年
    // 显示所有的日期和年份
    res[0] = `${monthArr[ start[1] - 1 ]} ${dayArr[ start[2] - 1 ]}, ${start[0]}`;
    res[1] = `${monthArr[ end[1] - 1 ]} ${dayArr[ end[2] - 1 ]}, ${end[0]}`;
  } else {
    // 年份之差小于一年 --> 结束日期不用写年份

    // 判断是否在同一个月(同一年的同一个月)
    if (start[0] === end[0] && start[1] === end[1]) {
      // 是在同一个月 --> 结束日期不用写月份
      res[0] = `${monthArr[ start[1] - 1 ]} ${dayArr[ start[2] - 1 ]}, ${start[0]}`;
      res[1] = `${dayArr[ end[2] - 1 ]}`;

      // 判断是否同一天
      if (start[2] === end[2]) {
        // 是同一天，不用写结束日期
        res.splice(1, 1); // 删除数组的第二项
      }
    } else {
      // 不是同一个月 --> 需要写月份
      res[0] = `${monthArr[ start[1] - 1 ]} ${dayArr[start[2] - 1]}, ${start[0]}`;
      res[1] = `${monthArr[ end[1] - 1 ]} ${dayArr[end[2] - 1]}`;
    }

    // 判断开始日期的年份，是不是当前年份
    const currentYear = new Date().getFullYear();
    // 注意，这里 freeCodeCamp 的当前年份是 2016
    // [https://github.com/FreeCodeCampChina/freecodecamp.cn/issues/173](https://github.com/FreeCodeCampChina/freecodecamp.cn/issues/173)
    // 所以不能用 currentYear 去比较
    // if (currentYear === start[0]) {
    if (2016 === start[0]) {
      // 是在同一个月份 --> 开始日期不用写年份
      res[0] = `${monthArr[start[1] - 1 ]} ${dayArr[start[2] - 1]}`;
    }
  }
  return res;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
```
