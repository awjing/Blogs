# CSS命名规范（BEM）
基于组件方式的web开发方法，基本思想是将用户界面分成独立的模块。
## Block（块）
（通常指模块，组件）
>Block 是一个逻辑上和功能上独立的页面组件，等同于网页组件中的部件（等同于网页中的组件）。Block 封装了行为（Javascript）、模板、样式（CSS）和其他实现技术。独立状态的 Block 可供复用，并且促进项目开发和维护。
### 内容
- **模块名称**：描述了它的目的（“它是什么？” —— 菜单或者按钮），而不是它的状态（“它看起来是什么样子？” —— 红色或者大的）。
- **模块不应该影响它所在的环境，这意味着你不应该为模块设置会影响到外部的形状（影响大小的 padding 或边框）和定位**
- **你也不应该在使用 BEM 的时候使用 CSS 标签选择器和 ID 选择器**
- **名称**可以包含拉丁字母、数字、短划线
### 使用
嵌套关系
- **模块与模块之间可以彼此嵌套**
- **你可以有任意级别的嵌套层次**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190802125701648.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVfbG92ZWxvdmU=,size_16,color_FFFFFF,t_70)
```html
<!-- 'head' 模块 -->
<header class="header">
    <!-- 嵌套 'logo' 模块 -->
    <div class="logo"></div>

    <!-- 嵌套 'search-form' 模块 -->
    <form class="search-form"></form>

	<!-- 嵌套 'nav' 模块 -->
    <div class="nav"></form>
</header>
```
###特点
1、嵌套式的构造
>Block 可以被嵌套到任何其他 block 里面去。例如，一个头部 block 可以包含一个 logo、一个搜索表单和一个登录 block。

2、随意放置
>Block 可以在一个页面内任意移动，也可以在页面之间或项目之间移动。Block 作为独立的实体来实现，这使得在页面上改变 block 的位置 并确保其功能和外观一切正常 成为可能。

3、可复用
>一个界面可以包含同一个 block 的几个实例。




## Element（元素）
### 内容
>元素（Element）是一个模块（block）的组成部分，且不能脱离模块单独地被使用。例如，一个菜单项（a menu item ）不会在一个菜单块（a menu block ）范围之外使用，因此它是一个元素（element）。

- **元素名称**：描述了它的目的（用处）（“这是什么？” —— item，text，等等。），而不是它的状态（“什么类型的，或者它看起来是什么样的？” —— 红色，大的，等等。）
- **完整的元素名的结构是 `block-name__element-name`。元素的名字与模块的名字使用`双下划线分隔（__）`**
- **元素名称**可以包含拉丁字母、数字、短划线、下划线
### 使用
1、嵌套关系
- **元素之间可以彼此嵌套**
- **你可以拥有任意层次的嵌套级别**
- **一个元素总是一个模块的一部分，而不是另一个元素的一部分，这意味着`元素的名称不能被定义为 block__elem1__elem2` 这样的层次结构。**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190802130150336.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVfbG92ZWxvdmU=,size_16,color_FFFFFF,t_70)
```html
<!--
     正确的。完整的元素名的结构符合如下模式：
     'block-name__element-name'
 -->
<form class="search-form">
    <div class="search-form__content">
        <input class="search-form__input"/>
        <button class="search-form__button"></button>
    </div>
    <div class="search-form__hot">
        <a class="search-form__hot-word"></a>
        <a class="search-form__hot-word"></a>
    </div>
</form>

 <!--
     不正确的。完整的元素名的结构不符合如下模式：
     'block-name__element-name'
 -->
<form class="search-form">
    <div class="search-form__content">
        <!-- 推荐：'search-form__input' 或者 'search-form__content-input' -->
        <input class="search-form__content__input"/>
        <!-- 推荐：'search-form__button' 或者 'search-form__content-button' -->
        <button class="search-form__content__button"></button>
    </div>
</form>
```
如果在模块名称上定义了命名空间，也要保证元素名称是依赖于模块的（block_elem）。
在 DOM 树中，一个模块可以有元素嵌套结构：
```html
<div class="block">
    <div class="block_elem1">
        <div class="block_elem2">
            <div class="block_elem3"></div>
        </div>
    </div>
</div>
```
在 BEM 的方法论中，这样的模块结构通常表示为一个并列的元素列表：
```css
.block {}
.block_elem1 {}
.block_elem2 {}
.block_elem3 {}
```
你可以在不改变每个单独的元素的情况下改变一个模块的 DOM 结构：
```html
<div class="block">
    <div class="block_elem1">
        <div class="block_elem1"></div>
    </div>
    <div class="block_elem3"></div>
</div>
```
2、组成部分
一个元素总是一个模块的一部分，不可以单独使用
```html
<!-- 正确的。元素都位于 'search-form' 模块内 -->
<!-- 'search-form' 模块 -->
<form class="search-form">
    <!-- 在 'search-form' 模块内的 'input' 元素 -->
    <input class="search-form__input" />
    <!-- 在 'search-form' 模块内的 'button' 元素 -->
    <button class="search-form__button"></button>
</form>

<!-- 不正确的。元素位于 'search-form' 模块的上下文之外 -->
<!-- 'search-form' 模块 -->
<form class="search-block">
</form>

<!-- 在 'search-form' 模块内的 'input' 元素 -->
<input class="search-form__input"/>

<!-- 在 'search-form' 模块内的 'button' 元素 -->
<button class="search-form__button"></button>
```
3、可选性
一个元素是一个可选的模块组件。并不是所有的模块都必须有元素。
```html
<!-- 'search-form' 模块 -->
<div class="search-form">
    <!-- 'input' 模块 -->
    <input class="input"/>

    <!-- 'button' 模块 -->
    <button class="button"></button>
</div>
```
①如果这段代码可能被重用，并且它不依赖于页面上的其他组件，那你应该创建一个模块。

②如果这段代码在没有父实体（模块）的情况下不能使用，那你应该创建一个元素。

③为了简化开发，元素应该被分割成一小部分-子元素。在 BEM 方法论中，你不能创建元素的元素，在这种情况下，你需要创建一个服务模块，而不是创建一个元素。

## Modifier（修饰符）
>Modifier 是一个 BEM 实体，它定义了一个 block 或 element 的外观和行为。
>Modifier 可用也可不用（即不一定要用到 modifier）。
>Modifier 本质上与 HTML 的属性很相似。同一个 block 会因为 modifier 的使用而 看起来与之前有所不同。
>例如，菜单块（the menu block ）的外观可能会因为在它身上用了一个 modifier 而改变。


### 内容
一种用于定义模块和元素的外观，状态和行为的实体。
- **修饰符的名称**：描述了它的外观（“多大？”或者“它的主题是什么？”等等—— `size-s` 或者 `theme-islands`），它的状态（“它与其他有什么不同？” —— `disabled`，`focused`，等等）以及他的行为（“它的行为什么？”或者“它如何响应用户？”——比如 `directions-left-top`）。
- **修饰符的名字与模块或者元素的名字使用`双连字符（--）`**
- **修饰符名称**可以包含拉丁字母、数字短划线、下划线
### 修饰符的类型
1、Boolean
- **当修饰符的存在或不存在是重要的，与它的值无关时使用这种类型的修饰符。比如：disabled。如果一个布尔类型的修饰符是可见的，它的值被假定为 true。**
- **修饰符的全名的结构遵循如下模式：**
- **Modifier（修饰符 ）**
>block-name--modifier-name

>block-name__element-name--modifier-name
```html
<!-- 'search-form' 模块有一个 ‘focused’ 的布尔类型的修饰符 -->
<form class="search-form search-form--focused">
    <input class="search-form__input"/>

    <!-- 'button' 元素有一个 'disabled' 的布尔类型修饰符 -->
    <button class="search-form__button search-form__button--disabled">Search</button>
</form>
```
2、键-值
- **当修饰符的值是重要的使用键值对类型。**
>“一个 islands 设计主题的按钮”：`menu--theme-islands`
- **这种类型的修饰符的全名的结构遵循如下模式：**
>block-name--modifier-name-modifier-value

>block-name__element-name_modifier-name_modifier-value
```html
<!-- The `search-form` 模块有值为 'islands' 的 `theme` 修饰 -->
<form class="search-form search-form--theme-islands">
    <input class="search-form__input">

    <!-- The `button` 元素有值为 'm' 的 `size` 修饰 -->
    <button class="search-form__button search-form__button--size-m">Search</button>
</form>

<!-- 你不能同时使用两个具有不同值的的相同修饰符 -->
<form class="search-form
             search-form--theme-islands
             search-form--theme-lite">

    <input class="search-form__input">

    <button class="search-form__button
                   search-form__button--size-s
                   search-form__button--size-m">
        Search
    </button>
</form>
```
### 使用
一个修饰符不能被单独使用。
- **从 BEM 的角度，一个修饰符不能脱离模块或元素而被使用。一个修饰符应该改变实体的外观，行为或者状态，而不是替换它。**
```html
<!-- 正确的。'search-form' 模块有值为 'islands' 的 'theme' 修饰符 -->
<form class="search-form search-form--theme-islands">
    <input class="search-form__input">

    <button class="search-form__button">Search</button>
</form>

<!-- 不正确的。'search-form' 丢失了 -->
<form class="search-form--theme-islands">
    <input class="search-form__input">

    <button class="search-form__button">Search</button>
</form>
```
混合模式：一种在单一的 DOM 节点上使用不同 BEM 实体的技术

混合模式允许
- **结合多个实体的行为和样式，而不是重复编写代码**
- **在现有代码的基础上创建具有新语义的UI组件**
```html
<!-- 'header' 模块 -->
<div class="header">
    <!--
        将 'header' 模块的 'search-form' 元素与 'search-form' 模块混合在一起使用
    -->
    <div class="search-form header__search-form"></div>
</div>
```
在这个例子中，我们将 header 模块的 search-form 元素与 search-form 模块的行为和样式结合在一起。这种方式允许我们在 header__search-form 元素上设置额外的形状和定位，而 search-form 模块仍然是通用的。因此，我们可以在任何环境中使用模块，因为模块没有指定任何填充。这正是我们可以独立调用模块的原因。

文件系统：在 BEM 方法论中采用的组件概念同样适用于项目的文件结构中。模块、元素和修饰符的实现可以被分在独立的文件中，这意味着，我们单独地使用它们。
- **一个单独的模块对应一个单独的目录**
- **模块和其对应的目录拥有相同的名字。比如， `header` 模块放置在 `header/` 目录中，`menu` 模块放置在 `menu/` 目录中。**
- **一个模块的实现分为单独的文件。比如， `header.css` 和 `header.js`。**
- **模块目录是其元素和修饰所在目录的根目录。**
- **元素目录的名称以`双下划线（__）开始`。比如，`header/__logo/` 和 `menu/__item`。**
- **修饰目录的名称以`单下划线（_）开始`。比如，`header_fixed` 和 `menu/_theme_islands/`。**
- **元素和修饰的实现分为不同的文件。比如，`header__input.js` 和 `header_theme_islands.css`。**
```
search-form/                           # Directory of the search-form

    __input/                           # Subdirectory of the search-form__input
        search-form__input.css         # CSS implementation of the
                                       # search-form__input element
        search-form__input.js          # JavaScript implementation of the
                                       # search-form__input element

    __button/                          # Subdirectory of the search-form__button element
        search-form__button.css
        search-form__button.js

    _theme/                            # Subdirectory of the search-form_theme modifier
        search-form_theme_islands.css  # CSS implementation of the search-form block
                                       # that has the theme modifier with the value
                                       # islands
        search-form_theme_lite.css     # CSS implementation of the search-form block
                                       # that has the theme modifier with the value
                                       # lite

search-form.css                        # CSS implementation of the search-form block
search-form.js                         # JavaScript implementation of the
                                       # search-form block
```
这样的文件结构可以很好地支持我们重用代码。

## BEM entity（BEM 实体）
>Block,element 和 modifier 合起来就被成为 BEM entity。它是一个 既可以用来指代单独的 BEM 实体又可以作为 block、element 和 modifier 的总称的 概念。

## Mix（混合体）
>Mix 是被托管在（being hosted on）一个单独的 DOM 节点上的 不同 BEM 实体（混合而成）的一个实例。

Mix允许我们
- **把几个 BEM 实体的功能（behavior）和样式 组合在一起，同时避免重复代码**
- **在现有的 BEM 实体的基础上 创建语义上的新界面组件。让我们想一下这种 mix 情形：把一个 block 与 另一个 block 的一个 element 组合在一起。**

我们假设，项目里的链接（links）通过一个链接块（a link block）来实现。我们需要把菜单项（menu items ）格式化成链接（links）。这里有几种实现方法：
- **创建一个 可以把菜单项（item）转变成链接（link）的 modifier。实现这样一个 modifier 即必然牵涉到 复制链接块的功能和样式。这样一来就会导致代码重复。**
- **取一个 把一个通用的链接块（link block ）与一个菜单块的一个链接元素（a link element ） 组合在一起的 mix。两个 BEM 实体的混合体（mix）可以让我们不用复制代码，就可以使用链接块的基本链接功能 和 菜单块的 CSS 规则。**
## BEM tree（BEM 树 ）
>BEM tree 是网页结构在 block、element 和 modifier 方面的表示（representation）。这是一个在 DOM 树之上的抽象概念，它描述了 BEM 实体的名称、它们的状态、顺序、嵌套和辅助数据。在现实生活中的项目，BEM tree可以呈现在任何支持树结构的形式（format）中。

一个DOM树
```html
<header class="header">
<img class="logo">
<form class="search-form">
<input type="input">
<button type="button"></button>
</form>
<div class="lang-switcher"></div>
</header>
```
BEM tree
```
header
    ├──logo
    └──search-form
        ├──input
        └──button
    └──lang-switcher
```
在 XML 和 BEMJSON 格式中，该 BEM tree 则是这样的
XML
```
<block:header>
    <block:logo/>
    <block:search-form>
        <block:input/>
        <block:button/>
    </block:search-form>
    <block:lang-switcher/>
</block:header>
```
BEMJSON
```html
{
    block: 'header',
    content : [
        { block : 'logo' },
        {
            block : 'search-form',
            content : [
                { block : 'input' },
                { block : 'button' }
            ]
        },
        { block : 'lang-switcher' }
    ]
}
```
## Block implementation（BEM实现 ）
>Block implementation 是指一组各不相同的 技术，这些技术决定着 BEM 实体以下几方面：
- **行为/功能（behavior）**
- **外观**
- **测试**
- **模板**
- **文档（documentation）**
- **依赖描述**
- **附加数据（例如：图片）**
## Implementation technology（实现技术）
>Implementation technology 是一种用于实现一个 block 的技术。Block 可以用一种或多种技术来实现，例如：
- **行为/功能（behavior）-- JavaScript, CoffeeScript**
- **外观-- CSS, Stylus, Sass**
- **模板-- BEMHTML, BH, Jade, Handlebars, XSL**
- **文档（documentation）-- Markdown, Wiki, XML**

例如，如果一个 block 的外观是用 CSS 来定义的，这意味着 block 是用 CSS 技术实现的。同样地，如果一个 block 的文档是用 Markdown 格式写的，block 就是用 Markdown 技术来实现的。
## Block redefinition（块重定义）
>Block implementation 是指通过在不同的层级上增加新的功能到 block 来修改 block。
## Redifinition level（重定义等级）
>Redefinition level 是指一组 BEM 实体和它们的部分实现。

一个 block 的最终实现 可以被分成 不同的重定义层级。每一个新的层级都会扩展或覆盖原始的 block implementation。最终的结果由 来自所有按照预设的连续的顺序排列的重定义层级的独立的 block implementation technologies 组合而成。
任何 BEM 的实现技术都可以被重新定义。

例如，有一个连接到项目的第三方库。这个库包含现成的 block implementation。该项目指定的 block 保存在一个另一个重定义层级。比方说，我们需要修改这个库里的某一个 block 的外观。这并不需要在库的源代码里修改 block 的 CSS 规则 或者 在项目里复制代码。我们只需在项目里为 那一个 block 创建额外的 CSS 规则。在生成过程中，最终实现将会结合库级别的原有规则和项目级别中新的样式规则。