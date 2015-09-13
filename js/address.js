/**
 * Created by Administrator on 2015/9/12.
 */

var  province=[
    {
        "ID": 1,
        "name": "北京市",
        "parent_id": 1,
        "cascade": 1
    },
    {
        "ID": 2,
        "name": "天津市",
        "parent_id": 2,
        "cascade": 1
    },
    {
        "ID":3,
        "name": "上海市",
        "parent_id": 3,
        "cascade": 1
    },
    {
        "ID": 4,
        "name": "重庆市",
        "parent_id":4,
        "cascade": 1
    },
    {
        "ID": 5,
        "name": "河北省",
        "parent_id": 5,
        "cascade": 1
    },
    {
        "ID": 6,
        "name": "山西省",
        "parent_id": 6,
        "cascade": 1
    },
    {
        "ID": 7,
        "name": "内蒙古",
        "parent_id": 7,
        "cascade": 1
    },
    {
        "ID": 8,
        "name": "辽宁省",
        "parent_id": 8,
        "cascade": 1
    },
    {
        "ID": 9,
        "name": "吉林省",
        "parent_id": 9,
        "cascade": 1
    },
    {
        "ID": 10,
        "name": "黑龙江省",
        "parent_id": 10,
        "cascade": 1
    },
    {
        "ID": 11,
        "name": "江苏省",
        "parent_id": 11,
        "cascade": 1
    },
    {
        "ID": 12,
        "name": "浙江省",
        "parent_id": 12,
        "cascade": 1
    },
    {
        "ID": 13,
        "name": "安徽省",
        "parent_id": 13,
        "cascade": 1
    },
    {
        "ID": 14,
        "name": "福建省",
        "parent_id": 14,
        "cascade": 1
    },
    {
        "ID": 15,
        "name": "江西省",
        "parent_id": 15,
        "cascade": 1
    },
    {
        "ID": 16,
        "name": "山东省",
        "parent_id": 16,
        "cascade": 1
    },
    {
        "ID": 17,
        "name": "河南省",
        "parent_id": 17,
        "cascade": 1
    },
    {
        "ID": 18,
        "name": "湖北省",
        "parent_id": 18,
        "cascade": 1
    },
    {
        "ID": 19,
        "name": "湖南省",
        "parent_id": 19,
        "cascade": 1
    },
    {
        "ID": 20,
        "name": "广东省",
        "parent_id": 20,
        "cascade": 1
    },
    {
        "ID": 21,
        "name": "广西省",
        "parent_id": 21,
        "cascade": 1
    },
    {
        "ID": 22,
        "name": "海南省",
        "parent_id":22,
        "cascade": 1
    },
    {
        "ID": 23,
        "name": "四川省",
        "parent_id":23,
        "cascade": 1
    },
    {
        "ID": 24,
        "name": "贵州省",
        "parent_id": 24,
        "cascade": 1
    },
    {
        "ID": 25,
        "name": "云南省",
        "parent_id":25,
        "cascade": 1
    },
    {
        "ID": 26,
        "name": "西藏",
        "parent_id": 26,
        "cascade": 1
    },
    {
        "ID": 27,
        "name": "陕西省",
        "parent_id": 27,
        "cascade": 1
    },
    {
        "ID": 28,
        "name": "甘肃省",
        "parent_id": 28,
        "cascade": 1
    },
    {
        "ID": 29,
        "name": "青海省",
        "parent_id": 29,
        "cascade": 1
    },
    {
        "ID": 30,
        "name": "宁夏",
        "parent_id": 30,
        "cascade": 1
    },
    {
        "ID": 31,
        "name": "新疆",
        "parent_id": 31,
        "cascade": 1
    },
    {
        "ID": 32,
        "name": "香港",
        "parent_id":32,
        "cascade": 1
    },
    {
        "ID": 33,
        "name": "澳门",
        "parent_id": 33,
        "cascade": 1
    },
    {
        "ID": 34,
        "name": "台湾省",
        "parent_id":34,
        "cascade": 1
    }
];

var city=[
    {
        "ID": 101,
        "name": "地级市",
        "parent_id": 1,
        "cascade": 2
    },
    {
        "ID": 102,
        "name": "地级市",
        "parent_id": 2,
        "cascade": 2
    },
    {
        "ID": 103,
        "name": "地级市",
        "parent_id": 3,
        "cascade": 2
    },
    {
        "ID": 104,
        "name": "地级市",
        "parent_id": 4,
        "cascade": 2
    },
    {
        "name": "石家庄市",
        "ID": 0,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "张家口市",
        "ID": 1,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "承德市",
        "ID": 2,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "秦皇岛市",
        "ID": 3,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "唐山市",
        "ID": 4,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "廊坊市",
        "ID": 5,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "保定市",
        "ID": 6,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "衡水市",
        "ID": 7,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "沧州市",
        "ID": 8,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "邢台市",
        "ID": 9,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "邯郸市",
        "ID": 10,
        "cascade": 2,
        "parent_id": 5
    },
    {
        "name": "太原市",
        "ID": 11,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "朔州市",
        "ID": 12,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "大同市",
        "ID": 13,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "阳泉市",
        "ID": 14,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "长治市",
        "ID": 15,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "晋城市",
        "ID": 16,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "忻州市",
        "ID": 17,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "晋中市",
        "ID": 18,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "临汾市",
        "ID": 19,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "吕梁市",
        "ID": 20,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "运城市",
        "ID": 21,
        "cascade": 2,
        "parent_id": 6
    },
    {
        "name": "呼和浩特市",
        "ID": 22,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "包头市",
        "ID": 23,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "乌海市",
        "ID": 24,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "赤峰市",
        "ID": 25,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "通辽市",
        "ID": 26,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "呼伦贝尔市",
        "ID": 27,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "鄂尔多斯市",
        "ID": 28,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "乌兰察布市",
        "ID": 29,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "巴彦淖尔市",
        "ID": 30,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "兴安盟",
        "ID": 31,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "锡林郭勒盟",
        "ID": 32,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "阿拉善盟",
        "ID": 33,
        "cascade": 2,
        "parent_id": 7
    },
    {
        "name": "沈阳市",
        "ID": 34,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "朝阳市",
        "ID": 35,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "阜新市",
        "ID": 36,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "铁岭市",
        "ID": 37,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "抚顺市",
        "ID": 38,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "本溪市",
        "ID": 39,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "辽阳市",
        "ID": 40,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "鞍山市",
        "ID": 41,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "丹东市",
        "ID": 42,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "大连市",
        "ID": 43,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "营口市",
        "ID": 44,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "盘锦市",
        "ID": 45,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "锦州市",
        "ID": 46,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "葫芦岛市",
        "ID": 47,
        "cascade": 2,
        "parent_id": 8
    },
    {
        "name": "长春市",
        "ID": 48,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "白城市",
        "ID": 49,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "松原市",
        "ID": 50,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "吉林市",
        "ID": 51,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "四平市",
        "ID": 52,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "辽源市",
        "ID": 53,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "通化市",
        "ID": 54,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "白山市",
        "ID": 55,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "延边州",
        "ID": 56,
        "cascade": 2,
        "parent_id": 9
    },
    {
        "name": "哈尔滨市",
        "ID": 57,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "齐齐哈尔市",
        "ID": 58,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "七台河市",
        "ID": 59,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "黑河市",
        "ID": 60,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "大庆市",
        "ID": 61,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "鹤岗市",
        "ID": 62,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "伊春市",
        "ID": 63,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "佳木斯市",
        "ID": 64,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "双鸭山市",
        "ID": 65,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "鸡西市",
        "ID": 66,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "牡丹江市",
        "ID": 67,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "绥化市",
        "ID": 68,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "大兴安岭地区",
        "ID": 69,
        "cascade": 2,
        "parent_id": 10
    },
    {
        "name": "南京市",
        "ID": 70,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "徐州市",
        "ID": 71,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "连云港市",
        "ID": 72,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "宿迁市",
        "ID": 73,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "淮安市",
        "ID": 74,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "盐城市",
        "ID": 75,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "扬州市",
        "ID": 76,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "泰州市",
        "ID": 77,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "南通市",
        "ID": 78,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "镇江市",
        "ID": 79,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "常州市",
        "ID": 80,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "无锡市",
        "ID": 81,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "苏州市",
        "ID": 82,
        "cascade": 2,
        "parent_id": 11
    },
    {
        "name": "杭州市",
        "ID": 83,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "湖州市",
        "ID": 84,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "嘉兴市",
        "ID": 85,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "舟山市",
        "ID": 86,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "宁波市",
        "ID": 87,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "绍兴市",
        "ID": 88,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "衢州市",
        "ID": 89,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "金华市",
        "ID": 90,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "台州市",
        "ID": 91,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "温州市",
        "ID": 92,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "丽水市",
        "ID": 93,
        "cascade": 2,
        "parent_id": 12
    },
    {
        "name": "合肥市",
        "ID": 94,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "宿州市",
        "ID": 95,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "淮北市",
        "ID": 96,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "亳州市",
        "ID": 97,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "阜阳市",
        "ID": 98,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "蚌埠市",
        "ID": 99,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "淮南市",
        "ID": 100,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "滁州市",
        "ID": 101,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "马鞍山市",
        "ID": 102,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "芜湖市",
        "ID": 103,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "铜陵市",
        "ID": 104,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "安庆市",
        "ID": 105,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "黄山市",
        "ID": 106,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "六安市",
        "ID": 107,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "巢湖市",
        "ID": 108,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "池州市",
        "ID": 109,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "宣城市",
        "ID": 110,
        "cascade": 2,
        "parent_id": 13
    },
    {
        "name": "福州市",
        "ID": 111,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "南平市",
        "ID": 112,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "莆田市",
        "ID": 113,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "三明市",
        "ID": 114,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "泉州市",
        "ID": 115,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "厦门市",
        "ID": 116,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "漳州市",
        "ID": 117,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "龙岩市",
        "ID": 118,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "宁德市",
        "ID": 119,
        "cascade": 2,
        "parent_id": 14
    },
    {
        "name": "南昌市",
        "ID": 120,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "九江市",
        "ID": 121,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "景德镇市",
        "ID": 122,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "鹰潭市",
        "ID": 123,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "新余市",
        "ID": 124,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "萍乡市",
        "ID": 125,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "赣州市",
        "ID": 126,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "上饶市",
        "ID": 127,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "抚州市",
        "ID": 128,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "宜春市",
        "ID": 129,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "吉安市",
        "ID": 130,
        "cascade": 2,
        "parent_id": 15
    },
    {
        "name": "济南市",
        "ID": 131,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "青岛市",
        "ID": 132,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "聊城市",
        "ID": 133,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "德州市",
        "ID": 134,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "东营市",
        "ID": 135,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "淄博市",
        "ID": 136,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "潍坊市",
        "ID": 137,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "烟台市",
        "ID": 138,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "威海市",
        "ID": 139,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "日照市",
        "ID": 140,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "临沂市",
        "ID": 141,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "枣庄市",
        "ID": 142,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "济宁市",
        "ID": 143,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "泰安市",
        "ID": 144,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "莱芜市",
        "ID": 145,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "滨州市",
        "ID": 146,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "菏泽市",
        "ID": 147,
        "cascade": 2,
        "parent_id": 16
    },
    {
        "name": "郑州市",
        "ID": 148,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "开封市",
        "ID": 149,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "三门峡市",
        "ID": 150,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "洛阳市",
        "ID": 151,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "焦作市",
        "ID": 152,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "新乡市",
        "ID": 153,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "鹤壁市",
        "ID": 154,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "安阳市",
        "ID": 155,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "濮阳市",
        "ID": 156,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "商丘市",
        "ID": 157,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "许昌市",
        "ID": 158,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "漯河市",
        "ID": 159,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "平顶山市",
        "ID": 160,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "南阳市",
        "ID": 161,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "信阳市",
        "ID": 162,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "周口市",
        "ID": 163,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "驻马店市",
        "ID": 164,
        "cascade": 2,
        "parent_id": 17
    },
    {
        "name": "武汉市",
        "ID": 165,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "十堰市",
        "ID": 166,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "襄樊市",
        "ID": 167,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "荆门市",
        "ID": 168,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "孝感市",
        "ID": 169,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "黄冈市",
        "ID": 170,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "鄂州市",
        "ID": 171,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "黄石市",
        "ID": 172,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "咸宁市",
        "ID": 173,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "荆州市",
        "ID": 174,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "宜昌市",
        "ID": 175,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "随州市",
        "ID": 176,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "省直辖县级行政单位",
        "ID": 177,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "恩施州",
        "ID": 178,
        "cascade": 2,
        "parent_id": 18
    },
    {
        "name": "长沙市",
        "ID": 179,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "张家界市",
        "ID": 180,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "常德市",
        "ID": 181,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "益阳市",
        "ID": 182,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "岳阳市",
        "ID": 183,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "株洲市",
        "ID": 184,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "湘潭市",
        "ID": 185,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "衡阳市",
        "ID": 186,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "郴州市",
        "ID": 187,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "永州市",
        "ID": 188,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "邵阳市",
        "ID": 189,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "怀化市",
        "ID": 190,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "娄底市",
        "ID": 191,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "湘西州",
        "ID": 192,
        "cascade": 2,
        "parent_id": 19
    },
    {
        "name": "广州市",
        "ID": 193,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "深圳市",
        "ID": 194,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "清远市",
        "ID": 195,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "韶关市",
        "ID": 196,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "河源市",
        "ID": 197,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "梅州市",
        "ID": 198,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "潮州市",
        "ID": 199,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "汕头市",
        "ID": 200,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "揭阳市",
        "ID": 201,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "汕尾市",
        "ID": 202,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "惠州市",
        "ID": 203,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "东莞市",
        "ID": 204,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "珠海市",
        "ID": 205,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "中山市",
        "ID": 206,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "江门市",
        "ID": 207,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "佛山市",
        "ID": 208,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "肇庆市",
        "ID": 209,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "云浮市",
        "ID": 210,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "阳江市",
        "ID": 211,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "茂名市",
        "ID": 212,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "湛江市",
        "ID": 213,
        "cascade": 2,
        "parent_id": 20
    },
    {
        "name": "南宁市",
        "ID": 214,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "桂林市",
        "ID": 215,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "柳州市",
        "ID": 216,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "梧州市",
        "ID": 217,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "贵港市",
        "ID": 218,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "玉林市",
        "ID": 219,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "钦州市",
        "ID": 220,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "北海市",
        "ID": 221,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "防城港市",
        "ID": 222,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "崇左市",
        "ID": 223,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "百色市",
        "ID": 224,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "河池市",
        "ID": 225,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "来宾市",
        "ID": 226,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "贺州市",
        "ID": 227,
        "cascade": 2,
        "parent_id": 21
    },
    {
        "name": "海口市",
        "ID": 228,
        "cascade": 2,
        "parent_id": 22
    },
    {
        "name": "三亚市",
        "ID": 229,
        "cascade": 2,
        "parent_id": 22
    },
    {
        "name": "省直辖行政单位",
        "ID": 230,
        "cascade": 2,
        "parent_id": 22
    },
    {
        "name": "成都市",
        "ID": 231,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "广元市",
        "ID": 232,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "绵阳市",
        "ID": 233,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "德阳市",
        "ID": 234,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "南充市",
        "ID": 235,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "广安市",
        "ID": 236,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "遂宁市",
        "ID": 237,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "内江市",
        "ID": 238,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "乐山市",
        "ID": 239,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "自贡市",
        "ID": 240,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "泸州市",
        "ID": 241,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "宜宾市",
        "ID": 242,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "攀枝花市",
        "ID": 243,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "巴中市",
        "ID": 244,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "达州市",
        "ID": 245,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "资阳市",
        "ID": 246,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "眉山市",
        "ID": 247,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "雅安市",
        "ID": 248,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "阿坝州",
        "ID": 249,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "甘孜州",
        "ID": 250,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "凉山州",
        "ID": 251,
        "cascade": 2,
        "parent_id": 23
    },
    {
        "name": "贵阳市",
        "ID": 252,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "六盘水市",
        "ID": 253,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "遵义市",
        "ID": 254,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "安顺市",
        "ID": 255,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "毕节地区",
        "ID": 256,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "铜仁地区",
        "ID": 257,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "黔东南州",
        "ID": 258,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "黔南州",
        "ID": 259,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "黔西南州",
        "ID": 260,
        "cascade": 2,
        "parent_id": 24
    },
    {
        "name": "昆明市",
        "ID": 261,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "曲靖市",
        "ID": 262,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "玉溪市",
        "ID": 263,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "保山市",
        "ID": 264,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "昭通市",
        "ID": 265,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "丽江市",
        "ID": 266,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "思茅市",
        "ID": 267,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "临沧市",
        "ID": 268,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "德宏州",
        "ID": 269,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "怒江州",
        "ID": 270,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "迪庆州",
        "ID": 271,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "大理州",
        "ID": 272,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "楚雄州",
        "ID": 273,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "红河州",
        "ID": 274,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "文山州",
        "ID": 275,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "西双版纳州",
        "ID": 276,
        "cascade": 2,
        "parent_id": 25
    },
    {
        "name": "拉萨市",
        "ID": 277,
        "cascade": 2,
        "parent_id": 26
    },
    {
        "name": "那曲地区",
        "ID": 278,
        "cascade": 2,
        "parent_id": 26
    },
    {
        "name": "昌都地区",
        "ID": 279,
        "cascade": 2,
        "parent_id": 26
    },
    {
        "name": "林芝地区",
        "ID": 280,
        "cascade": 2,
        "parent_id": 26
    },
    {
        "name": "山南地区",
        "ID": 281,
        "cascade": 2,
        "parent_id": 26
    },
    {
        "name": "日喀则地区",
        "ID": 282,
        "cascade": 2,
        "parent_id": 26
    },
    {
        "name": "阿里地区",
        "ID": 283,
        "cascade": 2,
        "parent_id": 26
    },
    {
        "name": "西安市",
        "ID": 284,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "延安市",
        "ID": 285,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "铜川市",
        "ID": 286,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "渭南市",
        "ID": 287,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "咸阳市",
        "ID": 288,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "宝鸡市",
        "ID": 289,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "汉中市",
        "ID": 290,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "榆林市",
        "ID": 291,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "安康市",
        "ID": 292,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "商洛市",
        "ID": 293,
        "cascade": 2,
        "parent_id": 27
    },
    {
        "name": "兰州市",
        "ID": 294,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "嘉峪关市",
        "ID": 295,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "白银市",
        "ID": 296,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "天水市",
        "ID": 297,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "武威市",
        "ID": 298,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "酒泉市",
        "ID": 299,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "张掖市",
        "ID": 300,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "庆阳市",
        "ID": 301,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "平凉市",
        "ID": 302,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "定西市",
        "ID": 303,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "陇南市",
        "ID": 304,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "临夏州",
        "ID": 305,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "甘南州",
        "ID": 306,
        "cascade": 2,
        "parent_id": 28
    },
    {
        "name": "西宁市",
        "ID": 307,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "海东地区",
        "ID": 308,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "海北州",
        "ID": 309,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "海南州",
        "ID": 310,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "黄南州",
        "ID": 311,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "果洛州",
        "ID": 312,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "玉树州",
        "ID": 313,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "海西州",
        "ID": 314,
        "cascade": 2,
        "parent_id": 29
    },
    {
        "name": "银川市",
        "ID": 315,
        "cascade": 2,
        "parent_id": 30
    },
    {
        "name": "石嘴山市",
        "ID": 316,
        "cascade": 2,
        "parent_id": 30
    },
    {
        "name": "吴忠市",
        "ID": 317,
        "cascade": 2,
        "parent_id": 30
    },
    {
        "name": "固原市",
        "ID": 318,
        "cascade": 2,
        "parent_id": 30
    },
    {
        "name": "中卫市",
        "ID": 319,
        "cascade": 2,
        "parent_id": 30
    },
    {
        "name": "乌鲁木齐市",
        "ID": 320,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "克拉玛依市",
        "ID": 321,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "自治区直辖县级行政单位",
        "ID": 322,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "喀什地区",
        "ID": 323,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "阿克苏地区",
        "ID": 324,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "和田地区",
        "ID": 325,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "吐鲁番地区",
        "ID": 326,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "哈密地区",
        "ID": 327,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "克孜勒苏柯州",
        "ID": 328,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "博尔塔拉州",
        "ID": 329,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "昌吉州",
        "ID": 330,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "巴音郭楞州",
        "ID": 331,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "伊犁州",
        "ID": 332,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "塔城地区",
        "ID": 333,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "阿勒泰地区",
        "ID": 334,
        "cascade": 2,
        "parent_id": 31
    },
    {
        "name": "香港特别行政区",
        "ID": 335,
        "cascade": 2,
        "parent_id": 32
    },
    {
        "name": "澳门特别行政区",
        "ID": 336,
        "cascade": 2,
        "parent_id": 33
    },
    {
        "name": "台北",
        "ID": 337,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "高雄",
        "ID": 338,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "台中",
        "ID": 339,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "花莲",
        "ID": 340,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "基隆",
        "ID": 341,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "嘉义",
        "ID": 342,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "金门",
        "ID": 343,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "连江",
        "ID": 344,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "苗栗",
        "ID": 345,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "南投",
        "ID": 346,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "澎湖",
        "ID": 347,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "屏东",
        "ID": 348,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "台东",
        "ID": 349,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "台南",
        "ID": 350,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "桃园",
        "ID": 351,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "新竹",
        "ID": 352,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "宜兰",
        "ID": 353,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "云林",
        "ID": 354,
        "cascade": 2,
        "parent_id": 34
    },
    {
        "name": "彰化",
        "ID": 355,
        "cascade": 2,
        "parent_id": 34
    }
];

var xian=[
    {
        "name": "东城区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_0"
    },
    {
        "name": "西城区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_1"
    },
    {
        "name": "崇文区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_2"
    },
    {
        "name": "宣武区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_3"
    },
    {
        "name": "朝阳区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_4"
    },
    {
        "name": "丰台区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_5"
    },
    {
        "name": "石景山区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_6"
    },
    {
        "name": "海淀区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_7"
    },
    {
        "name": "门头沟区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_8"
    },
    {
        "name": "房山区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_9"
    },
    {
        "name": "通州区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_10"
    },
    {
        "name": "顺义区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_11"
    },
    {
        "name": "昌平区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_12"
    },
    {
        "name": "大兴区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_13"
    },
    {
        "name": "怀柔区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_14"
    },
    {
        "name": "平谷区",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_15"
    },
    {
        "name": "密云县",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_16"
    },
    {
        "name": "延庆县",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_17"
    },
    {
        "name": "延庆镇",
        "cascade": 3,
        "parent_id": 101,
        "ID": "City_18"
    },
    {
        "name": "和平区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_19"
    },
    {
        "name": "河东区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_20"
    },
    {
        "name": "河西区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_21"
    },
    {
        "name": "南开区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_22"
    },
    {
        "name": "河北区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_23"
    },
    {
        "name": "红桥区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_24"
    },
    {
        "name": "塘沽区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_25"
    },
    {
        "name": "汉沽区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_26"
    },
    {
        "name": "大港区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_27"
    },
    {
        "name": "东丽区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_28"
    },
    {
        "name": "西青区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_29"
    },
    {
        "name": "津南区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_30"
    },
    {
        "name": "北辰区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_31"
    },
    {
        "name": "武清区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_32"
    },
    {
        "name": "宝坻区",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_33"
    },
    {
        "name": "蓟县",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_34"
    },
    {
        "name": "宁河县",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_35"
    },
    {
        "name": "芦台镇",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_36"
    },
    {
        "name": "静海县",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_37"
    },
    {
        "name": "静海镇",
        "cascade": 3,
        "parent_id": 102,
        "ID": "City_38"
    },
    {
        "name": "黄浦区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_39"
    },
    {
        "name": "卢湾区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_40"
    },
    {
        "name": "徐汇区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_41"
    },
    {
        "name": "长宁区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_42"
    },
    {
        "name": "静安区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_43"
    },
    {
        "name": "普陀区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_44"
    },
    {
        "name": "闸北区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_45"
    },
    {
        "name": "虹口区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_46"
    },
    {
        "name": "杨浦区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_47"
    },
    {
        "name": "闵行区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_48"
    },
    {
        "name": "宝山区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_49"
    },
    {
        "name": "嘉定区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_50"
    },
    {
        "name": "浦东新区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_51"
    },
    {
        "name": "金山区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_52"
    },
    {
        "name": "松江区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_53"
    },
    {
        "name": "青浦区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_54"
    },
    {
        "name": "南汇区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_55"
    },
    {
        "name": "奉贤区",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_56"
    },
    {
        "name": "崇明县",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_57"
    },
    {
        "name": "城桥镇",
        "cascade": 3,
        "parent_id": 103,
        "ID": "City_58"
    },
    {
        "name": "渝中区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_59"
    },
    {
        "name": "大渡口区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_60"
    },
    {
        "name": "江北区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_61"
    },
    {
        "name": "沙坪坝区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_62"
    },
    {
        "name": "九龙坡区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_63"
    },
    {
        "name": "南岸区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_64"
    },
    {
        "name": "北碚区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_65"
    },
    {
        "name": "万盛区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_66"
    },
    {
        "name": "双桥区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_67"
    },
    {
        "name": "渝北区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_68"
    },
    {
        "name": "巴南区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_69"
    },
    {
        "name": "万州区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_70"
    },
    {
        "name": "涪陵区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_71"
    },
    {
        "name": "黔江区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_72"
    },
    {
        "name": "长寿区",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_73"
    },
    {
        "name": "合川市",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_74"
    },
    {
        "name": "永川区市",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_75"
    },
    {
        "name": "江津市",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_76"
    },
    {
        "name": "南川市",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_77"
    },
    {
        "name": "綦江县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_78"
    },
    {
        "name": "潼南县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_79"
    },
    {
        "name": "铜梁县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_80"
    },
    {
        "name": "大足县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_81"
    },
    {
        "name": "荣昌县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_82"
    },
    {
        "name": "璧山县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_83"
    },
    {
        "name": "垫江县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_84"
    },
    {
        "name": "武隆县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_85"
    },
    {
        "name": "丰都县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_86"
    },
    {
        "name": "城口县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_87"
    },
    {
        "name": "梁平县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_88"
    },
    {
        "name": "开县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_89"
    },
    {
        "name": "巫溪县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_90"
    },
    {
        "name": "巫山县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_91"
    },
    {
        "name": "奉节县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_92"
    },
    {
        "name": "云阳县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_93"
    },
    {
        "name": "忠县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_94"
    },
    {
        "name": "石柱土家族自治县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_95"
    },
    {
        "name": "彭水苗族土家族自治县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_96"
    },
    {
        "name": "酉阳土家族苗族自治县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_97"
    },
    {
        "name": "秀山土家族苗族自治县",
        "cascade": 3,
        "parent_id": 104,
        "ID": "City_98"
    },
    {
        "name": "长安区",
        "cascade": 3,
        "parent_id": 0,
        "ID": 0
    },
    {
        "name": "桥东区",
        "cascade": 3,
        "parent_id": 0,
        "ID": 1
    },
    {
        "name": "桥西区",
        "cascade": 3,
        "parent_id": 0,
        "ID": 2
    },
    {
        "name": "新华区",
        "cascade": 3,
        "parent_id": 0,
        "ID": 3
    },
    {
        "name": "裕华区",
        "cascade": 3,
        "parent_id": 0,
        "ID": 4
    },
    {
        "name": "井陉矿区",
        "cascade": 3,
        "parent_id": 0,
        "ID": 5
    },
    {
        "name": "辛集市",
        "cascade": 3,
        "parent_id": 0,
        "ID": 6
    },
    {
        "name": "藁城市",
        "cascade": 3,
        "parent_id": 0,
        "ID": 7
    },
    {
        "name": "晋州市",
        "cascade": 3,
        "parent_id": 0,
        "ID": 8
    },
    {
        "name": "新乐市",
        "cascade": 3,
        "parent_id": 0,
        "ID": 9
    },
    {
        "name": "鹿泉市",
        "cascade": 3,
        "parent_id": 0,
        "ID": 10
    },
    {
        "name": "井陉县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 11
    },
    {
        "name": "微水镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 12
    },
    {
        "name": "正定县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 13
    },
    {
        "name": "正定镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 14
    },
    {
        "name": "栾城县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 15
    },
    {
        "name": "栾城镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 16
    },
    {
        "name": "行唐县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 17
    },
    {
        "name": "龙州镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 18
    },
    {
        "name": "灵寿县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 19
    },
    {
        "name": "灵寿镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 20
    },
    {
        "name": "高邑县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 21
    },
    {
        "name": "高邑镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 22
    },
    {
        "name": "深泽县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 23
    },
    {
        "name": "深泽镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 24
    },
    {
        "name": "赞皇县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 25
    },
    {
        "name": "赞皇镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 26
    },
    {
        "name": "无极县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 27
    },
    {
        "name": "无极镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 28
    },
    {
        "name": "平山县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 29
    },
    {
        "name": "平山镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 30
    },
    {
        "name": "元氏县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 31
    },
    {
        "name": "槐阳镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 32
    },
    {
        "name": "赵县",
        "cascade": 3,
        "parent_id": 0,
        "ID": 33
    },
    {
        "name": "赵州镇",
        "cascade": 3,
        "parent_id": 0,
        "ID": 34
    },
    {
        "name": "桥西区",
        "cascade": 3,
        "parent_id": 1,
        "ID": 35
    },
    {
        "name": "桥东区",
        "cascade": 3,
        "parent_id": 1,
        "ID": 36
    },
    {
        "name": "宣化区",
        "cascade": 3,
        "parent_id": 1,
        "ID": 37
    },
    {
        "name": "下花园区",
        "cascade": 3,
        "parent_id": 1,
        "ID": 38
    },
    {
        "name": "宣化县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 39
    },
    {
        "name": "张家口市宣化区",
        "cascade": 3,
        "parent_id": 1,
        "ID": 40
    },
    {
        "name": "张北县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 41
    },
    {
        "name": "张北镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 42
    },
    {
        "name": "康保县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 43
    },
    {
        "name": "康保镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 44
    },
    {
        "name": "沽源县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 45
    },
    {
        "name": "平定堡镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 46
    },
    {
        "name": "尚义县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 47
    },
    {
        "name": "南壕堑镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 48
    },
    {
        "name": "蔚县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 49
    },
    {
        "name": "蔚州镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 50
    },
    {
        "name": "阳原县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 51
    },
    {
        "name": "西城镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 52
    },
    {
        "name": "怀安县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 53
    },
    {
        "name": "柴沟堡镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 54
    },
    {
        "name": "万全县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 55
    },
    {
        "name": "孔家庄镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 56
    },
    {
        "name": "怀来县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 57
    },
    {
        "name": "沙城镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 58
    },
    {
        "name": "涿鹿县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 59
    },
    {
        "name": "涿鹿镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 60
    },
    {
        "name": "赤城县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 61
    },
    {
        "name": "赤城镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 62
    },
    {
        "name": "崇礼县",
        "cascade": 3,
        "parent_id": 1,
        "ID": 63
    },
    {
        "name": "西湾子镇",
        "cascade": 3,
        "parent_id": 1,
        "ID": 64
    },
    {
        "name": "双桥区",
        "cascade": 3,
        "parent_id": 2,
        "ID": 65
    },
    {
        "name": "双滦区",
        "cascade": 3,
        "parent_id": 2,
        "ID": 66
    },
    {
        "name": "鹰手营子矿区",
        "cascade": 3,
        "parent_id": 2,
        "ID": 67
    },
    {
        "name": "承德县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 68
    },
    {
        "name": "下板城镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 69
    },
    {
        "name": "兴隆县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 70
    },
    {
        "name": "兴隆镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 71
    },
    {
        "name": "平泉县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 72
    },
    {
        "name": "平泉镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 73
    },
    {
        "name": "滦平县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 74
    },
    {
        "name": "滦平镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 75
    },
    {
        "name": "隆化县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 76
    },
    {
        "name": "隆化镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 77
    },
    {
        "name": "丰宁满族自治县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 78
    },
    {
        "name": "大阁镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 79
    },
    {
        "name": "宽城满族自治县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 80
    },
    {
        "name": "宽城镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 81
    },
    {
        "name": "围场满族蒙古族自治县",
        "cascade": 3,
        "parent_id": 2,
        "ID": 82
    },
    {
        "name": "围场镇",
        "cascade": 3,
        "parent_id": 2,
        "ID": 83
    },
    {
        "name": "海港区",
        "cascade": 3,
        "parent_id": 3,
        "ID": 84
    },
    {
        "name": "山海关区",
        "cascade": 3,
        "parent_id": 3,
        "ID": 85
    },
    {
        "name": "北戴河区",
        "cascade": 3,
        "parent_id": 3,
        "ID": 86
    },
    {
        "name": "昌黎县",
        "cascade": 3,
        "parent_id": 3,
        "ID": 87
    },
    {
        "name": "昌黎镇",
        "cascade": 3,
        "parent_id": 3,
        "ID": 88
    },
    {
        "name": "抚宁县",
        "cascade": 3,
        "parent_id": 3,
        "ID": 89
    },
    {
        "name": "抚宁镇",
        "cascade": 3,
        "parent_id": 3,
        "ID": 90
    },
    {
        "name": "卢龙县",
        "cascade": 3,
        "parent_id": 3,
        "ID": 91
    },
    {
        "name": "卢龙镇",
        "cascade": 3,
        "parent_id": 3,
        "ID": 92
    },
    {
        "name": "青龙满族自治县",
        "cascade": 3,
        "parent_id": 3,
        "ID": 93
    },
    {
        "name": "青龙镇",
        "cascade": 3,
        "parent_id": 3,
        "ID": 94
    },
    {
        "name": "路北区",
        "cascade": 3,
        "parent_id": 4,
        "ID": 95
    },
    {
        "name": "路南区",
        "cascade": 3,
        "parent_id": 4,
        "ID": 96
    },
    {
        "name": "古冶区",
        "cascade": 3,
        "parent_id": 4,
        "ID": 97
    },
    {
        "name": "开平区",
        "cascade": 3,
        "parent_id": 4,
        "ID": 98
    },
    {
        "name": "丰润区",
        "cascade": 3,
        "parent_id": 4,
        "ID": 99
    },
    {
        "name": "丰南区",
        "cascade": 3,
        "parent_id": 4,
        "ID": 100
    },
    {
        "name": "遵化市",
        "cascade": 3,
        "parent_id": 4,
        "ID": 101
    },
    {
        "name": "迁安市",
        "cascade": 3,
        "parent_id": 4,
        "ID": 102
    },
    {
        "name": "滦县",
        "cascade": 3,
        "parent_id": 4,
        "ID": 103
    },
    {
        "name": "滦州镇",
        "cascade": 3,
        "parent_id": 4,
        "ID": 104
    },
    {
        "name": "滦南县",
        "cascade": 3,
        "parent_id": 4,
        "ID": 105
    },
    {
        "name": "倴城镇",
        "cascade": 3,
        "parent_id": 4,
        "ID": 106
    },
    {
        "name": "乐亭县",
        "cascade": 3,
        "parent_id": 4,
        "ID": 107
    },
    {
        "name": "乐亭镇",
        "cascade": 3,
        "parent_id": 4,
        "ID": 108
    },
    {
        "name": "迁西县",
        "cascade": 3,
        "parent_id": 4,
        "ID": 109
    },
    {
        "name": "兴城镇",
        "cascade": 3,
        "parent_id": 4,
        "ID": 110
    },
    {
        "name": "玉田县",
        "cascade": 3,
        "parent_id": 4,
        "ID": 111
    },
    {
        "name": "玉田镇",
        "cascade": 3,
        "parent_id": 4,
        "ID": 112
    },
    {
        "name": "唐海县",
        "cascade": 3,
        "parent_id": 4,
        "ID": 113
    },
    {
        "name": "唐海镇",
        "cascade": 3,
        "parent_id": 4,
        "ID": 114
    },
    {
        "name": "安次区",
        "cascade": 3,
        "parent_id": 5,
        "ID": 115
    },
    {
        "name": "广阳区",
        "cascade": 3,
        "parent_id": 5,
        "ID": 116
    },
    {
        "name": "霸州市",
        "cascade": 3,
        "parent_id": 5,
        "ID": 117
    },
    {
        "name": "三河市",
        "cascade": 3,
        "parent_id": 5,
        "ID": 118
    },
    {
        "name": "固安县",
        "cascade": 3,
        "parent_id": 5,
        "ID": 119
    },
    {
        "name": "固安镇",
        "cascade": 3,
        "parent_id": 5,
        "ID": 120
    },
    {
        "name": "永清县",
        "cascade": 3,
        "parent_id": 5,
        "ID": 121
    },
    {
        "name": "永清镇",
        "cascade": 3,
        "parent_id": 5,
        "ID": 122
    },
    {
        "name": "香河县",
        "cascade": 3,
        "parent_id": 5,
        "ID": 123
    },
    {
        "name": "淑阳镇",
        "cascade": 3,
        "parent_id": 5,
        "ID": 124
    },
    {
        "name": "大城县",
        "cascade": 3,
        "parent_id": 5,
        "ID": 125
    },
    {
        "name": "平舒镇",
        "cascade": 3,
        "parent_id": 5,
        "ID": 126
    },
    {
        "name": "文安县",
        "cascade": 3,
        "parent_id": 5,
        "ID": 127
    },
    {
        "name": "文安镇",
        "cascade": 3,
        "parent_id": 5,
        "ID": 128
    },
    {
        "name": "大厂回族自治县",
        "cascade": 3,
        "parent_id": 5,
        "ID": 129
    },
    {
        "name": "大厂镇",
        "cascade": 3,
        "parent_id": 5,
        "ID": 130
    },
    {
        "name": "新市区",
        "cascade": 3,
        "parent_id": 6,
        "ID": 131
    },
    {
        "name": "北市区",
        "cascade": 3,
        "parent_id": 6,
        "ID": 132
    },
    {
        "name": "南市区",
        "cascade": 3,
        "parent_id": 6,
        "ID": 133
    },
    {
        "name": "定州市",
        "cascade": 3,
        "parent_id": 6,
        "ID": 134
    },
    {
        "name": "涿州市",
        "cascade": 3,
        "parent_id": 6,
        "ID": 135
    },
    {
        "name": "安国市",
        "cascade": 3,
        "parent_id": 6,
        "ID": 136
    },
    {
        "name": "高碑店市",
        "cascade": 3,
        "parent_id": 6,
        "ID": 137
    },
    {
        "name": "满城县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 138
    },
    {
        "name": "满城镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 139
    },
    {
        "name": "清苑县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 140
    },
    {
        "name": "清苑镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 141
    },
    {
        "name": "易县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 142
    },
    {
        "name": "易州镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 143
    },
    {
        "name": "徐水县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 144
    },
    {
        "name": "安肃镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 145
    },
    {
        "name": "涞源县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 146
    },
    {
        "name": "涞源镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 147
    },
    {
        "name": "定兴县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 148
    },
    {
        "name": "定兴镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 149
    },
    {
        "name": "顺平县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 150
    },
    {
        "name": "蒲阳镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 151
    },
    {
        "name": "唐县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 152
    },
    {
        "name": "仁厚镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 153
    },
    {
        "name": "望都县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 154
    },
    {
        "name": "望都镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 155
    },
    {
        "name": "涞水县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 156
    },
    {
        "name": "涞水镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 157
    },
    {
        "name": "高阳县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 158
    },
    {
        "name": "高阳镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 159
    },
    {
        "name": "安新县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 160
    },
    {
        "name": "安新镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 161
    },
    {
        "name": "雄县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 162
    },
    {
        "name": "雄州镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 163
    },
    {
        "name": "容城县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 164
    },
    {
        "name": "容城镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 165
    },
    {
        "name": "曲阳县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 166
    },
    {
        "name": "恒州镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 167
    },
    {
        "name": "阜平县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 168
    },
    {
        "name": "阜平镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 169
    },
    {
        "name": "博野县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 170
    },
    {
        "name": "博陵镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 171
    },
    {
        "name": "蠡县",
        "cascade": 3,
        "parent_id": 6,
        "ID": 172
    },
    {
        "name": "蠡吾镇",
        "cascade": 3,
        "parent_id": 6,
        "ID": 173
    },
    {
        "name": "桃城区",
        "cascade": 3,
        "parent_id": 7,
        "ID": 174
    },
    {
        "name": "冀州市",
        "cascade": 3,
        "parent_id": 7,
        "ID": 175
    },
    {
        "name": "深州市",
        "cascade": 3,
        "parent_id": 7,
        "ID": 176
    },
    {
        "name": "枣强县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 177
    },
    {
        "name": "枣强镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 178
    },
    {
        "name": "武邑县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 179
    },
    {
        "name": "武邑镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 180
    },
    {
        "name": "武强县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 181
    },
    {
        "name": "武强镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 182
    },
    {
        "name": "饶阳县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 183
    },
    {
        "name": "饶阳镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 184
    },
    {
        "name": "安平县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 185
    },
    {
        "name": "安平镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 186
    },
    {
        "name": "故城县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 187
    },
    {
        "name": "郑口镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 188
    },
    {
        "name": "景县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 189
    },
    {
        "name": "景州镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 190
    },
    {
        "name": "阜城县",
        "cascade": 3,
        "parent_id": 7,
        "ID": 191
    },
    {
        "name": "阜城镇",
        "cascade": 3,
        "parent_id": 7,
        "ID": 192
    },
    {
        "name": "运河区",
        "cascade": 3,
        "parent_id": 8,
        "ID": 193
    },
    {
        "name": "新华区",
        "cascade": 3,
        "parent_id": 8,
        "ID": 194
    },
    {
        "name": "泊头市",
        "cascade": 3,
        "parent_id": 8,
        "ID": 195
    },
    {
        "name": "任丘市",
        "cascade": 3,
        "parent_id": 8,
        "ID": 196
    },
    {
        "name": "黄骅市",
        "cascade": 3,
        "parent_id": 8,
        "ID": 197
    },
    {
        "name": "河间市",
        "cascade": 3,
        "parent_id": 8,
        "ID": 198
    },
    {
        "name": "沧县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 199
    },
    {
        "name": "沧州市新华区",
        "cascade": 3,
        "parent_id": 8,
        "ID": 200
    },
    {
        "name": "青县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 201
    },
    {
        "name": "清州镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 202
    },
    {
        "name": "东光县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 203
    },
    {
        "name": "东光镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 204
    },
    {
        "name": "海兴县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 205
    },
    {
        "name": "苏基镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 206
    },
    {
        "name": "盐山县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 207
    },
    {
        "name": "盐山镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 208
    },
    {
        "name": "肃宁县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 209
    },
    {
        "name": "肃宁镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 210
    },
    {
        "name": "南皮县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 211
    },
    {
        "name": "南皮镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 212
    },
    {
        "name": "吴桥县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 213
    },
    {
        "name": "桑园镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 214
    },
    {
        "name": "献县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 215
    },
    {
        "name": "乐寿镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 216
    },
    {
        "name": "孟村回族自治县",
        "cascade": 3,
        "parent_id": 8,
        "ID": 217
    },
    {
        "name": "孟村镇",
        "cascade": 3,
        "parent_id": 8,
        "ID": 218
    },
    {
        "name": "桥东区",
        "cascade": 3,
        "parent_id": 9,
        "ID": 219
    },
    {
        "name": "桥西区",
        "cascade": 3,
        "parent_id": 9,
        "ID": 220
    },
    {
        "name": "南宫市",
        "cascade": 3,
        "parent_id": 9,
        "ID": 221
    },
    {
        "name": "沙河市",
        "cascade": 3,
        "parent_id": 9,
        "ID": 222
    },
    {
        "name": "邢台县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 223
    },
    {
        "name": "邢台市桥东区",
        "cascade": 3,
        "parent_id": 9,
        "ID": 224
    },
    {
        "name": "临城县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 225
    },
    {
        "name": "临城镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 226
    },
    {
        "name": "内丘县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 227
    },
    {
        "name": "内丘镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 228
    },
    {
        "name": "柏乡县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 229
    },
    {
        "name": "柏乡镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 230
    },
    {
        "name": "隆尧县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 231
    },
    {
        "name": "隆尧镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 232
    },
    {
        "name": "任县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 233
    },
    {
        "name": "任城镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 234
    },
    {
        "name": "南和县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 235
    },
    {
        "name": "和阳镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 236
    },
    {
        "name": "宁晋县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 237
    },
    {
        "name": "凤凰镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 238
    },
    {
        "name": "巨鹿县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 239
    },
    {
        "name": "巨鹿镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 240
    },
    {
        "name": "新河县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 241
    },
    {
        "name": "新河镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 242
    },
    {
        "name": "广宗县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 243
    },
    {
        "name": "广宗镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 244
    },
    {
        "name": "平乡县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 245
    },
    {
        "name": "丰州镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 246
    },
    {
        "name": "威县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 247
    },
    {
        "name": "洺州镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 248
    },
    {
        "name": "清河县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 249
    },
    {
        "name": "葛仙庄镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 250
    },
    {
        "name": "临西县",
        "cascade": 3,
        "parent_id": 9,
        "ID": 251
    },
    {
        "name": "临西镇",
        "cascade": 3,
        "parent_id": 9,
        "ID": 252
    },
    {
        "name": "丛台区",
        "cascade": 3,
        "parent_id": 10,
        "ID": 253
    },
    {
        "name": "邯山区",
        "cascade": 3,
        "parent_id": 10,
        "ID": 254
    },
    {
        "name": "复兴区",
        "cascade": 3,
        "parent_id": 10,
        "ID": 255
    },
    {
        "name": "峰峰矿区",
        "cascade": 3,
        "parent_id": 10,
        "ID": 256
    },
    {
        "name": "武安市",
        "cascade": 3,
        "parent_id": 10,
        "ID": 257
    },
    {
        "name": "邯郸县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 258
    },
    {
        "name": "南堡乡东小屯村",
        "cascade": 3,
        "parent_id": 10,
        "ID": 259
    },
    {
        "name": "临漳县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 260
    },
    {
        "name": "临漳镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 261
    },
    {
        "name": "成安县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 262
    },
    {
        "name": "成安镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 263
    },
    {
        "name": "大名县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 264
    },
    {
        "name": "大名镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 265
    },
    {
        "name": "涉县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 266
    },
    {
        "name": "涉城镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 267
    },
    {
        "name": "磁县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 268
    },
    {
        "name": "磁州镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 269
    },
    {
        "name": "肥乡县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 270
    },
    {
        "name": "肥乡镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 271
    },
    {
        "name": "永年县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 272
    },
    {
        "name": "临洺关镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 273
    },
    {
        "name": "邱县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 274
    },
    {
        "name": "新马头镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 275
    },
    {
        "name": "鸡泽县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 276
    },
    {
        "name": "鸡泽镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 277
    },
    {
        "name": "广平县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 278
    },
    {
        "name": "广平镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 279
    },
    {
        "name": "馆陶县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 280
    },
    {
        "name": "馆陶镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 281
    },
    {
        "name": "魏县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 282
    },
    {
        "name": "魏城镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 283
    },
    {
        "name": "曲周县",
        "cascade": 3,
        "parent_id": 10,
        "ID": 284
    },
    {
        "name": "曲周镇",
        "cascade": 3,
        "parent_id": 10,
        "ID": 285
    },
    {
        "name": "杏花岭区",
        "cascade": 3,
        "parent_id": 11,
        "ID": 286
    },
    {
        "name": "小店区",
        "cascade": 3,
        "parent_id": 11,
        "ID": 287
    },
    {
        "name": "迎泽区",
        "cascade": 3,
        "parent_id": 11,
        "ID": 288
    },
    {
        "name": "尖草坪区",
        "cascade": 3,
        "parent_id": 11,
        "ID": 289
    },
    {
        "name": "万柏林区",
        "cascade": 3,
        "parent_id": 11,
        "ID": 290
    },
    {
        "name": "晋源区",
        "cascade": 3,
        "parent_id": 11,
        "ID": 291
    },
    {
        "name": "古交市",
        "cascade": 3,
        "parent_id": 11,
        "ID": 292
    },
    {
        "name": "清徐县",
        "cascade": 3,
        "parent_id": 11,
        "ID": 293
    },
    {
        "name": "清源镇",
        "cascade": 3,
        "parent_id": 11,
        "ID": 294
    },
    {
        "name": "阳曲县",
        "cascade": 3,
        "parent_id": 11,
        "ID": 295
    },
    {
        "name": "黄寨镇",
        "cascade": 3,
        "parent_id": 11,
        "ID": 296
    },
    {
        "name": "娄烦县",
        "cascade": 3,
        "parent_id": 11,
        "ID": 297
    },
    {
        "name": "娄烦镇",
        "cascade": 3,
        "parent_id": 11,
        "ID": 298
    },
    {
        "name": "朔城区",
        "cascade": 3,
        "parent_id": 12,
        "ID": 299
    },
    {
        "name": "平鲁区",
        "cascade": 3,
        "parent_id": 12,
        "ID": 300
    },
    {
        "name": "山阴县",
        "cascade": 3,
        "parent_id": 12,
        "ID": 301
    },
    {
        "name": "岱岳乡",
        "cascade": 3,
        "parent_id": 12,
        "ID": 302
    },
    {
        "name": "应县",
        "cascade": 3,
        "parent_id": 12,
        "ID": 303
    },
    {
        "name": "金城镇",
        "cascade": 3,
        "parent_id": 12,
        "ID": 304
    },
    {
        "name": "右玉县",
        "cascade": 3,
        "parent_id": 12,
        "ID": 305
    },
    {
        "name": "新城镇",
        "cascade": 3,
        "parent_id": 12,
        "ID": 306
    },
    {
        "name": "怀仁县",
        "cascade": 3,
        "parent_id": 12,
        "ID": 307
    },
    {
        "name": "云中镇",
        "cascade": 3,
        "parent_id": 12,
        "ID": 308
    },
    {
        "name": "城区",
        "cascade": 3,
        "parent_id": 13,
        "ID": 309
    },
    {
        "name": "矿区",
        "cascade": 3,
        "parent_id": 13,
        "ID": 310
    },
    {
        "name": "南郊区",
        "cascade": 3,
        "parent_id": 13,
        "ID": 311
    },
    {
        "name": "新荣区",
        "cascade": 3,
        "parent_id": 13,
        "ID": 312
    },
    {
        "name": "阳高县",
        "cascade": 3,
        "parent_id": 13,
        "ID": 313
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 13,
        "ID": 314
    },
    {
        "name": "天镇县",
        "cascade": 3,
        "parent_id": 13,
        "ID": 315
    },
    {
        "name": "玉泉镇",
        "cascade": 3,
        "parent_id": 13,
        "ID": 316
    },
    {
        "name": "广灵县",
        "cascade": 3,
        "parent_id": 13,
        "ID": 317
    },
    {
        "name": "壶泉镇",
        "cascade": 3,
        "parent_id": 13,
        "ID": 318
    },
    {
        "name": "灵丘县",
        "cascade": 3,
        "parent_id": 13,
        "ID": 319
    },
    {
        "name": "武灵镇",
        "cascade": 3,
        "parent_id": 13,
        "ID": 320
    },
    {
        "name": "浑源县",
        "cascade": 3,
        "parent_id": 13,
        "ID": 321
    },
    {
        "name": "永安镇",
        "cascade": 3,
        "parent_id": 13,
        "ID": 322
    },
    {
        "name": "左云县",
        "cascade": 3,
        "parent_id": 13,
        "ID": 323
    },
    {
        "name": "云兴镇",
        "cascade": 3,
        "parent_id": 13,
        "ID": 324
    },
    {
        "name": "大同县",
        "cascade": 3,
        "parent_id": 13,
        "ID": 325
    },
    {
        "name": "西坪镇",
        "cascade": 3,
        "parent_id": 13,
        "ID": 326
    },
    {
        "name": "城区",
        "cascade": 3,
        "parent_id": 14,
        "ID": 327
    },
    {
        "name": "矿区",
        "cascade": 3,
        "parent_id": 14,
        "ID": 328
    },
    {
        "name": "郊区",
        "cascade": 3,
        "parent_id": 14,
        "ID": 329
    },
    {
        "name": "平定县",
        "cascade": 3,
        "parent_id": 14,
        "ID": 330
    },
    {
        "name": "冠山镇",
        "cascade": 3,
        "parent_id": 14,
        "ID": 331
    },
    {
        "name": "盂县",
        "cascade": 3,
        "parent_id": 14,
        "ID": 332
    },
    {
        "name": "秀水镇",
        "cascade": 3,
        "parent_id": 14,
        "ID": 333
    },
    {
        "name": "城区",
        "cascade": 3,
        "parent_id": 15,
        "ID": 334
    },
    {
        "name": "郊区",
        "cascade": 3,
        "parent_id": 15,
        "ID": 335
    },
    {
        "name": "潞城市",
        "cascade": 3,
        "parent_id": 15,
        "ID": 336
    },
    {
        "name": "长治县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 337
    },
    {
        "name": "韩店镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 338
    },
    {
        "name": "襄垣县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 339
    },
    {
        "name": "古韩镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 340
    },
    {
        "name": "屯留县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 341
    },
    {
        "name": "麟绛镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 342
    },
    {
        "name": "平顺县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 343
    },
    {
        "name": "青羊镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 344
    },
    {
        "name": "黎城县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 345
    },
    {
        "name": "黎侯镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 346
    },
    {
        "name": "壶关县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 347
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 348
    },
    {
        "name": "长子县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 349
    },
    {
        "name": "丹朱镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 350
    },
    {
        "name": "武乡县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 351
    },
    {
        "name": "丰州镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 352
    },
    {
        "name": "沁县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 353
    },
    {
        "name": "定昌镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 354
    },
    {
        "name": "沁源县",
        "cascade": 3,
        "parent_id": 15,
        "ID": 355
    },
    {
        "name": "沁河镇",
        "cascade": 3,
        "parent_id": 15,
        "ID": 356
    },
    {
        "name": "城区",
        "cascade": 3,
        "parent_id": 16,
        "ID": 357
    },
    {
        "name": "高平市",
        "cascade": 3,
        "parent_id": 16,
        "ID": 358
    },
    {
        "name": "泽州县",
        "cascade": 3,
        "parent_id": 16,
        "ID": 359
    },
    {
        "name": "南村镇",
        "cascade": 3,
        "parent_id": 16,
        "ID": 360
    },
    {
        "name": "沁水县",
        "cascade": 3,
        "parent_id": 16,
        "ID": 361
    },
    {
        "name": "龙港镇",
        "cascade": 3,
        "parent_id": 16,
        "ID": 362
    },
    {
        "name": "阳城县",
        "cascade": 3,
        "parent_id": 16,
        "ID": 363
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 16,
        "ID": 364
    },
    {
        "name": "陵川县",
        "cascade": 3,
        "parent_id": 16,
        "ID": 365
    },
    {
        "name": "崇文镇",
        "cascade": 3,
        "parent_id": 16,
        "ID": 366
    },
    {
        "name": "忻府区",
        "cascade": 3,
        "parent_id": 17,
        "ID": 367
    },
    {
        "name": "原平市",
        "cascade": 3,
        "parent_id": 17,
        "ID": 368
    },
    {
        "name": "定襄县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 369
    },
    {
        "name": "晋昌镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 370
    },
    {
        "name": "五台县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 371
    },
    {
        "name": "台城镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 372
    },
    {
        "name": "代县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 373
    },
    {
        "name": "上馆镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 374
    },
    {
        "name": "繁峙县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 375
    },
    {
        "name": "繁城镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 376
    },
    {
        "name": "宁武县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 377
    },
    {
        "name": "凤凰镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 378
    },
    {
        "name": "静乐县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 379
    },
    {
        "name": "鹅城镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 380
    },
    {
        "name": "神池县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 381
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 382
    },
    {
        "name": "五寨县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 383
    },
    {
        "name": "砚城镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 384
    },
    {
        "name": "岢岚县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 385
    },
    {
        "name": "岚漪镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 386
    },
    {
        "name": "河曲县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 387
    },
    {
        "name": "文笔镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 388
    },
    {
        "name": "保德县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 389
    },
    {
        "name": "东关镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 390
    },
    {
        "name": "偏关县",
        "cascade": 3,
        "parent_id": 17,
        "ID": 391
    },
    {
        "name": "新关镇",
        "cascade": 3,
        "parent_id": 17,
        "ID": 392
    },
    {
        "name": "榆次区",
        "cascade": 3,
        "parent_id": 18,
        "ID": 393
    },
    {
        "name": "介休市",
        "cascade": 3,
        "parent_id": 18,
        "ID": 394
    },
    {
        "name": "榆社县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 395
    },
    {
        "name": "箕城镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 396
    },
    {
        "name": "左权县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 397
    },
    {
        "name": "辽阳镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 398
    },
    {
        "name": "和顺县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 399
    },
    {
        "name": "义兴镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 400
    },
    {
        "name": "昔阳县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 401
    },
    {
        "name": "乐平镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 402
    },
    {
        "name": "寿阳县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 403
    },
    {
        "name": "朝阳镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 404
    },
    {
        "name": "太谷县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 405
    },
    {
        "name": "明星镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 406
    },
    {
        "name": "祁县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 407
    },
    {
        "name": "昭余镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 408
    },
    {
        "name": "平遥县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 409
    },
    {
        "name": "古陶镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 410
    },
    {
        "name": "灵石县",
        "cascade": 3,
        "parent_id": 18,
        "ID": 411
    },
    {
        "name": "翠峰镇",
        "cascade": 3,
        "parent_id": 18,
        "ID": 412
    },
    {
        "name": "尧都区",
        "cascade": 3,
        "parent_id": 19,
        "ID": 413
    },
    {
        "name": "侯马市",
        "cascade": 3,
        "parent_id": 19,
        "ID": 414
    },
    {
        "name": "霍州市",
        "cascade": 3,
        "parent_id": 19,
        "ID": 415
    },
    {
        "name": "曲沃县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 416
    },
    {
        "name": "乐昌镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 417
    },
    {
        "name": "翼城县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 418
    },
    {
        "name": "唐兴镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 419
    },
    {
        "name": "襄汾县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 420
    },
    {
        "name": "新城镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 421
    },
    {
        "name": "洪洞县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 422
    },
    {
        "name": "大槐树镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 423
    },
    {
        "name": "古县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 424
    },
    {
        "name": "岳阳镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 425
    },
    {
        "name": "安泽县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 426
    },
    {
        "name": "府城镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 427
    },
    {
        "name": "浮山县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 428
    },
    {
        "name": "天坛镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 429
    },
    {
        "name": "吉县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 430
    },
    {
        "name": "吉昌镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 431
    },
    {
        "name": "乡宁县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 432
    },
    {
        "name": "昌宁镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 433
    },
    {
        "name": "蒲县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 434
    },
    {
        "name": "蒲城镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 435
    },
    {
        "name": "大宁县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 436
    },
    {
        "name": "昕水镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 437
    },
    {
        "name": "永和县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 438
    },
    {
        "name": "芝河镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 439
    },
    {
        "name": "隰县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 440
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 441
    },
    {
        "name": "汾西县",
        "cascade": 3,
        "parent_id": 19,
        "ID": 442
    },
    {
        "name": "永安镇",
        "cascade": 3,
        "parent_id": 19,
        "ID": 443
    },
    {
        "name": "离石区",
        "cascade": 3,
        "parent_id": 20,
        "ID": 444
    },
    {
        "name": "孝义市",
        "cascade": 3,
        "parent_id": 20,
        "ID": 445
    },
    {
        "name": "汾阳市",
        "cascade": 3,
        "parent_id": 20,
        "ID": 446
    },
    {
        "name": "文水县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 447
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 448
    },
    {
        "name": "中阳县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 449
    },
    {
        "name": "宁乡镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 450
    },
    {
        "name": "兴县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 451
    },
    {
        "name": "蔚汾镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 452
    },
    {
        "name": "临县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 453
    },
    {
        "name": "临泉镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 454
    },
    {
        "name": "方山县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 455
    },
    {
        "name": "圪洞镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 456
    },
    {
        "name": "柳林县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 457
    },
    {
        "name": "柳林镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 458
    },
    {
        "name": "岚县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 459
    },
    {
        "name": "东村镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 460
    },
    {
        "name": "交口县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 461
    },
    {
        "name": "水头镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 462
    },
    {
        "name": "交城县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 463
    },
    {
        "name": "天宁镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 464
    },
    {
        "name": "石楼县",
        "cascade": 3,
        "parent_id": 20,
        "ID": 465
    },
    {
        "name": "灵泉镇",
        "cascade": 3,
        "parent_id": 20,
        "ID": 466
    },
    {
        "name": "盐湖区",
        "cascade": 3,
        "parent_id": 21,
        "ID": 467
    },
    {
        "name": "永济市",
        "cascade": 3,
        "parent_id": 21,
        "ID": 468
    },
    {
        "name": "河津市",
        "cascade": 3,
        "parent_id": 21,
        "ID": 469
    },
    {
        "name": "芮城县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 470
    },
    {
        "name": "古魏镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 471
    },
    {
        "name": "临猗县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 472
    },
    {
        "name": "猗氏镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 473
    },
    {
        "name": "万荣县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 474
    },
    {
        "name": "解店镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 475
    },
    {
        "name": "新绛县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 476
    },
    {
        "name": "龙兴镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 477
    },
    {
        "name": "稷山县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 478
    },
    {
        "name": "稷峰镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 479
    },
    {
        "name": "闻喜县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 480
    },
    {
        "name": "桐城镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 481
    },
    {
        "name": "夏县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 482
    },
    {
        "name": "瑶峰镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 483
    },
    {
        "name": "绛县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 484
    },
    {
        "name": "古绛镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 485
    },
    {
        "name": "平陆县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 486
    },
    {
        "name": "圣人涧镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 487
    },
    {
        "name": "垣曲县",
        "cascade": 3,
        "parent_id": 21,
        "ID": 488
    },
    {
        "name": "新城镇",
        "cascade": 3,
        "parent_id": 21,
        "ID": 489
    },
    {
        "name": "回民区",
        "cascade": 3,
        "parent_id": 22,
        "ID": 490
    },
    {
        "name": "新城区",
        "cascade": 3,
        "parent_id": 22,
        "ID": 491
    },
    {
        "name": "玉泉区",
        "cascade": 3,
        "parent_id": 22,
        "ID": 492
    },
    {
        "name": "赛罕区",
        "cascade": 3,
        "parent_id": 22,
        "ID": 493
    },
    {
        "name": "托克托县",
        "cascade": 3,
        "parent_id": 22,
        "ID": 494
    },
    {
        "name": "双河镇",
        "cascade": 3,
        "parent_id": 22,
        "ID": 495
    },
    {
        "name": "武川县",
        "cascade": 3,
        "parent_id": 22,
        "ID": 496
    },
    {
        "name": "可可以力更镇",
        "cascade": 3,
        "parent_id": 22,
        "ID": 497
    },
    {
        "name": "和林格尔县",
        "cascade": 3,
        "parent_id": 22,
        "ID": 498
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 22,
        "ID": 499
    },
    {
        "name": "清水河县",
        "cascade": 3,
        "parent_id": 22,
        "ID": 500
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 22,
        "ID": 501
    },
    {
        "name": "土默特左旗",
        "cascade": 3,
        "parent_id": 22,
        "ID": 502
    },
    {
        "name": "察素齐镇",
        "cascade": 3,
        "parent_id": 22,
        "ID": 503
    },
    {
        "name": "昆都仑区",
        "cascade": 3,
        "parent_id": 23,
        "ID": 504
    },
    {
        "name": "东河区",
        "cascade": 3,
        "parent_id": 23,
        "ID": 505
    },
    {
        "name": "青山区",
        "cascade": 3,
        "parent_id": 23,
        "ID": 506
    },
    {
        "name": "石拐区",
        "cascade": 3,
        "parent_id": 23,
        "ID": 507
    },
    {
        "name": "白云矿区",
        "cascade": 3,
        "parent_id": 23,
        "ID": 508
    },
    {
        "name": "九原区",
        "cascade": 3,
        "parent_id": 23,
        "ID": 509
    },
    {
        "name": "固阳县",
        "cascade": 3,
        "parent_id": 23,
        "ID": 510
    },
    {
        "name": "金山镇",
        "cascade": 3,
        "parent_id": 23,
        "ID": 511
    },
    {
        "name": "土默特右旗",
        "cascade": 3,
        "parent_id": 23,
        "ID": 512
    },
    {
        "name": "萨拉齐镇",
        "cascade": 3,
        "parent_id": 23,
        "ID": 513
    },
    {
        "name": "达尔罕茂明安联合旗",
        "cascade": 3,
        "parent_id": 23,
        "ID": 514
    },
    {
        "name": "百灵庙镇",
        "cascade": 3,
        "parent_id": 23,
        "ID": 515
    },
    {
        "name": "海勃湾区",
        "cascade": 3,
        "parent_id": 24,
        "ID": 516
    },
    {
        "name": "海南区",
        "cascade": 3,
        "parent_id": 24,
        "ID": 517
    },
    {
        "name": "乌达区",
        "cascade": 3,
        "parent_id": 24,
        "ID": 518
    },
    {
        "name": "红山区",
        "cascade": 3,
        "parent_id": 25,
        "ID": 519
    },
    {
        "name": "元宝山区",
        "cascade": 3,
        "parent_id": 25,
        "ID": 520
    },
    {
        "name": "松山区",
        "cascade": 3,
        "parent_id": 25,
        "ID": 521
    },
    {
        "name": "宁城县",
        "cascade": 3,
        "parent_id": 25,
        "ID": 522
    },
    {
        "name": "天义镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 523
    },
    {
        "name": "林西县",
        "cascade": 3,
        "parent_id": 25,
        "ID": 524
    },
    {
        "name": "林西镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 525
    },
    {
        "name": "阿鲁科尔沁旗",
        "cascade": 3,
        "parent_id": 25,
        "ID": 526
    },
    {
        "name": "天山镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 527
    },
    {
        "name": "巴林左旗",
        "cascade": 3,
        "parent_id": 25,
        "ID": 528
    },
    {
        "name": "林东镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 529
    },
    {
        "name": "巴林右旗",
        "cascade": 3,
        "parent_id": 25,
        "ID": 530
    },
    {
        "name": "大板镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 531
    },
    {
        "name": "克什克腾旗",
        "cascade": 3,
        "parent_id": 25,
        "ID": 532
    },
    {
        "name": "经棚镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 533
    },
    {
        "name": "翁牛特旗",
        "cascade": 3,
        "parent_id": 25,
        "ID": 534
    },
    {
        "name": "乌丹镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 535
    },
    {
        "name": "喀喇沁旗",
        "cascade": 3,
        "parent_id": 25,
        "ID": 536
    },
    {
        "name": "锦山镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 537
    },
    {
        "name": "敖汉旗",
        "cascade": 3,
        "parent_id": 25,
        "ID": 538
    },
    {
        "name": "新惠镇",
        "cascade": 3,
        "parent_id": 25,
        "ID": 539
    },
    {
        "name": "科尔沁区",
        "cascade": 3,
        "parent_id": 26,
        "ID": 540
    },
    {
        "name": "霍林郭勒市",
        "cascade": 3,
        "parent_id": 26,
        "ID": 541
    },
    {
        "name": "开鲁县",
        "cascade": 3,
        "parent_id": 26,
        "ID": 542
    },
    {
        "name": "开鲁镇",
        "cascade": 3,
        "parent_id": 26,
        "ID": 543
    },
    {
        "name": "库伦旗",
        "cascade": 3,
        "parent_id": 26,
        "ID": 544
    },
    {
        "name": "库伦镇",
        "cascade": 3,
        "parent_id": 26,
        "ID": 545
    },
    {
        "name": "奈曼旗",
        "cascade": 3,
        "parent_id": 26,
        "ID": 546
    },
    {
        "name": "大沁他拉镇",
        "cascade": 3,
        "parent_id": 26,
        "ID": 547
    },
    {
        "name": "扎鲁特旗",
        "cascade": 3,
        "parent_id": 26,
        "ID": 548
    },
    {
        "name": "鲁北镇",
        "cascade": 3,
        "parent_id": 26,
        "ID": 549
    },
    {
        "name": "科尔沁左翼中旗",
        "cascade": 3,
        "parent_id": 26,
        "ID": 550
    },
    {
        "name": "保康镇",
        "cascade": 3,
        "parent_id": 26,
        "ID": 551
    },
    {
        "name": "科尔沁左翼后旗",
        "cascade": 3,
        "parent_id": 26,
        "ID": 552
    },
    {
        "name": "甘旗卡镇",
        "cascade": 3,
        "parent_id": 26,
        "ID": 553
    },
    {
        "name": "海拉尔区",
        "cascade": 3,
        "parent_id": 27,
        "ID": 554
    },
    {
        "name": "满洲里市",
        "cascade": 3,
        "parent_id": 27,
        "ID": 555
    },
    {
        "name": "扎兰屯市",
        "cascade": 3,
        "parent_id": 27,
        "ID": 556
    },
    {
        "name": "牙克石市",
        "cascade": 3,
        "parent_id": 27,
        "ID": 557
    },
    {
        "name": "根河市",
        "cascade": 3,
        "parent_id": 27,
        "ID": 558
    },
    {
        "name": "额尔古纳市",
        "cascade": 3,
        "parent_id": 27,
        "ID": 559
    },
    {
        "name": "阿荣旗",
        "cascade": 3,
        "parent_id": 27,
        "ID": 560
    },
    {
        "name": "那吉镇",
        "cascade": 3,
        "parent_id": 27,
        "ID": 561
    },
    {
        "name": "新巴尔虎右旗",
        "cascade": 3,
        "parent_id": 27,
        "ID": 562
    },
    {
        "name": "阿拉坦额莫勒镇",
        "cascade": 3,
        "parent_id": 27,
        "ID": 563
    },
    {
        "name": "新巴尔虎左旗",
        "cascade": 3,
        "parent_id": 27,
        "ID": 564
    },
    {
        "name": "阿穆古郎镇",
        "cascade": 3,
        "parent_id": 27,
        "ID": 565
    },
    {
        "name": "陈巴尔虎旗",
        "cascade": 3,
        "parent_id": 27,
        "ID": 566
    },
    {
        "name": "巴彦库仁镇",
        "cascade": 3,
        "parent_id": 27,
        "ID": 567
    },
    {
        "name": "鄂伦春自治旗",
        "cascade": 3,
        "parent_id": 27,
        "ID": 568
    },
    {
        "name": "阿里河镇",
        "cascade": 3,
        "parent_id": 27,
        "ID": 569
    },
    {
        "name": "鄂温克族自治旗",
        "cascade": 3,
        "parent_id": 27,
        "ID": 570
    },
    {
        "name": "巴彦托海镇",
        "cascade": 3,
        "parent_id": 27,
        "ID": 571
    },
    {
        "name": "莫力达瓦达斡尔族自治旗",
        "cascade": 3,
        "parent_id": 27,
        "ID": 572
    },
    {
        "name": "尼尔基镇",
        "cascade": 3,
        "parent_id": 27,
        "ID": 573
    },
    {
        "name": "东胜区",
        "cascade": 3,
        "parent_id": 28,
        "ID": 574
    },
    {
        "name": "达拉特旗",
        "cascade": 3,
        "parent_id": 28,
        "ID": 575
    },
    {
        "name": "树林召镇",
        "cascade": 3,
        "parent_id": 28,
        "ID": 576
    },
    {
        "name": "准格尔旗",
        "cascade": 3,
        "parent_id": 28,
        "ID": 577
    },
    {
        "name": "薛家湾镇",
        "cascade": 3,
        "parent_id": 28,
        "ID": 578
    },
    {
        "name": "鄂托克前旗",
        "cascade": 3,
        "parent_id": 28,
        "ID": 579
    },
    {
        "name": "敖勒召其镇",
        "cascade": 3,
        "parent_id": 28,
        "ID": 580
    },
    {
        "name": "鄂托克旗",
        "cascade": 3,
        "parent_id": 28,
        "ID": 581
    },
    {
        "name": "乌兰镇",
        "cascade": 3,
        "parent_id": 28,
        "ID": 582
    },
    {
        "name": "杭锦旗",
        "cascade": 3,
        "parent_id": 28,
        "ID": 583
    },
    {
        "name": "锡尼镇",
        "cascade": 3,
        "parent_id": 28,
        "ID": 584
    },
    {
        "name": "乌审旗",
        "cascade": 3,
        "parent_id": 28,
        "ID": 585
    },
    {
        "name": "嘎鲁图镇",
        "cascade": 3,
        "parent_id": 28,
        "ID": 586
    },
    {
        "name": "伊金霍洛旗",
        "cascade": 3,
        "parent_id": 28,
        "ID": 587
    },
    {
        "name": "阿勒腾席热镇",
        "cascade": 3,
        "parent_id": 28,
        "ID": 588
    },
    {
        "name": "集宁区",
        "cascade": 3,
        "parent_id": 29,
        "ID": 589
    },
    {
        "name": "丰镇市",
        "cascade": 3,
        "parent_id": 29,
        "ID": 590
    },
    {
        "name": "卓资县",
        "cascade": 3,
        "parent_id": 29,
        "ID": 591
    },
    {
        "name": "卓资山镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 592
    },
    {
        "name": "化德县",
        "cascade": 3,
        "parent_id": 29,
        "ID": 593
    },
    {
        "name": "长顺镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 594
    },
    {
        "name": "商都县",
        "cascade": 3,
        "parent_id": 29,
        "ID": 595
    },
    {
        "name": "商都镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 596
    },
    {
        "name": "兴和县",
        "cascade": 3,
        "parent_id": 29,
        "ID": 597
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 598
    },
    {
        "name": "凉城县",
        "cascade": 3,
        "parent_id": 29,
        "ID": 599
    },
    {
        "name": "岱海镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 600
    },
    {
        "name": "察哈尔右翼前旗",
        "cascade": 3,
        "parent_id": 29,
        "ID": 601
    },
    {
        "name": "土贵乌拉镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 602
    },
    {
        "name": "察哈尔右翼中旗",
        "cascade": 3,
        "parent_id": 29,
        "ID": 603
    },
    {
        "name": "科布尔镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 604
    },
    {
        "name": "察哈尔右翼后旗",
        "cascade": 3,
        "parent_id": 29,
        "ID": 605
    },
    {
        "name": "白音察干镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 606
    },
    {
        "name": "四子王旗",
        "cascade": 3,
        "parent_id": 29,
        "ID": 607
    },
    {
        "name": "乌兰花镇",
        "cascade": 3,
        "parent_id": 29,
        "ID": 608
    },
    {
        "name": "临河区",
        "cascade": 3,
        "parent_id": 30,
        "ID": 609
    },
    {
        "name": "五原县",
        "cascade": 3,
        "parent_id": 30,
        "ID": 610
    },
    {
        "name": "隆兴昌镇",
        "cascade": 3,
        "parent_id": 30,
        "ID": 611
    },
    {
        "name": "磴口县",
        "cascade": 3,
        "parent_id": 30,
        "ID": 612
    },
    {
        "name": "巴彦高勒镇",
        "cascade": 3,
        "parent_id": 30,
        "ID": 613
    },
    {
        "name": "乌拉特前旗",
        "cascade": 3,
        "parent_id": 30,
        "ID": 614
    },
    {
        "name": "乌拉山镇",
        "cascade": 3,
        "parent_id": 30,
        "ID": 615
    },
    {
        "name": "乌拉特中旗",
        "cascade": 3,
        "parent_id": 30,
        "ID": 616
    },
    {
        "name": "海流图镇",
        "cascade": 3,
        "parent_id": 30,
        "ID": 617
    },
    {
        "name": "乌拉特后旗",
        "cascade": 3,
        "parent_id": 30,
        "ID": 618
    },
    {
        "name": "巴音宝力格镇",
        "cascade": 3,
        "parent_id": 30,
        "ID": 619
    },
    {
        "name": "杭锦后旗",
        "cascade": 3,
        "parent_id": 30,
        "ID": 620
    },
    {
        "name": "陕坝镇",
        "cascade": 3,
        "parent_id": 30,
        "ID": 621
    },
    {
        "name": "乌兰浩特市",
        "cascade": 3,
        "parent_id": 31,
        "ID": 622
    },
    {
        "name": "阿尔山市",
        "cascade": 3,
        "parent_id": 31,
        "ID": 623
    },
    {
        "name": "突泉县",
        "cascade": 3,
        "parent_id": 31,
        "ID": 624
    },
    {
        "name": "突泉镇",
        "cascade": 3,
        "parent_id": 31,
        "ID": 625
    },
    {
        "name": "科尔沁右翼前旗",
        "cascade": 3,
        "parent_id": 31,
        "ID": 626
    },
    {
        "name": "大坝沟镇",
        "cascade": 3,
        "parent_id": 31,
        "ID": 627
    },
    {
        "name": "科尔沁右翼中旗",
        "cascade": 3,
        "parent_id": 31,
        "ID": 628
    },
    {
        "name": "巴彦呼硕镇",
        "cascade": 3,
        "parent_id": 31,
        "ID": 629
    },
    {
        "name": "扎赉特旗",
        "cascade": 3,
        "parent_id": 31,
        "ID": 630
    },
    {
        "name": "音德尔镇",
        "cascade": 3,
        "parent_id": 31,
        "ID": 631
    },
    {
        "name": "锡林浩特市",
        "cascade": 3,
        "parent_id": 32,
        "ID": 632
    },
    {
        "name": "二连浩特市",
        "cascade": 3,
        "parent_id": 32,
        "ID": 633
    },
    {
        "name": "多伦县",
        "cascade": 3,
        "parent_id": 32,
        "ID": 634
    },
    {
        "name": "多伦淖尔镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 635
    },
    {
        "name": "阿巴嘎旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 636
    },
    {
        "name": "别力古台镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 637
    },
    {
        "name": "苏尼特左旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 638
    },
    {
        "name": "满都拉图镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 639
    },
    {
        "name": "苏尼特右旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 640
    },
    {
        "name": "赛汉塔拉镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 641
    },
    {
        "name": "东乌珠穆沁旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 642
    },
    {
        "name": "乌里雅斯太镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 643
    },
    {
        "name": "西乌珠穆沁旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 644
    },
    {
        "name": "巴拉嘎尔郭勒镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 645
    },
    {
        "name": "太仆寺旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 646
    },
    {
        "name": "宝昌镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 647
    },
    {
        "name": "镶黄旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 648
    },
    {
        "name": "新宝拉格镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 649
    },
    {
        "name": "正镶白旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 650
    },
    {
        "name": "明安图镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 651
    },
    {
        "name": "正蓝旗",
        "cascade": 3,
        "parent_id": 32,
        "ID": 652
    },
    {
        "name": "上都镇",
        "cascade": 3,
        "parent_id": 32,
        "ID": 653
    },
    {
        "name": "巴彦浩特镇",
        "cascade": 3,
        "parent_id": 33,
        "ID": 654
    },
    {
        "name": "阿拉善右旗",
        "cascade": 3,
        "parent_id": 33,
        "ID": 655
    },
    {
        "name": "额肯呼都格镇",
        "cascade": 3,
        "parent_id": 33,
        "ID": 656
    },
    {
        "name": "额济纳旗",
        "cascade": 3,
        "parent_id": 33,
        "ID": 657
    },
    {
        "name": "达来呼布镇",
        "cascade": 3,
        "parent_id": 33,
        "ID": 658
    },
    {
        "name": "沈河区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 659
    },
    {
        "name": "和平区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 660
    },
    {
        "name": "大东区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 661
    },
    {
        "name": "皇姑区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 662
    },
    {
        "name": "铁西区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 663
    },
    {
        "name": "苏家屯区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 664
    },
    {
        "name": "东陵区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 665
    },
    {
        "name": "新城子区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 666
    },
    {
        "name": "于洪区",
        "cascade": 3,
        "parent_id": 34,
        "ID": 667
    },
    {
        "name": "新民市",
        "cascade": 3,
        "parent_id": 34,
        "ID": 668
    },
    {
        "name": "辽中县",
        "cascade": 3,
        "parent_id": 34,
        "ID": 669
    },
    {
        "name": "辽中镇",
        "cascade": 3,
        "parent_id": 34,
        "ID": 670
    },
    {
        "name": "康平县",
        "cascade": 3,
        "parent_id": 34,
        "ID": 671
    },
    {
        "name": "康平镇",
        "cascade": 3,
        "parent_id": 34,
        "ID": 672
    },
    {
        "name": "法库县",
        "cascade": 3,
        "parent_id": 34,
        "ID": 673
    },
    {
        "name": "法库镇",
        "cascade": 3,
        "parent_id": 34,
        "ID": 674
    },
    {
        "name": "双塔区",
        "cascade": 3,
        "parent_id": 35,
        "ID": 675
    },
    {
        "name": "龙城区",
        "cascade": 3,
        "parent_id": 35,
        "ID": 676
    },
    {
        "name": "北票市",
        "cascade": 3,
        "parent_id": 35,
        "ID": 677
    },
    {
        "name": "凌源市",
        "cascade": 3,
        "parent_id": 35,
        "ID": 678
    },
    {
        "name": "朝阳县",
        "cascade": 3,
        "parent_id": 35,
        "ID": 679
    },
    {
        "name": "朝阳市双塔区",
        "cascade": 3,
        "parent_id": 35,
        "ID": 680
    },
    {
        "name": "建平县",
        "cascade": 3,
        "parent_id": 35,
        "ID": 681
    },
    {
        "name": "喀喇沁左翼蒙古族自治县",
        "cascade": 3,
        "parent_id": 35,
        "ID": 682
    },
    {
        "name": "大城子镇",
        "cascade": 3,
        "parent_id": 35,
        "ID": 683
    },
    {
        "name": "海州区",
        "cascade": 3,
        "parent_id": 36,
        "ID": 684
    },
    {
        "name": "新邱区",
        "cascade": 3,
        "parent_id": 36,
        "ID": 685
    },
    {
        "name": "太平区",
        "cascade": 3,
        "parent_id": 36,
        "ID": 686
    },
    {
        "name": "清河门区",
        "cascade": 3,
        "parent_id": 36,
        "ID": 687
    },
    {
        "name": "细河区",
        "cascade": 3,
        "parent_id": 36,
        "ID": 688
    },
    {
        "name": "彰武县",
        "cascade": 3,
        "parent_id": 36,
        "ID": 689
    },
    {
        "name": "彰武镇",
        "cascade": 3,
        "parent_id": 36,
        "ID": 690
    },
    {
        "name": "阜新蒙古族自治县",
        "cascade": 3,
        "parent_id": 36,
        "ID": 691
    },
    {
        "name": "阜新镇",
        "cascade": 3,
        "parent_id": 36,
        "ID": 692
    },
    {
        "name": "银州区",
        "cascade": 3,
        "parent_id": 37,
        "ID": 693
    },
    {
        "name": "清河区",
        "cascade": 3,
        "parent_id": 37,
        "ID": 694
    },
    {
        "name": "调兵山市",
        "cascade": 3,
        "parent_id": 37,
        "ID": 695
    },
    {
        "name": "开原市",
        "cascade": 3,
        "parent_id": 37,
        "ID": 696
    },
    {
        "name": "铁岭县",
        "cascade": 3,
        "parent_id": 37,
        "ID": 697
    },
    {
        "name": "铁岭市银州区",
        "cascade": 3,
        "parent_id": 37,
        "ID": 698
    },
    {
        "name": "西丰县",
        "cascade": 3,
        "parent_id": 37,
        "ID": 699
    },
    {
        "name": "西丰镇",
        "cascade": 3,
        "parent_id": 37,
        "ID": 700
    },
    {
        "name": "昌图县",
        "cascade": 3,
        "parent_id": 37,
        "ID": 701
    },
    {
        "name": "昌图镇",
        "cascade": 3,
        "parent_id": 37,
        "ID": 702
    },
    {
        "name": "顺城区",
        "cascade": 3,
        "parent_id": 38,
        "ID": 703
    },
    {
        "name": "新抚区",
        "cascade": 3,
        "parent_id": 38,
        "ID": 704
    },
    {
        "name": "东洲区",
        "cascade": 3,
        "parent_id": 38,
        "ID": 705
    },
    {
        "name": "望花区",
        "cascade": 3,
        "parent_id": 38,
        "ID": 706
    },
    {
        "name": "抚顺县",
        "cascade": 3,
        "parent_id": 38,
        "ID": 707
    },
    {
        "name": "抚顺市顺城区",
        "cascade": 3,
        "parent_id": 38,
        "ID": 708
    },
    {
        "name": "新宾满族自治县",
        "cascade": 3,
        "parent_id": 38,
        "ID": 709
    },
    {
        "name": "新宾镇",
        "cascade": 3,
        "parent_id": 38,
        "ID": 710
    },
    {
        "name": "清原满族自治县",
        "cascade": 3,
        "parent_id": 38,
        "ID": 711
    },
    {
        "name": "清原镇",
        "cascade": 3,
        "parent_id": 38,
        "ID": 712
    },
    {
        "name": "平山区",
        "cascade": 3,
        "parent_id": 39,
        "ID": 713
    },
    {
        "name": "溪湖区",
        "cascade": 3,
        "parent_id": 39,
        "ID": 714
    },
    {
        "name": "明山区",
        "cascade": 3,
        "parent_id": 39,
        "ID": 715
    },
    {
        "name": "南芬区",
        "cascade": 3,
        "parent_id": 39,
        "ID": 716
    },
    {
        "name": "本溪满族自治县",
        "cascade": 3,
        "parent_id": 39,
        "ID": 717
    },
    {
        "name": "小市镇",
        "cascade": 3,
        "parent_id": 39,
        "ID": 718
    },
    {
        "name": "桓仁满族自治县",
        "cascade": 3,
        "parent_id": 39,
        "ID": 719
    },
    {
        "name": "桓仁镇",
        "cascade": 3,
        "parent_id": 39,
        "ID": 720
    },
    {
        "name": "白塔区",
        "cascade": 3,
        "parent_id": 40,
        "ID": 721
    },
    {
        "name": "文圣区",
        "cascade": 3,
        "parent_id": 40,
        "ID": 722
    },
    {
        "name": "宏伟区",
        "cascade": 3,
        "parent_id": 40,
        "ID": 723
    },
    {
        "name": "弓长岭区",
        "cascade": 3,
        "parent_id": 40,
        "ID": 724
    },
    {
        "name": "太子河区",
        "cascade": 3,
        "parent_id": 40,
        "ID": 725
    },
    {
        "name": "灯塔市",
        "cascade": 3,
        "parent_id": 40,
        "ID": 726
    },
    {
        "name": "辽阳县",
        "cascade": 3,
        "parent_id": 40,
        "ID": 727
    },
    {
        "name": "首山镇",
        "cascade": 3,
        "parent_id": 40,
        "ID": 728
    },
    {
        "name": "铁东区",
        "cascade": 3,
        "parent_id": 41,
        "ID": 729
    },
    {
        "name": "铁西区",
        "cascade": 3,
        "parent_id": 41,
        "ID": 730
    },
    {
        "name": "立山区",
        "cascade": 3,
        "parent_id": 41,
        "ID": 731
    },
    {
        "name": "千山区",
        "cascade": 3,
        "parent_id": 41,
        "ID": 732
    },
    {
        "name": "海城市",
        "cascade": 3,
        "parent_id": 41,
        "ID": 733
    },
    {
        "name": "台安县",
        "cascade": 3,
        "parent_id": 41,
        "ID": 734
    },
    {
        "name": "台安镇",
        "cascade": 3,
        "parent_id": 41,
        "ID": 735
    },
    {
        "name": "岫岩满族自治县",
        "cascade": 3,
        "parent_id": 41,
        "ID": 736
    },
    {
        "name": "岫岩镇",
        "cascade": 3,
        "parent_id": 41,
        "ID": 737
    },
    {
        "name": "振兴区",
        "cascade": 3,
        "parent_id": 42,
        "ID": 738
    },
    {
        "name": "元宝区",
        "cascade": 3,
        "parent_id": 42,
        "ID": 739
    },
    {
        "name": "振安区",
        "cascade": 3,
        "parent_id": 42,
        "ID": 740
    },
    {
        "name": "凤城市",
        "cascade": 3,
        "parent_id": 42,
        "ID": 741
    },
    {
        "name": "东港市",
        "cascade": 3,
        "parent_id": 42,
        "ID": 742
    },
    {
        "name": "宽甸满族自治县",
        "cascade": 3,
        "parent_id": 42,
        "ID": 743
    },
    {
        "name": "宽甸镇",
        "cascade": 3,
        "parent_id": 42,
        "ID": 744
    },
    {
        "name": "西岗区",
        "cascade": 3,
        "parent_id": 43,
        "ID": 745
    },
    {
        "name": "中山区",
        "cascade": 3,
        "parent_id": 43,
        "ID": 746
    },
    {
        "name": "沙河口区",
        "cascade": 3,
        "parent_id": 43,
        "ID": 747
    },
    {
        "name": "甘井子区",
        "cascade": 3,
        "parent_id": 43,
        "ID": 748
    },
    {
        "name": "旅顺口区",
        "cascade": 3,
        "parent_id": 43,
        "ID": 749
    },
    {
        "name": "金州区",
        "cascade": 3,
        "parent_id": 43,
        "ID": 750
    },
    {
        "name": "瓦房店市",
        "cascade": 3,
        "parent_id": 43,
        "ID": 751
    },
    {
        "name": "普兰店市",
        "cascade": 3,
        "parent_id": 43,
        "ID": 752
    },
    {
        "name": "庄河市",
        "cascade": 3,
        "parent_id": 43,
        "ID": 753
    },
    {
        "name": "长海县",
        "cascade": 3,
        "parent_id": 43,
        "ID": 754
    },
    {
        "name": "大长山岛镇",
        "cascade": 3,
        "parent_id": 43,
        "ID": 755
    },
    {
        "name": "站前区",
        "cascade": 3,
        "parent_id": 44,
        "ID": 756
    },
    {
        "name": "西市区",
        "cascade": 3,
        "parent_id": 44,
        "ID": 757
    },
    {
        "name": "鲅鱼圈区",
        "cascade": 3,
        "parent_id": 44,
        "ID": 758
    },
    {
        "name": "老边区",
        "cascade": 3,
        "parent_id": 44,
        "ID": 759
    },
    {
        "name": "大石桥市",
        "cascade": 3,
        "parent_id": 44,
        "ID": 760
    },
    {
        "name": "盖州市",
        "cascade": 3,
        "parent_id": 44,
        "ID": 761
    },
    {
        "name": "兴隆台区",
        "cascade": 3,
        "parent_id": 45,
        "ID": 762
    },
    {
        "name": "双台子区",
        "cascade": 3,
        "parent_id": 45,
        "ID": 763
    },
    {
        "name": "大洼县",
        "cascade": 3,
        "parent_id": 45,
        "ID": 764
    },
    {
        "name": "大洼镇",
        "cascade": 3,
        "parent_id": 45,
        "ID": 765
    },
    {
        "name": "盘山县",
        "cascade": 3,
        "parent_id": 45,
        "ID": 766
    },
    {
        "name": "盘锦市双台子区",
        "cascade": 3,
        "parent_id": 45,
        "ID": 767
    },
    {
        "name": "太和区",
        "cascade": 3,
        "parent_id": 46,
        "ID": 768
    },
    {
        "name": "古塔区",
        "cascade": 3,
        "parent_id": 46,
        "ID": 769
    },
    {
        "name": "凌河区",
        "cascade": 3,
        "parent_id": 46,
        "ID": 770
    },
    {
        "name": "凌海市",
        "cascade": 3,
        "parent_id": 46,
        "ID": 771
    },
    {
        "name": "北宁市",
        "cascade": 3,
        "parent_id": 46,
        "ID": 772
    },
    {
        "name": "黑山县",
        "cascade": 3,
        "parent_id": 46,
        "ID": 773
    },
    {
        "name": "黑山镇",
        "cascade": 3,
        "parent_id": 46,
        "ID": 774
    },
    {
        "name": "义县",
        "cascade": 3,
        "parent_id": 46,
        "ID": 775
    },
    {
        "name": "义州镇",
        "cascade": 3,
        "parent_id": 46,
        "ID": 776
    },
    {
        "name": "龙港区",
        "cascade": 3,
        "parent_id": 47,
        "ID": 777
    },
    {
        "name": "连山区",
        "cascade": 3,
        "parent_id": 47,
        "ID": 778
    },
    {
        "name": "南票区",
        "cascade": 3,
        "parent_id": 47,
        "ID": 779
    },
    {
        "name": "兴城市",
        "cascade": 3,
        "parent_id": 47,
        "ID": 780
    },
    {
        "name": "绥中县",
        "cascade": 3,
        "parent_id": 47,
        "ID": 781
    },
    {
        "name": "绥中镇",
        "cascade": 3,
        "parent_id": 47,
        "ID": 782
    },
    {
        "name": "建昌县",
        "cascade": 3,
        "parent_id": 47,
        "ID": 783
    },
    {
        "name": "建昌镇",
        "cascade": 3,
        "parent_id": 47,
        "ID": 784
    },
    {
        "name": "朝阳区",
        "cascade": 3,
        "parent_id": 48,
        "ID": 785
    },
    {
        "name": "南关区",
        "cascade": 3,
        "parent_id": 48,
        "ID": 786
    },
    {
        "name": "宽城区",
        "cascade": 3,
        "parent_id": 48,
        "ID": 787
    },
    {
        "name": "二道区",
        "cascade": 3,
        "parent_id": 48,
        "ID": 788
    },
    {
        "name": "绿园区",
        "cascade": 3,
        "parent_id": 48,
        "ID": 789
    },
    {
        "name": "双阳区",
        "cascade": 3,
        "parent_id": 48,
        "ID": 790
    },
    {
        "name": "德惠市",
        "cascade": 3,
        "parent_id": 48,
        "ID": 791
    },
    {
        "name": "九台市",
        "cascade": 3,
        "parent_id": 48,
        "ID": 792
    },
    {
        "name": "榆树市",
        "cascade": 3,
        "parent_id": 48,
        "ID": 793
    },
    {
        "name": "农安县",
        "cascade": 3,
        "parent_id": 48,
        "ID": 794
    },
    {
        "name": "农安镇",
        "cascade": 3,
        "parent_id": 48,
        "ID": 795
    },
    {
        "name": "洮北区",
        "cascade": 3,
        "parent_id": 49,
        "ID": 796
    },
    {
        "name": "大安市",
        "cascade": 3,
        "parent_id": 49,
        "ID": 797
    },
    {
        "name": "洮南市",
        "cascade": 3,
        "parent_id": 49,
        "ID": 798
    },
    {
        "name": "镇赉县",
        "cascade": 3,
        "parent_id": 49,
        "ID": 799
    },
    {
        "name": "镇赉镇",
        "cascade": 3,
        "parent_id": 49,
        "ID": 800
    },
    {
        "name": "通榆县",
        "cascade": 3,
        "parent_id": 49,
        "ID": 801
    },
    {
        "name": "开通镇",
        "cascade": 3,
        "parent_id": 49,
        "ID": 802
    },
    {
        "name": "宁江区",
        "cascade": 3,
        "parent_id": 50,
        "ID": 803
    },
    {
        "name": "扶余县",
        "cascade": 3,
        "parent_id": 50,
        "ID": 804
    },
    {
        "name": "三岔河镇",
        "cascade": 3,
        "parent_id": 50,
        "ID": 805
    },
    {
        "name": "长岭县",
        "cascade": 3,
        "parent_id": 50,
        "ID": 806
    },
    {
        "name": "长岭镇",
        "cascade": 3,
        "parent_id": 50,
        "ID": 807
    },
    {
        "name": "乾安县",
        "cascade": 3,
        "parent_id": 50,
        "ID": 808
    },
    {
        "name": "乾安镇",
        "cascade": 3,
        "parent_id": 50,
        "ID": 809
    },
    {
        "name": "前郭尔罗斯蒙古族自治县",
        "cascade": 3,
        "parent_id": 50,
        "ID": 810
    },
    {
        "name": "前郭镇",
        "cascade": 3,
        "parent_id": 50,
        "ID": 811
    },
    {
        "name": "船营区",
        "cascade": 3,
        "parent_id": 51,
        "ID": 812
    },
    {
        "name": "龙潭区",
        "cascade": 3,
        "parent_id": 51,
        "ID": 813
    },
    {
        "name": "昌邑区",
        "cascade": 3,
        "parent_id": 51,
        "ID": 814
    },
    {
        "name": "丰满区",
        "cascade": 3,
        "parent_id": 51,
        "ID": 815
    },
    {
        "name": "磐石市",
        "cascade": 3,
        "parent_id": 51,
        "ID": 816
    },
    {
        "name": "蛟河市",
        "cascade": 3,
        "parent_id": 51,
        "ID": 817
    },
    {
        "name": "桦甸市",
        "cascade": 3,
        "parent_id": 51,
        "ID": 818
    },
    {
        "name": "舒兰市",
        "cascade": 3,
        "parent_id": 51,
        "ID": 819
    },
    {
        "name": "永吉县",
        "cascade": 3,
        "parent_id": 51,
        "ID": 820
    },
    {
        "name": "口前镇",
        "cascade": 3,
        "parent_id": 51,
        "ID": 821
    },
    {
        "name": "铁西区",
        "cascade": 3,
        "parent_id": 52,
        "ID": 822
    },
    {
        "name": "铁东区",
        "cascade": 3,
        "parent_id": 52,
        "ID": 823
    },
    {
        "name": "双辽市",
        "cascade": 3,
        "parent_id": 52,
        "ID": 824
    },
    {
        "name": "公主岭市",
        "cascade": 3,
        "parent_id": 52,
        "ID": 825
    },
    {
        "name": "梨树县",
        "cascade": 3,
        "parent_id": 52,
        "ID": 826
    },
    {
        "name": "梨树镇",
        "cascade": 3,
        "parent_id": 52,
        "ID": 827
    },
    {
        "name": "伊通满族自治县",
        "cascade": 3,
        "parent_id": 52,
        "ID": 828
    },
    {
        "name": "伊通镇",
        "cascade": 3,
        "parent_id": 52,
        "ID": 829
    },
    {
        "name": "龙山区",
        "cascade": 3,
        "parent_id": 53,
        "ID": 830
    },
    {
        "name": "西安区",
        "cascade": 3,
        "parent_id": 53,
        "ID": 831
    },
    {
        "name": "东丰县",
        "cascade": 3,
        "parent_id": 53,
        "ID": 832
    },
    {
        "name": "东丰镇",
        "cascade": 3,
        "parent_id": 53,
        "ID": 833
    },
    {
        "name": "东辽县",
        "cascade": 3,
        "parent_id": 53,
        "ID": 834
    },
    {
        "name": "白泉镇",
        "cascade": 3,
        "parent_id": 53,
        "ID": 835
    },
    {
        "name": "东昌区",
        "cascade": 3,
        "parent_id": 54,
        "ID": 836
    },
    {
        "name": "二道江区",
        "cascade": 3,
        "parent_id": 54,
        "ID": 837
    },
    {
        "name": "梅河口市",
        "cascade": 3,
        "parent_id": 54,
        "ID": 838
    },
    {
        "name": "集安市",
        "cascade": 3,
        "parent_id": 54,
        "ID": 839
    },
    {
        "name": "通化县",
        "cascade": 3,
        "parent_id": 54,
        "ID": 840
    },
    {
        "name": "快大茂镇",
        "cascade": 3,
        "parent_id": 54,
        "ID": 841
    },
    {
        "name": "辉南县",
        "cascade": 3,
        "parent_id": 54,
        "ID": 842
    },
    {
        "name": "朝阳镇",
        "cascade": 3,
        "parent_id": 54,
        "ID": 843
    },
    {
        "name": "柳河县",
        "cascade": 3,
        "parent_id": 54,
        "ID": 844
    },
    {
        "name": "柳河镇",
        "cascade": 3,
        "parent_id": 54,
        "ID": 845
    },
    {
        "name": "八道江区",
        "cascade": 3,
        "parent_id": 55,
        "ID": 846
    },
    {
        "name": "临江市",
        "cascade": 3,
        "parent_id": 55,
        "ID": 847
    },
    {
        "name": "江源县",
        "cascade": 3,
        "parent_id": 55,
        "ID": 848
    },
    {
        "name": "孙家堡子镇",
        "cascade": 3,
        "parent_id": 55,
        "ID": 849
    },
    {
        "name": "抚松县",
        "cascade": 3,
        "parent_id": 55,
        "ID": 850
    },
    {
        "name": "抚松镇",
        "cascade": 3,
        "parent_id": 55,
        "ID": 851
    },
    {
        "name": "靖宇县",
        "cascade": 3,
        "parent_id": 55,
        "ID": 852
    },
    {
        "name": "靖宇镇",
        "cascade": 3,
        "parent_id": 55,
        "ID": 853
    },
    {
        "name": "长白朝鲜族自治县",
        "cascade": 3,
        "parent_id": 55,
        "ID": 854
    },
    {
        "name": "长白镇",
        "cascade": 3,
        "parent_id": 55,
        "ID": 855
    },
    {
        "name": "延吉市",
        "cascade": 3,
        "parent_id": 56,
        "ID": 856
    },
    {
        "name": "图们市",
        "cascade": 3,
        "parent_id": 56,
        "ID": 857
    },
    {
        "name": "敦化市",
        "cascade": 3,
        "parent_id": 56,
        "ID": 858
    },
    {
        "name": "珲春市",
        "cascade": 3,
        "parent_id": 56,
        "ID": 859
    },
    {
        "name": "龙井市",
        "cascade": 3,
        "parent_id": 56,
        "ID": 860
    },
    {
        "name": "和龙市",
        "cascade": 3,
        "parent_id": 56,
        "ID": 861
    },
    {
        "name": "汪清县",
        "cascade": 3,
        "parent_id": 56,
        "ID": 862
    },
    {
        "name": "汪清镇",
        "cascade": 3,
        "parent_id": 56,
        "ID": 863
    },
    {
        "name": "安图县",
        "cascade": 3,
        "parent_id": 56,
        "ID": 864
    },
    {
        "name": "明月镇",
        "cascade": 3,
        "parent_id": 56,
        "ID": 865
    },
    {
        "name": "松北区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 866
    },
    {
        "name": "道里区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 867
    },
    {
        "name": "南岗区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 868
    },
    {
        "name": "道外区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 869
    },
    {
        "name": "香坊区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 870
    },
    {
        "name": "动力区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 871
    },
    {
        "name": "平房区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 872
    },
    {
        "name": "呼兰区",
        "cascade": 3,
        "parent_id": 57,
        "ID": 873
    },
    {
        "name": "双城市",
        "cascade": 3,
        "parent_id": 57,
        "ID": 874
    },
    {
        "name": "尚志市",
        "cascade": 3,
        "parent_id": 57,
        "ID": 875
    },
    {
        "name": "五常市",
        "cascade": 3,
        "parent_id": 57,
        "ID": 876
    },
    {
        "name": "阿城市",
        "cascade": 3,
        "parent_id": 57,
        "ID": 877
    },
    {
        "name": "依兰县",
        "cascade": 3,
        "parent_id": 57,
        "ID": 878
    },
    {
        "name": "依兰镇",
        "cascade": 3,
        "parent_id": 57,
        "ID": 879
    },
    {
        "name": "方正县",
        "cascade": 3,
        "parent_id": 57,
        "ID": 880
    },
    {
        "name": "方正镇",
        "cascade": 3,
        "parent_id": 57,
        "ID": 881
    },
    {
        "name": "宾县",
        "cascade": 3,
        "parent_id": 57,
        "ID": 882
    },
    {
        "name": "宾州镇",
        "cascade": 3,
        "parent_id": 57,
        "ID": 883
    },
    {
        "name": "巴彦县",
        "cascade": 3,
        "parent_id": 57,
        "ID": 884
    },
    {
        "name": "巴彦镇",
        "cascade": 3,
        "parent_id": 57,
        "ID": 885
    },
    {
        "name": "木兰县",
        "cascade": 3,
        "parent_id": 57,
        "ID": 886
    },
    {
        "name": "木兰镇",
        "cascade": 3,
        "parent_id": 57,
        "ID": 887
    },
    {
        "name": "通河县",
        "cascade": 3,
        "parent_id": 57,
        "ID": 888
    },
    {
        "name": "通河镇",
        "cascade": 3,
        "parent_id": 57,
        "ID": 889
    },
    {
        "name": "延寿县",
        "cascade": 3,
        "parent_id": 57,
        "ID": 890
    },
    {
        "name": "延寿镇",
        "cascade": 3,
        "parent_id": 57,
        "ID": 891
    },
    {
        "name": "建华区",
        "cascade": 3,
        "parent_id": 58,
        "ID": 892
    },
    {
        "name": "龙沙区",
        "cascade": 3,
        "parent_id": 58,
        "ID": 893
    },
    {
        "name": "铁锋区",
        "cascade": 3,
        "parent_id": 58,
        "ID": 894
    },
    {
        "name": "昂昂溪区",
        "cascade": 3,
        "parent_id": 58,
        "ID": 895
    },
    {
        "name": "富拉尔基区",
        "cascade": 3,
        "parent_id": 58,
        "ID": 896
    },
    {
        "name": "碾子山区",
        "cascade": 3,
        "parent_id": 58,
        "ID": 897
    },
    {
        "name": "梅里斯达斡尔族区",
        "cascade": 3,
        "parent_id": 58,
        "ID": 898
    },
    {
        "name": "讷河市",
        "cascade": 3,
        "parent_id": 58,
        "ID": 899
    },
    {
        "name": "龙江县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 900
    },
    {
        "name": "龙江镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 901
    },
    {
        "name": "依安县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 902
    },
    {
        "name": "依安镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 903
    },
    {
        "name": "泰来县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 904
    },
    {
        "name": "泰来镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 905
    },
    {
        "name": "甘南县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 906
    },
    {
        "name": "甘南镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 907
    },
    {
        "name": "富裕县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 908
    },
    {
        "name": "富裕镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 909
    },
    {
        "name": "克山县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 910
    },
    {
        "name": "克山镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 911
    },
    {
        "name": "克东县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 912
    },
    {
        "name": "克东镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 913
    },
    {
        "name": "拜泉县",
        "cascade": 3,
        "parent_id": 58,
        "ID": 914
    },
    {
        "name": "拜泉镇",
        "cascade": 3,
        "parent_id": 58,
        "ID": 915
    },
    {
        "name": "桃山区",
        "cascade": 3,
        "parent_id": 59,
        "ID": 916
    },
    {
        "name": "新兴区",
        "cascade": 3,
        "parent_id": 59,
        "ID": 917
    },
    {
        "name": "茄子河区",
        "cascade": 3,
        "parent_id": 59,
        "ID": 918
    },
    {
        "name": "勃利县",
        "cascade": 3,
        "parent_id": 59,
        "ID": 919
    },
    {
        "name": "勃利镇",
        "cascade": 3,
        "parent_id": 59,
        "ID": 920
    },
    {
        "name": "爱辉区",
        "cascade": 3,
        "parent_id": 60,
        "ID": 921
    },
    {
        "name": "北安市",
        "cascade": 3,
        "parent_id": 60,
        "ID": 922
    },
    {
        "name": "五大连池市",
        "cascade": 3,
        "parent_id": 60,
        "ID": 923
    },
    {
        "name": "嫩江县",
        "cascade": 3,
        "parent_id": 60,
        "ID": 924
    },
    {
        "name": "嫩江镇",
        "cascade": 3,
        "parent_id": 60,
        "ID": 925
    },
    {
        "name": "逊克县",
        "cascade": 3,
        "parent_id": 60,
        "ID": 926
    },
    {
        "name": "边疆镇",
        "cascade": 3,
        "parent_id": 60,
        "ID": 927
    },
    {
        "name": "孙吴县",
        "cascade": 3,
        "parent_id": 60,
        "ID": 928
    },
    {
        "name": "孙吴镇",
        "cascade": 3,
        "parent_id": 60,
        "ID": 929
    },
    {
        "name": "萨尔图区",
        "cascade": 3,
        "parent_id": 61,
        "ID": 930
    },
    {
        "name": "龙凤区",
        "cascade": 3,
        "parent_id": 61,
        "ID": 931
    },
    {
        "name": "让胡路区",
        "cascade": 3,
        "parent_id": 61,
        "ID": 932
    },
    {
        "name": "大同区",
        "cascade": 3,
        "parent_id": 61,
        "ID": 933
    },
    {
        "name": "红岗区",
        "cascade": 3,
        "parent_id": 61,
        "ID": 934
    },
    {
        "name": "肇州县",
        "cascade": 3,
        "parent_id": 61,
        "ID": 935
    },
    {
        "name": "肇州镇",
        "cascade": 3,
        "parent_id": 61,
        "ID": 936
    },
    {
        "name": "肇源县",
        "cascade": 3,
        "parent_id": 61,
        "ID": 937
    },
    {
        "name": "肇源镇",
        "cascade": 3,
        "parent_id": 61,
        "ID": 938
    },
    {
        "name": "林甸县",
        "cascade": 3,
        "parent_id": 61,
        "ID": 939
    },
    {
        "name": "林甸镇",
        "cascade": 3,
        "parent_id": 61,
        "ID": 940
    },
    {
        "name": "杜尔伯特蒙古族自治县",
        "cascade": 3,
        "parent_id": 61,
        "ID": 941
    },
    {
        "name": "泰康镇",
        "cascade": 3,
        "parent_id": 61,
        "ID": 942
    },
    {
        "name": "兴山区",
        "cascade": 3,
        "parent_id": 62,
        "ID": 943
    },
    {
        "name": "向阳区",
        "cascade": 3,
        "parent_id": 62,
        "ID": 944
    },
    {
        "name": "工农区",
        "cascade": 3,
        "parent_id": 62,
        "ID": 945
    },
    {
        "name": "南山区",
        "cascade": 3,
        "parent_id": 62,
        "ID": 946
    },
    {
        "name": "兴安区",
        "cascade": 3,
        "parent_id": 62,
        "ID": 947
    },
    {
        "name": "东山区",
        "cascade": 3,
        "parent_id": 62,
        "ID": 948
    },
    {
        "name": "萝北县",
        "cascade": 3,
        "parent_id": 62,
        "ID": 949
    },
    {
        "name": "凤翔镇",
        "cascade": 3,
        "parent_id": 62,
        "ID": 950
    },
    {
        "name": "绥滨县",
        "cascade": 3,
        "parent_id": 62,
        "ID": 951
    },
    {
        "name": "绥滨镇",
        "cascade": 3,
        "parent_id": 62,
        "ID": 952
    },
    {
        "name": "伊春区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 953
    },
    {
        "name": "南岔区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 954
    },
    {
        "name": "友好区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 955
    },
    {
        "name": "西林区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 956
    },
    {
        "name": "翠峦区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 957
    },
    {
        "name": "新青区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 958
    },
    {
        "name": "美溪区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 959
    },
    {
        "name": "金山屯区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 960
    },
    {
        "name": "五营区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 961
    },
    {
        "name": "乌马河区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 962
    },
    {
        "name": "汤旺河区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 963
    },
    {
        "name": "带岭区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 964
    },
    {
        "name": "乌伊岭区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 965
    },
    {
        "name": "红星区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 966
    },
    {
        "name": "上甘岭区",
        "cascade": 3,
        "parent_id": 63,
        "ID": 967
    },
    {
        "name": "铁力市",
        "cascade": 3,
        "parent_id": 63,
        "ID": 968
    },
    {
        "name": "嘉荫县",
        "cascade": 3,
        "parent_id": 63,
        "ID": 969
    },
    {
        "name": "朝阳镇",
        "cascade": 3,
        "parent_id": 63,
        "ID": 970
    },
    {
        "name": "前进区",
        "cascade": 3,
        "parent_id": 64,
        "ID": 971
    },
    {
        "name": "永红区",
        "cascade": 3,
        "parent_id": 64,
        "ID": 972
    },
    {
        "name": "向阳区",
        "cascade": 3,
        "parent_id": 64,
        "ID": 973
    },
    {
        "name": "东风区",
        "cascade": 3,
        "parent_id": 64,
        "ID": 974
    },
    {
        "name": "郊区",
        "cascade": 3,
        "parent_id": 64,
        "ID": 975
    },
    {
        "name": "同江市",
        "cascade": 3,
        "parent_id": 64,
        "ID": 976
    },
    {
        "name": "富锦市",
        "cascade": 3,
        "parent_id": 64,
        "ID": 977
    },
    {
        "name": "桦南县",
        "cascade": 3,
        "parent_id": 64,
        "ID": 978
    },
    {
        "name": "桦南镇",
        "cascade": 3,
        "parent_id": 64,
        "ID": 979
    },
    {
        "name": "桦川县",
        "cascade": 3,
        "parent_id": 64,
        "ID": 980
    },
    {
        "name": "悦来镇",
        "cascade": 3,
        "parent_id": 64,
        "ID": 981
    },
    {
        "name": "汤原县",
        "cascade": 3,
        "parent_id": 64,
        "ID": 982
    },
    {
        "name": "汤原镇",
        "cascade": 3,
        "parent_id": 64,
        "ID": 983
    },
    {
        "name": "抚远县",
        "cascade": 3,
        "parent_id": 64,
        "ID": 984
    },
    {
        "name": "抚远镇",
        "cascade": 3,
        "parent_id": 64,
        "ID": 985
    },
    {
        "name": "尖山区",
        "cascade": 3,
        "parent_id": 65,
        "ID": 986
    },
    {
        "name": "岭东区",
        "cascade": 3,
        "parent_id": 65,
        "ID": 987
    },
    {
        "name": "四方台区",
        "cascade": 3,
        "parent_id": 65,
        "ID": 988
    },
    {
        "name": "宝山区",
        "cascade": 3,
        "parent_id": 65,
        "ID": 989
    },
    {
        "name": "集贤县",
        "cascade": 3,
        "parent_id": 65,
        "ID": 990
    },
    {
        "name": "福利镇",
        "cascade": 3,
        "parent_id": 65,
        "ID": 991
    },
    {
        "name": "友谊县",
        "cascade": 3,
        "parent_id": 65,
        "ID": 992
    },
    {
        "name": "友谊镇",
        "cascade": 3,
        "parent_id": 65,
        "ID": 993
    },
    {
        "name": "宝清县",
        "cascade": 3,
        "parent_id": 65,
        "ID": 994
    },
    {
        "name": "宝清镇",
        "cascade": 3,
        "parent_id": 65,
        "ID": 995
    },
    {
        "name": "饶河县",
        "cascade": 3,
        "parent_id": 65,
        "ID": 996
    },
    {
        "name": "饶河镇",
        "cascade": 3,
        "parent_id": 65,
        "ID": 997
    },
    {
        "name": "鸡冠区",
        "cascade": 3,
        "parent_id": 66,
        "ID": 998
    },
    {
        "name": "恒山区",
        "cascade": 3,
        "parent_id": 66,
        "ID": 999
    },
    {
        "name": "滴道区",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1000
    },
    {
        "name": "梨树区",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1001
    },
    {
        "name": "城子河区",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1002
    },
    {
        "name": "麻山区",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1003
    },
    {
        "name": "虎林市",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1004
    },
    {
        "name": "密山市",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1005
    },
    {
        "name": "鸡东县",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1006
    },
    {
        "name": "鸡东镇",
        "cascade": 3,
        "parent_id": 66,
        "ID": 1007
    },
    {
        "name": "爱民区",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1008
    },
    {
        "name": "东安区",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1009
    },
    {
        "name": "阳明区",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1010
    },
    {
        "name": "西安区",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1011
    },
    {
        "name": "穆棱市",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1012
    },
    {
        "name": "绥芬河市",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1013
    },
    {
        "name": "海林市",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1014
    },
    {
        "name": "宁安市",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1015
    },
    {
        "name": "东宁县",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1016
    },
    {
        "name": "东宁镇",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1017
    },
    {
        "name": "林口县",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1018
    },
    {
        "name": "林口镇",
        "cascade": 3,
        "parent_id": 67,
        "ID": 1019
    },
    {
        "name": "北林区",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1020
    },
    {
        "name": "安达市",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1021
    },
    {
        "name": "肇东市",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1022
    },
    {
        "name": "海伦市",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1023
    },
    {
        "name": "望奎县",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1024
    },
    {
        "name": "望奎镇",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1025
    },
    {
        "name": "兰西县",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1026
    },
    {
        "name": "兰西镇",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1027
    },
    {
        "name": "青冈县",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1028
    },
    {
        "name": "青冈镇",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1029
    },
    {
        "name": "庆安县",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1030
    },
    {
        "name": "庆安镇",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1031
    },
    {
        "name": "明水县",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1032
    },
    {
        "name": "明水镇",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1033
    },
    {
        "name": "绥棱县",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1034
    },
    {
        "name": "绥棱镇",
        "cascade": 3,
        "parent_id": 68,
        "ID": 1035
    },
    {
        "name": "呼玛县",
        "cascade": 3,
        "parent_id": 69,
        "ID": 1036
    },
    {
        "name": "呼玛镇",
        "cascade": 3,
        "parent_id": 69,
        "ID": 1037
    },
    {
        "name": "塔河县",
        "cascade": 3,
        "parent_id": 69,
        "ID": 1038
    },
    {
        "name": "塔河镇",
        "cascade": 3,
        "parent_id": 69,
        "ID": 1039
    },
    {
        "name": "漠河县",
        "cascade": 3,
        "parent_id": 69,
        "ID": 1040
    },
    {
        "name": "西林吉镇",
        "cascade": 3,
        "parent_id": 69,
        "ID": 1041
    },
    {
        "name": "玄武区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1042
    },
    {
        "name": "白下区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1043
    },
    {
        "name": "秦淮区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1044
    },
    {
        "name": "建邺区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1045
    },
    {
        "name": "鼓楼区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1046
    },
    {
        "name": "下关区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1047
    },
    {
        "name": "浦口区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1048
    },
    {
        "name": "六合区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1049
    },
    {
        "name": "栖霞区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1050
    },
    {
        "name": "雨花台区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1051
    },
    {
        "name": "江宁区",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1052
    },
    {
        "name": "溧水县",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1053
    },
    {
        "name": "永阳镇",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1054
    },
    {
        "name": "高淳县",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1055
    },
    {
        "name": "淳溪镇",
        "cascade": 3,
        "parent_id": 70,
        "ID": 1056
    },
    {
        "name": "云龙区",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1057
    },
    {
        "name": "鼓楼区",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1058
    },
    {
        "name": "九里区",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1059
    },
    {
        "name": "贾汪区",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1060
    },
    {
        "name": "泉山区",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1061
    },
    {
        "name": "邳州市",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1062
    },
    {
        "name": "新沂市",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1063
    },
    {
        "name": "铜山县",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1064
    },
    {
        "name": "铜山镇",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1065
    },
    {
        "name": "睢宁县",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1066
    },
    {
        "name": "睢城镇",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1067
    },
    {
        "name": "沛县",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1068
    },
    {
        "name": "沛城镇",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1069
    },
    {
        "name": "丰县",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1070
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 71,
        "ID": 1071
    },
    {
        "name": "新浦区",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1072
    },
    {
        "name": "连云区",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1073
    },
    {
        "name": "海州区",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1074
    },
    {
        "name": "赣榆县",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1075
    },
    {
        "name": "青口镇",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1076
    },
    {
        "name": "灌云县",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1077
    },
    {
        "name": "伊山镇",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1078
    },
    {
        "name": "东海县",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1079
    },
    {
        "name": "牛山镇",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1080
    },
    {
        "name": "灌南县",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1081
    },
    {
        "name": "新安镇",
        "cascade": 3,
        "parent_id": 72,
        "ID": 1082
    },
    {
        "name": "宿城区",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1083
    },
    {
        "name": "宿豫区",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1084
    },
    {
        "name": "沭阳县",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1085
    },
    {
        "name": "沭城镇",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1086
    },
    {
        "name": "泗阳县",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1087
    },
    {
        "name": "众兴镇",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1088
    },
    {
        "name": "泗洪县",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1089
    },
    {
        "name": "青阳镇",
        "cascade": 3,
        "parent_id": 73,
        "ID": 1090
    },
    {
        "name": "清河区",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1091
    },
    {
        "name": "清浦区",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1092
    },
    {
        "name": "楚州区",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1093
    },
    {
        "name": "淮阴区",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1094
    },
    {
        "name": "金湖县",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1095
    },
    {
        "name": "黎城镇",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1096
    },
    {
        "name": "盱眙县",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1097
    },
    {
        "name": "盱城镇",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1098
    },
    {
        "name": "洪泽县",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1099
    },
    {
        "name": "高良涧镇",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1100
    },
    {
        "name": "涟水县",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1101
    },
    {
        "name": "涟城镇",
        "cascade": 3,
        "parent_id": 74,
        "ID": 1102
    },
    {
        "name": "亭湖区",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1103
    },
    {
        "name": "盐都区",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1104
    },
    {
        "name": "东台市",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1105
    },
    {
        "name": "大丰市",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1106
    },
    {
        "name": "射阳县",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1107
    },
    {
        "name": "合德镇",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1108
    },
    {
        "name": "阜宁县",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1109
    },
    {
        "name": "阜城镇",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1110
    },
    {
        "name": "滨海县",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1111
    },
    {
        "name": "东坎镇",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1112
    },
    {
        "name": "响水县",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1113
    },
    {
        "name": "响水镇",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1114
    },
    {
        "name": "建湖县",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1115
    },
    {
        "name": "近湖镇",
        "cascade": 3,
        "parent_id": 75,
        "ID": 1116
    },
    {
        "name": "维扬区",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1117
    },
    {
        "name": "广陵区",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1118
    },
    {
        "name": "邗江区",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1119
    },
    {
        "name": "仪征市",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1120
    },
    {
        "name": "江都市",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1121
    },
    {
        "name": "高邮市",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1122
    },
    {
        "name": "宝应县",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1123
    },
    {
        "name": "安宜镇",
        "cascade": 3,
        "parent_id": 76,
        "ID": 1124
    },
    {
        "name": "海陵区",
        "cascade": 3,
        "parent_id": 77,
        "ID": 1125
    },
    {
        "name": "高港区",
        "cascade": 3,
        "parent_id": 77,
        "ID": 1126
    },
    {
        "name": "靖江市",
        "cascade": 3,
        "parent_id": 77,
        "ID": 1127
    },
    {
        "name": "泰兴市",
        "cascade": 3,
        "parent_id": 77,
        "ID": 1128
    },
    {
        "name": "姜堰市",
        "cascade": 3,
        "parent_id": 77,
        "ID": 1129
    },
    {
        "name": "兴化市",
        "cascade": 3,
        "parent_id": 77,
        "ID": 1130
    },
    {
        "name": "崇川区",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1131
    },
    {
        "name": "港闸区",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1132
    },
    {
        "name": "海门市",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1133
    },
    {
        "name": "启东市",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1134
    },
    {
        "name": "通州市",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1135
    },
    {
        "name": "如皋市",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1136
    },
    {
        "name": "如东县",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1137
    },
    {
        "name": "掘港镇",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1138
    },
    {
        "name": "海安县",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1139
    },
    {
        "name": "海安镇",
        "cascade": 3,
        "parent_id": 78,
        "ID": 1140
    },
    {
        "name": "京口区",
        "cascade": 3,
        "parent_id": 79,
        "ID": 1141
    },
    {
        "name": "润州区",
        "cascade": 3,
        "parent_id": 79,
        "ID": 1142
    },
    {
        "name": "丹徒区",
        "cascade": 3,
        "parent_id": 79,
        "ID": 1143
    },
    {
        "name": "扬中市",
        "cascade": 3,
        "parent_id": 79,
        "ID": 1144
    },
    {
        "name": "丹阳市",
        "cascade": 3,
        "parent_id": 79,
        "ID": 1145
    },
    {
        "name": "句容市",
        "cascade": 3,
        "parent_id": 79,
        "ID": 1146
    },
    {
        "name": "钟楼区",
        "cascade": 3,
        "parent_id": 80,
        "ID": 1147
    },
    {
        "name": "天宁区",
        "cascade": 3,
        "parent_id": 80,
        "ID": 1148
    },
    {
        "name": "戚墅堰区",
        "cascade": 3,
        "parent_id": 80,
        "ID": 1149
    },
    {
        "name": "新北区",
        "cascade": 3,
        "parent_id": 80,
        "ID": 1150
    },
    {
        "name": "武进区",
        "cascade": 3,
        "parent_id": 80,
        "ID": 1151
    },
    {
        "name": "金坛市",
        "cascade": 3,
        "parent_id": 80,
        "ID": 1152
    },
    {
        "name": "溧阳市",
        "cascade": 3,
        "parent_id": 80,
        "ID": 1153
    },
    {
        "name": "崇安区",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1154
    },
    {
        "name": "南长区",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1155
    },
    {
        "name": "北塘区",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1156
    },
    {
        "name": "滨湖区",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1157
    },
    {
        "name": "惠山区",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1158
    },
    {
        "name": "锡山区",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1159
    },
    {
        "name": "江阴市",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1160
    },
    {
        "name": "宜兴市",
        "cascade": 3,
        "parent_id": 81,
        "ID": 1161
    },
    {
        "name": "金阊区",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1162
    },
    {
        "name": "沧浪区",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1163
    },
    {
        "name": "平江区",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1164
    },
    {
        "name": "虎丘区",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1165
    },
    {
        "name": "吴中区",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1166
    },
    {
        "name": "相城区",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1167
    },
    {
        "name": "吴江市",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1168
    },
    {
        "name": "昆山市",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1169
    },
    {
        "name": "太仓市",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1170
    },
    {
        "name": "常熟市",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1171
    },
    {
        "name": "张家港市",
        "cascade": 3,
        "parent_id": 82,
        "ID": 1172
    },
    {
        "name": "拱墅区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1173
    },
    {
        "name": "上城区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1174
    },
    {
        "name": "下城区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1175
    },
    {
        "name": "江干区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1176
    },
    {
        "name": "西湖区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1177
    },
    {
        "name": "滨江区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1178
    },
    {
        "name": "余杭区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1179
    },
    {
        "name": "萧山区",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1180
    },
    {
        "name": "临安市",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1181
    },
    {
        "name": "富阳市",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1182
    },
    {
        "name": "建德市",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1183
    },
    {
        "name": "桐庐县",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1184
    },
    {
        "name": "淳安县",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1185
    },
    {
        "name": "千岛湖镇",
        "cascade": 3,
        "parent_id": 83,
        "ID": 1186
    },
    {
        "name": "吴兴区",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1187
    },
    {
        "name": "南浔区",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1188
    },
    {
        "name": "长兴县",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1189
    },
    {
        "name": "雉城镇",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1190
    },
    {
        "name": "德清县",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1191
    },
    {
        "name": "武康镇",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1192
    },
    {
        "name": "安吉县",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1193
    },
    {
        "name": "递铺镇",
        "cascade": 3,
        "parent_id": 84,
        "ID": 1194
    },
    {
        "name": "南湖区",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1195
    },
    {
        "name": "秀洲区",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1196
    },
    {
        "name": "平湖市",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1197
    },
    {
        "name": "海宁市",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1198
    },
    {
        "name": "桐乡市",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1199
    },
    {
        "name": "嘉善县",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1200
    },
    {
        "name": "魏塘镇",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1201
    },
    {
        "name": "海盐县",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1202
    },
    {
        "name": "武原镇",
        "cascade": 3,
        "parent_id": 85,
        "ID": 1203
    },
    {
        "name": "定海区",
        "cascade": 3,
        "parent_id": 86,
        "ID": 1204
    },
    {
        "name": "普陀区",
        "cascade": 3,
        "parent_id": 86,
        "ID": 1205
    },
    {
        "name": "岱山县",
        "cascade": 3,
        "parent_id": 86,
        "ID": 1206
    },
    {
        "name": "高亭镇",
        "cascade": 3,
        "parent_id": 86,
        "ID": 1207
    },
    {
        "name": "嵊泗县",
        "cascade": 3,
        "parent_id": 86,
        "ID": 1208
    },
    {
        "name": "菜园镇",
        "cascade": 3,
        "parent_id": 86,
        "ID": 1209
    },
    {
        "name": "海曙区",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1210
    },
    {
        "name": "江东区",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1211
    },
    {
        "name": "江北区",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1212
    },
    {
        "name": "北仑区",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1213
    },
    {
        "name": "镇海区",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1214
    },
    {
        "name": "鄞州区",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1215
    },
    {
        "name": "慈溪市",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1216
    },
    {
        "name": "余姚市",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1217
    },
    {
        "name": "奉化市",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1218
    },
    {
        "name": "宁海县",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1219
    },
    {
        "name": "象山县",
        "cascade": 3,
        "parent_id": 87,
        "ID": 1220
    },
    {
        "name": "越城区",
        "cascade": 3,
        "parent_id": 88,
        "ID": 1221
    },
    {
        "name": "诸暨市",
        "cascade": 3,
        "parent_id": 88,
        "ID": 1222
    },
    {
        "name": "上虞市",
        "cascade": 3,
        "parent_id": 88,
        "ID": 1223
    },
    {
        "name": "嵊州市",
        "cascade": 3,
        "parent_id": 88,
        "ID": 1224
    },
    {
        "name": "绍兴县",
        "cascade": 3,
        "parent_id": 88,
        "ID": 1225
    },
    {
        "name": "新昌县",
        "cascade": 3,
        "parent_id": 88,
        "ID": 1226
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 88,
        "ID": 1227
    },
    {
        "name": "柯城区",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1228
    },
    {
        "name": "衢江区",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1229
    },
    {
        "name": "江山市",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1230
    },
    {
        "name": "常山县",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1231
    },
    {
        "name": "天马镇",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1232
    },
    {
        "name": "开化县",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1233
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1234
    },
    {
        "name": "龙游县",
        "cascade": 3,
        "parent_id": 89,
        "ID": 1235
    },
    {
        "name": "婺城区",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1236
    },
    {
        "name": "金东区",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1237
    },
    {
        "name": "兰溪市",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1238
    },
    {
        "name": "永康市",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1239
    },
    {
        "name": "义乌市",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1240
    },
    {
        "name": "东阳市",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1241
    },
    {
        "name": "武义县",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1242
    },
    {
        "name": "浦江县",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1243
    },
    {
        "name": "磐安县",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1244
    },
    {
        "name": "安文镇",
        "cascade": 3,
        "parent_id": 90,
        "ID": 1245
    },
    {
        "name": "椒江区",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1246
    },
    {
        "name": "黄岩区",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1247
    },
    {
        "name": "路桥区",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1248
    },
    {
        "name": "临海市",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1249
    },
    {
        "name": "温岭市",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1250
    },
    {
        "name": "三门县",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1251
    },
    {
        "name": "海游镇",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1252
    },
    {
        "name": "天台县",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1253
    },
    {
        "name": "仙居县",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1254
    },
    {
        "name": "玉环县",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1255
    },
    {
        "name": "珠港镇",
        "cascade": 3,
        "parent_id": 91,
        "ID": 1256
    },
    {
        "name": "鹿城区",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1257
    },
    {
        "name": "龙湾区",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1258
    },
    {
        "name": "瓯海区",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1259
    },
    {
        "name": "瑞安市",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1260
    },
    {
        "name": "乐清市",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1261
    },
    {
        "name": "永嘉县",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1262
    },
    {
        "name": "上塘镇",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1263
    },
    {
        "name": "文成县",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1264
    },
    {
        "name": "大峃镇",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1265
    },
    {
        "name": "平阳县",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1266
    },
    {
        "name": "昆阳镇",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1267
    },
    {
        "name": "泰顺县",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1268
    },
    {
        "name": "罗阳镇",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1269
    },
    {
        "name": "洞头县",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1270
    },
    {
        "name": "北岙镇",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1271
    },
    {
        "name": "苍南县",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1272
    },
    {
        "name": "灵溪镇",
        "cascade": 3,
        "parent_id": 92,
        "ID": 1273
    },
    {
        "name": "莲都区",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1274
    },
    {
        "name": "龙泉市",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1275
    },
    {
        "name": "缙云县",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1276
    },
    {
        "name": "五云镇",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1277
    },
    {
        "name": "青田县",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1278
    },
    {
        "name": "鹤城镇",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1279
    },
    {
        "name": "云和县",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1280
    },
    {
        "name": "云和镇",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1281
    },
    {
        "name": "遂昌县",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1282
    },
    {
        "name": "妙高镇",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1283
    },
    {
        "name": "松阳县",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1284
    },
    {
        "name": "西屏镇",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1285
    },
    {
        "name": "庆元县",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1286
    },
    {
        "name": "松源镇",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1287
    },
    {
        "name": "景宁畲族自治县",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1288
    },
    {
        "name": "鹤溪镇",
        "cascade": 3,
        "parent_id": 93,
        "ID": 1289
    },
    {
        "name": "庐阳区",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1290
    },
    {
        "name": "瑶海区",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1291
    },
    {
        "name": "蜀山区",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1292
    },
    {
        "name": "包河区",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1293
    },
    {
        "name": "长丰县",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1294
    },
    {
        "name": "水湖镇",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1295
    },
    {
        "name": "肥东县",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1296
    },
    {
        "name": "店埠镇",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1297
    },
    {
        "name": "肥西县",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1298
    },
    {
        "name": "上派镇",
        "cascade": 3,
        "parent_id": 94,
        "ID": 1299
    },
    {
        "name": "埇桥区",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1300
    },
    {
        "name": "砀山县",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1301
    },
    {
        "name": "砀城镇",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1302
    },
    {
        "name": "萧县",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1303
    },
    {
        "name": "龙城镇",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1304
    },
    {
        "name": "灵璧县",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1305
    },
    {
        "name": "灵城镇",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1306
    },
    {
        "name": "泗县",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1307
    },
    {
        "name": "泗城镇",
        "cascade": 3,
        "parent_id": 95,
        "ID": 1308
    },
    {
        "name": "相山区",
        "cascade": 3,
        "parent_id": 96,
        "ID": 1309
    },
    {
        "name": "杜集区",
        "cascade": 3,
        "parent_id": 96,
        "ID": 1310
    },
    {
        "name": "烈山区",
        "cascade": 3,
        "parent_id": 96,
        "ID": 1311
    },
    {
        "name": "濉溪县",
        "cascade": 3,
        "parent_id": 96,
        "ID": 1312
    },
    {
        "name": "濉溪镇",
        "cascade": 3,
        "parent_id": 96,
        "ID": 1313
    },
    {
        "name": "谯城区",
        "cascade": 3,
        "parent_id": 97,
        "ID": 1314
    },
    {
        "name": "涡阳县",
        "cascade": 3,
        "parent_id": 97,
        "ID": 1315
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 97,
        "ID": 1316
    },
    {
        "name": "蒙城县",
        "cascade": 3,
        "parent_id": 97,
        "ID": 1317
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 97,
        "ID": 1318
    },
    {
        "name": "利辛县",
        "cascade": 3,
        "parent_id": 97,
        "ID": 1319
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 97,
        "ID": 1320
    },
    {
        "name": "颍州区",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1321
    },
    {
        "name": "颍东区",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1322
    },
    {
        "name": "颍泉区",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1323
    },
    {
        "name": "界首市",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1324
    },
    {
        "name": "临泉县",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1325
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1326
    },
    {
        "name": "太和县",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1327
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1328
    },
    {
        "name": "阜南县",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1329
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1330
    },
    {
        "name": "颍上县",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1331
    },
    {
        "name": "慎城镇",
        "cascade": 3,
        "parent_id": 98,
        "ID": 1332
    },
    {
        "name": "蚌山区",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1333
    },
    {
        "name": "龙子湖区",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1334
    },
    {
        "name": "禹会区",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1335
    },
    {
        "name": "淮上区",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1336
    },
    {
        "name": "怀远县",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1337
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1338
    },
    {
        "name": "五河县",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1339
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1340
    },
    {
        "name": "固镇县",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1341
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 99,
        "ID": 1342
    },
    {
        "name": "田家庵区",
        "cascade": 3,
        "parent_id": 100,
        "ID": 1343
    },
    {
        "name": "大通区",
        "cascade": 3,
        "parent_id": 100,
        "ID": 1344
    },
    {
        "name": "谢家集区",
        "cascade": 3,
        "parent_id": 100,
        "ID": 1345
    },
    {
        "name": "八公山区",
        "cascade": 3,
        "parent_id": 100,
        "ID": 1346
    },
    {
        "name": "潘集区",
        "cascade": 3,
        "parent_id": 100,
        "ID": 1347
    },
    {
        "name": "凤台县",
        "cascade": 3,
        "parent_id": 100,
        "ID": 1348
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 100,
        "ID": 1349
    },
    {
        "name": "琅区",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1350
    },
    {
        "name": "南谯区",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1351
    },
    {
        "name": "明光市",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1352
    },
    {
        "name": "天长市",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1353
    },
    {
        "name": "来安县",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1354
    },
    {
        "name": "新安镇",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1355
    },
    {
        "name": "全椒县",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1356
    },
    {
        "name": "襄河镇",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1357
    },
    {
        "name": "定远县",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1358
    },
    {
        "name": "定城镇",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1359
    },
    {
        "name": "凤阳县",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1360
    },
    {
        "name": "府城镇",
        "cascade": 3,
        "parent_id": 101,
        "ID": 1361
    },
    {
        "name": "雨山区",
        "cascade": 3,
        "parent_id": 102,
        "ID": 1362
    },
    {
        "name": "花山区",
        "cascade": 3,
        "parent_id": 102,
        "ID": 1363
    },
    {
        "name": "金家庄区",
        "cascade": 3,
        "parent_id": 102,
        "ID": 1364
    },
    {
        "name": "当涂县",
        "cascade": 3,
        "parent_id": 102,
        "ID": 1365
    },
    {
        "name": "姑孰镇",
        "cascade": 3,
        "parent_id": 102,
        "ID": 1366
    },
    {
        "name": "镜湖区",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1367
    },
    {
        "name": "弋江区",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1368
    },
    {
        "name": "三山区",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1369
    },
    {
        "name": "鸠江区",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1370
    },
    {
        "name": "芜湖县",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1371
    },
    {
        "name": "湾镇",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1372
    },
    {
        "name": "繁昌县",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1373
    },
    {
        "name": "繁阳镇",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1374
    },
    {
        "name": "南陵县",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1375
    },
    {
        "name": "籍山镇",
        "cascade": 3,
        "parent_id": 103,
        "ID": 1376
    },
    {
        "name": "铜官山区",
        "cascade": 3,
        "parent_id": 104,
        "ID": 1377
    },
    {
        "name": "狮子山区",
        "cascade": 3,
        "parent_id": 104,
        "ID": 1378
    },
    {
        "name": "郊区",
        "cascade": 3,
        "parent_id": 104,
        "ID": 1379
    },
    {
        "name": "铜陵县",
        "cascade": 3,
        "parent_id": 104,
        "ID": 1380
    },
    {
        "name": "五松镇",
        "cascade": 3,
        "parent_id": 104,
        "ID": 1381
    },
    {
        "name": "迎江区",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1382
    },
    {
        "name": "大观区",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1383
    },
    {
        "name": "宜秀区",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1384
    },
    {
        "name": "桐城市",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1385
    },
    {
        "name": "怀宁县",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1386
    },
    {
        "name": "高河镇",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1387
    },
    {
        "name": "枞阳县",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1388
    },
    {
        "name": "枞阳镇",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1389
    },
    {
        "name": "潜山县",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1390
    },
    {
        "name": "梅城镇",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1391
    },
    {
        "name": "太湖县",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1392
    },
    {
        "name": "晋熙镇",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1393
    },
    {
        "name": "宿松县",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1394
    },
    {
        "name": "孚玉镇",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1395
    },
    {
        "name": "望江县",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1396
    },
    {
        "name": "雷阳镇",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1397
    },
    {
        "name": "岳西县",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1398
    },
    {
        "name": "天堂镇",
        "cascade": 3,
        "parent_id": 105,
        "ID": 1399
    },
    {
        "name": "屯溪区",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1400
    },
    {
        "name": "黄山区",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1401
    },
    {
        "name": "徽州区",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1402
    },
    {
        "name": "歙县",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1403
    },
    {
        "name": "徽城镇",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1404
    },
    {
        "name": "休宁县",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1405
    },
    {
        "name": "海阳镇",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1406
    },
    {
        "name": "黟县",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1407
    },
    {
        "name": "碧阳镇",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1408
    },
    {
        "name": "祁门县",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1409
    },
    {
        "name": "祁山镇",
        "cascade": 3,
        "parent_id": 106,
        "ID": 1410
    },
    {
        "name": "金安区",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1411
    },
    {
        "name": "裕安区",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1412
    },
    {
        "name": "寿县",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1413
    },
    {
        "name": "寿春镇",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1414
    },
    {
        "name": "霍邱县",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1415
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1416
    },
    {
        "name": "舒城县",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1417
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1418
    },
    {
        "name": "金寨县",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1419
    },
    {
        "name": "梅山镇",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1420
    },
    {
        "name": "霍山县",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1421
    },
    {
        "name": "衡山镇",
        "cascade": 3,
        "parent_id": 107,
        "ID": 1422
    },
    {
        "name": "居巢区",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1423
    },
    {
        "name": "庐江县",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1424
    },
    {
        "name": "庐城镇",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1425
    },
    {
        "name": "无为县",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1426
    },
    {
        "name": "无城镇",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1427
    },
    {
        "name": "含山县",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1428
    },
    {
        "name": "环峰镇",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1429
    },
    {
        "name": "和县",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1430
    },
    {
        "name": "历阳镇",
        "cascade": 3,
        "parent_id": 108,
        "ID": 1431
    },
    {
        "name": "贵池区",
        "cascade": 3,
        "parent_id": 109,
        "ID": 1432
    },
    {
        "name": "东至县",
        "cascade": 3,
        "parent_id": 109,
        "ID": 1433
    },
    {
        "name": "尧渡镇",
        "cascade": 3,
        "parent_id": 109,
        "ID": 1434
    },
    {
        "name": "石台县",
        "cascade": 3,
        "parent_id": 109,
        "ID": 1435
    },
    {
        "name": "七里镇",
        "cascade": 3,
        "parent_id": 109,
        "ID": 1436
    },
    {
        "name": "青阳县",
        "cascade": 3,
        "parent_id": 109,
        "ID": 1437
    },
    {
        "name": "蓉城镇",
        "cascade": 3,
        "parent_id": 109,
        "ID": 1438
    },
    {
        "name": "宣州区",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1439
    },
    {
        "name": "宁国市",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1440
    },
    {
        "name": "郎溪县",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1441
    },
    {
        "name": "建平镇",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1442
    },
    {
        "name": "广德县",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1443
    },
    {
        "name": "桃州镇",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1444
    },
    {
        "name": "泾县",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1445
    },
    {
        "name": "泾川镇",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1446
    },
    {
        "name": "旌德县",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1447
    },
    {
        "name": "旌阳镇",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1448
    },
    {
        "name": "绩溪县",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1449
    },
    {
        "name": "华阳镇",
        "cascade": 3,
        "parent_id": 110,
        "ID": 1450
    },
    {
        "name": "鼓楼区",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1451
    },
    {
        "name": "台江区",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1452
    },
    {
        "name": "仓山区",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1453
    },
    {
        "name": "马尾区",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1454
    },
    {
        "name": "晋安区",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1455
    },
    {
        "name": "福清市",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1456
    },
    {
        "name": "长乐市",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1457
    },
    {
        "name": "闽侯县",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1458
    },
    {
        "name": "连江县",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1459
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1460
    },
    {
        "name": "罗源县",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1461
    },
    {
        "name": "凤山镇",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1462
    },
    {
        "name": "闽清县",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1463
    },
    {
        "name": "梅城镇",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1464
    },
    {
        "name": "永泰县",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1465
    },
    {
        "name": "樟城镇",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1466
    },
    {
        "name": "平潭县",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1467
    },
    {
        "name": "潭城镇",
        "cascade": 3,
        "parent_id": 111,
        "ID": 1468
    },
    {
        "name": "延平区",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1469
    },
    {
        "name": "邵武市",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1470
    },
    {
        "name": "武夷山市",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1471
    },
    {
        "name": "建瓯市",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1472
    },
    {
        "name": "建阳市",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1473
    },
    {
        "name": "顺昌县",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1474
    },
    {
        "name": "浦城县",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1475
    },
    {
        "name": "光泽县",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1476
    },
    {
        "name": "杭川镇",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1477
    },
    {
        "name": "松溪县",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1478
    },
    {
        "name": "松源镇",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1479
    },
    {
        "name": "政和县",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1480
    },
    {
        "name": "熊山镇",
        "cascade": 3,
        "parent_id": 112,
        "ID": 1481
    },
    {
        "name": "城厢区",
        "cascade": 3,
        "parent_id": 113,
        "ID": 1482
    },
    {
        "name": "涵江区",
        "cascade": 3,
        "parent_id": 113,
        "ID": 1483
    },
    {
        "name": "荔城区",
        "cascade": 3,
        "parent_id": 113,
        "ID": 1484
    },
    {
        "name": "秀屿区",
        "cascade": 3,
        "parent_id": 113,
        "ID": 1485
    },
    {
        "name": "仙游县",
        "cascade": 3,
        "parent_id": 113,
        "ID": 1486
    },
    {
        "name": "梅列区",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1487
    },
    {
        "name": "三元区",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1488
    },
    {
        "name": "永安市",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1489
    },
    {
        "name": "明溪县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1490
    },
    {
        "name": "雪峰镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1491
    },
    {
        "name": "清流县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1492
    },
    {
        "name": "龙津镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1493
    },
    {
        "name": "宁化县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1494
    },
    {
        "name": "翠江镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1495
    },
    {
        "name": "大田县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1496
    },
    {
        "name": "均溪镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1497
    },
    {
        "name": "尤溪县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1498
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1499
    },
    {
        "name": "沙县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1500
    },
    {
        "name": "将乐县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1501
    },
    {
        "name": "古镛镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1502
    },
    {
        "name": "泰宁县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1503
    },
    {
        "name": "杉城镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1504
    },
    {
        "name": "建宁县",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1505
    },
    {
        "name": "濉城镇",
        "cascade": 3,
        "parent_id": 114,
        "ID": 1506
    },
    {
        "name": "鲤城区",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1507
    },
    {
        "name": "丰泽区",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1508
    },
    {
        "name": "洛江区",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1509
    },
    {
        "name": "泉港区",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1510
    },
    {
        "name": "石狮市",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1511
    },
    {
        "name": "晋江市",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1512
    },
    {
        "name": "南安市",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1513
    },
    {
        "name": "惠安县",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1514
    },
    {
        "name": "螺城镇",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1515
    },
    {
        "name": "安溪县",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1516
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1517
    },
    {
        "name": "永春县",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1518
    },
    {
        "name": "桃城镇",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1519
    },
    {
        "name": "德化县",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1520
    },
    {
        "name": "浔中镇",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1521
    },
    {
        "name": "金门县",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1522
    },
    {
        "name": "☆",
        "cascade": 3,
        "parent_id": 115,
        "ID": 1523
    },
    {
        "name": "思明区",
        "cascade": 3,
        "parent_id": 116,
        "ID": 1524
    },
    {
        "name": "海沧区",
        "cascade": 3,
        "parent_id": 116,
        "ID": 1525
    },
    {
        "name": "湖里区",
        "cascade": 3,
        "parent_id": 116,
        "ID": 1526
    },
    {
        "name": "集美区",
        "cascade": 3,
        "parent_id": 116,
        "ID": 1527
    },
    {
        "name": "同安区",
        "cascade": 3,
        "parent_id": 116,
        "ID": 1528
    },
    {
        "name": "翔安区",
        "cascade": 3,
        "parent_id": 116,
        "ID": 1529
    },
    {
        "name": "芗城区",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1530
    },
    {
        "name": "龙文区",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1531
    },
    {
        "name": "龙海市",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1532
    },
    {
        "name": "云霄县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1533
    },
    {
        "name": "云陵镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1534
    },
    {
        "name": "漳浦县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1535
    },
    {
        "name": "绥安镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1536
    },
    {
        "name": "诏安县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1537
    },
    {
        "name": "南诏镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1538
    },
    {
        "name": "长泰县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1539
    },
    {
        "name": "武安镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1540
    },
    {
        "name": "东山县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1541
    },
    {
        "name": "西埔镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1542
    },
    {
        "name": "南靖县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1543
    },
    {
        "name": "山城镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1544
    },
    {
        "name": "平和县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1545
    },
    {
        "name": "小溪镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1546
    },
    {
        "name": "华安县",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1547
    },
    {
        "name": "华丰镇",
        "cascade": 3,
        "parent_id": 117,
        "ID": 1548
    },
    {
        "name": "新罗区",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1549
    },
    {
        "name": "漳平市",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1550
    },
    {
        "name": "长汀县",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1551
    },
    {
        "name": "汀州镇",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1552
    },
    {
        "name": "永定县",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1553
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1554
    },
    {
        "name": "上杭县",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1555
    },
    {
        "name": "临江镇",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1556
    },
    {
        "name": "武平县",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1557
    },
    {
        "name": "平川镇",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1558
    },
    {
        "name": "连城县",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1559
    },
    {
        "name": "莲峰镇",
        "cascade": 3,
        "parent_id": 118,
        "ID": 1560
    },
    {
        "name": "蕉城区",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1561
    },
    {
        "name": "福安市",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1562
    },
    {
        "name": "福鼎市",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1563
    },
    {
        "name": "寿宁县",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1564
    },
    {
        "name": "鳌阳镇",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1565
    },
    {
        "name": "霞浦县",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1566
    },
    {
        "name": "柘荣县",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1567
    },
    {
        "name": "双城镇",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1568
    },
    {
        "name": "屏南县",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1569
    },
    {
        "name": "古峰镇",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1570
    },
    {
        "name": "古田县",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1571
    },
    {
        "name": "周宁县",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1572
    },
    {
        "name": "狮城镇",
        "cascade": 3,
        "parent_id": 119,
        "ID": 1573
    },
    {
        "name": "东湖区",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1574
    },
    {
        "name": "西湖区",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1575
    },
    {
        "name": "青云谱区",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1576
    },
    {
        "name": "湾里区",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1577
    },
    {
        "name": "青山湖区",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1578
    },
    {
        "name": "南昌县",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1579
    },
    {
        "name": "莲塘镇",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1580
    },
    {
        "name": "新建县",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1581
    },
    {
        "name": "长堎镇",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1582
    },
    {
        "name": "安义县",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1583
    },
    {
        "name": "龙津镇",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1584
    },
    {
        "name": "进贤县",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1585
    },
    {
        "name": "民和镇",
        "cascade": 3,
        "parent_id": 120,
        "ID": 1586
    },
    {
        "name": "浔阳区",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1587
    },
    {
        "name": "庐山区",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1588
    },
    {
        "name": "瑞昌市",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1589
    },
    {
        "name": "九江县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1590
    },
    {
        "name": "沙河街镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1591
    },
    {
        "name": "武宁县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1592
    },
    {
        "name": "新宁镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1593
    },
    {
        "name": "修水县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1594
    },
    {
        "name": "义宁镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1595
    },
    {
        "name": "永修县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1596
    },
    {
        "name": "涂埠镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1597
    },
    {
        "name": "德安县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1598
    },
    {
        "name": "蒲亭镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1599
    },
    {
        "name": "星子县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1600
    },
    {
        "name": "南康镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1601
    },
    {
        "name": "都昌县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1602
    },
    {
        "name": "都昌镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1603
    },
    {
        "name": "湖口县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1604
    },
    {
        "name": "双钟镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1605
    },
    {
        "name": "彭泽县",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1606
    },
    {
        "name": "龙城镇",
        "cascade": 3,
        "parent_id": 121,
        "ID": 1607
    },
    {
        "name": "珠山区",
        "cascade": 3,
        "parent_id": 122,
        "ID": 1608
    },
    {
        "name": "昌江区",
        "cascade": 3,
        "parent_id": 122,
        "ID": 1609
    },
    {
        "name": "乐平市",
        "cascade": 3,
        "parent_id": 122,
        "ID": 1610
    },
    {
        "name": "浮梁县",
        "cascade": 3,
        "parent_id": 122,
        "ID": 1611
    },
    {
        "name": "浮梁镇",
        "cascade": 3,
        "parent_id": 122,
        "ID": 1612
    },
    {
        "name": "月湖区",
        "cascade": 3,
        "parent_id": 123,
        "ID": 1613
    },
    {
        "name": "贵溪市",
        "cascade": 3,
        "parent_id": 123,
        "ID": 1614
    },
    {
        "name": "余江县",
        "cascade": 3,
        "parent_id": 123,
        "ID": 1615
    },
    {
        "name": "邓埠镇",
        "cascade": 3,
        "parent_id": 123,
        "ID": 1616
    },
    {
        "name": "渝水区",
        "cascade": 3,
        "parent_id": 124,
        "ID": 1617
    },
    {
        "name": "分宜县",
        "cascade": 3,
        "parent_id": 124,
        "ID": 1618
    },
    {
        "name": "分宜镇",
        "cascade": 3,
        "parent_id": 124,
        "ID": 1619
    },
    {
        "name": "安源区",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1620
    },
    {
        "name": "湘东区",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1621
    },
    {
        "name": "莲花县",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1622
    },
    {
        "name": "琴亭镇",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1623
    },
    {
        "name": "上栗县",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1624
    },
    {
        "name": "上栗镇",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1625
    },
    {
        "name": "芦溪县",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1626
    },
    {
        "name": "芦溪镇",
        "cascade": 3,
        "parent_id": 125,
        "ID": 1627
    },
    {
        "name": "章贡区",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1628
    },
    {
        "name": "瑞金市",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1629
    },
    {
        "name": "南康市",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1630
    },
    {
        "name": "赣县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1631
    },
    {
        "name": "梅林镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1632
    },
    {
        "name": "信丰县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1633
    },
    {
        "name": "嘉定镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1634
    },
    {
        "name": "大余县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1635
    },
    {
        "name": "南安镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1636
    },
    {
        "name": "上犹县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1637
    },
    {
        "name": "东山镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1638
    },
    {
        "name": "崇义县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1639
    },
    {
        "name": "横水镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1640
    },
    {
        "name": "安远县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1641
    },
    {
        "name": "欣山镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1642
    },
    {
        "name": "龙南县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1643
    },
    {
        "name": "龙南镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1644
    },
    {
        "name": "定南县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1645
    },
    {
        "name": "历市镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1646
    },
    {
        "name": "全南县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1647
    },
    {
        "name": "城厢镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1648
    },
    {
        "name": "宁都县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1649
    },
    {
        "name": "梅江镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1650
    },
    {
        "name": "于都县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1651
    },
    {
        "name": "贡江镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1652
    },
    {
        "name": "兴国县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1653
    },
    {
        "name": "潋江镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1654
    },
    {
        "name": "会昌县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1655
    },
    {
        "name": "文武坝镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1656
    },
    {
        "name": "寻乌县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1657
    },
    {
        "name": "长宁镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1658
    },
    {
        "name": "石城县",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1659
    },
    {
        "name": "琴江镇",
        "cascade": 3,
        "parent_id": 126,
        "ID": 1660
    },
    {
        "name": "信州区",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1661
    },
    {
        "name": "德兴市",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1662
    },
    {
        "name": "上饶县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1663
    },
    {
        "name": "旭日镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1664
    },
    {
        "name": "广丰县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1665
    },
    {
        "name": "永丰镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1666
    },
    {
        "name": "玉山县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1667
    },
    {
        "name": "冰溪镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1668
    },
    {
        "name": "铅山县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1669
    },
    {
        "name": "河口镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1670
    },
    {
        "name": "横峰县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1671
    },
    {
        "name": "岑阳镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1672
    },
    {
        "name": "弋阳县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1673
    },
    {
        "name": "弋江镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1674
    },
    {
        "name": "余干县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1675
    },
    {
        "name": "玉亭镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1676
    },
    {
        "name": "鄱阳县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1677
    },
    {
        "name": "鄱阳镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1678
    },
    {
        "name": "万年县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1679
    },
    {
        "name": "陈营镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1680
    },
    {
        "name": "婺源县",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1681
    },
    {
        "name": "紫阳镇",
        "cascade": 3,
        "parent_id": 127,
        "ID": 1682
    },
    {
        "name": "临川区",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1683
    },
    {
        "name": "南城县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1684
    },
    {
        "name": "建昌镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1685
    },
    {
        "name": "黎川县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1686
    },
    {
        "name": "日峰镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1687
    },
    {
        "name": "南丰县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1688
    },
    {
        "name": "琴城镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1689
    },
    {
        "name": "崇仁县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1690
    },
    {
        "name": "巴山镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1691
    },
    {
        "name": "乐安县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1692
    },
    {
        "name": "鳌溪镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1693
    },
    {
        "name": "宜黄县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1694
    },
    {
        "name": "凤冈镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1695
    },
    {
        "name": "金溪县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1696
    },
    {
        "name": "秀谷镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1697
    },
    {
        "name": "资溪县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1698
    },
    {
        "name": "鹤城镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1699
    },
    {
        "name": "东乡县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1700
    },
    {
        "name": "孝岗镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1701
    },
    {
        "name": "广昌县",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1702
    },
    {
        "name": "旴江镇",
        "cascade": 3,
        "parent_id": 128,
        "ID": 1703
    },
    {
        "name": "袁州区",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1704
    },
    {
        "name": "丰城市",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1705
    },
    {
        "name": "樟树市",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1706
    },
    {
        "name": "高安市",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1707
    },
    {
        "name": "奉新县",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1708
    },
    {
        "name": "冯川镇",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1709
    },
    {
        "name": "万载县",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1710
    },
    {
        "name": "上高县",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1711
    },
    {
        "name": "宜丰县",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1712
    },
    {
        "name": "新昌镇",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1713
    },
    {
        "name": "靖安县",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1714
    },
    {
        "name": "双溪镇",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1715
    },
    {
        "name": "铜鼓县",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1716
    },
    {
        "name": "永宁镇",
        "cascade": 3,
        "parent_id": 129,
        "ID": 1717
    },
    {
        "name": "吉州区",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1718
    },
    {
        "name": "青原区",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1719
    },
    {
        "name": "井冈山市",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1720
    },
    {
        "name": "厦坪镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1721
    },
    {
        "name": "吉安县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1722
    },
    {
        "name": "敦厚镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1723
    },
    {
        "name": "吉水县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1724
    },
    {
        "name": "文峰镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1725
    },
    {
        "name": "峡江县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1726
    },
    {
        "name": "水边镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1727
    },
    {
        "name": "新干县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1728
    },
    {
        "name": "金川镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1729
    },
    {
        "name": "永丰县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1730
    },
    {
        "name": "恩江镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1731
    },
    {
        "name": "泰和县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1732
    },
    {
        "name": "澄江镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1733
    },
    {
        "name": "遂川县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1734
    },
    {
        "name": "泉江镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1735
    },
    {
        "name": "万安县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1736
    },
    {
        "name": "芙蓉镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1737
    },
    {
        "name": "安福县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1738
    },
    {
        "name": "平都镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1739
    },
    {
        "name": "永新县",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1740
    },
    {
        "name": "禾川镇",
        "cascade": 3,
        "parent_id": 130,
        "ID": 1741
    },
    {
        "name": "市中区",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1742
    },
    {
        "name": "历下区",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1743
    },
    {
        "name": "槐荫区",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1744
    },
    {
        "name": "天桥区",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1745
    },
    {
        "name": "历城区",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1746
    },
    {
        "name": "长清区",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1747
    },
    {
        "name": "章丘市",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1748
    },
    {
        "name": "平阴县",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1749
    },
    {
        "name": "平阴镇",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1750
    },
    {
        "name": "济阳县",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1751
    },
    {
        "name": "济阳镇",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1752
    },
    {
        "name": "商河县",
        "cascade": 3,
        "parent_id": 131,
        "ID": 1753
    },
    {
        "name": "市南区",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1754
    },
    {
        "name": "市北区",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1755
    },
    {
        "name": "四方区",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1756
    },
    {
        "name": "黄岛区",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1757
    },
    {
        "name": "崂山区",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1758
    },
    {
        "name": "城阳区",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1759
    },
    {
        "name": "李沧区",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1760
    },
    {
        "name": "胶州市",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1761
    },
    {
        "name": "即墨市",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1762
    },
    {
        "name": "平度市",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1763
    },
    {
        "name": "胶南市",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1764
    },
    {
        "name": "莱西市",
        "cascade": 3,
        "parent_id": 132,
        "ID": 1765
    },
    {
        "name": "东昌府区",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1766
    },
    {
        "name": "临清市",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1767
    },
    {
        "name": "阳谷县",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1768
    },
    {
        "name": "莘县",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1769
    },
    {
        "name": "茌平县",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1770
    },
    {
        "name": "东阿县",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1771
    },
    {
        "name": "冠县",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1772
    },
    {
        "name": "冠城镇",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1773
    },
    {
        "name": "高唐县",
        "cascade": 3,
        "parent_id": 133,
        "ID": 1774
    },
    {
        "name": "德城区",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1775
    },
    {
        "name": "乐陵市",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1776
    },
    {
        "name": "禹城市",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1777
    },
    {
        "name": "陵县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1778
    },
    {
        "name": "陵城镇",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1779
    },
    {
        "name": "平原县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1780
    },
    {
        "name": "夏津县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1781
    },
    {
        "name": "夏津镇",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1782
    },
    {
        "name": "武城县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1783
    },
    {
        "name": "武城镇",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1784
    },
    {
        "name": "齐河县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1785
    },
    {
        "name": "晏城镇",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1786
    },
    {
        "name": "临邑县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1787
    },
    {
        "name": "宁津县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1788
    },
    {
        "name": "宁津镇",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1789
    },
    {
        "name": "庆云县",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1790
    },
    {
        "name": "庆云镇",
        "cascade": 3,
        "parent_id": 134,
        "ID": 1791
    },
    {
        "name": "东营区",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1792
    },
    {
        "name": "河口区",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1793
    },
    {
        "name": "垦利县",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1794
    },
    {
        "name": "垦利镇",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1795
    },
    {
        "name": "利津县",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1796
    },
    {
        "name": "利津镇",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1797
    },
    {
        "name": "广饶县",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1798
    },
    {
        "name": "广饶镇",
        "cascade": 3,
        "parent_id": 135,
        "ID": 1799
    },
    {
        "name": "张店区",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1800
    },
    {
        "name": "淄川区",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1801
    },
    {
        "name": "博山区",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1802
    },
    {
        "name": "临淄区",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1803
    },
    {
        "name": "周村区",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1804
    },
    {
        "name": "桓台县",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1805
    },
    {
        "name": "索镇",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1806
    },
    {
        "name": "高青县",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1807
    },
    {
        "name": "田镇",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1808
    },
    {
        "name": "沂源县",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1809
    },
    {
        "name": "南麻镇",
        "cascade": 3,
        "parent_id": 136,
        "ID": 1810
    },
    {
        "name": "潍城区",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1811
    },
    {
        "name": "寒亭区",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1812
    },
    {
        "name": "坊子区",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1813
    },
    {
        "name": "奎文区",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1814
    },
    {
        "name": "安丘市",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1815
    },
    {
        "name": "昌邑市",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1816
    },
    {
        "name": "高密市",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1817
    },
    {
        "name": "青州市",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1818
    },
    {
        "name": "诸城市",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1819
    },
    {
        "name": "寿光市",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1820
    },
    {
        "name": "临朐县",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1821
    },
    {
        "name": "昌乐县",
        "cascade": 3,
        "parent_id": 137,
        "ID": 1822
    },
    {
        "name": "莱山区",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1823
    },
    {
        "name": "芝罘区",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1824
    },
    {
        "name": "福山区",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1825
    },
    {
        "name": "牟平区",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1826
    },
    {
        "name": "栖霞市",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1827
    },
    {
        "name": "海阳市",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1828
    },
    {
        "name": "龙口市",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1829
    },
    {
        "name": "莱阳市",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1830
    },
    {
        "name": "莱州市",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1831
    },
    {
        "name": "蓬莱市",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1832
    },
    {
        "name": "招远市",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1833
    },
    {
        "name": "长岛县",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1834
    },
    {
        "name": "南长山镇",
        "cascade": 3,
        "parent_id": 138,
        "ID": 1835
    },
    {
        "name": "环翠区",
        "cascade": 3,
        "parent_id": 139,
        "ID": 1836
    },
    {
        "name": "荣成市",
        "cascade": 3,
        "parent_id": 139,
        "ID": 1837
    },
    {
        "name": "乳山市",
        "cascade": 3,
        "parent_id": 139,
        "ID": 1838
    },
    {
        "name": "文登市",
        "cascade": 3,
        "parent_id": 139,
        "ID": 1839
    },
    {
        "name": "东港区",
        "cascade": 3,
        "parent_id": 140,
        "ID": 1840
    },
    {
        "name": "岚山区",
        "cascade": 3,
        "parent_id": 140,
        "ID": 1841
    },
    {
        "name": "五莲县",
        "cascade": 3,
        "parent_id": 140,
        "ID": 1842
    },
    {
        "name": "洪凝镇",
        "cascade": 3,
        "parent_id": 140,
        "ID": 1843
    },
    {
        "name": "莒县",
        "cascade": 3,
        "parent_id": 140,
        "ID": 1844
    },
    {
        "name": "城阳镇",
        "cascade": 3,
        "parent_id": 140,
        "ID": 1845
    },
    {
        "name": "兰山区",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1846
    },
    {
        "name": "罗庄区",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1847
    },
    {
        "name": "河东区",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1848
    },
    {
        "name": "郯城县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1849
    },
    {
        "name": "郯城镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1850
    },
    {
        "name": "苍山县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1851
    },
    {
        "name": "卞庄镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1852
    },
    {
        "name": "莒南县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1853
    },
    {
        "name": "十字路镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1854
    },
    {
        "name": "沂水县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1855
    },
    {
        "name": "沂水镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1856
    },
    {
        "name": "蒙阴县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1857
    },
    {
        "name": "蒙阴镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1858
    },
    {
        "name": "平邑县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1859
    },
    {
        "name": "平邑镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1860
    },
    {
        "name": "费县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1861
    },
    {
        "name": "费城镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1862
    },
    {
        "name": "沂南县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1863
    },
    {
        "name": "界湖镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1864
    },
    {
        "name": "临沭县",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1865
    },
    {
        "name": "临沭镇",
        "cascade": 3,
        "parent_id": 141,
        "ID": 1866
    },
    {
        "name": "薛城区",
        "cascade": 3,
        "parent_id": 142,
        "ID": 1867
    },
    {
        "name": "市中区",
        "cascade": 3,
        "parent_id": 142,
        "ID": 1868
    },
    {
        "name": "峄城区",
        "cascade": 3,
        "parent_id": 142,
        "ID": 1869
    },
    {
        "name": "台儿庄区",
        "cascade": 3,
        "parent_id": 142,
        "ID": 1870
    },
    {
        "name": "山亭区",
        "cascade": 3,
        "parent_id": 142,
        "ID": 1871
    },
    {
        "name": "滕州市",
        "cascade": 3,
        "parent_id": 142,
        "ID": 1872
    },
    {
        "name": "市中区",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1873
    },
    {
        "name": "任城区",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1874
    },
    {
        "name": "曲阜市",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1875
    },
    {
        "name": "兖州市",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1876
    },
    {
        "name": "邹城市",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1877
    },
    {
        "name": "微山县",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1878
    },
    {
        "name": "鱼台县",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1879
    },
    {
        "name": "谷亭镇",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1880
    },
    {
        "name": "金乡县",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1881
    },
    {
        "name": "金乡镇",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1882
    },
    {
        "name": "嘉祥县",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1883
    },
    {
        "name": "嘉祥镇",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1884
    },
    {
        "name": "汶上县",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1885
    },
    {
        "name": "汶上镇",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1886
    },
    {
        "name": "泗水县",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1887
    },
    {
        "name": "梁山县",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1888
    },
    {
        "name": "梁山镇",
        "cascade": 3,
        "parent_id": 143,
        "ID": 1889
    },
    {
        "name": "泰山区",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1890
    },
    {
        "name": "岱岳区",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1891
    },
    {
        "name": "新泰市",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1892
    },
    {
        "name": "肥城市",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1893
    },
    {
        "name": "宁阳县",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1894
    },
    {
        "name": "宁阳镇",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1895
    },
    {
        "name": "东平县",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1896
    },
    {
        "name": "东平镇",
        "cascade": 3,
        "parent_id": 144,
        "ID": 1897
    },
    {
        "name": "莱城区",
        "cascade": 3,
        "parent_id": 145,
        "ID": 1898
    },
    {
        "name": "钢城区",
        "cascade": 3,
        "parent_id": 145,
        "ID": 1899
    },
    {
        "name": "滨城区",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1900
    },
    {
        "name": "惠民县",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1901
    },
    {
        "name": "惠民镇",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1902
    },
    {
        "name": "阳信县",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1903
    },
    {
        "name": "阳信镇",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1904
    },
    {
        "name": "无棣县",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1905
    },
    {
        "name": "无棣镇",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1906
    },
    {
        "name": "沾化县",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1907
    },
    {
        "name": "富国镇",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1908
    },
    {
        "name": "博兴县",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1909
    },
    {
        "name": "博兴镇",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1910
    },
    {
        "name": "邹平县",
        "cascade": 3,
        "parent_id": 146,
        "ID": 1911
    },
    {
        "name": "牡丹区",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1912
    },
    {
        "name": "曹县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1913
    },
    {
        "name": "曹城镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1914
    },
    {
        "name": "定陶县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1915
    },
    {
        "name": "定陶镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1916
    },
    {
        "name": "成武县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1917
    },
    {
        "name": "成武镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1918
    },
    {
        "name": "单县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1919
    },
    {
        "name": "单城镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1920
    },
    {
        "name": "巨野县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1921
    },
    {
        "name": "巨野镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1922
    },
    {
        "name": "郓城县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1923
    },
    {
        "name": "郓城镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1924
    },
    {
        "name": "鄄城县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1925
    },
    {
        "name": "鄄城镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1926
    },
    {
        "name": "东明县",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1927
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 147,
        "ID": 1928
    },
    {
        "name": "中原区",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1929
    },
    {
        "name": "二七区",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1930
    },
    {
        "name": "管城回族区",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1931
    },
    {
        "name": "金水区",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1932
    },
    {
        "name": "上街区",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1933
    },
    {
        "name": "惠济区",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1934
    },
    {
        "name": "新郑市",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1935
    },
    {
        "name": "登封市",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1936
    },
    {
        "name": "新密市",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1937
    },
    {
        "name": "巩义市",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1938
    },
    {
        "name": "荥阳市",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1939
    },
    {
        "name": "中牟县",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1940
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 148,
        "ID": 1941
    },
    {
        "name": "鼓楼区",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1942
    },
    {
        "name": "龙亭区",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1943
    },
    {
        "name": "顺河回族区",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1944
    },
    {
        "name": "禹王台区",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1945
    },
    {
        "name": "金明区",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1946
    },
    {
        "name": "杞县",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1947
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1948
    },
    {
        "name": "通许县",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1949
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1950
    },
    {
        "name": "尉氏县",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1951
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1952
    },
    {
        "name": "开封县",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1953
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1954
    },
    {
        "name": "兰考县",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1955
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 149,
        "ID": 1956
    },
    {
        "name": "湖滨区",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1957
    },
    {
        "name": "义马市",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1958
    },
    {
        "name": "灵宝市",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1959
    },
    {
        "name": "渑池县",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1960
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1961
    },
    {
        "name": "陕县",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1962
    },
    {
        "name": "大营镇",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1963
    },
    {
        "name": "卢氏县",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1964
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 150,
        "ID": 1965
    },
    {
        "name": "西工区",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1966
    },
    {
        "name": "老城区",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1967
    },
    {
        "name": "瀍河回族区",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1968
    },
    {
        "name": "涧西区",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1969
    },
    {
        "name": "吉利区",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1970
    },
    {
        "name": "洛龙区",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1971
    },
    {
        "name": "偃师市",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1972
    },
    {
        "name": "孟津县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1973
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1974
    },
    {
        "name": "新安县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1975
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1976
    },
    {
        "name": "栾川县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1977
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1978
    },
    {
        "name": "嵩县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1979
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1980
    },
    {
        "name": "汝阳县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1981
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1982
    },
    {
        "name": "宜阳县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1983
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1984
    },
    {
        "name": "洛宁县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1985
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1986
    },
    {
        "name": "伊川县",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1987
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 151,
        "ID": 1988
    },
    {
        "name": "解放区",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1989
    },
    {
        "name": "山阳区",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1990
    },
    {
        "name": "中站区",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1991
    },
    {
        "name": "马村区",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1992
    },
    {
        "name": "孟州市",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1993
    },
    {
        "name": "沁阳市",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1994
    },
    {
        "name": "修武县",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1995
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1996
    },
    {
        "name": "博爱县",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1997
    },
    {
        "name": "清化镇",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1998
    },
    {
        "name": "武陟县",
        "cascade": 3,
        "parent_id": 152,
        "ID": 1999
    },
    {
        "name": "木城镇",
        "cascade": 3,
        "parent_id": 152,
        "ID": 2000
    },
    {
        "name": "温县",
        "cascade": 3,
        "parent_id": 152,
        "ID": 2001
    },
    {
        "name": "温泉镇",
        "cascade": 3,
        "parent_id": 152,
        "ID": 2002
    },
    {
        "name": "卫滨区",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2003
    },
    {
        "name": "红旗区",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2004
    },
    {
        "name": "凤泉区",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2005
    },
    {
        "name": "牧野区",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2006
    },
    {
        "name": "卫辉市",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2007
    },
    {
        "name": "辉县市",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2008
    },
    {
        "name": "新乡县",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2009
    },
    {
        "name": "新乡市红旗区",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2010
    },
    {
        "name": "获嘉县",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2011
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2012
    },
    {
        "name": "原阳县",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2013
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2014
    },
    {
        "name": "延津县",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2015
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2016
    },
    {
        "name": "封丘县",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2017
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2018
    },
    {
        "name": "长垣县",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2019
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 153,
        "ID": 2020
    },
    {
        "name": "淇滨区",
        "cascade": 3,
        "parent_id": 154,
        "ID": 2021
    },
    {
        "name": "山城区",
        "cascade": 3,
        "parent_id": 154,
        "ID": 2022
    },
    {
        "name": "鹤山区",
        "cascade": 3,
        "parent_id": 154,
        "ID": 2023
    },
    {
        "name": "浚县",
        "cascade": 3,
        "parent_id": 154,
        "ID": 2024
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 154,
        "ID": 2025
    },
    {
        "name": "淇县",
        "cascade": 3,
        "parent_id": 154,
        "ID": 2026
    },
    {
        "name": "朝歌镇",
        "cascade": 3,
        "parent_id": 154,
        "ID": 2027
    },
    {
        "name": "北关区",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2028
    },
    {
        "name": "文峰区",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2029
    },
    {
        "name": "殷都区",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2030
    },
    {
        "name": "龙安区",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2031
    },
    {
        "name": "林州市",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2032
    },
    {
        "name": "安阳县",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2033
    },
    {
        "name": "安阳市北关区",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2034
    },
    {
        "name": "汤阴县",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2035
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2036
    },
    {
        "name": "滑县",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2037
    },
    {
        "name": "道口镇",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2038
    },
    {
        "name": "内黄县",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2039
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 155,
        "ID": 2040
    },
    {
        "name": "华龙区",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2041
    },
    {
        "name": "清丰县",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2042
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2043
    },
    {
        "name": "南乐县",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2044
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2045
    },
    {
        "name": "范县",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2046
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2047
    },
    {
        "name": "台前县",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2048
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2049
    },
    {
        "name": "濮阳县",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2050
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 156,
        "ID": 2051
    },
    {
        "name": "梁园区",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2052
    },
    {
        "name": "睢阳区",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2053
    },
    {
        "name": "永城市",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2054
    },
    {
        "name": "虞城县",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2055
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2056
    },
    {
        "name": "民权县",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2057
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2058
    },
    {
        "name": "宁陵县",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2059
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2060
    },
    {
        "name": "睢县",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2061
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2062
    },
    {
        "name": "夏邑县",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2063
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2064
    },
    {
        "name": "柘城县",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2065
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 157,
        "ID": 2066
    },
    {
        "name": "魏都区",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2067
    },
    {
        "name": "禹州市",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2068
    },
    {
        "name": "长葛市",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2069
    },
    {
        "name": "许昌县",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2070
    },
    {
        "name": "许昌市魏都区",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2071
    },
    {
        "name": "鄢陵县",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2072
    },
    {
        "name": "安陵镇",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2073
    },
    {
        "name": "襄城县",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2074
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 158,
        "ID": 2075
    },
    {
        "name": "源汇区",
        "cascade": 3,
        "parent_id": 159,
        "ID": 2076
    },
    {
        "name": "郾城区",
        "cascade": 3,
        "parent_id": 159,
        "ID": 2077
    },
    {
        "name": "召陵区",
        "cascade": 3,
        "parent_id": 159,
        "ID": 2078
    },
    {
        "name": "舞阳县",
        "cascade": 3,
        "parent_id": 159,
        "ID": 2079
    },
    {
        "name": "舞泉镇",
        "cascade": 3,
        "parent_id": 159,
        "ID": 2080
    },
    {
        "name": "临颍县",
        "cascade": 3,
        "parent_id": 159,
        "ID": 2081
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 159,
        "ID": 2082
    },
    {
        "name": "新华区",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2083
    },
    {
        "name": "卫东区",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2084
    },
    {
        "name": "湛河区",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2085
    },
    {
        "name": "石龙区",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2086
    },
    {
        "name": "舞钢市",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2087
    },
    {
        "name": "汝州市",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2088
    },
    {
        "name": "宝丰县",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2089
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2090
    },
    {
        "name": "叶县",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2091
    },
    {
        "name": "昆阳镇",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2092
    },
    {
        "name": "鲁山县",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2093
    },
    {
        "name": "鲁阳镇",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2094
    },
    {
        "name": "郏县",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2095
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 160,
        "ID": 2096
    },
    {
        "name": "卧龙区",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2097
    },
    {
        "name": "宛城区",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2098
    },
    {
        "name": "邓州市",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2099
    },
    {
        "name": "南召县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2100
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2101
    },
    {
        "name": "方城县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2102
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2103
    },
    {
        "name": "西峡县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2104
    },
    {
        "name": "镇平县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2105
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2106
    },
    {
        "name": "内乡县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2107
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2108
    },
    {
        "name": "淅川县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2109
    },
    {
        "name": "社旗县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2110
    },
    {
        "name": "赊店镇",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2111
    },
    {
        "name": "唐河县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2112
    },
    {
        "name": "新野县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2113
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2114
    },
    {
        "name": "桐柏县",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2115
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 161,
        "ID": 2116
    },
    {
        "name": "河区",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2117
    },
    {
        "name": "平桥区",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2118
    },
    {
        "name": "息县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2119
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2120
    },
    {
        "name": "淮滨县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2121
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2122
    },
    {
        "name": "潢川县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2123
    },
    {
        "name": "光山县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2124
    },
    {
        "name": "固始县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2125
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2126
    },
    {
        "name": "商城县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2127
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2128
    },
    {
        "name": "罗山县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2129
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2130
    },
    {
        "name": "新县",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2131
    },
    {
        "name": "新集镇",
        "cascade": 3,
        "parent_id": 162,
        "ID": 2132
    },
    {
        "name": "川汇区",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2133
    },
    {
        "name": "项城市",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2134
    },
    {
        "name": "扶沟县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2135
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2136
    },
    {
        "name": "西华县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2137
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2138
    },
    {
        "name": "商水县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2139
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2140
    },
    {
        "name": "太康县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2141
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2142
    },
    {
        "name": "鹿邑县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2143
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2144
    },
    {
        "name": "郸城县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2145
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2146
    },
    {
        "name": "淮阳县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2147
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2148
    },
    {
        "name": "沈丘县",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2149
    },
    {
        "name": "槐店镇",
        "cascade": 3,
        "parent_id": 163,
        "ID": 2150
    },
    {
        "name": "驿城区",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2151
    },
    {
        "name": "确山县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2152
    },
    {
        "name": "盘龙镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2153
    },
    {
        "name": "泌阳县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2154
    },
    {
        "name": "泌水镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2155
    },
    {
        "name": "遂平县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2156
    },
    {
        "name": "灈阳镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2157
    },
    {
        "name": "西平县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2158
    },
    {
        "name": "上蔡县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2159
    },
    {
        "name": "蔡都镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2160
    },
    {
        "name": "汝南县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2161
    },
    {
        "name": "汝宁镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2162
    },
    {
        "name": "平舆县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2163
    },
    {
        "name": "古槐镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2164
    },
    {
        "name": "新蔡县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2165
    },
    {
        "name": "古吕镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2166
    },
    {
        "name": "正阳县",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2167
    },
    {
        "name": "真阳镇",
        "cascade": 3,
        "parent_id": 164,
        "ID": 2168
    },
    {
        "name": "江岸区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2169
    },
    {
        "name": "江汉区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2170
    },
    {
        "name": "硚口区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2171
    },
    {
        "name": "汉阳区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2172
    },
    {
        "name": "武昌区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2173
    },
    {
        "name": "青山区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2174
    },
    {
        "name": "洪山区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2175
    },
    {
        "name": "东西湖区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2176
    },
    {
        "name": "汉南区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2177
    },
    {
        "name": "蔡甸区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2178
    },
    {
        "name": "江夏区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2179
    },
    {
        "name": "黄陂区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2180
    },
    {
        "name": "新洲区",
        "cascade": 3,
        "parent_id": 165,
        "ID": 2181
    },
    {
        "name": "张湾区",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2182
    },
    {
        "name": "茅箭区",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2183
    },
    {
        "name": "丹江口市",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2184
    },
    {
        "name": "郧县",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2185
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2186
    },
    {
        "name": "竹山县",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2187
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2188
    },
    {
        "name": "房县",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2189
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2190
    },
    {
        "name": "郧西县",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2191
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2192
    },
    {
        "name": "竹溪县",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2193
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 166,
        "ID": 2194
    },
    {
        "name": "襄城区",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2195
    },
    {
        "name": "樊城区",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2196
    },
    {
        "name": "襄阳区",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2197
    },
    {
        "name": "老河口市",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2198
    },
    {
        "name": "枣阳市",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2199
    },
    {
        "name": "宜城市",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2200
    },
    {
        "name": "南漳县",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2201
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2202
    },
    {
        "name": "谷城县",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2203
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2204
    },
    {
        "name": "保康县",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2205
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 167,
        "ID": 2206
    },
    {
        "name": "东宝区",
        "cascade": 3,
        "parent_id": 168,
        "ID": 2207
    },
    {
        "name": "掇刀区",
        "cascade": 3,
        "parent_id": 168,
        "ID": 2208
    },
    {
        "name": "钟祥市",
        "cascade": 3,
        "parent_id": 168,
        "ID": 2209
    },
    {
        "name": "沙洋县",
        "cascade": 3,
        "parent_id": 168,
        "ID": 2210
    },
    {
        "name": "沙洋镇",
        "cascade": 3,
        "parent_id": 168,
        "ID": 2211
    },
    {
        "name": "京山县",
        "cascade": 3,
        "parent_id": 168,
        "ID": 2212
    },
    {
        "name": "新市镇",
        "cascade": 3,
        "parent_id": 168,
        "ID": 2213
    },
    {
        "name": "孝南区",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2214
    },
    {
        "name": "应城市",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2215
    },
    {
        "name": "安陆市",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2216
    },
    {
        "name": "汉川市",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2217
    },
    {
        "name": "孝昌县",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2218
    },
    {
        "name": "花园镇",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2219
    },
    {
        "name": "大悟县",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2220
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2221
    },
    {
        "name": "云梦县",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2222
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 169,
        "ID": 2223
    },
    {
        "name": "黄州区",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2224
    },
    {
        "name": "麻城市",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2225
    },
    {
        "name": "武穴市",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2226
    },
    {
        "name": "红安县",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2227
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2228
    },
    {
        "name": "罗田县",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2229
    },
    {
        "name": "凤山镇",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2230
    },
    {
        "name": "英山县",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2231
    },
    {
        "name": "温泉镇",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2232
    },
    {
        "name": "浠水县",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2233
    },
    {
        "name": "清泉镇",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2234
    },
    {
        "name": "蕲春县",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2235
    },
    {
        "name": "漕河镇",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2236
    },
    {
        "name": "黄梅县",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2237
    },
    {
        "name": "黄梅镇",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2238
    },
    {
        "name": "团风县",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2239
    },
    {
        "name": "团风镇",
        "cascade": 3,
        "parent_id": 170,
        "ID": 2240
    },
    {
        "name": "鄂城区",
        "cascade": 3,
        "parent_id": 171,
        "ID": 2241
    },
    {
        "name": "梁子湖区",
        "cascade": 3,
        "parent_id": 171,
        "ID": 2242
    },
    {
        "name": "华容区",
        "cascade": 3,
        "parent_id": 171,
        "ID": 2243
    },
    {
        "name": "黄石港区",
        "cascade": 3,
        "parent_id": 172,
        "ID": 2244
    },
    {
        "name": "西塞山区",
        "cascade": 3,
        "parent_id": 172,
        "ID": 2245
    },
    {
        "name": "下陆区",
        "cascade": 3,
        "parent_id": 172,
        "ID": 2246
    },
    {
        "name": "铁山区",
        "cascade": 3,
        "parent_id": 172,
        "ID": 2247
    },
    {
        "name": "大冶市",
        "cascade": 3,
        "parent_id": 172,
        "ID": 2248
    },
    {
        "name": "阳新县",
        "cascade": 3,
        "parent_id": 172,
        "ID": 2249
    },
    {
        "name": "兴国镇",
        "cascade": 3,
        "parent_id": 172,
        "ID": 2250
    },
    {
        "name": "咸安区",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2251
    },
    {
        "name": "赤壁市",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2252
    },
    {
        "name": "嘉鱼县",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2253
    },
    {
        "name": "鱼岳镇",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2254
    },
    {
        "name": "通城县",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2255
    },
    {
        "name": "隽水镇",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2256
    },
    {
        "name": "崇阳县",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2257
    },
    {
        "name": "天城镇",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2258
    },
    {
        "name": "通山县",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2259
    },
    {
        "name": "通羊镇",
        "cascade": 3,
        "parent_id": 173,
        "ID": 2260
    },
    {
        "name": "沙市区",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2261
    },
    {
        "name": "荆州区",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2262
    },
    {
        "name": "石首市",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2263
    },
    {
        "name": "洪湖市",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2264
    },
    {
        "name": "松滋市",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2265
    },
    {
        "name": "江陵县",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2266
    },
    {
        "name": "郝穴镇",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2267
    },
    {
        "name": "公安县",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2268
    },
    {
        "name": "斗湖堤镇",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2269
    },
    {
        "name": "监利县",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2270
    },
    {
        "name": "容城镇",
        "cascade": 3,
        "parent_id": 174,
        "ID": 2271
    },
    {
        "name": "西陵区",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2272
    },
    {
        "name": "伍家岗区",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2273
    },
    {
        "name": "点军区",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2274
    },
    {
        "name": "猇亭区",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2275
    },
    {
        "name": "夷陵区",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2276
    },
    {
        "name": "枝江市",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2277
    },
    {
        "name": "宜都市",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2278
    },
    {
        "name": "当阳市",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2279
    },
    {
        "name": "远安县",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2280
    },
    {
        "name": "鸣凤镇",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2281
    },
    {
        "name": "兴山县",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2282
    },
    {
        "name": "古夫镇",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2283
    },
    {
        "name": "秭归县",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2284
    },
    {
        "name": "茅坪镇",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2285
    },
    {
        "name": "长阳土家族自治县",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2286
    },
    {
        "name": "龙舟坪镇",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2287
    },
    {
        "name": "五峰土家族自治县",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2288
    },
    {
        "name": "五峰镇",
        "cascade": 3,
        "parent_id": 175,
        "ID": 2289
    },
    {
        "name": "曾都区",
        "cascade": 3,
        "parent_id": 176,
        "ID": 2290
    },
    {
        "name": "广水市",
        "cascade": 3,
        "parent_id": 176,
        "ID": 2291
    },
    {
        "name": "仙桃市",
        "cascade": 3,
        "parent_id": 177,
        "ID": 2292
    },
    {
        "name": "天门市",
        "cascade": 3,
        "parent_id": 177,
        "ID": 2293
    },
    {
        "name": "潜江市",
        "cascade": 3,
        "parent_id": 177,
        "ID": 2294
    },
    {
        "name": "神农架林区",
        "cascade": 3,
        "parent_id": 177,
        "ID": 2295
    },
    {
        "name": "松柏镇",
        "cascade": 3,
        "parent_id": 177,
        "ID": 2296
    },
    {
        "name": "恩施市",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2297
    },
    {
        "name": "利川市",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2298
    },
    {
        "name": "建始县",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2299
    },
    {
        "name": "业州镇",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2300
    },
    {
        "name": "巴东县",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2301
    },
    {
        "name": "信陵镇",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2302
    },
    {
        "name": "宣恩县",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2303
    },
    {
        "name": "珠山镇",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2304
    },
    {
        "name": "咸丰县",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2305
    },
    {
        "name": "高乐山镇",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2306
    },
    {
        "name": "来凤县",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2307
    },
    {
        "name": "翔凤镇",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2308
    },
    {
        "name": "鹤峰县",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2309
    },
    {
        "name": "容美镇",
        "cascade": 3,
        "parent_id": 178,
        "ID": 2310
    },
    {
        "name": "长沙市",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2311
    },
    {
        "name": "岳麓区",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2312
    },
    {
        "name": "芙蓉区",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2313
    },
    {
        "name": "天心区",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2314
    },
    {
        "name": "开福区",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2315
    },
    {
        "name": "雨花区",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2316
    },
    {
        "name": "浏阳市",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2317
    },
    {
        "name": "长沙县",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2318
    },
    {
        "name": "星沙镇",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2319
    },
    {
        "name": "望城县",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2320
    },
    {
        "name": "高塘岭镇",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2321
    },
    {
        "name": "宁乡县",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2322
    },
    {
        "name": "玉潭镇",
        "cascade": 3,
        "parent_id": 179,
        "ID": 2323
    },
    {
        "name": "永定区",
        "cascade": 3,
        "parent_id": 180,
        "ID": 2324
    },
    {
        "name": "武陵源区",
        "cascade": 3,
        "parent_id": 180,
        "ID": 2325
    },
    {
        "name": "慈利县",
        "cascade": 3,
        "parent_id": 180,
        "ID": 2326
    },
    {
        "name": "零阳镇",
        "cascade": 3,
        "parent_id": 180,
        "ID": 2327
    },
    {
        "name": "桑植县",
        "cascade": 3,
        "parent_id": 180,
        "ID": 2328
    },
    {
        "name": "澧源镇",
        "cascade": 3,
        "parent_id": 180,
        "ID": 2329
    },
    {
        "name": "武陵区",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2330
    },
    {
        "name": "鼎城区",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2331
    },
    {
        "name": "津市市",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2332
    },
    {
        "name": "安乡县",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2333
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2334
    },
    {
        "name": "汉寿县",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2335
    },
    {
        "name": "龙阳镇",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2336
    },
    {
        "name": "澧县",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2337
    },
    {
        "name": "澧阳镇",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2338
    },
    {
        "name": "临澧县",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2339
    },
    {
        "name": "安福镇",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2340
    },
    {
        "name": "桃源县",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2341
    },
    {
        "name": "漳江镇",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2342
    },
    {
        "name": "石门县",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2343
    },
    {
        "name": "楚江镇",
        "cascade": 3,
        "parent_id": 181,
        "ID": 2344
    },
    {
        "name": "赫山区",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2345
    },
    {
        "name": "资阳区",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2346
    },
    {
        "name": "沅江市",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2347
    },
    {
        "name": "南县",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2348
    },
    {
        "name": "南洲镇",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2349
    },
    {
        "name": "桃江县",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2350
    },
    {
        "name": "桃花江镇",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2351
    },
    {
        "name": "安化县",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2352
    },
    {
        "name": "东坪镇",
        "cascade": 3,
        "parent_id": 182,
        "ID": 2353
    },
    {
        "name": "岳阳楼区",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2354
    },
    {
        "name": "君山区",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2355
    },
    {
        "name": "云溪区",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2356
    },
    {
        "name": "汨罗市",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2357
    },
    {
        "name": "临湘市",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2358
    },
    {
        "name": "岳阳县",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2359
    },
    {
        "name": "荣家湾镇",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2360
    },
    {
        "name": "华容县",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2361
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2362
    },
    {
        "name": "湘阴县",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2363
    },
    {
        "name": "文星镇",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2364
    },
    {
        "name": "平江县",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2365
    },
    {
        "name": "汉昌镇",
        "cascade": 3,
        "parent_id": 183,
        "ID": 2366
    },
    {
        "name": "天元区",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2367
    },
    {
        "name": "荷塘区",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2368
    },
    {
        "name": "芦淞区",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2369
    },
    {
        "name": "石峰区",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2370
    },
    {
        "name": "醴陵市",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2371
    },
    {
        "name": "株洲县",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2372
    },
    {
        "name": "渌口镇",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2373
    },
    {
        "name": "攸县",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2374
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2375
    },
    {
        "name": "茶陵县",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2376
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2377
    },
    {
        "name": "炎陵县",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2378
    },
    {
        "name": "霞阳镇",
        "cascade": 3,
        "parent_id": 184,
        "ID": 2379
    },
    {
        "name": "岳塘区",
        "cascade": 3,
        "parent_id": 185,
        "ID": 2380
    },
    {
        "name": "雨湖区",
        "cascade": 3,
        "parent_id": 185,
        "ID": 2381
    },
    {
        "name": "湘乡市",
        "cascade": 3,
        "parent_id": 185,
        "ID": 2382
    },
    {
        "name": "韶山市",
        "cascade": 3,
        "parent_id": 185,
        "ID": 2383
    },
    {
        "name": "湘潭县",
        "cascade": 3,
        "parent_id": 185,
        "ID": 2384
    },
    {
        "name": "易俗河镇",
        "cascade": 3,
        "parent_id": 185,
        "ID": 2385
    },
    {
        "name": "雁峰区",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2386
    },
    {
        "name": "珠晖区",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2387
    },
    {
        "name": "石鼓区",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2388
    },
    {
        "name": "蒸湘区",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2389
    },
    {
        "name": "南岳区",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2390
    },
    {
        "name": "常宁市",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2391
    },
    {
        "name": "耒阳市",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2392
    },
    {
        "name": "衡阳县",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2393
    },
    {
        "name": "西渡镇",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2394
    },
    {
        "name": "衡南县",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2395
    },
    {
        "name": "云集镇",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2396
    },
    {
        "name": "衡山县",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2397
    },
    {
        "name": "开云镇",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2398
    },
    {
        "name": "衡东县",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2399
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2400
    },
    {
        "name": "祁东县",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2401
    },
    {
        "name": "洪桥镇",
        "cascade": 3,
        "parent_id": 186,
        "ID": 2402
    },
    {
        "name": "北湖区",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2403
    },
    {
        "name": "苏仙区",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2404
    },
    {
        "name": "资兴市",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2405
    },
    {
        "name": "桂阳县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2406
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2407
    },
    {
        "name": "永兴县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2408
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2409
    },
    {
        "name": "宜章县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2410
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2411
    },
    {
        "name": "嘉禾县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2412
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2413
    },
    {
        "name": "临武县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2414
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2415
    },
    {
        "name": "汝城县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2416
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2417
    },
    {
        "name": "桂东县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2418
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2419
    },
    {
        "name": "安仁县",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2420
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 187,
        "ID": 2421
    },
    {
        "name": "冷水滩区",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2422
    },
    {
        "name": "零陵区",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2423
    },
    {
        "name": "东安县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2424
    },
    {
        "name": "白牙市镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2425
    },
    {
        "name": "道县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2426
    },
    {
        "name": "道江镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2427
    },
    {
        "name": "宁远县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2428
    },
    {
        "name": "舜陵镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2429
    },
    {
        "name": "江永县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2430
    },
    {
        "name": "潇浦镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2431
    },
    {
        "name": "蓝山县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2432
    },
    {
        "name": "塔峰镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2433
    },
    {
        "name": "新田县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2434
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2435
    },
    {
        "name": "双牌县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2436
    },
    {
        "name": "泷泊镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2437
    },
    {
        "name": "祁阳县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2438
    },
    {
        "name": "浯溪镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2439
    },
    {
        "name": "江华瑶族自治县",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2440
    },
    {
        "name": "沱江镇",
        "cascade": 3,
        "parent_id": 188,
        "ID": 2441
    },
    {
        "name": "双清区",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2442
    },
    {
        "name": "大祥区",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2443
    },
    {
        "name": "北塔区",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2444
    },
    {
        "name": "武冈市",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2445
    },
    {
        "name": "邵东县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2446
    },
    {
        "name": "两市镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2447
    },
    {
        "name": "邵阳县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2448
    },
    {
        "name": "塘渡口镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2449
    },
    {
        "name": "新邵县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2450
    },
    {
        "name": "酿溪镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2451
    },
    {
        "name": "隆回县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2452
    },
    {
        "name": "桃洪镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2453
    },
    {
        "name": "洞口县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2454
    },
    {
        "name": "洞口镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2455
    },
    {
        "name": "绥宁县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2456
    },
    {
        "name": "长铺镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2457
    },
    {
        "name": "新宁县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2458
    },
    {
        "name": "金石镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2459
    },
    {
        "name": "城步苗族自治县",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2460
    },
    {
        "name": "儒林镇",
        "cascade": 3,
        "parent_id": 189,
        "ID": 2461
    },
    {
        "name": "鹤城区",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2462
    },
    {
        "name": "洪江市",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2463
    },
    {
        "name": "沅陵县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2464
    },
    {
        "name": "沅陵镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2465
    },
    {
        "name": "辰溪县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2466
    },
    {
        "name": "辰阳镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2467
    },
    {
        "name": "溆浦县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2468
    },
    {
        "name": "卢峰镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2469
    },
    {
        "name": "中方县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2470
    },
    {
        "name": "中方镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2471
    },
    {
        "name": "会同县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2472
    },
    {
        "name": "林城镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2473
    },
    {
        "name": "麻阳苗族自治县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2474
    },
    {
        "name": "高村镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2475
    },
    {
        "name": "新晃侗族自治县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2476
    },
    {
        "name": "新晃镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2477
    },
    {
        "name": "芷江侗族自治县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2478
    },
    {
        "name": "芷江镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2479
    },
    {
        "name": "靖州苗族侗族自治县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2480
    },
    {
        "name": "渠阳镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2481
    },
    {
        "name": "通道侗族自治县",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2482
    },
    {
        "name": "双江镇",
        "cascade": 3,
        "parent_id": 190,
        "ID": 2483
    },
    {
        "name": "娄星区",
        "cascade": 3,
        "parent_id": 191,
        "ID": 2484
    },
    {
        "name": "冷水江市",
        "cascade": 3,
        "parent_id": 191,
        "ID": 2485
    },
    {
        "name": "涟源市",
        "cascade": 3,
        "parent_id": 191,
        "ID": 2486
    },
    {
        "name": "双峰县",
        "cascade": 3,
        "parent_id": 191,
        "ID": 2487
    },
    {
        "name": "永丰镇",
        "cascade": 3,
        "parent_id": 191,
        "ID": 2488
    },
    {
        "name": "新化县",
        "cascade": 3,
        "parent_id": 191,
        "ID": 2489
    },
    {
        "name": "上梅镇",
        "cascade": 3,
        "parent_id": 191,
        "ID": 2490
    },
    {
        "name": "吉首市",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2491
    },
    {
        "name": "泸溪县",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2492
    },
    {
        "name": "白沙镇",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2493
    },
    {
        "name": "凤凰县",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2494
    },
    {
        "name": "沱江镇",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2495
    },
    {
        "name": "花垣县",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2496
    },
    {
        "name": "花垣镇",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2497
    },
    {
        "name": "保靖县",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2498
    },
    {
        "name": "迁陵镇",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2499
    },
    {
        "name": "古丈县",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2500
    },
    {
        "name": "古阳镇",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2501
    },
    {
        "name": "永顺县",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2502
    },
    {
        "name": "灵溪镇",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2503
    },
    {
        "name": "龙山县",
        "cascade": 3,
        "parent_id": 192,
        "ID": 2504
    },
    {
        "name": "越秀区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2505
    },
    {
        "name": "荔湾区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2506
    },
    {
        "name": "海珠区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2507
    },
    {
        "name": "天河区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2508
    },
    {
        "name": "白云区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2509
    },
    {
        "name": "黄埔区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2510
    },
    {
        "name": "番禺区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2511
    },
    {
        "name": "花都区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2512
    },
    {
        "name": "南沙区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2513
    },
    {
        "name": "萝岗区",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2514
    },
    {
        "name": "增城市",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2515
    },
    {
        "name": "从化市",
        "cascade": 3,
        "parent_id": 193,
        "ID": 2516
    },
    {
        "name": "福田区",
        "cascade": 3,
        "parent_id": 194,
        "ID": 2517
    },
    {
        "name": "罗湖区",
        "cascade": 3,
        "parent_id": 194,
        "ID": 2518
    },
    {
        "name": "南山区",
        "cascade": 3,
        "parent_id": 194,
        "ID": 2519
    },
    {
        "name": "宝安区",
        "cascade": 3,
        "parent_id": 194,
        "ID": 2520
    },
    {
        "name": "龙岗区",
        "cascade": 3,
        "parent_id": 194,
        "ID": 2521
    },
    {
        "name": "盐田区",
        "cascade": 3,
        "parent_id": 194,
        "ID": 2522
    },
    {
        "name": "清城区",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2523
    },
    {
        "name": "英德市",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2524
    },
    {
        "name": "连州市",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2525
    },
    {
        "name": "佛冈县",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2526
    },
    {
        "name": "石角镇",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2527
    },
    {
        "name": "阳山县",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2528
    },
    {
        "name": "阳城镇",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2529
    },
    {
        "name": "清新县",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2530
    },
    {
        "name": "太和镇",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2531
    },
    {
        "name": "连山壮族瑶族自治县",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2532
    },
    {
        "name": "吉田镇",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2533
    },
    {
        "name": "连南瑶族自治县",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2534
    },
    {
        "name": "三江镇",
        "cascade": 3,
        "parent_id": 195,
        "ID": 2535
    },
    {
        "name": "浈江区",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2536
    },
    {
        "name": "武江区",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2537
    },
    {
        "name": "曲江区",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2538
    },
    {
        "name": "乐昌市",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2539
    },
    {
        "name": "南雄市",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2540
    },
    {
        "name": "始兴县",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2541
    },
    {
        "name": "太平镇",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2542
    },
    {
        "name": "仁化县",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2543
    },
    {
        "name": "仁化镇",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2544
    },
    {
        "name": "翁源县",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2545
    },
    {
        "name": "龙仙镇",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2546
    },
    {
        "name": "新丰县",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2547
    },
    {
        "name": "乳源瑶族自治县",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2548
    },
    {
        "name": "乳城镇",
        "cascade": 3,
        "parent_id": 196,
        "ID": 2549
    },
    {
        "name": "源城区",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2550
    },
    {
        "name": "紫金县",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2551
    },
    {
        "name": "紫城镇",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2552
    },
    {
        "name": "龙川县",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2553
    },
    {
        "name": "老隆镇",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2554
    },
    {
        "name": "连平县",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2555
    },
    {
        "name": "元善镇",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2556
    },
    {
        "name": "和平县",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2557
    },
    {
        "name": "阳明镇",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2558
    },
    {
        "name": "东源县",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2559
    },
    {
        "name": "仙塘镇",
        "cascade": 3,
        "parent_id": 197,
        "ID": 2560
    },
    {
        "name": "梅江区",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2561
    },
    {
        "name": "兴宁市",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2562
    },
    {
        "name": "梅县",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2563
    },
    {
        "name": "程江镇",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2564
    },
    {
        "name": "大埔县",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2565
    },
    {
        "name": "湖寮镇",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2566
    },
    {
        "name": "丰顺县",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2567
    },
    {
        "name": "汤坑镇",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2568
    },
    {
        "name": "五华县",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2569
    },
    {
        "name": "水寨镇",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2570
    },
    {
        "name": "平远县",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2571
    },
    {
        "name": "大柘镇",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2572
    },
    {
        "name": "蕉岭县",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2573
    },
    {
        "name": "蕉城镇",
        "cascade": 3,
        "parent_id": 198,
        "ID": 2574
    },
    {
        "name": "湘桥区",
        "cascade": 3,
        "parent_id": 199,
        "ID": 2575
    },
    {
        "name": "潮安县",
        "cascade": 3,
        "parent_id": 199,
        "ID": 2576
    },
    {
        "name": "庵埠镇",
        "cascade": 3,
        "parent_id": 199,
        "ID": 2577
    },
    {
        "name": "饶平县",
        "cascade": 3,
        "parent_id": 199,
        "ID": 2578
    },
    {
        "name": "黄冈镇",
        "cascade": 3,
        "parent_id": 199,
        "ID": 2579
    },
    {
        "name": "金平区",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2580
    },
    {
        "name": "濠江区",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2581
    },
    {
        "name": "龙湖区",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2582
    },
    {
        "name": "潮阳区",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2583
    },
    {
        "name": "潮南区",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2584
    },
    {
        "name": "澄海区",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2585
    },
    {
        "name": "南澳县",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2586
    },
    {
        "name": "后宅镇",
        "cascade": 3,
        "parent_id": 200,
        "ID": 2587
    },
    {
        "name": "榕城区",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2588
    },
    {
        "name": "普宁市",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2589
    },
    {
        "name": "揭东县",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2590
    },
    {
        "name": "曲溪镇",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2591
    },
    {
        "name": "揭西县",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2592
    },
    {
        "name": "河婆镇",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2593
    },
    {
        "name": "惠来县",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2594
    },
    {
        "name": "惠城镇",
        "cascade": 3,
        "parent_id": 201,
        "ID": 2595
    },
    {
        "name": "城区",
        "cascade": 3,
        "parent_id": 202,
        "ID": 2596
    },
    {
        "name": "陆丰市",
        "cascade": 3,
        "parent_id": 202,
        "ID": 2597
    },
    {
        "name": "海丰县",
        "cascade": 3,
        "parent_id": 202,
        "ID": 2598
    },
    {
        "name": "海城镇",
        "cascade": 3,
        "parent_id": 202,
        "ID": 2599
    },
    {
        "name": "陆河县",
        "cascade": 3,
        "parent_id": 202,
        "ID": 2600
    },
    {
        "name": "河田镇",
        "cascade": 3,
        "parent_id": 202,
        "ID": 2601
    },
    {
        "name": "惠城区",
        "cascade": 3,
        "parent_id": 203,
        "ID": 2602
    },
    {
        "name": "惠阳区",
        "cascade": 3,
        "parent_id": 203,
        "ID": 2603
    },
    {
        "name": "博罗县",
        "cascade": 3,
        "parent_id": 203,
        "ID": 2604
    },
    {
        "name": "罗阳镇",
        "cascade": 3,
        "parent_id": 203,
        "ID": 2605
    },
    {
        "name": "惠东县",
        "cascade": 3,
        "parent_id": 203,
        "ID": 2606
    },
    {
        "name": "龙门县",
        "cascade": 3,
        "parent_id": 203,
        "ID": 2607
    },
    {
        "name": "莞城区",
        "cascade": 3,
        "parent_id": 204,
        "ID": 2608
    },
    {
        "name": "常平镇",
        "cascade": 3,
        "parent_id": 204,
        "ID": 2609
    },
    {
        "name": "塘厦镇",
        "cascade": 3,
        "parent_id": 204,
        "ID": 2610
    },
    {
        "name": "万江区",
        "cascade": 3,
        "parent_id": 204,
        "ID": 2611
    },
    {
        "name": "虎门镇",
        "cascade": 3,
        "parent_id": 204,
        "ID": 2612
    },
    {
        "name": "香洲区",
        "cascade": 3,
        "parent_id": 205,
        "ID": 2613
    },
    {
        "name": "斗门区",
        "cascade": 3,
        "parent_id": 205,
        "ID": 2614
    },
    {
        "name": "金湾区",
        "cascade": 3,
        "parent_id": 205,
        "ID": 2615
    },
    {
        "name": "",
        "cascade": 3,
        "parent_id": 206,
        "ID": 2616
    },
    {
        "name": "江海区",
        "cascade": 3,
        "parent_id": 207,
        "ID": 2617
    },
    {
        "name": "蓬江区",
        "cascade": 3,
        "parent_id": 207,
        "ID": 2618
    },
    {
        "name": "新会区",
        "cascade": 3,
        "parent_id": 207,
        "ID": 2619
    },
    {
        "name": "恩平市",
        "cascade": 3,
        "parent_id": 207,
        "ID": 2620
    },
    {
        "name": "台山市",
        "cascade": 3,
        "parent_id": 207,
        "ID": 2621
    },
    {
        "name": "开平市",
        "cascade": 3,
        "parent_id": 207,
        "ID": 2622
    },
    {
        "name": "鹤山市",
        "cascade": 3,
        "parent_id": 207,
        "ID": 2623
    },
    {
        "name": "禅城区",
        "cascade": 3,
        "parent_id": 208,
        "ID": 2624
    },
    {
        "name": "南海区",
        "cascade": 3,
        "parent_id": 208,
        "ID": 2625
    },
    {
        "name": "顺德区",
        "cascade": 3,
        "parent_id": 208,
        "ID": 2626
    },
    {
        "name": "三水区",
        "cascade": 3,
        "parent_id": 208,
        "ID": 2627
    },
    {
        "name": "高明区",
        "cascade": 3,
        "parent_id": 208,
        "ID": 2628
    },
    {
        "name": "端州区",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2629
    },
    {
        "name": "鼎湖区",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2630
    },
    {
        "name": "高要市",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2631
    },
    {
        "name": "四会市",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2632
    },
    {
        "name": "广宁县",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2633
    },
    {
        "name": "南街镇",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2634
    },
    {
        "name": "怀集县",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2635
    },
    {
        "name": "怀城镇",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2636
    },
    {
        "name": "封开县",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2637
    },
    {
        "name": "江口镇",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2638
    },
    {
        "name": "德庆县",
        "cascade": 3,
        "parent_id": 209,
        "ID": 2639
    },
    {
        "name": "云城区",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2640
    },
    {
        "name": "罗定市",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2641
    },
    {
        "name": "云安县",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2642
    },
    {
        "name": "六都镇",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2643
    },
    {
        "name": "新兴县",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2644
    },
    {
        "name": "新城镇",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2645
    },
    {
        "name": "郁南县",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2646
    },
    {
        "name": "都城镇",
        "cascade": 3,
        "parent_id": 210,
        "ID": 2647
    },
    {
        "name": "江城区",
        "cascade": 3,
        "parent_id": 211,
        "ID": 2648
    },
    {
        "name": "阳春市",
        "cascade": 3,
        "parent_id": 211,
        "ID": 2649
    },
    {
        "name": "阳西县",
        "cascade": 3,
        "parent_id": 211,
        "ID": 2650
    },
    {
        "name": "织镇",
        "cascade": 3,
        "parent_id": 211,
        "ID": 2651
    },
    {
        "name": "阳东县",
        "cascade": 3,
        "parent_id": 211,
        "ID": 2652
    },
    {
        "name": "东城镇",
        "cascade": 3,
        "parent_id": 211,
        "ID": 2653
    },
    {
        "name": "茂南区",
        "cascade": 3,
        "parent_id": 212,
        "ID": 2654
    },
    {
        "name": "茂港区",
        "cascade": 3,
        "parent_id": 212,
        "ID": 2655
    },
    {
        "name": "化州市",
        "cascade": 3,
        "parent_id": 212,
        "ID": 2656
    },
    {
        "name": "信宜市",
        "cascade": 3,
        "parent_id": 212,
        "ID": 2657
    },
    {
        "name": "高州市",
        "cascade": 3,
        "parent_id": 212,
        "ID": 2658
    },
    {
        "name": "电白县",
        "cascade": 3,
        "parent_id": 212,
        "ID": 2659
    },
    {
        "name": "水东镇",
        "cascade": 3,
        "parent_id": 212,
        "ID": 2660
    },
    {
        "name": "赤坎区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2661
    },
    {
        "name": "霞山区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2662
    },
    {
        "name": "坡头区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2663
    },
    {
        "name": "麻章区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2664
    },
    {
        "name": "吴川市",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2665
    },
    {
        "name": "廉江市",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2666
    },
    {
        "name": "雷州市",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2667
    },
    {
        "name": "遂溪县",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2668
    },
    {
        "name": "遂城镇",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2669
    },
    {
        "name": "徐闻县",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2670
    },
    {
        "name": "撤销广州市东山区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2671
    },
    {
        "name": "芳村区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2672
    },
    {
        "name": "设立广州市南沙区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2673
    },
    {
        "name": "萝岗区",
        "cascade": 3,
        "parent_id": 213,
        "ID": 2674
    },
    {
        "name": "青秀区",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2675
    },
    {
        "name": "兴宁区",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2676
    },
    {
        "name": "江南区",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2677
    },
    {
        "name": "西乡塘区",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2678
    },
    {
        "name": "良庆区",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2679
    },
    {
        "name": "邕宁区",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2680
    },
    {
        "name": "武鸣县",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2681
    },
    {
        "name": "横县",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2682
    },
    {
        "name": "宾阳县",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2683
    },
    {
        "name": "上林县",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2684
    },
    {
        "name": "隆安县",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2685
    },
    {
        "name": "马山县",
        "cascade": 3,
        "parent_id": 214,
        "ID": 2686
    },
    {
        "name": "象山区",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2687
    },
    {
        "name": "叠彩区",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2688
    },
    {
        "name": "秀峰区",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2689
    },
    {
        "name": "七星区",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2690
    },
    {
        "name": "雁山区",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2691
    },
    {
        "name": "阳朔县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2692
    },
    {
        "name": "阳朔镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2693
    },
    {
        "name": "临桂县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2694
    },
    {
        "name": "临桂镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2695
    },
    {
        "name": "灵川县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2696
    },
    {
        "name": "灵川镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2697
    },
    {
        "name": "全州县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2698
    },
    {
        "name": "全州镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2699
    },
    {
        "name": "兴安县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2700
    },
    {
        "name": "兴安镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2701
    },
    {
        "name": "永福县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2702
    },
    {
        "name": "永福镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2703
    },
    {
        "name": "灌阳县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2704
    },
    {
        "name": "灌阳镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2705
    },
    {
        "name": "资源县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2706
    },
    {
        "name": "资源镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2707
    },
    {
        "name": "平乐县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2708
    },
    {
        "name": "平乐镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2709
    },
    {
        "name": "荔浦县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2710
    },
    {
        "name": "荔城镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2711
    },
    {
        "name": "龙胜各族自治县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2712
    },
    {
        "name": "龙胜镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2713
    },
    {
        "name": "恭城瑶族自治县",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2714
    },
    {
        "name": "恭城镇",
        "cascade": 3,
        "parent_id": 215,
        "ID": 2715
    },
    {
        "name": "城中区",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2716
    },
    {
        "name": "鱼峰区",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2717
    },
    {
        "name": "柳南区",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2718
    },
    {
        "name": "柳北区",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2719
    },
    {
        "name": "柳江县",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2720
    },
    {
        "name": "拉堡镇",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2721
    },
    {
        "name": "柳城县",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2722
    },
    {
        "name": "大埔镇",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2723
    },
    {
        "name": "鹿寨县",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2724
    },
    {
        "name": "鹿寨镇",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2725
    },
    {
        "name": "融安县",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2726
    },
    {
        "name": "长安镇",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2727
    },
    {
        "name": "三江侗族自治县",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2728
    },
    {
        "name": "古宜镇",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2729
    },
    {
        "name": "融水苗族自治县",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2730
    },
    {
        "name": "融水镇",
        "cascade": 3,
        "parent_id": 216,
        "ID": 2731
    },
    {
        "name": "万秀区",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2732
    },
    {
        "name": "蝶山区",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2733
    },
    {
        "name": "长洲区",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2734
    },
    {
        "name": "岑溪市",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2735
    },
    {
        "name": "苍梧县",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2736
    },
    {
        "name": "龙圩镇",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2737
    },
    {
        "name": "藤县",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2738
    },
    {
        "name": "藤州镇",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2739
    },
    {
        "name": "蒙山县",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2740
    },
    {
        "name": "蒙山镇",
        "cascade": 3,
        "parent_id": 217,
        "ID": 2741
    },
    {
        "name": "港北区",
        "cascade": 3,
        "parent_id": 218,
        "ID": 2742
    },
    {
        "name": "港南区",
        "cascade": 3,
        "parent_id": 218,
        "ID": 2743
    },
    {
        "name": "覃塘区",
        "cascade": 3,
        "parent_id": 218,
        "ID": 2744
    },
    {
        "name": "桂平市",
        "cascade": 3,
        "parent_id": 218,
        "ID": 2745
    },
    {
        "name": "平南县",
        "cascade": 3,
        "parent_id": 218,
        "ID": 2746
    },
    {
        "name": "平南镇",
        "cascade": 3,
        "parent_id": 218,
        "ID": 2747
    },
    {
        "name": "玉州区",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2748
    },
    {
        "name": "北流市",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2749
    },
    {
        "name": "兴业县",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2750
    },
    {
        "name": "石南镇",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2751
    },
    {
        "name": "容县",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2752
    },
    {
        "name": "容州镇",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2753
    },
    {
        "name": "陆川县",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2754
    },
    {
        "name": "陆城镇",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2755
    },
    {
        "name": "博白县",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2756
    },
    {
        "name": "博白镇",
        "cascade": 3,
        "parent_id": 219,
        "ID": 2757
    },
    {
        "name": "钦南区",
        "cascade": 3,
        "parent_id": 220,
        "ID": 2758
    },
    {
        "name": "钦北区",
        "cascade": 3,
        "parent_id": 220,
        "ID": 2759
    },
    {
        "name": "灵山县",
        "cascade": 3,
        "parent_id": 220,
        "ID": 2760
    },
    {
        "name": "灵城镇",
        "cascade": 3,
        "parent_id": 220,
        "ID": 2761
    },
    {
        "name": "浦北县",
        "cascade": 3,
        "parent_id": 220,
        "ID": 2762
    },
    {
        "name": "小江镇",
        "cascade": 3,
        "parent_id": 220,
        "ID": 2763
    },
    {
        "name": "海城区",
        "cascade": 3,
        "parent_id": 221,
        "ID": 2764
    },
    {
        "name": "银海区",
        "cascade": 3,
        "parent_id": 221,
        "ID": 2765
    },
    {
        "name": "铁山港区",
        "cascade": 3,
        "parent_id": 221,
        "ID": 2766
    },
    {
        "name": "合浦县",
        "cascade": 3,
        "parent_id": 221,
        "ID": 2767
    },
    {
        "name": "廉州镇",
        "cascade": 3,
        "parent_id": 221,
        "ID": 2768
    },
    {
        "name": "港口区",
        "cascade": 3,
        "parent_id": 222,
        "ID": 2769
    },
    {
        "name": "防城区",
        "cascade": 3,
        "parent_id": 222,
        "ID": 2770
    },
    {
        "name": "东兴市",
        "cascade": 3,
        "parent_id": 222,
        "ID": 2771
    },
    {
        "name": "上思县",
        "cascade": 3,
        "parent_id": 222,
        "ID": 2772
    },
    {
        "name": "思阳镇",
        "cascade": 3,
        "parent_id": 222,
        "ID": 2773
    },
    {
        "name": "江州区",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2774
    },
    {
        "name": "凭祥市",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2775
    },
    {
        "name": "扶绥县",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2776
    },
    {
        "name": "新宁镇",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2777
    },
    {
        "name": "大新县",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2778
    },
    {
        "name": "桃城镇",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2779
    },
    {
        "name": "天等县",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2780
    },
    {
        "name": "天等镇",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2781
    },
    {
        "name": "宁明县",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2782
    },
    {
        "name": "城中镇",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2783
    },
    {
        "name": "龙州县",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2784
    },
    {
        "name": "龙州镇",
        "cascade": 3,
        "parent_id": 223,
        "ID": 2785
    },
    {
        "name": "右江区",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2786
    },
    {
        "name": "田阳县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2787
    },
    {
        "name": "田州镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2788
    },
    {
        "name": "田东县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2789
    },
    {
        "name": "平马镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2790
    },
    {
        "name": "平果县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2791
    },
    {
        "name": "马头镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2792
    },
    {
        "name": "德保县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2793
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2794
    },
    {
        "name": "靖西县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2795
    },
    {
        "name": "新靖镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2796
    },
    {
        "name": "那坡县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2797
    },
    {
        "name": "城厢镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2798
    },
    {
        "name": "凌云县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2799
    },
    {
        "name": "泗城镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2800
    },
    {
        "name": "乐业县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2801
    },
    {
        "name": "同乐镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2802
    },
    {
        "name": "西林县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2803
    },
    {
        "name": "八达镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2804
    },
    {
        "name": "田林县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2805
    },
    {
        "name": "乐里镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2806
    },
    {
        "name": "隆林各族自治县",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2807
    },
    {
        "name": "新州镇",
        "cascade": 3,
        "parent_id": 224,
        "ID": 2808
    },
    {
        "name": "金城江区",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2809
    },
    {
        "name": "宜州市",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2810
    },
    {
        "name": "南丹县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2811
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2812
    },
    {
        "name": "天峨县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2813
    },
    {
        "name": "六排镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2814
    },
    {
        "name": "凤山县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2815
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2816
    },
    {
        "name": "东兰县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2817
    },
    {
        "name": "东兰镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2818
    },
    {
        "name": "巴马瑶族自治县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2819
    },
    {
        "name": "巴马镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2820
    },
    {
        "name": "都安瑶族自治县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2821
    },
    {
        "name": "安阳镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2822
    },
    {
        "name": "大化瑶族自治县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2823
    },
    {
        "name": "大化镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2824
    },
    {
        "name": "罗城仫佬族自治县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2825
    },
    {
        "name": "东门镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2826
    },
    {
        "name": "环江毛南族自治县",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2827
    },
    {
        "name": "思恩镇",
        "cascade": 3,
        "parent_id": 225,
        "ID": 2828
    },
    {
        "name": "兴宾区",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2829
    },
    {
        "name": "合山市",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2830
    },
    {
        "name": "象州县",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2831
    },
    {
        "name": "象州镇",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2832
    },
    {
        "name": "武宣县",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2833
    },
    {
        "name": "武宣镇",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2834
    },
    {
        "name": "忻城县",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2835
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2836
    },
    {
        "name": "金秀瑶族自治县",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2837
    },
    {
        "name": "金秀镇",
        "cascade": 3,
        "parent_id": 226,
        "ID": 2838
    },
    {
        "name": "八步区",
        "cascade": 3,
        "parent_id": 227,
        "ID": 2839
    },
    {
        "name": "昭平县",
        "cascade": 3,
        "parent_id": 227,
        "ID": 2840
    },
    {
        "name": "昭平镇",
        "cascade": 3,
        "parent_id": 227,
        "ID": 2841
    },
    {
        "name": "钟山县",
        "cascade": 3,
        "parent_id": 227,
        "ID": 2842
    },
    {
        "name": "钟山镇",
        "cascade": 3,
        "parent_id": 227,
        "ID": 2843
    },
    {
        "name": "富川瑶族自治县",
        "cascade": 3,
        "parent_id": 227,
        "ID": 2844
    },
    {
        "name": "富阳镇",
        "cascade": 3,
        "parent_id": 227,
        "ID": 2845
    },
    {
        "name": "龙华区",
        "cascade": 3,
        "parent_id": 228,
        "ID": 2846
    },
    {
        "name": "秀英区",
        "cascade": 3,
        "parent_id": 228,
        "ID": 2847
    },
    {
        "name": "琼山区",
        "cascade": 3,
        "parent_id": 228,
        "ID": 2848
    },
    {
        "name": "美兰区",
        "cascade": 3,
        "parent_id": 228,
        "ID": 2849
    },
    {
        "name": "文昌市",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2850
    },
    {
        "name": "琼海市",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2851
    },
    {
        "name": "万宁市",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2852
    },
    {
        "name": "五指山市",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2853
    },
    {
        "name": "东方市",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2854
    },
    {
        "name": "儋州市",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2855
    },
    {
        "name": "临高县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2856
    },
    {
        "name": "临城镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2857
    },
    {
        "name": "澄迈县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2858
    },
    {
        "name": "金江镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2859
    },
    {
        "name": "定安县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2860
    },
    {
        "name": "定城镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2861
    },
    {
        "name": "屯昌县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2862
    },
    {
        "name": "屯城镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2863
    },
    {
        "name": "昌江黎族自治县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2864
    },
    {
        "name": "石碌镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2865
    },
    {
        "name": "白沙黎族自治县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2866
    },
    {
        "name": "牙叉镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2867
    },
    {
        "name": "琼中黎族苗族自治县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2868
    },
    {
        "name": "营根镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2869
    },
    {
        "name": "陵水黎族自治县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2870
    },
    {
        "name": "椰林镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2871
    },
    {
        "name": "保亭黎族苗族自治县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2872
    },
    {
        "name": "保城镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2873
    },
    {
        "name": "乐东黎族自治县",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2874
    },
    {
        "name": "抱由镇",
        "cascade": 3,
        "parent_id": 229,
        "ID": 2875
    },
    {
        "name": "",
        "cascade": 3,
        "parent_id": 230,
        "ID": 2876
    },
    {
        "name": "青羊区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2877
    },
    {
        "name": "锦江区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2878
    },
    {
        "name": "金牛区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2879
    },
    {
        "name": "武侯区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2880
    },
    {
        "name": "成华区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2881
    },
    {
        "name": "龙泉驿区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2882
    },
    {
        "name": "青白江区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2883
    },
    {
        "name": "新都区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2884
    },
    {
        "name": "温江区",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2885
    },
    {
        "name": "都江堰市",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2886
    },
    {
        "name": "彭州市",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2887
    },
    {
        "name": "邛崃市",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2888
    },
    {
        "name": "崇州市",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2889
    },
    {
        "name": "金堂县",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2890
    },
    {
        "name": "赵镇",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2891
    },
    {
        "name": "双流县",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2892
    },
    {
        "name": "郫县",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2893
    },
    {
        "name": "郫筒镇",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2894
    },
    {
        "name": "大邑县",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2895
    },
    {
        "name": "晋原镇",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2896
    },
    {
        "name": "蒲江县",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2897
    },
    {
        "name": "鹤山镇",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2898
    },
    {
        "name": "新津县",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2899
    },
    {
        "name": "五津镇",
        "cascade": 3,
        "parent_id": 231,
        "ID": 2900
    },
    {
        "name": "市中区",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2901
    },
    {
        "name": "元坝区",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2902
    },
    {
        "name": "朝天区",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2903
    },
    {
        "name": "旺苍县",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2904
    },
    {
        "name": "东河镇",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2905
    },
    {
        "name": "青川县",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2906
    },
    {
        "name": "乔庄镇",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2907
    },
    {
        "name": "剑阁县",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2908
    },
    {
        "name": "下寺镇",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2909
    },
    {
        "name": "苍溪县",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2910
    },
    {
        "name": "陵江镇",
        "cascade": 3,
        "parent_id": 232,
        "ID": 2911
    },
    {
        "name": "涪城区",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2912
    },
    {
        "name": "游仙区",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2913
    },
    {
        "name": "江油市",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2914
    },
    {
        "name": "三台县",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2915
    },
    {
        "name": "潼川镇",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2916
    },
    {
        "name": "盐亭县",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2917
    },
    {
        "name": "云溪镇",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2918
    },
    {
        "name": "安县",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2919
    },
    {
        "name": "花荄镇",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2920
    },
    {
        "name": "梓潼县",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2921
    },
    {
        "name": "文昌镇",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2922
    },
    {
        "name": "北川羌族自治县",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2923
    },
    {
        "name": "曲山镇",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2924
    },
    {
        "name": "平武县",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2925
    },
    {
        "name": "龙安镇",
        "cascade": 3,
        "parent_id": 233,
        "ID": 2926
    },
    {
        "name": "旌阳区",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2927
    },
    {
        "name": "什邡市",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2928
    },
    {
        "name": "广汉市",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2929
    },
    {
        "name": "绵竹市",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2930
    },
    {
        "name": "罗江县",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2931
    },
    {
        "name": "罗江镇",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2932
    },
    {
        "name": "中江县",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2933
    },
    {
        "name": "凯江镇",
        "cascade": 3,
        "parent_id": 234,
        "ID": 2934
    },
    {
        "name": "顺庆区",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2935
    },
    {
        "name": "高坪区",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2936
    },
    {
        "name": "嘉陵区",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2937
    },
    {
        "name": "阆中市",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2938
    },
    {
        "name": "南部县",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2939
    },
    {
        "name": "南隆镇",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2940
    },
    {
        "name": "营山县",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2941
    },
    {
        "name": "朗池镇",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2942
    },
    {
        "name": "蓬安县",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2943
    },
    {
        "name": "周口镇",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2944
    },
    {
        "name": "仪陇县",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2945
    },
    {
        "name": "新政镇",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2946
    },
    {
        "name": "西充县",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2947
    },
    {
        "name": "晋城镇",
        "cascade": 3,
        "parent_id": 235,
        "ID": 2948
    },
    {
        "name": "广安区",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2949
    },
    {
        "name": "华蓥市",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2950
    },
    {
        "name": "岳池县",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2951
    },
    {
        "name": "九龙镇",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2952
    },
    {
        "name": "武胜县",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2953
    },
    {
        "name": "沿口镇",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2954
    },
    {
        "name": "邻水县",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2955
    },
    {
        "name": "鼎屏镇",
        "cascade": 3,
        "parent_id": 236,
        "ID": 2956
    },
    {
        "name": "船山区",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2957
    },
    {
        "name": "安居区",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2958
    },
    {
        "name": "蓬溪县",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2959
    },
    {
        "name": "赤城镇",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2960
    },
    {
        "name": "射洪县",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2961
    },
    {
        "name": "太和镇",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2962
    },
    {
        "name": "大英县",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2963
    },
    {
        "name": "蓬莱镇",
        "cascade": 3,
        "parent_id": 237,
        "ID": 2964
    },
    {
        "name": "市中区",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2965
    },
    {
        "name": "东兴区",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2966
    },
    {
        "name": "威远县",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2967
    },
    {
        "name": "严陵镇",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2968
    },
    {
        "name": "资中县",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2969
    },
    {
        "name": "重龙镇",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2970
    },
    {
        "name": "隆昌县",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2971
    },
    {
        "name": "金鹅镇",
        "cascade": 3,
        "parent_id": 238,
        "ID": 2972
    },
    {
        "name": "市中区",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2973
    },
    {
        "name": "沙湾区",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2974
    },
    {
        "name": "五通桥区",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2975
    },
    {
        "name": "金口河区",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2976
    },
    {
        "name": "峨眉山市",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2977
    },
    {
        "name": "犍为县",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2978
    },
    {
        "name": "玉津镇",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2979
    },
    {
        "name": "井研县",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2980
    },
    {
        "name": "研城镇",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2981
    },
    {
        "name": "夹江县",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2982
    },
    {
        "name": "漹城镇",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2983
    },
    {
        "name": "沐川县",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2984
    },
    {
        "name": "沐溪镇",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2985
    },
    {
        "name": "峨边彝族自治县",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2986
    },
    {
        "name": "沙坪镇",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2987
    },
    {
        "name": "马边彝族自治县",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2988
    },
    {
        "name": "民建镇",
        "cascade": 3,
        "parent_id": 239,
        "ID": 2989
    },
    {
        "name": "自流井区",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2990
    },
    {
        "name": "大安区",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2991
    },
    {
        "name": "贡井区",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2992
    },
    {
        "name": "沿滩区",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2993
    },
    {
        "name": "荣县",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2994
    },
    {
        "name": "旭阳镇",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2995
    },
    {
        "name": "富顺县",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2996
    },
    {
        "name": "富世镇",
        "cascade": 3,
        "parent_id": 240,
        "ID": 2997
    },
    {
        "name": "江阳区",
        "cascade": 3,
        "parent_id": 241,
        "ID": 2998
    },
    {
        "name": "纳溪区",
        "cascade": 3,
        "parent_id": 241,
        "ID": 2999
    },
    {
        "name": "龙马潭区",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3000
    },
    {
        "name": "泸县",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3001
    },
    {
        "name": "福集镇",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3002
    },
    {
        "name": "合江县",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3003
    },
    {
        "name": "合江镇",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3004
    },
    {
        "name": "叙永县",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3005
    },
    {
        "name": "叙永镇",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3006
    },
    {
        "name": "古蔺县",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3007
    },
    {
        "name": "古蔺镇",
        "cascade": 3,
        "parent_id": 241,
        "ID": 3008
    },
    {
        "name": "翠屏区",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3009
    },
    {
        "name": "宜宾县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3010
    },
    {
        "name": "柏溪镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3011
    },
    {
        "name": "南溪县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3012
    },
    {
        "name": "南溪镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3013
    },
    {
        "name": "江安县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3014
    },
    {
        "name": "江安镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3015
    },
    {
        "name": "长宁县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3016
    },
    {
        "name": "长宁镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3017
    },
    {
        "name": "高县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3018
    },
    {
        "name": "庆符镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3019
    },
    {
        "name": "筠连县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3020
    },
    {
        "name": "筠连镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3021
    },
    {
        "name": "珙县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3022
    },
    {
        "name": "巡场镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3023
    },
    {
        "name": "兴文县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3024
    },
    {
        "name": "中城镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3025
    },
    {
        "name": "屏山县",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3026
    },
    {
        "name": "屏山镇",
        "cascade": 3,
        "parent_id": 242,
        "ID": 3027
    },
    {
        "name": "东区",
        "cascade": 3,
        "parent_id": 243,
        "ID": 3028
    },
    {
        "name": "西区",
        "cascade": 3,
        "parent_id": 243,
        "ID": 3029
    },
    {
        "name": "仁和区",
        "cascade": 3,
        "parent_id": 243,
        "ID": 3030
    },
    {
        "name": "米易县",
        "cascade": 3,
        "parent_id": 243,
        "ID": 3031
    },
    {
        "name": "攀莲镇",
        "cascade": 3,
        "parent_id": 243,
        "ID": 3032
    },
    {
        "name": "盐边县",
        "cascade": 3,
        "parent_id": 243,
        "ID": 3033
    },
    {
        "name": "桐子林镇",
        "cascade": 3,
        "parent_id": 243,
        "ID": 3034
    },
    {
        "name": "巴州区",
        "cascade": 3,
        "parent_id": 244,
        "ID": 3035
    },
    {
        "name": "通江县",
        "cascade": 3,
        "parent_id": 244,
        "ID": 3036
    },
    {
        "name": "诺江镇",
        "cascade": 3,
        "parent_id": 244,
        "ID": 3037
    },
    {
        "name": "南江县",
        "cascade": 3,
        "parent_id": 244,
        "ID": 3038
    },
    {
        "name": "南江镇",
        "cascade": 3,
        "parent_id": 244,
        "ID": 3039
    },
    {
        "name": "平昌县",
        "cascade": 3,
        "parent_id": 244,
        "ID": 3040
    },
    {
        "name": "江口镇",
        "cascade": 3,
        "parent_id": 244,
        "ID": 3041
    },
    {
        "name": "通川区",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3042
    },
    {
        "name": "万源市",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3043
    },
    {
        "name": "达县",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3044
    },
    {
        "name": "南外镇",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3045
    },
    {
        "name": "宣汉县",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3046
    },
    {
        "name": "东乡镇",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3047
    },
    {
        "name": "开江县",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3048
    },
    {
        "name": "新宁镇",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3049
    },
    {
        "name": "大竹县",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3050
    },
    {
        "name": "竹阳镇",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3051
    },
    {
        "name": "渠县",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3052
    },
    {
        "name": "渠江镇",
        "cascade": 3,
        "parent_id": 245,
        "ID": 3053
    },
    {
        "name": "雁江区",
        "cascade": 3,
        "parent_id": 246,
        "ID": 3054
    },
    {
        "name": "简阳市",
        "cascade": 3,
        "parent_id": 246,
        "ID": 3055
    },
    {
        "name": "乐至县",
        "cascade": 3,
        "parent_id": 246,
        "ID": 3056
    },
    {
        "name": "天池镇",
        "cascade": 3,
        "parent_id": 246,
        "ID": 3057
    },
    {
        "name": "安岳县",
        "cascade": 3,
        "parent_id": 246,
        "ID": 3058
    },
    {
        "name": "岳阳镇",
        "cascade": 3,
        "parent_id": 246,
        "ID": 3059
    },
    {
        "name": "东坡区",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3060
    },
    {
        "name": "仁寿县",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3061
    },
    {
        "name": "文林镇",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3062
    },
    {
        "name": "彭山县",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3063
    },
    {
        "name": "凤鸣镇",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3064
    },
    {
        "name": "洪雅县",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3065
    },
    {
        "name": "洪川镇",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3066
    },
    {
        "name": "丹棱县",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3067
    },
    {
        "name": "丹棱镇",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3068
    },
    {
        "name": "青神县",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3069
    },
    {
        "name": "城厢镇",
        "cascade": 3,
        "parent_id": 247,
        "ID": 3070
    },
    {
        "name": "雨城区",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3071
    },
    {
        "name": "名山县",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3072
    },
    {
        "name": "蒙阳镇",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3073
    },
    {
        "name": "荥经县",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3074
    },
    {
        "name": "严道镇",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3075
    },
    {
        "name": "汉源县",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3076
    },
    {
        "name": "富林镇",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3077
    },
    {
        "name": "石棉县",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3078
    },
    {
        "name": "新棉镇",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3079
    },
    {
        "name": "天全县",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3080
    },
    {
        "name": "城厢镇",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3081
    },
    {
        "name": "芦山县",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3082
    },
    {
        "name": "芦阳镇",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3083
    },
    {
        "name": "宝兴县",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3084
    },
    {
        "name": "穆坪镇",
        "cascade": 3,
        "parent_id": 248,
        "ID": 3085
    },
    {
        "name": "马尔康县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3086
    },
    {
        "name": "马尔康镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3087
    },
    {
        "name": "汶川县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3088
    },
    {
        "name": "威州镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3089
    },
    {
        "name": "理县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3090
    },
    {
        "name": "杂谷脑镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3091
    },
    {
        "name": "茂县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3092
    },
    {
        "name": "凤仪镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3093
    },
    {
        "name": "松潘县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3094
    },
    {
        "name": "进安镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3095
    },
    {
        "name": "九寨沟县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3096
    },
    {
        "name": "永乐镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3097
    },
    {
        "name": "金川县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3098
    },
    {
        "name": "金川镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3099
    },
    {
        "name": "小金县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3100
    },
    {
        "name": "美兴镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3101
    },
    {
        "name": "黑水县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3102
    },
    {
        "name": "芦花镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3103
    },
    {
        "name": "壤塘县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3104
    },
    {
        "name": "壤柯镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3105
    },
    {
        "name": "阿坝县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3106
    },
    {
        "name": "阿坝镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3107
    },
    {
        "name": "若尔盖县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3108
    },
    {
        "name": "达扎寺镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3109
    },
    {
        "name": "红原县",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3110
    },
    {
        "name": "邛溪镇",
        "cascade": 3,
        "parent_id": 249,
        "ID": 3111
    },
    {
        "name": "康定县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3112
    },
    {
        "name": "炉城镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3113
    },
    {
        "name": "泸定县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3114
    },
    {
        "name": "泸桥镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3115
    },
    {
        "name": "丹巴县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3116
    },
    {
        "name": "章谷镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3117
    },
    {
        "name": "九龙县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3118
    },
    {
        "name": "呷尔镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3119
    },
    {
        "name": "雅江县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3120
    },
    {
        "name": "河口镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3121
    },
    {
        "name": "道孚县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3122
    },
    {
        "name": "鲜水镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3123
    },
    {
        "name": "炉霍县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3124
    },
    {
        "name": "新都镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3125
    },
    {
        "name": "甘孜县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3126
    },
    {
        "name": "甘孜镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3127
    },
    {
        "name": "新龙县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3128
    },
    {
        "name": "茹龙镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3129
    },
    {
        "name": "德格县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3130
    },
    {
        "name": "更庆镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3131
    },
    {
        "name": "白玉县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3132
    },
    {
        "name": "建设镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3133
    },
    {
        "name": "石渠县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3134
    },
    {
        "name": "尼呷镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3135
    },
    {
        "name": "色达县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3136
    },
    {
        "name": "色柯镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3137
    },
    {
        "name": "理塘县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3138
    },
    {
        "name": "高城镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3139
    },
    {
        "name": "巴塘县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3140
    },
    {
        "name": "夏邛镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3141
    },
    {
        "name": "乡城县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3142
    },
    {
        "name": "桑披镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3143
    },
    {
        "name": "稻城县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3144
    },
    {
        "name": "金珠镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3145
    },
    {
        "name": "得荣县",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3146
    },
    {
        "name": "松麦镇",
        "cascade": 3,
        "parent_id": 250,
        "ID": 3147
    },
    {
        "name": "西昌市",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3148
    },
    {
        "name": "盐源县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3149
    },
    {
        "name": "盐井镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3150
    },
    {
        "name": "德昌县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3151
    },
    {
        "name": "德州镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3152
    },
    {
        "name": "会理县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3153
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3154
    },
    {
        "name": "会东县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3155
    },
    {
        "name": "会东镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3156
    },
    {
        "name": "宁南县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3157
    },
    {
        "name": "披砂镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3158
    },
    {
        "name": "普格县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3159
    },
    {
        "name": "普基镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3160
    },
    {
        "name": "布拖县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3161
    },
    {
        "name": "特木里镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3162
    },
    {
        "name": "金阳县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3163
    },
    {
        "name": "天地坝镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3164
    },
    {
        "name": "昭觉县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3165
    },
    {
        "name": "新城镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3166
    },
    {
        "name": "喜德县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3167
    },
    {
        "name": "光明镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3168
    },
    {
        "name": "冕宁县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3169
    },
    {
        "name": "城厢镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3170
    },
    {
        "name": "越西县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3171
    },
    {
        "name": "越城镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3172
    },
    {
        "name": "甘洛县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3173
    },
    {
        "name": "新市坝镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3174
    },
    {
        "name": "美姑县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3175
    },
    {
        "name": "巴普镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3176
    },
    {
        "name": "雷波县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3177
    },
    {
        "name": "锦城镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3178
    },
    {
        "name": "木里藏族自治县",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3179
    },
    {
        "name": "乔瓦镇",
        "cascade": 3,
        "parent_id": 251,
        "ID": 3180
    },
    {
        "name": "乌当区",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3181
    },
    {
        "name": "南明区",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3182
    },
    {
        "name": "云岩区",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3183
    },
    {
        "name": "花溪区",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3184
    },
    {
        "name": "白云区",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3185
    },
    {
        "name": "小河区",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3186
    },
    {
        "name": "清镇市",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3187
    },
    {
        "name": "开阳县",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3188
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3189
    },
    {
        "name": "修文县",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3190
    },
    {
        "name": "龙场镇",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3191
    },
    {
        "name": "息烽县",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3192
    },
    {
        "name": "永靖镇",
        "cascade": 3,
        "parent_id": 252,
        "ID": 3193
    },
    {
        "name": "钟山区",
        "cascade": 3,
        "parent_id": 253,
        "ID": 3194
    },
    {
        "name": "盘县",
        "cascade": 3,
        "parent_id": 253,
        "ID": 3195
    },
    {
        "name": "红果镇",
        "cascade": 3,
        "parent_id": 253,
        "ID": 3196
    },
    {
        "name": "六枝特区",
        "cascade": 3,
        "parent_id": 253,
        "ID": 3197
    },
    {
        "name": "平寨镇",
        "cascade": 3,
        "parent_id": 253,
        "ID": 3198
    },
    {
        "name": "水城县",
        "cascade": 3,
        "parent_id": 253,
        "ID": 3199
    },
    {
        "name": "红花岗区",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3200
    },
    {
        "name": "汇川区",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3201
    },
    {
        "name": "赤水市",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3202
    },
    {
        "name": "仁怀市",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3203
    },
    {
        "name": "遵义县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3204
    },
    {
        "name": "南白镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3205
    },
    {
        "name": "桐梓县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3206
    },
    {
        "name": "娄山关镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3207
    },
    {
        "name": "绥阳县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3208
    },
    {
        "name": "洋川镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3209
    },
    {
        "name": "正安县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3210
    },
    {
        "name": "凤仪镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3211
    },
    {
        "name": "凤冈县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3212
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3213
    },
    {
        "name": "湄潭县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3214
    },
    {
        "name": "湄江镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3215
    },
    {
        "name": "余庆县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3216
    },
    {
        "name": "白泥镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3217
    },
    {
        "name": "习水县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3218
    },
    {
        "name": "东皇镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3219
    },
    {
        "name": "道真仡佬族苗族自治县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3220
    },
    {
        "name": "玉溪镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3221
    },
    {
        "name": "务川仡佬族苗族自治县",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3222
    },
    {
        "name": "都濡镇",
        "cascade": 3,
        "parent_id": 254,
        "ID": 3223
    },
    {
        "name": "西秀区",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3224
    },
    {
        "name": "平坝县",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3225
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3226
    },
    {
        "name": "普定县",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3227
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3228
    },
    {
        "name": "关岭布依族苗族自治县",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3229
    },
    {
        "name": "关索镇",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3230
    },
    {
        "name": "镇宁布依族苗族自治县",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3231
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3232
    },
    {
        "name": "紫云苗族布依族自治县",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3233
    },
    {
        "name": "松山镇",
        "cascade": 3,
        "parent_id": 255,
        "ID": 3234
    },
    {
        "name": "毕节市",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3235
    },
    {
        "name": "大方县",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3236
    },
    {
        "name": "大方镇",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3237
    },
    {
        "name": "黔西县",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3238
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3239
    },
    {
        "name": "金沙县",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3240
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3241
    },
    {
        "name": "织金县",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3242
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3243
    },
    {
        "name": "纳雍县",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3244
    },
    {
        "name": "雍熙镇",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3245
    },
    {
        "name": "赫章县",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3246
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3247
    },
    {
        "name": "威宁彝族回族苗族自治县",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3248
    },
    {
        "name": "草海镇",
        "cascade": 3,
        "parent_id": 256,
        "ID": 3249
    },
    {
        "name": "铜仁市",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3250
    },
    {
        "name": "江口县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3251
    },
    {
        "name": "双江镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3252
    },
    {
        "name": "石阡县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3253
    },
    {
        "name": "汤山镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3254
    },
    {
        "name": "思南县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3255
    },
    {
        "name": "思唐镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3256
    },
    {
        "name": "德江县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3257
    },
    {
        "name": "青龙镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3258
    },
    {
        "name": "玉屏侗族自治县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3259
    },
    {
        "name": "平溪镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3260
    },
    {
        "name": "印江土家族苗族自治县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3261
    },
    {
        "name": "峨岭镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3262
    },
    {
        "name": "沿河土家族自治县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3263
    },
    {
        "name": "和平镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3264
    },
    {
        "name": "松桃苗族自治县",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3265
    },
    {
        "name": "蓼皋镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3266
    },
    {
        "name": "万山特区",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3267
    },
    {
        "name": "万山镇",
        "cascade": 3,
        "parent_id": 257,
        "ID": 3268
    },
    {
        "name": "凯里市",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3269
    },
    {
        "name": "黄平县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3270
    },
    {
        "name": "新州镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3271
    },
    {
        "name": "施秉县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3272
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3273
    },
    {
        "name": "三穗县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3274
    },
    {
        "name": "八弓镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3275
    },
    {
        "name": "镇远县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3276
    },
    {
        "name": "阳镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3277
    },
    {
        "name": "岑巩县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3278
    },
    {
        "name": "思旸镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3279
    },
    {
        "name": "天柱县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3280
    },
    {
        "name": "凤城镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3281
    },
    {
        "name": "锦屏县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3282
    },
    {
        "name": "三江镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3283
    },
    {
        "name": "剑河县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3284
    },
    {
        "name": "革东镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3285
    },
    {
        "name": "台江县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3286
    },
    {
        "name": "台拱镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3287
    },
    {
        "name": "黎平县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3288
    },
    {
        "name": "德凤镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3289
    },
    {
        "name": "榕江县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3290
    },
    {
        "name": "古州镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3291
    },
    {
        "name": "从江县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3292
    },
    {
        "name": "丙妹镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3293
    },
    {
        "name": "雷山县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3294
    },
    {
        "name": "丹江镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3295
    },
    {
        "name": "麻江县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3296
    },
    {
        "name": "杏山镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3297
    },
    {
        "name": "丹寨县",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3298
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 258,
        "ID": 3299
    },
    {
        "name": "都匀市",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3300
    },
    {
        "name": "福泉市",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3301
    },
    {
        "name": "荔波县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3302
    },
    {
        "name": "玉屏镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3303
    },
    {
        "name": "贵定县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3304
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3305
    },
    {
        "name": "瓮安县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3306
    },
    {
        "name": "雍阳镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3307
    },
    {
        "name": "独山县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3308
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3309
    },
    {
        "name": "平塘县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3310
    },
    {
        "name": "平湖镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3311
    },
    {
        "name": "罗甸县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3312
    },
    {
        "name": "龙坪镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3313
    },
    {
        "name": "长顺县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3314
    },
    {
        "name": "长寨镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3315
    },
    {
        "name": "龙里县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3316
    },
    {
        "name": "龙山镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3317
    },
    {
        "name": "惠水县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3318
    },
    {
        "name": "和平镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3319
    },
    {
        "name": "三都水族自治县",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3320
    },
    {
        "name": "三合镇",
        "cascade": 3,
        "parent_id": 259,
        "ID": 3321
    },
    {
        "name": "兴义市",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3322
    },
    {
        "name": "兴仁县",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3323
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3324
    },
    {
        "name": "普安县",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3325
    },
    {
        "name": "盘水镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3326
    },
    {
        "name": "晴隆县",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3327
    },
    {
        "name": "莲城镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3328
    },
    {
        "name": "贞丰县",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3329
    },
    {
        "name": "珉谷镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3330
    },
    {
        "name": "望谟县",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3331
    },
    {
        "name": "复兴镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3332
    },
    {
        "name": "册亨县",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3333
    },
    {
        "name": "者楼镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3334
    },
    {
        "name": "安龙县",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3335
    },
    {
        "name": "新安镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3336
    },
    {
        "name": "剑河县人民政府驻地由柳川镇迁至革东镇",
        "cascade": 3,
        "parent_id": 260,
        "ID": 3337
    },
    {
        "name": "盘龙区",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3338
    },
    {
        "name": "五华区",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3339
    },
    {
        "name": "官渡区",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3340
    },
    {
        "name": "西山区",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3341
    },
    {
        "name": "东川区",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3342
    },
    {
        "name": "安宁市",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3343
    },
    {
        "name": "呈贡县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3344
    },
    {
        "name": "龙城镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3345
    },
    {
        "name": "晋宁县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3346
    },
    {
        "name": "昆阳镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3347
    },
    {
        "name": "富民县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3348
    },
    {
        "name": "永定镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3349
    },
    {
        "name": "宜良县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3350
    },
    {
        "name": "匡远镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3351
    },
    {
        "name": "嵩明县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3352
    },
    {
        "name": "嵩阳镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3353
    },
    {
        "name": "石林彝族自治县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3354
    },
    {
        "name": "鹿阜镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3355
    },
    {
        "name": "禄劝彝族苗族自治县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3356
    },
    {
        "name": "屏山镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3357
    },
    {
        "name": "寻甸回族彝族自治县",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3358
    },
    {
        "name": "仁德镇",
        "cascade": 3,
        "parent_id": 261,
        "ID": 3359
    },
    {
        "name": "麒麟区",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3360
    },
    {
        "name": "宣威市",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3361
    },
    {
        "name": "马龙县",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3362
    },
    {
        "name": "通泉镇",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3363
    },
    {
        "name": "沾益县",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3364
    },
    {
        "name": "西平镇",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3365
    },
    {
        "name": "富源县",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3366
    },
    {
        "name": "中安镇",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3367
    },
    {
        "name": "罗平县",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3368
    },
    {
        "name": "罗雄镇",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3369
    },
    {
        "name": "师宗县",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3370
    },
    {
        "name": "丹凤镇",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3371
    },
    {
        "name": "陆良县",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3372
    },
    {
        "name": "中枢镇",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3373
    },
    {
        "name": "会泽县",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3374
    },
    {
        "name": "金钟镇",
        "cascade": 3,
        "parent_id": 262,
        "ID": 3375
    },
    {
        "name": "红塔区",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3376
    },
    {
        "name": "江川县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3377
    },
    {
        "name": "大街镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3378
    },
    {
        "name": "澄江县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3379
    },
    {
        "name": "凤麓镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3380
    },
    {
        "name": "通海县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3381
    },
    {
        "name": "秀山镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3382
    },
    {
        "name": "华宁县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3383
    },
    {
        "name": "宁州镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3384
    },
    {
        "name": "易门县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3385
    },
    {
        "name": "龙泉镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3386
    },
    {
        "name": "峨山彝族自治县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3387
    },
    {
        "name": "双江镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3388
    },
    {
        "name": "新平彝族傣族自治县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3389
    },
    {
        "name": "桂山镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3390
    },
    {
        "name": "元江哈尼族彝族傣族自治县",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3391
    },
    {
        "name": "澧江镇",
        "cascade": 3,
        "parent_id": 263,
        "ID": 3392
    },
    {
        "name": "隆阳区",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3393
    },
    {
        "name": "施甸县",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3394
    },
    {
        "name": "甸阳镇",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3395
    },
    {
        "name": "腾冲县",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3396
    },
    {
        "name": "腾越镇",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3397
    },
    {
        "name": "龙陵县",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3398
    },
    {
        "name": "龙山镇",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3399
    },
    {
        "name": "昌宁县",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3400
    },
    {
        "name": "田园镇",
        "cascade": 3,
        "parent_id": 264,
        "ID": 3401
    },
    {
        "name": "昭阳区",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3402
    },
    {
        "name": "鲁甸县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3403
    },
    {
        "name": "文屏镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3404
    },
    {
        "name": "巧家县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3405
    },
    {
        "name": "新华镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3406
    },
    {
        "name": "盐津县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3407
    },
    {
        "name": "盐井镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3408
    },
    {
        "name": "大关县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3409
    },
    {
        "name": "翠华镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3410
    },
    {
        "name": "永善县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3411
    },
    {
        "name": "溪落渡镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3412
    },
    {
        "name": "绥江县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3413
    },
    {
        "name": "中城镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3414
    },
    {
        "name": "镇雄县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3415
    },
    {
        "name": "乌峰镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3416
    },
    {
        "name": "彝良县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3417
    },
    {
        "name": "角奎镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3418
    },
    {
        "name": "威信县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3419
    },
    {
        "name": "扎西镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3420
    },
    {
        "name": "水富县",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3421
    },
    {
        "name": "向家坝镇",
        "cascade": 3,
        "parent_id": 265,
        "ID": 3422
    },
    {
        "name": "古城区",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3423
    },
    {
        "name": "永胜县",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3424
    },
    {
        "name": "永北镇",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3425
    },
    {
        "name": "华坪县",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3426
    },
    {
        "name": "中心镇",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3427
    },
    {
        "name": "玉龙纳西族自治县",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3428
    },
    {
        "name": "黄山镇",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3429
    },
    {
        "name": "宁蒗彝族自治县",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3430
    },
    {
        "name": "大兴镇",
        "cascade": 3,
        "parent_id": 266,
        "ID": 3431
    },
    {
        "name": "翠云区",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3432
    },
    {
        "name": "普洱哈尼族彝族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3433
    },
    {
        "name": "宁洱镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3434
    },
    {
        "name": "墨江哈尼族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3435
    },
    {
        "name": "联珠镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3436
    },
    {
        "name": "景东彝族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3437
    },
    {
        "name": "锦屏镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3438
    },
    {
        "name": "景谷傣族彝族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3439
    },
    {
        "name": "威远镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3440
    },
    {
        "name": "镇沅彝族哈尼族拉祜族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3441
    },
    {
        "name": "恩乐镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3442
    },
    {
        "name": "江城哈尼族彝族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3443
    },
    {
        "name": "勐烈镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3444
    },
    {
        "name": "孟连傣族拉祜族佤族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3445
    },
    {
        "name": "娜允镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3446
    },
    {
        "name": "澜沧拉祜族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3447
    },
    {
        "name": "勐朗镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3448
    },
    {
        "name": "西盟佤族自治县",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3449
    },
    {
        "name": "勐梭镇",
        "cascade": 3,
        "parent_id": 267,
        "ID": 3450
    },
    {
        "name": "临翔区",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3451
    },
    {
        "name": "凤庆县",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3452
    },
    {
        "name": "凤山镇",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3453
    },
    {
        "name": "云县",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3454
    },
    {
        "name": "爱华镇",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3455
    },
    {
        "name": "永德县",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3456
    },
    {
        "name": "德党镇",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3457
    },
    {
        "name": "镇康县",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3458
    },
    {
        "name": "南伞镇",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3459
    },
    {
        "name": "双江拉祜族佤族布朗族傣族自治县",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3460
    },
    {
        "name": "勐勐镇",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3461
    },
    {
        "name": "耿马傣族佤族自治县",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3462
    },
    {
        "name": "耿马镇",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3463
    },
    {
        "name": "沧源佤族自治县",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3464
    },
    {
        "name": "勐董镇",
        "cascade": 3,
        "parent_id": 268,
        "ID": 3465
    },
    {
        "name": "潞西市",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3466
    },
    {
        "name": "瑞丽市",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3467
    },
    {
        "name": "梁河县",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3468
    },
    {
        "name": "遮岛镇",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3469
    },
    {
        "name": "盈江县",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3470
    },
    {
        "name": "平原镇",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3471
    },
    {
        "name": "陇川县",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3472
    },
    {
        "name": "章凤镇",
        "cascade": 3,
        "parent_id": 269,
        "ID": 3473
    },
    {
        "name": "泸水县六库镇",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3474
    },
    {
        "name": "泸水县",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3475
    },
    {
        "name": "六库镇",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3476
    },
    {
        "name": "福贡县",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3477
    },
    {
        "name": "上帕镇",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3478
    },
    {
        "name": "贡山独龙族怒族自治县",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3479
    },
    {
        "name": "茨开镇",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3480
    },
    {
        "name": "兰坪白族普米族自治县",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3481
    },
    {
        "name": "金顶镇",
        "cascade": 3,
        "parent_id": 270,
        "ID": 3482
    },
    {
        "name": "香格里拉县",
        "cascade": 3,
        "parent_id": 271,
        "ID": 3483
    },
    {
        "name": "建塘镇",
        "cascade": 3,
        "parent_id": 271,
        "ID": 3484
    },
    {
        "name": "德钦县",
        "cascade": 3,
        "parent_id": 271,
        "ID": 3485
    },
    {
        "name": "升平镇",
        "cascade": 3,
        "parent_id": 271,
        "ID": 3486
    },
    {
        "name": "维西傈僳族自治县",
        "cascade": 3,
        "parent_id": 271,
        "ID": 3487
    },
    {
        "name": "保和镇",
        "cascade": 3,
        "parent_id": 271,
        "ID": 3488
    },
    {
        "name": "大理市",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3489
    },
    {
        "name": "祥云县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3490
    },
    {
        "name": "祥城镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3491
    },
    {
        "name": "宾川县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3492
    },
    {
        "name": "金牛镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3493
    },
    {
        "name": "弥渡县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3494
    },
    {
        "name": "弥城镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3495
    },
    {
        "name": "永平县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3496
    },
    {
        "name": "博南镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3497
    },
    {
        "name": "云龙县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3498
    },
    {
        "name": "诺邓镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3499
    },
    {
        "name": "洱源县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3500
    },
    {
        "name": "茈碧湖镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3501
    },
    {
        "name": "剑川县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3502
    },
    {
        "name": "金华镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3503
    },
    {
        "name": "鹤庆县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3504
    },
    {
        "name": "云鹤镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3505
    },
    {
        "name": "漾濞彝族自治县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3506
    },
    {
        "name": "苍山西镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3507
    },
    {
        "name": "南涧彝族自治县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3508
    },
    {
        "name": "南涧镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3509
    },
    {
        "name": "巍山彝族回族自治县",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3510
    },
    {
        "name": "南诏镇",
        "cascade": 3,
        "parent_id": 272,
        "ID": 3511
    },
    {
        "name": "楚雄市",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3512
    },
    {
        "name": "双柏县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3513
    },
    {
        "name": "妥甸镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3514
    },
    {
        "name": "牟定县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3515
    },
    {
        "name": "共和镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3516
    },
    {
        "name": "南华县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3517
    },
    {
        "name": "龙川镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3518
    },
    {
        "name": "姚安县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3519
    },
    {
        "name": "栋川镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3520
    },
    {
        "name": "大姚县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3521
    },
    {
        "name": "金碧镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3522
    },
    {
        "name": "永仁县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3523
    },
    {
        "name": "永定镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3524
    },
    {
        "name": "元谋县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3525
    },
    {
        "name": "元马镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3526
    },
    {
        "name": "武定县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3527
    },
    {
        "name": "狮山镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3528
    },
    {
        "name": "禄丰县",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3529
    },
    {
        "name": "金山镇",
        "cascade": 3,
        "parent_id": 273,
        "ID": 3530
    },
    {
        "name": "蒙自县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3531
    },
    {
        "name": "文澜镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3532
    },
    {
        "name": "个旧市",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3533
    },
    {
        "name": "开远市",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3534
    },
    {
        "name": "绿春县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3535
    },
    {
        "name": "大兴镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3536
    },
    {
        "name": "建水县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3537
    },
    {
        "name": "临安镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3538
    },
    {
        "name": "石屏县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3539
    },
    {
        "name": "异龙镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3540
    },
    {
        "name": "弥勒县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3541
    },
    {
        "name": "弥阳镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3542
    },
    {
        "name": "泸西县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3543
    },
    {
        "name": "中枢镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3544
    },
    {
        "name": "元阳县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3545
    },
    {
        "name": "南沙镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3546
    },
    {
        "name": "红河县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3547
    },
    {
        "name": "迤萨镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3548
    },
    {
        "name": "金平苗族瑶族傣族自治县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3549
    },
    {
        "name": "金河镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3550
    },
    {
        "name": "河口瑶族自治县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3551
    },
    {
        "name": "河口镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3552
    },
    {
        "name": "屏边苗族自治县",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3553
    },
    {
        "name": "玉屏镇",
        "cascade": 3,
        "parent_id": 274,
        "ID": 3554
    },
    {
        "name": "文山县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3555
    },
    {
        "name": "开化镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3556
    },
    {
        "name": "砚山县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3557
    },
    {
        "name": "江那镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3558
    },
    {
        "name": "西畴县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3559
    },
    {
        "name": "西洒镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3560
    },
    {
        "name": "麻栗坡县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3561
    },
    {
        "name": "麻栗镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3562
    },
    {
        "name": "马关县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3563
    },
    {
        "name": "马白镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3564
    },
    {
        "name": "丘北县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3565
    },
    {
        "name": "锦屏镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3566
    },
    {
        "name": "广南县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3567
    },
    {
        "name": "莲城镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3568
    },
    {
        "name": "富宁县",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3569
    },
    {
        "name": "新华镇",
        "cascade": 3,
        "parent_id": 275,
        "ID": 3570
    },
    {
        "name": "景洪市",
        "cascade": 3,
        "parent_id": 276,
        "ID": 3571
    },
    {
        "name": "勐海县",
        "cascade": 3,
        "parent_id": 276,
        "ID": 3572
    },
    {
        "name": "勐海镇",
        "cascade": 3,
        "parent_id": 276,
        "ID": 3573
    },
    {
        "name": "勐腊县",
        "cascade": 3,
        "parent_id": 276,
        "ID": 3574
    },
    {
        "name": "勐腊镇",
        "cascade": 3,
        "parent_id": 276,
        "ID": 3575
    },
    {
        "name": "城关区",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3576
    },
    {
        "name": "林周县",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3577
    },
    {
        "name": "甘丹曲果镇",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3578
    },
    {
        "name": "当雄县",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3579
    },
    {
        "name": "当曲卡镇",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3580
    },
    {
        "name": "尼木县",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3581
    },
    {
        "name": "塔荣镇",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3582
    },
    {
        "name": "曲水县",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3583
    },
    {
        "name": "曲水镇",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3584
    },
    {
        "name": "堆龙德庆县",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3585
    },
    {
        "name": "东嘎镇",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3586
    },
    {
        "name": "达孜县",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3587
    },
    {
        "name": "德庆镇",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3588
    },
    {
        "name": "墨竹工卡县",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3589
    },
    {
        "name": "工卡镇",
        "cascade": 3,
        "parent_id": 277,
        "ID": 3590
    },
    {
        "name": "那曲县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3591
    },
    {
        "name": "那曲镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3592
    },
    {
        "name": "嘉黎县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3593
    },
    {
        "name": "阿扎镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3594
    },
    {
        "name": "比如县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3595
    },
    {
        "name": "比如镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3596
    },
    {
        "name": "聂荣县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3597
    },
    {
        "name": "聂荣镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3598
    },
    {
        "name": "安多县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3599
    },
    {
        "name": "帕那镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3600
    },
    {
        "name": "申扎县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3601
    },
    {
        "name": "申扎镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3602
    },
    {
        "name": "索县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3603
    },
    {
        "name": "亚拉镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3604
    },
    {
        "name": "班戈县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3605
    },
    {
        "name": "普保镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3606
    },
    {
        "name": "巴青县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3607
    },
    {
        "name": "拉西镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3608
    },
    {
        "name": "尼玛县",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3609
    },
    {
        "name": "尼玛镇",
        "cascade": 3,
        "parent_id": 278,
        "ID": 3610
    },
    {
        "name": "昌都县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3611
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3612
    },
    {
        "name": "江达县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3613
    },
    {
        "name": "江达镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3614
    },
    {
        "name": "贡觉县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3615
    },
    {
        "name": "莫洛镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3616
    },
    {
        "name": "类乌齐县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3617
    },
    {
        "name": "桑多镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3618
    },
    {
        "name": "丁青县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3619
    },
    {
        "name": "丁青镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3620
    },
    {
        "name": "察雅县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3621
    },
    {
        "name": "烟多镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3622
    },
    {
        "name": "八宿县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3623
    },
    {
        "name": "白玛镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3624
    },
    {
        "name": "左贡县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3625
    },
    {
        "name": "旺达镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3626
    },
    {
        "name": "芒康县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3627
    },
    {
        "name": "嘎托镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3628
    },
    {
        "name": "洛隆县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3629
    },
    {
        "name": "孜托镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3630
    },
    {
        "name": "边坝县",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3631
    },
    {
        "name": "草卡镇",
        "cascade": 3,
        "parent_id": 279,
        "ID": 3632
    },
    {
        "name": "林芝县",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3633
    },
    {
        "name": "八一镇",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3634
    },
    {
        "name": "工布江达县",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3635
    },
    {
        "name": "工布江达镇",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3636
    },
    {
        "name": "米林县",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3637
    },
    {
        "name": "米林镇",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3638
    },
    {
        "name": "墨脱县",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3639
    },
    {
        "name": "墨脱镇",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3640
    },
    {
        "name": "波密县",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3641
    },
    {
        "name": "扎木镇",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3642
    },
    {
        "name": "察隅县",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3643
    },
    {
        "name": "竹瓦根镇",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3644
    },
    {
        "name": "朗县",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3645
    },
    {
        "name": "朗镇",
        "cascade": 3,
        "parent_id": 280,
        "ID": 3646
    },
    {
        "name": "乃东县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3647
    },
    {
        "name": "泽当镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3648
    },
    {
        "name": "扎囊县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3649
    },
    {
        "name": "扎塘镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3650
    },
    {
        "name": "贡嘎县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3651
    },
    {
        "name": "吉雄镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3652
    },
    {
        "name": "桑日县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3653
    },
    {
        "name": "桑日镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3654
    },
    {
        "name": "琼结县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3655
    },
    {
        "name": "琼结镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3656
    },
    {
        "name": "曲松县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3657
    },
    {
        "name": "曲松镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3658
    },
    {
        "name": "措美县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3659
    },
    {
        "name": "措美镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3660
    },
    {
        "name": "洛扎县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3661
    },
    {
        "name": "洛扎镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3662
    },
    {
        "name": "加查县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3663
    },
    {
        "name": "安绕镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3664
    },
    {
        "name": "隆子县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3665
    },
    {
        "name": "隆子镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3666
    },
    {
        "name": "错那县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3667
    },
    {
        "name": "错那镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3668
    },
    {
        "name": "浪卡子县",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3669
    },
    {
        "name": "浪卡子镇",
        "cascade": 3,
        "parent_id": 281,
        "ID": 3670
    },
    {
        "name": "日喀则市",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3671
    },
    {
        "name": "南木林县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3672
    },
    {
        "name": "南木林镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3673
    },
    {
        "name": "江孜县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3674
    },
    {
        "name": "江孜镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3675
    },
    {
        "name": "定日县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3676
    },
    {
        "name": "协格尔镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3677
    },
    {
        "name": "萨迦县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3678
    },
    {
        "name": "萨迦镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3679
    },
    {
        "name": "拉孜县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3680
    },
    {
        "name": "曲下镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3681
    },
    {
        "name": "昂仁县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3682
    },
    {
        "name": "卡嘎镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3683
    },
    {
        "name": "谢通门县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3684
    },
    {
        "name": "卡嘎镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3685
    },
    {
        "name": "白朗县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3686
    },
    {
        "name": "洛江镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3687
    },
    {
        "name": "仁布县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3688
    },
    {
        "name": "德吉林镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3689
    },
    {
        "name": "康马县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3690
    },
    {
        "name": "康马镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3691
    },
    {
        "name": "定结县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3692
    },
    {
        "name": "江嘎镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3693
    },
    {
        "name": "仲巴县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3694
    },
    {
        "name": "拉让乡",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3695
    },
    {
        "name": "亚东县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3696
    },
    {
        "name": "下司马镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3697
    },
    {
        "name": "吉隆县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3698
    },
    {
        "name": "宗嘎镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3699
    },
    {
        "name": "聂拉木县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3700
    },
    {
        "name": "聂拉木镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3701
    },
    {
        "name": "萨嘎县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3702
    },
    {
        "name": "加加镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3703
    },
    {
        "name": "岗巴县",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3704
    },
    {
        "name": "岗巴镇",
        "cascade": 3,
        "parent_id": 282,
        "ID": 3705
    },
    {
        "name": "噶尔县",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3706
    },
    {
        "name": "狮泉河镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3707
    },
    {
        "name": "普兰县",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3708
    },
    {
        "name": "普兰镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3709
    },
    {
        "name": "札达县",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3710
    },
    {
        "name": "托林镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3711
    },
    {
        "name": "日土县",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3712
    },
    {
        "name": "日土镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3713
    },
    {
        "name": "革吉县",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3714
    },
    {
        "name": "革吉镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3715
    },
    {
        "name": "改则县",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3716
    },
    {
        "name": "改则镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3717
    },
    {
        "name": "措勤县",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3718
    },
    {
        "name": "措勤镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3719
    },
    {
        "name": "林芝县人民政府驻地由林芝镇迁至八一镇",
        "cascade": 3,
        "parent_id": 283,
        "ID": 3720
    },
    {
        "name": "莲湖区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3721
    },
    {
        "name": "新城区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3722
    },
    {
        "name": "碑林区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3723
    },
    {
        "name": "灞桥区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3724
    },
    {
        "name": "未央区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3725
    },
    {
        "name": "雁塔区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3726
    },
    {
        "name": "阎良区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3727
    },
    {
        "name": "临潼区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3728
    },
    {
        "name": "长安区",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3729
    },
    {
        "name": "蓝田县",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3730
    },
    {
        "name": "蓝关镇",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3731
    },
    {
        "name": "周至县",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3732
    },
    {
        "name": "二曲镇",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3733
    },
    {
        "name": "户县",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3734
    },
    {
        "name": "甘亭镇",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3735
    },
    {
        "name": "高陵县",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3736
    },
    {
        "name": "鹿苑镇",
        "cascade": 3,
        "parent_id": 284,
        "ID": 3737
    },
    {
        "name": "宝塔区",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3738
    },
    {
        "name": "延长县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3739
    },
    {
        "name": "七里村镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3740
    },
    {
        "name": "延川县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3741
    },
    {
        "name": "延川镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3742
    },
    {
        "name": "子长县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3743
    },
    {
        "name": "瓦窑堡镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3744
    },
    {
        "name": "安塞县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3745
    },
    {
        "name": "真武洞镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3746
    },
    {
        "name": "志丹县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3747
    },
    {
        "name": "保安镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3748
    },
    {
        "name": "吴起县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3749
    },
    {
        "name": "吴旗镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3750
    },
    {
        "name": "甘泉县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3751
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3752
    },
    {
        "name": "富县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3753
    },
    {
        "name": "富城镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3754
    },
    {
        "name": "洛川县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3755
    },
    {
        "name": "凤栖镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3756
    },
    {
        "name": "宜川县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3757
    },
    {
        "name": "丹州镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3758
    },
    {
        "name": "黄龙县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3759
    },
    {
        "name": "石堡镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3760
    },
    {
        "name": "黄陵县",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3761
    },
    {
        "name": "桥山镇",
        "cascade": 3,
        "parent_id": 285,
        "ID": 3762
    },
    {
        "name": "耀州区",
        "cascade": 3,
        "parent_id": 286,
        "ID": 3763
    },
    {
        "name": "王益区",
        "cascade": 3,
        "parent_id": 286,
        "ID": 3764
    },
    {
        "name": "印台区",
        "cascade": 3,
        "parent_id": 286,
        "ID": 3765
    },
    {
        "name": "宜君县",
        "cascade": 3,
        "parent_id": 286,
        "ID": 3766
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 286,
        "ID": 3767
    },
    {
        "name": "临渭区",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3768
    },
    {
        "name": "华阴市",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3769
    },
    {
        "name": "韩城市",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3770
    },
    {
        "name": "华县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3771
    },
    {
        "name": "华州镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3772
    },
    {
        "name": "潼关县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3773
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3774
    },
    {
        "name": "大荔县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3775
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3776
    },
    {
        "name": "蒲城县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3777
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3778
    },
    {
        "name": "澄城县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3779
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3780
    },
    {
        "name": "白水县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3781
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3782
    },
    {
        "name": "合阳县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3783
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3784
    },
    {
        "name": "富平县",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3785
    },
    {
        "name": "窦村镇",
        "cascade": 3,
        "parent_id": 287,
        "ID": 3786
    },
    {
        "name": "秦都区",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3787
    },
    {
        "name": "杨陵区",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3788
    },
    {
        "name": "渭城区",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3789
    },
    {
        "name": "兴平市",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3790
    },
    {
        "name": "三原县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3791
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3792
    },
    {
        "name": "泾阳县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3793
    },
    {
        "name": "泾干镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3794
    },
    {
        "name": "乾县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3795
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3796
    },
    {
        "name": "礼泉县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3797
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3798
    },
    {
        "name": "永寿县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3799
    },
    {
        "name": "监军镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3800
    },
    {
        "name": "彬县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3801
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3802
    },
    {
        "name": "长武县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3803
    },
    {
        "name": "昭仁镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3804
    },
    {
        "name": "旬邑县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3805
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3806
    },
    {
        "name": "淳化县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3807
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3808
    },
    {
        "name": "武功县",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3809
    },
    {
        "name": "普集镇",
        "cascade": 3,
        "parent_id": 288,
        "ID": 3810
    },
    {
        "name": "渭滨区",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3811
    },
    {
        "name": "金台区",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3812
    },
    {
        "name": "陈仓区",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3813
    },
    {
        "name": "凤翔县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3814
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3815
    },
    {
        "name": "岐山县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3816
    },
    {
        "name": "凤鸣镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3817
    },
    {
        "name": "扶风县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3818
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3819
    },
    {
        "name": "眉县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3820
    },
    {
        "name": "首善镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3821
    },
    {
        "name": "陇县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3822
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3823
    },
    {
        "name": "千阳县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3824
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3825
    },
    {
        "name": "麟游县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3826
    },
    {
        "name": "九成宫镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3827
    },
    {
        "name": "凤县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3828
    },
    {
        "name": "双石铺镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3829
    },
    {
        "name": "太白县",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3830
    },
    {
        "name": "嘴头镇",
        "cascade": 3,
        "parent_id": 289,
        "ID": 3831
    },
    {
        "name": "汉台区",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3832
    },
    {
        "name": "南郑县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3833
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3834
    },
    {
        "name": "城固县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3835
    },
    {
        "name": "博望镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3836
    },
    {
        "name": "洋县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3837
    },
    {
        "name": "洋州镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3838
    },
    {
        "name": "西乡县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3839
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3840
    },
    {
        "name": "勉县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3841
    },
    {
        "name": "勉阳镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3842
    },
    {
        "name": "宁强县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3843
    },
    {
        "name": "汉源镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3844
    },
    {
        "name": "略阳县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3845
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3846
    },
    {
        "name": "镇巴县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3847
    },
    {
        "name": "泾洋镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3848
    },
    {
        "name": "留坝县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3849
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3850
    },
    {
        "name": "佛坪县",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3851
    },
    {
        "name": "袁家庄镇",
        "cascade": 3,
        "parent_id": 290,
        "ID": 3852
    },
    {
        "name": "榆阳区",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3853
    },
    {
        "name": "神木县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3854
    },
    {
        "name": "神木镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3855
    },
    {
        "name": "府谷县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3856
    },
    {
        "name": "府谷镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3857
    },
    {
        "name": "横山县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3858
    },
    {
        "name": "横山镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3859
    },
    {
        "name": "靖边县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3860
    },
    {
        "name": "张家畔镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3861
    },
    {
        "name": "定边县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3862
    },
    {
        "name": "定边镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3863
    },
    {
        "name": "绥德县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3864
    },
    {
        "name": "名州镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3865
    },
    {
        "name": "米脂县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3866
    },
    {
        "name": "银州镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3867
    },
    {
        "name": "佳县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3868
    },
    {
        "name": "佳芦镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3869
    },
    {
        "name": "吴堡县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3870
    },
    {
        "name": "宋家川镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3871
    },
    {
        "name": "清涧县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3872
    },
    {
        "name": "宽洲镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3873
    },
    {
        "name": "子洲县",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3874
    },
    {
        "name": "双湖峪镇",
        "cascade": 3,
        "parent_id": 291,
        "ID": 3875
    },
    {
        "name": "汉滨区",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3876
    },
    {
        "name": "汉阴县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3877
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3878
    },
    {
        "name": "石泉县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3879
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3880
    },
    {
        "name": "宁陕县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3881
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3882
    },
    {
        "name": "紫阳县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3883
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3884
    },
    {
        "name": "岚皋县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3885
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3886
    },
    {
        "name": "平利县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3887
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3888
    },
    {
        "name": "镇坪县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3889
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3890
    },
    {
        "name": "旬阳县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3891
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3892
    },
    {
        "name": "白河县",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3893
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 292,
        "ID": 3894
    },
    {
        "name": "商州区",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3895
    },
    {
        "name": "洛南县",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3896
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3897
    },
    {
        "name": "丹凤县",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3898
    },
    {
        "name": "龙驹寨镇",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3899
    },
    {
        "name": "商南县",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3900
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3901
    },
    {
        "name": "山阳县",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3902
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3903
    },
    {
        "name": "镇安县",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3904
    },
    {
        "name": "永乐镇",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3905
    },
    {
        "name": "柞水县",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3906
    },
    {
        "name": "乾佑镇",
        "cascade": 3,
        "parent_id": 293,
        "ID": 3907
    },
    {
        "name": "城关区",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3908
    },
    {
        "name": "七里河区",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3909
    },
    {
        "name": "西固区",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3910
    },
    {
        "name": "安宁区",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3911
    },
    {
        "name": "红古区",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3912
    },
    {
        "name": "永登县",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3913
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3914
    },
    {
        "name": "皋兰县",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3915
    },
    {
        "name": "石洞镇",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3916
    },
    {
        "name": "榆中县",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3917
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 294,
        "ID": 3918
    },
    {
        "name": "金昌市",
        "cascade": 3,
        "parent_id": 295,
        "ID": 3919
    },
    {
        "name": "金川区",
        "cascade": 3,
        "parent_id": 295,
        "ID": 3920
    },
    {
        "name": "永昌县",
        "cascade": 3,
        "parent_id": 295,
        "ID": 3921
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 295,
        "ID": 3922
    },
    {
        "name": "白银区",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3923
    },
    {
        "name": "平川区",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3924
    },
    {
        "name": "靖远县",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3925
    },
    {
        "name": "乌兰镇",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3926
    },
    {
        "name": "会宁县",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3927
    },
    {
        "name": "会师镇",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3928
    },
    {
        "name": "景泰县",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3929
    },
    {
        "name": "一条山镇",
        "cascade": 3,
        "parent_id": 296,
        "ID": 3930
    },
    {
        "name": "秦州区",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3931
    },
    {
        "name": "麦积区",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3932
    },
    {
        "name": "清水县",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3933
    },
    {
        "name": "永清镇",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3934
    },
    {
        "name": "秦安县",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3935
    },
    {
        "name": "兴国镇",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3936
    },
    {
        "name": "甘谷县",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3937
    },
    {
        "name": "大像山镇",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3938
    },
    {
        "name": "武山县",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3939
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3940
    },
    {
        "name": "张家川回族自治县",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3941
    },
    {
        "name": "张家川镇",
        "cascade": 3,
        "parent_id": 297,
        "ID": 3942
    },
    {
        "name": "凉州区",
        "cascade": 3,
        "parent_id": 298,
        "ID": 3943
    },
    {
        "name": "民勤县",
        "cascade": 3,
        "parent_id": 298,
        "ID": 3944
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 298,
        "ID": 3945
    },
    {
        "name": "古浪县",
        "cascade": 3,
        "parent_id": 298,
        "ID": 3946
    },
    {
        "name": "古浪镇",
        "cascade": 3,
        "parent_id": 298,
        "ID": 3947
    },
    {
        "name": "天祝藏族自治县",
        "cascade": 3,
        "parent_id": 298,
        "ID": 3948
    },
    {
        "name": "华藏寺镇",
        "cascade": 3,
        "parent_id": 298,
        "ID": 3949
    },
    {
        "name": "肃州区",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3950
    },
    {
        "name": "玉门市",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3951
    },
    {
        "name": "敦煌市",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3952
    },
    {
        "name": "金塔县",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3953
    },
    {
        "name": "金塔镇",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3954
    },
    {
        "name": "安西县",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3955
    },
    {
        "name": "渊泉镇",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3956
    },
    {
        "name": "肃北蒙古族自治县",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3957
    },
    {
        "name": "党城湾镇",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3958
    },
    {
        "name": "阿克塞哈萨克族自治县",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3959
    },
    {
        "name": "红柳湾镇",
        "cascade": 3,
        "parent_id": 299,
        "ID": 3960
    },
    {
        "name": "甘州区",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3961
    },
    {
        "name": "民乐县",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3962
    },
    {
        "name": "洪水镇",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3963
    },
    {
        "name": "临泽县",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3964
    },
    {
        "name": "沙河镇",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3965
    },
    {
        "name": "高台县",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3966
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3967
    },
    {
        "name": "山丹县",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3968
    },
    {
        "name": "清泉镇",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3969
    },
    {
        "name": "肃南裕固族自治县",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3970
    },
    {
        "name": "红湾寺镇",
        "cascade": 3,
        "parent_id": 300,
        "ID": 3971
    },
    {
        "name": "西峰区",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3972
    },
    {
        "name": "庆城县",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3973
    },
    {
        "name": "庆城镇",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3974
    },
    {
        "name": "环县",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3975
    },
    {
        "name": "环城镇",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3976
    },
    {
        "name": "华池县",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3977
    },
    {
        "name": "柔远镇",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3978
    },
    {
        "name": "合水县",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3979
    },
    {
        "name": "西华池镇",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3980
    },
    {
        "name": "正宁县",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3981
    },
    {
        "name": "山河镇",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3982
    },
    {
        "name": "宁县",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3983
    },
    {
        "name": "新宁镇",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3984
    },
    {
        "name": "镇原县",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3985
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 301,
        "ID": 3986
    },
    {
        "name": "崆峒区",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3987
    },
    {
        "name": "泾川县",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3988
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3989
    },
    {
        "name": "灵台县",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3990
    },
    {
        "name": "中台镇",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3991
    },
    {
        "name": "崇信县",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3992
    },
    {
        "name": "锦屏镇",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3993
    },
    {
        "name": "华亭县",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3994
    },
    {
        "name": "东华镇",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3995
    },
    {
        "name": "庄浪县",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3996
    },
    {
        "name": "水洛镇",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3997
    },
    {
        "name": "静宁县",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3998
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 302,
        "ID": 3999
    },
    {
        "name": "安定区",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4000
    },
    {
        "name": "通渭县",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4001
    },
    {
        "name": "平襄镇",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4002
    },
    {
        "name": "临洮县",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4003
    },
    {
        "name": "洮阳镇",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4004
    },
    {
        "name": "漳县",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4005
    },
    {
        "name": "武阳镇",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4006
    },
    {
        "name": "岷县",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4007
    },
    {
        "name": "岷阳镇",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4008
    },
    {
        "name": "渭源县",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4009
    },
    {
        "name": "清源镇",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4010
    },
    {
        "name": "陇西县",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4011
    },
    {
        "name": "巩昌镇",
        "cascade": 3,
        "parent_id": 303,
        "ID": 4012
    },
    {
        "name": "武都区",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4013
    },
    {
        "name": "成县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4014
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4015
    },
    {
        "name": "宕昌县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4016
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4017
    },
    {
        "name": "康县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4018
    },
    {
        "name": "文县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4019
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4020
    },
    {
        "name": "西和县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4021
    },
    {
        "name": "汉源镇",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4022
    },
    {
        "name": "礼县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4023
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4024
    },
    {
        "name": "两当县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4025
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4026
    },
    {
        "name": "徽县",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4027
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 304,
        "ID": 4028
    },
    {
        "name": "临夏市",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4029
    },
    {
        "name": "临夏县",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4030
    },
    {
        "name": "韩集镇",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4031
    },
    {
        "name": "康乐县",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4032
    },
    {
        "name": "附城镇",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4033
    },
    {
        "name": "永靖县",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4034
    },
    {
        "name": "刘家峡镇",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4035
    },
    {
        "name": "广河县",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4036
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4037
    },
    {
        "name": "和政县",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4038
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4039
    },
    {
        "name": "东乡族自治县",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4040
    },
    {
        "name": "锁南坝镇",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4041
    },
    {
        "name": "积石山保安族东乡族撒拉族自治县",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4042
    },
    {
        "name": "吹麻滩镇",
        "cascade": 3,
        "parent_id": 305,
        "ID": 4043
    },
    {
        "name": "合作市",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4044
    },
    {
        "name": "临潭县",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4045
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4046
    },
    {
        "name": "卓尼县",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4047
    },
    {
        "name": "柳林镇",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4048
    },
    {
        "name": "舟曲县",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4049
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4050
    },
    {
        "name": "迭部县",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4051
    },
    {
        "name": "电尕镇",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4052
    },
    {
        "name": "玛曲县",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4053
    },
    {
        "name": "尼玛镇",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4054
    },
    {
        "name": "碌曲县",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4055
    },
    {
        "name": "玛艾镇",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4056
    },
    {
        "name": "夏河县",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4057
    },
    {
        "name": "拉卜楞镇",
        "cascade": 3,
        "parent_id": 306,
        "ID": 4058
    },
    {
        "name": "城中区",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4059
    },
    {
        "name": "城东区",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4060
    },
    {
        "name": "城西区",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4061
    },
    {
        "name": "城北区",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4062
    },
    {
        "name": "大通回族土族自治县",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4063
    },
    {
        "name": "桥头镇",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4064
    },
    {
        "name": "湟源县",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4065
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4066
    },
    {
        "name": "湟中县",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4067
    },
    {
        "name": "鲁沙尔镇",
        "cascade": 3,
        "parent_id": 307,
        "ID": 4068
    },
    {
        "name": "平安县",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4069
    },
    {
        "name": "平安镇",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4070
    },
    {
        "name": "乐都县",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4071
    },
    {
        "name": "碾伯镇",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4072
    },
    {
        "name": "民和回族土族自治县",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4073
    },
    {
        "name": "川口镇",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4074
    },
    {
        "name": "互助土族自治县",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4075
    },
    {
        "name": "威远镇",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4076
    },
    {
        "name": "化隆回族自治县",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4077
    },
    {
        "name": "巴燕镇",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4078
    },
    {
        "name": "循化撒拉族自治县",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4079
    },
    {
        "name": "积石镇",
        "cascade": 3,
        "parent_id": 308,
        "ID": 4080
    },
    {
        "name": "海晏县",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4081
    },
    {
        "name": "三角城镇",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4082
    },
    {
        "name": "祁连县",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4083
    },
    {
        "name": "八宝镇",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4084
    },
    {
        "name": "刚察县",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4085
    },
    {
        "name": "沙柳河镇",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4086
    },
    {
        "name": "门源回族自治县",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4087
    },
    {
        "name": "浩门镇",
        "cascade": 3,
        "parent_id": 309,
        "ID": 4088
    },
    {
        "name": "共和县",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4089
    },
    {
        "name": "恰卜恰镇",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4090
    },
    {
        "name": "同德县",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4091
    },
    {
        "name": "尕巴松多镇",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4092
    },
    {
        "name": "贵德县",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4093
    },
    {
        "name": "河阴镇",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4094
    },
    {
        "name": "兴海县",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4095
    },
    {
        "name": "子科滩镇",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4096
    },
    {
        "name": "贵南县",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4097
    },
    {
        "name": "茫曲镇",
        "cascade": 3,
        "parent_id": 310,
        "ID": 4098
    },
    {
        "name": "同仁县",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4099
    },
    {
        "name": "隆务镇",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4100
    },
    {
        "name": "尖扎县",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4101
    },
    {
        "name": "马克唐镇",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4102
    },
    {
        "name": "泽库县",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4103
    },
    {
        "name": "泽曲镇",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4104
    },
    {
        "name": "河南蒙古族自治县",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4105
    },
    {
        "name": "优干宁镇",
        "cascade": 3,
        "parent_id": 311,
        "ID": 4106
    },
    {
        "name": "玛沁县",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4107
    },
    {
        "name": "大武镇",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4108
    },
    {
        "name": "班玛县",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4109
    },
    {
        "name": "赛来塘镇",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4110
    },
    {
        "name": "甘德县",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4111
    },
    {
        "name": "柯曲镇",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4112
    },
    {
        "name": "达日县",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4113
    },
    {
        "name": "吉迈镇",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4114
    },
    {
        "name": "久治县",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4115
    },
    {
        "name": "智青松多镇",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4116
    },
    {
        "name": "玛多县",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4117
    },
    {
        "name": "黄河乡",
        "cascade": 3,
        "parent_id": 312,
        "ID": 4118
    },
    {
        "name": "玉树县",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4119
    },
    {
        "name": "结古镇",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4120
    },
    {
        "name": "杂多县",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4121
    },
    {
        "name": "萨呼腾镇",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4122
    },
    {
        "name": "称多县",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4123
    },
    {
        "name": "称文镇",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4124
    },
    {
        "name": "治多县",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4125
    },
    {
        "name": "加吉博洛镇",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4126
    },
    {
        "name": "囊谦县",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4127
    },
    {
        "name": "香达镇",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4128
    },
    {
        "name": "曲麻莱县",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4129
    },
    {
        "name": "约改镇",
        "cascade": 3,
        "parent_id": 313,
        "ID": 4130
    },
    {
        "name": "德令哈市",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4131
    },
    {
        "name": "格尔木市",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4132
    },
    {
        "name": "乌兰县",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4133
    },
    {
        "name": "希里沟镇",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4134
    },
    {
        "name": "都兰县",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4135
    },
    {
        "name": "察汗乌苏镇",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4136
    },
    {
        "name": "天峻县",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4137
    },
    {
        "name": "新源镇",
        "cascade": 3,
        "parent_id": 314,
        "ID": 4138
    },
    {
        "name": "兴庆区",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4139
    },
    {
        "name": "金凤区",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4140
    },
    {
        "name": "西夏区",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4141
    },
    {
        "name": "灵武市",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4142
    },
    {
        "name": "永宁县",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4143
    },
    {
        "name": "杨和镇",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4144
    },
    {
        "name": "贺兰县",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4145
    },
    {
        "name": "习岗镇",
        "cascade": 3,
        "parent_id": 315,
        "ID": 4146
    },
    {
        "name": "大武口区",
        "cascade": 3,
        "parent_id": 316,
        "ID": 4147
    },
    {
        "name": "惠农区",
        "cascade": 3,
        "parent_id": 316,
        "ID": 4148
    },
    {
        "name": "平罗县",
        "cascade": 3,
        "parent_id": 316,
        "ID": 4149
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 316,
        "ID": 4150
    },
    {
        "name": "利通区",
        "cascade": 3,
        "parent_id": 317,
        "ID": 4151
    },
    {
        "name": "青铜峡市",
        "cascade": 3,
        "parent_id": 317,
        "ID": 4152
    },
    {
        "name": "盐池县",
        "cascade": 3,
        "parent_id": 317,
        "ID": 4153
    },
    {
        "name": "花马池镇",
        "cascade": 3,
        "parent_id": 317,
        "ID": 4154
    },
    {
        "name": "同心县",
        "cascade": 3,
        "parent_id": 317,
        "ID": 4155
    },
    {
        "name": "豫海镇",
        "cascade": 3,
        "parent_id": 317,
        "ID": 4156
    },
    {
        "name": "原州区",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4157
    },
    {
        "name": "西吉县",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4158
    },
    {
        "name": "吉强镇",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4159
    },
    {
        "name": "隆德县",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4160
    },
    {
        "name": "城关镇",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4161
    },
    {
        "name": "泾源县",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4162
    },
    {
        "name": "香水镇",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4163
    },
    {
        "name": "彭阳县",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4164
    },
    {
        "name": "白阳镇",
        "cascade": 3,
        "parent_id": 318,
        "ID": 4165
    },
    {
        "name": "沙坡头区",
        "cascade": 3,
        "parent_id": 319,
        "ID": 4166
    },
    {
        "name": "中宁县",
        "cascade": 3,
        "parent_id": 319,
        "ID": 4167
    },
    {
        "name": "海原县",
        "cascade": 3,
        "parent_id": 319,
        "ID": 4168
    },
    {
        "name": "天山区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4169
    },
    {
        "name": "沙依巴克区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4170
    },
    {
        "name": "新市区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4171
    },
    {
        "name": "水磨沟区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4172
    },
    {
        "name": "头屯河区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4173
    },
    {
        "name": "达坂城区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4174
    },
    {
        "name": "东山区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4175
    },
    {
        "name": "乌鲁木齐县",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4176
    },
    {
        "name": "乌鲁木齐市水磨沟区",
        "cascade": 3,
        "parent_id": 320,
        "ID": 4177
    },
    {
        "name": "克拉玛依区",
        "cascade": 3,
        "parent_id": 321,
        "ID": 4178
    },
    {
        "name": "独山子区",
        "cascade": 3,
        "parent_id": 321,
        "ID": 4179
    },
    {
        "name": "白碱滩区",
        "cascade": 3,
        "parent_id": 321,
        "ID": 4180
    },
    {
        "name": "乌尔禾区",
        "cascade": 3,
        "parent_id": 321,
        "ID": 4181
    },
    {
        "name": "石河子市",
        "cascade": 3,
        "parent_id": 322,
        "ID": 4182
    },
    {
        "name": "阿拉尔市",
        "cascade": 3,
        "parent_id": 322,
        "ID": 4183
    },
    {
        "name": "图木舒克市",
        "cascade": 3,
        "parent_id": 322,
        "ID": 4184
    },
    {
        "name": "五家渠市",
        "cascade": 3,
        "parent_id": 322,
        "ID": 4185
    },
    {
        "name": "喀什市",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4186
    },
    {
        "name": "疏附县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4187
    },
    {
        "name": "托克扎克镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4188
    },
    {
        "name": "疏勒县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4189
    },
    {
        "name": "疏勒镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4190
    },
    {
        "name": "英吉沙县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4191
    },
    {
        "name": "英吉沙镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4192
    },
    {
        "name": "泽普县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4193
    },
    {
        "name": "泽普镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4194
    },
    {
        "name": "莎车县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4195
    },
    {
        "name": "莎车镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4196
    },
    {
        "name": "叶城县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4197
    },
    {
        "name": "喀格勒克镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4198
    },
    {
        "name": "麦盖提县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4199
    },
    {
        "name": "麦盖提镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4200
    },
    {
        "name": "岳普湖县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4201
    },
    {
        "name": "岳普湖镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4202
    },
    {
        "name": "伽师县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4203
    },
    {
        "name": "巴仁镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4204
    },
    {
        "name": "巴楚县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4205
    },
    {
        "name": "巴楚镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4206
    },
    {
        "name": "塔什库尔干塔吉克自治县",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4207
    },
    {
        "name": "塔什库尔干镇",
        "cascade": 3,
        "parent_id": 323,
        "ID": 4208
    },
    {
        "name": "阿克苏市",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4209
    },
    {
        "name": "温宿县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4210
    },
    {
        "name": "温宿镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4211
    },
    {
        "name": "库车县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4212
    },
    {
        "name": "库车镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4213
    },
    {
        "name": "沙雅县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4214
    },
    {
        "name": "沙雅镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4215
    },
    {
        "name": "新和县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4216
    },
    {
        "name": "新和镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4217
    },
    {
        "name": "拜城县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4218
    },
    {
        "name": "拜城镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4219
    },
    {
        "name": "乌什县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4220
    },
    {
        "name": "乌什镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4221
    },
    {
        "name": "阿瓦提县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4222
    },
    {
        "name": "阿瓦提镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4223
    },
    {
        "name": "柯坪县",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4224
    },
    {
        "name": "柯坪镇",
        "cascade": 3,
        "parent_id": 324,
        "ID": 4225
    },
    {
        "name": "和田市",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4226
    },
    {
        "name": "和田县",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4227
    },
    {
        "name": "墨玉县",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4228
    },
    {
        "name": "喀拉喀什镇",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4229
    },
    {
        "name": "皮山县",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4230
    },
    {
        "name": "固玛镇",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4231
    },
    {
        "name": "洛浦县",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4232
    },
    {
        "name": "洛浦镇",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4233
    },
    {
        "name": "策勒县",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4234
    },
    {
        "name": "策勒镇",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4235
    },
    {
        "name": "于田县",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4236
    },
    {
        "name": "木尕拉镇",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4237
    },
    {
        "name": "民丰县",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4238
    },
    {
        "name": "尼雅镇",
        "cascade": 3,
        "parent_id": 325,
        "ID": 4239
    },
    {
        "name": "吐鲁番市",
        "cascade": 3,
        "parent_id": 326,
        "ID": 4240
    },
    {
        "name": "鄯善县",
        "cascade": 3,
        "parent_id": 326,
        "ID": 4241
    },
    {
        "name": "鄯善镇",
        "cascade": 3,
        "parent_id": 326,
        "ID": 4242
    },
    {
        "name": "托克逊县",
        "cascade": 3,
        "parent_id": 326,
        "ID": 4243
    },
    {
        "name": "托克逊镇",
        "cascade": 3,
        "parent_id": 326,
        "ID": 4244
    },
    {
        "name": "哈密市",
        "cascade": 3,
        "parent_id": 327,
        "ID": 4245
    },
    {
        "name": "伊吾县",
        "cascade": 3,
        "parent_id": 327,
        "ID": 4246
    },
    {
        "name": "伊吾镇",
        "cascade": 3,
        "parent_id": 327,
        "ID": 4247
    },
    {
        "name": "巴里坤哈萨克自治县",
        "cascade": 3,
        "parent_id": 327,
        "ID": 4248
    },
    {
        "name": "巴里坤镇",
        "cascade": 3,
        "parent_id": 327,
        "ID": 4249
    },
    {
        "name": "阿图什市",
        "cascade": 3,
        "parent_id": 328,
        "ID": 4250
    },
    {
        "name": "阿克陶县",
        "cascade": 3,
        "parent_id": 328,
        "ID": 4251
    },
    {
        "name": "阿克陶镇",
        "cascade": 3,
        "parent_id": 328,
        "ID": 4252
    },
    {
        "name": "阿合奇县",
        "cascade": 3,
        "parent_id": 328,
        "ID": 4253
    },
    {
        "name": "阿合奇镇",
        "cascade": 3,
        "parent_id": 328,
        "ID": 4254
    },
    {
        "name": "乌恰县",
        "cascade": 3,
        "parent_id": 328,
        "ID": 4255
    },
    {
        "name": "乌恰镇",
        "cascade": 3,
        "parent_id": 328,
        "ID": 4256
    },
    {
        "name": "博乐市",
        "cascade": 3,
        "parent_id": 329,
        "ID": 4257
    },
    {
        "name": "精河县",
        "cascade": 3,
        "parent_id": 329,
        "ID": 4258
    },
    {
        "name": "精河镇",
        "cascade": 3,
        "parent_id": 329,
        "ID": 4259
    },
    {
        "name": "温泉县",
        "cascade": 3,
        "parent_id": 329,
        "ID": 4260
    },
    {
        "name": "博格达尔镇",
        "cascade": 3,
        "parent_id": 329,
        "ID": 4261
    },
    {
        "name": "昌吉市",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4262
    },
    {
        "name": "阜康市",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4263
    },
    {
        "name": "米泉市",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4264
    },
    {
        "name": "呼图壁县",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4265
    },
    {
        "name": "呼图壁镇",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4266
    },
    {
        "name": "玛纳斯县",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4267
    },
    {
        "name": "玛纳斯镇",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4268
    },
    {
        "name": "奇台县",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4269
    },
    {
        "name": "奇台镇",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4270
    },
    {
        "name": "吉木萨尔县",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4271
    },
    {
        "name": "吉木萨尔镇",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4272
    },
    {
        "name": "木垒哈萨克自治县",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4273
    },
    {
        "name": "木垒镇",
        "cascade": 3,
        "parent_id": 330,
        "ID": 4274
    },
    {
        "name": "库尔勒市",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4275
    },
    {
        "name": "轮台县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4276
    },
    {
        "name": "轮台镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4277
    },
    {
        "name": "尉犁县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4278
    },
    {
        "name": "尉犁镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4279
    },
    {
        "name": "若羌县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4280
    },
    {
        "name": "若羌镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4281
    },
    {
        "name": "且末县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4282
    },
    {
        "name": "且末镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4283
    },
    {
        "name": "和静县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4284
    },
    {
        "name": "和静镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4285
    },
    {
        "name": "和硕县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4286
    },
    {
        "name": "特吾里克镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4287
    },
    {
        "name": "博湖县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4288
    },
    {
        "name": "博湖镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4289
    },
    {
        "name": "焉耆回族自治县",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4290
    },
    {
        "name": "焉耆镇",
        "cascade": 3,
        "parent_id": 331,
        "ID": 4291
    },
    {
        "name": "伊宁市",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4292
    },
    {
        "name": "奎屯市",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4293
    },
    {
        "name": "伊宁县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4294
    },
    {
        "name": "吉里于孜镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4295
    },
    {
        "name": "霍城县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4296
    },
    {
        "name": "水定镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4297
    },
    {
        "name": "巩留县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4298
    },
    {
        "name": "巩留镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4299
    },
    {
        "name": "新源县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4300
    },
    {
        "name": "新源镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4301
    },
    {
        "name": "昭苏县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4302
    },
    {
        "name": "昭苏镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4303
    },
    {
        "name": "特克斯县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4304
    },
    {
        "name": "特克斯镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4305
    },
    {
        "name": "尼勒克县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4306
    },
    {
        "name": "尼勒克镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4307
    },
    {
        "name": "察布查尔锡伯自治县",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4308
    },
    {
        "name": "察布查尔镇",
        "cascade": 3,
        "parent_id": 332,
        "ID": 4309
    },
    {
        "name": "塔城市",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4310
    },
    {
        "name": "乌苏市",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4311
    },
    {
        "name": "额敏县",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4312
    },
    {
        "name": "额敏镇",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4313
    },
    {
        "name": "沙湾县",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4314
    },
    {
        "name": "三道河子镇",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4315
    },
    {
        "name": "托里县",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4316
    },
    {
        "name": "托里镇",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4317
    },
    {
        "name": "裕民县",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4318
    },
    {
        "name": "哈拉布拉镇",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4319
    },
    {
        "name": "和布克赛尔蒙古自治县",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4320
    },
    {
        "name": "和布克赛尔镇",
        "cascade": 3,
        "parent_id": 333,
        "ID": 4321
    },
    {
        "name": "阿勒泰市",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4322
    },
    {
        "name": "布尔津县",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4323
    },
    {
        "name": "布尔津镇",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4324
    },
    {
        "name": "富蕴县",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4325
    },
    {
        "name": "库额尔齐斯镇",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4326
    },
    {
        "name": "福海县",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4327
    },
    {
        "name": "哈巴河县",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4328
    },
    {
        "name": "青河县",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4329
    },
    {
        "name": "吉木乃县",
        "cascade": 3,
        "parent_id": 334,
        "ID": 4330
    },
    {
        "name": "中西区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4331
    },
    {
        "name": "东区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4332
    },
    {
        "name": "九龙城区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4333
    },
    {
        "name": "观塘区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4334
    },
    {
        "name": "南区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4335
    },
    {
        "name": "深水埗区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4336
    },
    {
        "name": "湾仔区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4337
    },
    {
        "name": "黄大仙区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4338
    },
    {
        "name": "油尖旺区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4339
    },
    {
        "name": "离岛区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4340
    },
    {
        "name": "葵青区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4341
    },
    {
        "name": "北区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4342
    },
    {
        "name": "西贡区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4343
    },
    {
        "name": "沙田区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4344
    },
    {
        "name": "屯门区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4345
    },
    {
        "name": "大埔区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4346
    },
    {
        "name": "荃湾区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4347
    },
    {
        "name": "元朗区",
        "cascade": 3,
        "parent_id": 335,
        "ID": 4348
    },
    {
        "name": "",
        "cascade": 3,
        "parent_id": 336,
        "ID": 4349
    }
];