import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { Images } from "../../constants";

const ArticleDetailPage = () => {
  const breadCrumbsData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Article Title",
      link: "/blog/1",
    },
  ];

  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 ">
        <article className="flex-1 ">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={Images.Post1}
            alt="post details"
          />
          <Link className="/blog?category=selectedCategory">Education</Link>
        </article>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
