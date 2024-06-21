import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/inicio_sesion';
import Tab5 from './pages/registro';
import Tab6 from './pages/sep1_button_1';
import Tab7 from './pages/Sep4_Caract1';
import Tab8 from './pages/Sep4_Caract2';
import Tab9 from './pages/Sep4_Caract3';
import Tab10 from './pages/Sep4_Caract4';
import Tab11 from './pages/Sep3_Opcion1';
import Tab12 from './pages/Sep3_Opcion2';
import Tab13 from './pages/Sep3_Opcion3';
import EditarNoticiasClimaticas from './pages/edit_bd';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1">
            <Tab1 />
          </Route>
          <Route path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab3" />
          </Route>
          <Route path="/inicio_sesion">
            <Tab4 />
          </Route>
          <Route path="/registro">
            <Tab5 />
          </Route>
          <Route path="/sep1_button_1">
            <Tab6 />
          </Route>
          <Route path="/Sep4_Caract1">
            <Tab7 />
          </Route>
          <Route path="/Sep4_Caract2">
            <Tab8 />
          </Route>
          <Route path="/Sep4_Caract3">
            <Tab9 />
          </Route>
          <Route path="/Sep4_Caract4">
            <Tab10 />
          </Route>
          <Route path="/Sep3_Opcion1">
            <Tab11 />
          </Route>
          <Route path="/Sep3_Opcion2">
            <Tab12 />
          </Route>
          <Route path="/Sep3_Opcion3">
            <Tab13 />
          </Route>
          <Route path="/edit_bd">
            <EditarNoticiasClimaticas />
          </Route>

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Caracteristícas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Información</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
