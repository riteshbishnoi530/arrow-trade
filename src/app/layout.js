import "./globals.css";

export const metadata = {
  title: "Arrow Trade",
  description: "Unlock Knowledge with Our Featured Articles",
  openGraph: {
    description: "Unlock Knowledge with Our Featured Articles",
    images: [
      { url: "/meta-image.png", width: 800, height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-loaded="14.1223.0" data-new-gr-c-s-check-loaded="14.1223.0"  data-gr-ext-installed="" className="bg-custom-black">
        {children}

      </body>
    </html>
  );
}
