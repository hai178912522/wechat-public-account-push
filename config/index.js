export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxa99f70ca93e00847",
    // 公众号appSecret
    appSecret: "72ebbb15c7e12e38b8b38d3f01257351",
    // 模板消息id
    templateId: "UctRo_aFUd_x_ESF9ODuctPsCBzHEWiHaT8BN3HDyk8",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["ojPYT50XdTpF7gRM_h3yNMrQKFzU","ojPYT524L8_hlYHJjysxbUlQvPPw"],
     
    // 信息配置
    // 所在省份
    province: "江苏",
    // 所在城市
    city: "南京",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "大宝贝", "year": "1996", "date": "10-12", "type": 'new'},
      {"name": "老公", "year": "1995", "date": "03-07", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2019-11-01"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
