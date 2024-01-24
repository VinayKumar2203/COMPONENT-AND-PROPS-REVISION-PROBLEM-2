import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function User({name,age,email}) {
  return (
    <div>
       <h2>User Information</h2>
       <p>name:{name}</p>
       <p>age:{age}</p>
       <p>email:{email}</p>
    </div>
  )
}


function ScoreCard({score}) {
 return (
  <div>
  <h1>Score</h1>
  <h1>Score: {score}</h1>
</div>
 )
}

function ContainerWithBlueBorder({children}) {
  return (
    <div style={{border :'2px solid blue',padding:'10px', margin:'10px'}}>
  {children}

  </div>
  )
}

function Container({children,borderColor}) {
   let ContainerColor={
     border:'1px solid {borderColor}',
     padding:'25px',
     margin:'25px',
   }
  return(
    <div style={ContainerColor}>
       {children}
    </div>
  )
}




function App() {

  return (
    <>
      <ContainerWithBlueBorder>

    <User name='vinay' age={22}  email='vinay@gmail.com'/>
      </ContainerWithBlueBorder>
      <ContainerWithBlueBorder>

    <ScoreCard score={50} />
      </ContainerWithBlueBorder>


      <Container borderColor="red" >
      <User name='vinay' age={22}  email='vinay@gmail.com'/>
      </Container>

      <Container borderColor="green" >
         <p>my name is vinay kumar</p>
      </Container>

      <Container borderColor="black" >
      <ScoreCard score={20}/>
      </Container>
    </>
  )
}

export default App
