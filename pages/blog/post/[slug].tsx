import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import {
  cleanPage,
  fetchPage,
  fetchPages,
  PageViewer,
  useReactBricksContext,
  types,
} from "react-bricks/frontend";
import ErrorNoKeys from "../../../components/errorNoKeys";
import ErrorNoPage from "../../../components/errorNoPage";
import Layout from "../../../components/layout";
import config from "../../../react-bricks/config";

interface PageProps {
  page: types.Page;
  error: string;
}

const Page: React.FC<PageProps> = ({ page, error }) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useReactBricksContext();
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null;

  return (
    <Layout>
      {pageOk && (
        <>
          <Head>
            <title>{page.meta.title}</title>
            <meta name="description" content={page.meta.description} />
          </Head>
          <PageViewer page={pageOk} />
        </>
      )}
      {error === "NOKEYS" && <ErrorNoKeys />}
      {error === "NOPAGE" && <ErrorNoPage />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: "NOKEYS" } };
  }
  const { slug } = context.params;
  try {
    const page = await fetchPage(
      slug.toString(),
      config.apiKey,
      context.locale
    );
    return { props: { page } };
  } catch {
    return { props: { error: "NOPAGE" } };
  }
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  if (!config.apiKey) {
    return { paths: [], fallback: false };
  }

  const allPages = await fetchPages(config.apiKey, {
    type: "blog",
    pageSize: 1000,
    sort: "-publishedAt",
  });

  const paths = allPages
    .map((page) =>
      page.translations
        .filter(
          (translation) => context.locales.indexOf(translation.language) > -1
        )
        .map((translation) => ({
          params: { slug: translation.slug },
          locale: translation.language,
        }))
    )
    .flat();

  return { paths, fallback: false };
};

export default Page;
