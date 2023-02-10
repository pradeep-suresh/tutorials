import { Fragment } from 'react'
import CakeView from './feature/cake/cakeView'
import IcecreamView from './feature/icecream/icecreamView'
import UserView from './feature/user/userView'

import react from 'react'

function App() {
  return (
    <div>
      <h1> Hello World! </h1>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
