"use strict";const messageContainer=document.getElementById("message-container"),messageSignin=document.getElementById("message-signin"),emailFieldIndex=document.getElementById("email-index"),passwordFieldIndex=document.getElementById("password-index"),hiddenMsg=e=>{setTimeout((function(){e.remove()}),2500)},hiddenErrorIndex=e=>{function n(){e.remove()}emailFieldIndex.addEventListener("click",n),passwordFieldIndex.addEventListener("click",n)};window.addEventListener("load",(function(){document.getElementById("loader-container").remove()}));const eventRefresh=()=>{window.addEventListener("pageshow",(function(e){(e.persisted||void 0!==window.performance&&2===window.performance.navigation.type)&&window.location.reload()}))};hiddenMsg(messageContainer),hiddenErrorIndex(messageSignin),window.addEventListener("pageshow",(function(e){(e.persisted||void 0!==window.performance&&2===window.performance.navigation.type)&&window.location.reload()}));