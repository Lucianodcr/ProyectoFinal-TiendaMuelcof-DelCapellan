import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//Vamos a importar estas dos funciones de la libreria de firebase.

//Estamos trabajando con un objeto con toda nuestra informacion de la cuenta. Aca se incluye la key personal de acceso a la DB.

const firebaseConfig = {
  apiKey: "AIzaSyA2DO3X0K8qe4TQF3505MGTRNoChf8ukLQ",
  authDomain: "tiendamuelcof.firebaseapp.com",
  projectId: "tiendamuelcof",
  storageBucket: "tiendamuelcof.appspot.com",
  messagingSenderId: "927268944692",
  appId: "1:927268944692:web:22c91ddea83fba8feb8361"
};

//Inicializamos Firebase y se pasa la configuracion como argumento. Esto devuelve una instancia de Firebase.
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda la aplicacion.