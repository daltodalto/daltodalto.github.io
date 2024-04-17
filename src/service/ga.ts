"use client";

import { GA_ID } from "@/constants/secrete";
import Router from "next/router";
import ReactGA from "react-ga4";

let isGaInit = false;

export async function initGA() {
  if (typeof window === "object" && process.env.NODE_ENV == "production") {
    let error: any;

    try {
      await ReactGA.initialize(GA_ID, {
        testMode: false,
      });
      logPageViews();
    } catch (err) {
      error = err;
    }
    if (!error) {
      isGaInit = true;
    }
  }
}

async function logPageView() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (!isGaInit) {
    await initGA();
  }

  const page = decodeURI(window.location.pathname);
  ReactGA.send({ hitType: "pageview", page });
}

async function logPageViews() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (!isGaInit) {
    await initGA();
  }

  logPageView();

  Router.events.on("routeChangeComplete", () => {
    logPageView();
  });
}

export async function logEventGA(action: string, values: any) {
  if (!isGaInit) {
    await initGA();
  }

  ReactGA.event({
    category: "common",
    action,
    ...values,
  });
}
