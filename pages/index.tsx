import {
  useReactBricksContext,
  PageViewer,
  fetchPage,
  cleanPage,
  types,
} from "react-bricks/frontend";
import Head from "next/head";
import { GetStaticProps } from "next";

import config from "../react-bricks/config";
import Layout from "../components/layout";
import ErrorNoKeys from "../components/errorNoKeys";
import ErrorNoHomePage from "../components/errorNoHomePage";

interface HomeProps {
  page: types.Page;
  error: string;
}

const Home: React.FC<HomeProps> = ({ page, error }) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useReactBricksContext();

  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null;

  return (
    <Layout>
      {pageOk && (
        <>
          <Head>
            <title>Mohammad Ashiqul Islam</title>
            <meta
              name="description"
              content="My name is Ashiqul Islam. I am a .NET developer with experience in both back-end and front-end development."
            />
          </Head>
          <PageViewer page={pageOk} />
        </>
      )}
      {error === "NOKEYS" && <ErrorNoKeys />}
      {error === "NOPAGE" && <ErrorNoHomePage />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: "NOKEYS" } };
  }
  try {
    const page = await fetchPage("home", config.apiKey, context.locale);
    return { props: { page } };
  } catch {
    return { props: { error: "NOPAGE" } };
  }
};

export default Home;
