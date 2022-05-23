## Radio

常用的单选框组件。

### 基础用法

::: demo
```html
<template>
    <div style="display: flex; align-items: center;justify-content: space-around;padding: 16px">
        <wu-radio label="男" value="medium" size="medium" name="medium" checked="true"></wu-radio>
        <wu-radio label="女" value="small" size="small" name="small" checked="true"></wu-radio>
        <wu-radio label="未知" value="mini" size="mini" name="mini" id="miniEvent1"></wu-radio>
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
        <wu-radio label="男" value="medium" name="medium" disabled="true" checked="false"></wu-radio>
    </div>
</template>
<script>
</script>
```
:::

### 边框

::: demo
```html
<template>
    <div style="display: flex; align-items: center;padding: 16px">
        <wu-radio label="男" value="medium" name="medium" border="true" checked="false"></wu-radio>
    </div>
</template>
<script>
</script>
```
:::

### RadioButton

::: demo
```html
<template>
    <div style="display: flex; align-items: center;padding: 16px">
        <wu-radio-button label="button1" value="groupButtonSmall1" size="mini" name="groupTest3"></wu-radio-button>
    </div>
</template>
<script>
</script>
```
:::

### RadioGroup

::: demo
```html
<template>
    <div style="display: flex; align-items: center;padding: 16px">
        <wu-radio-group name="groupTest2" disabled="false" value="groupSmall" style="margin-top: 32px">
            <wu-radio style="margin-right: 16px" border="true" label="groupSmall" value="groupSmall" size="small" name="groupTest2"></wu-radio>
            <wu-radio style="margin-right: 16px" border="true" label="groupMini" value="groupMini" size="small" name="groupTest2"></wu-radio>
        </wu-radio-group>
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
| disabled | 按钮禁用 | Boolean | true、false | false |
| checked | 是否选中 | Boolean | true、false | — |
| border | 是否有边框 | Boolean | true、false | — |
| label | label | String | — |  |
| name | 原生 name | String | — |  |

### Event

| 事件名称      | 说明    | 回调参数 |
|---------- |-------- |---------- |
| change |        组件值修改      |    ({ value }) => void   |
