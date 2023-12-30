const uid = "2025948439";

// Bilibili API 地址，这里以获取用户信息为例
const apiUrl = `https://api.bilibili.com/x/space/navnum?mid=${ uid}`;

fetch(apiUrl)
    .then((response) => { 
            return response.json();
    })
    .then((data) => { 
    // 在这里使用返回的用户信息数据
    console.log(data.data);
    });
