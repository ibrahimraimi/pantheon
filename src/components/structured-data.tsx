import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "Product" | "BreadcrumbList";
  data: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Predefined structured data components
export const OrganizationStructuredData = () => (
  <StructuredData
    type="Organization"
    data={{
      name: "Linea Pantheon",
      url: "https://linea.studio21.studio",
      logo: "https://linea.studio21.studio/logo.png",
      description: "Premium fashion and lifestyle e-commerce platform",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "customer service",
        availableLanguage: "English",
      },
      sameAs: [
        "https://facebook.com/lineapantheon",
        "https://instagram.com/lineapantheon",
        "https://twitter.com/lineapantheon",
      ],
    }}
  />
);

export const WebSiteStructuredData = () => (
  <StructuredData
    type="WebSite"
    data={{
      name: "Linea Pantheon",
      url: "https://linea.studio21.studio",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://linea.studio21.studio/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }}
  />
);

export default StructuredData;
