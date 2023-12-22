/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-unescaped-entities */

/* eslint-disable prefer-rest-params */
import PropTypes from 'prop-types';
import './globals.css';

// PROJECT IMPORTS
import ProviderWrapper from 'store/ProviderWrapper';

export const metadata = {
  title: 'Game Development Company | Game Development Services',
  keywords:
    'Game Development Company, Game Development Agency, Game Development Services, Top Game Development Studios, AR VR Game Development Company',
  description:
    'WebMobril Gaming Studios provides game development services to help businesses create engaging mobile gaming apps, & VR/AR gaming experiences.'
};

// ==============================|| ROOT LAYOUT ||============================== //

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="og:site_name" content="Webmobril Gaming Studioz" />
        <meta name="og:region" content="IN" />
        <meta name="og:country-name" content="INDIA" />
        <meta name="language" content="english" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="twitter:card" content="summary_large_image" />

        <meta name="google-site-verification" content="9eGCJK1MENuDP179zo0ZNG81CR7YyueQ8UF6rNWQquo" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NKXGJ4XVZH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NKXGJ4XVZH', {
        page_path: window.location.pathname,
      });
    `
          }}
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          data-tag="font"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          data-tag="font"
        />
      </head>
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node
};
