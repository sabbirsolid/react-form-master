import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import CustomHook from './components/CustomHook/CustomHook'

// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/Form/Form'

function App() {
  const handleSubmitBtn = (data) =>{
    console.log(data);
  }
  const handleUpdateBtn = (data) =>{
    console.log(data);
  }
  return (
    <>
      <h1>Form Details</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHook></CustomHook> */}
      <ReusableForm formTitle='Submit your info' buttonTitle="Submit" handleSubmit={handleSubmitBtn}></ReusableForm>
      <ReusableForm formTitle='Update your info' buttonTitle="Update" handleSubmit={handleUpdateBtn}></ReusableForm>
    </>
  )
}

export default App
