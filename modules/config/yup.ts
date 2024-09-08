import * as yup from "yup";


yup.setLocale({
  mixed: {
    default: "Ungültig",
    required: "Dieses Feld ist erforderlich",
    oneOf: "Muss einer der folgenden Werte sein: ${values}",
    notOneOf: "Darf keiner der folgenden Werte sein: ${values}",
    defined: "Muss definiert sein",
    notNull: "Darf nicht null sein",
    notType: "Es müssen nur Zahlen sein",
  },
  string: {
    length: "Muss genau ${length} Zeichen haben",
    min: "Muss mindestens ${min} Zeichen haben",
    max: "Darf höchstens ${max} Zeichen haben",
    email: "Muss eine gültige E-Mail-Adresse sein",
    url: "Muss eine gültige URL sein",
    trim: "Darf keine Leerzeichen am Anfang oder Ende haben",
    lowercase: "Muss in Kleinbuchstaben sein",
    uppercase: "Muss in Großbuchstaben sein",
    matches: 'Muss mit folgendem Muster übereinstimmen: "${regex}"',
  },
  number: {
    min: "Muss größer oder gleich ${min} sein",
    max: "Muss kleiner oder gleich ${max} sein",
    lessThan: "Muss kleiner als ${less} sein",
    moreThan: "Muss größer als ${more} sein",
    positive: "Muss eine positive Zahl sein",
    negative: "Muss eine negative Zahl sein",
    integer: "Muss eine ganze Zahl sein",
  },
  date: {
    min: "Muss nach ${min} sein",
    max: "Muss vor ${max} sein",
  },
  array: {
    min: "Muss mindestens ${min} Elemente haben",
    max: "Darf höchstens ${max} Elemente haben",
  },
});
