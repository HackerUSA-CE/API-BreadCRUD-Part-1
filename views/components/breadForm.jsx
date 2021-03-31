const React = require('react')

function Form(props) {
  let {title, index=0, bread, action, method } = props
  console.log('foooorrrm');
  if (!bread) {
    bread = {}
    console.log('dis is bread', bread);
  }
  if (!bread.instructions) {
    bread.instructions = [""]
  }
  if (!bread.ingriedients) {
    bread.ingriedients = [""]
  }
  console.log('dis is bread', bread);
  if (!bread.info) {
    bread.info = {}
  }
  return (
    <div className="container form-container">
      <form
        action={action}
        method={method}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={bread.name}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          min="1"
          max="5"
          step="1"
          defaultValue={bread.rating}
        />
        <label htmlFor="flourType">Flour Type</label>
        <input
          type="text"
          name="flourType"
          id="flourType"
          defaultValue={bread.flourType}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={bread.image}
        />
        <label htmlFor="prepTime">Prep Time</label>
        <input
          type="number"
          name="prepTime"
          id="prepTime"
          defaultValue={bread.info.prepTime}
        />
        <label htmlFor="cookTime">Cook Time</label>
        <input
          type="number"
          name="cookTime"
          id="cookTime"
          defaultValue={bread.info.cookTime}
        />
        <label htmlFor="totalTime">Total Time</label>
        <input
          type="number"
          name="totalTime"
          id="totalTime"
          defaultValue={bread.info.totalTime}
        />
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          id="servings"
          defaultValue={bread.info.servings}
        />
        <label htmlFor="yields">Yields</label>
        <input
          type="text"
          name="yields"
          id="yields"
          defaultValue={bread.info.yields}
        />
        <fieldset>
          <label htmlFor="ingredients">Ingredients</label>
          {
            bread.ingredients
            ? bread.ingredients.map(ingredient => {
              return (
                <>
                  <input
                    type="text"
                    name="instructions"
                    id="instructions"
                    defaultValue={ingredient}
                  />

                </>
              )
            })
          : <>
              <input
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  defaultValue={""}
                />
                <br />
                <input
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    defaultValue={""}
                  />
                  <br />
                  <input
                      type="text"
                      name="ingredients"
                      id="ingredients"
                      defaultValue={""}
                    />
          </>
          }
        </fieldset>
        <fieldset>
          <label htmlFor="instructions">Instructions</label>
          {
            bread.instructions
            ? bread.instructions.map(instruction => {
              return (
                <>
                  <textarea
                    type="text"
                    name="instructions"
                    id="instructions"
                    defaultValue={instruction}
                  />
                  <br />
                </>
              )
            })
            : (
              <div>
                <textarea
                  type="text"
                  name="instructions"
                  id="instructions"
                  defaultValue={""}
                ></textarea>
                <br />
                <textarea
                  type="text"
                  name="instructions"
                  id="instructions"
                  defaultValue={" "}
                ></textarea>
                <br />
                <textarea
                  type="text"
                  name="instructions"
                  id="instructions"
                  defaultValue={"  "}
                ></textarea>
              </div>
            )

          }
        </fieldset>

        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultChecked={bread.hasGluten || true}
        />
        <br />
        <input type="submit"/>
      </form>
    </div>
  )
}

module.exports = Form
