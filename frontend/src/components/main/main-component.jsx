import BicyclesList from "../bicycles-list/bicycles-list-component"
import Form from "../form/form-component"
import Stats from "../stats/stats-component"

function Main() {
  return (
    <main>
      <div className="container container-flex">
        <div className="flex-col1">
        <BicyclesList/>
        </div>
        <hr />
        <div className="flex-col2">
        <Form/>
        <Stats/>
        </div>
      </div>
     </main>
  )
}

export default Main