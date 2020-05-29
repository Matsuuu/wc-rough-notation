# WC Rough Notation

A Web Component port of the popular [Rough Notation](https://github.com/pshihn/rough-notation) libary.

### Usage

```html
<wc-rough-notation showOnLoad type="highlight" color="#FF6d00">
  <h2>WC Rough Notation</h2>
</wc-rough-notation>
```

##### Groups

```html
<wc-rough-notation-group id="group-to-show">
  <wc-rough-notation type="highlight" color="lightyellow" order="3">
    <h2>Rough notation group</h2>
  </wc-rough-notation>

  <wc-rough-notation type="underline" color="green" order="1">
    <p>By wrapping multiple rough notation elements into a group,</p>
  </wc-rough-notation>

  <wc-rough-notation order="2">
    <p>you can show them in animating in order</p>
  </wc-rough-notation>
</wc-rough-notation-group>
```

## wc-rough-notation

### Properties

| Property            | Attribute           | Type                           | Default        |
| ------------------- | ------------------- | ------------------------------ | -------------- |
| `animationDelay`    | `animationDelay`    | `number`                       | 0              |
| `animationDuration` | `animationDuration` | `number`                       | 800            |
| `annotation`        | `annotation`        | `RoughAnnotation \| undefined` |                |
| `color`             | `color`             | `string`                       | "currentColor" |
| `noAnimation`       | `noAnimation`       | `boolean`                      | false          |
| `order`             | `order`             | `number`                       | 0              |
| `padding`           | `padding`           | `number`                       | 5              |
| `showOnLoad`        | `showOnLoad`        | `boolean`                      | false          |
| `strokeWidth`       | `strokeWidth`       | `number`                       | 1              |
| `type`              | `type`              | `RoughAnnotationType`          | "underline"    |

### Methods

| Method      | Type          |
| ----------- | ------------- |
| `hide`      | `(): void`    |
| `isShowing` | `(): boolean` |
| `remove`    | `(): void`    |
| `show`      | `(): void`    |

## wc-rough-notation-group

### Properties

| Property             | Attribute            | Type                | Default |
| -------------------- | -------------------- | ------------------- | ------- |
| `annotationElements` | `annotationElements` | `WcRoughNotation[]` | []      |
| `showOnLoad`         | `showOnLoad`         | `boolean`           | false   |

### Methods

| Method | Type       |
| ------ | ---------- |
| `show` | `(): void` |
