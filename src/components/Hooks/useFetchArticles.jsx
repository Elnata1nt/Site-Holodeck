import { useState, useEffect } from 'react';
// import axios from 'axios';

const useFetchArticle = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // const response = await axios.get(`https://312lr4j2-3000.use.devtunnels.ms/api/articles/categories/${category}`);
        const response = [
          {
            "title": "8 tips for using the S Pen on Galaxy Z Fold6 for increased mobile productivity",
            "description": "Creative mobile technologies like Galaxy Z Fold6 and S Pen enable next-level mobile productivity and rewrite the definition of efficiency.",
            "content": "The foldable Samsung Galaxy Z Fold6 tablet display is a bright and expansive workspace to make the most of Samsung’s iconic S Pen on the go. Sold separately, the S Pen Fold Edition and S Pen Pro add precision, versatility and mobile phone productivit... [5723 chars]",
            "url": "https://insights.samsung.com/2024/08/06/8-tips-for-using-the-s-pen-on-galaxy-z-fold6-for-increased-mobile-productivity/",
            "image": "https://s15543.pcdn.co/wp-content/uploads/2024/08/Fold6-productivity.jpg",
            "publishedAt": "2024-08-06T14:27:21Z",
            "source": {
              "name": "Insights by Samsung",
              "url": "https://insights.samsung.com"
            }
          },
          {
            "title": "Vodafone: Clienții Români Vizați de Decizii Speciale Anunțate, ce se dă Gratuit",
            "description": "Vodafone anunță clienții din România cu privire la o decizie specială, iată ce a hotărât să ofere gratuit pentru români și cum putem profita.",
            "content": "Vodafone anunță clienții din România cu privire la o decizie specială, iată ce a hotărât să ofere gratuit pentru români și cum putem profita.\nVodafone surprinde din nou cu o tombolă spectaculoasă, oferind premii care îți taie răsuflarea. Nu rata ocaz... [2080 chars]",
            "url": "https://www.idevice.ro/2024/08/06/vodafone-clientii-romani-vizati-decizii-speciale-anuntate-gratuit-589576/",
            "image": "https://www.idevice.ro/wp-content/uploads/2024/08/Vodafone-Clientii-Romani-Vizati-Decizii-Speciale-Anuntate-Gratuit.jpg",
            "publishedAt": "2024-08-06T14:25:13Z",
            "source": {
              "name": "iDevice.ro",
              "url": "https://www.idevice.ro"
            }
          },
          {
            "title": "Atletas vendem celulares exclusivos das Olimpíadas na internet; confira valores",
            "description": "Patrocinadora presenteou todos os competidores com um celular exclusivo",
            "content": "Os mais de 10 mil atletas olímpicos que estão competindo na França receberam um celular da patrocinadora oficial das Olimpíadas de Paris 2024. Modelos exclusivos foram entregues às estrelas do esporte, com os dispositivos ostentando uma cor dourada b... [302 chars]",
            "url": "https://ge.globo.com/olimpiadas/noticia/2024/08/06/atletas-olimpicos-ganham-celulares-exclusivos-e-vendem-na-internet-confira.ghtml",
            "image": "https://s2-ge.glbimg.com/uU4kCT3ZfGGqyM45rkyFgJsSFmA=/600x0/filters:quality(50)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/r/6/KVoE2oQdWacPV6rMHQqQ/captura-de-tela-2024-08-06-111850.png",
            "publishedAt": "2024-08-06T14:22:55Z",
            "source": {
              "name": "Globo",
              "url": "https://ge.globo.com"
            }
          },
          {
            "title": "Quibi’s epic fall and the future of books",
            "description": "How Quibi managed to launch and close a streaming service within a year and a debate over the future of print and digital books.",
            "content": "The Quibi story is both short and epic. In January 2020, company founder Jeffrey Katzenberg and CEO Meg Whitman were onstage at CES delivering an hour-long presentation on how they were about to upend the entertainment business. They’d developed new ... [1620 chars]",
            "url": "https://www.theverge.com/2024/8/6/24205146/quibi-history-ebooks-future-vergecast",
            "image": "https://cdn.vox-cdn.com/thumbor/aZG-ogKj8SoGmEp07H0bUOmmNjc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25560239/VST_0806_Site.jpg",
            "publishedAt": "2024-08-06T14:02:11Z",
            "source": {
              "name": "The Verge",
              "url": "https://www.theverge.com"
            }
          },
          {
            "title": "Qualcomm Snapdragon 8 Gen 4 bate procesorul Apple A17 Pro în GeekBench Multi Core",
            "description": "Qualcomm a confirmat deja că va ţine un eveniment în octombrie 2024 în Hawaii, unul menit pentru debutul procesorului de flagship Qualcomm Snapdragon 8 Gen 4. Azi vedem o scăpare a sa, iar chipsetul pare a bate procesorul Apple A17 Pro în testul GeekBench",
            "content": "Qualcomm a confirmat deja că va ţine un eveniment în octombrie 2024 în Hawaii, unul menit pentru debutul procesorului de flagship Qualcomm Snapdragon 8 Gen 4. Azi vedem o scăpare a sa, iar chipsetul pare a bate procesorul Apple A17 Pro în testul Geek... [1111 chars]",
            "url": "https://www.mobilissimo.ro/stiri-telefoane/qualcomm-snapdragon-8-gen-4-bate-procesorul-apple-a17-pro",
            "image": "https://images2.mobilissimo.ro/Wou/66b20451f18f8.jpg",
            "publishedAt": "2024-08-06T14:00:01Z",
            "source": {
              "name": "Mobilissimo.ro",
              "url": "https://www.mobilissimo.ro"
            }
          },
          {
            "title": "Google utmanar Apple TV med Google TV Streamer",
            "description": "Ny design och mer kraftfull hårdvara är vad som erbjuds i Googles motsvarighet till Apple TV.",
            "content": "Google TV Streamer är namnet på företagets nya streamingmojäng. Enheten erbjuder en processor som är 22 procent snabbare än i Chromecast med Google TV samt mer arbetsminne och 32 GB lagring för applikationer.\nTV Streamer har ingång för ethernet-kabel... [838 chars]",
            "url": "https://www.sweclockers.com/nyhet/39355-google-utmanar-apple-tv-med-google-tv-streamer",
            "image": "https://www.sweclockers.com/artikel/39355/og-image",
            "publishedAt": "2024-08-06T14:00:00Z",
            "source": {
              "name": "SweClockers",
              "url": "https://www.sweclockers.com"
            }
          },
          {
            "title": "Crypto : MetaFight AirDrop sur Telegram ! Voici la grosse surprise",
            "description": "Découvrez l'airdrop innovant de MetaFight sur Telegram et découvrez la belle surprise qu’elle réserve à la communauté crypto !",
            "content": "16h00 ▪ 3 min de lecture ▪ par La Rédaction C. ▪\nDans le monde dynamique de la crypto, les airdrops sont devenus un moyen populaire pour les projets de récompenser leur communauté et d’attirer de nouveaux utilisateurs. MetaFight, un projet innovant à... [2534 chars]",
            "url": "https://www.cointribune.com/crypto-metafight-airdrop-sur-telegram-voici-la-grosse-surprise/",
            "image": "https://www.cointribune.com/app/uploads/2024/08/metafight-airdrop.jpg?nowebp",
            "publishedAt": "2024-08-06T14:00:00Z",
            "source": {
              "name": "Cointribune",
              "url": "https://www.cointribune.com"
            }
          },
          {
            "title": "Microsoft Confirms Xbox Game Pass August 2024 Wave 1 Lineup",
            "description": "Microsoft has revealed the first batch of games heading to Xbox Game Pass in August 2024.",
            "content": "Microsoft has revealed the first batch of games heading to Xbox Game Pass in August 2024.\nIn an Xbox Wire post, Microsoft confirmed Crash Bandicoot N. Sane Trilogy, Mafia: Definitive Edition, and Creatures of Ava will be added to the subscription ser... [1793 chars]",
            "url": "https://www.ign.com/articles/microsoft-confirms-xbox-game-pass-august-2024-wave-1-lineup",
            "image": "https://assets-prd.ignimgs.com/2020/10/01/crash-1280-1498694180267-1601510804403.jpg?width=1280",
            "publishedAt": "2024-08-06T13:52:24Z",
            "source": {
              "name": "IGN",
              "url": "https://www.ign.com"
            }
          },
          {
            "title": "Sad passing of two-year-old Maebhe",
            "description": "Sad passing of two-year-old Maebhe - News - Roscommon Herald",
            "content": "The death has occurred of two-year-old Maebhe Gorman following her battle with M.L.D, a rare inherited disorder.\nWriting on their gofundmepage which had raised over €34,000 her family stated “It is with the heaviest heart we share the sad news our be... [1602 chars]",
            "url": "https://www.roscommonherald.ie/news/sad-passing-of-two-year-old-maebhe_arid-27700.html",
            "image": "https://www.roscommonherald.ie/cms_media/module_img/7492/3746039_2_org_Maebhe_20Gorman_203.jpg",
            "publishedAt": "2024-08-06T13:51:52Z",
            "source": {
              "name": "Roscommon Herald",
              "url": "https://www.roscommonherald.ie"
            }
          },
          {
            "title": "After nine years, Google's Nest Learning Thermostat gets an AI makeover",
            "description": "After nine long years, Google is finally refreshing the device that gave Nest its name. The company Tuesday announced the launch of the Nest Learning",
            "content": "After nine long years, Google is finally refreshing the device that gave Nest its name. The company Tuesday announced the launch of the Nest Learning Thermostat 4, 13 years after the release of the original and nearly a decade after the Learning Ther... [2625 chars]",
            "url": "https://techcrunch.com/2024/08/06/after-nine-years-googles-nest-learning-thermostat-gets-an-ai-makeover/",
            "image": "https://techcrunch.com/wp-content/uploads/2024/08/Clock-Face-Silver-Nest-Learning-Thermostat-4th-genjpg.jpg?resize=1200,675",
            "publishedAt": "2024-08-06T13:45:56Z",
            "source": {
              "name": "TechCrunch",
              "url": "https://techcrunch.com"
            }
          }
        ]
        setArticles(response);
      } catch (error) {
        setError("Erro ao carregar artigos!");
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchArticles();
    }
  }, [category]);

  return { articles, loading, error };
};

export default useFetchArticle;
