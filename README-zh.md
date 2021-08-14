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

#### SVG 改大小

直接選取 class，設定`width`

#### SVG 改顏色的方式

去裡面找到`fill`屬性來修改。

#### nth-child 跟 nth-type 的差異

共通點：兩者選取的都是標籤，不是 class

nth-child：同階層中的所有標籤
nth-of-type：同階層中的相同標籤

#### 什麼時候該設%

- 希望隨著寬度有變化的流動區塊。

- 文字間的 margin，padding 通常不需要設，不然當寬度越大的時候，文字或元素之間的間距也會跟著變得很大，所以自己做斟酌。

- 有些區塊的 padding，一樣，如果四個邊都有設 padding，那就要考慮到，當寬度越寬的時候，這個區塊的內容就會越往裡面推，如果`內容本身不會跟著變大的話`，那差距就會越來越大。

- 希望寬度/高度會隨著視窗增加的時候，或許就需要設%

#### design 的部分使用桌機版的圖片能得到比較好的效果

#### 文字的部分建議

可以善用 `max-width / max-height` 來限制，避免太大或太小時，影響到整個區塊的寬度或高度。
例如：design 的部分如果文字太多，讓整體區塊太高，背景圖片的顯示就會跟著影響。
所以這邊使用了`max-width / max-height` 來限制，並且利用`overflow`來讓內容真的比較多時產生滾軸，解決內容比較多的需求。

#### 發現設計稿置中失敗

testimonails 片段的名稱與頭像。

## 特色

### 不限字數的內容

藉由`max-height`與`overflow`來實現。

```scss
&content {
  text-align: left;
  place-self: center;
  padding: 50px 30px;
  max-height: 400px;
  overflow: auto;
}
```

### 自定義 scrollbar

```scss
&::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

&::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
```

**來源：**[css3-webkit-vertical-scrollbars](https://cssdeck.com/labs/css3-webkit-vertical-scrollbars)

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
