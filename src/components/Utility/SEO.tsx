import { Helmet } from "react-helmet-async";
import seoSchemaGenerator from "./seoSchemaGenerator";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
  url?: string;
  type?: string;
  includeAllWorks?: boolean;
}

const SEO = ({
  title = "Hugh Stoddart",
  description = "Hugh Stoddart is an accomplished screenwriter with numerous film and television credits. Explore his works, biography, and more.",
  keywords = "Hugh Stoddart, Screenwriter, Screenwriting, Film, Television, Scripts, Writer, Art Critic, Director",
  imageUrl = "/assets/seo-imgs/HS-website-img.png",
  url = "https://hughstoddart.co.uk",
  type = "website",
  includeAllWorks = true,
}: SEOProps) => {
  // Create the URL for the image (ensure it's absolute)
  const absoluteImageUrl = `${url}${imageUrl}`;

  // Generate schema.org JSON-LD data including all works if requested
  const schemaData = includeAllWorks
    ? seoSchemaGenerator(url, absoluteImageUrl)
    : JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Hugh Stoddart",
        jobTitle: "Screenwriter",
        url: url,
        image: absoluteImageUrl,
        sameAs: [
          "https://www.imdb.com/name/nm0831024/?ref_=fn_all_nme_1",
          "https://en.wikipedia.org/wiki/Hugh_Stoddart",
          "https://www.mmu.ac.uk/staff/profile/hugh-stoddart",
          "https://www.rlf.org.uk/writer/hugh-stoddart/",
          "https://swagency105621301.wordpress.com/hugh-stoddart/",
        ],
        description: description,
      });
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Hugh Stoddart" />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{schemaData}</script>
    </Helmet>
  );
};

export default SEO;
