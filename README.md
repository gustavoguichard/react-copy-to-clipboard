react-copy-to-clipboard
=====================

React component for copying text to clipboard w/o Flash.

### Usage

```
import CopyToClipboard from 'copytoclipboard'

<CopyToClipboard className="btn" value="Copy">
  <p>How much where there's muck there's brass ah'll box thi ears. What's that when it's at ooam tell.</p>
</CopyToClipboard>
```

You must pass a `value` prop for the button text and you can pass any text based html element as children. The component will copy all of the children's text. You can pass any attr on the component call to customize the button, like a `btn` className for instance.

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Inspiration

* [Matt's post](http://updates.html5rocks.com/2015/04/cut-and-copy-commands)