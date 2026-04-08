type SchemaProps = {
  locale: string;
};

export function SchemaJsonLd({ locale }: SchemaProps) {
  const isArabic = locale === "ar";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: isArabic
      ? "الدكتور حسن هاشم أحمد المالكي"
      : "Dr. Hassan Hashem Al-Maliki",
    alternateName: isArabic
      ? "Dr. Hassan Hashem Al-Maliki"
      : "الدكتور حسن هاشم أحمد المالكي",
    description: isArabic
      ? "محامٍ ومستشار قانوني خبير في القانون المالي والتشريعي والترجمة المعتمدة"
      : "Specialist Attorney in Financial Law, Legislative Advisory, and Certified Bilingual Legal Translation",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    telephone: "+966508089886",
    image: "/hassan_profile_pic.png",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: isArabic
        ? "شارع أبوبكر الصديق، رقم المبنى 6677"
        : "Abu Bakr Al-Siddiq Street, Building 6677",
      addressLocality: isArabic ? "جدة" : "Jeddah",
      addressRegion: isArabic ? "حي الشرفية" : "Al-Sharafiyyah",
      postalCode: "23216",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.517202,
      longitude: 39.182590,
    },
    areaServed: [
      {
        "@type": "City",
        name: isArabic ? "جدة" : "Jeddah",
      },
      {
        "@type": "City",
        name: isArabic ? "الرياض" : "Riyadh",
      },
      {
        "@type": "City",
        name: isArabic ? "القصيم" : "Al-Qassim",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
    knowsLanguage: ["ar", "en"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: isArabic ? "رخصة محاماة" : "Attorney Licence",
      recognizedBy: {
        "@type": "Organization",
        name: isArabic
          ? "الهيئة السعودية للمحامين"
          : "Saudi Bar Association",
      },
    },
    sameAs: [
      "https://www.youtube.com/channel/UC_hwMppTwwQxHqwunS7UzBw",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
