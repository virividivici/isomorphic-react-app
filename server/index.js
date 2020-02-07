import express from 'express';
import logger from 'morgan';

import cookieParser from 'cookie-parser';
import acceptLanguage from 'accept-language';
import renderRouterMiddleware from '../iso-middleware/renderRoute';

// Configuration ===============================================================

acceptLanguage.languages(['en', 'de']);
const PORT = process.env.PORT || 3006;
const app = express();
app.use(logger('short'));


// We are using the accept-language package, which extracts locales from HTTP
// headers and finds the most relevant among the ones supported by your website.
// If none are found, then you’d fall back to the website’s default locale.
// For returning users, we will check the cookie’s value instead.
app.use(cookieParser());

function detectLocale(req) {
  const cookieLocale = req.cookies.locale;
  console.log('cookieLocale' , cookieLocale) ;
  console.log('req.headers[accept-language]' ,  req.headers['accept-language']) ;
  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en';
}

app.use((req, res, next) => {
  const locale = detectLocale(req);
  console.log('locale ====>', locale);

  res.cookie('locale', locale, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600) });
  next();
});

app.use(express.static('./build'));

app.get('/*', renderRouterMiddleware);
  
app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});