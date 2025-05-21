import { getAllPosts, getPostBySlug } from "../../../../lib/contentful";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/Footer";
import "../../../app/blog/blog.style.css";

// Pre-generates paths (optional but improves static builds)
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.fields.slug,
    }));
}

export default async function BlogDetail({ params }) {
    const { slug } = await params;
    console.log("Slug:", slug);

    const post = await getPostBySlug(slug);
    if (!post) return <p>Post not found</p>;


    const { title, author, publishedDate, content, coverImage } = post.fields;

    return (
        <>
            <Header />

            <section className="section_1">
                <div className="container">
                    <h1 className="section_text">{title}</h1>
                    <p className="pera_list">
                        {author} • {new Date(publishedDate).toLocaleDateString("en-GB")}
                    </p>
                </div>
            </section>

            <section className="section_log_list">
                <div className="container">
                    <Image
                        src={`https:${coverImage.fields.file.url}`}
                        alt={title}
                        width={800}
                        height={450}
                        style={{ borderRadius: "12px", marginBottom: "40px", width: "100%", objectFit: "cover" }}
                    />
                    <div className="blog-content" style={{ color: "white", lineHeight: "1.8", fontSize: "18px" }}>
                        {documentToReactComponents(content)}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
