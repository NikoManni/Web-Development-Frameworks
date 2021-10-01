import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification';

function App() {
  return (
    <div>

      <Header />
      <NewsNotification topic= "NIMET" body= "Mies sai nimetä itsensä Luciferiksi - perusteli olevansa keski-ikäinen ja harkinneensa asiaa tarkkaan"/>
      <NewsNotification topic= "PÄIVÄN TIMANTTI" body= "Kymmenisen vuotta sitten Lena Nelskylä päätti, että synkistely saa riittää - Syntyi elämänfilosofia, jonka ansiosta hänen arkensa on poikkeuksellisen onnellista"/>
      <NewsNotification topic= "MAINOS" body= "Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!"/>
      <br/>
      <MainSection />
    </div>
  );
}

export default App;
