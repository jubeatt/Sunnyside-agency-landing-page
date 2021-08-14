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
- [問題回報](#問題回報)
- [關於作者](#關於作者)
- [致謝](#致謝)

## 總覽

### 關於這份挑戰

你的挑戰是建立出這個引導頁面（langing page），盡你所能的讓它能夠看起來越接近設計稿越好。

這個挑戰主要聚焦在 HTML 和 CSS，以及一小部分的 JS（手機板的導覽區塊）。  
關於 JS 的部分，你可以自己選擇是否要完成。

你可以使用任何你喜歡的工具來完成這份挑戰。所以如果你有某個你想要練習的工具，就盡管去嘗試吧！

提示－你的使用者應該要能夠：

- 在他們裝置上得到最佳化的佈局
- 從互動式元件上獲得 "互動（interactive）" 的效果 <font size="2">（連結按鈕）</font>

### 螢幕截圖

**🖥 桌機版：**

![src-desktop](README-img/screenshot-desktop.jpg)

**📱 手機版：**

![src-desktop](README-img/screenshot-mobile.jpg)

### 連結

- Live Site URL: [Here](https://jubeatt.github.io/Sunnyside-agency-landing-page/)🥑

## 工作流程

### 使用的工具

- Mobile-first workflow
- Semantic HTML5 markup
- Flex-box
- Grid-box
- SCSS (preprocessor)
- BEM (methodology)
- Vanilla JavaScript
- [Reset.css](https://meyerweb.com/eric/tools/css/reset/)
- [jQuery](https://jquery.com/)
- [Google font](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/v5/changelog/latest)

## 我學到什麼

### 關於 BEM 的 class 結構

- **複雜的巢狀結構**

這裡引用來自[BEM by Example](https://sparkbox.com/foundry/bem_by_example)的一段敘述：

> If your component has child elements several levels deep, don’t try to represent each level in the class name. BEM is not intended to communicate structural depth. A BEM class name representing a child element in the component should only include the base/block name and the one element name.

意思是說，假使一個 component 下有多個層級的子元素，我們也不必在 BEM 把每一層的結構寫出來，譬如說：

```html
<figure class="photo">
  <img class="photo__img" src="image.jpg" />
  <figcaption class="photo__caption">
    圖片解說
    <blockquote class="photo__caption__quote">
      不要在一個class裡面放一個以上的element
    </blockquote>
  </figcaption>
</figure>
```

所以一個`Block`下最多只會寫一層`Element`：

```html
<figure class="photo">
  <img class="photo__img" src="image.jpg" />
  <figcaption class="photo__caption">
    圖片解說
    <blockquote class="photo__quote">這樣就對了</blockquote>
  </figcaption>
</figure>
```

即便你沒有把每一個層級都寫出來，也能夠看出`img`, `caption`, `quote`都是`photo`這個 component 下的元素，所以判斷的時候只要掌握一個原則：**這個元素是哪個 component 下的元素**，就能寫出簡潔清楚的 class 名稱。

- **有些元素不需要綁在 Block 上**

拿這個挑戰中的`header`部分來舉例：

```html
<header class="header">
  <h3 class="slogan">WE ARE CREATIVES</h3>
  <a class="arrow"><img class="pic" src="arrow.jpg" /></a>
</header>
```

`slogan`跟`arrow`這兩個元素其實都能獨自存在，並沒有一定要綁在`header`這個`Block`上（除非你把整個`header`當成是一個 component），所以就不建議這樣子寫：

```html
<header class="header">
  <h3 class="header__slogan">WE ARE CREATIVES</h3>
  <a class="header__arrow"><img class="header__pic" src="arrow.jpg" /></a>
</header>
```

這種情況大多會發生在文字的部分，所以這種時候就建議寫一個方便識別的 class 就好，不用一定要照著 BEM 的規則來命名。

### picture 標籤的運用

要製作響應式圖片，並不是只能透過`media query`來實現，也可以使用 HTML 中的`<picture>`。

譬如，在這個挑戰中的圖片就能這樣使用：

```html
<picture>
  <source
    srcset="images/desktop/image-transform.jpg"
    media="(min-width: 760px)"
  />
  <img class="feature-card__pic" src="images/mobile/image-transform.jpg" />
</picture>
```

瀏覽器會先從`<source>`找尋有沒有匹配條件的圖片，如果沒有的話（或瀏覽器不支援`<picture>`）就會使用`<img>`所設定的圖片。

補充：

- `<source>`可以有很多個。
- `<img>`一定要寫在最後面，寫在`<img>`後面的`<source>`都會被省略。

更多詳細的內容可以參考：[這裡](https://www.fooish.com/html/picture-tag.html)

### SVG 的相關設定

由於我以前沒用過 SVG 來設定圖片，所以不太清楚 SVG 的一些設定該怎麼調整，這裡會把我碰到的問題列出來。

拿挑戰中的這個 SVG 來舉例：

![svg-change-size](images/footer-logo.svg)

- **改變 SVG 的尺寸**

只要用 CSS 直接去選取這個 SVG 來做設定即可：

```html
<img class="logo" src="logo.svg" />
```

```scss
.logo {
  width: 150px;
}
```

- **改變 SVG 的顏色**

我目前知道的做法有兩種：

1. 直接去修改 svg 檔案中的 `fill` 屬性值。

![svg-change-color](README-img/svg-change-color.jpg)

2. 把 svg 檔案寫入 HTML 中，再透過 CSS 來調整`fill`的屬性值。

```html
<svg width="124" height="24" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z"
    fill="#FFF"
    fill-rule="nonzero"
  />
</svg>
```

```scss
svg path {
  fill: pink;
}
```

### nth-child 跟 nth-of-type 的差異

為了做出這個效果：

![reverse](README-img/reverse.jpg)

這裡的想法是去修改**第奇數個項目的元素**，所以會需要用到`nth-child`或`nth-of-type`來實作。

不過在我的案例中，只能用`nth-of-type`來實作，因為我的 HTML 長這樣：

```html
<section class="feature" id="feature">
  <h2 class="hide">Feature</h2>

  <!-- component-feature-card-->
  <div class="feature-card">
    <!-- 以下省略 -->
  </div>

  <div class="feature-card">
    <!-- 以下省略 -->
  </div>

  <div class="feature-card">
    <!-- 以下省略 -->
  </div>
</section>
```

如果我這樣子寫：

```scss
.feature-card:nth-child(odd) {
  ...
}
```

實際會選取到的是：

![nth-child](README-img/nth-child.jpg)

但如果是：

```scss
.feature-card:nth-of-type(odd) {
  ...
}
```

實際會選取到的是：

![nth-of-type](README-img/nth-of-type.jpg)

有一個很重要的地方是，不管是`nth-child`還是`nth-of-type`，**兩者都是從同階層中的標籤來做選取，不是 class**。

而這兩者唯一的差異在於：

- nth-child：同階層中的**所有標籤**
- nth-of-type：同階層中的**相同標籤**

所以下次在使用時要特別注意同階層中的標籤關係。

### 什麼時候該把單位設為%

由於自己做響應式網站的經驗還不算多，所以會分不太清楚什麼時候該使用相對單位，什麼時候該使用絕對單位比較適合，以下是我完成這份挑戰後得出的一些心得：

- 通常會隨著寬度來做改變的區塊，應該要將其`width`設為%。

- 關於文字或區塊之間的 `margin`，`padding` 則要視情況，如果設為%，則當寬度越大的時候，文字或區塊之間的間距也會跟著逐漸變大，所以這部分要自己斟酌。

- 有些區塊的 `padding`，一樣，如果四個邊都有設 `padding`，那就要考慮到，當寬度越寬的時候，這個區塊的內容就會越往裡面推，所以要考慮**內容本身會不會隨著寬度增加而變大**？如果內容本身不會跟著變大的話，那差距就會越來越大。

- 如果希望一個區塊的`width`, `height`會隨著視窗增加的時候，或許就需要設%。

### 更具彈性化的文字設定

可以善用 `max-width / max-height` 來限制文字的最大或最小寬度，來避免當區塊太大或太小時，降低文字的美觀與可讀性，或者是反過來，過多的文字影響到整個區塊的寬度或高度。

範例一：

<font size="2">💡 註：圖片是在寬度`759px`擷取的（手機板的最大寬度）</font>

![max-width](README-img/max-width.jpg)

範例二：

<font size="2">💡 註：圖片是在寬度`759px`擷取的（手機板的最大寬度）</font>

![max-height](README-img/max-height.jpg)

## 特色

### 不限字數的內容

我在部分的內容區塊使用了`max-height`與`overflow`，讓文字內容可以不必有最大字數限制。

![feature-01](README-img/feature-01.gif)

原始碼：

```scss
&content {
  max-height: 400px;
  overflow: auto;
}
```

### 自定義 scrollbar

瀏覽器預設的滾軸似乎不是那麼好看（我覺得啦 😅），所以這部分其實也能透過 CSS 來設定樣式。

![feature-02](README-img/feature-02.jpg)

<font size="2">⚠ 註：此方法僅適用於 Webkit 瀏覽器（Chrome or Safari），若有跨瀏覽器的需求，建議使用 JavaScript。</font>

原始碼：

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

如果想了解更多的話，你也可以參考這個[網站](https://cssdeck.com/labs/css3-webkit-vertical-scrollbars)

## 問題回報

### 圖片使用問題

我發現在圖片設定時，手機板的圖片在約 `500px~760px` 之間的響應效果並不是很好，若改成使用桌機板的圖片能獲得較好的效果。

參考下圖：

<font size="2">💡 註：圖片是在寬度`759px`擷取的（手機板的最大寬度）</font>

![report-01](README-img/report-01.jpg)

### 設計稿中的小瑕疵

只是個小發現，有一部分的文字似乎沒有置中對齊 😂

![report-02](README-img/report-02.jpg)

## 關於作者

- Website - [Jim's blog](https://jubeatt.github.io/)
- Frontend Mentor - [Jim](https://www.frontendmentor.io/profile/jubeatt)
- Facebook - [薛裕正](https://www.facebook.com/profile.php?id=100003593580513)

## 致謝

## 參考資料

[css3-webkit-vertical-scrollbars](https://cssdeck.com/labs/css3-webkit-vertical-scrollbars)  
[BEM by Example](https://sparkbox.com/foundry/bem_by_example)  
[HTML <picture> 響應式圖片 (Responsive Images) - 自動載入不同尺寸和檔案格式的圖片](https://www.fooish.com/html/picture-tag.html)
