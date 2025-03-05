import { Route, Switch } from "wouter"
import MiniBrowser from "./apps/mini-browser"
import Notehad from "./apps/notehad"
import OneThing from "./apps/one-thing"
import SalaryWatch from "./apps/salary-watch"
import Todoly from "./apps/todoly"
import Base from "./base"
import Home from "./home"
import Settings from "./settings"
import Work from "./workspaces/work"

export default function Routes() {
  return (
    <Base>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/settings" component={Settings} />

        <Route path="/workspaces/work" component={Work} />

        <Route path="/apps/salary-watch" component={SalaryWatch} />
        <Route path="/apps/todoly" component={Todoly} />
        <Route path="/apps/one-thing" component={OneThing} />
        <Route path="/apps/notehad" component={Notehad} />
        <Route path="/apps/mini-browser" component={MiniBrowser} />

        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Base>
  )
}
