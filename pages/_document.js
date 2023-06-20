import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charset="utf-8" />
        <link
          rel="shortcut icon"
          href="https://decodage-fiscal-netlify.netlify.app//favicon.ico"
        />
        <link
          rel="icon"
          href="https://decodage-fiscal-netlify.netlify.app//favicon.ico"
        />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Site d'informations fiscales et juridiques à but pédagogique, permettant de réaliser des simulations d'impôts."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />

        <title>Decodage-fiscal.fr</title>
        <meta name="author" content="Leo Terrier" />
        <meta
          name="keywords"
          content="decodage, fiscal, fiscalité, freelance, optimisation, impôt, impôts, statut, forme, sociale, juridique, article, revenu, deductible, charge"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://decodage-fiscal-netlify.netlify.app/"
        />
        <meta
          property="og:title"
          content="Simulation d'impôt pour freelance (par statut juridique)"
        />
        <meta
          property="og:description"
          content="Site d'informations fiscales et juridiques à but pédagogique, permettant de réaliser des simulations d'impôts"
        />
        <meta
          property="og:image"
          content="https://decodage-fiscal-netlify.netlify.app//logo-og.png"
        />
        <meta property="og:site_name" content="decodage-fiscal.fr" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
