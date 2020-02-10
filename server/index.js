import express from 'express';
import http from 'http';
import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import acceptLanguage from 'accept-language';
import apiVersion1 from './api/api1';
import renderRouterMiddleware from '../iso-middleware/renderRoute';


// Configuration ===============================================================

acceptLanguage.languages(['en', 'de']);
const app = express();
const PORT = process.env.PORT || 3006;
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

// redirect Example
const targetBaseUrl = "https://www.steelscout.com/en-GB";
function handleRedirect( req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}
app.get('/get-quote', handleRedirect);

//app.use(express.static('./build'));
app.use('/', express.static('./build'));

app.use('/api', apiVersion1);

app.use(express.static('./build'));

app.get('/*', renderRouterMiddleware);


  
app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});
