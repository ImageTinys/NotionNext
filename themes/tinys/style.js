/* eslint-disable react/no-unknown-property */

/**
 * 主题样式配置文件
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 */
const Style = () => {
    return <style jsx global>{`

    /* ===== 基础样式配置 ===== */
    /* 网站整体背景色配置 */
    body{
        background-color: white; /* 网站整体背景色，可改为其他颜色如 #f5f5f5 */
    }
    .dark body{
        background-color: black; /* 深色模式下的背景色 */
    }

    /* 主题主要背景色设置 */
    #theme-proxio .bg-primary {
        --tw-bg-opacity: 1;
        background-color: #121212; /* 可修改为其他颜色来改变主题主色调 */
    }
    
    /* ===== 响应式布局配置 ===== */
    /* 可根据需要调整不同屏幕宽度下的容器最大宽度 */
    @media (min-width: 540px) {
        #theme-proxio .container {
            max-width: 100%; /* 修改为全宽 */
            padding: 0;
        }
    }
    @media (min-width: 720px) {
        #theme-proxio .container {
            max-width: 100%;
            padding: 0;
        }
    }
    
    @media (min-width: 960px) {
        #theme-proxio .container {
            max-width: 100%;
            padding: 0;
        }
    }
    @media (min-width: 1140px) {
        #theme-proxio .container {
            max-width: 100%;
            padding: 0;
        }
    }
        
    @media (min-width: 1536px) {
        #theme-proxio .container {
            max-width: 100%;
            padding: 0;
        }
    }
        
    #theme-proxio .container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    /* ===== 导航栏样式配置 ===== */
    #theme-proxio .sticky{
        position: fixed;
        z-index: 20;
        background-color: rgb(255 255 255 / 0.8); /* 导航栏背景色和透明度 */
        /* 过渡动画效果 */
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
  

    /* ===== 深色模式配置 ===== */
    .dark\:bg-dark:is(.dark *) {
        background-color: black!important; /* 深色模式下的主背景色 */
    }

    :is(.dark #theme-proxio .sticky){
        background-color: rgb(17 25 40 / 0.8); /* 深色模式下导航栏背景色和透明度 */
    }
  
    /* 导航栏毛玻璃效果 */
    #theme-proxio .sticky {
        -webkit-backdrop-filter: blur(5px); /* 毛玻璃效果模糊度 */
        backdrop-filter: blur(5px);
        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1); /* 导航栏底部阴影 */
    }
  
    /* 导航栏 logo 样式 */
    #theme-proxio .sticky .navbar-logo{
        padding-top: 0.5rem; // 可调整 logo 上下间距
        padding-bottom: 0.5rem;
    }
  
    /* 导航栏按钮颜色 */
    #theme-proxio .sticky #navbarToggler span{
        --tw-bg-opacity: 1;
        background-color: rgb(17 25 40 / var(--tw-bg-opacity)); // 可修改按钮颜色
    }
  
    /* 深色模式下的导航按钮颜色 */
    :is(.dark #theme-proxio .sticky #navbarToggler span){
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity)); // 可修改深色模式下按钮颜色
    }
  
    /* ===== 导航菜单样式 ===== */
    /* 导航菜单链接颜色和悬停效果 */
    #theme-proxio .sticky #navbarCollapse li > a{
        --tw-text-opacity: 1;
        color: rgb(17 25 40 / var(--tw-text-opacity)); /* 导航菜单链接颜色 */
    }
    
    #theme-proxio .sticky #navbarCollapse li > a:hover{
        --tw-text-opacity: 1;
        color: rgb(55 88 249 / var(--tw-text-opacity)); /* 导航菜单链接悬停颜色 */
        opacity: 1;
    }

    /* 导航菜单按钮样式 */
    #theme-proxio .sticky #navbarCollapse li > button{
        --tw-text-opacity: 1;
        color: rgb(17 25 40 / var(--tw-text-opacity));
    }
  
    /* 深色模式下的导航菜单链接样式 */
    :is(.dark #theme-proxio .sticky #navbarCollapse li > a){
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
  
    /* 深色模式下的导航菜单链接悬停效果 */
    :is(.dark #theme-proxio .sticky #navbarCollapse li > a:hover){
        --tw-text-opacity: 1;
        color: rgb(55 88 249 / var(--tw-text-opacity));
    }

    /* 深色模式下的导航菜单按钮样式 */
    :is(.dark #theme-proxio .sticky #navbarCollapse li > button){
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }

    // 导航菜单激活项样式
    #navbarCollapse li .ud-menu-scroll.active{
        opacity: 0.7;
    }
  
    // 导航菜单激活项样式
    #theme-proxio .sticky #navbarCollapse li .ud-menu-scroll.active{
        --tw-text-opacity: 1;
        color: rgb(55 88 249 / var(--tw-text-opacity));
        opacity: 1;
    }
  
    /* ===== 按钮样式配置 ===== */
    /* 登录按钮样式 */
    #theme-proxio .sticky .loginBtn{
        --tw-text-opacity: 1;
        color: rgb(17 25 40 / var(--tw-text-opacity)); /* 登录按钮文字颜色 */
    }
  
    // 登录按钮悬停效果
    #theme-proxio .sticky .loginBtn:hover{
        --tw-text-opacity: 1;
        color: rgb(55 88 249 / var(--tw-text-opacity)); // 可修改登录按钮悬停颜色
        opacity: 1;
    }
  
    // 深色模式下的登录按钮样式
    :is(.dark #theme-proxio .sticky .loginBtn){
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
  
    // 深色模式下的登录按钮悬停效果
    :is(.dark #theme-proxio .sticky .loginBtn:hover){
        --tw-text-opacity: 1;
        color: rgb(55 88 249 / var(--tw-text-opacity));
    }
  
    /* 注册按钮样式 */
    #theme-proxio .sticky .signUpBtn{
        --tw-bg-opacity: 1;
        background-color: rgb(55 88 249 / var(--tw-bg-opacity)); /* 注册按钮背景色 */
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity)); /* 注册按钮文字颜色 */
    }
  
    // 注册按钮悬停效果
    #theme-proxio .sticky .signUpBtn:hover{
        --tw-bg-opacity: 1;
        background-color: rgb(27 68 200 / var(--tw-bg-opacity)); // 可修改注册按钮悬停背景色
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
  
    // 主题切换按钮样式
    #theme-proxio .sticky #themeSwitcher ~ span{
        --tw-text-opacity: 1;
        color: rgb(17 25 40 / var(--tw-text-opacity));
    }
  
    // 深色模式下的主题切换按钮样式
    :is(.dark #theme-proxio .sticky #themeSwitcher ~ span){
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
  
    // 导航栏切换按钮激活状态样式
    .navbarTogglerActive > span:nth-child(1){
        top: 7px;
        --tw-rotate: 45deg;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  
    .navbarTogglerActive > span:nth-child(2){
        opacity: 0;
    }
  
    .navbarTogglerActive > span:nth-child(3){
        top: -8px;
        --tw-rotate: 135deg;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  
    // 文字颜色样式
    .text-body-color{
        --tw-text-opacity: 1;
        color: rgb(99 115 129 / var(--tw-text-opacity));
    }
  
    .text-body-secondary{
        --tw-text-opacity: 1;
        color: rgb(136 153 168 / var(--tw-text-opacity));
    }

    /* ===== 轮播图样式 ===== */
    /* 可自定义轮播图按钮样式 */
    .common-carousel .swiper-button-next:after,
    .common-carousel .swiper-button-prev:after{
        display: none;
    }

    .common-carousel .swiper-button-next,
    .common-carousel .swiper-button-prev{
        position: static !important;
        margin: 0px;
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        --tw-text-opacity: 1;
        color: rgb(17 25 40 / var(--tw-text-opacity));
        --tw-shadow: 0px 8px 15px 0px rgba(72, 72, 138, 0.08);
        transition-duration: 200ms;
    }

    .common-carousel .swiper-button-next:hover,
    .common-carousel .swiper-button-prev:hover{
        --tw-bg-opacity: 1;
        background-color: rgb(55 88 249 / var(--tw-bg-opacity));
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    :is(.dark .common-carousel .swiper-button-next),:is(.dark 
    .common-carousel .swiper-button-prev){
        --tw-bg-opacity: 1;
        background-color: rgb(17 25 40 / var(--tw-bg-opacity));
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }

    .common-carousel .swiper-button-next svg,
    .common-carousel .swiper-button-prev svg{
        height: auto;
        width: auto;
    }
    `}</style>
}

export { Style }
