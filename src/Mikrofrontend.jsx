import React from "react";
import { QueryClientProvider } from "react-query";
import LanguageProvider from "./utils/LanguageProvider";
import App from "./App";
import queryClient from "./utils/query";
import { initializeAmplitude } from "./utils/amplitude";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <LanguageProvider defaultSprak="nb">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default Mikrofrontend;
