const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        {/* This is a JSX comment */}
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>

        <main className="container override">
        {
          breads.map((bread, index)=> {
            return (
              <section className="card" key={index}>
              <a href={`/breads/${index}`}>
                 <img src={bread.image} alt={bread.name} />
                 <p>{bread.name}</p>
               </a>
              </section>
            )
          })
        }
        </main>
      </Default>
    )
}

module.exports = Index
