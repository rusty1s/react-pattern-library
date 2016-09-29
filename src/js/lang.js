import cookies from 'cookies-js';

const cookieName =
  'org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE';

const value = cookies.get(cookieName);
if (value) document.documentElement.lang = value;
