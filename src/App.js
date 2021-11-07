import BorderRadiusPreview from './app/BorderRadiusPreview'
import PropertiesForm from './app/PropertiesForm'
import './App.css'


function App() {
  return (
    <section>
      <h1>React Border Preview</h1>
      <div className="container">
        <PropertiesForm />
        <BorderRadiusPreview />
      </div>
    </section>
  );
}

export default App;
