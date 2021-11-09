import React from "react"
import Link from "next/link";
import { useAuth } from "../auth";
import Head from 'next/head';
import firebaseClient from "../firebaseClient";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/auth";


export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>YHack Login-Auth Demo</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold my-4">
          Welcome to{' '} YHack 2021
        </h1>

        <text textAlign="center">{`ID: ${user ? user.uid : "No user signed in"},
        EMAIL: ${user ? user.email : "N/A"}`}</text>

        <div class="flex space-x-4 my-4">
          <button class="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
            <a href="/signup">
              Sign Up
            </a>
          </button>

          <button class="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
            <a href="/login">
              Login
            </a>
          </button>
        </div>
        <button class="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded" onClick={async () => {
          await firebase.auth().signOut();
          window.location.href = "/";
        }}
        >
          Sign Out
        </button>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
