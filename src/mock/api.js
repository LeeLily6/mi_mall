import Mock from 'mockjs'

Mock.mock('/api/usr/login', {
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone|1-9": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});