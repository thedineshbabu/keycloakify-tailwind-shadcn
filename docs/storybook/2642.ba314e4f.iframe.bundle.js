"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[2642],{"./node_modules/keycloakify/login/pages/LoginUpdateProfile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginUpdateProfile});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/login/lib/kcClsx.js");function LoginUpdateProfile(props){const{kcContext,i18n,doUseDefaultCss,Template,classes,UserProfileFormFields,doMakeUserConfirmPassword}=props,{kcClsx}=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__.z)({doUseDefaultCss,classes}),{messagesPerField,url,isAppInitiatedAction}=kcContext,{msg,msgStr}=i18n,[isFormSubmittable,setIsFormSubmittable]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayRequiredFields:!0,headerNode:msg("loginProfileTitle"),displayMessage:messagesPerField.exists("global")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({id:"kc-update-profile-form",className:kcClsx("kcFormClass"),action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserProfileFormFields,{kcContext,i18n,kcClsx,onIsFormSubmittableValueChange:setIsFormSubmittable,doMakeUserConfirmPassword}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-options",className:kcClsx("kcFormOptionsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:kcClsx("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormButtonsClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{disabled:!isFormSubmittable,className:kcClsx("kcButtonClass","kcButtonPrimaryClass",!isAppInitiatedAction&&"kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:msgStr("doSubmit")}),isAppInitiatedAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",Object.assign({className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),type:"submit",name:"cancel-aia",value:"true",formNoValidate:!0},{children:msg("doCancel")}))]}))]}))]}))}))}}}]);