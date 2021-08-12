# Frontend Mentor - Sunnyside agency landing page

這是來自[Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef)的解答。  
Frontend Mentor challenges 是一個藉由實際建立專案，來提升 coding 技術的挑戰。

## 大綱

- [總覽](#總覽)
  - [關於這份挑戰](#關於這份挑戰)
  - [螢幕截圖](#螢幕截圖)
  - [網站連結](#連結)
- [工作流程](#工作流程)
  - [使用的工具](#使用的工具)
  - [我學到什麼](#我學到什麼)
- [特色](#特色)
- [關於作者](#關於作者)
- [致謝](#致謝)

## 總覽

### 關於這份挑戰

你的挑戰是建立出這個引導頁面（langing page），盡你所能的讓它能夠看起來越接近設計稿越好。

這個挑戰主要聚焦在 HTML&CSS，以及一小部分的 JS（手機板的導覽區塊）。  
JS 的部分，你可以自己選擇要不要完成。

你可以使用任何你喜歡的工具來完成這份挑戰。所以如果你有某個你想要練習的工具，就盡管去嘗試吧！

提示－你的使用者應該要能夠：

- 在他們裝置上得到最佳化的佈局
- 從互動式元件上獲得 "互動（interactive）" 的效果 <font size="2">（連結按鈕）</font>

### 螢幕截圖

![src-desktop](README-img/scr-desktop.jpg)

### 連結

- Live Site URL: [Here](https://jubeatt.github.io/3-column-preview-card-component-main/)🥑

## 工作流程

### 使用的工具

- Mobile-first workflow
- Semantic HTML5 markup
- Flex-box
- SCSS (preprocessor)
- BEM (methodology)
- [reset.css](https://meyerweb.com/eric/tools/css/reset/) - For style

### 我學到什麼

#### BEM 的 class 結構

#### picture 標籤的運用

#### 當 SCSS 不太會寫的時候，就回頭看看 CSS 該怎麼寫。

#### 文字的 class 通常可以獨立出來，不用綁在 block 上。

#### SVG 跟 iconfont 是不一樣的東西

#### SVG 改顏色的方式

去裡面找到`fill`屬性來修改。

## 特色

我希望這個 `card` 組件能夠有一些自定義的功能，所以讓我們再添加一點原始碼吧！

```scss
// optional style
.card--normal-cyan {
  background-color: $normal-cyan;
  color: $normal-cyan;
}
// optional style
.card--dark-cyan {
  background-color: $dark-cyan;
  color: $dark-cyan;
}
```

這樣子就能把喜歡的顏色套用到 `card` 囉。

來點不一樣的吧，讓我們來加個粉紅色 ✨

```scss
$pink: #ffbcbc;

.card--pink {
  background-color: $pink;
  color: $pink;
}
```

💡 別忘了在 HTML 中加入新建立的 class

```html
<section class="card card--pink"></section>
```

完工：

![feature](README-img/feature.jpg)

我知道你可能也注意到了，就是圖片的部分沒有隨著設定的顏色來做變化。

不過別擔心，這是因為我們使用的是**圖片檔**，如果你改使用 **icon-font**（像是 [FontAwesome](https://fontawesome.com/)） ，就能解決這個問題囉。

做個簡單的示範：

![icon](README-img/icon.jpg)

總而言之，如果你還希望有什麼功能，只要試著去鑽研，相信都能找出解決辦法的。

最後就留給各位自行發揮囉！

## 關於作者

- Website - [Jim's blog](https://jubeatt.github.io/)
- Frontend Mentor - [Jim](https://www.frontendmentor.io/profile/jubeatt)
- Facebook - [薛裕正](https://www.facebook.com/profile.php?id=100003593580513)

## 致謝

最後我想向[Anton](https://www.frontendmentor.io/profile/antarya)
說聲謝謝，在我上一份[挑戰](https://www.frontendmentor.io/solutions/singlepricegridcomponent-by-using-flexbox-k-D7LL4wY)中給了我不少建議。

因為有你的那些建議，讓我在這一次的挑戰中嘗試了我以前不曾使用過的 SCSS， BEM 的 class 命名方式，還有一些 CSS 的技巧（畫面的垂直置中）

其實我這個人還蠻孤僻的 💦，也沒有想過有人在看完我的作品後，會給我這麼詳細的建議。  
總而言之，我很慶幸自己能夠遇到你這樣子的 **"Mentor"** ，謝謝你 😊
