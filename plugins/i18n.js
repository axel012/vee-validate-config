import en from 'vee-validate/dist/locale/en.json'
import es from 'vee-validate/dist/locale/es.json'
//import gallego from '../lang/gallego.js'

import { localize } from 'vee-validate'


export default function({ app }) {
  localize("en",en)
  localize("es",es)
  //localize(gallego)
  localize(app.i18n.loadedLanguages[0]);
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    localize(newLocale)
  }
}

