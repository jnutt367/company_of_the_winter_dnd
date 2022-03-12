import Head from 'next/head';
import { useState ,useEffect } from 'react';
import * as Realm from 'realm-web';
import Header from '../../components/Header';
import Container from "../../components/Container";
import Characters from '../../components/Characters';
import Character from '../../components/Character';
import Category from '../../components/Category';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
export default function Home() {
    const [characters, setCharacters] = useState([]) 

  useEffect(async () => {
    // cannot figure out WHY my environment variable is not read when I use th .env file for security
    // Will not halt learning for this but will return to figure it out meh!
    const REALM_APP_ID = "characters-eymql";
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allCharacters = await user.functions.getAllCharacters();
      setCharacters(allCharacters);
    } catch(error) {
      console.error(error);
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 py-2">
      <Head>
        <title>RPG Character Creator/Selector</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-black text-white w-full min-h-screen">
     <Header />
     <Container>
      <Category
        category="All Characters"
        categoryCount={`${characters.length} Characters`} />
        <Characters characters={characters} />
        <Pagination />
     </Container>
     <Footer />
     </div> 
    </div>
  );
}