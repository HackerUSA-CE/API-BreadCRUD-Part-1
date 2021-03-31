const React = require('react')
const Default = require('./layouts/Default')
const BreadForm = require('./components/breadForm')

function Edit ({bread, index, title}) {
    return (
      <Default title={title}>
        <BreadForm
          action={`/breads`}
          method="POST"
          title={title}
          bread={bread}
          index={index}
      />
      </Default>
    )
}

module.exports = Edit
