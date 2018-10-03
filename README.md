# Pixler

Pixler is converter is pixelating image.

### Demo Page

https://grapgrap.github.io/pixler-demo-page/

## Getting Started

### Installing

#### npm

```
npm install pixler
```

#### yarn

```
yarn add pixler
```

### Example

```
const target: File | string; // target will pixelate. target could image file or image url.
const factor: number; // factor is how much will be pixelated.

pixler.pixelate(target, factor, (result) => {
  // result is pixelated image.
});
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
