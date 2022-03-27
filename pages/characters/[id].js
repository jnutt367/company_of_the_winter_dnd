import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";

import Header from '../../components/Header';
import Container from "../../components/Container";
import Category from '../../components/Category';
import Characters from "../../components/Characters"
import Footer from '../../components/Footer';
import CharacterDetail from "../../components/CharacterDetail";

const CharacterDetails = () => {
    const [character, setCharacter] = useState();
    const { query } = useRouter();

  useEffect(async () => {
    // add your Realm App Id to the .env.local file
    const REALM_APP_ID = "characters-eymql";
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const oneCharacter = await user.functions.getOneCharacter(query.id);
      setCharacter(() => oneCharacter);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      {character && (
        <>
          <Head>
            <title>Character's profile {character.name}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-white w-full min-h-screen">
            <Header />
            <Container>
              <CharacterDetail character={character} />
            </Container>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default CharacterDetails;