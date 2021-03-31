const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index, title}) {
    return (
      <Default title={title}>

        <div className="show-container">

          <div className="image-container">
            <div className="image">
              <img src={bread.image} alt={bread.name}/>
            </div>
            <h4>
            {

              [...Array(5)].map((star, i) => {
                return (
                  (bread.rating ) >  i
                  ? <span>{String.fromCodePoint(9733)}</span>
                  : <span>{String.fromCodePoint(9734)}</span>
                )
              })
            }
            </h4>
            <div className="recipe-info">
              <table>
                <tr><td>Prep Time:</td><td>{bread.info.prepTime}</td></tr>
                <tr><td>Cook Time:</td><td>{bread.info.cookTime}</td></tr>
                <tr><td>Total Time:</td><td>{bread.info.totalTime}</td></tr>
                <tr><td>Servings:</td><td>{bread.info.servings}</td></tr>
                <tr><td>Yields:</td><td>{bread.info.yields}</td></tr>
              </table>
            </div>
          </div>
          <div className="info">
            <h3>{bread.name} Bread</h3>

            <h4>Is made up of {bread.flourType}</h4>
            <p>
              and it
              {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
              }
              have gluten.
            </p>
            <div className="recipe-container">
              <div className="ingredients">
                <ul>
                  {
                    bread.ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}</li>
                    })
                  }
                </ul>
              </div>
              <section className="intstructions">
                <article>
                  {
                    bread.instructions.map(instruction => {
                      return <p key={instruction}>{instruction}</p>
                    })
                  }
                </article>
            </section>
            </div>
           <div className="actions">
              <form action={`/breads/${index}\?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
              </form>
              <a href={`/breads/${index}/edit`}><button>edit</button></a>
            </div>
              <a href="/breads">Back to Index</a>
          </div>
        </div>
      </Default>
    )
}

module.exports = Show
