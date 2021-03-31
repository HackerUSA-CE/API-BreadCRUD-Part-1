const React = require('react')

function Default(props) {
  return (
    <html>
    <head>
      <link rel="shortcut icon" href="/meow_bread.ico" />
      <title>{props.title}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
      <script src="/frontend.js" charSet="utf-8"></script>
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      <div className="wrapper">
      <header>
        <h1><a href="/breads">BreadCRUD</a></h1>
        <h2>{props.title}</h2>
      </header>

        {props.children}
      </div>
      <footer>

      </footer>
    </body>
    </html>
  )
}

module.exports = Default
