const api = 'https://discord-web-api.glitch.me/discord/user/'

const id = {
    'worst': '484088238403878912',
    'maris': '852721147174453308',
    'agatha': '844328238008631393',
    'nami': '425005966170259477',
    'vivi': '852643832754339890',
    'brend': '840663924885553152',
    'syzz': '783785726609326101',

}

console.log(id.worst)

// <- =============== WORST =============== ->
'use strict';
fetch((api + id.worst), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    console.log(avatar, username, tag);
    document.getElementById("worst-img").src = avatar;
    var $username = document.querySelector('#worst'),
        usernameNew = username +'#' + tag;
        $username.innerHTML = usernameNew 
}).catch(function() {
  console.warn("Something went wrong.");
});

// <- =============== MARIS =============== ->
'use strict';
fetch((api + id.maris), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    console.log(avatar, username, tag);
    document.getElementById("maris-img").src = avatar;
    var $username = document.querySelector('#maris'),
        usernameNew = username +'#' + tag;
        $username.innerHTML = usernameNew 
}).catch(function() {
  console.warn("Something went wrong.");
});

// <- =============== AGATHA =============== ->
'use strict';
fetch((api + id.agatha), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    console.log(avatar, username, tag);
    document.getElementById("agatha-img").src = avatar;
    var $username = document.querySelector('#agatha'),
        usernameNew = username +'#' + tag;
        $username.innerHTML = usernameNew 
}).catch(function() {
  console.warn("Something went wrong.");
});

// <- =============== NAMI =============== ->
'use strict';
fetch((api + id.nami), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    console.log(avatar, username, tag);
    document.getElementById("nami-img").src = avatar;
    var $username = document.querySelector('#nami'),
        usernameNew = username +'#' + tag;
        $username.innerHTML = usernameNew 
}).catch(function() {
  console.warn("Something went wrong.");
});

// <- =============== VIVI =============== ->
'use strict';
fetch((api + id.vivi), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    console.log(avatar, username, tag);
    document.getElementById("vivi-img").src = avatar;
    var $username = document.querySelector('#vivi'),
        usernameNew = username +'#' + tag;
        $username.innerHTML = usernameNew 
}).catch(function() {
  console.warn("Something went wrong.");
});

// <- =============== VIVI =============== ->
'use strict';
fetch((api + id.brend), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    console.log(avatar, username, tag);
    document.getElementById("brend-img").src = avatar;
    var $username = document.querySelector('#brend'),
        usernameNew = username +'#' + tag;
        $username.innerHTML = usernameNew 
}).catch(function() {
  console.warn("Something went wrong.");
});

// <- =============== SYZZ =============== ->
'use strict';
fetch((api + id.syzz), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    console.log(avatar, username, tag);
    document.getElementById("syzz-img").src = avatar;
    var $username = document.querySelector('#syzz'),
        usernameNew = username +'#' + tag;
        $username.innerHTML = usernameNew 
}).catch(function() {
  console.warn("Something went wrong.");
});