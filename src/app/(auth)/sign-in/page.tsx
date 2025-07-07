"use client"; // if using App Router
import { useState } from "react";
import { login } from "@/services/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function CardDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      console.log("Result:", result);

      if (result?.access_token) {
        localStorage.setItem("token", result.access_token);
        setMessage("Login successful!");
        return result;
      } else {
        setMessage("No access token received.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-white/50 dark:bg-neutral-800 text-gray-800 dark:text-gray-200">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="button"
            className="w-full"
            onClick={async () => {
              const result = await handleLogin();
              if (result?.access_token) {
                router.push("/profile");
              }
            }}
          >
            Login
          </Button>

          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
        <p className="mt-2 text-sm">{message}</p>
      </Card>
    </div>
  );
}
