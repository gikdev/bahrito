import { Route, Switch } from "wouter"
import Home from "./home"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*">
        <h1>۴۰۴؛ پیدا نشد</h1>
      </Route>
    </Switch>
  )
}
