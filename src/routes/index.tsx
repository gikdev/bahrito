import { Route, Switch } from "wouter"
import OneThing from "./apps/one-thing"
import SalaryWatch from "./apps/salary-watch"
import Todoly from "./apps/todoly"
import Base from "./base"
import Home from "./home"
import TimeManagement from "./workspaces/time-management"

export default function Routes() {
  return (
    <Base>
      <Switch>
        <Route path="/" component={Home} />

        <Route path="/workspaces/time-management" component={TimeManagement} />

        <Route path="/apps/salary-watch" component={SalaryWatch} />
        <Route path="/apps/todoly" component={Todoly} />
        <Route path="/apps/one-thing" component={OneThing} />

        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Base>
  )
}
