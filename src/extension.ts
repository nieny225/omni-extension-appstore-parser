import { OAIBaseComponent, WorkerContext, OmniComponentMacroTypes } from 'mercs_rete';
import gplay from 'google-play-scraper';
import store from 'app-store-scraper';

const NS_OMNI = 'appstore-parser';

// GooglePlayReviewsComponent
let component = OAIBaseComponent.create(NS_OMNI, 'google-play-reviews')
  .fromScratch()
  .set('description', 'Extracts reviews from Google Play Store for a specific application.')
  .set('title', 'Google Play Reviews')
  .set('category', 'Data Extraction')
  .setMethod('X-CUSTOM')
  .setMeta({
    source: {
        summary: 'Extracts reviews from Google Play Store for a specific application.',
        authors: ['Mercenaries.ai Team'],
        links: {
            "Google Play Scraper Github": "https://github.com/facundoolano/google-play-scraper",
            "Google Play Store": "https://play.google.com/store"
        }
    }
})
component
  .addInput(
    component.createInput('appId', 'string')
      .set('description', 'Unique application id for Google Play.')
      .setRequired(true)
      .toOmniIO()
  )
  .addInput(
    component.createInput('lang', 'string')
      .set('description', 'The two letter language code in which to fetch the reviews.')
      .setChoices([
        {"title": "Afrikaans", "value": "af"},
        {"title": "Amharic", "value": "am"},
        {"title": "Bulgarian", "value": "bg"},
        {"title": "Catalan", "value": "ca"},
        {"title": "Chinese (Hong Kong)", "value": "zh-HK"},
        {"title": "Chinese (PRC)", "value": "zh-CN"},
        {"title": "Chinese (Taiwan)", "value": "zh-TW"},
        {"title": "Croatian", "value": "hr"},
        {"title": "Czech", "value": "cs"},
        {"title": "Danish", "value": "da"},
        {"title": "Dutch", "value": "nl"},
        {"title": "English (UK)", "value": "en-GB"},
        {"title": "English (US)", "value": "en-US"},
        {"title": "Estonian", "value": "et"},
        {"title": "Filipino", "value": "fil"},
        {"title": "Finnish", "value": "fi"},
        {"title": "French (Canada)", "value": "fr-CA"},
        {"title": "French (France)", "value": "fr-FR"},
        {"title": "German", "value": "de"},
        {"title": "Greek", "value": "el"},
        {"title": "Hebrew", "value": "he"},
        {"title": "Hindi", "value": "hi"},
        {"title": "Hungarian", "value": "hu"},
        {"title": "Icelandic", "value": "is"},
        {"title": "Indonesian", "value": "id"},
        {"title": "Italian", "value": "it"},
        {"title": "Japanese", "value": "ja"},
        {"title": "Korean", "value": "ko"},
        {"title": "Latvian", "value": "lv"},
        {"title": "Lithuanian", "value": "lt"},
        {"title": "Malay", "value": "ms"},
        {"title": "Norwegian", "value": "no"},
        {"title": "Polish", "value": "pl"},
        {"title": "Portuguese (Brazil)", "value": "pt-BR"},
        {"title": "Portuguese (Portugal)", "value": "pt-PT"},
        {"title": "Romanian", "value": "ro"},
        {"title": "Russian", "value": "ru"},
        {"title": "Serbian", "value": "sr"},
        {"title": "Slovak", "value": "sk"},
        {"title": "Slovenian", "value": "sl"},
        {"title": "Spanish (Latin America)", "value": "es-419"},
        {"title": "Spanish (Spain)", "value": "es-ES"},
        {"title": "Swahili", "value": "sw"},
        {"title": "Swedish", "value": "sv"},
        {"title": "Thai", "value": "th"},
        {"title": "Turkish", "value": "tr"},
        {"title": "Ukrainian", "value": "uk"},
        {"title": "Vietnamese", "value": "vi"},
        {"title": "Zulu", "value": "zu"}
      ], 'en-US')
      .toOmniIO()
  )
  .addInput(
    component.createInput('country', 'string')
      .set('description', 'The two letter country code in which to fetch the reviews.')
      .setChoices(
        [
            {"title": "Albania", "value": "al"},
            {"title": "Algeria", "value": "dz"},
            {"title": "Angola", "value": "ao"},
            {"title": "Antigua and Barbuda", "value": "ag"},
            {"title": "Argentina", "value": "ar"},
            {"title": "Armenia", "value": "am"},
            {"title": "Aruba", "value": "aw"},
            {"title": "Australia", "value": "au"},
            {"title": "Austria", "value": "at"},
            {"title": "Azerbaijan", "value": "az"},
            {"title": "Bahamas", "value": "bs"},
            {"title": "Bahrain", "value": "bh"},
            {"title": "Bangladesh", "value": "bd"},
            {"title": "Belarus", "value": "by"},
            {"title": "Belgium", "value": "be"},
            {"title": "Belize", "value": "bz"},
            {"title": "Benin", "value": "bj"},
            {"title": "Bolivia", "value": "bo"},
            {"title": "Bosnia and Herzegovina", "value": "ba"},
            {"title": "Botswana", "value": "bw"},
            {"title": "Brazil", "value": "br"},
            {"title": "Bulgaria", "value": "bg"},
            {"title": "Burkina", "value": "bf"},
            {"title": "Cambodia", "value": "kh"},
            {"title": "Cameroon", "value": "cm"},
            {"title": "Canada", "value": "ca"},
            {"title": "Cape Verde", "value": "cv"},
            {"title": "Chile", "value": "cl"},
            {"title": "Colombia", "value": "co"},
            {"title": "Costa Rica", "value": "cr"},
            {"title": "Cote d' Ivore", "value": "ci"},
            {"title": "Croatia", "value": "hr"},
            {"title": "Cyprus", "value": "cy"},
            {"title": "Czech Republic", "value": "cz"},
            {"title": "Denmark", "value": "dk"},
            {"title": "Dominican Republic", "value": "do"},
            {"title": "Ecuador", "value": "ec"},
            {"title": "Egypt", "value": "eg"},
            {"title": "El Salvador", "value": "sv"},
            {"title": "Estonia", "value": "ee"},
            {"title": "Fiji", "value": "fj"},
            {"title": "Finland", "value": "fi"},
            {"title": "France", "value": "fr"},
            {"title": "Gabon", "value": "ga"},
            {"title": "Georgia", "value": "ge"},
            {"title": "Germany", "value": "de"},
            {"title": "Ghana", "value": "gh"},
            {"title": "Gibraltar", "value": "gi"},
            {"title": "Greece", "value": "gr"},
            {"title": "Guatemala", "value": "gt"},
            {"title": "Guinea-Bissau", "value": "gw"},
            {"title": "Haiti", "value": "ht"},
            {"title": "Honduras", "value": "hn"},
            {"title": "Hong Kong", "value": "hk"},
            {"title": "Hungary", "value": "hu"},
            {"title": "Iceland", "value": "is"},
            {"title": "India", "value": "in"},
            {"title": "Indonesia", "value": "id"},
            {"title": "Iraq", "value": "iq"},
            {"title": "Ireland", "value": "ie"},
            {"title": "Israel", "value": "il"},
            {"title": "Italy", "value": "it"},
            {"title": "Jamaica", "value": "jm"},
            {"title": "Japan", "value": "jp"},
            {"title": "Jordan", "value": "jo"},
            {"title": "Kazakhstan", "value": "kz"},
            {"title": "Kenya", "value": "ke"},
            {"title": "Kuwait", "value": "kw"},
            {"title": "Kyrgyzstan", "value": "kg"},
            {"title": "Laos", "value": "la"},
            {"title": "Latvia", "value": "lv"},
            {"title": "Lebanon", "value": "lb"},
            {"title": "Liechtenstein", "value": "li"},
            {"title": "Lithuania", "value": "lt"},
            {"title": "Luxembourg", "value": "lu"},
            {"title": "Macau", "value": "mo"},
            {"title": "Macedonia", "value": "mk"},
            {"title": "Malaysia", "value": "my"},
            {"title": "Mali", "value": "ml"},
            {"title": "Malta", "value": "mt"},
            {"title": "Mauritius", "value": "mu"},
            {"title": "Mexico", "value": "mx"},
            {"title": "Moldova", "value": "md"},
            {"title": "Monaco", "value": "mc"},
            {"title": "Morocco", "value": "ma"},
            {"title": "Mozambique", "value": "mz"},
            {"title": "Myanmar", "value": "mm"},
            {"title": "Namibia", "value": "na"},
            {"title": "Nepal", "value": "np"},
            {"title": "Netherlands", "value": "nl"},
            {"title": "Netherlands Antilles", "value": "an"},
            {"title": "New Zealand", "value": "nz"},
            {"title": "Nicaragua", "value": "ni"},
            {"title": "Niger", "value": "ne"},
            {"title": "Nigeria", "value": "ng"},
            {"title": "Norway", "value": "no"},
            {"title": "Oman", "value": "om"},
            {"title": "Pakistan", "value": "pk"},
            {"title": "Panama", "value": "pa"},
            {"title": "Papua New Guinea", "value": "pg"},
            {"title": "Paraguay", "value": "py"},
            {"title": "Peru", "value": "pe"},
            {"title": "Philippines", "value": "ph"},
            {"title": "Poland", "value": "pl"},
            {"title": "Portugal", "value": "pt"},
            {"title": "Qatar", "value": "qa"},
            {"title": "Romania", "value": "ro"},
            {"title": "Russia", "value": "ru"},
            {"title": "Rwanda", "value": "rw"},
            {"title": "San Marino", "value": "sm"},
            {"title": "Saudi Arabia", "value": "sa"},
            {"title": "Senegal", "value": "sn"},
            {"title": "Serbia", "value": "rs"},
            {"title": "Singapore", "value": "sg"},
            {"title": "Slovakia", "value": "sk"},
            {"title": "Slovenia", "value": "si"},
            {"title": "South Africa", "value": "za"},
            {"title": "South Korea", "value": "kr"},
            {"title": "Spain", "value": "es"},
            {"title": "Sri Lanka", "value": "lk"},
            {"title": "Sweden", "value": "se"},
            {"title": "Switzerland", "value": "ch"},
            {"title": "Taiwan", "value": "tw"},
            {"title": "Tajikistan", "value": "tj"},
            {"title": "Tanzania", "value": "tz"},
            {"title": "Thailand", "value": "th"},
            {"title": "Togo", "value": "tg"},
            {"title": "Trinidad and Tobago", "value": "tt"},
            {"title": "Tunisia", "value": "tn"},
            {"title": "Turkey", "value": "tr"},
            {"title": "Turkmenistan", "value": "tm"},
            {"title": "Uganda", "value": "ug"},
            {"title": "Ukraine", "value": "ua"},
            {"title": "United Arab Emirates", "value": "ae"},
            {"title": "United Kingdom", "value": "gb"},
            {"title": "United States", "value": "us"},
            {"title": "Uruguay", "value": "uy"},
            {"title": "Uzbekistan", "value": "uz"},
            {"title": "Venezuela", "value": "ve"},
            {"title": "Vietnam", "value": "vn"},
            {"title": "Yemen", "value": "ye"},
            {"title": "Zambia", "value": "zm"},
            {"title": "Zimbabwe", "value": "zw"}
        ], 'us'
      )
      .toOmniIO()
  )
  .addInput(
    component.createInput('sort', 'string')
      .set('description', 'The way the reviews are going to be sorted.')
      .setChoices([
        { title: 'Newest', value: gplay.sort.NEWEST },
        { title: 'Rating', value: gplay.sort.RATING },
        { title: 'Helpfulness', value: gplay.sort.HELPFULNESS }
      ], gplay.sort.NEWEST)
      .toOmniIO()
  )
  .addInput(
    component.createInput('num', 'integer')
      .set('description', 'Quantity of reviews to be captured.')
      .setDefault(50)
      .toOmniIO()
  )
  .addInput(
    component.createInput('paginate', 'boolean')
      .set('description', 'Defines if the result will be paginated')
      .setDefault(false)
      .toOmniIO()
  )
  .addInput(
    component.createInput('nextPaginationToken', 'string')
      .set('description', 'The next token to paginate')
      .setDefault(null)
      .toOmniIO()
  )
  .addOutput(
    component.createOutput('data', 'array')
      .set('description', 'The reviews data')
      .toOmniIO()
  )
  .addOutput(
    component.createOutput('nextPaginationToken', 'string')
      .set('description', 'The next token to paginate')
      .toOmniIO()
  )
  .setMacro(OmniComponentMacroTypes.EXEC, async (payload: any, ctx: WorkerContext) => {
    const reviews = await gplay.reviews(payload);
    return reviews;
  });
const GooglePlayReviewsComponent = component.toJSON();
// AppleStoreReviewsComponent
component = OAIBaseComponent.create(NS_OMNI, 'apple-store-reviews')
  .fromScratch()
  .set('description', 'Extracts reviews from Apple Store for a specific application.')
  .set('title', 'Apple Store Reviews')
  .set('category', 'Data Extraction')
  .setMethod('X-CUSTOM')
  .setMeta({ 
        "source": {
          "summary": "Extracts reviews from Apple Store for a specific application.",
          links: {
            "App Store Scraper Github": "https://github.com/facundoolano/app-store-scraper",
            "Apple Store": "https://www.apple.com/app-store/"
          }
        }
    })         
component
  .addInput(
    component.createInput('appId', 'string')
      .set('description', 'Unique application id for Apple Store. Either iTune trackId or appId.')
      .setRequired(true)
      .toOmniIO()
  )
  .addInput(
    component.createInput('country', 'string')
      .set('description', 'The two-letter country code to get the reviews from.')
      .setChoices([
        {"title": "Albania", "value": "al"},
        {"title": "Algeria", "value": "dz"},
        {"title": "Angola", "value": "ao"},
        {"title": "Antigua and Barbuda", "value": "ag"},
        {"title": "Argentina", "value": "ar"},
        {"title": "Armenia", "value": "am"},
        {"title": "Aruba", "value": "aw"},
        {"title": "Australia", "value": "au"},
        {"title": "Austria", "value": "at"},
        {"title": "Azerbaijan", "value": "az"},
        {"title": "Bahamas", "value": "bs"},
        {"title": "Bahrain", "value": "bh"},
        {"title": "Bangladesh", "value": "bd"},
        {"title": "Belarus", "value": "by"},
        {"title": "Belgium", "value": "be"},
        {"title": "Belize", "value": "bz"},
        {"title": "Benin", "value": "bj"},
        {"title": "Bolivia", "value": "bo"},
        {"title": "Bosnia and Herzegovina", "value": "ba"},
        {"title": "Botswana", "value": "bw"},
        {"title": "Brazil", "value": "br"},
        {"title": "Bulgaria", "value": "bg"},
        {"title": "Burkina", "value": "bf"},
        {"title": "Cambodia", "value": "kh"},
        {"title": "Cameroon", "value": "cm"},
        {"title": "Canada", "value": "ca"},
        {"title": "Cape Verde", "value": "cv"},
        {"title": "Chile", "value": "cl"},
        {"title": "Colombia", "value": "co"},
        {"title": "Costa Rica", "value": "cr"},
        {"title": "Cote d' Ivore", "value": "ci"},
        {"title": "Croatia", "value": "hr"},
        {"title": "Cyprus", "value": "cy"},
        {"title": "Czech Republic", "value": "cz"},
        {"title": "Denmark", "value": "dk"},
        {"title": "Dominican Republic", "value": "do"},
        {"title": "Ecuador", "value": "ec"},
        {"title": "Egypt", "value": "eg"},
        {"title": "El Salvador", "value": "sv"},
        {"title": "Estonia", "value": "ee"},
        {"title": "Fiji", "value": "fj"},
        {"title": "Finland", "value": "fi"},
        {"title": "France", "value": "fr"},
        {"title": "Gabon", "value": "ga"},
        {"title": "Georgia", "value": "ge"},
        {"title": "Germany", "value": "de"},
        {"title": "Ghana", "value": "gh"},
        {"title": "Gibraltar", "value": "gi"},
        {"title": "Greece", "value": "gr"},
        {"title": "Guatemala", "value": "gt"},
        {"title": "Guinea-Bissau", "value": "gw"},
        {"title": "Haiti", "value": "ht"},
        {"title": "Honduras", "value": "hn"},
        {"title": "Hong Kong", "value": "hk"},
        {"title": "Hungary", "value": "hu"},
        {"title": "Iceland", "value": "is"},
        {"title": "India", "value": "in"},
        {"title": "Indonesia", "value": "id"},
        {"title": "Iraq", "value": "iq"},
        {"title": "Ireland", "value": "ie"},
        {"title": "Israel", "value": "il"},
        {"title": "Italy", "value": "it"},
        {"title": "Jamaica", "value": "jm"},
        {"title": "Japan", "value": "jp"},
        {"title": "Jordan", "value": "jo"},
        {"title": "Kazakhstan", "value": "kz"},
        {"title": "Kenya", "value": "ke"},
        {"title": "Kuwait", "value": "kw"},
        {"title": "Kyrgyzstan", "value": "kg"},
        {"title": "Laos", "value": "la"},
        {"title": "Latvia", "value": "lv"},
        {"title": "Lebanon", "value": "lb"},
        {"title": "Liechtenstein", "value": "li"},
        {"title": "Lithuania", "value": "lt"},
        {"title": "Luxembourg", "value": "lu"},
        {"title": "Macau", "value": "mo"},
        {"title": "Macedonia", "value": "mk"},
        {"title": "Malaysia", "value": "my"},
        {"title": "Mali", "value": "ml"},
        {"title": "Malta", "value": "mt"},
        {"title": "Mauritius", "value": "mu"},
        {"title": "Mexico", "value": "mx"},
        {"title": "Moldova", "value": "md"},
        {"title": "Monaco", "value": "mc"},
        {"title": "Morocco", "value": "ma"},
        {"title": "Mozambique", "value": "mz"},
        {"title": "Myanmar", "value": "mm"},
        {"title": "Namibia", "value": "na"},
        {"title": "Nepal", "value": "np"},
        {"title": "Netherlands", "value": "nl"},
        {"title": "Netherlands Antilles", "value": "an"},
        {"title": "New Zealand", "value": "nz"},
        {"title": "Nicaragua", "value": "ni"},
        {"title": "Niger", "value": "ne"},
        {"title": "Nigeria", "value": "ng"},
        {"title": "Norway", "value": "no"},
        {"title": "Oman", "value": "om"},
        {"title": "Pakistan", "value": "pk"},
        {"title": "Panama", "value": "pa"},
        {"title": "Papua New Guinea", "value": "pg"},
        {"title": "Paraguay", "value": "py"},
        {"title": "Peru", "value": "pe"},
        {"title": "Philippines", "value": "ph"},
        {"title": "Poland", "value": "pl"},
        {"title": "Portugal", "value": "pt"},
        {"title": "Qatar", "value": "qa"},
        {"title": "Romania", "value": "ro"},
        {"title": "Russia", "value": "ru"},
        {"title": "Rwanda", "value": "rw"},
        {"title": "San Marino", "value": "sm"},
        {"title": "Saudi Arabia", "value": "sa"},
        {"title": "Senegal", "value": "sn"},
        {"title": "Serbia", "value": "rs"},
        {"title": "Singapore", "value": "sg"},
        {"title": "Slovakia", "value": "sk"},
        {"title": "Slovenia", "value": "si"},
        {"title": "South Africa", "value": "za"},
        {"title": "South Korea", "value": "kr"},
        {"title": "Spain", "value": "es"},
        {"title": "Sri Lanka", "value": "lk"},
        {"title": "Sweden", "value": "se"},
        {"title": "Switzerland", "value": "ch"},
        {"title": "Taiwan", "value": "tw"},
        {"title": "Tajikistan", "value": "tj"},
        {"title": "Tanzania", "value": "tz"},
        {"title": "Thailand", "value": "th"},
        {"title": "Togo", "value": "tg"},
        {"title": "Trinidad and Tobago", "value": "tt"},
        {"title": "Tunisia", "value": "tn"},
        {"title": "Turkey", "value": "tr"},
        {"title": "Turkmenistan", "value": "tm"},
        {"title": "Uganda", "value": "ug"},
        {"title": "Ukraine", "value": "ua"},
        {"title": "United Arab Emirates", "value": "ae"},
        {"title": "United Kingdom", "value": "gb"},
        {"title": "United States", "value": "us"},
        {"title": "Uruguay", "value": "uy"},
        {"title": "Uzbekistan", "value": "uz"},
        {"title": "Venezuela", "value": "ve"},
        {"title": "Vietnam", "value": "vn"},
        {"title": "Yemen", "value": "ye"},
        {"title": "Zambia", "value": "zm"},
        {"title": "Zimbabwe", "value": "zw"}
        ], 'us')
      .toOmniIO()
  )
  .addInput(
    component.createInput('page', 'integer')
      .set('description', 'The review page number to retrieve. Defaults to 1, maximum allowed is 10.')
      .setDefault(1)
      .setConstraints(1, 10)
      .toOmniIO()
  )
  .addInput(
    component.createInput('sort', 'string')
      .set('description', 'The review sort order.')
      .setChoices([store.sort.RECENT, store.sort.HELPFUL], store.sort.RECENT)
      .toOmniIO()
  )
  .addOutput(
    component.createOutput('data', 'array')
      .set('description', 'The reviews data')
      .toOmniIO()
  )
  .setMacro(OmniComponentMacroTypes.EXEC, async (payload: any, ctx: WorkerContext) => {
    if (!isNaN(payload.appId)) {
        payload.id = parseInt(payload.appId, 10);
        delete payload.appId; // Remove the appId field if it's numeric10742001
    } else {
    // If it's not numeric, it's assumed to be a bundle string and will remain in payload.appId
    }
    const reviews = await store.reviews(payload);
    return reviews;
  });
const AppleStoreReviewsComponent = component.toJSON();

export default {
    createComponents: () => ({
      blocks: [GooglePlayReviewsComponent, AppleStoreReviewsComponent],
      patches: []
    })
}