import "@/styles/globals.css";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import RootLayout from "./layout";

const publicPages: Array<string> = ["/", "/another"];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);
  return (
    <ClerkProvider {...pageProps}>
      <RootLayout>
        {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
          </>
        )}
      </RootLayout>
    </ClerkProvider>
  );
}
