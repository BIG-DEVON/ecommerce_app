import React from "react";
import { Route, Routes, BrowserRouter as Router. Switch, Link } from "react-router-dom";

const App = () => {
    return(
            <Router>
                <Switch>
                    <Route path="/pay">
                        {/* pay */}
                    </Route>

                    <Route path="/sucess"> 
                    {/* success */}

                     </Route>
                </Switch>
            </Router>
    );
};
export default App;