const React = require('react')
const Default = require('./layouts/Default')

function Show ({baker}) {
    return (
      <Default>
          <h3>{baker.name}</h3>
          <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <h3>Breads {baker.name} has baked</h3>
          <ul>
            {
                baker.breads.map((bread)=> {
                    return (
                        <li key={bread.id}>
                            {bread.name}
                        </li>
                    )
                })
            }
          </ul>
          <form action={`/bakers/${baker._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
      </Default>
    )
}

module.exports = Show
