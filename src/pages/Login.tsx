
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is already logged in
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // In a real app, this would be a call to MongoDB using an API
      // For now, we're simulating authentication with local storage
      const userExists = localStorage.getItem(`user_${email}`);
      
      if (!userExists) {
        setIsLoading(false);
        setError("Account not found. Please create an account first.");
        toast({
          title: "Account not found",
          description: "Please create an account first before logging in.",
          variant: "destructive",
        });
        return;
      }

      // Check password (in a real app, would use bcrypt to compare hashed passwords)
      const userData = JSON.parse(userExists);
      
      // In a real app with proper password hashing, we'd use:
      // const passwordMatch = await bcrypt.compare(password, userData.password);
      // Since we're mocking, we'll do a simple check
      
      // Simple check for demo purposes (insecure for real applications)
      if (password !== userData.password) {
        setIsLoading(false);
        setError("Invalid email or password.");
        toast({
          title: "Login failed",
          description: "Invalid email or password.",
          variant: "destructive",
        });
        return;
      }

      // Store logged in user info
      localStorage.setItem("currentUser", JSON.stringify({
        email: userData.email,
        name: userData.name
      }));
      
      console.log("Login successful for:", email);
      setIsLoading(false);
      
      toast({
        title: "Login successful",
        description: "Welcome back to StyleSense!",
      });
      
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setIsLoading(false);
      setError("An error occurred. Please try again.");
      toast({
        title: "Login failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const redirectToSignup = () => {
    navigate("/signup");
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 py-16">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Login to your account</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                  {error}
                  <Button 
                    type="button" 
                    variant="link" 
                    className="text-indigo-600 p-0 h-auto font-medium ml-2"
                    onClick={redirectToSignup}
                  >
                    Create an account
                  </Button>
                </div>
              )}
              
              <div className="space-y-2">
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
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
