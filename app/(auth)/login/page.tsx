"use client"
import { CarIcon, GithubIcon, Linkedin, Mails, MailsIcon, Shell } from "lucide-react";
import React, { FormEvent, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Login({ }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const router = useRouter();
    const { status } = useSession();



    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage('Signing in...');

        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
            }

        } catch (err) {
            console.log(err);
        }

        setMessage(message);
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.refresh();
            router.push('/');
        }
    }, [status]);

    // async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    //     setIsLoading(true);

    //     try {
    //         // Perform your login logic here
    //         console.log({ email, password });

    //         // Simulate an asynchronous operation (replace with your actual login logic)
    //         setTimeout(() => {
    //             setIsLoading(false);
    //             // Handle successful login or show error messages
    //         }, 3000);
    //     } catch (error) {
    //         console.error("An error occurred during login:", error);
    //         setIsLoading(false);
    //         // Handle errors
    //     }
    // }
    return (
        <div className="container relative  h-[90vh] flex flex-col items-center justify-center pt-0">
            {/* <div
                className="absolute left-4 top-4 md:left-8 md:top-8"
            >
                <h1 className="text-2xl">RFID PAKISTAN</h1>
            </div> */}

            <div className="p-14">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
                    <Card className="bg-accent p-4">
                        <CardHeader>
                            <CardTitle>
                                {/* AUth containner */}
                                <div className="flex flex-col space-y-2 text-center">
                                    <h1 className="text-2xl font-semibold tracking-tight">
                                        Login your account
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        Enter your email below to create your account
                                    </p>
                                </div>
                            </CardTitle>
                        </CardHeader>

                        {/* UserAuthForm start*/}
                        <CardContent>
                            <div className="grid gap-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-2">
                                        <div className="grid gap-1">
                                            <Input
                                                id="email"
                                                placeholder="Email.."
                                                type="email"
                                                autoCapitalize="none"
                                                autoComplete="email"
                                                autoCorrect="off"
                                                disabled={isLoading}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid gap-1">
                                            <Input
                                                id="password"
                                                placeholder="Passward.."
                                                type="password"
                                                autoCapitalize="none"
                                                autoComplete="Passward"
                                                autoCorrect="off"
                                                disabled={isLoading}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <Button disabled={isLoading} className="mt-2 mb-4"  >
                                            {isLoading && (
                                                <Shell className="mr-2  h-4 w-4 animate-spin" />
                                            )}
                                            Log In
                                        </Button>

                                        <div className="relative ">
                                            <div className="absolute inset-0 flex items-center">
                                                <span className="w-full border-t" />
                                            </div>
                                            <div className="relative flex justify-center text-xs uppercase">
                                                <span className="bg-background px-2 text-muted-foreground">
                                                    Or continue with
                                                </span>
                                            </div>
                                        </div>


                                        <div className="space-y-2">
                                            <Button className="w-full bg-red-500 hover:bg-red-500/80" variant="outline" type="button" disabled={isLoading}>
                                                {isLoading ? (
                                                    <Shell className="mr-2 h-4 w-4 animate-spin" />
                                                ) : (
                                                    <MailsIcon className="mr-2 h-4 w-4" />
                                                )}{" "}
                                                Continue with Google
                                            </Button>

                                            <Button className="w-full bg-blue-500 hover:bg-blue-500/80" variant="outline" type="button" disabled={isLoading}>
                                                {isLoading ? (
                                                    <Shell className="mr-2 h-4 w-4 animate-spin" />
                                                ) : (
                                                    <Linkedin className="mr-2 h-4 w-4 text-foreground" />
                                                )}{" "}
                                                Continue with Linkedin
                                            </Button>
                                        </div>

                                        <p className="px-8 text-center text-sm text-muted-foreground ">
                                            Dont have an account,{" "}
                                            <Link
                                                href={"/register"}
                                                className="underline underline-offset-4 hover:text-primary"
                                            >
                                                Register
                                            </Link>{" "}
                                            .
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </CardContent>
                        {/* UserAuthForm ends */}
                    </Card>
                </div>
            </div>
        </div>
    );
}