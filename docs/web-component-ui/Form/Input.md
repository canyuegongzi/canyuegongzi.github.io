## Input

常用的输入框。

### 基础用法

::: demo
```html
<template>
    <div style="display: flex; align-items: center;padding: 16px">
        <wu-input name="setting" size="mini" value="" placeholder="请输入内容"></wu-input>
    </div>
</template>
<script>
</script>
```
:::

### 禁用

::: demo
```html
<template>
    <div style="display: flex; align-items: center;padding: 16px">
        <wu-input name="setting" disabled="true" size="mini" value="" placeholder="请输入内容"></wu-input>
    </div>
</template>
<script>
</script>
```
:::

### Textarea

::: demo
```html
<template>
    <div style="display: flex; align-items: center;padding: 16px">
        <wu-input name="setting" size="mini" type="textarea" value="" placeholder="请输入内容"></wu-input>
    </div>
</template>
<script>
</script>
```
:::

### MaxLength

::: demo
```html
<template>
    <div style="display: flex; align-items: center;padding: 16px">
        <wu-input name="setting" max-length="12" size="mini" type="textarea" value="" placeholder="请输入内容"></wu-input>
    </div>
</template>
<script>
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size | 组件大小 | UISize | medium、small、mini | — |
| clearable | 能否清除 | Boolean | true、false | false |
| placeholder | placeholder | String | — | — |
| maxLength | 最大长度 | Number | — | — |

### Event

| 事件名称      | 说明    | 回调参数 |
|---------- |-------- |---------- |
| change |        组件值修改      |    (event) => void   |
| input |        输入事件      |    (event) => void   |
| focus |        输入框聚焦      |    (event) => void   |
| blur |        输入框失去焦点      |    (event) => void   |
