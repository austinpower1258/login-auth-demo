import React, { useState } from 'react'
import firebaseClient from "../firebaseClient";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/auth";

export default function Login() {
    firebaseClient();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div class="w-full max-w-xs">
            <h1 className="text-6xl font-bold py-8 px-8">Login</h1>
            <button class="px-8">
                <a href="/">
                    ← Back to home
                </a>
            </button>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="emailAddress"
                        value={email}
                        aria-describedby="email-helper-text"></input>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        id="pass"
                        value={pass}
                        aria-describedby="password-helper-text"></input>
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        disabled={email === "" || pass === ""} onClick={async () => {
                            await firebase.auth().signInWithEmailAndPassword(email, pass).then(function () {
                                window.location.href = "/"
                            }).catch(function (error) {
                                const message = error.message;
                                console.log("error");

                            });
                        }}>
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/signup">
                        Create an account
                    </a>
                </div>
            </form>
        </div>

        // <div class="w-500 p-4 my-12 mx-auto">
        //     <h1>
        //         Login
        //     </h1>

        //     <FormControl isRequired>
        //         <FormLabel htmlFor="email">Email Address</FormLabel>
        //         <Input onChange={(e) => setEmail(e.target.value)}
        //             type="email"
        //             id="emailAddress"
        //             value={email}
        //             aria-describedby="email-helper-text"
        //         ></Input>
        //     </FormControl>
        //     <FormControl isRequired>
        //         <FormLabel htmlFor="password">Password</FormLabel>
        //         <Input onChange={(e) => setEmail(e.target.value)}
        //             type="password"
        //             id="pass"
        //             value={pass}
        //             aria-describedby="password-helper-text"
        //         ></Input>
        //     </FormControl>
        //     <Stack justify="center" mt-6 isInline spacing={10}>
        //         <Button isDisabled={email === "" || pass === ""}
        //             onClick={async () => {
        //                 await firebase.auth().createUserWithEmailAndPassword(email, pass).then(function () {
        //                     window.location.href = "/"
        //                 }).catch(function (error) {
        //                     const message = error.message;

        //                 });
        //             }}>Create Account
        //         </Button>
        //         <Button isDisabled={email === "" || pass === ""}
        //             onClick={async () => {
        //                 await firebase.auth().signInWithEmailAndPassword(email, pass).then(function () {
        //                     window.location.href = "/"
        //                 }).catch(function (error) {
        //                     const message = error.message;

        //                 });
        //             }}>Login
        //         </Button>
        //     </Stack>
        // </div>

    );


}