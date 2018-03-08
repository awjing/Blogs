## 命名约定
>css选择器的命名尽可能直观和简单
- **使用`数字和小写的拉丁文字符`书写 BEM 实体名称。**
- **名字中的每一个单词使用`连字符（-）`分隔开来**
- **关于模块，元素和修饰符的名字信息存储在 CSS 类中**

### 模块的命名
>遵循block-name格式

eg : menu 、 search-form
```html
<div class="menu"></div>
```
```css
.menu {color: red;}
```

### 元素的命名
>元素的命名决定了一个模块属于这个元素，一个元素的名称使用`双下划线（__）`和模块相连

>格式block-name__elem-name

`元素内部嵌套元素不被推荐：block__elem1__elem2（不被推荐）`

eg : 
```html
<div class="menu">
    <span class="menu_item"></span>
</div>
```
```css
.menu__item { color: red; }
```

### 修饰符的命名
>修饰符的命名决定了一个x修饰符属于这个模块或元素，一个修饰的名字使用`一个单下划线（_）`与前面的模块或元素名称相分隔。
- **Boolean类型**
>block-name_modifier_name

>block-name__element-name_modifier-name
- **key-value 类型的修饰符**
>block-name_modifier-name_modifier-value

>block-name__element-name_modifier-name_modifier-value

`一个修饰符不能在它所属的上下文环境之外被使用`

## 可供选择的命名方案
### 双连字符
>block-name__element-name--modifier-name
- **名字全部使用小写**
- **BEM 实体的名称中的每一个单词使用一个连字符分隔**
- **使用双下划线（__）将元素的名称和模块的名称分离开**
- **使用双连字符（--）分隔 Boolean 类型的修饰符**
- **不使用 key-value 类型的修饰符**

### 驼峰命名风格
>MyBlock__SomeElem_modName_modVla

### 无下划线风格
>blockName-elemName--modName--modVal
- **名称使用驼峰命名法书写**
- **元素名称与模块名称使用一个连字符（-）分隔**
- **修饰符使用双连字符（--）与模块或元素分隔**
- **修饰符的名称和值使用双连字符（--）分隔**
