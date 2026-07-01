import Undangan from "@/components/undangan";
import Head from "next/head";

export default function TamuDetail() {
  const ogImage =
    "https://res.cloudinary.com/l57gpxko/image/upload/f_auto,q_auto:good,dpr_auto,w_800,c_limit/v1782912977/Aqiqah_Tema_Biru_1_3_urvnjw.png";
  const shareUrl = `https://aqiqah.amy.web.id/aqiqah_ahmad_amalia_habibi`;
  const weddingTitle = `Tasyakuran Aqiqah Ahmad Amalia Habibi`;
  const description = `Dengan penuh rasa syukur kepada Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir dan memberikan doa restu dalam acara aqiqah putra kami, Ahmad Amalia Habibi.`;

  return (
    <>
      <Head>
        {/* HTML Meta Tags Standar */}
        <title>{weddingTitle}</title>
        <meta name="description" content={description} />

        {/* Facebook / WhatsApp / Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={weddingTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />

        {/* Twitter Tags (Opsional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={weddingTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <main className="font-sans relative max-w-full w-full min-h-screen max-h-screen overflow-hidden bg-black">
        <Undangan />
      </main>
    </>
  );
}
