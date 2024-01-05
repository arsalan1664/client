"use client"
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { CarIcon, Github, GithubIcon, Shell } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import Link from "next/link";
import { toast } from "sonner";
import { signup } from "@/app/action/user/register";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Register({ }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    // const [username, setUsername] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [message, setMessage] = useState('');

    async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        console.log({ email, password });
        setMessage("Signing up...");
        const message = await signup(email, password);
        setMessage(message);
        setTimeout(() => {
            setIsLoading(false);
            toast('Login successful')
        }, 3000);

    }
    return (
        <div className="container relative  h-[80vh] flex flex-col items-center justify-center pt-0">

            <div className="p-14">
                {/* UserLogin */}
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
                    <Card className="bg-accent p-4">
                        <CardHeader>
                            {/* AUth containner */}
                            <div className="flex flex-col space-y-2 text-center">
                                <h1 className="text-2xl font-semibold tracking-tight">
                                    Create an account
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    Enter your email below to create your account
                                </p>
                            </div>
                        </CardHeader>
                        {/* UserAuthForm start*/}
                        <CardContent>
                            <div className="grid gap-6">
                                <form onSubmit={HandleSubmit}>
                                    <div className="grid gap-2">
                                        {/* <div className="grid gap-1">
                                            <Label className="" htmlFor="Username">
                                                Username
                                            </Label>
                                            <Input
                                                id="username"
                                                placeholder="Username"
                                                type="text"
                                                autoCapitalize="none"
                                                autoCorrect="off"
                                                disabled={isLoading}
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div> */}
                                        <div className="grid gap-1">
                                            <Label className="" htmlFor="email">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                placeholder="name@example.com"
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
                                            <Label className="" htmlFor="passward">
                                                Passward
                                            </Label>
                                            <Input
                                                id="passward"
                                                placeholder="Passward"
                                                type="password"
                                                autoCapitalize="none"
                                                autoCorrect="off"
                                                disabled={isLoading}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                        <Button disabled={isLoading} className="mt-2">
                                            {isLoading && <Shell className="mr-2 h-4 w-4 animate-spin" />}
                                            Register
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            {/* UserAuthForm ends */}

                            <p className="px-8 text-center text-sm text-muted-foreground mt-2">
                                Already have an account,{" "}
                                <Link href={"/login"}

                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Login
                                </Link>{" "}
                                .
                            </p>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
